(() => {
  let e;
  function t() {
    var e = navigator.language.split("-")[0];
    for (const r of document.querySelectorAll(
      'script[src*="hcaptcha.com/1/api.js"]'
    )) {
      var t = new URL(r.src);
      "en" !== (t.searchParams.get("hl") || e) &&
        (t.searchParams.set("hl", "en"), (r.src = t.toString()));
    }
  }
  (e = new MutationObserver(t)),
    setTimeout(() => {
      t(), e.observe(document.head, { childList: !0 });
    }, 0);
})();