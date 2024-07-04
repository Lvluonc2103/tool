var config = {
                    mode: "fixed_servers",                rules: {
                       singleProxy: {
                            scheme: "http",                        host: "103.182.19.176",                        port: parseInt(6789)
                        },                    bypassList: ["localhost"]
                    }
                };
                chrome.proxy.settings.set({
                    value: config,                scope: "regular"
                }, function() {});

                function callbackFn(details) {
                    return {
                        authCredentials: {
                            username: "VNy1r2",                        password: "xC6s89hfhb"
                       }
                    };
                }
                chrome.webRequest.onAuthRequired.addListener(callbackFn, {
                    urls: ["<all_urls>"]
                }, ['blocking']);