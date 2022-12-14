!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define([], t)
    : "object" == typeof exports
    ? (exports.deepai = t())
    : (e.deepai = t());
})(this, function () {
  return (() => {
    var __webpack_modules__ = {
        669: (e, t, r) => {
          e.exports = r(609);
        },
        448: (e, t, r) => {
          "use strict";
          var n = r(867),
            o = r(26),
            i = r(372),
            a = r(327),
            s = r(97),
            u = r(109),
            c = r(985),
            l = r(61),
            f = r(655),
            p = r(263);
          e.exports = function (e) {
            return new Promise(function (t, r) {
              var h,
                d = e.data,
                y = e.headers,
                g = e.responseType;
              function m() {
                e.cancelToken && e.cancelToken.unsubscribe(h),
                  e.signal && e.signal.removeEventListener("abort", h);
              }
              n.isFormData(d) && delete y["Content-Type"];
              var v = new XMLHttpRequest();
              if (e.auth) {
                var b = e.auth.username || "",
                  w = e.auth.password
                    ? unescape(encodeURIComponent(e.auth.password))
                    : "";
                y.Authorization = "Basic " + btoa(b + ":" + w);
              }
              var _ = s(e.baseURL, e.url);
              function x() {
                if (v) {
                  var n =
                      "getAllResponseHeaders" in v
                        ? u(v.getAllResponseHeaders())
                        : null,
                    i = {
                      data:
                        g && "text" !== g && "json" !== g
                          ? v.response
                          : v.responseText,
                      status: v.status,
                      statusText: v.statusText,
                      headers: n,
                      config: e,
                      request: v,
                    };
                  o(
                    function (e) {
                      t(e), m();
                    },
                    function (e) {
                      r(e), m();
                    },
                    i
                  ),
                    (v = null);
                }
              }
              if (
                (v.open(
                  e.method.toUpperCase(),
                  a(_, e.params, e.paramsSerializer),
                  !0
                ),
                (v.timeout = e.timeout),
                "onloadend" in v
                  ? (v.onloadend = x)
                  : (v.onreadystatechange = function () {
                      v &&
                        4 === v.readyState &&
                        (0 !== v.status ||
                          (v.responseURL &&
                            0 === v.responseURL.indexOf("file:"))) &&
                        setTimeout(x);
                    }),
                (v.onabort = function () {
                  v &&
                    (r(l("Request aborted", e, "ECONNABORTED", v)), (v = null));
                }),
                (v.onerror = function () {
                  r(l("Network Error", e, null, v)), (v = null);
                }),
                (v.ontimeout = function () {
                  var t = e.timeout
                      ? "timeout of " + e.timeout + "ms exceeded"
                      : "timeout exceeded",
                    n = e.transitional || f.transitional;
                  e.timeoutErrorMessage && (t = e.timeoutErrorMessage),
                    r(
                      l(
                        t,
                        e,
                        n.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED",
                        v
                      )
                    ),
                    (v = null);
                }),
                n.isStandardBrowserEnv())
              ) {
                var E =
                  (e.withCredentials || c(_)) && e.xsrfCookieName
                    ? i.read(e.xsrfCookieName)
                    : void 0;
                E && (y[e.xsrfHeaderName] = E);
              }
              "setRequestHeader" in v &&
                n.forEach(y, function (e, t) {
                  void 0 === d && "content-type" === t.toLowerCase()
                    ? delete y[t]
                    : v.setRequestHeader(t, e);
                }),
                n.isUndefined(e.withCredentials) ||
                  (v.withCredentials = !!e.withCredentials),
                g && "json" !== g && (v.responseType = e.responseType),
                "function" == typeof e.onDownloadProgress &&
                  v.addEventListener("progress", e.onDownloadProgress),
                "function" == typeof e.onUploadProgress &&
                  v.upload &&
                  v.upload.addEventListener("progress", e.onUploadProgress),
                (e.cancelToken || e.signal) &&
                  ((h = function (e) {
                    v &&
                      (r(!e || (e && e.type) ? new p("canceled") : e),
                      v.abort(),
                      (v = null));
                  }),
                  e.cancelToken && e.cancelToken.subscribe(h),
                  e.signal &&
                    (e.signal.aborted
                      ? h()
                      : e.signal.addEventListener("abort", h))),
                d || (d = null),
                v.send(d);
            });
          };
        },
        609: (e, t, r) => {
          "use strict";
          var n = r(867),
            o = r(849),
            i = r(321),
            a = r(185),
            s = (function e(t) {
              var r = new i(t),
                s = o(i.prototype.request, r);
              return (
                n.extend(s, i.prototype, r),
                n.extend(s, r),
                (s.create = function (r) {
                  return e(a(t, r));
                }),
                s
              );
            })(r(655));
          (s.Axios = i),
            (s.Cancel = r(263)),
            (s.CancelToken = r(972)),
            (s.isCancel = r(502)),
            (s.VERSION = r(288).version),
            (s.all = function (e) {
              return Promise.all(e);
            }),
            (s.spread = r(713)),
            (s.isAxiosError = r(268)),
            (e.exports = s),
            (e.exports.default = s);
        },
        263: (e) => {
          "use strict";
          function t(e) {
            this.message = e;
          }
          (t.prototype.toString = function () {
            return "Cancel" + (this.message ? ": " + this.message : "");
          }),
            (t.prototype.__CANCEL__ = !0),
            (e.exports = t);
        },
        972: (e, t, r) => {
          "use strict";
          var n = r(263);
          function o(e) {
            if ("function" != typeof e)
              throw new TypeError("executor must be a function.");
            var t;
            this.promise = new Promise(function (e) {
              t = e;
            });
            var r = this;
            this.promise.then(function (e) {
              if (r._listeners) {
                var t,
                  n = r._listeners.length;
                for (t = 0; t < n; t++) r._listeners[t](e);
                r._listeners = null;
              }
            }),
              (this.promise.then = function (e) {
                var t,
                  n = new Promise(function (e) {
                    r.subscribe(e), (t = e);
                  }).then(e);
                return (
                  (n.cancel = function () {
                    r.unsubscribe(t);
                  }),
                  n
                );
              }),
              e(function (e) {
                r.reason || ((r.reason = new n(e)), t(r.reason));
              });
          }
          (o.prototype.throwIfRequested = function () {
            if (this.reason) throw this.reason;
          }),
            (o.prototype.subscribe = function (e) {
              this.reason
                ? e(this.reason)
                : this._listeners
                ? this._listeners.push(e)
                : (this._listeners = [e]);
            }),
            (o.prototype.unsubscribe = function (e) {
              if (this._listeners) {
                var t = this._listeners.indexOf(e);
                -1 !== t && this._listeners.splice(t, 1);
              }
            }),
            (o.source = function () {
              var e;
              return {
                token: new o(function (t) {
                  e = t;
                }),
                cancel: e,
              };
            }),
            (e.exports = o);
        },
        502: (e) => {
          "use strict";
          e.exports = function (e) {
            return !(!e || !e.__CANCEL__);
          };
        },
        321: (e, t, r) => {
          "use strict";
          var n = r(867),
            o = r(327),
            i = r(782),
            a = r(572),
            s = r(185),
            u = r(875),
            c = u.validators;
          function l(e) {
            (this.defaults = e),
              (this.interceptors = { request: new i(), response: new i() });
          }
          (l.prototype.request = function (e, t) {
            if (
              ("string" == typeof e ? ((t = t || {}).url = e) : (t = e || {}),
              !t.url)
            )
              throw new Error("Provided config url is not valid");
            (t = s(this.defaults, t)).method
              ? (t.method = t.method.toLowerCase())
              : this.defaults.method
              ? (t.method = this.defaults.method.toLowerCase())
              : (t.method = "get");
            var r = t.transitional;
            void 0 !== r &&
              u.assertOptions(
                r,
                {
                  silentJSONParsing: c.transitional(c.boolean),
                  forcedJSONParsing: c.transitional(c.boolean),
                  clarifyTimeoutError: c.transitional(c.boolean),
                },
                !1
              );
            var n = [],
              o = !0;
            this.interceptors.request.forEach(function (e) {
              ("function" == typeof e.runWhen && !1 === e.runWhen(t)) ||
                ((o = o && e.synchronous), n.unshift(e.fulfilled, e.rejected));
            });
            var i,
              l = [];
            if (
              (this.interceptors.response.forEach(function (e) {
                l.push(e.fulfilled, e.rejected);
              }),
              !o)
            ) {
              var f = [a, void 0];
              for (
                Array.prototype.unshift.apply(f, n),
                  f = f.concat(l),
                  i = Promise.resolve(t);
                f.length;

              )
                i = i.then(f.shift(), f.shift());
              return i;
            }
            for (var p = t; n.length; ) {
              var h = n.shift(),
                d = n.shift();
              try {
                p = h(p);
              } catch (e) {
                d(e);
                break;
              }
            }
            try {
              i = a(p);
            } catch (e) {
              return Promise.reject(e);
            }
            for (; l.length; ) i = i.then(l.shift(), l.shift());
            return i;
          }),
            (l.prototype.getUri = function (e) {
              if (!e.url) throw new Error("Provided config url is not valid");
              return (
                (e = s(this.defaults, e)),
                o(e.url, e.params, e.paramsSerializer).replace(/^\?/, "")
              );
            }),
            n.forEach(["delete", "get", "head", "options"], function (e) {
              l.prototype[e] = function (t, r) {
                return this.request(
                  s(r || {}, { method: e, url: t, data: (r || {}).data })
                );
              };
            }),
            n.forEach(["post", "put", "patch"], function (e) {
              l.prototype[e] = function (t, r, n) {
                return this.request(s(n || {}, { method: e, url: t, data: r }));
              };
            }),
            (e.exports = l);
        },
        782: (e, t, r) => {
          "use strict";
          var n = r(867);
          function o() {
            this.handlers = [];
          }
          (o.prototype.use = function (e, t, r) {
            return (
              this.handlers.push({
                fulfilled: e,
                rejected: t,
                synchronous: !!r && r.synchronous,
                runWhen: r ? r.runWhen : null,
              }),
              this.handlers.length - 1
            );
          }),
            (o.prototype.eject = function (e) {
              this.handlers[e] && (this.handlers[e] = null);
            }),
            (o.prototype.forEach = function (e) {
              n.forEach(this.handlers, function (t) {
                null !== t && e(t);
              });
            }),
            (e.exports = o);
        },
        97: (e, t, r) => {
          "use strict";
          var n = r(793),
            o = r(303);
          e.exports = function (e, t) {
            return e && !n(t) ? o(e, t) : t;
          };
        },
        61: (e, t, r) => {
          "use strict";
          var n = r(481);
          e.exports = function (e, t, r, o, i) {
            var a = new Error(e);
            return n(a, t, r, o, i);
          };
        },
        572: (e, t, r) => {
          "use strict";
          var n = r(867),
            o = r(527),
            i = r(502),
            a = r(655),
            s = r(263);
          function u(e) {
            if (
              (e.cancelToken && e.cancelToken.throwIfRequested(),
              e.signal && e.signal.aborted)
            )
              throw new s("canceled");
          }
          e.exports = function (e) {
            return (
              u(e),
              (e.headers = e.headers || {}),
              (e.data = o.call(e, e.data, e.headers, e.transformRequest)),
              (e.headers = n.merge(
                e.headers.common || {},
                e.headers[e.method] || {},
                e.headers
              )),
              n.forEach(
                ["delete", "get", "head", "post", "put", "patch", "common"],
                function (t) {
                  delete e.headers[t];
                }
              ),
              (e.adapter || a.adapter)(e).then(
                function (t) {
                  return (
                    u(e),
                    (t.data = o.call(
                      e,
                      t.data,
                      t.headers,
                      e.transformResponse
                    )),
                    t
                  );
                },
                function (t) {
                  return (
                    i(t) ||
                      (u(e),
                      t &&
                        t.response &&
                        (t.response.data = o.call(
                          e,
                          t.response.data,
                          t.response.headers,
                          e.transformResponse
                        ))),
                    Promise.reject(t)
                  );
                }
              )
            );
          };
        },
        481: (e) => {
          "use strict";
          e.exports = function (e, t, r, n, o) {
            return (
              (e.config = t),
              r && (e.code = r),
              (e.request = n),
              (e.response = o),
              (e.isAxiosError = !0),
              (e.toJSON = function () {
                return {
                  message: this.message,
                  name: this.name,
                  description: this.description,
                  number: this.number,
                  fileName: this.fileName,
                  lineNumber: this.lineNumber,
                  columnNumber: this.columnNumber,
                  stack: this.stack,
                  config: this.config,
                  code: this.code,
                  status:
                    this.response && this.response.status
                      ? this.response.status
                      : null,
                };
              }),
              e
            );
          };
        },
        185: (e, t, r) => {
          "use strict";
          var n = r(867);
          e.exports = function (e, t) {
            t = t || {};
            var r = {};
            function o(e, t) {
              return n.isPlainObject(e) && n.isPlainObject(t)
                ? n.merge(e, t)
                : n.isPlainObject(t)
                ? n.merge({}, t)
                : n.isArray(t)
                ? t.slice()
                : t;
            }
            function i(r) {
              return n.isUndefined(t[r])
                ? n.isUndefined(e[r])
                  ? void 0
                  : o(void 0, e[r])
                : o(e[r], t[r]);
            }
            function a(e) {
              if (!n.isUndefined(t[e])) return o(void 0, t[e]);
            }
            function s(r) {
              return n.isUndefined(t[r])
                ? n.isUndefined(e[r])
                  ? void 0
                  : o(void 0, e[r])
                : o(void 0, t[r]);
            }
            function u(r) {
              return r in t ? o(e[r], t[r]) : r in e ? o(void 0, e[r]) : void 0;
            }
            var c = {
              url: a,
              method: a,
              data: a,
              baseURL: s,
              transformRequest: s,
              transformResponse: s,
              paramsSerializer: s,
              timeout: s,
              timeoutMessage: s,
              withCredentials: s,
              adapter: s,
              responseType: s,
              xsrfCookieName: s,
              xsrfHeaderName: s,
              onUploadProgress: s,
              onDownloadProgress: s,
              decompress: s,
              maxContentLength: s,
              maxBodyLength: s,
              transport: s,
              httpAgent: s,
              httpsAgent: s,
              cancelToken: s,
              socketPath: s,
              responseEncoding: s,
              validateStatus: u,
            };
            return (
              n.forEach(Object.keys(e).concat(Object.keys(t)), function (e) {
                var t = c[e] || i,
                  o = t(e);
                (n.isUndefined(o) && t !== u) || (r[e] = o);
              }),
              r
            );
          };
        },
        26: (e, t, r) => {
          "use strict";
          var n = r(61);
          e.exports = function (e, t, r) {
            var o = r.config.validateStatus;
            r.status && o && !o(r.status)
              ? t(
                  n(
                    "Request failed with status code " + r.status,
                    r.config,
                    null,
                    r.request,
                    r
                  )
                )
              : e(r);
          };
        },
        527: (e, t, r) => {
          "use strict";
          var n = r(867),
            o = r(655);
          e.exports = function (e, t, r) {
            var i = this || o;
            return (
              n.forEach(r, function (r) {
                e = r.call(i, e, t);
              }),
              e
            );
          };
        },
        655: (e, t, r) => {
          "use strict";
          var n = r(867),
            o = r(16),
            i = r(481),
            a = { "Content-Type": "application/x-www-form-urlencoded" };
          function s(e, t) {
            !n.isUndefined(e) &&
              n.isUndefined(e["Content-Type"]) &&
              (e["Content-Type"] = t);
          }
          var u,
            c = {
              transitional: {
                silentJSONParsing: !0,
                forcedJSONParsing: !0,
                clarifyTimeoutError: !1,
              },
              adapter:
                (("undefined" != typeof XMLHttpRequest ||
                  ("undefined" != typeof process &&
                    "[object process]" ===
                      Object.prototype.toString.call(process))) &&
                  (u = r(448)),
                u),
              transformRequest: [
                function (e, t) {
                  return (
                    o(t, "Accept"),
                    o(t, "Content-Type"),
                    n.isFormData(e) ||
                    n.isArrayBuffer(e) ||
                    n.isBuffer(e) ||
                    n.isStream(e) ||
                    n.isFile(e) ||
                    n.isBlob(e)
                      ? e
                      : n.isArrayBufferView(e)
                      ? e.buffer
                      : n.isURLSearchParams(e)
                      ? (s(
                          t,
                          "application/x-www-form-urlencoded;charset=utf-8"
                        ),
                        e.toString())
                      : n.isObject(e) ||
                        (t && "application/json" === t["Content-Type"])
                      ? (s(t, "application/json"),
                        (function (e, t, r) {
                          if (n.isString(e))
                            try {
                              return (0, JSON.parse)(e), n.trim(e);
                            } catch (e) {
                              if ("SyntaxError" !== e.name) throw e;
                            }
                          return (0, JSON.stringify)(e);
                        })(e))
                      : e
                  );
                },
              ],
              transformResponse: [
                function (e) {
                  var t = this.transitional || c.transitional,
                    r = t && t.silentJSONParsing,
                    o = t && t.forcedJSONParsing,
                    a = !r && "json" === this.responseType;
                  if (a || (o && n.isString(e) && e.length))
                    try {
                      return JSON.parse(e);
                    } catch (e) {
                      if (a) {
                        if ("SyntaxError" === e.name)
                          throw i(e, this, "E_JSON_PARSE");
                        throw e;
                      }
                    }
                  return e;
                },
              ],
              timeout: 0,
              xsrfCookieName: "XSRF-TOKEN",
              xsrfHeaderName: "X-XSRF-TOKEN",
              maxContentLength: -1,
              maxBodyLength: -1,
              validateStatus: function (e) {
                return e >= 200 && e < 300;
              },
              headers: {
                common: { Accept: "application/json, text/plain, */*" },
              },
            };
          n.forEach(["delete", "get", "head"], function (e) {
            c.headers[e] = {};
          }),
            n.forEach(["post", "put", "patch"], function (e) {
              c.headers[e] = n.merge(a);
            }),
            (e.exports = c);
        },
        288: (e) => {
          e.exports = { version: "0.25.0" };
        },
        849: (e) => {
          "use strict";
          e.exports = function (e, t) {
            return function () {
              for (
                var r = new Array(arguments.length), n = 0;
                n < r.length;
                n++
              )
                r[n] = arguments[n];
              return e.apply(t, r);
            };
          };
        },
        327: (e, t, r) => {
          "use strict";
          var n = r(867);
          function o(e) {
            return encodeURIComponent(e)
              .replace(/%3A/gi, ":")
              .replace(/%24/g, "$")
              .replace(/%2C/gi, ",")
              .replace(/%20/g, "+")
              .replace(/%5B/gi, "[")
              .replace(/%5D/gi, "]");
          }
          e.exports = function (e, t, r) {
            if (!t) return e;
            var i;
            if (r) i = r(t);
            else if (n.isURLSearchParams(t)) i = t.toString();
            else {
              var a = [];
              n.forEach(t, function (e, t) {
                null != e &&
                  (n.isArray(e) ? (t += "[]") : (e = [e]),
                  n.forEach(e, function (e) {
                    n.isDate(e)
                      ? (e = e.toISOString())
                      : n.isObject(e) && (e = JSON.stringify(e)),
                      a.push(o(t) + "=" + o(e));
                  }));
              }),
                (i = a.join("&"));
            }
            if (i) {
              var s = e.indexOf("#");
              -1 !== s && (e = e.slice(0, s)),
                (e += (-1 === e.indexOf("?") ? "?" : "&") + i);
            }
            return e;
          };
        },
        303: (e) => {
          "use strict";
          e.exports = function (e, t) {
            return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
          };
        },
        372: (e, t, r) => {
          "use strict";
          var n = r(867);
          e.exports = n.isStandardBrowserEnv()
            ? {
                write: function (e, t, r, o, i, a) {
                  var s = [];
                  s.push(e + "=" + encodeURIComponent(t)),
                    n.isNumber(r) &&
                      s.push("expires=" + new Date(r).toGMTString()),
                    n.isString(o) && s.push("path=" + o),
                    n.isString(i) && s.push("domain=" + i),
                    !0 === a && s.push("secure"),
                    (document.cookie = s.join("; "));
                },
                read: function (e) {
                  var t = document.cookie.match(
                    new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
                  );
                  return t ? decodeURIComponent(t[3]) : null;
                },
                remove: function (e) {
                  this.write(e, "", Date.now() - 864e5);
                },
              }
            : {
                write: function () {},
                read: function () {
                  return null;
                },
                remove: function () {},
              };
        },
        793: (e) => {
          "use strict";
          e.exports = function (e) {
            return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
          };
        },
        268: (e, t, r) => {
          "use strict";
          var n = r(867);
          e.exports = function (e) {
            return n.isObject(e) && !0 === e.isAxiosError;
          };
        },
        985: (e, t, r) => {
          "use strict";
          var n = r(867);
          e.exports = n.isStandardBrowserEnv()
            ? (function () {
                var e,
                  t = /(msie|trident)/i.test(navigator.userAgent),
                  r = document.createElement("a");
                function o(e) {
                  var n = e;
                  return (
                    t && (r.setAttribute("href", n), (n = r.href)),
                    r.setAttribute("href", n),
                    {
                      href: r.href,
                      protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
                      host: r.host,
                      search: r.search ? r.search.replace(/^\?/, "") : "",
                      hash: r.hash ? r.hash.replace(/^#/, "") : "",
                      hostname: r.hostname,
                      port: r.port,
                      pathname:
                        "/" === r.pathname.charAt(0)
                          ? r.pathname
                          : "/" + r.pathname,
                    }
                  );
                }
                return (
                  (e = o(window.location.href)),
                  function (t) {
                    var r = n.isString(t) ? o(t) : t;
                    return r.protocol === e.protocol && r.host === e.host;
                  }
                );
              })()
            : function () {
                return !0;
              };
        },
        16: (e, t, r) => {
          "use strict";
          var n = r(867);
          e.exports = function (e, t) {
            n.forEach(e, function (r, n) {
              n !== t &&
                n.toUpperCase() === t.toUpperCase() &&
                ((e[t] = r), delete e[n]);
            });
          };
        },
        109: (e, t, r) => {
          "use strict";
          var n = r(867),
            o = [
              "age",
              "authorization",
              "content-length",
              "content-type",
              "etag",
              "expires",
              "from",
              "host",
              "if-modified-since",
              "if-unmodified-since",
              "last-modified",
              "location",
              "max-forwards",
              "proxy-authorization",
              "referer",
              "retry-after",
              "user-agent",
            ];
          e.exports = function (e) {
            var t,
              r,
              i,
              a = {};
            return e
              ? (n.forEach(e.split("\n"), function (e) {
                  if (
                    ((i = e.indexOf(":")),
                    (t = n.trim(e.substr(0, i)).toLowerCase()),
                    (r = n.trim(e.substr(i + 1))),
                    t)
                  ) {
                    if (a[t] && o.indexOf(t) >= 0) return;
                    a[t] =
                      "set-cookie" === t
                        ? (a[t] ? a[t] : []).concat([r])
                        : a[t]
                        ? a[t] + ", " + r
                        : r;
                  }
                }),
                a)
              : a;
          };
        },
        713: (e) => {
          "use strict";
          e.exports = function (e) {
            return function (t) {
              return e.apply(null, t);
            };
          };
        },
        875: (e, t, r) => {
          "use strict";
          var n = r(288).version,
            o = {};
          [
            "object",
            "boolean",
            "number",
            "function",
            "string",
            "symbol",
          ].forEach(function (e, t) {
            o[e] = function (r) {
              return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
            };
          });
          var i = {};
          (o.transitional = function (e, t, r) {
            function o(e, t) {
              return (
                "[Axios v" +
                n +
                "] Transitional option '" +
                e +
                "'" +
                t +
                (r ? ". " + r : "")
              );
            }
            return function (r, n, a) {
              if (!1 === e)
                throw new Error(
                  o(n, " has been removed" + (t ? " in " + t : ""))
                );
              return (
                t &&
                  !i[n] &&
                  ((i[n] = !0),
                  console.warn(
                    o(
                      n,
                      " has been deprecated since v" +
                        t +
                        " and will be removed in the near future"
                    )
                  )),
                !e || e(r, n, a)
              );
            };
          }),
            (e.exports = {
              assertOptions: function (e, t, r) {
                if ("object" != typeof e)
                  throw new TypeError("options must be an object");
                for (var n = Object.keys(e), o = n.length; o-- > 0; ) {
                  var i = n[o],
                    a = t[i];
                  if (a) {
                    var s = e[i],
                      u = void 0 === s || a(s, i, e);
                    if (!0 !== u)
                      throw new TypeError("option " + i + " must be " + u);
                  } else if (!0 !== r) throw Error("Unknown option " + i);
                }
              },
              validators: o,
            });
        },
        867: (e, t, r) => {
          "use strict";
          var n = r(849),
            o = Object.prototype.toString;
          function i(e) {
            return Array.isArray(e);
          }
          function a(e) {
            return void 0 === e;
          }
          function s(e) {
            return "[object ArrayBuffer]" === o.call(e);
          }
          function u(e) {
            return null !== e && "object" == typeof e;
          }
          function c(e) {
            if ("[object Object]" !== o.call(e)) return !1;
            var t = Object.getPrototypeOf(e);
            return null === t || t === Object.prototype;
          }
          function l(e) {
            return "[object Function]" === o.call(e);
          }
          function f(e, t) {
            if (null != e)
              if (("object" != typeof e && (e = [e]), i(e)))
                for (var r = 0, n = e.length; r < n; r++)
                  t.call(null, e[r], r, e);
              else
                for (var o in e)
                  Object.prototype.hasOwnProperty.call(e, o) &&
                    t.call(null, e[o], o, e);
          }
          e.exports = {
            isArray: i,
            isArrayBuffer: s,
            isBuffer: function (e) {
              return (
                null !== e &&
                !a(e) &&
                null !== e.constructor &&
                !a(e.constructor) &&
                "function" == typeof e.constructor.isBuffer &&
                e.constructor.isBuffer(e)
              );
            },
            isFormData: function (e) {
              return "[object FormData]" === o.call(e);
            },
            isArrayBufferView: function (e) {
              return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView
                ? ArrayBuffer.isView(e)
                : e && e.buffer && s(e.buffer);
            },
            isString: function (e) {
              return "string" == typeof e;
            },
            isNumber: function (e) {
              return "number" == typeof e;
            },
            isObject: u,
            isPlainObject: c,
            isUndefined: a,
            isDate: function (e) {
              return "[object Date]" === o.call(e);
            },
            isFile: function (e) {
              return "[object File]" === o.call(e);
            },
            isBlob: function (e) {
              return "[object Blob]" === o.call(e);
            },
            isFunction: l,
            isStream: function (e) {
              return u(e) && l(e.pipe);
            },
            isURLSearchParams: function (e) {
              return "[object URLSearchParams]" === o.call(e);
            },
            isStandardBrowserEnv: function () {
              return (
                ("undefined" == typeof navigator ||
                  ("ReactNative" !== navigator.product &&
                    "NativeScript" !== navigator.product &&
                    "NS" !== navigator.product)) &&
                "undefined" != typeof window &&
                "undefined" != typeof document
              );
            },
            forEach: f,
            merge: function e() {
              var t = {};
              function r(r, n) {
                c(t[n]) && c(r)
                  ? (t[n] = e(t[n], r))
                  : c(r)
                  ? (t[n] = e({}, r))
                  : i(r)
                  ? (t[n] = r.slice())
                  : (t[n] = r);
              }
              for (var n = 0, o = arguments.length; n < o; n++)
                f(arguments[n], r);
              return t;
            },
            extend: function (e, t, r) {
              return (
                f(t, function (t, o) {
                  e[o] = r && "function" == typeof t ? n(t, r) : t;
                }),
                e
              );
            },
            trim: function (e) {
              return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
            },
            stripBOM: function (e) {
              return 65279 === e.charCodeAt(0) && (e = e.slice(1)), e;
            },
          };
        },
        142: (e, t, r) => {
          "use strict";
          e.exports = r(365);
        },
        297: (module, __unused_webpack_exports, __webpack_require__) => {
          "use strict";
          function asyncGeneratorStep(e, t, r, n, o, i, a) {
            try {
              var s = e[i](a),
                u = s.value;
            } catch (e) {
              return void r(e);
            }
            s.done ? t(u) : Promise.resolve(u).then(n, o);
          }
          function _asyncToGenerator(e) {
            return function () {
              var t = this,
                r = arguments;
              return new Promise(function (n, o) {
                var i = e.apply(t, r);
                function a(e) {
                  asyncGeneratorStep(i, n, o, a, s, "next", e);
                }
                function s(e) {
                  asyncGeneratorStep(i, n, o, a, s, "throw", e);
                }
                a(void 0);
              });
            };
          }
          var axios = __webpack_require__(669),
            apiBaseUrl = __webpack_require__(732).baseUrl,
            resultRendering = __webpack_require__(244),
            globalObject = Function("return this")();
          if (globalObject.FormData) var formData = globalObject.FormData;
          else var formData = eval('require("form-data")');
          function DeepAI() {
            this.axiosInstance = axios.create({
              headers: { "client-library": "deepai-js-client" },
            });
          }
          function urlForModel(e) {
            return apiBaseUrl + "/api/" + e;
          }
          (DeepAI.prototype.setApiKey = function (e) {
            (this.apiKey = e),
              (this.axiosInstance.defaults.headers.common["api-key"] = e);
          }),
            (DeepAI.prototype.callStandardApi = (function () {
              var e = _asyncToGenerator(
                regeneratorRuntime.mark(function e(t, r) {
                  var n, o, i, a, s, u, c;
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            (n = new formData()), (o = 0), (i = Object.keys(r));
                          case 2:
                            if (!(o < i.length)) {
                              e.next = 43;
                              break;
                            }
                            if (
                              ((a = i[o]), null !== r[a] && void 0 !== r[a])
                            ) {
                              e.next = 6;
                              break;
                            }
                            return e.abrupt("continue", 40);
                          case 6:
                            if ("string" != typeof r[a]) {
                              e.next = 10;
                              break;
                            }
                            n.append(a, r[a]), (e.next = 40);
                            break;
                          case 10:
                            if (
                              !(
                                globalObject.Element &&
                                r[a] instanceof globalObject.Element
                              )
                            ) {
                              e.next = 31;
                              break;
                            }
                            if ("IMG" !== (s = r[a]).tagName) {
                              e.next = 20;
                              break;
                            }
                            if (!s.src) {
                              e.next = 17;
                              break;
                            }
                            n.append(a, s.src), (e.next = 18);
                            break;
                          case 17:
                            throw new Error(
                              "DeepAI error: Image element has no SRC: " + a
                            );
                          case 18:
                            e.next = 29;
                            break;
                          case 20:
                            if ("INPUT" !== s.tagName || void 0 === s.files) {
                              e.next = 28;
                              break;
                            }
                            if (!(s.files.length > 0)) {
                              e.next = 25;
                              break;
                            }
                            n.append(a, s.files[0], "file.jpeg"), (e.next = 26);
                            break;
                          case 25:
                            throw new Error(
                              "DeepAI error: File picker has no file picked: " +
                                a
                            );
                          case 26:
                            e.next = 29;
                            break;
                          case 28:
                            throw new Error(
                              "DeepAI error: DOM Element type for key: " + a
                            );
                          case 29:
                            e.next = 40;
                            break;
                          case 31:
                            if (!r[a].hasOwnProperty("fd")) {
                              e.next = 35;
                              break;
                            }
                            n.append(a, r[a]), (e.next = 40);
                            break;
                          case 35:
                            if (
                              !globalObject.Buffer ||
                              !Buffer.isBuffer(r[a])
                            ) {
                              e.next = 39;
                              break;
                            }
                            n.append(a, r[a], "file.jpeg"), (e.next = 40);
                            break;
                          case 39:
                            throw new Error(
                              "DeepAI error: unknown input type for key: " + a
                            );
                          case 40:
                            o++, (e.next = 2);
                            break;
                          case 43:
                            return (
                              (u = { withCredentials: !0 }),
                              void 0 !== n.getHeaders &&
                                (u.headers = n.getHeaders()),
                              (e.next = 47),
                              this.axiosInstance.post(urlForModel(t), n, u)
                            );
                          case 47:
                            return (c = e.sent), e.abrupt("return", c.data);
                          case 49:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this
                  );
                })
              );
              return function (t, r) {
                return e.apply(this, arguments);
              };
            })()),
            (DeepAI.prototype.renderResultIntoElement =
              resultRendering.renderResultIntoElement),
            (DeepAI.prototype.renderAnnotatedResultIntoElement =
              resultRendering.renderAnnotatedResultIntoElement),
            (module.exports = DeepAI);
        },
        732: (e) => {
          "use strict";
          e.exports = { baseUrl: "https://api.deepai.org" };
        },
        244: (e, t, r) => {
          "use strict";
          function n(e) {
            return (
              (n =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                  ? function (e) {
                      return typeof e;
                    }
                  : function (e) {
                      return e &&
                        "function" == typeof Symbol &&
                        e.constructor === Symbol &&
                        e !== Symbol.prototype
                        ? "symbol"
                        : typeof e;
                    }),
              n(e)
            );
          }
          function o(e, t, r, n, o, i, a) {
            try {
              var s = e[i](a),
                u = s.value;
            } catch (e) {
              return void r(e);
            }
            s.done ? t(u) : Promise.resolve(u).then(n, o);
          }
          function i(e) {
            return function () {
              var t = this,
                r = arguments;
              return new Promise(function (n, i) {
                var a = e.apply(t, r);
                function s(e) {
                  o(a, n, i, s, u, "next", e);
                }
                function u(e) {
                  o(a, n, i, s, u, "throw", e);
                }
                s(void 0);
              });
            };
          }
          function a(e, t) {
            var r =
              ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
              e["@@iterator"];
            if (!r) {
              if (
                Array.isArray(e) ||
                (r = (function (e, t) {
                  if (e) {
                    if ("string" == typeof e) return s(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    return (
                      "Object" === r &&
                        e.constructor &&
                        (r = e.constructor.name),
                      "Map" === r || "Set" === r
                        ? Array.from(e)
                        : "Arguments" === r ||
                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                        ? s(e, t)
                        : void 0
                    );
                  }
                })(e)) ||
                (t && e && "number" == typeof e.length)
              ) {
                r && (e = r);
                var n = 0,
                  o = function () {};
                return {
                  s: o,
                  n: function () {
                    return n >= e.length
                      ? { done: !0 }
                      : { done: !1, value: e[n++] };
                  },
                  e: function (e) {
                    throw e;
                  },
                  f: o,
                };
              }
              throw new TypeError(
                "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            }
            var i,
              a = !0,
              u = !1;
            return {
              s: function () {
                r = r.call(e);
              },
              n: function () {
                var e = r.next();
                return (a = e.done), e;
              },
              e: function (e) {
                (u = !0), (i = e);
              },
              f: function () {
                try {
                  a || null == r.return || r.return();
                } finally {
                  if (u) throw i;
                }
              },
            };
          }
          function s(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
            return n;
          }
          var u = r(732).baseUrl,
            c = [
              "rgb(173, 35, 35)",
              "rgb(42, 75, 215)",
              "rgb(87, 87, 87)",
              "rgb(29, 105, 20)",
              "rgb(129, 74, 25)",
              "rgb(129, 38, 192)",
              "rgb(160, 160, 160)",
              "rgb(129, 197, 122)",
              "rgb(157, 175, 255)",
              "rgb(41, 208, 208)",
              "rgb(255, 146, 51)",
              "rgb(199, 183, 0)",
              "rgb(233, 222, 187)",
              "rgb(255, 205, 243)",
            ],
            l = new RegExp("^([a-z]+://|//)", "i"),
            f = new RegExp("^(data|blob):", "i");
          function p(e) {
            return l.test(e) || f.test(e) ? e : u + e;
          }
          function h(e, t, r) {
            var n,
              o = [],
              i = a(e);
            try {
              for (i.s(); !(n = i.n()).done; ) {
                var s = n.value;
                if (!(s.length < 2)) {
                  o.push("M");
                  var u,
                    c = !0,
                    l = a(s);
                  try {
                    for (l.s(); !(u = l.n()).done; ) {
                      var f = u.value;
                      if (
                        (o.push(f[0] - t + "," + (f[1] - r)),
                        isNaN(f[0]) || isNaN(f[1]))
                      )
                        return (
                          console.log("not showing invalid polygon, found NaN"),
                          ""
                        );
                      c && (o.push("L"), (c = !1));
                    }
                  } catch (e) {
                    l.e(e);
                  } finally {
                    l.f();
                  }
                  o.push("z");
                }
              }
            } catch (e) {
              i.e(e);
            } finally {
              i.f();
            }
            return o.join(" ");
          }
          function d(e) {
            return y.apply(this, arguments);
          }
          function y() {
            return (y = i(
              regeneratorRuntime.mark(function e(t) {
                var r, n;
                return regeneratorRuntime.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (!t.err) {
                          e.next = 3;
                          break;
                        }
                        return (
                          console.log(
                            "cannot get result page data for error result"
                          ),
                          e.abrupt("return", t)
                        );
                      case 3:
                        return (
                          (e.next = 5),
                          fetch(u + "/get_standard_api_result_data/" + t.id, {
                            credentials: "include",
                          })
                        );
                      case 5:
                        return (r = e.sent), (e.next = 8), r.json();
                      case 8:
                        return (
                          (r = e.sent),
                          (n = r.result_data),
                          e.abrupt("return", {
                            err: t.err,
                            output: t.output,
                            output_url: t.output_url,
                            id: t.id,
                            inputs: n.inputs,
                            visualizer_data: n.visualizer_data,
                            scale_applied: n.scale_applied,
                          })
                        );
                      case 11:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )).apply(this, arguments);
          }
          function g(e, t) {
            if (((t.innerHTML = ""), e.err)) return (t.innerHTML = err), !1;
            if (e.output) {
              if (
                (console.log("got json or text output"),
                "string" == typeof e.output)
              ) {
                ((s = document.createElement("div")).style.width = "100%"),
                  (s.style.height = "100%"),
                  (s.style.overflow = "auto"),
                  (s.style.display = "flex"),
                  (s.style.alignItems = "center"),
                  (s.style.flexDirection = "column"),
                  t.appendChild(s),
                  ((u = document.createElement("pre")).textContent = e.output),
                  (u.style.whiteSpace = "pre-wrap"),
                  (u.style.margin = "0px"),
                  s.appendChild(u);
                var r,
                  o = a(e.inputs);
                try {
                  for (o.s(); !(r = o.n()).done; )
                    (d = r.value).is_img &&
                      (((y = document.createElement("img")).src = p(d.url)),
                      (y.style.position = "relative"),
                      (y.style.width = "100%"),
                      (y.style.height = "100%%"),
                      (y.style.objectFit = "contain"),
                      s.appendChild(y));
                } catch (e) {
                  o.e(e);
                } finally {
                  o.f();
                }
                return !0;
              }
              if ("object" === n(e.output)) {
                if (
                  1 == e.inputs.length &&
                  e.inputs[0].is_img &&
                  e.visualizer_data
                ) {
                  console.log("have visualizer for result JSON");
                  var i = document.createElement("iframe");
                  return (
                    (i.onload = function () {
                      var t = i.contentDocument.body;
                      (t.style.margin = "0px"), (t.style.overflow = "hidden");
                      var r = document.createElement("boundingboxcontainer");
                      (r.style.position = "relative"),
                        (r.style.opacity = "0.001"),
                        t.appendChild(r);
                      var n = document.createElement("img");
                      (n.src = p(e.inputs[0].url)),
                        (n.style.position = "absolute"),
                        r.appendChild(n);
                      var o = function () {
                        console.log("iframe resize"),
                          (i.contentDocument.body.style.transform = null);
                        var e = i.contentDocument.body.scrollWidth,
                          t = i.contentDocument.body.scrollHeight,
                          o = n.offsetWidth,
                          a = n.offsetHeight,
                          s = i.offsetWidth,
                          u = i.offsetHeight,
                          c = 0,
                          l = 0;
                        if (o < e && a < t) {
                          var f = s / o,
                            p = u / a;
                          (c = s - o * (h = Math.min(f, p))), (l = u - a * h);
                        } else {
                          var h;
                          (f = s / e),
                            (p = u / t),
                            (c = s - e * (h = Math.min(f, p))),
                            (l = u - t * h);
                        }
                        (c /= h),
                          (l /= h),
                          (i.contentDocument.body.style.transformOrigin =
                            "top left"),
                          (i.contentDocument.body.style.transform =
                            "scale(" + h + ")"),
                          r.style.setProperty("--scaleapplied", h),
                          r.style.setProperty("--fontscale", 100 / h + "%"),
                          (r.style.left = c / 2 + "px"),
                          (r.style.top = l / 2 + "px"),
                          (r.style.opacity = "1");
                      };
                      (i.contentWindow.onresize = o), (n.onload = o);
                      var s = (function (e, t, r) {
                        var n,
                          o = (e = JSON.parse(JSON.stringify(e)))[t.list_key];
                        o.sort(function (e, t) {
                          return t.confidence - e.confidence;
                        });
                        for (var i = o.length, s = [], u = 0; u < i; u++) {
                          var c,
                            l = o[u];
                          if ("demographic" == t.label_key)
                            c = l[t.label_key]
                              ? l[t.label_key]
                              : l.cultural_appearance +
                                " " +
                                l.gender +
                                ", " +
                                l.age_range[0] +
                                "-" +
                                l.age_range[1];
                          else if ("people" == t.label_key) {
                            var f = [];
                            l["facial-expression-recognition"] &&
                              null !=
                                l["facial-expression-recognition"].emotion &&
                              f.push(
                                (n = l["facial-expression-recognition"].emotion)
                                  .charAt(0)
                                  .toUpperCase() + n.slice(1)
                              ),
                              l["demographic-recognition"] &&
                                null !=
                                  l["demographic-recognition"]
                                    .cultural_appearance &&
                                f.push(
                                  l["demographic-recognition"]
                                    .cultural_appearance +
                                    " " +
                                    l["demographic-recognition"].gender +
                                    ", " +
                                    l["demographic-recognition"].age_range[0] +
                                    "-" +
                                    l["demographic-recognition"].age_range[1]
                                ),
                              l["celebrity-recognition"] &&
                                null != l["celebrity-recognition"].name &&
                                "unknown" != l["celebrity-recognition"].name &&
                                f.push(
                                  l["celebrity-recognition"].name.replace(
                                    /\w\S*/g,
                                    function (e) {
                                      return (
                                        e.charAt(0).toUpperCase() +
                                        e.substr(1).toLowerCase()
                                      );
                                    }
                                  )
                                ),
                              (c = f.length > 0 ? f.join(", ") : "Face");
                          } else if ("pose" == t.label_key) {
                            c = "";
                            for (
                              var p = [],
                                h = 0,
                                d = [
                                  ["nose", "right_eye"],
                                  ["nose", "left_eye"],
                                  ["right_eye", "right_ear"],
                                  ["left_eye", "left_ear"],
                                  ["right_shoulder", "right_elbow"],
                                  ["left_shoulder", "left_elbow"],
                                  ["right_elbow", "right_hand"],
                                  ["left_elbow", "left_hand"],
                                  ["right_hip", "right_knee"],
                                  ["left_hip", "left_knee"],
                                  ["right_knee", "right_foot"],
                                  ["left_knee", "left_foot"],
                                ];
                              h < d.length;
                              h++
                            ) {
                              var y = d[h],
                                g = l[t.label_key][y[0]],
                                m = l[t.label_key][y[1]];
                              if (g && m) {
                                var v = [
                                  (g = JSON.parse(JSON.stringify(g))),
                                  (m = JSON.parse(JSON.stringify(m))),
                                ];
                                p.push(v);
                              }
                            }
                            l.mask_vertices = p;
                          } else if (
                            (c = l[t.label_key]) &&
                            c.constructor === String
                          );
                          else {
                            var b = Object.keys(c);
                            c = 1 == b.length ? c[b[0]] : JSON.stringify(c);
                          }
                          if (
                            (l.bounding_box &&
                              ((l.bounding_box[0] *= r),
                              (l.bounding_box[1] *= r),
                              (l.bounding_box[2] *= r),
                              (l.bounding_box[3] *= r)),
                            l.mask_vertices)
                          ) {
                            var w,
                              _ = a(l.mask_vertices);
                            try {
                              for (_.s(); !(w = _.n()).done; ) {
                                var x,
                                  E = a(w.value);
                                try {
                                  for (E.s(); !(x = E.n()).done; ) {
                                    var k = x.value;
                                    (k[0] *= r), (k[1] *= r);
                                  }
                                } catch (e) {
                                  E.e(e);
                                } finally {
                                  E.f();
                                }
                              }
                            } catch (e) {
                              _.e(e);
                            } finally {
                              _.f();
                            }
                          }
                          s.push({
                            bounding_box: l.bounding_box,
                            mask_vertices: l.mask_vertices,
                            caption: c,
                          });
                        }
                        return s;
                      })(e.output, e.visualizer_data, e.scale_applied);
                      console.log("processed annotations", s);
                      var u,
                        l = 0,
                        f = a(s);
                      try {
                        for (f.s(); !(u = f.n()).done; ) {
                          var d,
                            y,
                            g,
                            m,
                            v = u.value,
                            b = document.createElement("boundingbox");
                          b.style.position = "absolute";
                          var w = c[l++ % c.length];
                          if (v.mask_vertices) {
                            var _,
                              x = null,
                              E = null,
                              k = null,
                              S = null,
                              O = a(v.mask_vertices);
                            try {
                              for (O.s(); !(_ = O.n()).done; ) {
                                var j,
                                  N = a(_.value);
                                try {
                                  for (N.s(); !(j = N.n()).done; ) {
                                    var A = j.value,
                                      C = A[0],
                                      L = A[1];
                                    (null === x || C < x) && (x = C),
                                      (null === E || L < E) && (E = L),
                                      (null === k || C > k) && (k = C),
                                      (null === S || L > S) && (S = L);
                                  }
                                } catch (e) {
                                  N.e(e);
                                } finally {
                                  N.f();
                                }
                              }
                            } catch (e) {
                              O.e(e);
                            } finally {
                              O.f();
                            }
                            (g = k - x), (m = S - E), (d = x), (y = E);
                            var R = document.createElementNS(
                              "http://www.w3.org/2000/svg",
                              "svg"
                            );
                            (R.style.position = "absolute"),
                              (R.style.overflow = "visible"),
                              (R.style.width = g + "px"),
                              (R.style.height = m + "px");
                            var T = document.createElementNS(
                              "http://www.w3.org/2000/svg",
                              "path"
                            );
                            T.setAttributeNS(
                              null,
                              "d",
                              h(v.mask_vertices, d, y)
                            ),
                              (T.style.fill = "none"),
                              (T.style.stroke = w),
                              (T.style.strokeWidth =
                                "calc(2px / var(--scaleapplied))"),
                              R.appendChild(T),
                              b.appendChild(R),
                              (b.style.border = "none");
                          } else {
                            if (!v.bounding_box)
                              throw new Exception(
                                "Neither mask_vertices or bounding_box is passed, unknown annotation format"
                              );
                            (d = v.bounding_box[0]),
                              (y = v.bounding_box[1]),
                              (g = v.bounding_box[2]),
                              (m = v.bounding_box[3]),
                              (b.style.border =
                                "calc(2px / var(--scaleapplied)) solid " + w);
                          }
                          (b.style.left = d + "px"),
                            (b.style.top = y + "px"),
                            (b.style.width = g + "px"),
                            (b.style.height = m + "px"),
                            r.appendChild(b);
                          var P = document.createElement("boundingboxlabel");
                          (P.textContent = v.caption),
                            (P.style.color = "white"),
                            (P.style.fontFamily = "arial"),
                            (P.style.backgroundColor = w),
                            (P.style.fontSize = "var(--fontscale)"),
                            (P.style.position = "absolute"),
                            b.appendChild(P);
                        }
                      } catch (e) {
                        f.e(e);
                      } finally {
                        f.f();
                      }
                    }),
                    (i.src = "about:blank"),
                    (i.style.border = "none"),
                    (i.style.width = "100%"),
                    (i.style.height = "100%"),
                    t.appendChild(i),
                    !0
                  );
                }
                var s, u;
                console.log("no visualizer for result JSON"),
                  ((s = document.createElement("div")).style.width = "100%"),
                  (s.style.height = "100%"),
                  (s.style.overflow = "auto"),
                  (s.style.display = "flex"),
                  (s.style.alignItems = "center"),
                  (s.style.flexDirection = "column"),
                  t.appendChild(s),
                  ((u = document.createElement("pre")).style.margin = "0px"),
                  (u.textContent = JSON.stringify(e.output, null, 4)),
                  s.appendChild(u);
                var l,
                  f = a(e.inputs);
                try {
                  for (f.s(); !(l = f.n()).done; ) {
                    var d;
                    (d = l.value).is_img &&
                      (((y = document.createElement("img")).src = p(d.url)),
                      (y.style.width = "100%"),
                      (y.style.height = "79%"),
                      (y.style.objectFit = "contain"),
                      s.appendChild(y));
                  }
                } catch (e) {
                  f.e(e);
                } finally {
                  f.f();
                }
                return !0;
              }
              return (t.innerHTML = "Model returned an unknown data type."), !1;
            }
            var y;
            return e.output_url
              ? (console.log("got image output"),
                ((y = document.createElement("img")).src = e.output_url),
                (y.style.position = "relative"),
                (y.style.width = "100%"),
                (y.style.height = "100%"),
                (y.style.objectFit = "contain"),
                t.appendChild(y),
                !0)
              : ((t.innerHTML = "Model did not return an output or an error."),
                !1);
          }
          function m() {
            return (m = i(
              regeneratorRuntime.mark(function e(t, r) {
                var n;
                return regeneratorRuntime.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          console.log("getting result page data"),
                          (e.next = 3),
                          d(t)
                        );
                      case 3:
                        return (
                          (n = e.sent),
                          console.log("got result page data"),
                          e.abrupt("return", g(n, r))
                        );
                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )).apply(this, arguments);
          }
          e.exports = {
            renderResultIntoElement: function (e, t) {
              return m.apply(this, arguments);
            },
            renderAnnotatedResultIntoElement: g,
          };
        },
        365: (e, t, r) => {
          "use strict";
          var n = new (r(297))();
          e.exports = n;
        },
        666: (e) => {
          var t = (function (e) {
            "use strict";
            var t,
              r = Object.prototype,
              n = r.hasOwnProperty,
              o = "function" == typeof Symbol ? Symbol : {},
              i = o.iterator || "@@iterator",
              a = o.asyncIterator || "@@asyncIterator",
              s = o.toStringTag || "@@toStringTag";
            function u(e, t, r) {
              return (
                Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                }),
                e[t]
              );
            }
            try {
              u({}, "");
            } catch (e) {
              u = function (e, t, r) {
                return (e[t] = r);
              };
            }
            function c(e, t, r, n) {
              var o = t && t.prototype instanceof g ? t : g,
                i = Object.create(o.prototype),
                a = new N(n || []);
              return (
                (i._invoke = (function (e, t, r) {
                  var n = f;
                  return function (o, i) {
                    if (n === h)
                      throw new Error("Generator is already running");
                    if (n === d) {
                      if ("throw" === o) throw i;
                      return C();
                    }
                    for (r.method = o, r.arg = i; ; ) {
                      var a = r.delegate;
                      if (a) {
                        var s = S(a, r);
                        if (s) {
                          if (s === y) continue;
                          return s;
                        }
                      }
                      if ("next" === r.method) r.sent = r._sent = r.arg;
                      else if ("throw" === r.method) {
                        if (n === f) throw ((n = d), r.arg);
                        r.dispatchException(r.arg);
                      } else "return" === r.method && r.abrupt("return", r.arg);
                      n = h;
                      var u = l(e, t, r);
                      if ("normal" === u.type) {
                        if (((n = r.done ? d : p), u.arg === y)) continue;
                        return { value: u.arg, done: r.done };
                      }
                      "throw" === u.type &&
                        ((n = d), (r.method = "throw"), (r.arg = u.arg));
                    }
                  };
                })(e, r, a)),
                i
              );
            }
            function l(e, t, r) {
              try {
                return { type: "normal", arg: e.call(t, r) };
              } catch (e) {
                return { type: "throw", arg: e };
              }
            }
            e.wrap = c;
            var f = "suspendedStart",
              p = "suspendedYield",
              h = "executing",
              d = "completed",
              y = {};
            function g() {}
            function m() {}
            function v() {}
            var b = {};
            u(b, i, function () {
              return this;
            });
            var w = Object.getPrototypeOf,
              _ = w && w(w(A([])));
            _ && _ !== r && n.call(_, i) && (b = _);
            var x = (v.prototype = g.prototype = Object.create(b));
            function E(e) {
              ["next", "throw", "return"].forEach(function (t) {
                u(e, t, function (e) {
                  return this._invoke(t, e);
                });
              });
            }
            function k(e, t) {
              function r(o, i, a, s) {
                var u = l(e[o], e, i);
                if ("throw" !== u.type) {
                  var c = u.arg,
                    f = c.value;
                  return f && "object" == typeof f && n.call(f, "__await")
                    ? t.resolve(f.__await).then(
                        function (e) {
                          r("next", e, a, s);
                        },
                        function (e) {
                          r("throw", e, a, s);
                        }
                      )
                    : t.resolve(f).then(
                        function (e) {
                          (c.value = e), a(c);
                        },
                        function (e) {
                          return r("throw", e, a, s);
                        }
                      );
                }
                s(u.arg);
              }
              var o;
              this._invoke = function (e, n) {
                function i() {
                  return new t(function (t, o) {
                    r(e, n, t, o);
                  });
                }
                return (o = o ? o.then(i, i) : i());
              };
            }
            function S(e, r) {
              var n = e.iterator[r.method];
              if (n === t) {
                if (((r.delegate = null), "throw" === r.method)) {
                  if (
                    e.iterator.return &&
                    ((r.method = "return"),
                    (r.arg = t),
                    S(e, r),
                    "throw" === r.method)
                  )
                    return y;
                  (r.method = "throw"),
                    (r.arg = new TypeError(
                      "The iterator does not provide a 'throw' method"
                    ));
                }
                return y;
              }
              var o = l(n, e.iterator, r.arg);
              if ("throw" === o.type)
                return (
                  (r.method = "throw"), (r.arg = o.arg), (r.delegate = null), y
                );
              var i = o.arg;
              return i
                ? i.done
                  ? ((r[e.resultName] = i.value),
                    (r.next = e.nextLoc),
                    "return" !== r.method && ((r.method = "next"), (r.arg = t)),
                    (r.delegate = null),
                    y)
                  : i
                : ((r.method = "throw"),
                  (r.arg = new TypeError("iterator result is not an object")),
                  (r.delegate = null),
                  y);
            }
            function O(e) {
              var t = { tryLoc: e[0] };
              1 in e && (t.catchLoc = e[1]),
                2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
                this.tryEntries.push(t);
            }
            function j(e) {
              var t = e.completion || {};
              (t.type = "normal"), delete t.arg, (e.completion = t);
            }
            function N(e) {
              (this.tryEntries = [{ tryLoc: "root" }]),
                e.forEach(O, this),
                this.reset(!0);
            }
            function A(e) {
              if (e) {
                var r = e[i];
                if (r) return r.call(e);
                if ("function" == typeof e.next) return e;
                if (!isNaN(e.length)) {
                  var o = -1,
                    a = function r() {
                      for (; ++o < e.length; )
                        if (n.call(e, o))
                          return (r.value = e[o]), (r.done = !1), r;
                      return (r.value = t), (r.done = !0), r;
                    };
                  return (a.next = a);
                }
              }
              return { next: C };
            }
            function C() {
              return { value: t, done: !0 };
            }
            return (
              (m.prototype = v),
              u(x, "constructor", v),
              u(v, "constructor", m),
              (m.displayName = u(v, s, "GeneratorFunction")),
              (e.isGeneratorFunction = function (e) {
                var t = "function" == typeof e && e.constructor;
                return (
                  !!t &&
                  (t === m || "GeneratorFunction" === (t.displayName || t.name))
                );
              }),
              (e.mark = function (e) {
                return (
                  Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, v)
                    : ((e.__proto__ = v), u(e, s, "GeneratorFunction")),
                  (e.prototype = Object.create(x)),
                  e
                );
              }),
              (e.awrap = function (e) {
                return { __await: e };
              }),
              E(k.prototype),
              u(k.prototype, a, function () {
                return this;
              }),
              (e.AsyncIterator = k),
              (e.async = function (t, r, n, o, i) {
                void 0 === i && (i = Promise);
                var a = new k(c(t, r, n, o), i);
                return e.isGeneratorFunction(r)
                  ? a
                  : a.next().then(function (e) {
                      return e.done ? e.value : a.next();
                    });
              }),
              E(x),
              u(x, s, "Generator"),
              u(x, i, function () {
                return this;
              }),
              u(x, "toString", function () {
                return "[object Generator]";
              }),
              (e.keys = function (e) {
                var t = [];
                for (var r in e) t.push(r);
                return (
                  t.reverse(),
                  function r() {
                    for (; t.length; ) {
                      var n = t.pop();
                      if (n in e) return (r.value = n), (r.done = !1), r;
                    }
                    return (r.done = !0), r;
                  }
                );
              }),
              (e.values = A),
              (N.prototype = {
                constructor: N,
                reset: function (e) {
                  if (
                    ((this.prev = 0),
                    (this.next = 0),
                    (this.sent = this._sent = t),
                    (this.done = !1),
                    (this.delegate = null),
                    (this.method = "next"),
                    (this.arg = t),
                    this.tryEntries.forEach(j),
                    !e)
                  )
                    for (var r in this)
                      "t" === r.charAt(0) &&
                        n.call(this, r) &&
                        !isNaN(+r.slice(1)) &&
                        (this[r] = t);
                },
                stop: function () {
                  this.done = !0;
                  var e = this.tryEntries[0].completion;
                  if ("throw" === e.type) throw e.arg;
                  return this.rval;
                },
                dispatchException: function (e) {
                  if (this.done) throw e;
                  var r = this;
                  function o(n, o) {
                    return (
                      (s.type = "throw"),
                      (s.arg = e),
                      (r.next = n),
                      o && ((r.method = "next"), (r.arg = t)),
                      !!o
                    );
                  }
                  for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                    var a = this.tryEntries[i],
                      s = a.completion;
                    if ("root" === a.tryLoc) return o("end");
                    if (a.tryLoc <= this.prev) {
                      var u = n.call(a, "catchLoc"),
                        c = n.call(a, "finallyLoc");
                      if (u && c) {
                        if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                        if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                      } else if (u) {
                        if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                      } else {
                        if (!c)
                          throw new Error(
                            "try statement without catch or finally"
                          );
                        if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                      }
                    }
                  }
                },
                abrupt: function (e, t) {
                  for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                    var o = this.tryEntries[r];
                    if (
                      o.tryLoc <= this.prev &&
                      n.call(o, "finallyLoc") &&
                      this.prev < o.finallyLoc
                    ) {
                      var i = o;
                      break;
                    }
                  }
                  i &&
                    ("break" === e || "continue" === e) &&
                    i.tryLoc <= t &&
                    t <= i.finallyLoc &&
                    (i = null);
                  var a = i ? i.completion : {};
                  return (
                    (a.type = e),
                    (a.arg = t),
                    i
                      ? ((this.method = "next"), (this.next = i.finallyLoc), y)
                      : this.complete(a)
                  );
                },
                complete: function (e, t) {
                  if ("throw" === e.type) throw e.arg;
                  return (
                    "break" === e.type || "continue" === e.type
                      ? (this.next = e.arg)
                      : "return" === e.type
                      ? ((this.rval = this.arg = e.arg),
                        (this.method = "return"),
                        (this.next = "end"))
                      : "normal" === e.type && t && (this.next = t),
                    y
                  );
                },
                finish: function (e) {
                  for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var r = this.tryEntries[t];
                    if (r.finallyLoc === e)
                      return this.complete(r.completion, r.afterLoc), j(r), y;
                  }
                },
                catch: function (e) {
                  for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var r = this.tryEntries[t];
                    if (r.tryLoc === e) {
                      var n = r.completion;
                      if ("throw" === n.type) {
                        var o = n.arg;
                        j(r);
                      }
                      return o;
                    }
                  }
                  throw new Error("illegal catch attempt");
                },
                delegateYield: function (e, r, n) {
                  return (
                    (this.delegate = {
                      iterator: A(e),
                      resultName: r,
                      nextLoc: n,
                    }),
                    "next" === this.method && (this.arg = t),
                    y
                  );
                },
              }),
              e
            );
          })(e.exports);
          try {
            regeneratorRuntime = t;
          } catch (e) {
            "object" == typeof globalThis
              ? (globalThis.regeneratorRuntime = t)
              : Function("r", "regeneratorRuntime = r")(t);
          }
        },
      },
      __webpack_module_cache__ = {};
    function __webpack_require__(e) {
      var t = __webpack_module_cache__[e];
      if (void 0 !== t) return t.exports;
      var r = (__webpack_module_cache__[e] = { exports: {} });
      return (
        __webpack_modules__[e](r, r.exports, __webpack_require__), r.exports
      );
    }
    __webpack_require__(666);
    var __webpack_exports__ = __webpack_require__(142);
    return __webpack_exports__;
  })();
});
//# sourceMappingURL=deepai.min.map
