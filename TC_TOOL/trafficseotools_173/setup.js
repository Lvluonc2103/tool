(async () => {
  function e() {
    try {
      function t(t) {
        return `<p style='font-family: monospace; font-size: 12px; white-space: pre;'>${t}</p>`;
      }
      var e = [];
      for (const o of arguments) e.push(t(o));
      e.push(
        t(
          'Join us on <a href="https://nopecha.com/discord" target="_blank">Discord</a>'
        )
      ),
        (document.body.innerHTML = e.join("<hr>"));
    } catch (t) {}
  }
  try {
    var t, o;
    document.location.hash
      ? ((document.title = "NopeCHA Setup"),
        e("Importing NopeCHA Settings..."),
        await BG.exec("Settings.get"),
        (t = SettingsManager.import(document.location.hash)),
        e(
          `Visiting this URL will import your NopeCHA settings.
<a href="${(o = window.location.href)}">${o}</a>`,
          `Successfully imported settings.
` + JSON.stringify(t, null, 4)
        ))
      : e(
          "Invalid URL.\nPlease set the URL hash and reload the page.",
          "Example: https://nopecha.com/setup#TESTKEY123"
        );
  } catch (t) {
    e(
      "Failed to import settings.\nPlease verify that your URL is formed properly."
    );
  }
})();
