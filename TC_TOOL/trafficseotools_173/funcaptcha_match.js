(async () => {
  function a(e, t = !1) {
    if (t)
      for (const o of e) {
        var a = document.querySelectorAll(o);
        if (6 === a.length) return a;
      }
    else
      for (const c of e) {
        var n = document.querySelector(c);
        if (n) return n;
      }
    return null;
  }
  function c() {
    return (
      null !==
      a([
        'button[aria-describedby="descriptionVerify"]',
        'button[data-theme="home.verifyButton"]',
        ".error .button",
        "#wrongTimeout_children_button",
        "#home_children_button",
      ])
    );
  }
  function i() {
    try {
      var e = a([
          'button[aria-describedby="descriptionVerify"]',
          'button[data-theme="home.verifyButton"]',
          "#home_children_button",
        ]),
        t =
          (e &&
            (window.postMessage({ nopecha: !0, action: "clear" }, "*"),
            window.parent.postMessage({ nopecha: !0, action: "clear" }, "*"),
            Input.click(e)),
          document.querySelector(".error.box.screen .button"));
      t &&
        (window.postMessage({ nopecha: !0, action: "clear" }, "*"),
        window.parent.postMessage({ nopecha: !0, action: "clear" }, "*"),
        Input.click(t));
    } catch (e) {}
  }
  function r() {
    return a([
      "#game_children_text",
      ".challenge-instructions-container",
      ".match-game .text",
    ])?.innerText?.trim();
  }
  function s() {
    var e;
    return ($image = a([
      "img#game_keyFrame_children_keyImage",
      "img.key-frame-image",
    ])) &&
      (e = window
        .getComputedStyle($image, null)
        ?.backgroundImage?.trim()
        ?.match(/(?!^)".*?"/g)) &&
      0 !== e.length
      ? (e = e[0].replaceAll('"', "")).startsWith("blob:")
        ? e
        : e.split(";base64,")[1]
      : null;
  }
  let l = null;
  async function e(e) {
    var t,
      a = document.querySelector(".match-game-fail .button"),
      a =
        (a &&
          (window.postMessage({ nopecha: !0, action: "clear" }, "*"),
          window.parent.postMessage({ nopecha: !0, action: "clear" }, "*"),
          Input.click(a)),
        document.querySelector(".error.box.screen .button")),
      { task: a, image_data: n } =
        (a &&
          (window.postMessage({ nopecha: !0, action: "clear" }, "*"),
          window.parent.postMessage({ nopecha: !0, action: "clear" }, "*"),
          Input.click(a)),
        (t = 500),
        await new Promise((a) => {
          let n = !1;
          const o = setInterval(async () => {
            if (!n) {
              n = !0;
              var t = await BG.exec("Settings.get");
              if (t && t.enabled && t.funcaptcha_auto_solve) {
                t.funcaptcha_auto_open && c() && (await i());
                t = r();
                if (t) {
                  let e = s();
                  if (
                    e &&
                    (e.startsWith("blob:") && (e = await Image.encode(e)),
                    l !== e)
                  )
                    return (
                      (l = e),
                      clearInterval(o),
                      (n = !1),
                      a({ task: t, image_data: e })
                    );
                }
                n = !1;
              }
            }
          }, t);
        }));
    if (null !== a && null !== n) {
      var o = await NopeCHA.post({
        settings: e,
        type: "funcaptcha_match",
        task: a,
        image_data: [n],
      });
      if (o && o.data) {
        for (let e = 0; e < o.data.length && !1 === o.data[e]; e++)
          await Time.sleep(50), Input.click(".answer-frame .right-arrow");
        await NopeCHA.delay({
          settings: e,
          start: o.start,
          type: "funcaptcha",
        }),
          Input.click(".match-game.box.screen > div > button");
      } else l = null;
    }
  }
  if (
    (setInterval(() => {
      document.dispatchEvent(new Event("mousemove"));
    }, 50),
    window.location.pathname.startsWith("/fc/assets/match-game-ui/") ||
      window.location.pathname.startsWith("/fc/assets/ec-game-core/"))
  )
    for (;;) {
      await Time.sleep(1e3);
      var t,
        n = await BG.exec("Settings.get");
      n &&
        n.enabled &&
        ((t = await Location.hostname()),
        n.disabled_hosts.includes(t) ||
          (n.funcaptcha_auto_open && c()
            ? await i()
            : n.funcaptcha_auto_solve &&
              null !== r() &&
              null !== s() &&
              (await e(n))));
    }
})();
