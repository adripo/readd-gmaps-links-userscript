// ==UserScript==
// @name         Re-introduce Google Maps Links to Search Page
// @namespace    https://github.com/adripo/readd-gmaps-links-userscript
// @version      1.1.2
// @description  Readds Google Maps link to the search page and makes map thumbnail clickable. Configurable position.
// @author       adripo
// @license      MIT
// @homepageURL  https://github.com/adripo/readd-gmaps-links-userscript
// @supportURL   https://github.com/adripo/readd-gmaps-links-userscript/issues
// @updateURL    https://github.com/adripo/readd-gmaps-links-userscript/releases/latest/download/readd-gmaps-links.user.js
// @downloadURL  https://github.com/adripo/readd-gmaps-links-userscript/releases/latest/download/readd-gmaps-links.user.js
// @match        *://*.google.com/*
// @match        *://*.google.*/search*
// @match        *://*.google.*/webhp*
// @match        *://*.google.*/
// @include      *://*.google.*/search*
// @include      *://*.google.*/webhp*
// @include      *://*.google.*/
// @include      /^https?:\/\/(?:www|maps)?\.google\.[a-z.]+\/(?:search|webhp|\?.*)?$/
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
            background: rgba(0,0,0,0.55);
            backdrop-filter: blur(2px);
            z-index: 999999;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: opacity 0.2s ease;
        }
        .gmaps-links-settings-overlay.visible {
            opacity: 1;
        }
        .gmaps-links-settings-modal {
            background: #ffffff;
            color: #202124;
            border-radius: 12px;
            padding: 24px;
            max-width: 480px;
            width: 90%;
            max-height: 85vh;
            overflow-y: auto;
            box-shadow: 0 8px 28px rgba(0,0,0,0.28);
            transform: scale(0.96);
            transition: transform 0.2s ease;
            box-sizing: border-box;
        }
        .gmaps-links-settings-overlay.visible .gmaps-links-settings-modal {
            transform: scale(1);
        }
        .gmaps-links-settings-modal h2 {
            margin: 0 0 16px 0;
            font-size: 20px;
            color: #202124;
            font-weight: 500;
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
            background: #ffffff;
            color: #202124;
            box-sizing: border-box;
            outline: none;
        }
        .gmaps-links-settings-modal select:focus,
        .gmaps-links-settings-modal input[type="number"]:focus {
            border-color: #1a73e8;
        }
        .gmaps-links-settings-modal .toggle-row {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 6px 0;
            cursor: pointer;
        }
        .gmaps-links-settings-modal .toggle-row span {
            font-size: 14px;
            color: #3c4043;
        }
        .gmaps-links-settings-modal .toggle-row input[type="checkbox"] {
            width: 18px;
            height: 18px;
            cursor: pointer;
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
            font-weight: 500;
            transition: background-color 0.2s ease;
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

        /* Dark Mode Support */
        @media (prefers-color-scheme: dark) {
            .gmaps-links-settings-modal {
                background: #202124;
                color: #e8eaed;
                border: 1px solid #3c4043;
            }
            .gmaps-links-settings-modal h2 {
                color: #e8eaed;
            }
            .gmaps-links-settings-modal label,
            .gmaps-links-settings-modal .toggle-row span {
                color: #bdc1c6;
            }
            .gmaps-links-settings-modal select,
            .gmaps-links-settings-modal input[type="number"] {
                background: #303134;
                color: #e8eaed;
                border: 1px solid #5f6368;
            }
            .gmaps-links-settings-modal .btn-reset {
                background: #303134;
                color: #e8eaed;
            }
            .gmaps-links-settings-modal .btn-reset:hover {
                background: #3c4043;
            }
        }
        html[dark] .gmaps-links-settings-modal,
        html[data-darkreader-scheme="dark"] .gmaps-links-settings-modal {
            background: #202124;
            color: #e8eaed;
            border: 1px solid #3c4043;
        }
        html[dark] .gmaps-links-settings-modal h2,
        html[data-darkreader-scheme="dark"] .gmaps-links-settings-modal h2 {
            color: #e8eaed;
        }
        html[dark] .gmaps-links-settings-modal label,
        html[dark] .gmaps-links-settings-modal .toggle-row span,
        html[data-darkreader-scheme="dark"] .gmaps-links-settings-modal label,
        html[data-darkreader-scheme="dark"] .gmaps-links-settings-modal .toggle-row span {
            color: #bdc1c6;
        }
        html[dark] .gmaps-links-settings-modal select,
        html[dark] .gmaps-links-settings-modal input[type="number"],
        html[data-darkreader-scheme="dark"] .gmaps-links-settings-modal select,
        html[data-darkreader-scheme="dark"] .gmaps-links-settings-modal input[type="number"] {
            background: #303134;
            color: #e8eaed;
            border: 1px solid #5f6368;
        }
        html[dark] .gmaps-links-settings-modal .btn-reset,
        html[data-darkreader-scheme="dark"] .gmaps-links-settings-modal .btn-reset {
            background: #303134;
            color: #e8eaed;
        }

        /* Non-blocking feedback toast */
        .gmaps-links-toast {
            position: fixed;
            bottom: 24px;
            left: 50%;
            transform: translateX(-50%) translateY(20px);
            background: #202124;
            color: #ffffff;
            padding: 12px 24px;
            border-radius: 8px;
            font-size: 14px;
            box-shadow: 0 4px 16px rgba(0,0,0,0.3);
            border: 1px solid #3c4043;
            z-index: 1000000;
            opacity: 0;
            transition: all 0.25s ease;
            pointer-events: none;
        }
        .gmaps-links-toast.visible {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
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

        function showToast(message) {
            const existingToast = document.querySelector('.gmaps-links-toast');
            if (existingToast) existingToast.remove();

            const toast = document.createElement('div');
            toast.className = 'gmaps-links-toast';
            toast.textContent = message;
            document.body.appendChild(toast);

            requestAnimationFrame(() => {
                toast.classList.add('visible');
            });

            setTimeout(() => {
                toast.classList.remove('visible');
                setTimeout(() => toast.remove(), 250);
            }, 3000);
        }

        const closeModal = () => {
            window.removeEventListener('keydown', handleKeyDown);
            overlay.classList.remove('visible');
            setTimeout(() => overlay.remove(), 200);
        };

        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                closeModal();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) closeModal();
        });

        requestAnimationFrame(() => {
            overlay.classList.add('visible');
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

            closeModal();
            showToast('Settings saved. Refresh the page to apply changes.');
        });

        document.getElementById('gmaps-settings-reset').addEventListener('click', () => {
            for (const [key, value] of Object.entries(DEFAULTS)) {
                GM_setValue(key, value);
            }
            closeModal();
            showToast('Settings reset to defaults. Refresh the page to apply changes.');
        });
    }

    GM_registerMenuCommand('Configure Google Maps Links', openSettings);

    init();
})();
