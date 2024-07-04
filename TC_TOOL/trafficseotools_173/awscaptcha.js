(async () => {
  let i = null;
  function t(t = 500) {
    return new Promise((e) => {
      let n = !1;
      const o = setInterval(async () => {
        if (!n) {
          n = !0;
          var t = document.querySelector('input[placeholder="Answer"]');
          if (t && "" === t.value) {
            var a = (function () {
              try {
                return document
                  .querySelector("audio")
                  .src.replace("data:audio/aac;base64,", "");
              } catch (t) {}
              return null;
            })();
            if (a && i !== a)
              return (
                (i = a), clearInterval(o), (n = !1), e({ input: t, audio: a })
              );
          }
          n = !1;
        }
      }, t);
    });
  }
  for (;;) {
    await Time.sleep(1e3);
    var a = await BG.exec("Settings.get");
    if (a && a.enabled) {
      var e,
        n,
        o,
        c,
        r = await Location.hostname();
      if (!a.disabled_hosts.includes(r))
        if (
          a.awscaptcha_auto_open &&
          null !==
            document.querySelector(
              "#captcha-container > #root #amzn-captcha-verify-button"
            )
        ) {
          r = void 0;
          try {
            var r = document.querySelector(
              "#captcha-container > #root #amzn-captcha-verify-button"
            );
            r && Input.click(r);
          } catch (t) {}
          await 0;
        } else if (
          a.hcaptcha_auto_solve &&
          (function () {
            for (const t of [
              document.querySelector(
                '#captcha-container > #root #amzn-btn-audio-internal > img[title="Audio problem"]'
              ),
              document.querySelector(
                '#captcha-container > #root #amzn-btn-audio-internal > img[title="Get an audio puzzle"]'
              ),
            ])
              if (t) return 1;
          })()
        ) {
          r = void 0;
          try {
            r = document.querySelector(
              "#captcha-container > #root #amzn-btn-audio-internal"
            );
            r && Input.click(r);
          } catch (t) {}
          await 0;
        } else
          a.hcaptcha_auto_solve &&
            (function () {
              for (const t of [
                document.querySelector(
                  '#captcha-container > #root #amzn-btn-audio-internal > img[title="Visual problem"]'
                ),
                document.querySelector(
                  '#captcha-container > #root #amzn-btn-audio-internal > img[title="Get a visual puzzle"]'
                ),
              ])
                if (t) return 1;
            })() &&
            ((n = e = c = o = r = void 0),
            (r = a),
            ({ input: o, audio: c } = await t()),
            await !(
              null !== o &&
              null !== c &&
              ((e = "awscaptcha"),
              ({ start: c, data: n } = await NopeCHA.post({
                settings: r,
                type: e,
                audio_data: [c],
              })),
              !n ||
              0 === n.length ||
              (await NopeCHA.delay({ settings: r, start: c, type: e }),
              0 === n[0].length)
                ? (Input.click("#amzn-btn-refresh-internal"),
                  await Time.sleep(200),
                  (i = null))
                : ((o.value = n[0]),
                  await Time.sleep(200),
                  Input.click("#amzn-btn-verify-internal")))
            ));
    }
  }
})();