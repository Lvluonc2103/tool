(() => {
  var e = (function () {
    "use strict";
    Array.prototype.indexOf ||
      (Array.prototype.indexOf = function (t) {
        for (let e = 0; e < this.length; e++) if (this[e] === t) return e;
        return -1;
      });
    const i = (e, t) => Array.prototype.slice.call(e, t);
    let e = null;
    "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope
      ? (e = self)
      : "undefined" != typeof global
      ? (e = global)
      : window && (e = window);
    const t = e,
      u = e.document;
    var n =
      "undefined" != typeof navigator && navigator.useragent
        ? navigator.userAgent
        : "";
    let g = null;
    (/msie (\d+)/.test(n.toLowerCase()) ||
      /trident\/.*; rv:(\d+)/.test(n.toLowerCase())) &&
      (g = parseInt(RegExp.$1, 10));
    function E(e, t) {
      for (var n in e)
        if (!c(n)) {
          var r = e[n];
          try {
            t[n] = r;
          } catch (e) {}
        }
      return t;
    }
    function m(e, a, s) {
      var t;
      for (t of Array.from(e))
        s._has(t) &&
          (a["on" + t] = ((o) =>
            function (e) {
              var t,
                n,
                r = {};
              for (t in e) c(t) || ((n = e[t]), (r[t] = n === a ? s : n));
              return s.dispatchEvent(o, r);
            })(t));
    }
    function w(o) {
      let r = {};
      const a = (e) => r[e] || [],
        s = {
          addEventListener: function (e, t, n) {
            (r[e] = a(e)),
              0 <= r[e].indexOf(t) ||
                ((n = void 0 === n ? r[e].length : n), r[e].splice(n, 0, t));
          },
          removeEventListener: function (e, t) {
            void 0 === e
              ? (r = {})
              : (void 0 === t && (r[e] = []),
                -1 !== (t = a(e).indexOf(t)) && a(e).splice(t, 1));
          },
        };
      return (
        (s.dispatchEvent = function () {
          var t = i(arguments),
            e = t.shift(),
            n =
              (o ||
                (t[0] = E(
                  t[0],
                  (function (t) {
                    var e;
                    if (u && null != u.createEventObject)
                      return ((e = u.createEventObject()).type = t), e;
                    try {
                      return new Event(t);
                    } catch (e) {
                      return { type: t };
                    }
                  })(e)
                )),
              s["on" + e]),
            r = (n && n.apply(s, t), a(e).concat(a("*")));
          for (let e = 0; e < r.length; e++) r[e].apply(s, t);
        }),
        (s._has = (e) => !(!r[e] && !s["on" + e])),
        o &&
          ((s.listeners = (e) => i(a(e))),
          (s.on = s.addEventListener),
          (s.off = s.removeEventListener),
          (s.fire = s.dispatchEvent),
          (s.once = function (e, t) {
            var n = function () {
              return s.off(e, n), t.apply(null, arguments);
            };
            return s.on(e, n);
          }),
          (s.destroy = () => (r = {}))),
        s
      );
    }
    const b = ["load", "loadend", "loadstart"],
      L = ["progress", "abort", "error", "timeout"],
      c = (e) => ["returnValue", "totalSize", "position"].includes(e);
    var x = function (e, t) {
      let n;
      switch ((null == t && (t = {}), typeof e)) {
        case "object":
          var r,
            o = [];
          for (r in e) {
            var a = e[r];
            (n = r.toLowerCase()), o.push(n + `:	` + a);
          }
          return o.join("\n") + "\n";
        case "string":
          o = e.split("\n");
          for (var s of Array.from(o))
            /([^:]+):\s*(.+)/.test(s) &&
              ((n = null != RegExp.$1 ? RegExp.$1.toLowerCase() : void 0),
              (s = RegExp.$2),
              null == t[n]) &&
              (t[n] = s);
          return t;
      }
      return [];
    };
    function r() {
      const i = new R(),
        u = {};
      let o = null,
        a = void 0,
        c = void 0,
        f = void 0;
      var s = 0;
      function t() {
        if (
          ((f.status = o || i.status),
          (-1 === o && g < 10) || (f.statusText = i.statusText),
          -1 !== o)
        ) {
          var e,
            t = x(i.getAllResponseHeaders());
          for (e in t) {
            var n,
              r = t[e];
            f.headers[e] || ((n = e.toLowerCase()), (f.headers[n] = r));
          }
        }
      }
      function r(e) {
        for (; s < e && s < 4; )
          (y.readyState = ++s),
            1 === s && y.dispatchEvent("loadstart", {}),
            2 === s && n(),
            4 === s && (n(), d()),
            y.dispatchEvent("readystatechange", {}),
            4 === s && (!1 === u.async ? p() : setTimeout(p, 0));
      }
      function l(e) {
        if (4 !== e) r(e);
        else {
          const n = N.listeners("after");
          var t = function () {
            var e;
            0 < n.length
              ? 2 === (e = n.shift()).length
                ? (e(u, f), t())
                : 3 === e.length && u.async
                ? e(u, f, t)
                : t()
              : r(4);
          };
          t();
        }
      }
      const n = function () {
          (y.status = f.status), (y.statusText = f.statusText);
        },
        d = function () {
          "text" in f && (y.responseText = f.text),
            "xml" in f && (y.responseXML = f.xml),
            "data" in f && (y.response = f.data),
            "finalUrl" in f && (y.responseURL = f.finalUrl);
        },
        p = function () {
          a || y.dispatchEvent("load", {}),
            y.dispatchEvent("loadend", {}),
            a && (y.readyState = 0);
        };
      function e() {
        a = !0;
      }
      var h,
        v,
        y = w();
      (u.xhr = y),
        (i.onreadystatechange = function (e) {
          try {
            2 === i.readyState && t();
          } catch (e) {}
          if (4 === i.readyState) {
            if (((c = !1), t(), i.responseType && "text" !== i.responseType))
              "document" === i.responseType
                ? ((f.xml = i.responseXML), (f.data = i.responseXML))
                : (f.data = i.response);
            else {
              (f.text = i.responseText), (f.data = i.responseText);
              try {
                f.xml = i.responseXML;
              } catch (e) {}
            }
            "responseURL" in i && (f.finalUrl = i.responseURL);
          }
          l(i.readyState);
        }),
        y.addEventListener("error", e),
        y.addEventListener("timeout", e),
        y.addEventListener("abort", e),
        y.addEventListener("progress", function (e) {
          s < 3
            ? l(3)
            : i.readyState <= 3 && y.dispatchEvent("readystatechange", {});
        }),
        "withCredentials" in i && (y.withCredentials = !1),
        (y.status = 0);
      for (h of Array.from(L.concat(b))) y["on" + h] = null;
      return (
        (y.open = function (e, t, n, r, o) {
          (s = 0),
            (a = !1),
            (c = !1),
            (u.headers = {}),
            (u.headerNames = {}),
            (u.status = 0),
            (u.method = e),
            (u.url = t),
            (u.async = !1 !== n),
            (u.user = r),
            (u.pass = o),
            (f = { headers: {} }),
            l(1);
        }),
        (y.send = function (e) {
          let n, r;
          for (n of ["type", "timeout", "withCredentials"])
            (r = "type" === n ? "responseType" : n) in y && (u[n] = y[r]);
          u.body = e;
          const o = function () {
              m(L, i, y),
                y.upload && m(L.concat(b), i.upload, y.upload),
                (c = !0),
                i.open(u.method, u.url, u.async, u.user, u.pass);
              for (n of ["type", "timeout", "withCredentials"])
                (r = "type" === n ? "responseType" : n),
                  n in u && (i[r] = u[n]);
              for (var e in u.headers) {
                var t = u.headers[e];
                e && i.setRequestHeader(e, t);
              }
              i.send(u.body);
            },
            a = N.listeners("before");
          var s = function () {
            if (!a.length) return o();
            function e(e) {
              "object" != typeof e ||
              ("number" != typeof e.status && "number" != typeof f.status)
                ? s()
                : (E(e, f),
                  "data" in e || (e.data = e.response || e.text),
                  l(4));
            }
            (e.head = function (e) {
              E(e, f), l(2);
            }),
              (e.progress = function (e) {
                E(e, f), l(3);
              });
            var t = a.shift();
            1 === t.length
              ? e(t(u))
              : 2 === t.length && u.async
              ? t(u, e)
              : e();
          };
          s();
        }),
        (y.abort = function () {
          (o = -1), c ? i.abort() : y.dispatchEvent("abort", {});
        }),
        (y.setRequestHeader = function (e, t) {
          var n = null != e ? e.toLowerCase() : void 0,
            n = (u.headerNames[n] = u.headerNames[n] || e);
          u.headers[n] && (t = u.headers[n] + ", " + t), (u.headers[n] = t);
        }),
        (y.getResponseHeader = (e) =>
          O(f.headers[e ? e.toLowerCase() : void 0])),
        (y.getAllResponseHeaders = () => O(x(f.headers))),
        i.overrideMimeType &&
          (y.overrideMimeType = function () {
            i.overrideMimeType.apply(i, arguments);
          }),
        i.upload && ((v = w()), (y.upload = v), (u.upload = v)),
        (y.UNSENT = 0),
        (y.OPENED = 1),
        (y.HEADERS_RECEIVED = 2),
        (y.LOADING = 3),
        (y.DONE = 4),
        (y.response = ""),
        (y.responseText = ""),
        (y.responseXML = null),
        (y.readyState = 0),
        (y.statusText = ""),
        y
      );
    }
    const N = w(!0),
      O = (e) => (void 0 === e ? null : e),
      R = t.XMLHttpRequest;
    (r.UNSENT = 0),
      (r.OPENED = 1),
      (r.HEADERS_RECEIVED = 2),
      (r.LOADING = 3),
      (r.DONE = 4);
    var o = {
      patch() {
        R && (t.XMLHttpRequest = r);
      },
      unpatch() {
        R && (t.XMLHttpRequest = R);
      },
      Native: R,
      XH: r,
    };
    function a(e, u) {
      null == u && (u = { headers: {} });
      let c = null;
      e instanceof Request ? (c = e) : (u.url = e);
      const f = N.listeners("before"),
        l = N.listeners("after");
      return new Promise(function (n, t) {
        function r(e) {
          var t;
          return l.length
            ? 2 === (t = l.shift()).length
              ? (t(a(), e), r(e))
              : 3 === t.length
              ? t(a(), e, r)
              : r(e)
            : n(e);
        }
        function o() {
          var e;
          if (f.length)
            return 1 === (e = f.shift()).length
              ? s(e(u))
              : 2 === e.length && e(a(), s);
          i();
        }
        const a = function () {
            return (
              u.headers && (u.headers = new Headers(u.headers)),
              (c = c || new Request(u.url, u)),
              E(u, c)
            );
          },
          s = function (e) {
            void 0 !== e
              ? ((e = new Response(e.body || e.text, e)), n(e), r(e))
              : o();
          };
        var i = () =>
          d(a())
            .then((e) => r(e))
            .catch(function (e) {
              return (n = t), r(e), t(e);
            });
        o();
      });
    }
    const d = t.fetch;
    var s = {
      patch() {
        d && (t.fetch = a);
      },
      unpatch() {
        d && (t.fetch = d);
      },
      Native: d,
      XH: a,
    };
    const f = N;
    return (
      (f.EventEmitter = w),
      (f.before = function (e, t) {
        if (e.length < 1 || 2 < e.length) throw "invalid hook";
        return f.on("before", e, t);
      }),
      (f.after = function (e, t) {
        if (e.length < 2 || 3 < e.length) throw "invalid hook";
        return f.on("after", e, t);
      }),
      (f.enable = function () {
        o.patch(), s.patch();
      }),
      (f.disable = function () {
        o.unpatch(), s.unpatch();
      }),
      (f.XMLHttpRequest = o.Native),
      (f.fetch = s.Native),
      (f.headers = x),
      f.enable(),
      f
    );
  })();
  function s(e, t) {
    var n = {};
    for (const u of t) n[u] = [];
    for (const c of e)
      for (const f of Object.keys(n)) {
        var r = 0 === n[f].length ? 0 : n[f][n[f].length - 1][2],
          o = [];
        if (f in c) {
          for (var [a, s] of c[f].entries())
            (1 === t.length && 10 < a && a < c[f].length - 10) ||
              o.push([Math.ceil(s[0]), Math.ceil(s[1]), Math.ceil(s[2] + r)]);
          n[f].push(...o);
        }
      }
    for (const l of Object.keys(n)) {
      var i = [];
      let e = null;
      for (const d of n[l]) null !== e && i.push(d[2] - e), (e = d[2]);
      let t = 0;
      0 < i.length && (t = i.reduce((e, t) => e + t) / i.length),
        (n[l + "-mp"] = t);
    }
    return n;
  }
  function i(e, t, n = null) {
    var r = JSON.parse(JSON.stringify(e));
    for (const s of Object.keys(r))
      if (!s.endsWith("-mp")) {
        var o = [];
        for (let e = 0; e < r[s].length; e++) {
          var a = r[s][e][2] + t;
          (null !== n && n <= a) || o.push([r[s][e][0], r[s][e][1], a]);
        }
        r[s] = o;
      }
    return r;
  }
  function u(e, t) {
    for (const n of Object.keys(t)) e[n] = t[n];
  }
  let c = [];
  window.addEventListener("message", (e) => {
    "apkfoekwaokfowe" === e.data.event && c.push(e.data.metadata);
  }),
    window.postMessage({ event: "pfowakepfowkepofkwa" }),
    e.before((e) => {
      try {
        var t, n, r, o;
        "POST" === (a = e).method &&
          a.url.startsWith("https://hcaptcha.com/checkcaptcha/") &&
          ((t = JSON.parse(e.body)),
          (n = JSON.parse(t.motionData)),
          (r = s(c, ["mm", "md", "mu"])),
          (o = s(c, ["mm"])),
          u(n, i(r, n.st)),
          u(n.topLevel, i(o, n.topLevel.st, n.st)),
          (t.motionData = JSON.stringify(n)),
          (e.body = JSON.stringify(t)),
          (c = []));
      } catch (e) {}
      var a;
    });
})();
