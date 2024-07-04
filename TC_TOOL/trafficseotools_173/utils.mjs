"use strict";
const BASE_API = "https://api.nopecha.com";
class RunningAs {
  static BACKGROUND = "BACKGROUND";
  static POPUP = "POPUP";
  static CONTENT = "CONTENT";
  static WEB = "WEB";
}
Object.freeze(RunningAs);
const runningAt = (() => {
  var e = globalThis?.chrome?.extension?.getBackgroundPage;
  return e
    ? e() === window
      ? RunningAs.BACKGROUND
      : RunningAs.POPUP
    : globalThis?.chrome?.runtime?.onMessage
    ? RunningAs.CONTENT
    : RunningAs.WEB;
})();
function deep_copy(e) {
  return JSON.parse(JSON.stringify(e));
}
class Util {
  static CHARS =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  static pad_left(e, t, a) {
    for (; ("" + e).length < a; ) e = "" + t + e;
    return e;
  }
  static capitalize(e) {
    return e.charAt(0).toUpperCase() + e.slice(1);
  }
  static parse_int(e, t) {
    return (e = e || t), parseInt(e);
  }
  static parse_bool(e, t) {
    return (e = "true" === e || ("false" !== e && t));
  }
  static parse_string(e, t) {
    return (e = e || t);
  }
  static parse_json(e, t) {
    return (e = e ? JSON.parse(e) : t);
  }
  static parse_hostname(e) {
    return e.replace(/^(.*:)\/\/([A-Za-z0-9\-\.]+)(:[0-9]+)?(.*)$/, "$2");
  }
  static normalize_text(e) {
    var t = {
        "0430": "a",
        "0441": "c",
        "0501": "d",
        "0065": "e",
        "0435": "e",
        "04bb": "h",
        "0069": "i",
        "0456": "i",
        "0458": "j",
        "03f3": "j",
        "04cf": "l",
        "03bf": "o",
        "043e": "o",
        "0440": "p",
        "0455": "s",
        "0445": "x",
        "0443": "y",
        "0335": "-",
      },
      a = [];
    for (const n of e) {
      var o = Util.pad_left(n.charCodeAt(0).toString(16), "0", 4);
      a.push(o in t ? t[o] : n);
    }
    return a.join("");
  }
  static generate_id(t) {
    let a = "";
    for (let e = 0; e < t; e++)
      a += Util.CHARS.charAt(Math.floor(Math.random() * Util.CHARS.length));
    return a;
  }
}
class Time {
  static time() {
    return Date.now || (Date.now = () => new Date().getTime()), Date.now();
  }
  static date() {
    return new Date();
  }
  static sleep(t = 1e3) {
    return new Promise((e) => setTimeout(e, t));
  }
  static async random_sleep(e, t) {
    t = Math.floor(Math.random() * (t - e) + e);
    return Time.sleep(t);
  }
  static seconds_as_hms(e) {
    e = Math.max(0, e);
    var t = Util.pad_left(Math.floor(e / 3600), "0", 2),
      a = ((e %= 3600), Util.pad_left(Math.floor(e / 60), "0", 2));
    return t + `:${a}:` + Util.pad_left(Math.floor(e % 60), "0", 2);
  }
  static string(e = null) {
    return (
      (e = e || Time.date()),
      Util.pad_left(e.getMonth() + 1, "0", 2) +
        `/${Util.pad_left(
          e.getDate(),
          "0",
          2
        )}/${e.getFullYear()} ${Util.pad_left(
          e.getHours() % 12,
          "0",
          2
        )}:${Util.pad_left(e.getMinutes(), "0", 2)}:${Util.pad_left(
          e.getSeconds(),
          "0",
          2
        )} ` +
        (12 <= e.getHours() ? "PM" : "AM")
    );
  }
}
class SettingsManager {
  static DEFAULT = {
    version: 16,
    key: "",
    enabled: !0,
    disabled_hosts: [],
    hcaptcha_auto_open: !0,
    hcaptcha_auto_solve: !0,
    hcaptcha_solve_delay: !0,
    hcaptcha_solve_delay_time: 3e3,
    recaptcha_auto_open: !0,
    recaptcha_auto_solve: !0,
    recaptcha_solve_delay: !0,
    recaptcha_solve_delay_time: 1e3,
    recaptcha_solve_method: "Image",
    funcaptcha_auto_open: !0,
    funcaptcha_auto_solve: !0,
    funcaptcha_solve_delay: !0,
    funcaptcha_solve_delay_time: 0,
    awscaptcha_auto_open: !0,
    awscaptcha_auto_solve: !0,
    awscaptcha_solve_delay: !0,
    awscaptcha_solve_delay_time: 0,
    textcaptcha_auto_solve: !0,
    textcaptcha_solve_delay: !0,
    textcaptcha_solve_delay_time: 0,
    textcaptcha_image_selector: [],
    textcaptcha_input_selector: [],
  };
  static ENCODE_FIELDS = {
    enabled: { parse: Util.parse_bool, encode: encodeURIComponent },
    disabled_hosts: {
      parse: Util.parse_json,
      encode: (e) => encodeURIComponent(JSON.stringify(e)),
    },
    hcaptcha_auto_open: { parse: Util.parse_bool, encode: encodeURIComponent },
    hcaptcha_auto_solve: { parse: Util.parse_bool, encode: encodeURIComponent },
    hcaptcha_solve_delay: {
      parse: Util.parse_bool,
      encode: encodeURIComponent,
    },
    hcaptcha_solve_delay_time: {
      parse: Util.parse_int,
      encode: encodeURIComponent,
    },
    recaptcha_auto_open: { parse: Util.parse_bool, encode: encodeURIComponent },
    recaptcha_auto_solve: {
      parse: Util.parse_bool,
      encode: encodeURIComponent,
    },
    recaptcha_solve_delay: {
      parse: Util.parse_bool,
      encode: encodeURIComponent,
    },
    recaptcha_solve_delay_time: {
      parse: Util.parse_int,
      encode: encodeURIComponent,
    },
    recaptcha_solve_method: {
      parse: Util.parse_string,
      encode: encodeURIComponent,
    },
    funcaptcha_auto_open: {
      parse: Util.parse_bool,
      encode: encodeURIComponent,
    },
    funcaptcha_auto_solve: {
      parse: Util.parse_bool,
      encode: encodeURIComponent,
    },
    funcaptcha_solve_delay: {
      parse: Util.parse_bool,
      encode: encodeURIComponent,
    },
    funcaptcha_solve_delay_time: {
      parse: Util.parse_int,
      encode: encodeURIComponent,
    },
    awscaptcha_auto_open: {
      parse: Util.parse_bool,
      encode: encodeURIComponent,
    },
    awscaptcha_auto_solve: {
      parse: Util.parse_bool,
      encode: encodeURIComponent,
    },
    awscaptcha_solve_delay: {
      parse: Util.parse_bool,
      encode: encodeURIComponent,
    },
    awscaptcha_solve_delay_time: {
      parse: Util.parse_int,
      encode: encodeURIComponent,
    },
    textcaptcha_auto_solve: {
      parse: Util.parse_bool,
      encode: encodeURIComponent,
    },
    textcaptcha_solve_delay: {
      parse: Util.parse_bool,
      encode: encodeURIComponent,
    },
    textcaptcha_solve_delay_time: {
      parse: Util.parse_int,
      encode: encodeURIComponent,
    },
    textcaptcha_image_selector: {
      parse: Util.parse_string,
      encode: encodeURIComponent,
    },
    textcaptcha_input_selector: {
      parse: Util.parse_string,
      encode: encodeURIComponent,
    },
  };
  static IMPORT_URL = "https://nopecha.com/setup";
  static DELIMITER = "|";
  static export(e) {
    var t = ["sub_1OWKYgCRwBwvt6pt9mqVbGPQ"];
    for (const o in SettingsManager.ENCODE_FIELDS)
      t.push(o + "=" + SettingsManager.ENCODE_FIELDS[o].encode(e[o]));
    var a = "#" + t.join(SettingsManager.DELIMITER);
    return SettingsManager.IMPORT_URL + a;
  }
  static import(e) {
    var t = {},
      e = e.split(SettingsManager.DELIMITER);
    if (0 !== e.length) {
      var a = e.shift();
      if (!(a.length <= 1)) {
        t.key = a.substring(1);
        for (const s of e) {
          var o = s.split("="),
            n = o.shift(),
            o = o.join("=");
          n in SettingsManager.ENCODE_FIELDS &&
            ((o = decodeURIComponent(o)),
            (t[n] = SettingsManager.ENCODE_FIELDS[n].parse(
              o,
              SettingsManager.DEFAULT[n]
            )));
        }
      }
    }
    return t;
  }
}
export {
  BASE_API,
  RunningAs,
  runningAt,
  deep_copy,
  Util,
  Time,
  SettingsManager,
};
