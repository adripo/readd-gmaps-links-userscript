// ==UserScript==
// @name         Re-introduce Google Maps Links to Search Page
// @namespace    https://github.com/adripo/readd-gmaps-links-userscript
// @version      1.1.0
// @description  Readds Google Maps link to the search page and makes map thumbnail clickable. Configurable position.
// @author       adripo
// @match        *://*.google.com/*
// @match        *://*.google.ad/*
// @match        *://*.google.ae/*
// @match        *://*.google.com.af/*
// @match        *://*.google.com.ag/*
// @match        *://*.google.al/*
// @match        *://*.google.am/*
// @match        *://*.google.co.ao/*
// @match        *://*.google.com.ar/*
// @match        *://*.google.as/*
// @match        *://*.google.at/*
// @match        *://*.google.com.au/*
// @match        *://*.google.az/*
// @match        *://*.google.ba/*
// @match        *://*.google.com.bd/*
// @match        *://*.google.be/*
// @match        *://*.google.bf/*
// @match        *://*.google.bg/*
// @match        *://*.google.com.bh/*
// @match        *://*.google.bi/*
// @match        *://*.google.bj/*
// @match        *://*.google.com.bn/*
// @match        *://*.google.com.bo/*
// @match        *://*.google.com.br/*
// @match        *://*.google.bs/*
// @match        *://*.google.bt/*
// @match        *://*.google.co.bw/*
// @match        *://*.google.by/*
// @match        *://*.google.com.bz/*
// @match        *://*.google.ca/*
// @match        *://*.google.cd/*
// @match        *://*.google.cf/*
// @match        *://*.google.cg/*
// @match        *://*.google.ch/*
// @match        *://*.google.ci/*
// @match        *://*.google.co.ck/*
// @match        *://*.google.cl/*
// @match        *://*.google.cm/*
// @match        *://*.google.cn/*
// @match        *://*.google.com.co/*
// @match        *://*.google.co.cr/*
// @match        *://*.google.com.cu/*
// @match        *://*.google.cv/*
// @match        *://*.google.com.cy/*
// @match        *://*.google.cz/*
// @match        *://*.google.de/*
// @match        *://*.google.dj/*
// @match        *://*.google.dk/*
// @match        *://*.google.dm/*
// @match        *://*.google.com.do/*
// @match        *://*.google.dz/*
// @match        *://*.google.com.ec/*
// @match        *://*.google.ee/*
// @match        *://*.google.com.eg/*
// @match        *://*.google.es/*
// @match        *://*.google.com.et/*
// @match        *://*.google.fi/*
// @match        *://*.google.com.fj/*
// @match        *://*.google.fm/*
// @match        *://*.google.fr/*
// @match        *://*.google.ga/*
// @match        *://*.google.ge/*
// @match        *://*.google.gg/*
// @match        *://*.google.com.gh/*
// @match        *://*.google.com.gi/*
// @match        *://*.google.gl/*
// @match        *://*.google.gm/*
// @match        *://*.google.gr/*
// @match        *://*.google.com.gt/*
// @match        *://*.google.gy/*
// @match        *://*.google.com.hk/*
// @match        *://*.google.hn/*
// @match        *://*.google.hr/*
// @match        *://*.google.ht/*
// @match        *://*.google.hu/*
// @match        *://*.google.co.id/*
// @match        *://*.google.ie/*
// @match        *://*.google.co.il/*
// @match        *://*.google.im/*
// @match        *://*.google.co.in/*
// @match        *://*.google.iq/*
// @match        *://*.google.is/*
// @match        *://*.google.it/*
// @match        *://*.google.je/*
// @match        *://*.google.com.jm/*
// @match        *://*.google.jo/*
// @match        *://*.google.co.jp/*
// @match        *://*.google.co.ke/*
// @match        *://*.google.com.kh/*
// @match        *://*.google.ki/*
// @match        *://*.google.kg/*
// @match        *://*.google.co.kr/*
// @match        *://*.google.com.kw/*
// @match        *://*.google.kz/*
// @match        *://*.google.la/*
// @match        *://*.google.com.lb/*
// @match        *://*.google.li/*
// @match        *://*.google.lk/*
// @match        *://*.google.co.ls/*
// @match        *://*.google.lt/*
// @match        *://*.google.lu/*
// @match        *://*.google.lv/*
// @match        *://*.google.com.ly/*
// @match        *://*.google.co.ma/*
// @match        *://*.google.md/*
// @match        *://*.google.me/*
// @match        *://*.google.mg/*
// @match        *://*.google.mk/*
// @match        *://*.google.ml/*
// @match        *://*.google.com.mm/*
// @match        *://*.google.mn/*
// @match        *://*.google.com.mt/*
// @match        *://*.google.mu/*
// @match        *://*.google.mv/*
// @match        *://*.google.mw/*
// @match        *://*.google.com.mx/*
// @match        *://*.google.com.my/*
// @match        *://*.google.co.mz/*
// @match        *://*.google.com.na/*
// @match        *://*.google.com.ng/*
// @match        *://*.google.com.ni/*
// @match        *://*.google.ne/*
// @match        *://*.google.nl/*
// @match        *://*.google.no/*
// @match        *://*.google.com.np/*
// @match        *://*.google.nr/*
// @match        *://*.google.nu/*
// @match        *://*.google.co.nz/*
// @match        *://*.google.com.om/*
// @match        *://*.google.com.pa/*
// @match        *://*.google.com.pe/*
// @match        *://*.google.com.pg/*
// @match        *://*.google.com.ph/*
// @match        *://*.google.com.pk/*
// @match        *://*.google.pl/*
// @match        *://*.google.pn/*
// @match        *://*.google.com.pr/*
// @match        *://*.google.ps/*
// @match        *://*.google.pt/*
// @match        *://*.google.com.py/*
// @match        *://*.google.com.qa/*
// @match        *://*.google.ro/*
// @match        *://*.google.ru/*
// @match        *://*.google.rw/*
// @match        *://*.google.com.sa/*
// @match        *://*.google.com.sb/*
// @match        *://*.google.sc/*
// @match        *://*.google.se/*
// @match        *://*.google.com.sg/*
// @match        *://*.google.sh/*
// @match        *://*.google.si/*
// @match        *://*.google.sk/*
// @match        *://*.google.com.sl/*
// @match        *://*.google.sn/*
// @match        *://*.google.so/*
// @match        *://*.google.sm/*
// @match        *://*.google.sr/*
// @match        *://*.google.st/*
// @match        *://*.google.com.sv/*
// @match        *://*.google.td/*
// @match        *://*.google.tg/*
// @match        *://*.google.co.th/*
// @match        *://*.google.com.tj/*
// @match        *://*.google.tl/*
// @match        *://*.google.tm/*
// @match        *://*.google.tn/*
// @match        *://*.google.to/*
// @match        *://*.google.com.tr/*
// @match        *://*.google.tt/*
// @match        *://*.google.com.tw/*
// @match        *://*.google.co.tz/*
// @match        *://*.google.com.ua/*
// @match        *://*.google.co.ug/*
// @match        *://*.google.co.uk/*
// @match        *://*.google.com.uy/*
// @match        *://*.google.co.uz/*
// @match        *://*.google.com.vc/*
// @match        *://*.google.co.ve/*
// @match        *://*.google.co.vi/*
// @match        *://*.google.com.vn/*
// @match        *://*.google.vu/*
// @match        *://*.google.ws/*
// @match        *://*.google.rs/*
// @match        *://*.google.co.za/*
// @match        *://*.google.co.zm/*
// @match        *://*.google.co.zw/*
// @match        *://*.google.cat/*
// @grant        GM_addStyle
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_registerMenuCommand
// @run-at       document-start
// ==/UserScript==

(function () {
    'use strict';

    function isGoogleSearchPage() {
        const hostname = window.location.hostname;
        const pathname = window.location.pathname;

        // Skip non-search Google services
        if (/^(?:mail|drive|docs|calendar|photos|play|news|workspace|contacts|keep|hangouts|meet|chat)\.google\./i.test(hostname)) {
            return false;
        }

        // Search pages, webhp, or root
        return pathname === '/' || pathname.startsWith('/search') || pathname.startsWith('/webhp');
    }

    if (!isGoogleSearchPage()) {
        return;
    }

    const DEFAULTS = {
        overlayPosition: 'bottom-center',
        tabPosition: 3,
        bubblePosition: 'prepend',
        showMapsTab: true,
        showBubbleButton: true,
        makeThumbnailClickable: true,
        makeAddressMapClickable: true,
        makePlacesMapClickable: true,
        makeCountryMapClickable: true
    };

    function getConfig() {
        const config = {};
        for (const key of Object.keys(DEFAULTS)) {
            config[key] = GM_getValue(key, DEFAULTS[key]);
        }
        return config;
    }

    function getPositionStyles(position) {
        const styles = {
            'bottom-left': 'bottom: 8px; left: 8px; right: auto; top: auto;',
            'bottom-center': 'bottom: 8px; left: 50%; right: auto; top: auto; transform: translateX(-50%);',
            'bottom-right': 'bottom: 8px; right: 8px; left: auto; top: auto;',
            'top-left': 'top: 8px; left: 8px; right: auto; bottom: auto;',
            'top-center': 'top: 8px; left: 50%; right: auto; bottom: auto; transform: translateX(-50%);',
            'top-right': 'top: 8px; right: 8px; left: auto; bottom: auto;'
        };
        return styles[position] || styles['bottom-center'];
    }

    GM_addStyle(`
        .open-in-maps-extension-button {
            opacity: 0;
            font-size: 18px;
            position: absolute;
            background-color: #202124;
            text-align: center;
            color: #e8eaed;
            cursor: pointer;
            width: 160px;
            padding: 12px;
            margin: 8px;
            line-height: 24px;
            border-radius: 20px;
            text-decoration: none;
            border: 1px solid #3c4043;
            transition: opacity 0.3s ease;
            z-index: 9999;
            box-sizing: border-box;
        }
        .open-in-maps-extension-button:visited {
            color: #e8eaed;
        }
        .open-in-maps-extension-button:hover {
            background-color: #303134;
            color: #e8eaed;
        }
        .remove-text-underline:hover {
            text-decoration: none !important;
        }
        .gmaps-links-settings-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.5);
            z-index: 999999;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .gmaps-links-settings-modal {
            background: white;
            border-radius: 12px;
            padding: 24px;
            max-width: 480px;
            width: 90%;
            max-height: 80vh;
            overflow-y: auto;
            box-shadow: 0 4px 24px rgba(0,0,0,0.3);
        }
        .gmaps-links-settings-modal h2 {
            margin: 0 0 16px 0;
            font-size: 20px;
            color: #202124;
        }
        .gmaps-links-settings-modal .setting-group {
            margin-bottom: 16px;
        }
        .gmaps-links-settings-modal label {
            display: block;
            font-weight: 600;
            margin-bottom: 4px;
            color: #3c4043;
            font-size: 14px;
        }
        .gmaps-links-settings-modal select,
        .gmaps-links-settings-modal input[type="number"] {
            width: 100%;
            padding: 8px 12px;
            border: 1px solid #dadce0;
            border-radius: 6px;
            font-size: 14px;
            box-sizing: border-box;
        }
        .gmaps-links-settings-modal .toggle-row {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 6px 0;
        }
        .gmaps-links-settings-modal .toggle-row span {
            font-size: 14px;
            color: #3c4043;
        }
        .gmaps-links-settings-modal .toggle-row input[type="checkbox"] {
            width: 18px;
            height: 18px;
            accent-color: #1a73e8;
        }
        .gmaps-links-settings-modal .button-row {
            display: flex;
            gap: 8px;
            margin-top: 20px;
            justify-content: flex-end;
        }
        .gmaps-links-settings-modal button {
            padding: 8px 20px;
            border-radius: 6px;
            font-size: 14px;
            cursor: pointer;
            border: none;
        }
        .gmaps-links-settings-modal .btn-save {
            background: #1a73e8;
            color: white;
        }
        .gmaps-links-settings-modal .btn-save:hover {
            background: #1765cc;
        }
        .gmaps-links-settings-modal .btn-reset {
            background: #f1f3f4;
            color: #3c4043;
        }
        .gmaps-links-settings-modal .btn-reset:hover {
            background: #e8eaed;
        }
    `);

    function getSearchQuery() {
        const urlParams = new URLSearchParams(window.location.search);
        let q = urlParams.get('q');
        if (!q) {
            const input = document.querySelector('textarea[name="q"], input[name="q"]');
            if (input && input.value) {
                q = input.value;
            }
        }
        return q || '';
    }

    function buildMapsLink() {
        const query = getSearchQuery();
        const currentUrl = new URL(window.location.href);
        const hostname = currentUrl.hostname;
        const mapsHostname = hostname.startsWith('www.') ? hostname.replace('www.', 'maps.') : `maps.${hostname}`;
        const mapsUrl = new URL(`${currentUrl.protocol}//${mapsHostname}/maps`);
        if (query) {
            mapsUrl.searchParams.set('q', query);
        }
        return mapsUrl.toString();
    }

    function hasMapTabAlreadyDisplayed(tabsContainer) {
        if (tabsContainer.querySelector('[data-gmaps-link="tab"]')) return true;
        const links = tabsContainer.getElementsByTagName('a');
        for (let i = 0; i < links.length; i++) {
            if (links[i].href.includes('/maps')) {
                return true;
            }
        }
        return false;
    }

    function addMapsTab(config) {
        if (!config.showMapsTab) return false;

        const tabsContainer = document.querySelector('.beZ0tf, div[role="navigation"] [role="list"], #hdtb-sc .hdtb-mbs, #hdtb-ms');
        if (!tabsContainer || hasMapTabAlreadyDisplayed(tabsContainer)) return false;

        const tabButtonWrapper = document.createElement('div');
        tabButtonWrapper.role = 'listitem';
        tabButtonWrapper.setAttribute('data-gmaps-link-wrapper', 'tab');

        const tabsButton = document.createElement('a');
        tabsButton.setAttribute('data-gmaps-link', 'tab');
        tabsButton.classList.add('C6AK7c', 'remove-text-underline');
        tabsButton.href = buildMapsLink();

        const innerDiv = document.createElement('div');
        innerDiv.classList.add('mXwfNd');

        const mapSpan = document.createElement('span');
        mapSpan.classList.add('R1QWuf');
        mapSpan.textContent = 'Open in Maps';

        innerDiv.appendChild(mapSpan);
        tabsButton.appendChild(innerDiv);
        tabButtonWrapper.appendChild(tabsButton);

        const children = tabsContainer.children;
        const insertIndex = Math.min(config.tabPosition - 1, children.length);
        if (children.length >= insertIndex && insertIndex > 0) {
            tabsContainer.insertBefore(tabButtonWrapper, children[insertIndex]);
        } else {
            tabsContainer.appendChild(tabButtonWrapper);
        }
        return true;
    }

    function addBubbleButton(config, alreadyAdded) {
        if (!config.showBubbleButton || alreadyAdded) return;

        const buttonContainer = document.querySelector('.IUOThf, .crJ18e, div[role="navigation"] .O679Sc');
        if (!buttonContainer || buttonContainer.querySelector('[data-gmaps-link="bubble"]')) return;

        const mapsButton = document.createElement('a');
        mapsButton.setAttribute('data-gmaps-link', 'bubble');
        mapsButton.classList.add('nPDzT', 'T3FoJb');
        mapsButton.href = buildMapsLink();

        const mapDiv = document.createElement('div');
        mapDiv.setAttribute('jsname', 'bVqjv');
        mapDiv.classList.add('GKS7s');

        const mapSpan = document.createElement('span');
        mapSpan.classList.add('FMKtTb', 'UqcIvb');
        mapSpan.setAttribute('jsname', 'pIvPIe');
        mapSpan.textContent = 'Maps';

        mapDiv.appendChild(mapSpan);
        mapsButton.appendChild(mapDiv);

        if (config.bubblePosition === 'append') {
            buttonContainer.appendChild(mapsButton);
        } else {
            buttonContainer.prepend(mapsButton);
        }
    }

    function makeThumbnailClickable(config) {
        if (!config.makeThumbnailClickable) return;

        const smallMapThumbnailSelectors = [
            '.lu-fs',
            '.V1GY4c',
            '[data-attrid*="image:map"]',
            '[data-hveid] img[src*="google.com/maps"]'
        ];

        for (const selector of smallMapThumbnailSelectors) {
            const elements = document.querySelectorAll(selector);
            elements.forEach((element) => {
                if (element.dataset.gmapsProcessed) return;

                const parentAnchor = element.closest('a');
                if (parentAnchor) {
                    parentAnchor.href = buildMapsLink();
                    parentAnchor.setAttribute('data-gmaps-link', 'thumbnail');
                } else if (element.parentNode) {
                    const wrapperLink = document.createElement('a');
                    wrapperLink.href = buildMapsLink();
                    wrapperLink.setAttribute('data-gmaps-link', 'thumbnail');
                    element.parentNode.insertBefore(wrapperLink, element);
                    wrapperLink.appendChild(element);
                }
                element.dataset.gmapsProcessed = 'true';
            });
        }
    }

    function addOverlayButton(config, container) {
        if (!container || container.querySelector('[data-gmaps-link="overlay"]')) return;

        const mapWrapperLinkEl = document.createElement('a');
        mapWrapperLinkEl.textContent = 'Open in Maps';
        mapWrapperLinkEl.classList.add('open-in-maps-extension-button');
        mapWrapperLinkEl.setAttribute('data-gmaps-link', 'overlay');
        mapWrapperLinkEl.href = buildMapsLink();

        container.style.position = 'relative';
        mapWrapperLinkEl.style.cssText = getPositionStyles(config.overlayPosition);

        container.appendChild(mapWrapperLinkEl);
        requestAnimationFrame(() => {
            mapWrapperLinkEl.style.opacity = '1';
        });
    }

    function updateAllMapLinks() {
        const link = buildMapsLink();
        document.querySelectorAll('a[data-gmaps-link]').forEach((el) => {
            el.href = link;
        });
    }

    function hookHistoryEvents(callback) {
        const wrapMethod = (name) => {
            const original = history[name];
            return function (...args) {
                const result = original.apply(this, args);
                callback();
                return result;
            };
        };
        history.pushState = wrapMethod('pushState');
        history.replaceState = wrapMethod('replaceState');
        window.addEventListener('popstate', callback);
    }

    function applyAll(config) {
        const alreadyAdded = addMapsTab(config);
        addBubbleButton(config, alreadyAdded);
        makeThumbnailClickable(config);

        if (config.makeAddressMapClickable) {
            addOverlayButton(config, document.querySelector('.lu_map_section, [data-attrid="kc:/location/location:map"]'));
        }
        if (config.makePlacesMapClickable) {
            addOverlayButton(config, document.querySelector('.S7dMR'));
        }
        if (config.makeCountryMapClickable) {
            addOverlayButton(config, document.querySelector('.zMVLkf'));
        }
    }

    function init() {
        const config = getConfig();

        // Immediate application
        applyAll(config);

        // Continuous DOM observer to inject elements on-the-fly before first paint
        let rafId = null;
        const observer = new MutationObserver(() => {
            if (rafId) return;
            rafId = requestAnimationFrame(() => {
                applyAll(config);
                rafId = null;
            });
        });

        observer.observe(document.documentElement || document, {
            childList: true,
            subtree: true
        });

        // Listen for SPA navigation and query updates
        hookHistoryEvents(() => {
            updateAllMapLinks();
            applyAll(config);
        });

        window.addEventListener('load', () => {
            setTimeout(() => {
                applyAll(config);
            }, 1000);
        });
    }

    function openSettings() {
        const config = getConfig();

        const overlay = document.createElement('div');
        overlay.className = 'gmaps-links-settings-overlay';

        const modal = document.createElement('div');
        modal.className = 'gmaps-links-settings-modal';

        const positionOptions = [
            ['bottom-left', 'Bottom Left'],
            ['bottom-center', 'Bottom Center'],
            ['bottom-right', 'Bottom Right'],
            ['top-left', 'Top Left'],
            ['top-center', 'Top Center'],
            ['top-right', 'Top Right']
        ];

        const featureOptions = [
            ['showMapsTab', 'Show "Open in Maps" tab'],
            ['showBubbleButton', 'Show round "Maps" bubble button'],
            ['makeThumbnailClickable', 'Make small map thumbnail clickable'],
            ['makeAddressMapClickable', 'Make address map clickable'],
            ['makePlacesMapClickable', 'Make places map clickable'],
            ['makeCountryMapClickable', 'Make country map clickable']
        ];

        let html = '<h2>Google Maps Links Settings</h2>';

        html += '<div class="setting-group">';
        html += '<label>Overlay button position</label>';
        html += '<select id="gmaps-setting-overlayPosition">';
        for (const [value, label] of positionOptions) {
            html += `<option value="${value}"${config.overlayPosition === value ? ' selected' : ''}>${label}</option>`;
        }
        html += '</select></div>';

        html += '<div class="setting-group">';
        html += '<label>Maps tab position (1-based index)</label>';
        html += `<input type="number" id="gmaps-setting-tabPosition" min="1" max="20" value="${config.tabPosition}">`;
        html += '</div>';

        html += '<div class="setting-group">';
        html += '<label>Bubble button position</label>';
        html += '<select id="gmaps-setting-bubblePosition">';
        html += `<option value="prepend"${config.bubblePosition === 'prepend' ? ' selected' : ''}>Start of button row (prepend)</option>`;
        html += `<option value="append"${config.bubblePosition === 'append' ? ' selected' : ''}>End of button row (append)</option>`;
        html += '</select></div>';

        html += '<div class="setting-group"><label>Features</label>';
        for (const [key, label] of featureOptions) {
            html += '<div class="toggle-row">';
            html += `<span>${label}</span>`;
            html += `<input type="checkbox" id="gmaps-setting-${key}"${config[key] ? ' checked' : ''}>`;
            html += '</div>';
        }
        html += '</div>';

        html += '<div class="button-row">';
        html += '<button class="btn-reset" id="gmaps-settings-reset">Reset to defaults</button>';
        html += '<button class="btn-save" id="gmaps-settings-save">Save</button>';
        html += '</div>';

        modal.innerHTML = html;
        overlay.appendChild(modal);
        document.body.appendChild(overlay);

        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) overlay.remove();
        });

        document.getElementById('gmaps-settings-save').addEventListener('click', () => {
            const newConfig = {
                overlayPosition: document.getElementById('gmaps-setting-overlayPosition').value,
                tabPosition: parseInt(document.getElementById('gmaps-setting-tabPosition').value, 10) || 3,
                bubblePosition: document.getElementById('gmaps-setting-bubblePosition').value,
                showMapsTab: document.getElementById('gmaps-setting-showMapsTab').checked,
                showBubbleButton: document.getElementById('gmaps-setting-showBubbleButton').checked,
                makeThumbnailClickable: document.getElementById('gmaps-setting-makeThumbnailClickable').checked,
                makeAddressMapClickable: document.getElementById('gmaps-setting-makeAddressMapClickable').checked,
                makePlacesMapClickable: document.getElementById('gmaps-setting-makePlacesMapClickable').checked,
                makeCountryMapClickable: document.getElementById('gmaps-setting-makeCountryMapClickable').checked
            };

            for (const [key, value] of Object.entries(newConfig)) {
                GM_setValue(key, value);
            }

            overlay.remove();
            alert('Settings saved. Refresh the page to apply changes.');
        });

        document.getElementById('gmaps-settings-reset').addEventListener('click', () => {
            for (const [key, value] of Object.entries(DEFAULTS)) {
                GM_setValue(key, value);
            }
            overlay.remove();
            alert('Settings reset to defaults. Refresh the page to apply changes.');
        });
    }

    GM_registerMenuCommand('Configure Google Maps Links', openSettings);

    init();
})();
