(async () => {
  function e() {
    var e =
        "true" ===
        document
          .querySelector(".recaptcha-checkbox")
          ?.getAttribute("aria-checked"),
      t = document.querySelector("#recaptcha-verify-button")?.disabled;
    return e || t;
  }
  function y(r = 15e3) {
    return new Promise(async (e) => {
      for (var t = Time.time(); ; ) {
        var a = document.querySelectorAll(".rc-imageselect-tile"),
          c = document.querySelectorAll(".rc-imageselect-dynamic-selected");
        if (0 < a.length && 0 === c.length) return e(!0);
        if (Time.time() - t > r) return e(!1);
        await Time.sleep(100);
      }
    });
  }
  let v = null;
  function w(e = 500) {
    return new Promise((f) => {
      let m = !1;
      const h = setInterval(async () => {
        if (!m) {
          m = !0;
          var c = document
              .querySelector(".rc-imageselect-instructions")
              ?.innerText?.split("\n"),
            r = await (async function (e) {
              let t = null;
              return (
                (t =
                  1 < e.length
                    ? (t = e.slice(0, 2).join(" ")).replace(/\s+/g, " ")?.trim()
                    : t.join("\n")) || null
              );
            })(c);
          if (r) {
            var c = 3 === c.length,
              i = document.querySelectorAll("table tr td");
            if (9 === i.length || 16 === i.length) {
              var l = [],
                n = Array(i.length).fill(null);
              let e = null,
                t = !1,
                a = 0;
              for (const u of i) {
                var s = u?.querySelector("img");
                if (!s) return void (m = !1);
                var o = s?.src?.trim();
                if (!o || "" === o) return void (m = !1);
                300 <= s.naturalWidth
                  ? (e = o)
                  : 100 == s.naturalWidth && ((n[a] = o), (t = !0)),
                  l.push(u),
                  a++;
              }
              t && (e = null);
              i = JSON.stringify([e, n]);
              if (v !== i)
                return (
                  (v = i),
                  clearInterval(h),
                  (m = !1),
                  f({
                    task: r,
                    is_hard: c,
                    cells: l,
                    background_url: e,
                    urls: n,
                  })
                );
            }
          }
          m = !1;
        }
      }, e);
    });
  }
  async function t() {
    !0 ===
      (await BG.exec("Cache.get", {
        name: "recaptcha_widget_visible",
        tab_specific: !0,
      })) &&
      (e()
        ? (c = c || !0)
        : ((c = !1), await Time.sleep(500), Input.click("#recaptcha-anchor")));
  }
  async function a(c) {
    var t = await BG.exec("Cache.get", {
      name: "recaptcha_image_visible",
      tab_specific: !0,
    });
    if (
      !0 === t &&
      null === document.querySelector(".rc-doscaptcha-header") &&
      !e()
    )
      if (
        ((_ = !(
          _ ||
          !(function () {
            for (const e of [".rc-imageselect-incorrect-response"])
              if ("" === document.querySelector(e)?.style.display) return 1;
          })() ||
          ((b = []), 0)
        )),
        (function () {
          for (const t of [
            ".rc-imageselect-error-select-more",
            ".rc-imageselect-error-dynamic-more",
            ".rc-imageselect-error-select-something",
          ]) {
            var e = document.querySelector(t);
            if ("" === e?.style.display || 0 === e?.tabIndex) return 1;
          }
        })())
      )
        b = [];
      else if (await y()) {
        var {
            task: t,
            is_hard: r,
            cells: i,
            background_url: l,
            urls: n,
          } = await w(),
          s = 9 == i.length ? 3 : 4,
          o = [];
        let e,
          a = [];
        if (null === l) {
          e = "1x1";
          for (let e = 0; e < n.length; e++) {
            var u = n[e],
              f = i[e];
            u && !b.includes(u) && (o.push(u), a.push(f));
          }
        } else o.push(l), (e = s + "x" + s), (a = i);
        var m = [];
        for (const d of o) {
          const p = await Image.encode(d);
          if (!p) return void (v = null);
          m.push(p);
        }
        l = "recaptcha";
        const { start: h, data: p } = await NopeCHA.post({
          settings: c,
          type: l,
          image_data: m,
          grid: e,
          task: t,
        });
        if (p) {
          await NopeCHA.delay({ settings: c, start: h, type: l });
          let t = 0;
          for (let e = 0; e < p.length; e++)
            !1 !== p[e] &&
              (t++,
              (function (e) {
                try {
                  return e.classList.contains("rc-imageselect-tileselected");
                } catch {}
              })(a[e]) ||
                (Input.click(a[e]), await Time.random_sleep(100, 300)));
          for (const g of n) b.push(g), 9 < b.length && b.shift();
          ((3 == s && r && 0 === t && (await y())) ||
            (3 == s && !r) ||
            4 == s) &&
            (await Time.sleep(200), Input.click("#recaptcha-verify-button"));
        } else v = null;
      }
  }
  let c = !1,
    _ = !1,
    b = [];
  for (;;) {
    await Time.sleep(1e3);
    var r,
      i = await BG.exec("Settings.get");
    i &&
      i.enabled &&
      "Image" === i.recaptcha_solve_method &&
      ((r = await Location.hostname()),
      i.disabled_hosts.includes(r) ||
        (await (async function () {
          var e = [
            ...document.querySelectorAll(
              'iframe[src*="/recaptcha/api2/bframe"]'
            ),
            ...document.querySelectorAll(
              'iframe[src*="/recaptcha/enterprise/bframe"]'
            ),
          ];
          if (0 < e.length) {
            for (const t of e)
              if ("visible" === window.getComputedStyle(t).visibility)
                return BG.exec("Cache.set", {
                  name: "recaptcha_image_visible",
                  value: !0,
                  tab_specific: !0,
                });
            await BG.exec("Cache.set", {
              name: "recaptcha_image_visible",
              value: !1,
              tab_specific: !0,
            });
          }
        })(),
        await (async function () {
          var e = [
            ...document.querySelectorAll(
              'iframe[src*="/recaptcha/api2/anchor"]'
            ),
            ...document.querySelectorAll(
              'iframe[src*="/recaptcha/enterprise/anchor"]'
            ),
          ];
          if (0 < e.length) {
            for (const t of e)
              if ("visible" === window.getComputedStyle(t).visibility)
                return BG.exec("Cache.set", {
                  name: "recaptcha_widget_visible",
                  value: !0,
                  tab_specific: !0,
                });
            await BG.exec("Cache.set", {
              name: "recaptcha_widget_visible",
              value: !1,
              tab_specific: !0,
            });
          }
        })(),
        i.recaptcha_auto_open &&
        null !== document.querySelector(".recaptcha-checkbox")
          ? await t()
          : i.recaptcha_auto_solve &&
            null !== document.querySelector("#rc-imageselect") &&
            (await a(i))));
  }
})();
