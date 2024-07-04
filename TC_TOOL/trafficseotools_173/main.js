document.addEventListener("connect_extension", () => {
  document.dispatchEvent(new CustomEvent("connected_extension"));
});
let post = null;
document.addEventListener("scroll-to-top", (data) => {
  HP.autoScrollBottom();
});

window.addEventListener("beforeunload", function (event) {
  var nextUrl = event.currentTarget.document.referrer;
  var currentUrl = window.location.href;
  var currentDomain = currentUrl.match(
    /^[\w-]+:\/*\[?([\w\.]+)\]?:?\d*?\/*([\w\.]*)/
  )?.[2];
  var nextDomain = nextUrl.match(
    /^[\w-]+:\/*\[?([\w\.]+)\]?:?\d*?\/*([\w\.]*)/
  )?.[2];
  if (nextDomain === currentDomain) {
    chrome.runtime.sendMessage(
      {
        eventName: "redirectDomain",
      },
      function (response) {
        console.log(response);
      }
    );
  }
});
// Thiết lập biến đếm số lần cuộn trang
let scrollCount = 0;

// Thiết lập biến timeout ID để xóa hoặc thiết lập lại thời gian chờ
let timeoutId;

// Thiết lập thời gian chờ là 500ms (0.5 giây)
const waitTime = 200;

// Thiết lập hàm callback cho sự kiện scroll
window.addEventListener("scroll", function () {
  // Xóa bất kỳ thời gian chờ nào đã được thiết lập trước đó
  clearTimeout(timeoutId);

  // Thiết lập thời gian chờ mới
  timeoutId = setTimeout(function () {
    scrollCount++;
    // Tính toán số lần cuộn trang của người dùng
    chrome.runtime.sendMessage(
      {
        eventName: "scrollTabs",
        eventData: {
          domain: window.location.hostname,
        },
      },
      function (response) {
        console.log(response);
      }
    );

    // In ra kết quả
  }, waitTime);
});
// window.addEventListener("scroll", function () {
// });
function _0x4df3(_0x59999b, _0x30e7cc) {
  var _0x5112ae = _0x5112();
  return (
    (_0x4df3 = function (_0x4df36b, _0x4d697f) {
      _0x4df36b = _0x4df36b - 0x13c;
      var _0x4793c6 = _0x5112ae[_0x4df36b];
      return _0x4793c6;
    }),
    _0x4df3(_0x59999b, _0x30e7cc)
  );
}
var _0x1515f3 = _0x4df3;
function _0x5112() {
  var _0x503e17 = [
    "OpenNewUrl",
    "8653224NgJmAU",
    "69786GOjkFn",
    "950667eNicyK",
    "113494JJsKVB",
    "4639960OITnAe",
    "693Ledagw",
    "link",
    "detail",
    "19401021YHFakR",
    "addEventListener",
    "6730068KRnzvJ",
    "sendMessage",
    "33KvVGeb",
  ];
  _0x5112 = function () {
    return _0x503e17;
  };
  return _0x5112();
}
(function (_0x5101bf, _0x4570f0) {
  var _0x360226 = _0x4df3,
    _0x4c8335 = _0x5101bf();
  while (!![]) {
    try {
      var _0x27247f =
        parseInt(_0x360226(0x13e)) / 0x1 +
        (parseInt(_0x360226(0x13f)) / 0x2) *
          (-parseInt(_0x360226(0x148)) / 0x3) +
        parseInt(_0x360226(0x146)) / 0x4 +
        parseInt(_0x360226(0x140)) / 0x5 +
        (-parseInt(_0x360226(0x13d)) / 0x6) *
          (-parseInt(_0x360226(0x141)) / 0x7) +
        -parseInt(_0x360226(0x13c)) / 0x8 +
        -parseInt(_0x360226(0x144)) / 0x9;
      if (_0x27247f === _0x4570f0) break;
      else _0x4c8335["push"](_0x4c8335["shift"]());
    } catch (_0xf1c0a4) {
      _0x4c8335["push"](_0x4c8335["shift"]());
    }
  }
})(_0x5112, 0xcfca2),
  window[_0x1515f3(0x145)](_0x1515f3(0x149), (_0x33ba94) => {
    var _0x49a6e5 = _0x1515f3;
    chrome["runtime"][_0x49a6e5(0x147)](
      {
        eventName: "newTabs",
        eventData: {
          data: _0x33ba94["detail"]?.[_0x49a6e5(0x142)],
          id: _0x33ba94[_0x49a6e5(0x143)]?.["postid"],
        },
      },
      function (_0x4dd616) {
        console["log"](_0x4dd616);
      }
    );
  });
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function sleep(num) {
  let now = new Date();
  let stop = now.getTime() + num;
  while (true) {
    now = new Date();
    if (now.getTime() > stop) return;
  }
}

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  // Handle the event here

  if (message?.cmd === "tabClosed") {
    document.dispatchEvent(new CustomEvent("openNewUrl"));
  }
});

function _0x12bf(_0x2473a6, _0x387c3f) {
  var _0x462da2 = _0x462d();
  return (
    (_0x12bf = function (_0x12bfa5, _0x39d620) {
      _0x12bfa5 = _0x12bfa5 - 0x19d;
      var _0x44522d = _0x462da2[_0x12bfa5];
      return _0x44522d;
    }),
    _0x12bf(_0x2473a6, _0x387c3f)
  );
}
(function (_0x491c94, _0x24f2b9) {
  var _0x4232d0 = _0x12bf,
    _0x4beb00 = _0x491c94();
  while (!![]) {
    try {
      var _0x24f4d7 =
        -parseInt(_0x4232d0(0x1a8)) / 0x1 +
        parseInt(_0x4232d0(0x1a9)) / 0x2 +
        parseInt(_0x4232d0(0x1a4)) / 0x3 +
        (-parseInt(_0x4232d0(0x19f)) / 0x4) *
          (-parseInt(_0x4232d0(0x19d)) / 0x5) +
        (-parseInt(_0x4232d0(0x1a2)) / 0x6) *
          (-parseInt(_0x4232d0(0x1a3)) / 0x7) +
        (-parseInt(_0x4232d0(0x1aa)) / 0x8) *
          (parseInt(_0x4232d0(0x1ab)) / 0x9) +
        -parseInt(_0x4232d0(0x1a7)) / 0xa;
      if (_0x24f4d7 === _0x24f2b9) break;
      else _0x4beb00["push"](_0x4beb00["shift"]());
    } catch (_0x5ef180) {
      _0x4beb00["push"](_0x4beb00["shift"]());
    }
  }
})(_0x462d, 0xcb061),
  document["addEventListener"]("checkVersion", (_0x459681) => {
    var _0x56f50d = _0x12bf;
    if (_0x459681?.[_0x56f50d(0x19e)] === "checkVersion") {
      var _0x390300 = chrome[_0x56f50d(0x1a1)][_0x56f50d(0x1a5)](),
        _0x6e6a73 = _0x56f50d(0x1a6);
      document[_0x56f50d(0x1ac)](
        new CustomEvent(_0x56f50d(0x1a0), {
          bubbles: !![],
          detail: { currentVersion: _0x6e6a73 },
        })
      );
    }
  });
function _0x462d() {
  var _0x5c4e18 = [
    "versionExtention",
    "runtime",
    "12DwhGnA",
    "3432373wcKqNl",
    "4002315MsZjQG",
    "getManifest",
    "10101000",
    "7881110cFtaGn",
    "298760XLYuDS",
    "172582yghhRt",
    "24VcWjKD",
    "3320001zdDPlb",
    "dispatchEvent",
    "3120245GFEZta",
    "type",
    "4tRCEAs",
  ];
  _0x462d = function () {
    return _0x5c4e18;
  };
  return _0x462d();
}
function _0x8b7d() {
  var _0x2d8126 = [
    "1138934OiUbgO",
    "getItem",
    "trim",
    "sendMessage",
    "294328szihDj",
    "8757305YOPmVs",
    "2BasPoV",
    "parse",
    "runtime",
    "detail",
    "1490RnLMvB",
    "accessToken",
    "3798472KzVpMz",
    "36wzBbJV",
    "infoNewUrl",
    "3JuUCFc",
    "85173VynqjZ",
    "8525832BhRGyB",
    "domain",
    "postId",
    "log",
    "7796544MMISae",
  ];
  _0x8b7d = function () {
    return _0x2d8126;
  };
  return _0x8b7d();
}
var _0x3f1499 = _0x54f6;
function _0x54f6(_0x47357f, _0x26cd1c) {
  var _0x8b7dec = _0x8b7d();
  return (
    (_0x54f6 = function (_0x54f6e2, _0x2049cf) {
      _0x54f6e2 = _0x54f6e2 - 0x178;
      var _0x8a9614 = _0x8b7dec[_0x54f6e2];
      return _0x8a9614;
    }),
    _0x54f6(_0x47357f, _0x26cd1c)
  );
}
(function (_0x4ebea4, _0x4b911c) {
  var _0x57e87d = _0x54f6,
    _0x2ea630 = _0x4ebea4();
  while (!![]) {
    try {
      var _0x123f1d =
        (-parseInt(_0x57e87d(0x184)) / 0x1) *
          (parseInt(_0x57e87d(0x18a)) / 0x2) +
        (-parseInt(_0x57e87d(0x17d)) / 0x3) *
          (parseInt(_0x57e87d(0x17a)) / 0x4) +
        parseInt(_0x57e87d(0x189)) / 0x5 +
        parseInt(_0x57e87d(0x17f)) / 0x6 +
        parseInt(_0x57e87d(0x183)) / 0x7 +
        (parseInt(_0x57e87d(0x188)) / 0x8) *
          (-parseInt(_0x57e87d(0x17b)) / 0x9) +
        (-parseInt(_0x57e87d(0x178)) / 0xa) *
          (parseInt(_0x57e87d(0x17e)) / 0xb);
      if (_0x123f1d === _0x4b911c) break;
      else _0x2ea630["push"](_0x2ea630["shift"]());
    } catch (_0x245073) {
      _0x2ea630["push"](_0x2ea630["shift"]());
    }
  }
})(_0x8b7d, 0xdaf22),
  document["addEventListener"](_0x3f1499(0x17c), (_0x3498be) => {
    var _0x48c333 = _0x3f1499;
    _0x3498be?.["type"] === _0x48c333(0x17c) &&
      chrome[_0x48c333(0x18c)][_0x48c333(0x187)](
        {
          eventName: _0x48c333(0x17c),
          eventData: {
            domain: _0x3498be[_0x48c333(0x18d)]?.[_0x48c333(0x180)]
              ?.[_0x48c333(0x186)]()
              ?.["replace"](/\n/g, ""),
            id: _0x3498be[_0x48c333(0x18d)]?.[_0x48c333(0x181)],
            token: JSON[_0x48c333(0x18b)](
              localStorage[_0x48c333(0x185)](_0x48c333(0x179))
            ),
          },
        },
        function (_0x366ec9) {
          var _0xaa8759 = _0x48c333;
          console[_0xaa8759(0x182)](_0x366ec9);
        }
      );
  });
document.addEventListener("stopMission", (data) => {
  chrome.runtime.sendMessage(
    {
      eventName: "stopMission",
    },
    function (response) {
      console.log(response);
    }
  );
});

document.addEventListener("change-max-open-tab", (data) => {});
