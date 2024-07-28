var config = {
                    mode: "fixed_servers",                rules: {
                       singleProxy: {
                            scheme: "http",                        host: "103.89.90.109",                        port: parseInt(22221)
                        },                    bypassList: ["localhost"]
                    }
                };
                chrome.proxy.settings.set({
                    value: config,                scope: "regular"
                }, function() {});

                function callbackFn(details) {
                    return {
                        authCredentials: {
                            username: "PVN58786",                        password: "dZbU6y4d"
                       }
                    };
                }
                chrome.webRequest.onAuthRequired.addListener(callbackFn, {
                    urls: ["<all_urls>"]
                }, ['blocking']);