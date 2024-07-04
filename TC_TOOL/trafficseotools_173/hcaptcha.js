(async () => {
  function u(e) {
    e = e?.style.background?.trim()?.match(/(?!^)".*?"/g);
    return e && 0 !== e.length ? e[0].replaceAll('"', "") : null;
  }
  let s = null;
  function l(e = 500) {
    return new Promise((c) => {
      let r = !1;
      const i = setInterval(async () => {
        if (!r) {
          r = !0;
          var e = document.querySelector(".challenge-view > .task-grid")
            ? "hcaptcha"
            : document.querySelector(".challenge-view > .task-wrapper")
            ? "hcaptcha_mc"
            : document.querySelector(".challenge-view > .bounding-box-example")
            ? "hcaptcha_bb"
            : null;
          if (e)
            if ("hcaptcha" === e) {
              var a = await (async function () {
                if (
                  !(e = document
                    .querySelector("h2.prompt-text")
                    ?.innerText?.replace(/\s+/g, " ")
                    ?.trim())
                )
                  return null;
                var e = Util.normalize_text(e),
                  a = document.querySelectorAll(".task-image");
                if (9 !== a.length) return null;
                var t = [],
                  l = [],
                  n = [];
                for (const r of a) {
                  t.push(r);
                  var c = r.querySelector("div.image");
                  if (!c) return null;
                  c = u(c);
                  if (!c || "" === c) return null;
                  l.push(c);
                  c = await Image.encode(c);
                  c && n.push(c);
                }
                return (
                  (a = JSON.stringify(l)),
                  s === a
                    ? null
                    : ((s = a),
                      { task: e, cells: t, image_urls: l, image_data: n })
                );
              })();
              if (a)
                return (
                  ({ task: a, cells: t, image_urls: l, image_data: n } = a),
                  clearInterval(i),
                  (r = !1),
                  c({
                    type: e,
                    task: a,
                    cells: t,
                    image_urls: l,
                    image_data: n,
                  })
                );
              r = !1;
            } else if ("hcaptcha_mc" === e) {
              var t,
                l,
                a = await (async function () {
                  const e = document.querySelector(
                    ".task-image > .image-wrapper > .image"
                  );
                  if (!e) return null;
                  var a = u(e);
                  if (!a || "" === a) return null;
                  var t = [],
                    l = await Image.encode(a);
                  if ((l && t.push(l), s === a)) return null;
                  if (
                    ((s = a),
                    0 ===
                      (l = document.querySelectorAll(".challenge-answer"))
                        .length)
                  )
                    return null;
                  var n = [],
                    c = [];
                  for (const e of l) {
                    var r = e.querySelector(".text-content")?.innerHTML;
                    if (!r) return null;
                    n.push(e), c.push(r);
                  }
                  return { cells: n, choices: c, image_url: a, image_data: t };
                })();
              if (a)
                return (
                  ({ cells: t, choices: l, image_url: n, image_data: a } = a),
                  clearInterval(i),
                  (r = !1),
                  c({
                    type: e,
                    cells: t,
                    choices: l,
                    image_url: n,
                    image_data: a,
                  })
                );
              r = !1;
            } else {
              if ("hcaptcha_bb" !== e)
                return clearInterval(i), (r = !1), c(null);
              var n =
                !(t = document
                  .querySelector("h2.prompt-text")
                  ?.innerText?.replace(/\s+/g, " ")
                  ?.trim()) ||
                ((t = Util.normalize_text(t)),
                !(l = Image.encode_canvas(".challenge-view > canvas"))) ||
                s === l
                  ? null
                  : { task: t, image_data: (s = l) };
              {
                if (n)
                  return (
                    ({ task: a, image_data: n } = n),
                    clearInterval(i),
                    (r = !1),
                    c({ type: e, task: a, image_data: [n] })
                  );
                r = !1;
              }
            }
          else r = !1;
        }
      }, e);
    });
  }
  async function e() {
    "block" === document.querySelector("div.check")?.style.display
      ? (t = t || !0)
      : ((t = !1), await Time.sleep(500), Input.click("#checkbox"));
  }
  async function a(c) {
    "EN" !== document.querySelector(".display-language .text").textContent &&
      (Input.click(".language-selector .option:nth-child(23)"),
      await Time.sleep(500));
    var e = await l();
    if (e) {
      var a = e.type;
      let n = null;
      var r = { settings: c, type: a };
      if (
        ("hcaptcha" === a
          ? (({ task: i, image_urls: o, image_data: u } = e),
            (r.task = i),
            o.length === u.length ? (r.image_data = u) : (r.image_urls = o),
            (n = await NopeCHA.post(r)))
          : "hcaptcha_mc" === a
          ? (({ choices: i, image_url: u, image_data: o } = e),
            (r.choices = i),
            0 === o.length ? (r.image_url = u) : (r.image_data = o),
            (n = await NopeCHA.post(r))?.data &&
              (n.data = i.map((e) => e === n.data)))
          : "hcaptcha_bb" === a &&
            (({ task: u, image_data: o } = e),
            (r.task = u),
            (r.image_data = o),
            (n = await NopeCHA.post(r))),
        n && n.data)
      ) {
        if (
          (await NopeCHA.delay({
            settings: c,
            start: n.start,
            type: "hcaptcha",
          }),
          "hcaptcha" === a || "hcaptcha_mc" === a)
        ) {
          var t = e.cells;
          for (let e = 0; e < n.data.length; e++)
            !1 === n.data[e] ||
              ("hcaptcha_mc" !== a &&
                "true" === t[e].getAttribute("aria-pressed")) ||
              (Input.click(t[e]), await Time.random_sleep(100, 300));
        } else if ("hcaptcha_bb" === a) {
          var i = document.querySelector(".challenge-view > canvas");
          if (!i) return;
          i.addEventListener("click", (e) => {});
          let e = n.data.x,
            a = n.data.y,
            t = n.data.w || 0,
            l = n.data.h || 0;
          var u = i.style.width,
            o = i.style.height;
          ("500px" === u && "536px" === o) ||
            ((r = parseInt(u.replace("px", "")) / 500),
            (c = parseInt(o.replace("px", "")) / 536),
            (e = Math.round(e * r)),
            (a = Math.round(a * c)),
            (t = Math.round(t * r)),
            (l = Math.round(l * c))),
            Input.point(i, e, a, "mousedown"),
            await Time.sleep(100),
            Input.point(i, e + t, a + l, "mousemove"),
            await Time.sleep(100),
            Input.point(i, e + t, a + l, "mouseup"),
            await Time.sleep(1e3);
        }
        await Time.sleep(200);
        try {
          Input.click(".button-submit");
        } catch (e) {}
        await Time.sleep(500);
      } else s = null;
    } else s = null;
  }
  let t = !1;
  for (;;) {
    await Time.sleep(1e3);
    var n,
      c = await BG.exec("Settings.get");
    c &&
      c.enabled &&
      ((n = await Location.hostname()),
      c.disabled_hosts.includes(n) ||
        (c.hcaptcha_auto_open &&
        0 !== document.body.getBoundingClientRect()?.width &&
        0 !== document.body.getBoundingClientRect()?.height &&
        null !== document.querySelector("div.check")
          ? await e()
          : c.hcaptcha_auto_solve &&
            null !== document.querySelector("h2.prompt-text") &&
            (await a(c))));
  }
})();
