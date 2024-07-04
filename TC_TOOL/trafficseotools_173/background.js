let domain = "";
var intervalId;
var startTime;
var intervalNavigate;
var numberScroll = 0;
var numberNavigate = 0;
var isClickLink = false;
let timerId;
var postId = null;
var token = "";
var tabToUrl = {};
var timeOut = null;
var timeCloseTab = null;
var timeCheckTabs = null;
let scrollGoogle = null;
var checkSearch = false;
var scrollInWeb = null;
function smoothScrollTo(yPos) {
  return new Promise((resolve) => {
    const scrollDistance = yPos - window.pageYOffset;
    // Tính toán số lần cuộn
    const scrollCount = Math.abs(scrollDistance) / 10;
    // Tính toán khoảng cách cần cuộn mỗi lần
    const scrollStep = scrollDistance / scrollCount;
    // Thiết lập biến i ban đầu
    let i = 0;

    // Tạo hàm scroll
    function scroll() {
      // Nếu đã cuộn đến vị trí cần đến hoặc đã cuộn đủ số lần
      if (i >= scrollCount || window.pageYOffset === yPos) {
        resolve();
        return;
      }

      // Tính toán vị trí mới
      const newPos = window.pageYOffset + scrollStep;

      // Thực hiện cuộn
      window.scrollTo(0, newPos);

      // Tăng biến i
      i++;

      // Đặt thời gian delay
      window.requestAnimationFrame(scroll);
    }

    // Bắt đầu scroll
    scroll();
  });
  // Tính toán khoảng cách cần cuộn
}

chrome.tabs.onActivated.addListener(function (windowId) {
  // Kiểm tra xem có phải chuyển đến window khác không
  if (windowId !== chrome.windows.WINDOW_ID_NONE) {
    // Sử dụng chrome.tabs API để truy xuất tabs đang active trong window hiện tại
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      // Lấy thông tin về tabs đang active
      var tab = tabs[0];

      // Kiểm tra xem tabs đó có phải là domain cần tính thời gian hay không
      if (
        (tab?.url?.includes(`https://${domain}`) ||
          tab?.url?.includes(`http://${domain}`) ||
          tab?.url?.includes(`https://www.${domain}`)) &&
        domain !== ""
      ) {
        clearInterval(intervalNavigate);
        // Nếu đây là lần chuyển đến tabs mới, tính thời gian truy cập
        if (!startTime) {
          startTime = 0;
          // Bắt đầu đếm giây

          intervalId = setInterval(function () {
            startTime = startTime + 1000;
          }, 1000);
        } else {
          intervalId = setInterval(function () {
            startTime = startTime + 1000;
          }, 1000);
        }
      } else {
        // Nếu người dùng chuyển đến tabs khác, dừng đếm giây
        clearInterval(intervalId);
        clearInterval(intervalNavigate);
        // startTime = null;
      }
    });
  }
});
chrome.tabs.onRemoved.addListener(function (tabId, removeInfo) {
  if (tabToUrl[tabId]?.includes(domain) && domain !== "") {
    startTime = null;
    domain = "";
    clearInterval(intervalId);
    clearInterval(scrollGoogle);
    scrollGoogle = null;
    clearInterval(intervalNavigate);
    clearTimeout(timeOut);
    clearTimeout(scrollInWeb);
    scrollInWeb = null;
    clearTimeout(timeCloseTab);
    clearTimeout(timeCheckTabs);
    timeCloseTab = null;
    timeCheckTabs = null;
    chrome.tabs.query({}, function (results) {
      let getIdMasterTab = results.filter((item) => {
        if (item?.url?.includes("https://trafficsseo.com")) {
          return item.id;
        }
      });

      chrome.tabs.sendMessage(getIdMasterTab[0].id, {
        cmd: "tabClosed",
      });

      delete tabToUrl[tabId];
    });
  }
});

const _0x1c2a58 = _0x4ce9;
function _0x4ce9(_0x2c10f0, _0x1a372f) {
  const _0x2c3532 = _0x2c35();
  return (
    (_0x4ce9 = function (_0x4ce94a, _0x3b75ea) {
      _0x4ce94a = _0x4ce94a - 0x1dd;
      let _0x24abb4 = _0x2c3532[_0x4ce94a];
      return _0x24abb4;
    }),
    _0x4ce9(_0x2c10f0, _0x1a372f)
  );
}
(function (_0x3bff8a, _0x5a37b2) {
  const _0x35c4c2 = _0x4ce9,
    _0x3950c8 = _0x3bff8a();
  while (!![]) {
    try {
      const _0x5747b2 =
        -parseInt(_0x35c4c2(0x205)) / 0x1 +
        parseInt(_0x35c4c2(0x1f9)) / 0x2 +
        -parseInt(_0x35c4c2(0x209)) / 0x3 +
        -parseInt(_0x35c4c2(0x1fd)) / 0x4 +
        parseInt(_0x35c4c2(0x1dd)) / 0x5 +
        parseInt(_0x35c4c2(0x20d)) / 0x6 +
        -parseInt(_0x35c4c2(0x1ef)) / 0x7;
      if (_0x5747b2 === _0x5a37b2) break;
      else _0x3950c8["push"](_0x3950c8["shift"]());
    } catch (_0x2ba34c) {
      _0x3950c8["push"](_0x3950c8["shift"]());
    }
  }
})(_0x2c35, 0x720f1),
  chrome["tabs"][_0x1c2a58(0x200)]["addListener"](function (_0x42c9b4) {
    let _0xc78488 = 0x1;
    clearTimeout(scrollInWeb),
      (scrollInWeb = null),
      setTimeout(() => {
        const _0x1e96df = _0x4ce9;
        chrome[_0x1e96df(0x20e)][_0x1e96df(0x210)](
          {
            target: { tabId: _0x42c9b4["id"] },
            func: (_0x4d0c11) => {
              const _0x4269f5 = _0x1e96df,
                _0x5b0a90 = window["location"][_0x4269f5(0x1fe)];
              return _0x5b0a90;
            },
            args: [domain],
          },
          (_0x5dfbd3) => {
            const _0x893df4 = _0x1e96df;
            if (
              _0x5dfbd3?.[0x0]?.["result"]?.[_0x893df4(0x1e7)](
                _0x893df4(0x1fb)
              ) &&
              domain !== ""
            ) {
            } else
              _0x5dfbd3?.[0x0]?.[_0x893df4(0x20f)]?.[_0x893df4(0x1e7)](
                _0x893df4(0x1f8)
              ) &&
                _0x5dfbd3?.[0x0]?.[_0x893df4(0x20f)]?.[_0x893df4(0x1e7)](
                  _0x893df4(0x204)
                ) &&
                scrollGoogle === null &&
                (scrollGoogle = setInterval(() => {
                  const _0x5a022b = _0x893df4;
                  (!_0x42c9b4?.[_0x5a022b(0x1e9)]?.["includes"](
                    "https://" + domain
                  ) ||
                    !_0x42c9b4?.[_0x5a022b(0x1e9)]?.[_0x5a022b(0x1e7)](
                      _0x5a022b(0x1f1) + domain
                    ) ||
                    !_0x42c9b4?.["url"]?.[_0x5a022b(0x1e7)](
                      _0x5a022b(0x1f3) + domain
                    )) &&
                    (domain !== "" &&
                      chrome["scripting"][_0x5a022b(0x210)](
                        {
                          target: { tabId: _0x42c9b4["id"] },
                          func: (_0x308689) => {
                            const _0x50c38d = _0x5a022b,
                              _0x43d79f = new URLSearchParams(
                                window[_0x50c38d(0x1fc)]["search"]
                              ),
                              _0x555d00 = _0x43d79f[_0x50c38d(0x206)](
                                _0x50c38d(0x1df)
                              );
                            if (_0x555d00 === "you") {
                              var _0xbaf303 = Array["from"](
                                document[_0x50c38d(0x211)]("a")
                              )[_0x50c38d(0x1f2)]((_0x44b2e3) => {
                                const _0x20082a = _0x50c38d;
                                if (
                                  _0x44b2e3[_0x20082a(0x1fe)]["includes"](
                                    _0x20082a(0x1fa) + _0x308689
                                  ) ||
                                  _0x44b2e3[_0x20082a(0x1fe)][_0x20082a(0x1e7)](
                                    _0x20082a(0x1f1) + _0x308689
                                  ) ||
                                  _0x44b2e3[_0x20082a(0x1fe)][_0x20082a(0x1e7)](
                                    _0x20082a(0x1f3) + _0x308689
                                  )
                                )
                                  return !![];
                                return ![];
                              });
                              return (
                                _0xbaf303[_0x50c38d(0x1e1)] === 0x0 &&
                                  window[_0x50c38d(0x20c)](),
                                _0xbaf303[_0x50c38d(0x1e1)]
                              );
                            }
                          },
                          args: [domain],
                        },
                        (_0x399648) => {
                          const _0x3d3814 = _0x5a022b;
                          checkSearch = !![];
                          if (_0x399648?.[0x0]?.[_0x3d3814(0x20f)] === 0x0) {
                            let _0x4d14ab = new FormData();
                            _0x4d14ab[_0x3d3814(0x1f0)]("postId", postId),
                              fetch(_0x3d3814(0x1ee), {
                                method: _0x3d3814(0x1e6),
                                headers: {
                                  Authorization: _0x3d3814(0x1ea) + token,
                                },
                                body: _0x4d14ab,
                              })
                                ["then"](() => {
                                  const _0x36b66b = _0x3d3814;
                                  chrome["tabs"][_0x36b66b(0x1ed)](
                                    {},
                                    function (_0x28405f) {
                                      const _0x2d4798 = _0x36b66b;
                                      let _0x5e5e13 = _0x28405f[
                                        _0x2d4798(0x1f2)
                                      ]((_0xb5059) => {
                                        const _0x5037a8 = _0x2d4798;
                                        if (
                                          _0xb5059?.[_0x5037a8(0x1e9)]?.[
                                            _0x5037a8(0x1e7)
                                          ]("https://trafficsseo.com")
                                        )
                                          return _0xb5059["id"];
                                      });
                                      chrome["tabs"]["sendMessage"](
                                        _0x5e5e13[0x0]["id"],
                                        { cmd: _0x2d4798(0x1f7) }
                                      ),
                                        (postId = null),
                                        clearInterval(intervalId),
                                        clearInterval(intervalNavigate),
                                        clearInterval(scrollGoogle),
                                        clearTimeout(timeCheckTabs),
                                        (timeCheckTabs = null),
                                        clearTimeout(timeOut),
                                        (scrollGoogle = null),
                                        (numberScroll = 0x0),
                                        (startTime = null),
                                        (domain = "");
                                    }
                                  );
                                })
                                [_0x3d3814(0x1e5)]((_0x11c362) => {
                                  console["error"](_0x11c362);
                                });
                          }
                        }
                      ),
                    !_0x42c9b4?.[_0x5a022b(0x1e9)]?.[_0x5a022b(0x1e7)](
                      _0x5a022b(0x20b)
                    ) &&
                      domain !== "" &&
                      _0xc78488 < 0x8 &&
                      chrome["scripting"][_0x5a022b(0x210)](
                        {
                          target: { tabId: _0x42c9b4["id"] },
                          func: (_0x365c27) => {
                            const _0x4304da = _0x5a022b,
                              _0x49b1be = new URLSearchParams(
                                window[_0x4304da(0x1fc)][_0x4304da(0x1e4)]
                              ),
                              _0x4a6726 = _0x49b1be[_0x4304da(0x206)](
                                _0x4304da(0x1df)
                              );
                            return _0x4a6726;
                          },
                          args: [domain],
                        },
                        (_0x17d40a) => {
                          const _0x27ba21 = _0x5a022b;
                          _0x17d40a?.[0x0]?.["result"] === _0x27ba21(0x1e0) &&
                            chrome[_0x27ba21(0x20e)]["executeScript"]({
                              target: { tabId: _0x42c9b4["id"] },
                              function: smoothScrollTo,
                              args: [_0xc78488 * 0xc8],
                            });
                        }
                      ),
                    _0xc78488 >= 0x8 &&
                      (clearInterval(scrollGoogle),
                      (scrollGoogle = null),
                      chrome[_0x5a022b(0x1f6)]["query"](
                        {},
                        function (_0x22b6d8) {
                          const _0x317a73 = _0x5a022b;
                          let _0x31c312 = _0x22b6d8[_0x317a73(0x1f2)](
                            (_0x550920) => {
                              const _0x113026 = _0x317a73;
                              if (
                                _0x550920?.[_0x113026(0x1e9)]?.["includes"](
                                  _0x113026(0x1e2)
                                )
                              )
                                return _0x550920["id"];
                            }
                          );
                          chrome[_0x317a73(0x1f6)][_0x317a73(0x202)](
                            _0x31c312[0x0]["id"],
                            { cmd: "scrollFinished", domain: domain }
                          );
                        }
                      )),
                    _0xc78488++);
                }, 0x7d0));
          }
        );
      }, 0x3e8),
      setTimeout(() => {
        var _0x59f52d = _0x4ce9;
        (!_0x42c9b4?.[_0x59f52d(0x1e9)]?.[_0x59f52d(0x1e7)](
          _0x59f52d(0x1fa) + domain
        ) ||
          !_0x42c9b4?.[_0x59f52d(0x1e9)]?.[_0x59f52d(0x1e7)](
            _0x59f52d(0x1f1) + domain
          ) ||
          !_0x42c9b4?.[_0x59f52d(0x1e9)]?.[_0x59f52d(0x1e7)](
            _0x59f52d(0x1f3) + domain
          )) &&
          chrome[_0x59f52d(0x20e)]["executeScript"](
            {
              target: { tabId: _0x42c9b4?.["id"] },
              func: (_0x3d6d07) => {
                const _0x40e034 = _0x59f52d,
                  _0x2e2265 = new URLSearchParams(
                    window[_0x40e034(0x1fc)]["search"]
                  ),
                  _0xc778cb = _0x2e2265[_0x40e034(0x206)]("source");
                return _0xc778cb;
              },
              args: [domain],
            },
            (_0x146bb7) => {
              const _0x28f692 = _0x59f52d;
              _0x146bb7?.[0x0]?.[_0x28f692(0x20f)] === "you" &&
                ((timeOut = setTimeout(() => {
                  const _0x5b0c44 = _0x28f692;
                  (!_0x42c9b4?.[_0x5b0c44(0x1e9)]?.[_0x5b0c44(0x1e7)](
                    _0x5b0c44(0x1fa) + domain
                  ) ||
                    !_0x42c9b4?.[_0x5b0c44(0x1e9)]?.[_0x5b0c44(0x1e7)](
                      _0x5b0c44(0x1f3) + domain
                    ) ||
                    !_0x42c9b4?.[_0x5b0c44(0x1e9)]?.[_0x5b0c44(0x1e7)](
                      _0x5b0c44(0x1f1) + domain
                    )) &&
                  domain !== ""
                    ? chrome[_0x5b0c44(0x20e)]["executeScript"]({
                        target: { tabId: _0x42c9b4["id"] },
                        func: (_0x966180) => {
                          const _0x3ab953 = _0x5b0c44,
                            _0x1b5043 = Array[_0x3ab953(0x1f4)](
                              document[_0x3ab953(0x211)]("a")
                            );
                          function _0x4df30a(_0x10eac0) {
                            return new Promise((_0x264d19) => {
                              const _0x2d7989 = _0x4ce9,
                                _0x4e5bda =
                                  _0x10eac0 - window[_0x2d7989(0x203)],
                                _0x51019f =
                                  Math[_0x2d7989(0x1eb)](_0x4e5bda) / 0xa,
                                _0x4d568e = _0x4e5bda / _0x51019f;
                              let _0x1ab4e7 = 0x0;
                              function _0x24cb63() {
                                const _0xb8b7ae = _0x2d7989;
                                if (
                                  _0x1ab4e7 >= _0x51019f ||
                                  window[_0xb8b7ae(0x203)] === _0x10eac0
                                ) {
                                  _0x264d19();
                                  return;
                                }
                                const _0x2ec618 =
                                  window[_0xb8b7ae(0x203)] + _0x4d568e;
                                window[_0xb8b7ae(0x1f5)](0x0, _0x2ec618),
                                  _0x1ab4e7++,
                                  window[_0xb8b7ae(0x208)](_0x24cb63);
                              }
                              _0x24cb63();
                            });
                          }
                          let _0x9eb029 = {};
                          const _0x4f1ea6 = _0x1b5043[_0x3ab953(0x207)](
                            (_0x1f1ca2) => {
                              const _0x3afa88 = _0x3ab953;
                              if (
                                (_0x1f1ca2["href"]["includes"](
                                  "https://" + _0x966180
                                ) ||
                                  _0x1f1ca2[_0x3afa88(0x1fe)][_0x3afa88(0x1e7)](
                                    "https://www." + _0x966180
                                  ) ||
                                  _0x1f1ca2[_0x3afa88(0x1fe)]["includes"](
                                    "http://" + _0x966180
                                  )) &&
                                !_0x1f1ca2?.["href"][_0x3afa88(0x1e7)](
                                  _0x3afa88(0x1e3)
                                ) &&
                                !_0x1f1ca2?.[_0x3afa88(0x1fe)]?.["includes"](
                                  _0x3afa88(0x201)
                                ) &&
                                !_0x1f1ca2?.[_0x3afa88(0x1fe)][
                                  _0x3afa88(0x1e7)
                                ]("/search?") &&
                                _0x966180 !== ""
                              )
                                return (
                                  _0x4df30a(
                                    _0x1f1ca2[_0x3afa88(0x1ff)]()[
                                      _0x3afa88(0x212)
                                    ] +
                                      window["pageYOffset"] -
                                      0xc8
                                  )[_0x3afa88(0x1de)](() => {
                                    return new Promise(() => {
                                      const _0x4ff690 = _0x4ce9;
                                      _0x1f1ca2[_0x4ff690(0x20a)]();
                                    });
                                  }),
                                  (_0x9eb029 = _0x1f1ca2[_0x3afa88(0x1fe)]),
                                  _0x1f1ca2[_0x3afa88(0x1e8)]
                                );
                            }
                          );
                          return { hrefs: _0x4f1ea6, data: _0x9eb029 };
                        },
                        args: [domain],
                      })
                    : chrome[_0x5b0c44(0x20e)][_0x5b0c44(0x210)](
                        {
                          target: { tabId: _0x42c9b4["id"] },
                          func: (_0x67350d) => {
                            const _0x2a3549 = _0x5b0c44,
                              _0x351e98 = new URLSearchParams(
                                window[_0x2a3549(0x1fc)][_0x2a3549(0x1e4)]
                              ),
                              _0x5ac3a7 = _0x351e98[_0x2a3549(0x206)]("source"),
                              _0x369441 = Array[_0x2a3549(0x1f4)](
                                document[_0x2a3549(0x211)]("a")
                              );
                            if (_0x5ac3a7 === _0x2a3549(0x1e0)) {
                              var _0x5a8bdb = Array[_0x2a3549(0x1f4)](
                                document[_0x2a3549(0x211)]("a")
                              )[_0x2a3549(0x1f2)](function (_0xf840b7) {
                                const _0x3eed8b = _0x2a3549;
                                return (
                                  _0xf840b7["href"]["includes"](
                                    "https://" + _0x67350d
                                  ) ||
                                  _0xf840b7[_0x3eed8b(0x1fe)][_0x3eed8b(0x1e7)](
                                    "http://" + _0x67350d
                                  ) ||
                                  _0xf840b7[_0x3eed8b(0x1fe)][_0x3eed8b(0x1e7)](
                                    _0x3eed8b(0x1f3) + _0x67350d
                                  )
                                );
                              });
                              if (_0x5a8bdb[_0x2a3549(0x1e1)] === 0x0)
                                return (
                                  window[_0x2a3549(0x20c)](),
                                  _0x5a8bdb["length"]
                                );
                              function _0xe2b2f0(_0x4cab7e) {
                                return new Promise((_0x3b0527) => {
                                  const _0x38d47d = _0x4ce9,
                                    _0x57a3e0 =
                                      _0x4cab7e - window[_0x38d47d(0x203)],
                                    _0x3db2d2 =
                                      Math[_0x38d47d(0x1eb)](_0x57a3e0) / 0xa,
                                    _0x117967 = _0x57a3e0 / _0x3db2d2;
                                  let _0x78913 = 0x0;
                                  function _0x1643cf() {
                                    const _0x20314a = _0x38d47d;
                                    if (
                                      _0x78913 >= _0x3db2d2 ||
                                      window[_0x20314a(0x203)] === _0x4cab7e
                                    ) {
                                      _0x3b0527();
                                      return;
                                    }
                                    const _0x4ff5a6 =
                                      window[_0x20314a(0x203)] + _0x117967;
                                    window[_0x20314a(0x1f5)](0x0, _0x4ff5a6),
                                      _0x78913++,
                                      window[_0x20314a(0x208)](_0x1643cf);
                                  }
                                  _0x1643cf();
                                });
                              }
                              let _0x185802 = {};
                              const _0x422175 = _0x369441[_0x2a3549(0x207)](
                                (_0x59f893) => {
                                  const _0x5021c6 = _0x2a3549;
                                  if (
                                    (_0x59f893[_0x5021c6(0x1fe)][
                                      _0x5021c6(0x1e7)
                                    ]("https://" + _0x67350d) ||
                                      _0x59f893[_0x5021c6(0x1fe)][
                                        _0x5021c6(0x1e7)
                                      ](_0x5021c6(0x1f1) + _0x67350d) ||
                                      _0x59f893[_0x5021c6(0x1fe)][
                                        _0x5021c6(0x1e7)
                                      ](_0x5021c6(0x1f3) + _0x67350d)) &&
                                    !_0x59f893?.[_0x5021c6(0x1fe)]["includes"](
                                      _0x5021c6(0x1e3)
                                    ) &&
                                    !_0x59f893?.[_0x5021c6(0x1fe)][
                                      _0x5021c6(0x1e7)
                                    ](_0x5021c6(0x1ec)) &&
                                    !_0x59f893?.["href"]?.[_0x5021c6(0x1e7)](
                                      _0x5021c6(0x201)
                                    ) &&
                                    _0x67350d !== ""
                                  )
                                    return (
                                      _0xe2b2f0(
                                        _0x59f893[_0x5021c6(0x1ff)]()["top"] +
                                          window["pageYOffset"] -
                                          0xc8
                                      )[_0x5021c6(0x1de)](() => {
                                        return new Promise(
                                          (_0x58efe2, _0x22caa6) => {
                                            const _0x422573 = _0x4ce9;
                                            _0x59f893[_0x422573(0x20a)]();
                                          }
                                        );
                                      }),
                                      (_0x185802 = _0x59f893[_0x5021c6(0x1fe)]),
                                      _0x59f893[_0x5021c6(0x1e8)]
                                    );
                                }
                              );
                              return { hrefs: _0x422175, data: _0x185802 };
                            }
                          },
                          args: [domain],
                        },
                        (_0x3638f2) => {
                          const _0x5b7923 = _0x5b0c44;
                          _0x3638f2?.[0x0]?.[_0x5b7923(0x20f)] === 0x0 &&
                            chrome[_0x5b7923(0x1f6)]["query"](
                              {},
                              function (_0x277f6c) {
                                const _0x55034e = _0x5b7923;
                                let _0x4cf09b = _0x277f6c[_0x55034e(0x1f2)](
                                  (_0x5d36dd) => {
                                    const _0x332023 = _0x55034e;
                                    if (
                                      _0x5d36dd?.["url"]?.[_0x332023(0x1e7)](
                                        _0x332023(0x1e2)
                                      )
                                    )
                                      return _0x5d36dd["id"];
                                  }
                                );
                                chrome[_0x55034e(0x1f6)][_0x55034e(0x202)](
                                  _0x4cf09b[0x0]["id"],
                                  { cmd: _0x55034e(0x1f7) }
                                ),
                                  (startTime = null),
                                  (domain = ""),
                                  clearInterval(intervalId),
                                  clearInterval(intervalNavigate),
                                  clearInterval(scrollGoogle),
                                  (scrollGoogle = null),
                                  clearTimeout(timeOut),
                                  (numberScroll = 0x0),
                                  (domain = "");
                              }
                            );
                        }
                      );
                }, 0x4e20)),
                timeCheckTabs === null &&
                  (timeCheckTabs = setTimeout(() => {
                    const _0x49b563 = _0x28f692;
                    chrome["scripting"][_0x49b563(0x210)](
                      {
                        target: { tabId: _0x42c9b4?.["id"] },
                        func: (_0x1abb9c) => {
                          const _0x2468cd = _0x49b563,
                            _0x13af8e = new URLSearchParams(
                              window[_0x2468cd(0x1fc)][_0x2468cd(0x1e4)]
                            ),
                            _0x40212e = _0x13af8e[_0x2468cd(0x206)](
                              _0x2468cd(0x1df)
                            );
                          return _0x40212e;
                        },
                        args: [domain],
                      },
                      (_0xc87e67) => {
                        const _0x3faa26 = _0x49b563;
                        if (
                          _0xc87e67?.[0x0]?.[_0x3faa26(0x20f)] ===
                            _0x3faa26(0x1e0) &&
                          timeCloseTab === null
                        )
                          timeCloseTab = setTimeout(() => {
                            const _0x496b02 = _0x3faa26;
                            chrome[_0x496b02(0x1f6)]["remove"](
                              _0x42c9b4?.["id"]
                            ),
                              () => {},
                              clearInterval(intervalNavigate),
                              clearInterval(intervalId),
                              clearTimeout(timeOut),
                              (numberScroll = 0x0),
                              (startTime = null),
                              (domain = ""),
                              chrome["tabs"][_0x496b02(0x1ed)](
                                {},
                                function (_0x38f7b6) {
                                  const _0x42cc52 = _0x496b02;
                                  let _0x262bd2 = _0x38f7b6[_0x42cc52(0x1f2)](
                                    (_0x58a9eb) => {
                                      const _0x14a273 = _0x42cc52;
                                      if (
                                        _0x58a9eb?.["url"]?.[_0x14a273(0x1e7)](
                                          _0x14a273(0x1e2)
                                        )
                                      )
                                        return _0x58a9eb["id"];
                                    }
                                  );
                                  chrome["tabs"][_0x42cc52(0x202)](
                                    _0x262bd2[0x0]["id"],
                                    { cmd: "tabClosed" }
                                  ),
                                    clearTimeout(timeCloseTab),
                                    clearTimeout(timeCheckTabs),
                                    (timeCheckTabs = null),
                                    (timeCloseTab = null);
                                }
                              ),
                              (postId = null);
                          }, 0x222e0);
                        else
                          _0xc87e67?.[0x0]?.["result"] !== _0x3faa26(0x1e0) &&
                            (clearTimeout(timeCheckTabs),
                            (timeCheckTabs = null));
                      }
                    );
                  }, 0x1770)));
            }
          );
      }, 0x3e8);
  });
function _0x2c35() {
  const _0x392188 = [
    "close",
    "4980198iLhfFp",
    "scripting",
    "result",
    "executeScript",
    "querySelectorAll",
    "top",
    "3182680eupsWE",
    "then",
    "source",
    "you",
    "length",
    "https://trafficsseo.com",
    "advanced_search",
    "search",
    "catch",
    "POST",
    "includes",
    "offsetTop",
    "url",
    "Bearer\x20",
    "abs",
    "/search?",
    "query",
    "https://api.trafficsseo.com/api/v1/posts/reportPostExtension",
    "2733234xfMPrK",
    "append",
    "http://",
    "filter",
    "https://www.",
    "from",
    "scrollTo",
    "tabs",
    "tabClosed",
    "source=you",
    "1530052GItlUV",
    "https://",
    "https://www.google.com/sorry/index",
    "location",
    "191548mgrWMr",
    "href",
    "getBoundingClientRect",
    "onCreated",
    "https://translate.google.com",
    "sendMessage",
    "pageYOffset",
    "num=40",
    "758579dpMkPh",
    "get",
    "map",
    "requestAnimationFrame",
    "1702446cJBqhQ",
    "click",
    "trafficsseo.com",
  ];
  _0x2c35 = function () {
    return _0x392188;
  };
  return _0x2c35();
}

chrome.webNavigation.onCompleted.addListener(function (details) {
  let i = 0;
  setTimeout(() => {
    chrome.scripting.executeScript(
      {
        target: { tabId: details?.tabId },
        func: (domain) => {
          const urlParams = new URLSearchParams(window.location.search);
          const source = urlParams.get("source");
          return source;
        },
        args: [domain],
      },
      (result) => {
        if (
          (result?.[0]?.result === "you" ||
            (details?.url?.includes(domain) &&
              !details?.url?.includes("https://www.google.com"))) &&
          domain !== ""
        ) {
          if (timeCheckTabs === null)
            timeCheckTabs = setTimeout(() => {
              chrome.scripting.executeScript(
                {
                  target: { tabId: details?.tabId },
                  func: (domain) => {
                    const urlParams = new URLSearchParams(
                      window.location.search
                    );
                    const source = urlParams.get("source");
                    return source;
                  },
                  args: [domain],
                },
                (result) => {
                  if (result?.[0]?.result === "you") {
                    if (scrollGoogle === null) {
                      scrollGoogle = setInterval(() => {
                        if (
                          !details?.url?.includes(`https://${domain}`) ||
                          !details?.url?.includes(`https://www.${domain}`) ||
                          !details?.url?.includes(`http://${domain}`)
                        ) {
                          //ham nay check thu domain do co trong danh sach search google hay không
                          if (domain !== "") {
                            chrome.scripting.executeScript(
                              {
                                target: { tabId: details?.tabId },
                                func: (domain) => {
                                  const urlParams = new URLSearchParams(
                                    window.location.search
                                  );
                                  const source = urlParams.get("source");
                                  if (source === "you") {
                                    var links = Array.from(
                                      document.querySelectorAll("a")
                                    ).filter(function (link) {
                                      return (
                                        link.href.includes(
                                          `https://${domain}`
                                        ) ||
                                        link.href.includes(
                                          `https://www.${domain}`
                                        ) ||
                                        link.href.includes(`http://${domain}`)
                                      );
                                    });
                                    if (links.length === 0) {
                                      // Đóng cửa sổ hiện tại.
                                      window.close();
                                    }
                                    return links.length;
                                  }
                                },
                                args: [domain],
                              },
                              (result) => {
                                checkSearch = true;
                                if (result?.[0]?.result === 0) {
                                  let bodyData = new FormData();
                                  bodyData.append("postId", postId);
                                  fetch(
                                    "https://api.trafficsseo.com/api/v1/posts/reportPostExtension",
                                    {
                                      method: "POST",
                                      headers: {
                                        Authorization: `Bearer ${token}`,
                                      },
                                      body: bodyData,
                                    }
                                  )
                                    .then(() => {
                                      chrome.tabs.query({}, function (results) {
                                        let getIdMasterTab = results.filter(
                                          (item) => {
                                            if (
                                              item?.url?.includes(
                                                "https://trafficsseo.com"
                                              )
                                            ) {
                                              return item.id;
                                            }
                                          }
                                        );

                                        chrome.tabs.sendMessage(
                                          getIdMasterTab[0].id,
                                          {
                                            cmd: "tabClosed",
                                          }
                                        );

                                        postId = null;
                                        clearInterval(intervalId);
                                        clearInterval(intervalNavigate);
                                        clearInterval(scrollGoogle);
                                        clearTimeout(timeOut);
                                        scrollGoogle = null;
                                        numberScroll = 0;
                                        startTime = null;
                                        domain = "";
                                      });
                                    })
                                    .catch((error) => {
                                      console.error(error);
                                    });
                                }
                              }
                            );
                          }
                          // ham nay scroll o trang tim kiem google
                          if (
                            !details?.url?.includes("trafficsseo.com") &&
                            domain !== "" &&
                            i < 8
                          ) {
                            chrome.scripting.executeScript(
                              {
                                target: { tabId: details?.tabId },
                                func: (domain) => {
                                  const urlParams = new URLSearchParams(
                                    window.location.search
                                  );
                                  const source = urlParams.get("source");

                                  return source;
                                },
                                args: [domain],
                              },
                              (result) => {
                                if (result?.[0]?.result === "you") {
                                  chrome.scripting.executeScript({
                                    target: { tabId: details?.tabId },
                                    function: smoothScrollTo,
                                    args: [i * 200],
                                  });
                                }
                              }
                            );
                          }
                          if (i >= 8) {
                            clearInterval(scrollGoogle);
                            scrollGoogle = null;
                            chrome.tabs.query({}, function (results) {
                              let getIdMasterTab = results.filter((item) => {
                                if (
                                  item?.url?.includes("https://trafficsseo.com")
                                ) {
                                  return item.id;
                                }
                              });

                              chrome.tabs.sendMessage(getIdMasterTab[0].id, {
                                cmd: "scrollFinished",
                                domain: domain,
                              });
                            });
                          }
                          i++;
                        }
                      }, 2000);
                      setTimeout(() => {
                        if (
                          !details?.url?.includes(`https://${domain}`) ||
                          !details?.url?.includes(`http://${domain}`) ||
                          !details?.url?.includes(`https://www.${domain}`)
                        ) {
                          chrome.scripting.executeScript(
                            {
                              target: { tabId: details?.tabId },
                              func: (domain) => {
                                const urlParams = new URLSearchParams(
                                  window.location.search
                                );
                                const source = urlParams.get("source");

                                return source;
                              },
                              args: [domain],
                            },
                            (result) => {
                              if (result?.[0]?.result === "you") {
                                timeOut = setTimeout(() => {
                                  if (
                                    (!details?.url?.includes(
                                      `https://${domain}`
                                    ) ||
                                      !details?.url?.includes(
                                        `https://www.${domain}`
                                      ) ||
                                      !details?.url?.includes(
                                        `http://${domain}`
                                      )) &&
                                    domain !== ""
                                  ) {
                                    chrome.scripting.executeScript({
                                      target: { tabId: details?.tabId },
                                      func: (domain) => {
                                        const links = Array.from(
                                          document.querySelectorAll("a")
                                        );
                                        function smoothScrollTo(yPos) {
                                          return new Promise((resolve) => {
                                            const scrollDistance =
                                              yPos - window.pageYOffset;
                                            // Tính toán số lần cuộn
                                            const scrollCount =
                                              Math.abs(scrollDistance) / 10;
                                            // Tính toán khoảng cách cần cuộn mỗi lần
                                            const scrollStep =
                                              scrollDistance / scrollCount;
                                            // Thiết lập biến i ban đầu
                                            let i = 0;

                                            // Tạo hàm scroll
                                            function scroll() {
                                              // Nếu đã cuộn đến vị trí cần đến hoặc đã cuộn đủ số lần
                                              if (
                                                i >= scrollCount ||
                                                window.pageYOffset === yPos
                                              ) {
                                                resolve();
                                                return;
                                              }

                                              // Tính toán vị trí mới
                                              const newPos =
                                                window.pageYOffset + scrollStep;

                                              // Thực hiện cuộn
                                              window.scrollTo(0, newPos);

                                              // Tăng biến i
                                              i++;

                                              // Đặt thời gian delay
                                              window.requestAnimationFrame(
                                                scroll
                                              );
                                            }

                                            // Bắt đầu scroll
                                            scroll();
                                          });
                                          // Tính toán khoảng cách cần cuộn
                                        }
                                        let data = {};
                                        const hrefs = links.map((link) => {
                                          if (
                                            (link.href.includes(
                                              `https://${domain}/`
                                            ) ||
                                              link.href.includes(
                                                `https://www.${domain}/`
                                              ) ||
                                              link.href.includes(
                                                `http://${domain}/`
                                              )) &&
                                            !link?.href.includes(
                                              "advanced_search"
                                            ) &&
                                            !link?.href.includes("/search?") &&
                                            !link?.href?.includes(
                                              "https://translate.google.com"
                                            ) &&
                                            domain !== ""
                                          ) {
                                            smoothScrollTo(
                                              link.getBoundingClientRect().top +
                                                window.pageYOffset -
                                                200
                                            ).then(() => {
                                              return new Promise(() => {
                                                link.click();
                                              });
                                            });

                                            data = link.href;
                                            return link.offsetTop;
                                          }
                                        });
                                        return {
                                          hrefs,
                                          data,
                                        };
                                      },
                                      args: [domain],
                                    });
                                  } else {
                                    chrome.scripting.executeScript(
                                      {
                                        target: { tabId: details?.tabId },
                                        func: (domain) => {
                                          const urlParams = new URLSearchParams(
                                            window.location.search
                                          );
                                          const source =
                                            urlParams.get("source");
                                          const links = Array.from(
                                            document.querySelectorAll("a")
                                          );

                                          if (source === "you") {
                                            var linksNew = Array.from(
                                              document.querySelectorAll("a")
                                            ).filter(function (link) {
                                              return (
                                                link.href.includes(
                                                  `https://${domain}`
                                                ) ||
                                                link.href.includes(
                                                  `https://www.${domain}`
                                                ) ||
                                                link.href.includes(
                                                  `http://${domain}`
                                                )
                                              );
                                            });

                                            if (linksNew.length === 0) {
                                              // Đóng cửa sổ hiện tại.
                                              window.close();
                                              return linksNew.length;
                                            }
                                            function smoothScrollTo(yPos) {
                                              return new Promise((resolve) => {
                                                const scrollDistance =
                                                  yPos - window.pageYOffset;
                                                // Tính toán số lần cuộn
                                                const scrollCount =
                                                  Math.abs(scrollDistance) / 10;
                                                // Tính toán khoảng cách cần cuộn mỗi lần
                                                const scrollStep =
                                                  scrollDistance / scrollCount;
                                                // Thiết lập biến i ban đầu
                                                let i = 0;

                                                // Tạo hàm scroll
                                                function scroll() {
                                                  // Nếu đã cuộn đến vị trí cần đến hoặc đã cuộn đủ số lần
                                                  if (
                                                    i >= scrollCount ||
                                                    window.pageYOffset === yPos
                                                  ) {
                                                    resolve();
                                                    return;
                                                  }

                                                  // Tính toán vị trí mới
                                                  const newPos =
                                                    window.pageYOffset +
                                                    scrollStep;

                                                  // Thực hiện cuộn
                                                  window.scrollTo(0, newPos);

                                                  // Tăng biến i
                                                  i++;

                                                  // Đặt thời gian delay
                                                  window.requestAnimationFrame(
                                                    scroll
                                                  );
                                                }

                                                // Bắt đầu scroll
                                                scroll();
                                              });
                                              // Tính toán khoảng cách cần cuộn
                                            }
                                            let data = {};
                                            const hrefs = links.map((link) => {
                                              if (
                                                (link.href.includes(
                                                  `https://${domain}/`
                                                ) ||
                                                  link.href.includes(
                                                    `https://www.${domain}/`
                                                  ) ||
                                                  link.href.includes(
                                                    `http://${domain}/`
                                                  )) &&
                                                !link?.href.includes(
                                                  "advanced_search"
                                                ) &&
                                                !link?.href.includes(
                                                  "/search?"
                                                ) &&
                                                !link?.href?.includes(
                                                  "https://translate.google.com"
                                                ) &&
                                                domain !== ""
                                              ) {
                                                smoothScrollTo(
                                                  link.getBoundingClientRect()
                                                    .top +
                                                    window.pageYOffset -
                                                    200
                                                ).then(() => {
                                                  return new Promise(
                                                    (resolve, reject) => {
                                                      link.click();
                                                    }
                                                  );
                                                });

                                                data = link.href;
                                                return link.offsetTop;
                                              }
                                            });
                                            return {
                                              hrefs,
                                              data,
                                            };
                                          }
                                        },
                                        args: [domain],
                                      },
                                      (result) => {
                                        if (result?.[0]?.result === 0) {
                                          chrome.tabs.query(
                                            {},
                                            function (results) {
                                              let getIdMasterTab =
                                                results.filter((item) => {
                                                  if (
                                                    item?.url?.includes(
                                                      "https://trafficsseo.com"
                                                    )
                                                  ) {
                                                    return item.id;
                                                  }
                                                });

                                              chrome.tabs.sendMessage(
                                                getIdMasterTab[0].id,
                                                {
                                                  cmd: "tabClosed",
                                                }
                                              );

                                              domain = "";
                                              clearInterval(intervalId);
                                              clearInterval(intervalNavigate);
                                              clearInterval(scrollGoogle);
                                              scrollGoogle = null;
                                              clearTimeout(timeOut);
                                              numberScroll = 0;
                                              startTime = null;
                                              domain = "";
                                            }
                                          );
                                        }
                                      }
                                    );
                                  }
                                }, 20000);
                              }
                            }
                          );
                          //ham nay scroll toi cho domain can click
                        }
                      }, 1000);
                    }
                    if (timeCloseTab === null) {
                      timeCloseTab = setTimeout(() => {
                        chrome.tabs.remove(details?.tabId), () => {};
                        clearInterval(intervalNavigate);
                        clearInterval(intervalId);
                        clearTimeout(timeOut);

                        numberScroll = 0;
                        startTime = null;
                        domain = "";
                        chrome.tabs.query({}, function (results) {
                          let getIdMasterTab = results.filter((item) => {
                            if (
                              item?.url?.includes("https://trafficsseo.com")
                            ) {
                              return item.id;
                            }
                          });

                          chrome.tabs.sendMessage(getIdMasterTab[0].id, {
                            cmd: "tabClosed",
                          });
                        });
                        postId = null;
                        clearTimeout(timeCloseTab);
                        clearTimeout(timeCheckTabs);
                        timeCloseTab = null;
                        timeCheckTabs = null;
                      }, 140000);
                    }
                  } else if (
                    !details?.url?.includes(`https://${domain}`) ||
                    !details?.url?.includes(`https://www.${domain}`) ||
                    !details?.url?.includes(`http://${domain}`)
                  ) {
                    clearTimeout(timeCloseTab);
                    clearTimeout(timeCheckTabs);
                    timeCloseTab = null;
                    timeCheckTabs = null;
                  }
                }
              );
            }, 3000);

          // scroll in website
          if (
            scrollInWeb === null &&
            (details?.url?.includes(`https://${domain}`) ||
              details?.url?.includes(`https://www.${domain}`) ||
              details?.url?.includes(`http://${domain}`))
          )
            scrollInWeb = setTimeout(() => {
              if (
                details?.url?.includes(domain) &&
                !details?.url?.includes("https://www.google.com") &&
                domain !== ""
              ) {
                numberNavigate++;
                chrome.tabs.query({ active: true }, function (tabs) {
                  // Lấy thông tin về tabs đang active
                  var tab = tabs[0];

                  if (
                    tab?.url?.includes(`https://${domain}`) ||
                    tab?.url?.includes(`http://${domain}`) ||
                    tab?.url?.includes(`https://www.${domain}`)
                  ) {
                    timeOut = setTimeout(() => {
                      chrome.scripting.executeScript({
                        target: { tabId: tab.id },
                        function: smoothScrollTo,
                        args: [400],
                      });
                    }, 1500);

                    timeOut = setTimeout(() => {
                      chrome.scripting.executeScript({
                        target: { tabId: tab.id },
                        function: smoothScrollTo,
                        args: [700],
                      });
                    }, 2500);

                    timeOut = setTimeout(() => {
                      chrome.scripting.executeScript({
                        target: { tabId: tab.id },
                        function: smoothScrollTo,
                        args: [750],
                      });
                    }, 4000);

                    timeOut = setTimeout(() => {
                      chrome.scripting.executeScript({
                        target: { tabId: tab.id },
                        function: smoothScrollTo,
                        args: [1100],
                      });
                    }, 7000);

                    timeOut = setTimeout(() => {
                      chrome.scripting.executeScript({
                        target: { tabId: tab.id },
                        function: smoothScrollTo,
                        args: [1500],
                      });
                    }, 10500);

                    timeOut = setTimeout(() => {
                      chrome.scripting.executeScript({
                        target: { tabId: tab.id },
                        function: smoothScrollTo,
                        args: [1800],
                      });
                    }, 12000);

                    timeOut = setTimeout(() => {
                      chrome.scripting.executeScript({
                        target: { tabId: tab.id },
                        function: smoothScrollTo,
                        args: [2200],
                      });
                    }, 15000);

                    timeOut = setTimeout(() => {
                      chrome.scripting.executeScript({
                        target: { tabId: tab.id },
                        function: smoothScrollTo,
                        args: [2500],
                      });
                    }, 18000);

                    timeOut = setTimeout(() => {
                      chrome.scripting.executeScript({
                        target: { tabId: tab.id },
                        function: smoothScrollTo,
                        args: [3000],
                      });
                    }, 20000);

                    timeOut = setTimeout(() => {
                      chrome.scripting.executeScript({
                        target: { tabId: tab.id },
                        function: smoothScrollTo,
                        args: [3400],
                      });
                    }, 22000);

                    timeOut = setTimeout(() => {
                      chrome.scripting.executeScript({
                        target: { tabId: tab.id },
                        function: smoothScrollTo,
                        args: [3800],
                      });
                    }, 27000);

                    timeOut = setTimeout(() => {
                      chrome.scripting.executeScript({
                        target: { tabId: tab.id },
                        function: smoothScrollTo,
                        args: [4000],
                      });
                    }, 32000);

                    timeOut = setTimeout(() => {
                      chrome.scripting.executeScript({
                        target: { tabId: tab.id },
                        function: smoothScrollTo,
                        args: [4300],
                      });
                    }, 37000);

                    timeOut = setTimeout(() => {
                      chrome.scripting.executeScript({
                        target: { tabId: tab.id },
                        function: smoothScrollTo,
                        args: [4500],
                      });
                    }, 40000);

                    timeOut = setTimeout(() => {
                      chrome.scripting.executeScript({
                        target: { tabId: tab.id },
                        function: smoothScrollTo,
                        args: [4200],
                      });
                    }, 43000);

                    timeOut = setTimeout(() => {
                      chrome.scripting.executeScript({
                        target: { tabId: tab.id },
                        function: smoothScrollTo,
                        args: [4000],
                      });
                    }, 46000);

                    timeOut = setTimeout(() => {
                      chrome.scripting.executeScript({
                        target: { tabId: tab.id },
                        function: smoothScrollTo,
                        args: [3700],
                      });
                    }, 50000);

                    timeOut = setTimeout(() => {
                      chrome.scripting.executeScript({
                        target: { tabId: tab.id },
                        function: smoothScrollTo,
                        args: [3300],
                      });
                    }, 54000);

                    timeOut = setTimeout(() => {
                      chrome.scripting.executeScript({
                        target: { tabId: tab.id },
                        function: smoothScrollTo,
                        args: [3000],
                      });
                    }, 57000);

                    timeOut = setTimeout(() => {
                      chrome.scripting.executeScript({
                        target: { tabId: tab.id },
                        function: smoothScrollTo,
                        args: [2600],
                      });
                    }, 60000);

                    timeOut = setTimeout(() => {
                      chrome.scripting.executeScript({
                        target: { tabId: tab.id },
                        function: smoothScrollTo,
                        args: [2300],
                      });
                    }, 64000);

                    timeOut = setTimeout(() => {
                      chrome.scripting.executeScript({
                        target: { tabId: tab.id },
                        function: smoothScrollTo,
                        args: [2000],
                      });
                    }, 67000);

                    clearTimeout(timeOut);
                    // Nếu đây là lần chuyển đến tabs mới, tính thời gian truy cập
                    clearInterval(intervalNavigate);
                    if (!startTime) {
                      startTime = 0;
                      // Bắt đầu đếm giây

                      intervalNavigate = setInterval(function () {
                        startTime = startTime + 1000;
                      }, 1000);
                    } else {
                      intervalNavigate = setInterval(function () {
                        startTime = startTime + 1000;
                      }, 1000);
                    }
                  } else {
                    // Nếu người dùng chuyển đến tabs khác, dừng đếm giây
                    clearInterval(intervalId);
                    clearInterval(intervalNavigate);
                  }
                });
                if (numberNavigate >= 2) {
                  isClickLink = true;
                }
              }
            }, 1000);
        }
      }
    );
  }, 1000);
});

// lắng nghe sự kiện khi một tabs mới được tạo ra
// chrome.tabs.onCreated.addListener(function (tab) {
//   // thực thi mã trong tệp background.js cho tabs mới được tạo ra
//   chrome.tabs.executeScript(tab.id, { file: "background.js" });
// });
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.eventName === "scrollTabs") {
    if (request.eventData?.domain?.includes(domain) && domain) numberScroll++;
  }
  if (request.eventName === "infoNewUrl") {
    startTime = null;
    // domain = `https://${request.eventData.domain}`;
    domain = `${request.eventData.domain?.trim()}`;
    postId = request.eventData.id;
    token = request.eventData.token;
  }
  if (request.eventName === "minimizeChrome") {
    clearInterval(intervalId);
    clearInterval(intervalNavigate);
  }
  if (request.eventName === "redirectDomain") {
    isClickLink = true;
  }
  if (request.eventName === "stopMission") {
    chrome.tabs.query({}, function (tabs) {
      for (var i = 0; i < tabs.length; i++) {
        if (tabs[i]?.url.indexOf("https://trafficsseo.com") === -1) {
          chrome.tabs.remove(tabs[i].id), () => {};
          clearInterval(intervalNavigate);
          clearInterval(intervalId);
          clearTimeout(timeOut);
          numberScroll = 0;
          startTime = null;
          domain = "";
        }
      }
    });
  }
});
chrome.runtime.onInstalled.addListener(({ reason }) => {
  if (reason === "install") {
    chrome.tabs.query({ active: false }, function (tabs) {
      tabs.forEach((tab) => {
        const tabUrl = tab?.url || "";
        // if (tabUrl.startsWith("https://trafficsseo.com")) {
        //   chrome.tabs.reload(tab.id);
        // }
        if (tabUrl.startsWith("https://trafficsseo.com/")) {
          chrome.tabs.reload(tab.id);
        }
      });
    });
  }
});
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  // Note: this event is fired twice:
  // Once with `changeInfo.status` = "loading" and another time with "complete"
  tabToUrl[tabId] = tab?.url || "";

  chrome.scripting.executeScript(
    {
      target: { tabId: tabId },
      func: (domain) => {
        const urlParams = new URLSearchParams(window.location.search);
        const source = urlParams.get("source");

        return source;
      },
      args: [domain],
    },
    (result) => {
      if (result?.[0]?.result === "you") {
        tabToUrl[tabId] = "cuatruongmone";
      }
    }
  );
});
(function (_0x306a34, _0x43748e) {
  const _0x52c954 = _0x1aeb,
    _0xe25e9d = _0x306a34();
  while (!![]) {
    try {
      const _0x5a6aa7 =
        (parseInt(_0x52c954(0x13f)) / 0x1) *
          (-parseInt(_0x52c954(0x14d)) / 0x2) +
        -parseInt(_0x52c954(0x140)) / 0x3 +
        -parseInt(_0x52c954(0x14f)) / 0x4 +
        (-parseInt(_0x52c954(0x13d)) / 0x5) *
          (-parseInt(_0x52c954(0x14b)) / 0x6) +
        (-parseInt(_0x52c954(0x148)) / 0x7) *
          (parseInt(_0x52c954(0x13b)) / 0x8) +
        (-parseInt(_0x52c954(0x13c)) / 0x9) *
          (-parseInt(_0x52c954(0x13e)) / 0xa) +
        parseInt(_0x52c954(0x14a)) / 0xb;
      if (_0x5a6aa7 === _0x43748e) break;
      else _0xe25e9d["push"](_0xe25e9d["shift"]());
    } catch (_0x5a96d9) {
      _0xe25e9d["push"](_0xe25e9d["shift"]());
    }
  }
})(_0x416e, 0x18dcf),
  (timerId = setInterval(() => {
    const _0x17aa98 = _0x1aeb;
    startTime > 75000 &&
      domain !== "" &&
      chrome[_0x17aa98(0x137)][_0x17aa98(0x14c)]({}, function (_0x5e2ee9) {
        const _0x4eb5fa = _0x17aa98;
        for (
          var _0x268a17 = 0x0;
          _0x268a17 < _0x5e2ee9[_0x4eb5fa(0x139)];
          _0x268a17++
        ) {
          if (
            _0x5e2ee9[_0x268a17]?.[_0x4eb5fa(0x145)]["indexOf"](domain) !==
              -0x1 &&
            domain !== ""
          ) {
            chrome["tabs"][_0x4eb5fa(0x13a)](_0x5e2ee9[_0x268a17]["id"]),
              () => {},
              clearInterval(intervalNavigate),
              clearInterval(intervalId),
              clearTimeout(timeOut),
              clearTimeout(timeCloseTab),
              clearTimeout(timeCheckTabs),
              (timeCloseTab = null),
              (timeCheckTabs = null),
              (numberScroll = 0x0),
              (startTime = null),
              (domain = ""),
              chrome["tabs"][_0x4eb5fa(0x14c)]({}, function (_0x44a5d4) {
                const _0x5b4ed2 = _0x4eb5fa;
                let _0x14b870 = _0x44a5d4[_0x5b4ed2(0x138)]((_0x496906) => {
                  const _0x27fa3d = _0x5b4ed2;
                  if (
                    _0x496906?.[_0x27fa3d(0x145)]?.[_0x27fa3d(0x146)](
                      _0x27fa3d(0x149)
                    )
                  )
                    return _0x496906["id"];
                });
                chrome[_0x5b4ed2(0x137)]["sendMessage"](_0x14b870[0x0]["id"], {
                  cmd: _0x5b4ed2(0x142),
                });
              });
            let _0x4c3e3f = new FormData();
            _0x4c3e3f[_0x4eb5fa(0x141)]("postId", postId),
              fetch(_0x4eb5fa(0x144), {
                method: _0x4eb5fa(0x14e),
                headers: { Authorization: _0x4eb5fa(0x136) + token },
                body: _0x4c3e3f,
              })
                [_0x4eb5fa(0x135)]((_0x394820) => {
                  const _0x359e2e = _0x4eb5fa;
                  _0x394820[_0x359e2e(0x143)]()[_0x359e2e(0x135)](
                    (_0x8e4aa7) => {}
                  ),
                    (postId = null);
                })
                ["catch"]((_0x4b325e) => {
                  const _0x5dfebf = _0x4eb5fa;
                  console[_0x5dfebf(0x147)](_0x4b325e);
                });
          }
        }
      });
  }, 0x3e8));
function _0x1aeb(_0x19124a, _0x1e9241) {
  const _0x416eb8 = _0x416e();
  return (
    (_0x1aeb = function (_0x1aebdc, _0x3e3f64) {
      _0x1aebdc = _0x1aebdc - 0x135;
      let _0x3492dd = _0x416eb8[_0x1aebdc];
      return _0x3492dd;
    }),
    _0x1aeb(_0x19124a, _0x1e9241)
  );
}
function _0x416e() {
  const _0x184349 = [
    "POST",
    "361864xNgcOq",
    "then",
    "Bearer\x20",
    "tabs",
    "filter",
    "length",
    "remove",
    "4112QAOjTj",
    "1219743DXuiMZ",
    "14890WtXJsM",
    "10HXCLbD",
    "493vTKNOF",
    "402162hMXsIn",
    "append",
    "tabClosed",
    "json",
    "https://api.trafficsseo.com/api/v1/posts/completedPost",
    "url",
    "includes",
    "error",
    "2191fsJqDj",
    "https://trafficsseo.com",
    "4674681cWxLSO",
    "60adwaVA",
    "query",
    "418hInuUn",
  ];
  _0x416e = function () {
    return _0x184349;
  };
  return _0x416e();
}

import { BASE_API, deep_copy, SettingsManager, Time, Util } from "./utils.mjs";
const is_firefox = chrome.runtime.getURL("").startsWith("moz-extension://"),
  is_chrome = chrome.runtime.getURL("").startsWith("chrome-extension://"),
  bapi = {
    VERSION: null,
    browser: null,
    reconnect_scripts: null,
    register_language: null,
  };
is_firefox
  ? ((bapi.VERSION = "firefox"),
    (bapi.browser = browser),
    (bapi.reconnect_scripts = () => {
      browser.runtime.onInstalled.addListener(async () => {
        for (const a of browser.runtime.getManifest().content_scripts)
          browser.tabs.query({ url: a.matches }, (e) => {
            for (const t of e)
              browser.scripting.executeScript({
                target: { tabId: t.id },
                files: a.js,
              });
          });
      });
    }),
    (bapi.register_language = () => {
      browser.webRequest.onBeforeSendHeaders.addListener(
        (e) => {
          e = new URL(e.url);
          if ("en-US" !== e.searchParams.get("hl"))
            return (
              e.searchParams.set("hl", "en-US"), { redirectUrl: e.toString() }
            );
        },
        {
          urls: [
            "*://*.google.com/recaptcha/*",
            "*://*.recaptcha.net/recaptcha/*",
          ],
          types: ["sub_frame"],
        },
        ["blocking"]
      ),
        browser.webRequest.onBeforeSendHeaders.addListener(
          (e) => {
            e = new URL(e.url);
            if ("en" !== e.searchParams.get("lang"))
              return (
                e.searchParams.set("lang", "en"), { redirectUrl: e.toString() }
              );
          },
          {
            urls: [
              "*://*.funcaptcha.co/*",
              "*://*.funcaptcha.com/*",
              "*://*.arkoselabs.com/*",
              "*://*.arkoselabs.cn/*",
              "*://*.arkose.com.cn/*",
            ],
            types: ["sub_frame"],
          },
          ["blocking"]
        );
    }))
  : is_chrome &&
    ((bapi.VERSION = "chrome"),
    (bapi.browser = chrome),
    (bapi.reconnect_scripts = () => {
      chrome.runtime.onInstalled.addListener(async () => {
        for (const e of chrome.runtime.getManifest().content_scripts)
          for (const t of await chrome.tabs.query({ url: e.matches }))
            chrome.scripting.executeScript({
              target: { tabId: t.id },
              files: e.js,
            });
      });
    }),
    (bapi.register_language = () => {
      chrome.declarativeNetRequest.updateDynamicRules({
        addRules: [
          {
            id: 1,
            priority: 1,
            action: {
              type: "redirect",
              redirect: {
                transform: {
                  queryTransform: {
                    addOrReplaceParams: [{ key: "hl", value: "en-US" }],
                  },
                },
              },
            },
            condition: {
              regexFilter:
                "^(http|https)://[^\\.]*\\.(google\\.com|recaptcha\\.net)/recaptcha",
              resourceTypes: ["sub_frame"],
            },
          },
          {
            id: 2,
            priority: 1,
            action: {
              type: "redirect",
              redirect: {
                transform: {
                  queryTransform: {
                    addOrReplaceParams: [{ key: "lang", value: "en" }],
                  },
                },
              },
            },
            condition: {
              regexFilter:
                "^(http|https)://[^\\.]*\\.(funcaptcha\\.(co|com)|arkoselabs\\.(com|cn)|arkose\\.com\\.cn)",
              resourceTypes: ["sub_frame"],
            },
          },
        ],
        removeRuleIds: [1, 2],
      });
    }));
class API {
  static endpoints = {};
  static register(e, t) {
    var a = e.name + "." + t;
    const r = e[t];
    this.endpoints[a] = function () {
      return r.apply(e, [
        {
          tab_id: arguments[0].tab_id,
          frame_id: arguments[0].frame_id,
          ...arguments[0].data,
        },
      ]);
    };
  }
}
class Cache {
  static cache = {};
  static async set({
    tab_id: e,
    name: t,
    value: a,
    tab_specific: r = !1,
  } = {}) {
    return r && (t = e + "_" + t), (Cache.cache[t] = a), Cache.cache[t];
  }
  static async get({ tab_id: e, name: t, tab_specific: a = !1 } = {}) {
    return a && (t = e + "_" + t), Cache.cache[t];
  }
  static async remove({ tab_id: e, name: t, tab_specific: a = !1 } = {}) {
    a && (t = e + "_" + t);
    a = Cache.cache[t];
    return delete Cache.cache[t], a;
  }
  static async append({
    tab_id: e,
    name: t,
    value: a,
    tab_specific: r = !1,
  } = {}) {
    return (
      (t = r ? e + "_" + t : t) in Cache.cache || (Cache.cache[t] = []),
      Cache.cache[t].push(a),
      Cache.cache[t]
    );
  }
  static async empty({ tab_id: e, name: t, tab_specific: a = !1 } = {}) {
    a && (t = e + "_" + t);
    a = Cache.cache[t];
    return (Cache.cache[t] = []), a;
  }
  static async inc({ tab_id: e, name: t, tab_specific: a = !1 } = {}) {
    return (
      (t = a ? e + "_" + t : t) in Cache.cache || (Cache.cache[t] = 0),
      Cache.cache[t]++,
      Cache.cache[t]
    );
  }
  static async dec({ tab_id: e, name: t, tab_specific: a = !1 } = {}) {
    return (
      (t = a ? e + "_" + t : t) in Cache.cache || (Cache.cache[t] = 0),
      Cache.cache[t]--,
      Cache.cache[t]
    );
  }
  static async zero({ tab_id: e, name: t, tab_specific: a = !1 } = {}) {
    return a && (t = e + "_" + t), (Cache.cache[t] = 0), Cache.cache[t];
  }
}
API.register(Cache, "set"),
  API.register(Cache, "get"),
  API.register(Cache, "remove"),
  API.register(Cache, "append"),
  API.register(Cache, "empty"),
  API.register(Cache, "inc"),
  API.register(Cache, "dec"),
  API.register(Cache, "zero");
class TC {
  static working = {};
  static data = {};
  static metrics = { hit: {}, miss: {} };
  static get(e) {
    if (e in TC.data) {
      var t = TC.data[e];
      if (Time.time() / 1e3 - t.t < t.lifespan) return { s: !0, v: t.v };
      delete TC.data[e];
    }
    return { s: !1 };
  }
  static set(e, t, a) {
    var r = Time.time() / 1e3;
    return (TC.data[e] = { t: r, v: t, lifespan: a }), t;
  }
  static purge(e) {
    delete TC.data[e], delete TC.working[e];
  }
  static ready(t) {
    return new Promise(async (e) => {
      for (; TC.working[t]; ) await Time.sleep(10);
      e();
    });
  }
  static async getset(e, t, a = 1) {
    await TC.ready(e);
    var r = TC.get(e);
    if (r.s)
      return (
        e in TC.metrics.hit || (TC.metrics.hit[e] = 0), TC.metrics.hit[e]++, r.v
      );
    TC.working[e] = !0;
    try {
      e in TC.metrics.miss || (TC.metrics.miss[e] = 0), TC.metrics.miss[e]++;
      var s = await Promise.resolve(t());
      return TC.set(e, s, a), s;
    } finally {
      delete TC.working[e];
    }
  }
}
setInterval(() => {
  TC.metrics = { hit: {}, miss: {} };
  for (const e of Object.keys(TC.data)) TC.get(e);
}, 1e4);
class Settings {
  static data = {};
  static async _save() {
    try {
      await bapi.browser.storage.sync.set({ settings: Settings.data });
    } catch (e) {
      return e;
    }
  }
  static _get() {
    return TC.getset(
      "Settings._get()",
      () =>
        new Promise((t) => {
          bapi.browser.storage.sync.get(["settings"], ({ settings: e }) => {
            chrome.runtime.lastError;
            t(e);
          });
        })
    );
  }
  static async load() {
    (Settings.data = (await Settings._get()) || (await Settings.reset())),
      Settings.data.version !== SettingsManager.DEFAULT.version &&
        (await Settings.reset());
  }
  static get() {
    return Settings.data;
  }
  static async set({ id: e, value: t }) {
    (Settings.data[e] = t), await Settings._save();
  }
  static async update({ settings: e }) {
    for (var [t, a] of Object.entries(e)) Settings.data[t] = a;
    await Settings._save();
  }
  static async replace({ settings: e }) {
    (Settings.data = e), await Settings._save();
  }
  static async reset() {
    var e = Settings.data.key || "";
    return (
      (Settings.data = deep_copy(SettingsManager.DEFAULT)),
      (Settings.data.key = e),
      await Settings._save(),
      Settings.data
    );
  }
}
API.register(Settings, "get"),
  API.register(Settings, "set"),
  API.register(Settings, "update"),
  API.register(Settings, "replace"),
  API.register(Settings, "reset");
class Net {
  static async fetch({ url: e, options: t } = { options: {} }) {
    try {
      return await (await fetch(e, t)).text();
    } catch (e) {
      return null;
    }
  }
}
API.register(Net, "fetch");
class Tab {
  static reloads = {};
  static _reload({ tab_id: t }) {
    return new Promise((e) =>
      bapi.browser.tabs.reload(t, { bypassCache: !0 }, e)
    );
  }
  static async reload(
    { tab_id: e, delay: t, overwrite: a } = { delay: 0, overwrite: !0 }
  ) {
    t = parseInt(t);
    var r = Tab.reloads[e]?.delay - (Date.now() - Tab.reloads[e]?.start),
      r = isNaN(r) || r < 0 ? 0 : r;
    return (
      !!(a || 0 == r || t <= r) &&
      (clearTimeout(Tab.reloads[e]?.timer),
      (Tab.reloads[e] = {
        delay: t,
        start: Date.now(),
        timer: setTimeout(() => Tab._reload({ tab_id: e }), t),
      }),
      !0)
    );
  }
  static close({ tab_id: t }) {
    return new Promise((e) => bapi.browser.tabs.remove(t, e));
  }
  static open({ url: t } = { url: null }) {
    return new Promise((e) => bapi.browser.tabs.create({ url: t }, e));
  }
  static navigate({ tab_id: t, url: a }) {
    return new Promise((e) => bapi.browser.tabs.update(t, { url: a }, e));
  }
  static active() {
    return new Promise(async (t) => {
      var e;
      if ("firefox" !== bapi.VERSION)
        return (
          ([e] = await bapi.browser.tabs.query({
            active: !0,
            lastFocusedWindow: !0,
          })),
          t(e)
        );
      bapi.browser.tabs.query({ active: !0, lastFocusedWindow: !0 }, ([e]) => {
        bapi.browser.runtime.lastError, t(e);
      });
    });
  }
  static _info({ tab_id: a }) {
    return new Promise(async (t) => {
      if ("firefox" === bapi.VERSION)
        try {
          var e = await bapi.browser.tabs.get(a);
          t(e);
        } catch (e) {
          t(null);
        }
      else
        try {
          bapi.browser.tabs.get(a, (e) => t(e));
        } catch (e) {
          t(null);
        }
    });
  }
  static info({ tab_id: e }) {
    return TC.getset(`Tab.info(${e})`, () => Tab._info({ tab_id: e }));
  }
  static url({ tab_id: t }) {
    return TC.getset(`Tab.url(${t})`, async () => {
      var e = await Tab.info({ tab_id: t });
      return e && e.url ? e.url : null;
    });
  }
  static hostname({ tab_id: t }) {
    return TC.getset(`Tab.hostname(${t})`, async () => {
      var e = (await Tab.url({ tab_id: t })) || "Unknown Host";
      return Util.parse_hostname(e);
    });
  }
}
API.register(Tab, "reload"),
  API.register(Tab, "close"),
  API.register(Tab, "open"),
  API.register(Tab, "navigate"),
  API.register(Tab, "active"),
  API.register(Tab, "info"),
  API.register(Tab, "url"),
  API.register(Tab, "hostname");
class Inject {
  static async _inject(t) {
    t.target.tabId || ((e = await Tab.active()), (t.target.tabId = e.id));
    var e = new Promise((e) => bapi.browser.scripting.executeScript(t, e));
    return e;
  }
  static async func({ tab_id: e, func: t, args: a } = { args: [] }) {
    e = {
      target: { tabId: e, allFrames: !0 },
      world: "MAIN",
      injectImmediately: !0,
      func: t,
      args: a,
    };
    return Inject._inject(e);
  }
  static async files({ tab_id: e, frame_id: t, files: a }) {
    e = {
      target: { tabId: e, frameIds: [t] },
      world: "MAIN",
      injectImmediately: !0,
      files: a,
    };
    return "firefox" === bapi.VERSION && delete e.world, Inject._inject(e);
  }
  static async register({ scripts: e }) {
    await chrome.scripting.registerContentScripts(e);
  }
  static async unregister() {
    await chrome.scripting.unregisterContentScripts();
  }
}
API.register(Inject, "func"),
  API.register(Inject, "files"),
  API.register(Inject, "register"),
  API.register(Inject, "unregister");
class Server {
  static ENDPOINT =
    BASE_API + "/status?v=" + bapi.browser.runtime.getManifest().version;
  static is_fetching_plan = !1;
  static async get_plan({ key: e }) {
    if (Server.is_fetching_plan) return !1;
    Server.is_fetching_plan = !0;
    let t = { plan: "Unknown", credit: 0 };
    try {
      "undefined" === e && (e = "");
      var a = await fetch(Server.ENDPOINT + "&key=" + e);
      t = JSON.parse(await a.text());
    } catch {}
    return (Server.is_fetching_plan = !1), t;
  }
}
API.register(Server, "get_plan");
class Image {
  static encode({ url: e }) {
    return new Promise((a) => {
      fetch(e)
        .then((e) => e.blob())
        .then((e) => {
          const t = new FileReader();
          (t.onload = () => a(t.result)), t.readAsDataURL(e);
        });
    });
  }
}
API.register(Image, "encode");
class Relay {
  static async send({ tab_id: e, data: t }) {
    (e = e || (await Tab.active()).id), bapi.browser.tabs.sendMessage(e, t);
  }
}
API.register(Relay, "send");
class Icon {
  static set({ status: a }) {
    return new Promise((e) => {
      var t =
        "firefox" === bapi.VERSION
          ? bapi.browser.browserAction
          : bapi.browser.action;
      "on" === a
        ? t.setIcon(
            {
              path: {
                16: "/icon/16.png",
                32: "/icon/32.png",
                48: "/icon/48.png",
                128: "/icon/128.png",
              },
            },
            e
          )
        : "off" === a
        ? t.setIcon(
            {
              path: {
                16: "/icon/16g.png",
                32: "/icon/32g.png",
                48: "/icon/48g.png",
                128: "/icon/128g.png",
              },
            },
            e
          )
        : e(!1);
    });
  }
  static set_badge_text({ tab_id: a, data: r }) {
    return new Promise((e) => {
      var t = { text: r };
      a && (t.tabId = a), bapi.browser.action.setBadgeText(t, e);
    });
  }
  static set_badge_color({ tab_id: a, data: r }) {
    return new Promise((e) => {
      var t = { color: r };
      a && (t.tabId = a), bapi.browser.action.setBadgeBackgroundColor(t, e);
    });
  }
  static async set_badge({
    tab_id: e,
    data: { global: t, text: a, color: r },
  }) {
    e || t || (e = (await Tab.active()).id), t && (e = null);
    t = [Icon.set_badge_text({ tab_id: e, data: a })];
    return (
      r && t.push(Icon.set_badge_color({ tab_id: e, data: r })), Promise.all(t)
    );
  }
}
API.register(Icon, "set");
class Browser {
  static dl_options = null;
  static async version() {
    return bapi.VERSION;
  }
  static async log() {}
  static async upload({ data: e }) {
    Browser.dl_options = e;
  }
  static async download({ frame_id: e }) {
    if (0 === e) return Browser.dl_options;
  }
}
API.register(Browser, "version"),
  API.register(Browser, "log"),
  API.register(Browser, "upload"),
  API.register(Browser, "download");
class ContextMenu {
  static listen() {
    bapi.browser.contextMenus.onClicked.addListener(function (t, e) {
      if ("nopecha_disable_host" === t.menuItemId) {
        t = t.pageUrl;
        if (t) {
          t = Util.parse_hostname(t);
          let e = new Set();
          for (const a of Settings.data.disabled_hosts) e.add(a.trim());
          e.add(t),
            (e = [...e]),
            Settings.set({ id: "disabled_hosts", value: e });
        }
      }
    });
  }
  static create() {
    bapi.browser.contextMenus.create({
      title: "Disable NopeCHA on this site",
      id: "nopecha_disable_host",
    });
  }
}
bapi.browser.runtime.onInstalled.addListener(ContextMenu.create),
  ContextMenu.listen();
class Debugger {
  static VERSION = "1.3";
  static tabs = [];
  static initialized = !1;
  static _initialize() {
    Debugger.initialized ||
      (chrome.debugger.onEvent.addListener((e, t, a) => {}),
      (Debugger.initialized = !0));
  }
  static _on_detach(e) {
    e = Debugger.tabs.indexOf(e);
    -1 !== e && Debugger.tabs.splice(e, 1);
  }
  static attach({ tab_id: t }) {
    return (
      Debugger._initialize(),
      new Promise((e) => {
        if (Debugger.tabs.includes(t)) return e(!1);
        Debugger.tabs.push(t),
          chrome.debugger.attach({ tabId: t }, Debugger.VERSION, async () => {
            e(!0);
          });
      })
    );
  }
  static detach({ tab_id: t }) {
    return new Promise((e) => {
      if (!Debugger.tabs.includes(t)) return e(!1);
      chrome.debugger.detach({ tabId: t }, () => {
        Debugger._on_detach(t), e(!0);
      });
    });
  }
  static command({ tab_id: t, method: a, params: r } = { params: null }) {
    return new Promise((e) => {
      chrome.debugger.sendCommand({ tabId: t }, a, r, e);
    });
  }
}
function listen_setup() {
  bapi.browser.webRequest.onBeforeRequest.addListener(
    (e) => {
      try {
        var t,
          a,
          r = e.url.split("#");
        2 <= r.length &&
          (r.shift(),
          (t = "#" + r.join("#")),
          (a = SettingsManager.import(t)),
          Settings.update({ settings: a }));
      } catch (e) {}
    },
    { urls: ["*://*.nopecha.com/setup*"] }
  );
}
API.register(Debugger, "attach"),
  API.register(Debugger, "detach"),
  API.register(Debugger, "command"),
  (async () => {
    listen_setup(),
      bapi.register_language(),
      await Settings.load(),
      await Icon.set({ status: Settings.data.enabled ? "on" : "off" }),
      bapi.browser.runtime.onMessage.addListener((e, t, a) => {
        const r = e[0];
        let s = null;
        (e =
          (s = 1 < e.length ? (2 === e.length ? e[1] : e.slice(1)) : s) &&
          "tab_id" in s
            ? s.tab_id
            : t?.tab?.id),
          (t = t?.frameId);
        try {
          Promise.resolve(API.endpoints[r]({ tab_id: e, frame_id: t, data: s }))
            .then((e) => {
              [
                "Browser.log",
                "Settings.get",
                "Settings.set",
                "Cache.get",
                "Cache.set",
                "Tab.info",
                "Tab.hostname",
              ].includes(r);
              try {
                a(e);
              } catch (e) {}
            })
            .catch((e) => {});
        } catch (e) {}
        return !0;
      });
  })();
