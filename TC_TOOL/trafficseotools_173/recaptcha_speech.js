(async () => {
  function e() {
    var e, t;
    if (!c())
      return (
        (e =
          "true" ===
          document
            .querySelector(".recaptcha-checkbox")
            ?.getAttribute("aria-checked")),
        (t = document.querySelector("#recaptcha-verify-button")?.disabled),
        e || t
      );
  }
  function c() {
    return (
      "Try again later" ===
      document.querySelector(".rc-doscaptcha-header")?.innerText
    );
  }
  async function t() {
    !0 !==
      (await BG.exec("Cache.get", {
        name: "recaptcha_widget_visible",
        tab_specific: !0,
      })) ||
      e() ||
      (await Time.sleep(500), Input.click("#recaptcha-anchor"));
  }
  async function a(t) {
    var a = await BG.exec("Cache.get", {
      name: "recaptcha_image_visible",
      tab_specific: !0,
    });
    if (!0 === a && !e() && !c()) {
      (a = document.querySelector(".rc-audiochallenge-tdownload-link")?.href),
        (a =
          (fetch(a),
          document
            .querySelector("#audio-source")
            ?.src?.replace("recaptcha.net", "google.com")));
      let e = document.querySelector("html")?.getAttribute("lang")?.trim();
      (e && 0 !== e.length) || (e = "en");
      Time.time();
      a = await Net.fetch("https://engageub.pythonanywhere.com", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: "input=" + encodeURIComponent(a) + "&lang=" + e,
      });
      document.querySelector("#audio-response").value = a;
      await NopeCHA.delay({ settings: t, start: start, type: "recaptcha" }),
        Input.click("#recaptcha-verify-button");
    }
  }
  for (;;) {
    await Time.sleep(1e3);
    var i,
      r = await BG.exec("Settings.get");
    r &&
      r.enabled &&
      "Speech" === r.recaptcha_solve_method &&
      ((i = await Location.hostname()),
      r.disabled_hosts.includes(i) ||
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
        r.recaptcha_auto_open &&
        null !== document.querySelector(".recaptcha-checkbox")
          ? await t()
          : r.recaptcha_auto_solve &&
            null !== document.querySelector(".rc-imageselect-instructions")
          ? await (!0 ===
              (await BG.exec("Cache.get", {
                name: "recaptcha_image_visible",
                tab_specific: !0,
              })) &&
              !e() &&
              (await Time.sleep(500), !Input.click("#recaptcha-audio-button")))
          : !r.recaptcha_auto_solve ||
            (null === document.querySelector("#audio-instructions") &&
              null === document.querySelector(".rc-doscaptcha-header")) ||
            (await a(r))));
  }
})();
