const fs = require('fs');
const { execSync } = require('child_process');

const file = 'readd-gmaps-links.user.js';
if (!fs.existsSync(file)) {
  console.error(`File ${file} not found`);
  process.exit(1);
}

const content = fs.readFileSync(file, 'utf8');
const versionMatch = content.match(/@version\s+([0-9]+\.[0-9]+\.[0-9]+)/);
if (!versionMatch) {
  console.error(`Could not find @version in ${file}`);
  process.exit(1);
}

const currentFileVer = versionMatch[1];
console.log(`Current version in ${file}: ${currentFileVer}`);

let latestTag = '';
try {
  latestTag = execSync('git describe --tags --abbrev=0', { encoding: 'utf8' }).trim();
} catch (e) {
  latestTag = '';
}
console.log(`Latest git tag found: ${latestTag || '(none)'}`);

const latestTagVer = latestTag.replace(/^v/, '');

let targetVer = currentFileVer;
let wasBumped = false;

// If the file version is already greater than the latest tag, the user bumped it manually.
// If the file version is equal to or older than the latest tag, auto-bump it!
if (latestTag && currentFileVer === latestTagVer) {
  let bumpType = 'patch';
  try {
    const commitMsg = execSync('git log -1 --pretty=%B', { encoding: 'utf8' }).trim();
    if (/BREAKING CHANGE|^[a-z]+(\([a-z0-9_-]+\))?!:/i.test(commitMsg)) {
      bumpType = 'major';
    } else if (/^feat(\([a-z0-9_-]+\))?:/i.test(commitMsg)) {
      bumpType = 'minor';
    }
  } catch (e) {
    bumpType = 'patch';
  }

  const parts = currentFileVer.split('.').map(Number);
  if (bumpType === 'major') {
    parts[0] += 1;
    parts[1] = 0;
    parts[2] = 0;
  } else if (bumpType === 'minor') {
    parts[1] += 1;
    parts[2] = 0;
  } else {
    parts[2] += 1;
  }

  targetVer = parts.join('.');
  console.log(`Auto-bumping (${bumpType}) from ${currentFileVer} to ${targetVer}`);

  const updatedContent = content.replace(
    /(@version\s+)[0-9]+\.[0-9]+\.[0-9]+/,
    `$1${targetVer}`
  );
  fs.writeFileSync(file, updatedContent, 'utf8');
  wasBumped = true;
} else {
  console.log(`Using existing version from file: ${targetVer}`);
}

if (process.env.GITHUB_OUTPUT) {
  fs.appendFileSync(process.env.GITHUB_OUTPUT, `version=${targetVer}\nwas_bumped=${wasBumped}\n`);
}
