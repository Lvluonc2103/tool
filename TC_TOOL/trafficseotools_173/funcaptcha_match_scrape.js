(async () => {
  var e = {};
  function c(e, a = !1) {
    if (a)
      for (const c of e) {
        var t = document.querySelectorAll(c);
        if (6 === t.length) return t;
      }
    else
      for (const i of e) {
        var n = document.querySelector(i);
        if (n) return n;
      }
    return null;
  }
  async function a() {
    var e,
      a = c(["#game_answerFrame_children_challengeImage", ".answer-frame img"]),
      a = parseInt(a.ariaLabel.replace(".", "").split(" ")[1]) - 1,
      t = c([
        "#game_children_text",
        ".challenge-instructions-container",
        ".match-game .text",
      ])?.innerText?.trim();
    let n =
      ($image = c([
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
    n.startsWith("blob:") && (n = await Image.encode(n)),
      t &&
        n &&
        ((e = (await BG.exec("Tab.info"))?.url),
        (t = { task: t, image: n, index: a, url: e }),
        window.postMessage(
          { nopecha_funcaptcha: !0, action: "append", type: "match", data: t },
          "*"
        ),
        window.parent.postMessage(
          { nopecha_funcaptcha: !0, action: "append", type: "match", data: t },
          "*"
        ),
        await Net.fetch(
          "https://api.nopecha.com/upload/funcaptcha_match_submit",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(t),
          }
        ));
  }
  for (;;) {
    try {
      "block" === document.querySelector("#timeout_widget")?.style?.display &&
        (window.postMessage({ nopecha_funcaptcha: !0, action: "reload" }, "*"),
        window.parent.postMessage(
          { nopecha_funcaptcha: !0, action: "reload" },
          "*"
        ),
        window.location.reload(!0));
      var t = c(["#game_children_button", ".match-game button"]),
        n =
          (t.removeEventListener("click", e.submit),
          (e.submit = a),
          t.addEventListener("click", e.submit),
          c(["#home_children_button"]));
      n.removeEventListener("click", e.verify),
        (e.verify = () => {
          window.postMessage({ nopecha_funcaptcha: !0, action: "clear" }, "*"),
            window.parent.postMessage(
              { nopecha_funcaptcha: !0, action: "clear" },
              "*"
            );
        }),
        n.addEventListener("click", e.verify);
    } catch (e) {}
    await Time.sleep(500);
  }
})();
