# Re-introduce Google Maps Links — Violentmonkey Userscript

This is the Violentmonkey userscript version of the [Re-introduce Google Maps Links to Search Page](https://github.com/mrakowski0/readd-gmaps-links-chrome-extension) Chrome extension.

## Installation

1. Install [Violentmonkey](https://violentmonkey.github.io/) (or a compatible userscript manager like Tampermonkey).
2. Click the link below to install the userscript:
   - [readd-gmaps-links.user.js](https://github.com/adripo/readd-gmaps-links-userscript/releases/latest/download/readd-gmaps-links.user.js)
3. Confirm the installation prompt.

## Features

- Re-adds an **"Open in Maps" tab** in the top navigation bar of Google Search results
- Re-adds a **round "Maps" bubble button** in the filter row below the search input
- Makes the **small map thumbnail** (right-side gallery) clickable
- Makes the **address map** clickable with an "Open in Maps" overlay button
- Makes the **places map** clickable with an "Open in Maps" overlay button
- Makes the **country map** clickable with an "Open in Maps" overlay button

## Configuration

Click the Violentmonkey icon in your browser toolbar → **"Configure Google Maps Links"** to open the settings panel.

### Settings

| Setting | Description | Options | Default |
|---------|-------------|---------|---------|
| **Overlay button position** | Where the "Open in Maps" button appears on map overlays | Bottom Left, Bottom Center, Bottom Right, Top Left, Top Center, Top Right | Bottom Center |
| **Maps tab position** | The 1-based index where the Maps tab is inserted in the tab bar | 1–20 | 3 |
| **Bubble button position** | Whether the round Maps button is placed at the start or end of the button row | Prepend (start), Append (end) | Prepend |
| **Show "Open in Maps" tab** | Toggle the Maps tab on/off | On/Off | On |
| **Show round "Maps" bubble button** | Toggle the bubble button on/off | On/Off | On |
| **Make small map thumbnail clickable** | Toggle thumbnail clickability | On/Off | On |
| **Make address map clickable** | Toggle address map overlay button | On/Off | On |
| **Make places map clickable** | Toggle places map overlay button | On/Off | On |
| **Make country map clickable** | Toggle country map overlay button | On/Off | On |

After saving settings, **refresh the page** to apply changes.

## How It Works

The script runs on all Google Search pages across all Google TLDs (google.com, google.co.uk, google.de, google.fr, etc.). It:

1. Builds a `https://maps.{tld}/maps?q={query}` URL from the current search query
2. Injects UI elements using Google's own CSS classes so they look native
3. Uses configurable positioning to avoid overlapping with existing Google UI elements

## Differences from the Chrome Extension

| Aspect | Chrome Extension | Userscript |
|--------|-----------------|------------|
| Installation | Chrome Web Store | Violentmonkey / Tampermonkey |
| Position config | Hardcoded | User-configurable via settings panel |
| Popup | Informational popup | Settings via menu command |
| CSS injection | Separate CSS file | `GM_addStyle()` |
| Updates | Auto via Chrome Web Store | Auto via userscript manager |

## License

MIT — see [LICENSE](LICENSE)
