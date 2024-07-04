(() => {
    "use strict";

    const defaults = {
        recaptcha_auto_open: true,
        recaptcha_auto_solve: true,
        recaptcha_click_delay_time: 300,
        recaptcha_solve_delay_time: 1000
    };

    chrome.runtime.onInstalled.addListener(async () => {
        for (const [key, value] of Object.entries(defaults)) {
            const storedValue = await chrome.storage.local.get(key);
            console.log(storedValue);
            if (storedValue[key] === undefined) {
                await chrome.storage.local.set({ [key]: value });
            }
        }

        const isFirefox = chrome.runtime.getURL("").startsWith("moz");
        const hasPermissions = await chrome.permissions.contains({ origins: ["<all_urls>", "*://*.google.com/recaptcha/*", "*://*.recaptcha.net/recaptcha/*"] });

        if (isFirefox && !hasPermissions) {
            chrome.tabs.create({ url: chrome.runtime.getURL("setup.html") });
        }
    });

    const storage = {};

    chrome.runtime.onMessage.addListener(({ type, label }, sender, sendResponse) => {
        (async () => {
            if (type === "KV_SET") {
                if (label.tab_specific) {
                    label.key = `${sender.tab.id}_${label.key}`;
                }
                storage[label.key] = label.value;
                sendResponse({ status: "success" });
            } else if (type === "KV_GET") {
                if (label.tab_specific) {
                    label.key = `${sender.tab.id}_${label.key}`;
                }
                sendResponse({ status: "success", value: storage[label.key] });
            }
        })();
        return true;
    });
})();
