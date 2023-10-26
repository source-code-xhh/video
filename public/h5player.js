!function(t) {
    function e(n) {
        if (i[n])
            return i[n].exports;
        var s = i[n] = {
            exports: {},
            id: n,
            loaded: !1
        };
        return t[n].call(s.exports, s, s.exports, e),
        s.loaded = !0,
        s.exports
    }
    var i = {};
    return e.m = t,
    e.c = i,
    e.p = "",
    e(0)
}([function(t, exports, e) {
    e(37),
    e(77),
    e(26),
    e(27),
    e(28),
    e(29),
    e(30),
    e(31),
    e(32),
    e(33),
    e(34),
    e(35),
    t.exports = e(36)
}
, function(t, exports) {
    function e() {
        this._events = this._events || {},
        this._maxListeners = this._maxListeners || void 0
    }
    function i(t) {
        return "function" == typeof t
    }
    function n(t) {
        return "number" == typeof t
    }
    function s(t) {
        return "object" == typeof t && null !== t
    }
    function a(t) {
        return void 0 === t
    }
    t.exports = e,
    e.EventEmitter = e,
    e.prototype._events = void 0,
    e.prototype._maxListeners = void 0,
    e.defaultMaxListeners = 10,
    e.prototype.setMaxListeners = function(t) {
        if (!n(t) || t < 0 || isNaN(t))
            throw TypeError("n must be a positive number");
        return this._maxListeners = t,
        this
    }
    ,
    e.prototype.emit = function(t) {
        var e, n, o, r, l, u;
        if (this._events || (this._events = {}),
        "error" === t && (!this._events.error || s(this._events.error) && !this._events.error.length)) {
            if (e = arguments[1],
            e instanceof Error)
                throw e;
            var d = new Error('Uncaught, unspecified "error" event. (' + e + ")");
            throw d.context = e,
            d
        }
        if (n = this._events[t],
        a(n))
            return !1;
        if (i(n))
            switch (arguments.length) {
            case 1:
                n.call(this);
                break;
            case 2:
                n.call(this, arguments[1]);
                break;
            case 3:
                n.call(this, arguments[1], arguments[2]);
                break;
            default:
                r = Array.prototype.slice.call(arguments, 1),
                n.apply(this, r)
            }
        else if (s(n))
            for (r = Array.prototype.slice.call(arguments, 1),
            u = n.slice(),
            o = u.length,
            l = 0; l < o; l++)
                u[l].apply(this, r);
        return !0
    }
    ,
    e.prototype.addListener = function(t, n) {
        var o;
        if (!i(n))
            throw TypeError("listener must be a function");
        return this._events || (this._events = {}),
        this._events.newListener && this.emit("newListener", t, i(n.listener) ? n.listener : n),
        this._events[t] ? s(this._events[t]) ? this._events[t].push(n) : this._events[t] = [this._events[t], n] : this._events[t] = n,
        s(this._events[t]) && !this._events[t].warned && (o = a(this._maxListeners) ? e.defaultMaxListeners : this._maxListeners,
        o && o > 0 && this._events[t].length > o && (this._events[t].warned = !0,
        console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[t].length),
        "function" == typeof console.trace && console.trace())),
        this
    }
    ,
    e.prototype.on = e.prototype.addListener,
    e.prototype.once = function(t, e) {
        function n() {
            this.removeListener(t, n),
            s || (s = !0,
            e.apply(this, arguments))
        }
        if (!i(e))
            throw TypeError("listener must be a function");
        var s = !1;
        return n.listener = e,
        this.on(t, n),
        this
    }
    ,
    e.prototype.removeListener = function(t, e) {
        var n, a, o, r;
        if (!i(e))
            throw TypeError("listener must be a function");
        if (!this._events || !this._events[t])
            return this;
        if (n = this._events[t],
        o = n.length,
        a = -1,
        n === e || i(n.listener) && n.listener === e)
            delete this._events[t],
            this._events.removeListener && this.emit("removeListener", t, e);
        else if (s(n)) {
            for (r = o; r-- > 0; )
                if (n[r] === e || n[r].listener && n[r].listener === e) {
                    a = r;
                    break
                }
            if (a < 0)
                return this;
            1 === n.length ? (n.length = 0,
            delete this._events[t]) : n.splice(a, 1),
            this._events.removeListener && this.emit("removeListener", t, e)
        }
        return this
    }
    ,
    e.prototype.removeAllListeners = function(t) {
        var e, n;
        if (!this._events)
            return this;
        if (!this._events.removeListener)
            return 0 === arguments.length ? this._events = {} : this._events[t] && delete this._events[t],
            this;
        if (0 === arguments.length) {
            for (e in this._events)
                "removeListener" !== e && this.removeAllListeners(e);
            return this.removeAllListeners("removeListener"),
            this._events = {},
            this
        }
        if (n = this._events[t],
        i(n))
            this.removeListener(t, n);
        else if (n)
            for (; n.length; )
                this.removeListener(t, n[n.length - 1]);
        return delete this._events[t],
        this
    }
    ,
    e.prototype.listeners = function(t) {
        var e;
        return e = this._events && this._events[t] ? i(this._events[t]) ? [this._events[t]] : this._events[t].slice() : []
    }
    ,
    e.prototype.listenerCount = function(t) {
        if (this._events) {
            var e = this._events[t];
            if (i(e))
                return 1;
            if (e)
                return e.length
        }
        return 0
    }
    ,
    e.listenerCount = function(t, e) {
        return t.listenerCount(e)
    }
}
, function(t, exports) {
    "use strict";
    /*!
	 * browser & platform detect
	 *
	 * by 紫瀚
	 * Date: 2017.07.26
	 */
    function e(t, e) {
        for (var i = "", n = [], s = 0; s < t.length; s++)
            if (n = t[s].reg.exec(e)) {
                i = t[s];
                break
            }
        return n || (n = []),
        {
            match: n,
            map: i
        }
    }
    function i() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        t || "undefined" == typeof navigator || (t = navigator.userAgent),
        t = t.toLowerCase(),
        exports.browser = {};
        var i = e(n, t)
          , a = i.match
          , o = i.map
          , r = e(s, t)
          , l = r.match
          , u = r.map
          , d = {
            browser: a[5] || a[3] || a[1] || "",
            version: a[4] || a[2] || "0",
            platform: l[0] || ""
        };
        d.browser && (exports.browser.name = o.name.toLowerCase(),
        exports.browser["is" + o.name] = !0,
        exports.browser.version = d.version,
        exports.browser.versionNumber = parseInt(d.version, 10)),
        d.platform && (exports.browser["is" + u.name] = !0,
        exports.browser.platform = u.name.toLowerCase()),
        exports.browser.isMobile = u.mobile || !1,
        exports.browser.isDesktop = u.desktop || !1,
        exports.browser.isIOS = u.ios || !1;
        var h = /(windvane)\/([\w.]+)/.exec(t) || [];
        return h.length > 0 && (exports.browser.isWindVane = !0,
        exports.browser.windVaneVersion = h[2]),
        exports.browser
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var n = [{
        name: "Youku",
        reg: /(youku)[^\/]{0,3}\/([\w.]+)/
    }, {
        name: "Wechat",
        reg: /(micromessenger)\/([\w.]+)/
    }, {
        name: "QQ",
        reg: /(qq)\/([\d.]+)/
    }, {
        name: "Weibo",
        reg: /(weibo).*weibo__([\d.]+)/
    }, {
        name: "QZone",
        reg: /(qzone)\/.*_qz_([\d.]+)/
    }, {
        name: "Baidu",
        reg: /(baiduboxapp)\/([\w.]+)/
    }, {
        name: "DingDing",
        reg: /(aliapp\(dingtalk)\/([\w.]+)/
    }, {
        name: "Taobao",
        reg: /(aliapp\(tb)\/([\w.]+)/
    }, {
        name: "Alipay",
        reg: /(alipayclient|aliapp\(AP)\/([\w.]+)/
    }, {
        name: "AliTrip",
        reg: /(alitrip|aliapp\(lx)\/([\w.]+)/
    }, {
        name: "YoukuHD",
        reg: /(youku_hd|youkuhd)\/([\w.]+)/
    }, {
        name: "Liebao",
        reg: /(liebao[^\/]*)\/([\w.]+)/
    }, {
        name: "360",
        reg: /(qihoobrowser)\/([\w.]+)/
    }, {
        name: "360SoSuo",
        reg: /(mso_app)\s*\(([\w.]+)/
    }, {
        name: "QQLive",
        reg: /(qqlivebrowser)\/([\w.]+)/
    }, {
        name: "QQBrowser",
        reg: /(qqbrowser)\/([\w.]+)/
    }, {
        name: "Iqiyi",
        reg: /(iqiyiversion)\/([\w.]+)/
    }, {
        name: "UC",
        reg: /(ucbrowser)\/([\w.]+)/
    }, {
        name: "BaiduBrowser",
        reg: /(baidubrowser)\/([\w.]+)/
    }, {
        name: "Sogou",
        reg: /(sogou[\w]*browser)\/([\w.]+)/
    }, {
        name: "Edge",
        reg: /(edge)\/([\w.]+)/
    }, {
        name: "Opera",
        reg: /(opr)\/([\w.]+)/
    }, {
        name: "Chrome",
        reg: /(chrome)\/([\w.]+)/
    }, {
        name: "Chrome",
        reg: /(crios)\/([\w.]+)/
    }, {
        name: "IEMobile",
        reg: /(iemobile)[\/]([\w.]+)/
    }, {
        name: "Firefox",
        reg: /(firefox)\/([\w.]+)/
    }, {
        name: "Opera",
        reg: /(opera)(?:.*version|)[ \/]([\w.]+)/
    }, {
        name: "Safari",
        reg: /(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/
    }, {
        name: "Safari",
        reg: /(webkit)[ \/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/
    }, {
        name: "IE",
        reg: /(msie) ([\w.]+)/
    }, {
        name: "IE",
        reg: /trident.*(rv)(?::| )([\w.]+)/
    }]
      , s = [{
        name: "IPad",
        reg: /(ipad|iphone.*youku_hd\/[\d.]+)/,
        mobile: !0,
        ios: !0
    }, {
        name: "IPod",
        reg: /(ipod)/,
        mobile: !0,
        ios: !0
    }, {
        name: "WindowsPhone",
        reg: /(windows phone)/,
        mobile: !0
    }, {
        name: "IPhone",
        reg: /(iphone)/,
        mobile: !0,
        ios: !0
    }, {
        name: "Android",
        reg: /(android)/,
        mobile: !0
    }, {
        name: "Windows",
        reg: /(win)/,
        desktop: !0
    }, {
        name: "Mac",
        reg: /(mac)/,
        desktop: !0
    }, {
        name: "Linux",
        reg: /(linux)/,
        desktop: !0
    }];
    exports.browser = {},
    i(),
    exports.uaMatch = i
}
, function(t, exports, e) {
    "use strict";
    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    function n(t) {
        if (t.status >= 200 && t.status < 300)
            return t;
        var e = new Error(t.statusText);
        throw e.response = t,
        e
    }
    function s(t, e) {
        e = e ? e : location.href;
        var i = e.split("?");
        if (i.length > 1) {
            i = i[1].split("&");
            for (var n = i.length, s = 0; s < n; s++) {
                var a = i[s].split("=");
                if (a.length > 1 && a[0] === t)
                    return a[1]
            }
        }
        return null
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
      , o = e(5)
      , r = i(o)
      , l = e(7)
      , u = i(l)
      , d = e(85)
      , h = (i(d),
    e(81))
      , c = i(h)
      , f = e(2)
      , p = e(14)
      , m = i(p);
    window.Promise || (window.Promise = c.default);
    var v = {
        TAG: "util",
        jsopInfo: {},
        ckeyTimestamp: 0,
        ckeyTimer: null,
        KEYARR: [19, 1, 4, 7, 30, 14, 28, 8, 24, 17, 6, 35, 34, 16, 9, 10, 13, 22, 32, 29, 31, 21, 18, 3, 2, 23, 25, 27, 11, 20, 5, 15, 12, 0, 33, 26],
        protocol: location.protocol,
        isPre: "1" === s("p_sdk_pre"),
        addEventListenerHander: function(t, e, i) {
            t.addEventListener ? t.addEventListener(e, i, !1) : t.attachEvent ? t.attachEvent("on" + e, i) : t["on" + e] = i
        },
        removeEventListenerHander: function(t, e, i) {
            t.removeEventListener ? t.removeEventListener(e, i, !1) : t.detachEvent ? t.detachEvent("on" + e, i) : t["on" + e] = null
        },
        getById: function(t, e) {
            return e && e instanceof HTMLElement ? e.getElementById(t) : document.getElementById(t)
        },
        getByClass: function(t, e) {
            return e && e instanceof HTMLElement ? e.getElementsByClassName(t) : document.getElementsByClassName(t)
        },
        hasClass: function(t, e) {
            return t.className.indexOf(e) > -1
        },
        addClass: function(t, e) {
            if (t.classList)
                t.classList.add(e);
            else {
                var i = t.className.split(" ");
                i.push(e),
                t.className = i.join(" ")
            }
        },
        removeClass: function(t, e) {
            if (t.classList)
                t.classList.remove(e);
            else {
                for (var i = t.className.split(" "), n = -1, s = 0, a = i.length; s < a; s++)
                    i[s] === e && (n = s);
                n > -1 && i.splice(n, 1),
                t.className = i.join(" ")
            }
        },
        get: function(t, e) {
            if (e = e || document,
            0 === t.indexOf(".")) {
                var i = t.substr(1, t.length - 1);
                return e.getElementsByClassName(i)
            }
            var n = t;
            return 0 === t.indexOf("#") && (n = t.substr(1, t.length - 1)),
            e.getElementById(n)
        },
        getScreenState: function() {
            var t = window.orientation;
            switch (t) {
            case 90:
            case -90:
                t = 0;
                break;
            default:
                t = 1
            }
            return t
        },
        urlParameter: function(t) {
            var e = [];
            for (var i in t)
                "object" !== a(t[i]) ? e.push(i + "=" + t[i]) : e.push(i + "=" + JSON.stringify(t[i]));
            return e.join("&")
        },
        toJSON: function(t) {
            var e = [];
            for (var i in t)
                e.push('"' + i + '":"' + t[i] + '"');
            return "{" + e.join(",") + "}"
        },
        sendlog: function(t, e) {
            t.indexOf("http:") < 0 && t.indexOf("https:") < 0 && (t = this.protocol + t);
            var i = document.createElement("img");
            e && (i.onerror = function() {
                e(),
                i.onload = null,
                i.onerror = null,
                i.onabort = null,
                i = null
            }
            ),
            i.onabort = i.onload = function() {
                i.onload = null,
                i.onerror = null,
                i.onabort = null,
                i = null
            }
            ,
            i.src = t + "&r_=" + Math.floor(1e4 * Math.random())
        },
        loadfile: function(t, e) {
            var i = null;
            "js" == e ? (i = document.createElement("script"),
            i.setAttribute("type", "text/javascript"),
            i.setAttribute("src", t)) : "css" == e && (i = document.createElement("link"),
            i.setAttribute("rel", "stylesheet"),
            i.setAttribute("type", "text/css"),
            i.setAttribute("href", t)),
            "undefined" != typeof i && document.getElementsByTagName("head")[0].appendChild(i)
        },
        getJsonp: function(t, e, i, n, s) {
            for (var a = ""; ; )
                if (a = ("" + (new Date).getTime() + Math.random()).replace(/\./, "").slice(3, 20),
                !this["_stId" + a])
                    break;
            var o = t
              , r = "_stId" + a
              , l = document.createElement("script")
              , u = "json" + a
              , d = this;
            l.type = "text/javascript",
            l.onerror = l.onbort = function() {
                d[r] && (clearTimeout(d[r]),
                delete d[r],
                i && i(),
                document.getElementsByTagName("head")[0].removeChild(l),
                delete window[u])
            }
            ;
            var h = s || 2e4;
            d[r] = setTimeout(function() {
                d[r] && (clearTimeout(d[r]),
                delete d[r],
                n && n(),
                document.getElementsByTagName("head")[0].removeChild(l),
                delete window[u])
            }, h),
            window[u] = function(t) {
                d[r] && (clearTimeout(d[r]),
                delete d[r],
                e(t),
                document.getElementsByTagName("head")[0].removeChild(l),
                delete window[u])
            }
            ,
            o += "&callback=" + u,
            l.src = o,
            document.getElementsByTagName("head")[0].appendChild(l)
        },
        request: function(t, e, i, n, s) {
            "m.youku.com" === location.host || "h5.m.youku.com" === location.host ? v.fetchrequest(t, e, i, n, s) : v.getJsonp(t, e, i, n, s)
        },
        fetchrequest: function(t, e, i, s, a) {
            document.domain = "youku.com",
            fetch(t, {
                timeout: a || 5e3,
                credentials: "include"
            }).then(n).then(function(t) {
                return t.json()
            }).then(function(t) {
                e && e(t)
            }).catch(function(n) {
                if (n && n.response)
                    n.code = n.response.status,
                    n.note = "数据获取失败，请检查网络之后重试";
                else if (n && "Failed to fetch" === n.message)
                    return void v.getJsonp(t, e, i, s, a);
                i && i(n)
            })
        },
        translate: function(t, e) {
            for (var i = [], n = 0; n < t.length; n++) {
                var s = 0;
                s = t[n] >= "a" && t[n] <= "z" ? t[n].charCodeAt(0) - "a".charCodeAt(0) : t[n] - "0" + 26;
                for (var a = 0; a < 36; a++)
                    if (e[a] == s) {
                        s = a;
                        break
                    }
                s > 25 ? i[n] = s - 26 : i[n] = String.fromCharCode(s + 97)
            }
            return i.join("")
        },
        decode64: function(t) {
            if (!t)
                return "";
            t = t.toString();
            var e = void 0
              , i = void 0
              , n = void 0
              , s = void 0
              , a = void 0
              , o = void 0
              , r = void 0
              , l = new Array(-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,62,-1,-1,-1,63,52,53,54,55,56,57,58,59,60,61,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-1,-1,-1,-1,-1,-1,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-1,-1,-1,-1,-1);
            for (o = t.length,
            a = 0,
            r = ""; a < o; ) {
                do
                    e = l[255 & t.charCodeAt(a++)];
                while (a < o && e == -1);
                if (e == -1)
                    break;
                do
                    i = l[255 & t.charCodeAt(a++)];
                while (a < o && i == -1);
                if (i == -1)
                    break;
                r += String.fromCharCode(e << 2 | (48 & i) >> 4);
                do {
                    if (n = 255 & t.charCodeAt(a++),
                    61 == n)
                        return r;
                    n = l[n]
                } while (a < o && n == -1);
                if (n == -1)
                    break;
                r += String.fromCharCode((15 & i) << 4 | (60 & n) >> 2);
                do {
                    if (s = 255 & t.charCodeAt(a++),
                    61 == s)
                        return r;
                    s = l[s]
                } while (a < o && s == -1);
                if (s == -1)
                    break;
                r += String.fromCharCode((3 & n) << 6 | s)
            }
            return r
        },
        encode64: function(t) {
            if (!t)
                return "";
            t = t.toString();
            var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
              , i = void 0
              , n = void 0
              , s = void 0
              , a = void 0
              , o = void 0
              , r = void 0;
            for (s = t.length,
            n = 0,
            i = ""; n < s; ) {
                if (a = 255 & t.charCodeAt(n++),
                n == s) {
                    i += e.charAt(a >> 2),
                    i += e.charAt((3 & a) << 4),
                    i += "==";
                    break
                }
                if (o = t.charCodeAt(n++),
                n == s) {
                    i += e.charAt(a >> 2),
                    i += e.charAt((3 & a) << 4 | (240 & o) >> 4),
                    i += e.charAt((15 & o) << 2),
                    i += "=";
                    break
                }
                r = t.charCodeAt(n++),
                i += e.charAt(a >> 2),
                i += e.charAt((3 & a) << 4 | (240 & o) >> 4),
                i += e.charAt((15 & o) << 2 | (192 & r) >> 6),
                i += e.charAt(63 & r)
            }
            return i
        },
        rc4: function(t, e) {
            for (var i = [], n = 0, s = void 0, a = "", o = 0; o < 256; o++)
                i[o] = o;
            for (o = 0; o < 256; o++)
                n = (n + i[o] + t.charCodeAt(o % t.length)) % 256,
                s = i[o],
                i[o] = i[n],
                i[n] = s;
            o = 0,
            n = 0;
            for (var r = 0; r < e.length; r++)
                o = (o + 1) % 256,
                n = (n + i[o]) % 256,
                s = i[o],
                i[o] = i[n],
                i[n] = s,
                a += String.fromCharCode(e.charCodeAt(r) ^ i[(i[o] + i[n]) % 256]);
            return a
        },
        mergeObject: function(t, e) {
            for (var i in t)
                e[i] = t[i];
            return e
        },
        htmlEncodeAll: function(t) {
            return null == t ? "" : t.replace(/\&/g, "&amp;").replace(/\</g, "&lt;").replace(/\>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
        },
        cookie: {
            isCookie: !0,
            getCookie: function(t, e) {
                try {
                    for (var i = document.cookie.split(";"), n = i.length, s = 0; s < n; s++) {
                        var a = i[s].split("=");
                        if (a[0] = a[0].split(" ").join(""),
                        a.length > 1 && a[0] === t)
                            return decodeURIComponent(a[1])
                    }
                } catch (t) {
                    return this.isCookie = !1,
                    r.default.w(this.TAG, "document.cookie is excption"),
                    null
                }
            },
            setCookie: function(t, e, i) {
                try {
                    i = i || {},
                    null === e && (e = "",
                    i.expires = -1);
                    var n = "";
                    if (i.expires && ("number" == typeof i.expires || i.expires.toUTCString)) {
                        var s = void 0;
                        "number" == typeof i.expires ? (s = new Date,
                        s.setTime(s.getTime() + 24 * i.expires * 60 * 60 * 1e3)) : s = i.expires,
                        n = "; ex2pires=" + s.toUTCString()
                    }
                    var a = i.path ? "; path=" + i.path : ""
                      , o = i.domain ? "; domain=" + i.domain : ""
                      , l = i.secure ? "; secure" : "";
                    document.cookie = [t, "=", encodeURIComponent(e), n, a, o, l].join("")
                } catch (t) {
                    this.isCookie = !1,
                    r.default.w(this.TAG, "document.cookie is excption")
                }
            }
        },
        show: function(t, e) {
            if (e = e || "block",
            t instanceof Array)
                for (var i = 0, n = t.length; i < n; i++) {
                    var s = t[i];
                    s && s instanceof HTMLElement && (s.style.display = e)
                }
            t && t instanceof HTMLElement && (t.style.display = e)
        },
        hide: function(t) {
            if (t instanceof Array)
                for (var e = 0, i = t.length; e < i; e++) {
                    var n = t[e];
                    n && n instanceof HTMLElement && (n.style.display = "none")
                }
            t && t instanceof HTMLElement && (t.style.display = "none")
        },
        createElement: function(t, e, i, n) {
            n = n || "div";
            var s = document.createElement(n);
            return t && (s.className = t),
            e && (s.id = e),
            i && (s.innerHTML = i),
            s
        },
        getTimeModel: function(t) {
            var e = void 0
              , i = void 0
              , n = void 0
              , s = [];
            return e = Math.floor(t / 3600),
            t %= 3600,
            i = Math.floor(t / 60),
            n = parseInt(t % 60),
            e > 0 ? s.push(e) : "",
            i > 9 ? s.push(i) : s.push("0" + i),
            n > 9 ? s.push(n) : s.push("0" + n),
            s.join(":")
        },
        playVideoElementExclusion: function(t) {
            var e = "";
            t && (e = t.id,
            t.setAttribute("data-paused", "play"));
            for (var i = document.getElementsByTagName("video"), n = 0, s = i.length; n < s; n++)
                i[n].id !== e && i[n].id.indexOf("xplayer") > -1 && (i[n].setAttribute("data-paused", "paused"),
                i[n].paused ? "" : i[n].pause())
        },
        checkVideoIsPaused: function(t) {
            if (!t)
                return !1;
            var e = t.getAttribute("data-paused");
            return "paused" === e
        },
        checkBind: function() {
            Function.prototype.bind || (Function.prototype.bind = function(t) {
                if ("function" != typeof this)
                    throw new TypeError("What is trying to be bound is not callable");
                var e = Array.prototype.slice.call(arguments, 1)
                  , i = this
                  , n = function() {};
                return fBound = function() {
                    return i.apply(this instanceof n ? this : t, e.concat(Array.prototype.slice.call(arguments)))
                }
                ,
                n.prototype = this.prototype,
                fBound.prototype = new n,
                fBound
            }
            )
        },
        addAplusMeta: function() {
            var t = document.location.href;
            if (t.indexOf("youku.com") < 0 && t.indexOf("tudou.com") < 0) {
                var e = document.getElementsByTagName("head")[0]
                  , i = document.createElement("meta");
                i.name = "aplus-disable-pvid",
                i.content = "true",
                e.appendChild(i)
            }
        },
        loadAplus: function() {
            if (window.goldlog ? window.goldlog.pvid && (window.goldlog.pvid = "") : (v.addAplusMeta(),
            this.loadfile(this.protocol + "//g.alicdn.com/alilog/??s/8.2.1/plugin/aplus_client.js,aplus_cplugin/0.3.1/monitor.js,s/8.2.1/aplus_o.js,s/8.2.1/plugin/aplus_urchin2.js", "js")),
            this.cookie.getCookie("cna"))
                return void (this.cna = this.cookie.getCookie("cna"));
            var t = window.goldlog_queue || (window.goldlog_queue = []);
            t.push({
                action: "goldlog.aplus_pubsub.subscribe",
                arguments: ["sendPV", function(t, e, i) {
                    i && i.cna && (this.cna = i.cna)
                }
                ]
            })
        },
        getUCStr: function(t) {
            var e = ""
              , i = navigator.userAgent.toLowerCase();
            if (i.indexOf("ucbrowser") > -1)
                if ("undefined" != typeof uckey && uckey.getUCKey)
                    try {
                        var n = uckey.getUCKey(t);
                        e += "&uc_param_str=xk&xk=" + n,
                        r.default.i(this.TAG, n)
                    } catch (t) {
                        e += "&uc_param_str=x"
                    }
                else {
                    var s = i.search(/ucbrowser/i);
                    s != -1 && parseFloat(i.substr(s + 10, 4)) >= 9.8 && (e += "&uc_param_str=xk",
                    r.default.i(this.TAG, parseFloat(i.substr(s + 10, 4))))
                }
            return e
        },
        getIOSM3u8Str: function(t, e) {
            var i = ""
              , n = "oravj6uqwkgn7ypp"
              , s = "2h8q4w349ut1r0sn6o20zlzy68zspwcz"
              , a = m.default.hex_md5(t + e + s)
              , o = n + "_" + e + "_" + a;
            return i += this.encode64(o),
            "&xk=" + encodeURIComponent(i)
        },
        checkProtocol: function() {
            var t = "";
            t = document.location && document.location.protocol ? document.location.protocol : document.location && document.location.href && document.location.href.indexOf("https:") > -1 ? "https:" : "http:",
            this.protocol = t
        },
        getCna: function() {
            return this.cna ? this.cna : this.cookie.getCookie("cna") ? (this.cna = this.cookie.getCookie("cna"),
            this.cna) : window.goldlog && window.goldlog.Etag ? (this.cna = window.goldlog.Etag,
            this.cna) : (this.loadfile("https://log.mmstat.com/eg.js", "js"),
            null)
        },
        initUA_OPT: function() {
            if (!window.UA_Opt) {
                this.ckeyTimestamp = (new Date).getTime(),
                v.ckeyTimer || (v.ckeyTimer = window.setTimeout(function() {
                    window[window.UA_Opt.LogVal] || (v.sendUALog((new Date).getTime() - v.ckeyTimestamp),
                    window.clearTimeout(v.ckeyTimer),
                    v.ckeyTimer = null)
                }, 3e3));
                var t = new Object;
                window.UA_Opt = t,
                this.uaKey = "collina_" + (new Date).getTime(),
                t.OnlyHost = 1,
                t.SendMethod = 9,
                t.FormId = "login_submit_form",
                t.ExTarget = ["password"],
                t.LogVal = this.uaKey,
                window[t.LogVal] = "",
                t.Token = (new Date).getTime() + ":" + Math.random(),
                t.MaxMCLog = 5,
                t.MaxKSLog = 5,
                t.MaxMPLog = 5,
                t.MaxTCLog = 5,
                t.MaxFocusLog = 5,
                t.ResHost = "aeu.alicdn.com",
                t.Flag = 1670350
            }
            if (window.UA_Opt.callback = function() {
                window.clearTimeout(v.ckeyTimer),
                v.ckeyTimer = null,
                v.sendUALog((new Date).getTime() - v.ckeyTimestamp),
                v.ckey = window[window.UA_Opt.LogVal]
            }
            ,
            "undefined" == typeof window.acjs) {
                var e = document.createElement("script");
                e.src = "//af.alicdn.com/js/uac.js",
                document.head.appendChild(e)
            }
        },
        getUA: function() {
            var t = window[window.UA_Opt.LogVal];
            return window.UA_Opt.Token = (new Date).getTime() + ":" + Math.random(),
            window.UA_Opt.reload && window.UA_Opt.reload(),
            t
        },
        sendUALog: function(t) {
            t = t < 100 ? 100 : t < 1e3 ? 100 * parseInt(t / 100) : t > 3e3 ? 3e3 : 1e3 * parseInt(t / 1e3);
            try {
                window.goldlog.record("/yt/youkuplayer.fdl.playerckey", "EXP", "verison=" + u.default.version + "&ccode=0501&millisecond=" + t + "&cna=" + v.cna, "GET")
            } catch (e) {
                v.sendlog("//gm.mmstat.com/yt/youkuplayer.fdl.playerckey?verison=" + u.default.version + "&ccode=0501&millisecond=" + t + "&cna=" + v.cna + "&t=" + (new Date).getTime())
            }
        },
        setBetaUrl: function(t) {
            var e = ""
              , i = "";
            if (t)
                return v.m3u8test = t.beta && t.beta.m3u8 ? t.beta.m3u8 : null,
                void (v.m3u8test = t.beta && t.beta.ups ? t.beta.ups : null);
            var n = location.href;
            e = this.getURlKey("m3u8test", n),
            i = this.getURlKey("upstest", n),
            e && (v.m3u8test = e),
            i && (v.upstest = i),
            this.isPre && (v.upstest || (v.upstest = "https://ups-pre.youku.com/ups/get.json"))
        },
        getOS: function() {
            return f.browser.isIOS || f.browser.isMac ? "ios" : f.browser.isAndroid ? "android" : f.browser.isWindows ? "windows" : null
        },
        getDevice: function() {
            return f.browser.isMobile || f.browser.isIPod ? "phone" : f.browser.isWindows ? "pc" : f.browser.isIPad ? "ipad" : "tv"
        },
        testIsIPUrl: function(t) {
            return /^(?:https?:\/\/)?(?:\d+\.){3}\d+/i.test(t)
        },
        checkUrlIsDomain: function(t) {
            return !/(?=(\b|\D))(((\d{1,2})|(1\d{1,2})|(2[0-4]\d)|(25[0-5]))\.){3}((\d{1,2})|(1\d{1,2})|(2[0-4]\d)|(25[0-5]))(?=(\b|\D))/.test(t)
        },
        changeProtocol: function(t) {
            var e = location.protocol
              , i = navigator.userAgent.toLowerCase();
            return t && ("https:" === e || i.indexOf("alipay") > 0) && this.checkUrlIsDomain(t) && (t = t.replace("http:", "https:")),
            t
        }
    };
    v.getURlKey = s,
    v.initUA_OPT(),
    v.checkBind(),
    v.checkProtocol(),
    v.loadAplus(),
    v.setBetaUrl(),
    exports.default = v
}
, function(t, exports, e) {
    "use strict";
    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    function n(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }),
    exports.EventEmitter = exports.util = exports.Log = exports.YoukuH5PlayerCore = void 0;
    var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
      , a = function() {
        function t(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        return function(e, i, n) {
            return i && t(e.prototype, i),
            n && t(e, n),
            e
        }
    }()
      , o = e(72)
      , r = i(o)
      , l = e(5)
      , u = i(l)
      , d = e(3)
      , h = i(d)
      , c = e(14)
      , f = (i(c),
    e(73))
      , p = i(f)
      , m = e(69)
      , v = i(m)
      , _ = e(71)
      , y = i(_)
      , g = e(70)
      , b = i(g)
      , w = e(11)
      , A = e(9)
      , E = i(A)
      , T = e(22)
      , k = e(1)
      , P = i(k)
      , S = e(12)
      , I = e(13)
      , D = i(I)
      , L = e(10)
      , C = e(23)
      , O = i(C)
      , x = e(2)
      , U = function() {
        function t(e, i) {
            if (n(this, t),
            this.TAG = "YoukuH5PlayerCore",
            !e)
                return void console.error("the container of dom is necessary");
            if (!i.ccode)
                return void console.error("the config is error,please check!!! ccode is necessary");
            if (!(i.videoId || i.param && (i.param.showid || i.param.playlist_id)))
                return void console.error("the config is error,please check!!! videoId or param.showid is necessary");
            if (this._platform = {
                type: "youku",
                desc: "优酷"
            },
            i._isTudou && (this._platform.type = "tudou",
            this._platform.desc = "土豆"),
            this.util = h.default,
            this.initTime = (new Date).getTime(),
            "string" == typeof e && h.default.getById(e))
                this.containerId = e,
                this.container = h.default.getById(e),
                this.mediaElementId = "xplayer_" + e;
            else if (e instanceof HTMLElement) {
                this.container = e;
                var s = (new Date).getTime() + "";
                this.mediaElementId = "xplayer" + s
            } else
                u.default.e("the value of container id error,please check!!!");
            this.config = i,
            this.config.ccode || (this.config.ccode = "0501"),
            this.config.client_id || (this.config.client_id = "youkumobileplaypage"),
            this.control = this.config.control ? this.config.control : {},
            i.purePlay && (this.control.loop = !0),
            this.supportType = this._getSupportType(),
            this.winType = this.config.winType ? this.config.winType : x.browser.isMobile ? "xplayer_m3u8" : "xplayer_h5",
            this.isThirdParty = this._isThirdParty(),
            this.control.beta ? h.default.setBetaUrl(this.control) : "",
            this.control.lang || (this.control.lang = "guoyu"),
            this.control.hd || (this.control.hd = "mp4hd"),
            this.error = !1,
            this._firstTag = !0,
            this._isAdPlaying = !1,
            this.currentTime = 0,
            this._frontAd = !1,
            this._replay = !1,
            this.isPause = !0,
            this.cna = h.default.getCna();
            var a = {};
            if (a.vid = i.videoId || "",
            a.ccode = i.ccode,
            a.client_ip = "0.0.0.0",
            a.app_ver = "1.0.75",
            this.config.param)
                for (var o in this.config.param)
                    this.config.param[o] && (a[o] = this.config.param[o]);
            a.client_ts = parseInt((new Date).getTime() / 1e3),
            a.utid = this.cna;
            var l = null;
            this.isThirdParty && (l = {},
            this.config.password && (this.custumPassword = this.config.password,
            l.password = this.config.password),
            l.client_id = this.config.client_id,
            l.video_id = this.config.videoId,
            l.embsig = this.config.embsig,
            l.atoken = this.config.atoken,
            l.refer = encodeURIComponent(window.location.href),
            l.openapi_retry_count = this.config.openApiRetryCount),
            this._upsInfo = new r.default(a,l),
            this._videoInfo = new p.default(this.config.ccode),
            this._emitter = new P.default,
            this._createVideo();
            var d = {
                supportType: "mp4",
                sid: "",
                client_id: this.config.client_id,
                ccode: this.config.ccode,
                vvlogconfig: this.config.logconfig,
                cna: this.cna,
                vvlogextParam: this.config.vvlogextParam || {},
                tslogextParam: this.config.tslogextParam || {},
                disablePlayLog: this.config.disablePlayLog || !1
            };
            this._reporter = new D.default(this.mediaElement,null,d,this),
            this._e = {
                onPlay: this._onPlay.bind(this),
                onPause: this._onPause.bind(this),
                onEnded: this._onEnded.bind(this),
                onCanPlay: this._onCanplay.bind(this),
                onTimeUpdate: this._onTimeupdate.bind(this),
                onError: this._onError.bind(this),
                onLoadedData: this._onLoadeddata.bind(this),
                onLoadedMetaData: this._onLoadedmetaData.bind(this),
                onAbort: this._onAbort.bind(this),
                onStalled: this._onStalled.bind(this),
                onSuspend: this._onSuspend.bind(this),
                onWaiting: this._onWaiting.bind(this),
                onVolumeChange: this._onVolumeChange.bind(this),
                onPlaying: this._onPlaying.bind(this),
                onSeeked: this._onSeeked.bind(this),
                onSeeking: this._onSeeking.bind(this),
                onDurationChange: this._onDurationChange.bind(this),
                onProgress: this._onProgress.bind(this),
                onRateChange: this._onRateChange.bind(this),
                onLoadStart: this._onLoadStart.bind(this)
            },
            this._adEvent = {
                onAdStartPlay: this._onAdStartPlay.bind(this),
                onAdEnd: this._onAdEnd.bind(this),
                onAdPause: this._onAdPause.bind(this),
                onAdTimeUpdate: this._onAdTimeUpdate.bind(this),
                onAdError: this._onAdError.bind(this),
                onAdLoading: this._onAdLoading.bind(this),
                onAdCanPlay: this._onAdCanPlay.bind(this),
                onAdTimeout: this._onAdTimeout.bind(this),
                adDataOk: this._adDataOk.bind(this),
                adDataError: this._adDataError.bind(this),
                onAdReady: this._onAdReady.bind(this)
            },
            this.currentState = L.YKP.PLAYER_STATE.INIT,
            this.load(null, l)
        }
        return a(t, null, [{
            key: "STATE",
            get: function() {
                return L.YKP.PLAYER_STATE
            }
        }]),
        a(t, [{
            key: "destroy",
            value: function() {
                this.error = !1,
                this._firstTag = !0,
                this._isAdPlaying = !1,
                this.currentTime = 0,
                this._frontAd = !1,
                this._replay = !1,
                this._originalData = null,
                this.totalTime = 0,
                this.isPause = !0,
                this.vv59 = !1,
                this._player.destroy(),
                this._videoInfo.destroy(),
                this._adplugin.destroy(),
                this._reporter.destroy(),
                this.ifEvent = !1
            }
        }, {
            key: "destroyComplete",
            value: function() {
                this.destroy(),
                this._upsInfo.destroy(),
                this._dettachPlayerEvents()
            }
        }, {
            key: "createPlayerCore",
            value: function(t) {
                this.supportType = this._getSupportType(t),
                "m3u8" === this.supportType ? this._player = new b.default({}) : this._player = new y.default({});
                var e = {
                    supportType: this.supportType,
                    ccode: this.config.ccode,
                    autoplay: this.control.autoplay,
                    client_id: this.config.client_id
                };
                this.config.atoken && (e.atoken = this.config.atoken),
                this._adplugin = new v.default(this.mediaElement,e),
                this._attachAdEvents()
            }
        }, {
            key: "_createVideo",
            value: function(t, e) {
                if (!this.mediaElement) {
                    var i = document.createElement("video");
                    if (i.id = this.mediaElementId,
                    i.setAttribute("webkit-playsinline", ""),
                    i.setAttribute("playsinline", ""),
                    i.setAttribute("x-webkit-airplay", "allow"),
                    this.config.isForbidX5 || i.setAttribute("x5-playsinline", ""),
                    this.config.extVideoAttributes)
                        for (var n in this.config.extVideoAttributes)
                            i[n] = this.config.extVideoAttributes[n];
                    this.config.isMuted && i.setAttribute("muted", !0),
                    i.style.width = "100%",
                    i.style.height = "100%",
                    i.style.display = "none",
                    i.style.position = "relative",
                    t && (i.width = "string" == typeof t && t.indexOf("px") > 0 ? t : t + "px"),
                    e && (t.height = "string" == typeof e && e.indexOf("px") > 0 ? e : e + "px"),
                    this.container.appendChild(i),
                    this.mediaElement = i
                }
            }
        }, {
            key: "_attachPlayerEvents",
            value: function() {
                if (!this.ifEvent && (this.ifEvent = !0,
                this._player && this._e))
                    for (var t in S.VIDEO_EVENTS)
                        this._player.on(S.VIDEO_EVENTS[t], this._e[S.VIDEO_EVENTS[t]])
            }
        }, {
            key: "_dettachPlayerEvents",
            value: function() {
                if (this._player && this._e) {
                    this.ifEvent = !1;
                    for (var t in S.VIDEO_EVENTS)
                        this._player.off(S.VIDEO_EVENTS[t], this._e[S.VIDEO_EVENTS[t]])
                }
            }
        }, {
            key: "_attachAdEvents",
            value: function() {
                this._adplugin && this._adEvent && (this._adplugin.on(E.default.AD_DATA_OK, this._adEvent.adDataOk),
                this._adplugin.on(E.default.AD_DATA_ERROR, this._adEvent.adDataError),
                this._adplugin.on(E.default.AD_PLAY, this._adEvent.onAdStartPlay),
                this._adplugin.on(E.default.AD_PAUSE, this._adEvent.onAdPause),
                this._adplugin.on(E.default.AD_END, this._adEvent.onAdEnd),
                this._adplugin.on(E.default.AD_TIMEUPDATE, this._adEvent.onAdTimeUpdate),
                this._adplugin.on(E.default.AD_ERROR, this._adEvent.onAdError),
                this._adplugin.on(E.default.AD_CANPLAY, this._adEvent.onAdCanPlay),
                this._adplugin.on(E.default.AD_LOADING, this._adEvent.onAdLoading),
                this._adplugin.on(E.default.AD_TIMEOUT, this._adEvent.onAdTimeout),
                this._adplugin.on(E.default.AD_READY, this._adEvent.onAdReady))
            }
        }, {
            key: "_dettachAdEvents",
            value: function() {
                this._adplugin && this._adEvent && (this._adplugin.off(E.default.AD_DATA_OK, this._adEvent.adDataOk),
                this._adplugin.off(E.default.AD_DATA_ERROR, this._adEvent.adDataError),
                this._adplugin.off(E.default.AD_PLAY, this._adEvent.onAdStartPlay),
                this._adplugin.off(E.default.AD_PAUSE, this._adEvent.onAdPause),
                this._adplugin.off(E.default.AD_END, this._adEvent.onAdEnd),
                this._adplugin.off(E.default.AD_TIMEUPDATE, this._adEvent.onAdTimeUpdate),
                this._adplugin.off(E.default.AD_ERROR, this._adEvent.onAdError),
                this._adplugin.off(E.default.AD_CANPLAY, this._adEvent.onAdCanPlay),
                this._adplugin.off(E.default.AD_LOADING, this._adEvent.onAdLoading),
                this._adplugin.off(E.default.AD_TIMEOUT, this._adEvent.onAdTimeout),
                this._adplugin.off(E.default.AD_READY, this._adEvent.onAdReady))
            }
        }, {
            key: "_isThirdParty",
            value: function() {
                return !(!this.config.client_id || 16 != (this.config.client_id + "").length || this.config.isDubsmash) && (this.winType = "BDskin",
                !0)
            }
        }, {
            key: "_getSupportType",
            value: function() {
                if (this.control && "mp4" === this.control.playerType)
                    return "mp4";
                var t = navigator.userAgent.toLowerCase();
                return t.indexOf("ucbrowser") > -1 && t.indexOf("alipay") < 0 || this.control && "m3u8" === this.control.playerType || x.browser.isIOS && x.browser.isMobile || x.browser.isMac && x.browser.isSafari ? "m3u8" : "mp4"
            }
        }, {
            key: "_upsdataSuccess",
            value: function(t, e) {
                this.error = !1,
                this._originalData = t,
                this.thirdData = e;
                var i = null;
                if (this.custumPassword && (this.password = this.custumPassword,
                i = this.config.client_id),
                1111 === t.status)
                    return t.error = {
                        code: 1111,
                        note: "亲~人太多了，被挤爆了",
                        wait: t.wait
                    },
                    void this._upsDataError(t.error);
                if (this._videoInfo.init(t, this.password, i),
                t.error) {
                    var n = t.error.code + ""
                      , s = ["-2002", "-2003", "-3001", "-3002", "-3006", "-3007", "-3008"];
                    if (s.join(",").indexOf(n) > -1 || this._originalData.play_policy)
                        this._initControlInfo();
                    else {
                        switch (n) {
                        case "-4004":
                            this.sendErrorLog("23", "23404");
                            break;
                        case "-4005":
                            this.sendErrorLog("23", "23405");
                            break;
                        case "-5001":
                            this.sendErrorLog("23", "23501");
                            break;
                        case "-6001":
                            this.sendErrorLog("23", "23601");
                            break;
                        case "-6003":
                            this.sendErrorLog("23", "23603");
                            break;
                        case "-6004":
                            this._reporter.sendFdlErrorLog("-6004"),
                            this.sendErrorLog("23", "23604");
                            break;
                        case "-6005":
                            this._reporter.sendFdlErrorLog("-6005")
                        }
                        this.currentState = L.YKP.PLAYER_STATE.ERROR
                    }
                    this.error = !0,
                    this._upsDataError(t.error)
                } else {
                    var a = this._videoInfo.trial && this._videoInfo.trial.time;
                    this.createPlayerCore(a),
                    this._initControlInfo(),
                    this.totalTime = this._videoInfo.video ? Number(this._videoInfo.video.seconds) : 0;
                    var o = this._videoInfo.getStreamData(this.control.lang, this.control.hd);
                    this.totalTime = o.seconds_video > this.totalTime ? o.seconds_video : this.totalTime,
                    this.headAdTime = o.headTime,
                    this.tailAdTime = o.tailTime;
                    var r = this.getPreviewInfo();
                    this._tailTime = r && r.tail > 0 ? r.tail : -1,
                    this._headTime = r && r.head > 0 ? r.head : -1,
                    this._initAdPlugin(),
                    this._reporter.init(this._videoInfo),
                    u.default.i(this.TAG, "get ups data from upsInfo vid is:" + t.video.id),
                    this.currentState = L.YKP.PLAYER_STATE.READY
                }
                this._reporter.addPlayerDurationReport(58),
                this.upsDataSuccess(t),
                this.upsDataReady(t)
            }
        }, {
            key: "_initAdPlugin",
            value: function() {
                var t = {};
                t.fu = this.control.fullscreen,
                t.vr = 0,
                t.rst = x.browser.isMobile && "ios" === x.browser.isIOS ? "m3u8" : "mp4",
                t.dq = w.VIDEOHD_MAP[this.control.hd] || "auto",
                t.os = h.default.getOS(),
                t.bt = h.default.getDevice(),
                t.bd = "",
                t.tict = 0,
                t.fu = this.control.fullscreen ? 1 : 0,
                t.d = this.config.param && this.config.param.playlist_id ? this.config.param.playlist_id : 0,
                this.isThirdParty && (t.partnerid = this.config.client_id,
                t.atm = this.thirdData && this.thirdData.atm ? this.thirdData.atm : "");
                var e = {};
                e.param = t,
                this.config.adConfig && (e.adConfig = this.config.adConfig),
                this.config.adext && (e.adext = this.config.adext),
                e.supportType = this.supportType,
                e.lang = this.control.lang,
                e.hd = this.control.hd,
                e.isvert = h.default.getScreenState(),
                e.wintype = "xplayer_m3u8",
                e.needbf = 1,
                e.m3u8_url = this._videoInfo.stream[this.control.lang][this.control.hd].m3u8_url,
                e.ytid = this._videoInfo.user ? this._videoInfo.user.ytid : "null",
                this._adplugin.init(this._videoInfo, e, this._originalData.ad)
            }
        }, {
            key: "getAdParam",
            value: function() {
                var t = {};
                return t.fu = this.control.fullscreen,
                t.vr = 0,
                t.rst = "mp4",
                t.dq = w.VIDEOHD_MAP[this.control.hd] || "auto",
                t.os = h.default.getOS(),
                t.bt = h.default.getDevice(),
                t.bd = "",
                t.tict = 0,
                t.fu = this.control.fullscreen ? 1 : 0,
                t.d = this.config.param && this.config.param.playlist_id ? this.config.param.playlist_id : 0,
                this.isThirdParty && (t.partnerid = this.config.client_id,
                t.atm = this.thirdData && this.thirdData.atm ? this.thirdData.atm : ""),
                t.needbf = 1,
                t.site = location.origin.indexOf("tudou.com") > -1 || "0505" === this.ccode ? "-1" : "1",
                t.aw = "w",
                t.vs = "1.0",
                t.pver = "1",
                t.wintype = "xplayer_m3u8",
                t
            }
        }, {
            key: "_realStartPlay",
            value: function(t) {
                u.default.i(this.TAG, "_realStartPlay" + t + " ");
                var e = null;
                if (this._firstTag) {
                    var i = {};
                    this._player.attachMediaElement(this.mediaElement),
                    this._attachPlayerEvents();
                    var n = this._videoInfo.stream[this.control.lang][this.control.hd];
                    if (this.totalTime = n.seconds_video > this.totalTime ? n.seconds_video : this.totalTime,
                    this.config.limitTime && this.config.limitTime.end < this.totalTime && (this.totalTime = this.config.limitTime.end),
                    this._videoInfo.trial && this._videoInfo.trial.time < this.totalTime ? i.totalTime = this._videoInfo.trial.time : i.totalTime = this.totalTime,
                    i.time = this.config.limitTime ? this.config.limitTime.start : this.config.firsttime ? this.config.firsttime : 0,
                    "m3u8" === this.supportType) {
                        var s = n.m3u8_url;
                        this._adError ? i.m3u8Url = s : i.m3u8Url = this._adplugin.buildM3u8(s, !1),
                        i.frontAdTime = this._adplugin.frontAdTime
                    } else
                        i.segs = n.segs;
                    this._player.load(i),
                    this.currentState = L.YKP.PLAYER_STATE.PLAYING,
                    this.isThirdParty && this._upsInfo.sendThirdToken(),
                    this.vv59 || (this._reporter.addPlayerDurationReport(59),
                    this.vv59 = !0),
                    this._userPause ? u.default.i(this.TAG, "autoplay and userPause is true; block play") : (u.default.i(this.TAG, "autoplay and userPause is false;"),
                    e = this._player.play()),
                    this._headTime > 0 && this.config.isSkip && !this._headSkip && (this._lastSeekTime = this._headTime,
                    this._headSkip = !0,
                    this.seek(this._headTime))
                } else
                    this.sendEventLog("xpl", "c"),
                    e = this._player.play();
                return this.currentState = L.YKP.PLAYER_STATE.PLAYING,
                e
            }
        }, {
            key: "_initControlInfo",
            value: function() {
                if (this._videoInfo.langcodes) {
                    var t = this.control
                      , e = this._videoInfo.langcodes.join(",") + ","
                      , i = t.lang;
                    !t.lang || e.indexOf(i + ",") < 0 ? this.control.lang = this._videoInfo.langcodes[0] : this.control.lang = t.lang,
                    this.control.hd = t.hd || "mp4hd";
                    var n = this._videoInfo.hdList[this.control.lang].hdcodes
                      , s = n.join(",") + ",";
                    s.indexOf(this.control.hd + ",") < 0 && (this.control.hd = n.join(",").indexOf("3gphd") > -1 ? "3gphd" : n[0]),
                    this.control.autoplay = t.autoplay || !1,
                    this.control.fullscreen = t.fullscreen || !1
                }
            }
        }, {
            key: "_m3u8SwitchToMp4",
            value: function() {
                this._player.destroy(),
                this._dettachPlayerEvents(),
                this.supportType = "mp4",
                this._player.adStatus = !1,
                this.error = !1,
                this._firstTag = !0,
                this._player = new y.default({}),
                this._adplugin.resetPlayer(this.supportType),
                this.play()
            }
        }, {
            key: "_upsTimeout",
            value: function() {
                this.currentState = L.YKP.PLAYER_STATE.ERROR,
                u.default.i(this.TAG, "get ups data timeout,please try again"),
                this.sendErrorLog("20", "20408");
                var t = {
                    code: "0001",
                    note: "数据获取失败，请检查网络之后重试"
                };
                this.upsDataFail(t)
            }
        }, {
            key: "_upsDataError",
            value: function(t) {
                this.currentState = L.YKP.PLAYER_STATE.ERROR,
                u.default.d(this.TAG, "_upsDataError:" + JSON.stringify(t)),
                this.upsDataError(t)
            }
        }, {
            key: "_upsDataFail",
            value: function(t) {
                u.default.d(this.TAG, t),
                this.currentState = L.YKP.PLAYER_STATE.ERROR,
                t && t.response && this.sendErrorLog("21", "21" + t.code),
                t && !t.response && this.sendErrorLog("21", "21408"),
                t || this.sendErrorLog("20", "20404"),
                t = t || {
                    code: "0002",
                    note: "数据获取失败，请检查网络之后重试"
                },
                this.upsDataFail(t),
                u.default.d(this.TAG, "_upsDataFail:get upsinfo fail,the service is 404 or 503")
            }
        }, {
            key: "_onPlay",
            value: function(t) {
                document.getElementsByClassName("x-showtips")[0] && (document.getElementsByClassName("x-showtips")[0].style.display = "none"),
                u.default.d(this.TAG, "_onPlay" + this._player.currentTime),
                this._firstTag && (this._firstTag = !1,
                this._reporter.addPlayerDurationReport(60),
                this._reporter.sendTSLog(60),
                this._reporter.sendUPSLog(3)),
                this.isPause = !1,
                this.onPlay()
            }
        }, {
            key: "_onPause",
            value: function(t) {
                console.log("_onPause"),
                u.default.d(this.TAG, "_onPause:"),
                this.isPause = !0,
                0 === h.default.getScreenState() && this._adplugin.requestPauseAd(),
                this.onPause()
            }
        }, {
            key: "_onEnded",
            value: function(t) {
                this.isEnd || (this.currentState = L.YKP.PLAYER_STATE.END,
                this.isEnd = !0,
                this._reporter.addPlayerDurationReport(61),
                this._reporter.sendTSLog(61),
                this.getTrialInfo() || this._replay || this._endAd ? (u.default.d(this.TAG, "onEnded"),
                this.onEnded()) : (u.default.d(this.TAG, "playEndAD"),
                this._adplugin.playEndAD()))
            }
        }, {
            key: "_onCanplay",
            value: function(t) {
                u.default.d(this.TAG, "_onCanplay" + this._player.currentTime),
                this.onCanplay(t),
                this._lastSeekTime > 0 && (this.seek(this._lastSeekTime),
                this._lastSeekTime = 0)
            }
        }, {
            key: "_onTimeupdate",
            value: function(t, e) {
                e <= this.totalTime && (this.currentTime = e,
                this.onTimeupdate(t, e),
                this._adplugin.posiTimeUpdate(e)),
                this._tailTime > 0 && this.config.isSkip && !this._tailSkip && e >= this._tailTime && (this._tailSkip = !0,
                this.seek(this.totalTime))
            }
        }, {
            key: "_onError",
            value: function(t) {
                if (u.default.d(this.TAG, "_onError"),
                this.error = !0,
                this.currentState = L.YKP.PLAYER_STATE.ERROR,
                "m3u8" === this.supportType) {
                    if (0 === this.currentTime)
                        return void this._m3u8SwitchToMp4();
                    this.sendErrorLog("32", "32602")
                } else
                    this.sendErrorLog("31", "31602");
                this.onError(t)
            }
        }, {
            key: "_onLoadeddata",
            value: function(t) {
                this.onLoadeddata(t),
                u.default.d(this.TAG, "_onLoadeddata")
            }
        }, {
            key: "_onLoadedmetaData",
            value: function(t) {
                this.onLoadedmetaData(t),
                u.default.d(this.TAG, "_onLoadedmetaData")
            }
        }, {
            key: "_onLoadStart",
            value: function(t) {
                this.onLoadStart(t),
                u.default.d(this.TAG, "_onLoadStart")
            }
        }, {
            key: "_onAbort",
            value: function(t) {
                this.onAbort(t),
                u.default.d(this.TAG, "_onAbort")
            }
        }, {
            key: "_onStalled",
            value: function(t) {
                this.onStalled(),
                u.default.d(this.TAG, "_onStalled")
            }
        }, {
            key: "_onSuspend",
            value: function(t) {
                this.onSuspend(),
                u.default.d(this.TAG, "_onSuspend")
            }
        }, {
            key: "_onWaiting",
            value: function(t) {
                this.onWaiting(t),
                u.default.d(this.TAG, "_onWaiting")
            }
        }, {
            key: "_onVolumeChange",
            value: function(t) {
                this.onVolumeChange(t),
                u.default.d(this.TAG, "_onVolumeChange")
            }
        }, {
            key: "_onPlaying",
            value: function(t) {
                this.onPlaying(t),
                this.currentState = L.YKP.PLAYER_STATE.PLAYING,
                u.default.d(this.TAG, "_onPlaying")
            }
        }, {
            key: "_onSeeked",
            value: function(t) {
                this.onSeeked(t),
                u.default.d(this.TAG, "_onSeeked")
            }
        }, {
            key: "_onSeeking",
            value: function(t) {
                this.onSeeking(t),
                u.default.d(this.TAG, "_onSeeking")
            }
        }, {
            key: "_onDurationChange",
            value: function(t) {
                this.onDurationChange(t),
                u.default.d(this.TAG, "_onDurationChange")
            }
        }, {
            key: "_onProgress",
            value: function(t) {
                this.onProgress(t)
            }
        }, {
            key: "_onRateChange",
            value: function(t) {
                this.onRateChange(t),
                u.default.d(this.TAG, "_onRateChange")
            }
        }, {
            key: "_onAdTimeUpdate",
            value: function(t, e, i, n) {
                this.onAdTimeUpdate(t, e, i, n)
            }
        }, {
            key: "_onAdStartPlay",
            value: function(t, e) {
                this.isPause = !1,
                this._player.adStatus = !0,
                this.currentState = L.YKP.PLAYER_STATE.ADPLAY,
                this._isAdPlaying || (this._isAdPlaying = !0,
                this._reporter.sendUPSLog(1)),
                "front" !== e || this.vv59 || (this._reporter.addPlayerDurationReport(59),
                this.vv59 = !0),
                this.onAdStartPlay(t, e)
            }
        }, {
            key: "_onAdEnd",
            value: function(t, e) {
                if (u.default.i(this.TAG, "_onAdEnd::" + e + "|||" + t),
                this.onAdEnd(t, e),
                this._isAdPlaying = !1,
                this._reporter.sendUPSLog(2),
                "front" === e) {
                    this._frontAd = !0;
                    var i = this._realStartPlay(!0);
                    this.playBlock(i)
                } else
                    "end" === e && (this._endAd = !0,
                    this._isAdPlaying = !1,
                    this.currentState = L.YKP.PLAYER_STATE.END,
                    this.onEnded());
                this._player.adStatus = !1
            }
        }, {
            key: "_onAdPause",
            value: function(t, e) {
                u.default.d(this.TAG, "  _onAdPause:"),
                this.currentState = L.YKP.PLAYER_STATE.ADPAUSE,
                this.isPause = !0,
                this.onAdPause(t, e)
            }
        }, {
            key: "_onAdError",
            value: function(t, e) {
                return u.default.d(this.TAG, "_onAdError"),
                "m3u8" !== this.supportType || this._frontAd ? (this._adError = !0,
                this._onAdEnd(t, e),
                void this.onAdError(t, e)) : void this._m3u8SwitchToMp4()
            }
        }, {
            key: "_onAdTimeout",
            value: function(t, e) {
                this.onAdTimeout(t, e)
            }
        }, {
            key: "_onAdLoading",
            value: function(t, e) {
                this.onAdLoading(t, e)
            }
        }, {
            key: "_onAdCanPlay",
            value: function(t, e) {
                u.default.i(this.TAG, "_onAdCanPlay"),
                this.onAdCanPlay(t, e)
            }
        }, {
            key: "_onAdReady",
            value: function(t, e) {
                var i = null;
                if (this.control.autoplay && "front" === e && !this.error && !this._userPause) {
                    var n = this.getPayInfo();
                    n && !n.can_play || (i = this._adplugin.autoPlay())
                }
                this.onAdReady(t, e),
                this.playBlock(i)
            }
        }, {
            key: "_adDataOk",
            value: function(t, e) {
                T.AD_MAP.PAUSE === e ? t.VAL.length && this.pauseAdDataOk(t) : ("front" === e && this._reporter.initAdInfo(t),
                this.adDataOk(t, e))
            }
        }, {
            key: "_adDataError",
            value: function(t) {
                u.default.i(this.TAG, "this._curNum++;"),
                this._onAdEnd(null, t),
                this.adDataError()
            }
        }, {
            key: "getVideoInfo",
            value: function() {
                return this._videoInfo.getVideoInfo()
            }
        }, {
            key: "getUserInfo",
            value: function() {
                return this._videoInfo.getUserInfo()
            }
        }, {
            key: "getVideoList",
            value: function() {
                return this._videoInfo.getVideoList()
            }
        }, {
            key: "getShow",
            value: function() {
                return this._videoInfo.getShow()
            }
        }, {
            key: "getUps",
            value: function() {
                return this._videoInfo.ups
            }
        }, {
            key: "getPlayPolicy",
            value: function() {
                return this._videoInfo.playPolicy
            }
        }, {
            key: "getCurStreamLogo",
            value: function() {
                var t = this._videoInfo.getStreamLogo();
                return t && t[this.control.lang] && null !== t[this.control.lang][this.control.hd] ? t[this.control.lang][this.control.hd] : null
            }
        }, {
            key: "getTrialInfo",
            value: function() {
                return this._videoInfo.getTrialInfo()
            }
        }, {
            key: "getAlbum",
            value: function() {
                return this._videoInfo.getAlbum()
            }
        }, {
            key: "getUploader",
            value: function() {
                return this._videoInfo.getUploader()
            }
        }, {
            key: "getPreviewInfo",
            value: function() {
                return this._videoInfo.getPreviewInfo()
            }
        }, {
            key: "getCloudOptions",
            value: function() {
                return this._videoInfo.getCloudOptions()
            }
        }, {
            key: "getTicketInfo",
            value: function() {
                return this._videoInfo.ticket
            }
        }, {
            key: "getPayInfo",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
                  , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                return this._videoInfo.getPayInfo(t, e)
            }
        }, {
            key: "getVideolike",
            value: function() {
                return this._videoInfo.getVideolike()
            }
        }, {
            key: "getLanguageList",
            value: function() {
                return this._videoInfo.languageList
            }
        }, {
            key: "getHdList",
            value: function(t) {
                return this._videoInfo.hdList ? t && this._videoInfo.langcodes.join(",").indexOf(t) > -1 ? this._videoInfo.hdList[t].hditems : this._videoInfo.hdList[this.control.lang].hditems : null
            }
        }, {
            key: "getVipPayInfo",
            value: function() {
                return this._videoInfo.getVipPayInfo()
            }
        }, {
            key: "getZpdPayInfo",
            value: function() {
                return this._videoInfo.getZpdPayInfo()
            }
        }, {
            key: "getController",
            value: function() {
                return this._videoInfo.getController()
            }
        }, {
            key: "getError",
            value: function() {
                return this._videoInfo.error
            }
        }, {
            key: "getCurrentTime",
            value: function() {
                return this.currentTime
            }
        }, {
            key: "getLogo",
            value: function() {
                return this._videoInfo.getLogo()
            }
        }, {
            key: "getLicense",
            value: function() {
                return this._videoInfo.getLicense()
            }
        }, {
            key: "getRegister",
            value: function() {
                return this._videoInfo.getRegister()
            }
        }, {
            key: "ifShowLogo",
            value: function() {
                var t = this._videoInfo.getStreamLogo();
                if (t && t[this.control.lang] && t[this.control.lang][this.control.hd]) {
                    var e = 1 !== t[this.control.lang][this.control.hd];
                    return e
                }
                return !0
            }
        }, {
            key: "launchFullscreen",
            value: function() {
                this.control.fullscreen = !0
            }
        }, {
            key: "exitFullscreen",
            value: function() {
                this.control.fullscreen = !1
            }
        }, {
            key: "getAdInfo",
            value: function(t) {
                return this._adplugin.addata
            }
        }, {
            key: "skipAd",
            value: function(t) {
                this._adplugin.skip(t)
            }
        }, {
            key: "load",
            value: function(t, e) {
                this._endAd = !1;
                var i = t || {};
                if (t)
                    for (var n in t)
                        i[n] = t[n];
                var s = this.getAdParam();
                if (s)
                    for (var n in s)
                        i[n] = s[n];
                this._upsInfo.start(this._upsdataSuccess.bind(this), this._upsDataFail.bind(this), this._upsTimeout.bind(this), i, e)
            }
        }, {
            key: "play",
            value: function() {
                if (u.default.d(this.TAG, "play::" + this.currentState + "  _isAdPlaying:" + this._isAdPlaying),
                !this.error) {
                    if (this._userPause = !1,
                    this.currentState === L.YKP.PLAYER_STATE.END)
                        return this.isEnd = !1,
                        void this.replay();
                    this._firstTag && !this._isAdPlaying && this.sendEventLog("xPs", "c");
                    var t = null;
                    t = this._isAdPlaying || this.currentState === L.YKP.PLAYER_STATE.READY ? this._adplugin.play() : this._realStartPlay(!0),
                    this.playBlock(t)
                }
            }
        }, {
            key: "pause",
            value: function(t) {
                u.default.d(this.TAG, "play::" + this.currentState + " isEnd:" + this.isEnd),
                this.error || this.currentState === L.YKP.PLAYER_STATE.INIT || this.currentState === L.YKP.PLAYER_STATE.READY || this.isEnd || (t || (this._userPause = !0),
                this._isAdPlaying ? (this.currentState = L.YKP.PLAYER_STATE.ADPAUSE,
                this._adplugin.pause()) : (this.sendEventLog("xPa", "c"),
                this._player.pause(),
                this.currentState = L.YKP.PLAYER_STATE.PAUSE))
            }
        }, {
            key: "playBlock",
            value: function(t) {
                var e = this;
                t && t.catch(function(t) {
                    "object" === ("undefined" == typeof t ? "undefined" : s(t)) && "AbortError" === t.name && e.onAbortError(t)
                })
            }
        }, {
            key: "replay",
            value: function() {
                if (u.default.i(this.TAG, "replay"),
                !this.error) {
                    if (this._firstTag)
                        return !1;
                    if (this.isEnd = !1,
                    this.error = !1,
                    this._firstTag = !0,
                    this._isAdPlaying = !1,
                    this.currentTime = 0,
                    this._frontAd = !0,
                    this._replay = !0,
                    this._tailSkip = !1,
                    this._headSkip = !1,
                    "m3u8" === this.supportType) {
                        var t = this._videoInfo.stream[this.control.lang][this.control.hd].m3u8_url;
                        this._player.m3u8Url = t
                    }
                    return this.config.limitTime ? this._player.replay(this.config.limitTime.start) : this._player.replay(),
                    this.sendEventLog("Rp", "c"),
                    this._reporter.tsInit(),
                    this._reporter.addPlayerDurationReport(62),
                    !0
                }
            }
        }, {
            key: "changeTitle",
            value: function(t) {
                this.config.title = t
            }
        }, {
            key: "changeByVid",
            value: function(t, e, i) {
                if (this._adError = !1,
                this.isEnd = !1,
                this.vv59 = !1,
                this._endAd = !1,
                !t)
                    return void u.default.e(this.TAG, "changeByVid the param vid is undefined");
                this.pause(!0),
                this.currentState = L.YKP.PLAYER_STATE.INIT,
                this._isAdPlaying && this.onAdEnd(),
                this.destroy();
                var n = {};
                if (n.vid = t,
                i && i.control && (this.control = i.control),
                this.control.autoplay = !0,
                i && i.param)
                    for (var s in i.param)
                        n[s] = i.param[s];
                var a = this.getAdParam();
                if (a)
                    for (var o in a)
                        n[o] = a[o];
                var r = null;
                i && this.isThirdParty ? (r = {},
                this.custumPassword = i.password,
                r.password = i.password,
                r.embsig = i.embsig,
                r.refer = i.refer) : this.custumPassword = null,
                this.config.videoId = t,
                this._upsInfo.start(function(t) {
                    this._upsdataSuccess(t),
                    e && e(t)
                }
                .bind(this), this._upsDataFail.bind(this), this._upsTimeout.bind(this), n, r)
            }
        }, {
            key: "reLoad",
            value: function(t) {
                this.isEnd = !1,
                this.vv59 = !1,
                this._adError = !1,
                this.error = !1,
                this._reporter.tsInit(),
                this._firstTag = !0,
                this._tailSkip = !1,
                this._headSkip = !1,
                this.currentState = L.YKP.PLAYER_STATE.INIT;
                var e = {};
                t ? (e.password = t,
                this.password = t) : (this._reporter.changeParam({
                    isRetry: 1
                }),
                this.password = null),
                this.load(e)
            }
        }, {
            key: "reset",
            value: function() {
                var t = this.getVideoInfo();
                t && (this._isAdPlaying || this.currentState === L.YKP.PLAYER_STATE.READY) && this.changeByVid(t.encodeid)
            }
        }, {
            key: "seek",
            value: function(t) {
                this.error || (0 === t || t) && (u.default.i(this.TAG, "seek(_time):" + this._isAdPlaying),
                this._isAdPlaying || this._player.seek(t))
            }
        }, {
            key: "getVideoAttr",
            value: function(t) {
                return this.mediaElement ? this.mediaElement[t] : null
            }
        }, {
            key: "setVideoAttr",
            value: function(t, e) {
                this.mediaElement && (this.mediaElement[t] = e)
            }
        }, {
            key: "changeLanguage",
            value: function(t, e) {
                if (t === this.control.lang)
                    return u.default.i(this.TAG, " this.control.lang:" + this.control.lang + "  langCode:" + t + "  this.currentState:" + this.currentState),
                    !1;
                if (this.currentState === L.YKP.PLAYER_STATE.ERROR || this.currentState === L.YKP.PLAYER_STATE.INIT || this.currentState === L.YKP.PLAYER_STATE.ADPLAY || this.currentState === L.YKP.PLAYER_STATE.ADPAUSE)
                    return this.control.lang = t,
                    e && e(this.control),
                    !0;
                var i = {};
                if (this._videoInfo.stream[t] && this._videoInfo.stream[t][this.control.hd]) {
                    if ("m3u8" === this.supportType) {
                        var n = this._videoInfo.stream[t][this.control.hd].m3u8_url;
                        i.m3u8Url = this._adplugin.buildM3u8(n, !0),
                        i.frontAdTime = 0
                    } else
                        i.segs = this._videoInfo.stream[t][this.control.hd].segs;
                    return this._player.load(i),
                    this.control.lang = t,
                    e && e(this.control),
                    !0
                }
                return !1
            }
        }, {
            key: "changeHd",
            value: function(t, e) {
                var i = {};
                if (t === this.control.hd)
                    return u.default.i(this.TAG, " this.control.hd:" + this.control.hd + "  hdCode:" + t + "  this.currentState:" + this.currentState),
                    !1;
                if (u.default.i(this.TAG, " changeHd:" + t),
                this.currentState === L.YKP.PLAYER_STATE.ERROR || this.currentState === L.YKP.PLAYER_STATE.INIT || this.currentState === L.YKP.PLAYER_STATE.ADPLAY || this.currentState === L.YKP.PLAYER_STATE.ADPAUSE) {
                    var n = this._videoInfo.hdList[this.control.lang].hdcodes;
                    return n.join(",").indexOf(t) > -1 && (this.control.hd = t,
                    e && e(this.control),
                    !0)
                }
                if (this._videoInfo.stream[this.control.lang] && this._videoInfo.stream[this.control.lang][t]) {
                    if ("m3u8" === this.supportType) {
                        var s = this._videoInfo.stream[this.control.lang][t].m3u8_url;
                        i.m3u8Url = this._adplugin.buildM3u8(s, !0),
                        i.frontAdTime = 0
                    } else
                        i.segs = this._videoInfo.stream[this.control.lang][t].segs;
                    return this.control.hd = t,
                    this._player.pause(),
                    this._player.load(i),
                    e && e(this.control),
                    !0
                }
                return !1
            }
        }, {
            key: "changeMuted",
            value: function(t) {
                return this.mediaElement.muted = t,
                this.mediaElement.muted
            }
        }, {
            key: "sendEventLog",
            value: function(t, e, i, n) {
                this._reporter.sendUserActionReport(t, e, i, n)
            }
        }, {
            key: "sendAdClickLog",
            value: function(t) {
                this._adplugin.sendCUM(t)
            }
        }, {
            key: "sendPauseAdCUM",
            value: function(t) {
                O.default.sendPauseAdCUM(t)
            }
        }, {
            key: "sendPauseAdSUS",
            value: function(t) {
                O.default.sendPauseAdSUS(t)
            }
        }, {
            key: "sendErrorLog",
            value: function(t, e) {
                this.viewErrorCode = this._reporter.createViewCode();
                var i = {};
                i.errorType = t;
                var n = this.mediaElement.src || "";
                n.indexOf("m3u8") > -1 ? (i.m3u8Url = n,
                i.cdnUrl = "") : (i.cdnUrl = n,
                i.m3u8Url = ""),
                i.upsUrl = encodeURIComponent(this._upsInfo.upsUrl),
                i.errorCode = e || "",
                i.currentTime = this.currentTime,
                this._reporter.sendErrorLog(this.viewErrorCode, i)
            }
        }, {
            key: "sendGoldLog",
            value: function(t, e, i, n) {
                i += "&protocol=" + location.protocol,
                this._reporter.sendGoldLog(t, e, i, n)
            }
        }, {
            key: "upsDataError",
            value: function(t) {
                u.default.i(this.TAG, "extupsDataError")
            }
        }, {
            key: "upsDataFail",
            value: function(t) {
                u.default.i(this.TAG, "extupsDataFail")
            }
        }, {
            key: "upsDataReady",
            value: function(t) {
                u.default.i(this.TAG, "extupsDataReady")
            }
        }, {
            key: "upsDataSuccess",
            value: function(t) {
                u.default.i(this.TAG, "upsDataSuccess")
            }
        }, {
            key: "onPlay",
            value: function(t) {}
        }, {
            key: "onPause",
            value: function(t) {}
        }, {
            key: "onEnded",
            value: function(t) {}
        }, {
            key: "onPlaying",
            value: function(t) {}
        }, {
            key: "onError",
            value: function(t) {}
        }, {
            key: "onCanplay",
            value: function(t) {}
        }, {
            key: "onTimeupdate",
            value: function(t, e) {}
        }, {
            key: "onLoadStart",
            value: function(t) {}
        }, {
            key: "onLoadeddata",
            value: function(t) {}
        }, {
            key: "onLoadedmetaData",
            value: function(t) {}
        }, {
            key: "onAbort",
            value: function(t) {}
        }, {
            key: "onStalled",
            value: function(t) {}
        }, {
            key: "onSuspend",
            value: function(t) {}
        }, {
            key: "onWaiting",
            value: function(t) {}
        }, {
            key: "onVolumeChange",
            value: function(t) {}
        }, {
            key: "onSeeking",
            value: function(t) {}
        }, {
            key: "onSeeked",
            value: function(t) {}
        }, {
            key: "onDurationChange",
            value: function(t) {}
        }, {
            key: "onProgress",
            value: function(t) {}
        }, {
            key: "onRateChange",
            value: function(t) {}
        }, {
            key: "adDataOk",
            value: function(t, e) {
                u.default.i(this.TAG, "adDataOk|||" + e)
            }
        }, {
            key: "pauseAdDataOk",
            value: function(t) {}
        }, {
            key: "adDataError",
            value: function(t) {
                u.default.i(this.TAG, "adDataError:" + t)
            }
        }, {
            key: "onAdTimeUpdate",
            value: function(t, e, i, n) {}
        }, {
            key: "onAdStartPlay",
            value: function(t, e) {
                u.default.i(this.TAG, "onAdStartPlay:" + e)
            }
        }, {
            key: "onAdEnd",
            value: function(t, e) {
                u.default.i(this.TAG, "onAdEnd:" + e)
            }
        }, {
            key: "onAdPause",
            value: function(t, e) {
                u.default.i(this.TAG, "onAdPause:" + e)
            }
        }, {
            key: "onAdError",
            value: function(t, e) {
                u.default.i(this.TAG, "onAdError:" + e)
            }
        }, {
            key: "onAdLoading",
            value: function(t, e) {}
        }, {
            key: "onAdCanPlay",
            value: function(t, e) {}
        }, {
            key: "onAdReady",
            value: function(t, e) {}
        }, {
            key: "onAdTimeout",
            value: function(t, e) {}
        }]),
        t
    }();
    exports.YoukuH5PlayerCore = U,
    exports.Log = u.default,
    exports.util = h.default,
    exports.EventEmitter = P.default
}
, function(t, exports, e) {
    "use strict";
    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    function n(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var s = function() {
        function t(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        return function(e, i, n) {
            return i && t(e.prototype, i),
            n && t(e, n),
            e
        }
    }()
      , a = e(3)
      , o = (i(a),
    function() {
        function t() {
            n(this, t)
        }
        return s(t, null, [{
            key: "e",
            value: function(e, i) {
                if (t.ENABLE_ERROR) {
                    e && !t.FORCE_GLOBAL_TAG || (e = t.GLOBAL_TAG);
                    var n = "ERROR[" + e + "] > " + i;
                    console.error ? console.error(n) : console.warn ? console.warn(n) : console.log(n),
                    t.ENABLE_PRINT && t.p(n)
                }
            }
        }, {
            key: "i",
            value: function(e, i) {
                if (t.ENABLE_INFO) {
                    e && !t.FORCE_GLOBAL_TAG || (e = t.GLOBAL_TAG);
                    var n = "INFO[" + e + "] > " + i;
                    console.info ? console.info(n) : console.log(n),
                    t.ENABLE_PRINT && t.p(n)
                }
            }
        }, {
            key: "w",
            value: function(e, i) {
                if (t.ENABLE_WARN) {
                    e && !t.FORCE_GLOBAL_TAG || (e = t.GLOBAL_TAG);
                    var n = "WARN[" + e + "] > " + i;
                    console.warn ? console.warn(n) : console.log(n),
                    t.ENABLE_PRINT && t.p(n)
                }
            }
        }, {
            key: "d",
            value: function(e, i) {
                if (t.ENABLE_DEBUG) {
                    e && !t.FORCE_GLOBAL_TAG || (e = t.GLOBAL_TAG);
                    var n = "DEBUG[" + e + "] > " + i;
                    console.debug ? console.debug(n) : console.log(n),
                    t.ENABLE_PRINT && t.p(n)
                }
            }
        }, {
            key: "p",
            value: function(e) {
                e = "***" + e,
                t.dom ? t.dom.innerHTML = t.dom.innerHTML + "<br>" + e : document.getElementById(t.DOMID) ? t.dom = document.getElementById(t.DOMID) : (t.dom = document.createElement("div"),
                document.getElementsByTagName("body")[0].appendChild(t.dom))
            }
        }]),
        t
    }());
    o.GLOBAL_TAG = "YoukuH5PlayerCore",
    o.FORCE_GLOBAL_TAG = !1,
    o.ENABLE_ERROR = !1,
    o.ENABLE_INFO = !1,
    o.ENABLE_WARN = !1,
    o.ENABLE_DEBUG = !1,
    o.ENABLE_PRINT = !1,
    o.DOMID = "YoukuH5PlayerCore_log",
    exports.default = o
}
, function(t, exports) {
    "use strict";
    function e(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var i = function() {
        function t(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        return function(e, i, n) {
            return i && t(e.prototype, i),
            n && t(e, n),
            e
        }
    }()
      , n = function() {
        function t(i) {
            e(this, t),
            i ? this.val = i.toString() : this.val = ""
        }
        return i(t, null, [{
            key: "compare",
            value: function(t, e) {
                t = t.toString().split("."),
                e = e.toString().split(".");
                for (var i = 0; i < t.length || i < e.length; i++) {
                    var n = parseInt(t[i], 10)
                      , s = parseInt(e[i], 10);
                    if (isNaN(n) && (n = 0),
                    isNaN(s) && (s = 0),
                    n < s)
                        return -1;
                    if (n > s)
                        return 1
                }
                return 0
            }
        }]),
        i(t, [{
            key: "gt",
            value: function(e) {
                return t.compare(this, e) > 0
            }
        }, {
            key: "gte",
            value: function(e) {
                return t.compare(this, e) >= 0
            }
        }, {
            key: "lt",
            value: function(e) {
                return t.compare(this, e) < 0
            }
        }, {
            key: "lte",
            value: function(e) {
                return t.compare(this, e) <= 0
            }
        }, {
            key: "eq",
            value: function(e) {
                return 0 === t.compare(this, e)
            }
        }, {
            key: "toString",
            value: function() {
                return this.val.toString()
            }
        }]),
        t
    }();
    exports.default = n
}
, function(t, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var e = {
        version: "1.6.39",
        key: "h5CoreVersion"
    };
    exports.default = e
}
, function(t, exports, e) {
    "use strict";
    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }),
    exports.Version = exports.params = exports.thirdapp = exports.aliapp = exports.os = exports.browser = void 0;
    var n = e(64)
      , s = i(n)
      , a = e(65)
      , o = i(a)
      , r = e(21)
      , l = i(r)
      , u = e(67)
      , d = i(u)
      , h = e(66)
      , c = i(h)
      , f = e(6)
      , p = i(f);
    exports.browser = o.default,
    exports.os = l.default,
    exports.aliapp = s.default,
    exports.thirdapp = d.default,
    exports.params = c.default,
    exports.Version = p.default
}
, function(t, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var e = {
        FRONT_AD: "frontAD",
        BACK_AD: "backAD",
        INSERT_AD: "insertAD",
        PAUSE_AD: "pauseAD",
        OVERLAY_AD: "overlayAD",
        AD_END: "adend",
        AD_ERROR: "aderror",
        AD_PLAY: "adplay",
        AD_PAUSE: "adpause",
        AD_TIMEUPDATE: "adtimeupdate",
        AD_LOADING: "adloading",
        AD_TIMEOUT: "adtimeout",
        AD_CANPLAY: "adcanplay",
        AD_READY: "adready",
        AD_DATA_OK: "addataok",
        AD_DATA_ERROR: "addataerror",
        UGLY_CLOSE_AD: "uglyclosead",
        FRONT_AD_END: "frontADend",
        FRONT_AD_ERROR: "frontADerror",
        FRONT_AD_INFO_OK: "frontAdinfook",
        FRONT_AD_UNITED_INFO_OK: "unitedfrontadinfook",
        FRONT_AD_INFO_ADAPER_OK: "frontAdinfoadapterok",
        FRONT_AD_INFO_TIMEOUT: "frontAdinfotimeout",
        BACK_AD_END: "backAdend",
        BACK_AD_ERROR: "backaderror",
        BACK_AD_INFO_OK: "backAdinfook",
        BACK_AD_INFO_TIMEOUT: " backAdinfotimeout",
        INSERT_AD_INFO_OK: "insertAdinfook",
        PAUSE_AD_INFO_OK: "pauseAdinfook",
        PAUSE_AD_INFO_ERROR: "pauseAdinfoerror",
        PAUSE_AD_INFO_TIMEOUT: "pauseadinfotimeout",
        OVERLAY_AD_INFO_OK: "overlayAdinfook",
        AdPluginObject: "adpluginobject"
    };
    exports.default = e
}
, function(t, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var e = {
        PLAYER_STATE: {
            INIT: "PLAYER_STATE_INIT",
            READY: "PLAYER_STATE_READY",
            AD: "PLAYER_STATE_AD",
            ADPLAY: "PLAYER_STATE_ADPLAYING",
            ADPAUSE: "PLAYER_STATE_ADPAUSE",
            PLAYING: "PLAYER_STATE_PLAYING",
            END: "PLAYER_STATE_END",
            ERROR: "PLAYER_STATE_ERROR",
            PAUSE: "PLAYER_STATE_PAUSE"
        }
    };
    exports.YKP = e
}
, function(t, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var e = {
        flv: "flv",
        mp4hd: "mp4",
        mp4hd2: "hd2",
        mp4hd3: "hd3",
        mp4hd2v2: "hd2",
        mp4hd3v2: "hd3",
        mp4sd: "flv",
        "3gphd": "flv",
        "3gp": "flv",
        flvhd: "flv"
    }
      , i = {
        flv: 0,
        mp4hd: 1,
        mp4hd2: 2,
        mp4hd3: 3,
        mp4hd2v2: 2,
        mp4hd3v2: 3,
        mp4sd: 0,
        "3gphd": 0,
        "3gp": 0,
        flvhd: 0
    }
      , n = {
        mp4hd3v2: "1080p",
        mp4hd2v2: "超清",
        mp4hd: "高清",
        mp4sd: "标清",
        mp4hd3: "1080p",
        mp4hd2: "超清",
        flvhd: "标清",
        "3gphd": "标清"
    }
      , s = {
        flvhd: "mp4sd",
        mp4hd2: "mp4hd2v2",
        mp4hd3: "mp4hd3v2"
    };
    exports.VIDEOHD_MAP = e,
    exports.SHOWHD_MAP = n,
    exports.ACT_HD_MAP = s,
    exports.VIDEOHD_MAP_NUM = i
}
, function(t, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var e = {
        loadstart: "onLoadStart",
        canplay: "onCanPlay",
        loadeddata: "onLoadedData",
        loadedmetadata: "onLoadedMetaData",
        abort: "onAbort",
        error: "onError",
        pause: "onPause",
        waiting: "onWaiting",
        stalled: "onStalled",
        suspend: "onSuspend",
        play: "onPlay",
        volumechange: "onVolumeChange",
        playing: "onPlaying",
        seeked: "onSeeked",
        seeking: "onSeeking",
        durationchange: "onDurationChange",
        progress: "onProgress",
        ratechange: "onRateChange",
        timeupdate: "onTimeUpdate",
        ended: "onEnded"
    };
    exports.VIDEO_EVENTS = e
}
, function(t, exports, e) {
    "use strict";
    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    function n(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var s = function() {
        function t(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        return function(e, i, n) {
            return i && t(e.prototype, i),
            n && t(e, n),
            e
        }
    }()
      , a = e(3)
      , o = i(a)
      , r = e(2)
      , l = e(74)
      , u = e(10)
      , d = e(5)
      , h = i(d)
      , c = e(75)
      , f = i(c)
      , p = e(14)
      , m = i(p)
      , v = e(7)
      , _ = i(v)
      , y = e(11)
      , g = function() {
        function t(e, i, s, a) {
            n(this, t),
            this.TAG = "Reporter",
            this.cna = s.cna ? s.cna : o.default.getCna(),
            this.protocol = location.protocol,
            this.client_id = s.client_id,
            this.ccode = s.ccode || "0501",
            this.supportType = s.supportType || "mp4",
            this.winType = 30,
            this._player = a || {},
            this._isThirdParty = this._player.isThirdParty,
            this._mediaElement = e,
            this._videoInfo = i,
            this.disablePlayLog = s.disablePlayLog,
            this.totalTime = this._videoInfo && this._videoInfo.totalTime ? this._videoInfo.totalTime : 0,
            this.pubParam = {
                cdntype: "unknown"
            },
            this._initParam(),
            this.mtype = this._getMType(),
            this.tsSn = 0,
            this.tstimer = null,
            this.drtimer = null,
            this._adInfo = {},
            this.isRetry = 0,
            this.tsClb = 0,
            this.dClb = 0,
            this.dimension = {
                w: this._mediaElement.offsetWidth,
                h: this._mediaElement.offsetHeight
            },
            this.screenDim = {
                w: screen.availWidth,
                h: screen.availHeight
            },
            this._vvlogconfig = s.vvlogconfig || {};
            try {
                this.vvlogext = s._vvlogconfig.vvlogext ? s._vvlogconfig.vvlogext : UrchinAplus._yVvlogInfo()
            } catch (t) {
                this.vvlogext = ""
            }
            this.vvlogextParam = s.vvlogextParam || {},
            this.tslogextParam = s.tslogextParam || {};
            var r = new Date;
            this._time = r.getFullYear() + "" + r.getMonth() + r.getDate(),
            this._ad_infos = ""
        }
        return s(t, [{
            key: "destroy",
            value: function() {
                this._videoInfo = null,
                this.tsSn = 0,
                clearTimeout(this.tstimer),
                this.tstimer = null,
                clearInterval(this.drtimer),
                this.drtimer = null
            }
        }, {
            key: "init",
            value: function(t, e) {
                this._videoInfo = t,
                this.sid = e,
                this.tsSn = 0,
                this.cna = this.cna ? this.cna : o.default.getCna(),
                this.totalTime = this._videoInfo.totalTime || 0,
                this._initParam()
            }
        }, {
            key: "changeParam",
            value: function(t) {
                if (t)
                    for (var e in t)
                        this[e] = t[e]
            }
        }, {
            key: "sendTSLog",
            value: function(t) {
                var e = 5;
                this.tsSn >= 24 ? e = 20 : this.tsSn >= 12 && (e = 10);
                var i = this;
                if (this.tstimer = setTimeout(function(t) {
                    i.sendTSLog(60)
                }, 1e3 * e),
                (61 === t || this._player.error) && (h.default.i(this.TAG, "播放结束times：" + t),
                clearTimeout(this.tstimer),
                this.tstimer = null),
                this._player.currentState === u.YKP.PLAYER_STATE.PLAYING && !this._mediaElement.paused) {
                    if (0 == this.tsSn)
                        return void this.tsSn++;
                    var n = {};
                    n.vvid = this.pubParam.psid,
                    n.vid = this.pubParam.videoId,
                    n.cf = this._getHDFlag(this._player.control.hd),
                    n.cpt = Math.round(this._player.currentTime),
                    n.full = this._player.control.fullscreen ? 1 : 0,
                    n.lang = this._getLanguage(),
                    n.pc = 60 == t ? 0 : 1,
                    n.logextvv = m.default.hex_md5(this._time);
                    var s = this._getCurLoadedBytes();
                    n.clb = s - this.tsClb >= 0 ? s - this.tsClb : s,
                    this.tsClb = s,
                    n.iku = "n",
                    n.pt = this._getPlayTime(),
                    n.sn = this.tsSn,
                    n.hi = e,
                    n.ext = this._getExtString(t),
                    n.cna = this.cna,
                    n.uid = this.pubParam.uid,
                    n.url = encodeURIComponent(window.location.href),
                    n.protocol = this.protocol,
                    n.cdntype = this.pubParam.cdntype,
                    n.playtrigger = this._player.control && this._player.control.autoplay ? 2 : 1;
                    var a = n.vvid + n.vid + n.cpt + n.pt + n.sn;
                    n.r = this._signTS(a),
                    this._isThirdParty && (n.clientid = this.client_id,
                    n.type = "h5");
                    var r = "";
                    r = "0505" === this.ccode ? l.REPORT_API.TUDOU.TSLOG + "?" : l.REPORT_API.ALI.TSLOG + "?",
                    r += o.default.urlParameter(n),
                    r += "&" + o.default.urlParameter(this.tslogextParam),
                    o.default.sendlog(r),
                    this.tsSn++
                }
            }
        }, {
            key: "tsInit",
            value: function() {
                this.tsSn = null,
                this.tsClb = 0,
                this.dClb = 0,
                this.drtimer && (clearInterval(this.drtimer),
                this.drtimer = null)
            }
        }, {
            key: "initAdInfo",
            value: function(t) {
                this._adInfo || (this._adInfo = {}),
                this._adInfo.REQID = t.REQID,
                this._adInfo.is_pread = 1
            }
        }, {
            key: "initBFAdIndos",
            value: function() {
                if (this._player._adplugin && this._player._adplugin.dots && this._player._adplugin.dots.dots && this._player._adplugin.dots.dots.length > 0 && "" === this._ad_infos)
                    for (var t = this._player._adplugin.dots.dots, e = 0; e < t.length; e++) {
                        var i = t[e];
                        this._ad_infos += i.STA + "," + i.VID + "," + i.AL,
                        t.length > 1 && e < t.length - 1 && (this._ad_infos += ";")
                    }
            }
        }, {
            key: "addPlayerDurationReport",
            value: function(t) {
                if (this._videoInfo) {
                    h.default.i(this.TAG, "start addPlayerDurationReport ,the times is:" + t);
                    var e = {};
                    if (59 === t ? (e.is_pread = this._adInfo.is_pread || 0,
                    e.REQID = this._adInfo.REQID || "NULL",
                    this.initBFAdIndos(),
                    this.sendPlayLog(0)) : (e.is_pread = 0,
                    e.REQID = "NULL"),
                    62 === t ? (this._adInfo.REQID = "NULL",
                    this._adInfo.is_pread = 0,
                    e.replay = 1) : e.replay = 0,
                    e.isRetry = this.isRetry,
                    null == this.drtimer && 60 == t) {
                        var i = this;
                        e.rs = 1,
                        e.is_pread = this._adInfo.is_pread || 0,
                        e.REQID = this._adInfo.REQID || "NULL",
                        this.drtimer = setInterval(function(t) {
                            i._player.currentState !== u.YKP.PLAYER_STATE.PLAYING || i._mediaElement.paused || (i.addPlayerDurationReport(60),
                            i.sendPlayLog(1))
                        }, 6e4)
                    }
                    61 == t && (clearInterval(this.drtimer),
                    this.drtimer = null),
                    e.viewUserId = this.pubParam.uid,
                    this._vvlogconfig && this._vvlogconfig.pvid && (e.pvid = this._vvlogconfig.pvid),
                    e.ct = this.pubParam.cateId,
                    e.url = encodeURIComponent(window.location.href),
                    e.referUrl = encodeURIComponent(document.referrer) || "",
                    e.logextvv = m.default.hex_md5(this._time),
                    e.sid = this.pubParam.psid,
                    e.videoid = this.pubParam.videoId,
                    e.cs = this.pubParam.subcates,
                    e.showid_v2 = this.pubParam.showId,
                    e.Copyright = this.pubParam.Copyright,
                    e.oct = this.pubParam.showChannelId || "",
                    e.ocs = this.pubParam.ocs || "",
                    e.winType = this.winType,
                    e.videoOwnerId = this.pubParam.userid,
                    e.totalsec = this.pubParam.totalsec,
                    e.hd = this._getHDFlag(this._player.control.hd),
                    e.langid = this._getLanguage(),
                    e.format = this.pubParam.format,
                    e.currentPlayTime = parseInt(this._player.currentTime || 0),
                    e.frame = this.pubParam.frame,
                    e.number = t,
                    e.mtype = this.mtype,
                    e.fullflag = this._player.control.fullscreen ? 1 : 0,
                    e.ikuflag = "n",
                    e.playComplete = 0,
                    61 == t && (e.playComplete = 1),
                    e.continuationPlay = this.pubParam.continous,
                    e.pid = this.client_id || "",
                    e.timestamp = (new Date).getTime(),
                    e.unCookie = o.default.cookie.isCookie ? 1 : 0,
                    e.ctype = this.ccode,
                    e.oip = this.pubParam.ip,
                    e.hwclass = 1,
                    e.devicename = "pc",
                    e.isp = this.pubParam.dma_code,
                    e.isvip = this.pubParam.isvip,
                    e.paystate = this.pubParam.paystate,
                    e.playstate = this.pubParam.playstate,
                    e.cna = this.cna,
                    e.show_videotype = this.pubParam.show_videotype,
                    e.show_topHdVideo = this.pubParam.videoId;
                    var n = this._getCurLoadedBytes();
                    e.currentLoadedBytes = n - this.dClb >= 0 ? n - this.dClb : n,
                    this.dClb = n,
                    this.pubParam.emb ? e.emb = this.pubParam.emb : "",
                    e.Type = this.pubParam.Type,
                    1 === this.pubParam.Type && (e.fid = this.pubParam.playListId,
                    e.fct = this.pubParam.playListChannelId,
                    e.fcs = this.pubParam.fcs,
                    e.folderOwnerId = this.pubParam.folderOwnerId,
                    e.fob = this.pubParam.fob,
                    e.fpo = this.pubParam.fpo),
                    e.stg = this.pubParam.stage,
                    e.version = _.default.version,
                    e.ad_infos = this._ad_infos,
                    e.protocol = this.protocol,
                    e.cdntype = this.pubParam.cdntype,
                    e.isPurePlay = this._player.config.purePlay,
                    e.playtrigger = this._player.control && this._player.control.autoplay ? 2 : 1;
                    var s = "";
                    s = "0505" === this.ccode ? l.REPORT_API.TUDOU.DURATIONLOG + "?" : l.REPORT_API.ALI.DURATIONLOG + "?",
                    s += o.default.urlParameter(e);
                    var a = o.default.urlParameter(this.vvlogextParam);
                    "" !== a && (s += "&" + o.default.urlParameter(this.vvlogextParam));
                    try {
                        this.vvlogext || (this.vvlogext = UrchinAplus._yVvlogInfo() || ""),
                        s = s + "&" + o.default.urlParameter(this.vvlogext)
                    } catch (t) {}
                    o.default.sendlog(s)
                }
            }
        }, {
            key: "sendUserActionReport",
            value: function(t, e, i, n) {
                var s = {
                    t: 1002,
                    e: t,
                    v: e || "ac"
                };
                s.d = o.default.encode64(this.mtype);
                var a = {
                    v: "h5player",
                    vid: this.pubParam.videoId,
                    uid: this.pubParam.uid,
                    ssid: this.pubParam.psid,
                    sid: this.pubParam.showId,
                    ct: this.pubParam.cateId,
                    cs: this.pubParam.subcates,
                    tc: parseInt(this._player.currentTime) || 0,
                    w: this._mediaElement.offsetWidth,
                    h: this._mediaElement.offsetHeight
                };
                a.f = this._player.control.fullscreen ? "on" : "off",
                a.q = this._getQuality(),
                a.ver = "1.0.0";
                for (var r in i)
                    a[r] = i[r];
                s.x = o.default.encode64(o.default.urlParameter(a)),
                s.cna = this.cna;
                o.default.urlParameter(s);
                if ("xenfs" == t || "xexfs" == t) {
                    this._giveupReTag = !0;
                    var u = this;
                    setTimeout(function(t) {
                        u._giveupReTag = !1
                    }, 800)
                }
                try {
                    this.vvlogext || (this.vvlogext = UrchinAplus._yVvlogInfo() || ""),
                    this.vvlogext && (s.pc_i = this.vvlogext.pc_i,
                    s.pc_u = this.vvlogext.pc_u)
                } catch (t) {}
                s.url = n || "",
                "0505" === this.ccode ? o.default.sendlog(l.REPORT_API.TUDOU.EVENTLOG + "?" + o.default.urlParameter(s)) : o.default.sendlog(l.REPORT_API.ALI.EVENTLOG + "?" + o.default.urlParameter(s))
            }
        }, {
            key: "checkPlayerResize",
            value: function(t, e) {
                if (this._giveupReTag === !0)
                    return void debug.log("give up xre after enfs or exfs");
                var i = this._mediaElement;
                this._resizeList = this._resizeList || [],
                this._resizeList.push({
                    str: e,
                    time: (new Date).getTime(),
                    w: i.offsetWidth,
                    h: i.offsetHeight
                });
                var n = this;
                setTimeout(function(e) {
                    if (0 != n._resizeList.length) {
                        for (var i = n._resizeList[0].time, s = 0; s < n._resizeList.length; s++) {
                            var a = n._resizeList[s].w
                              , r = n._resizeList[s].h
                              , l = n._resizeList[s].time;
                            a == n.dimension.w && r == n.dimension.h || (n.dimension.w = a,
                            n.dimension.h = r,
                            (l - i > 800 || s == n._resizeList.length - 1) && o.default.sendlog(t + n._resizeList[s].str))
                        }
                        n._resizeList = []
                    }
                }, 1e3)
            }
        }, {
            key: "addPlayerStaticReport",
            value: function() {
                h.default.i(this.TAG, "start addPlayerStaticReport");
                var t = "//stat.youku.com/player/addPlayerStaticReport"
                  , e = {};
                e.videoid = this.pubParam.videoId,
                this._videoInfo.token && (e.t = this._videoInfo.token.vv),
                e.totalsec = this.totalTime,
                e.ikuflag = "n_" + this.pubParam.showflag,
                e.url = escape(this._getParentUrl() ? this._getParentUrl() : window.location.href),
                e.fullflag = this._player.control.fullscreen,
                e.source = "video",
                e.referer = (this._vvlogconfig || "").rurl,
                e.sid = this.pubParam.psid,
                e.uid = this.pubParam.uid,
                e.h = f.default.hcbt(e.t),
                e.totalseg = this.pubParam.pieceLength;
                var i = o.default.urlParameter(e);
                o.default.sendlog(t + "?" + i)
            }
        }, {
            key: "sendUPSLog",
            value: function(t) {
                var e = {};
                e.psid = this.pubParam.psid,
                e.ups_client_netip = this.pubParam.ip,
                e.vid = this.pubParam.videoId,
                e.title = encodeURI(this.pubParam.title),
                e.ccode = this.ccode,
                e.uid = this.pubParam.uid || null,
                e.user_agent = encodeURI(navigator.userAgent),
                e.vip = this.pubParam.isvip,
                e.log_type = t;
                var i = o.default.urlParameter(e);
                this.sendGoldLog("/yt/youkuplayer.fdl.h5send", "EXP", i, "H1482418994")
            }
        }, {
            key: "sendCrmExpLog",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , e = o.default.urlParameter(t);
                this.sendGoldLog("/yt/youku.h5.control", "EXP", e, "")
            }
        }, {
            key: "sendCrmCLKLog",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , e = o.default.urlParameter(t);
                this.sendGoldLog("/yt/youku.h5.control", "CLK", e, "")
            }
        }, {
            key: "sendErrorLog",
            value: function(t, e) {
                var i = {};
                i.track_view_code = t,
                i.utid = this.cna,
                i.ccode = this.ccode,
                i.ups_url = encodeURIComponent(e.upsUrl),
                i.cdn_url = encodeURIComponent(e.cdnUrl),
                i.is_ipurl = e.cdnUrl && o.default.testIsIPUrl(e.cdnUrl) ? 1 : 0,
                i.m3u8_url = e.m3u8Url ? encodeURIComponent(e.m3u8Url) : "",
                i.error_type = e.errorType,
                i.error_code = e.errorCode || "",
                i.error_position = e.currentTime ? e.currentTime : 0,
                i.user_timestamp = (new Date).getTime(),
                i.userid = this.pubParam.userid ? this.pubParam.userid : "",
                i.vip = this.pubParam.isvip ? this.pubParam.isvip : 0,
                i.player_version = "H5",
                i.version = _.default.version,
                i.logextvv = m.default.hex_md5(this._time),
                i.protocol = this.protocol,
                i.cdntype = this.pubParam.cdntype,
                i.cdnIsHttps = e.cdnUrl && e.cdnUrl.indexOf("https:") > -1 ? 1 : 0,
                i.psid = this.pubParam.psid;
                var n = o.default.urlParameter(i);
                this.sendGoldLog("/yt/youkuplayer.fdl.error", "EXP", n, "H1481495508")
            }
        }, {
            key: "sendGoldLog",
            value: function(t, e, i, n) {
                try {
                    goldlog.record(t, e, i, n)
                } catch (e) {
                    h.default.w(this.TAG, "goldLog:goldlog.record is error||url:" + t + "||param:" + i + "||logCode:" + n)
                }
            }
        }, {
            key: "createViewCode",
            value: function() {
                var t = "H"
                  , e = (new Date).getTime() + "";
                return t += Math.round(1e10 * Math.random()),
                t += e.substr(7, 12)
            }
        }, {
            key: "sendPlayLog",
            value: function(t) {
                if (!this.disablePlayLog && (0 !== this.pubParam.uid || 1 !== t)) {
                    var e = {
                        umid: this.cna,
                        nlid: this.cna,
                        v: this.pubParam.encodeVideoId,
                        po: Math.round(1e3 * this._player.currentTime) || "0",
                        hwclass: 4,
                        devicename: "H5",
                        mt: "1",
                        lastupdate: parseInt((new Date).getTime() / 1e3),
                        logtype: t,
                        autoplay: this._player.control && this._player.control.autoplay ? 1 : 0,
                        shid: "",
                        tp: 0,
                        cg: "",
                        stg: "",
                        lang: this._getLanguage(this._player.control.lang),
                        hd: y.VIDEOHD_MAP_NUM[this._player.control.hd],
                        seconds: "",
                        source: 0
                    }
                      , i = this._videoInfo.getShow();
                    i && (e.shid = i.encodeid,
                    e.tp = i.video_type,
                    e.cg = i.showcategory,
                    e.stg = i.stage),
                    e.seconds = parseInt(this._videoInfo.video.seconds);
                    var n = l.PLAYLOGAPI + "?" + o.default.urlParameter(e);
                    o.default.sendlog(n)
                }
            }
        }, {
            key: "sendFdlErrorLog",
            value: function(t) {
                var e = o.default.urlParameter(this.pubParam) + "&version=" + _.default.version + "&ccode=" + this.ccode + "&code=" + t + "&cna=" + this.cna;
                try {
                    goldlog.record("/yt/youkuplayer.fdl.ykcollina", "EXP", e, "GET")
                } catch (t) {
                    o.default.sendlog("//gm.mmstat.com/yt/youkuplayer.fdl.ykcollina?" + e + "&t=" + (new Date).getTime())
                }
            }
        }, {
            key: "_initParam",
            value: function() {
                if (this._videoInfo) {
                    this._videoInfo.user ? (this.pubParam.uid = this._videoInfo.user.ytid || this._videoInfo.user.uid || 0,
                    this.pubParam.isvip = this._videoInfo.user.vip ? 1 : 0) : (this.pubParam.uid = 0,
                    this.pubParam.isvip = 0),
                    this.pubParam.frame = this._vvlogconfig && this._vvlogconfig.frame ? 1 : 0,
                    this.pubParam.continous = this._vvlogconfig && this._vvlogconfig.continous ? 1 : 0,
                    this.pubParam.ip = this._videoInfo.ups.ups_client_netip,
                    this.pubParam.psid = this._videoInfo.ups.psid,
                    this.pubParam.videoId = this._videoInfo.video.id,
                    this.pubParam.encodeVideoId = this._videoInfo.video.encodeid,
                    this.pubParam.paystate = this._getPayState(this._videoInfo.show),
                    this.pubParam.playstate = this._videoInfo.trial ? 2 : 1,
                    this.pubParam.cateId = this._videoInfo.video.category_id || "",
                    this.pubParam.subcates = this._getSubCategories(this._videoInfo.video.subcategories),
                    this.pubParam.userid = this._videoInfo.video.userid ? this._videoInfo.video.userid : "",
                    this.pubParam.title = this._videoInfo.video.title,
                    this.pubParam.totalsec = this._videoInfo.video.seconds;
                    var t = this._videoInfo.hdcodes.join(",");
                    if (t.indexOf("hd3") > -1 ? this.pubParam.format = 3 : t.indexOf("hd2") > -1 ? this.pubParam.format = 2 : t.indexOf("mp4hd,") ? this.pubParam.format = 1 : this.pubParam.format = 0,
                    this._videoInfo.show ? (this.pubParam.showflag = "1",
                    this.pubParam.showId = this._videoInfo.show.id || "",
                    this.pubParam.Copyright = this._videoInfo.show.copyright || 0,
                    this.pubParam.stage = this._videoInfo.show.stage ? this._videoInfo.show.stage : 0,
                    this.pubParam.show_videotype = this._videoInfo.show.video_type,
                    this.pubParam.showChannelId = this.pubParam.cateId,
                    this.pubParam.ocs = this.pubParam.subcates) : (this.pubParam.showId = "",
                    this.pubParam.showflag = "0",
                    this.pubParam.Copyright = 0,
                    this.pubParam.stage = 0,
                    this.pubParam.show_videotype = 1),
                    this.pubParam.Type = 0,
                    this._videoInfo.album) {
                        var e = this._videoInfo.album;
                        this.pubParam.Type = 1,
                        this.pubParam.playListId = e.id,
                        this.pubParam.folderOwnerId = e.owner_id,
                        this.pubParam.fob = this._vvlogconfig && this._vvlogconfig.order ? this._vvlogconfig.order : 1,
                        this.pubParam.fpo = 0,
                        this._player._videoInfo.videos && (this.pubParam.fpo = this._player._videoInfo.videos.next ? parseInt(this._player._videoInfo.videos.next.seq) - 1 : this._player._videoInfo.videos.previous ? parseInt(this._player._videoInfo.videos.previous.seq) : 0),
                        this.pubParam.fcs = this.pubParam.subcates,
                        this.pubParam.playListChannelId = this.pubParam.cateId,
                        this.pubParam.stage = e.total
                    }
                    this._isThirdParty && (this.pubParam.emb = this._getEmb(this.pubParam.ip, this.pubParam.videoId)),
                    this.pubParam.dma_code = this._videoInfo.network ? this._videoInfo.network.dma_code : "",
                    this.pieceLength = "m3u8" === this.supportType ? 1 : this._videoInfo.stream[this._player.control.lang][this._player.control.hd].length
                }
            }
        }, {
            key: "_getParentUrl",
            value: function() {
                var t = null;
                if (parent !== window)
                    try {
                        t = parent.location.href
                    } catch (e) {
                        t = document.referrer
                    }
                return t
            }
        }, {
            key: "_getMType",
            value: function() {
                return r.browser.isAndroid ? "adr" : r.browser.isIPhone ? "iph" : r.browser.isIPad ? "ipa" : r.browser.isIPod ? "ipo" : "oth"
            }
        }, {
            key: "_getQuality",
            value: function() {
                if ("m3u8" != this.supportType)
                    return "m";
                var t = this._player.control.hd;
                return t.indexOf("mp4hd") !== -1 ? "m" : t.indexOf("flvhd") !== -1 ? "f" : t.indexOf("mp4hd2") !== -1 ? "h" : void 0
            }
        }, {
            key: "_signTS",
            value: function(t) {
                if (null == t)
                    return 0;
                var e, i = 0, n = t.length;
                for (e = 0; e < n; e++)
                    i = 43 * i + t.charCodeAt(e),
                    i %= 1e10;
                return i
            }
        }, {
            key: "_getHDFlag",
            value: function(t) {
                var e = {
                    flv: 0,
                    flvhd: 0,
                    "3gphd": 0,
                    mp4hd: 1,
                    mp4hd2: 2,
                    mp4hd3: 3
                };
                return e[t] ? e[t] : 1
            }
        }, {
            key: "_getLanguage",
            value: function(t) {
                return t || (t = this._player.control.lang),
                l.LANGMAP[t] ? l.LANGMAP[t].num : 1
            }
        }, {
            key: "_getPlayTime",
            value: function() {
                var t = 0;
                return t = this.tsSn > 24 ? 180 + 20 * (this.tsSn - 24) : this.tsSn > 12 ? 60 + 10 * (this.tsSn - 12) : 5 * this.tsSn
            }
        }, {
            key: "_getExtString",
            value: function(t) {
                var e = {};
                e.iku = "n",
                e.full = this._player.control.fullscreen ? 1 : 0,
                e.lang = this._getLanguage(),
                e.num = t,
                e.ctp = 0,
                e.pc = 60 == t ? 0 : 1,
                e.clb = 0,
                e.ctype = this.ccode,
                e.ev = "1",
                e.isvip = this.pubParam.isvip,
                e.paystate = this.pubParam.paystate,
                e.playstate = this.pubParam.playstate;
                var i = this.cna;
                return e.cna = i || "",
                escape(o.default.urlParameter(e))
            }
        }, {
            key: "_getPayState",
            value: function(t) {
                var e = 0;
                if (!t || !t.pay_type)
                    return 0;
                var i = t.pay_type.join("");
                return i.indexOf("vod") > -1 ? e = 1 : i.indexOf("mon") > -1 ? e = 2 : e
            }
        }, {
            key: "_getSubCategories",
            value: function(t) {
                if (!t)
                    return "";
                for (var e = "", i = 0; i < t.length; i++)
                    e += t[i].id + "|";
                return e.substring(0, e.length - 1)
            }
        }, {
            key: "_getCurLoadedBytes",
            value: function() {
                var t = this._player.mediaElement
                  , e = t.buffered
                  , i = e.length
                  , n = 0;
                try {
                    for (var s = this._videoInfo.stream[this._player.control.lang][this._player.control.hd].size, a = this.pubParam.totalsec, o = 0; o < i; o++) {
                        var r = e.end(o) - e.start(o);
                        n += r / a * s
                    }
                } catch (t) {}
                return parseInt(n)
            }
        }, {
            key: "_getEmb",
            value: function(t, e) {
                var i = location.host
                  , n = location.pathname
                  , s = [];
                s.push(t),
                s.push(e),
                s.push(i),
                s.push(n);
                var a = s.join(" ");
                return o.default.encode64(a)
            }
        }]),
        t
    }();
    exports.default = g
}
, function(t, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var e = {
        hexcase: 0,
        b64pad: "",
        chrsz: 8,
        hex_md5: function(t) {
            return this.binl2hex(this.core_md5(this.str2binl(t), t.length * this.chrsz))
        },
        b64_md5: function(t) {
            return this.binl2b64(this.core_md5(this.str2binl(t), t.length * this.chrsz))
        },
        hex_hmac_md5: function(t, e) {
            return this.binl2hex(this.core_hmac_md5(t, e))
        },
        b64_hmac_md5: function(t, e) {
            return this.binl2b64(this.core_hmac_md5(t, e))
        },
        calcMD5: function(t) {
            return this.binl2hex(this.core_md5(this.str2binl(t), t.length * this.chrsz))
        },
        md5_vm_test: function() {
            return "900150983cd24fb0d6963f7d28e17f72" == this.hex_md5("abc")
        },
        core_md5: function(t, e) {
            t[e >> 5] |= 128 << e % 32,
            t[(e + 64 >>> 9 << 4) + 14] = e;
            for (var i = 1732584193, n = -271733879, s = -1732584194, a = 271733878, o = 0; o < t.length; o += 16) {
                var r = i
                  , l = n
                  , u = s
                  , d = a;
                i = this.md5_ff(i, n, s, a, t[o + 0], 7, -680876936),
                a = this.md5_ff(a, i, n, s, t[o + 1], 12, -389564586),
                s = this.md5_ff(s, a, i, n, t[o + 2], 17, 606105819),
                n = this.md5_ff(n, s, a, i, t[o + 3], 22, -1044525330),
                i = this.md5_ff(i, n, s, a, t[o + 4], 7, -176418897),
                a = this.md5_ff(a, i, n, s, t[o + 5], 12, 1200080426),
                s = this.md5_ff(s, a, i, n, t[o + 6], 17, -1473231341),
                n = this.md5_ff(n, s, a, i, t[o + 7], 22, -45705983),
                i = this.md5_ff(i, n, s, a, t[o + 8], 7, 1770035416),
                a = this.md5_ff(a, i, n, s, t[o + 9], 12, -1958414417),
                s = this.md5_ff(s, a, i, n, t[o + 10], 17, -42063),
                n = this.md5_ff(n, s, a, i, t[o + 11], 22, -1990404162),
                i = this.md5_ff(i, n, s, a, t[o + 12], 7, 1804603682),
                a = this.md5_ff(a, i, n, s, t[o + 13], 12, -40341101),
                s = this.md5_ff(s, a, i, n, t[o + 14], 17, -1502002290),
                n = this.md5_ff(n, s, a, i, t[o + 15], 22, 1236535329),
                i = this.md5_gg(i, n, s, a, t[o + 1], 5, -165796510),
                a = this.md5_gg(a, i, n, s, t[o + 6], 9, -1069501632),
                s = this.md5_gg(s, a, i, n, t[o + 11], 14, 643717713),
                n = this.md5_gg(n, s, a, i, t[o + 0], 20, -373897302),
                i = this.md5_gg(i, n, s, a, t[o + 5], 5, -701558691),
                a = this.md5_gg(a, i, n, s, t[o + 10], 9, 38016083),
                s = this.md5_gg(s, a, i, n, t[o + 15], 14, -660478335),
                n = this.md5_gg(n, s, a, i, t[o + 4], 20, -405537848),
                i = this.md5_gg(i, n, s, a, t[o + 9], 5, 568446438),
                a = this.md5_gg(a, i, n, s, t[o + 14], 9, -1019803690),
                s = this.md5_gg(s, a, i, n, t[o + 3], 14, -187363961),
                n = this.md5_gg(n, s, a, i, t[o + 8], 20, 1163531501),
                i = this.md5_gg(i, n, s, a, t[o + 13], 5, -1444681467),
                a = this.md5_gg(a, i, n, s, t[o + 2], 9, -51403784),
                s = this.md5_gg(s, a, i, n, t[o + 7], 14, 1735328473),
                n = this.md5_gg(n, s, a, i, t[o + 12], 20, -1926607734),
                i = this.md5_hh(i, n, s, a, t[o + 5], 4, -378558),
                a = this.md5_hh(a, i, n, s, t[o + 8], 11, -2022574463),
                s = this.md5_hh(s, a, i, n, t[o + 11], 16, 1839030562),
                n = this.md5_hh(n, s, a, i, t[o + 14], 23, -35309556),
                i = this.md5_hh(i, n, s, a, t[o + 1], 4, -1530992060),
                a = this.md5_hh(a, i, n, s, t[o + 4], 11, 1272893353),
                s = this.md5_hh(s, a, i, n, t[o + 7], 16, -155497632),
                n = this.md5_hh(n, s, a, i, t[o + 10], 23, -1094730640),
                i = this.md5_hh(i, n, s, a, t[o + 13], 4, 681279174),
                a = this.md5_hh(a, i, n, s, t[o + 0], 11, -358537222),
                s = this.md5_hh(s, a, i, n, t[o + 3], 16, -722521979),
                n = this.md5_hh(n, s, a, i, t[o + 6], 23, 76029189),
                i = this.md5_hh(i, n, s, a, t[o + 9], 4, -640364487),
                a = this.md5_hh(a, i, n, s, t[o + 12], 11, -421815835),
                s = this.md5_hh(s, a, i, n, t[o + 15], 16, 530742520),
                n = this.md5_hh(n, s, a, i, t[o + 2], 23, -995338651),
                i = this.md5_ii(i, n, s, a, t[o + 0], 6, -198630844),
                a = this.md5_ii(a, i, n, s, t[o + 7], 10, 1126891415),
                s = this.md5_ii(s, a, i, n, t[o + 14], 15, -1416354905),
                n = this.md5_ii(n, s, a, i, t[o + 5], 21, -57434055),
                i = this.md5_ii(i, n, s, a, t[o + 12], 6, 1700485571),
                a = this.md5_ii(a, i, n, s, t[o + 3], 10, -1894986606),
                s = this.md5_ii(s, a, i, n, t[o + 10], 15, -1051523),
                n = this.md5_ii(n, s, a, i, t[o + 1], 21, -2054922799),
                i = this.md5_ii(i, n, s, a, t[o + 8], 6, 1873313359),
                a = this.md5_ii(a, i, n, s, t[o + 15], 10, -30611744),
                s = this.md5_ii(s, a, i, n, t[o + 6], 15, -1560198380),
                n = this.md5_ii(n, s, a, i, t[o + 13], 21, 1309151649),
                i = this.md5_ii(i, n, s, a, t[o + 4], 6, -145523070),
                a = this.md5_ii(a, i, n, s, t[o + 11], 10, -1120210379),
                s = this.md5_ii(s, a, i, n, t[o + 2], 15, 718787259),
                n = this.md5_ii(n, s, a, i, t[o + 9], 21, -343485551),
                i = this.safe_add(i, r),
                n = this.safe_add(n, l),
                s = this.safe_add(s, u),
                a = this.safe_add(a, d)
            }
            return Array(i, n, s, a)
        },
        md5_cmn: function(t, e, i, n, s, a) {
            return this.safe_add(this.bit_rol(this.safe_add(this.safe_add(e, t), this.safe_add(n, a)), s), i)
        },
        md5_ff: function(t, e, i, n, s, a, o) {
            return this.md5_cmn(e & i | ~e & n, t, e, s, a, o)
        },
        md5_gg: function(t, e, i, n, s, a, o) {
            return this.md5_cmn(e & n | i & ~n, t, e, s, a, o)
        },
        md5_hh: function(t, e, i, n, s, a, o) {
            return this.md5_cmn(e ^ i ^ n, t, e, s, a, o)
        },
        md5_ii: function(t, e, i, n, s, a, o) {
            return this.md5_cmn(i ^ (e | ~n), t, e, s, a, o)
        },
        core_hmac_md5: function(t, e) {
            var i = this.str2binl(t);
            i.length > 16 && (i = core_md5(i, t.length * this.chrsz));
            for (var n = Array(16), s = Array(16), a = 0; a < 16; a++)
                n[a] = 909522486 ^ i[a],
                s[a] = 1549556828 ^ i[a];
            var o = this.core_md5(n.concat(this.str2binl(e)), 512 + e.length * this.chrsz);
            return this.core_md5(s.concat(o), 640)
        },
        safe_add: function(t, e) {
            var i = (65535 & t) + (65535 & e)
              , n = (t >> 16) + (e >> 16) + (i >> 16);
            return n << 16 | 65535 & i
        },
        bit_rol: function(t, e) {
            return t << e | t >>> 32 - e
        },
        str2binl: function(t) {
            for (var e = Array(), i = (1 << this.chrsz) - 1, n = 0; n < t.length * this.chrsz; n += this.chrsz)
                e[n >> 5] |= (t.charCodeAt(n / this.chrsz) & i) << n % 32;
            return e
        },
        binl2hex: function(t) {
            for (var e = this.hexcase ? "0123456789ABCDEF" : "0123456789abcdef", i = "", n = 0; n < 4 * t.length; n++)
                i += e.charAt(t[n >> 2] >> n % 4 * 8 + 4 & 15) + e.charAt(t[n >> 2] >> n % 4 * 8 & 15);
            return i
        },
        binl2b64: function(t) {
            for (var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", i = "", n = 0; n < 4 * t.length; n += 3)
                for (var s = (t[n >> 2] >> 8 * (n % 4) & 255) << 16 | (t[n + 1 >> 2] >> 8 * ((n + 1) % 4) & 255) << 8 | t[n + 2 >> 2] >> 8 * ((n + 2) % 4) & 255, a = 0; a < 4; a++)
                    i += 8 * n + 6 * a > 32 * t.length ? this.b64pad : e.charAt(s >> 6 * (3 - a) & 63);
            return i
        }
    };
    exports.default = e
}
, function(t, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }),
    exports.default = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "CLK"
          , i = (t.spmA || "a2h0j",
        t.spmB || "10182321",
        t.spmC || "default")
          , n = {};
        window.vData && (n = {
            "data-callapp": "clk",
            data_vdotype: window.toFind ? "short" : "long",
            data_logver: "v2"
        });
        var s = [{
            exargs: Object.assign({
                "data-spm": t.spm,
                "data-scm": t.scm || "" + (t.videoId ? "20140670.manual." + i + ".video_" + t.videoId : "")
            }, n),
            pageurl: t.pageurl || window.location.href
        }]
          , a = {};
        "CLK" === e && (a.clkdata = JSON.stringify(s)),
        "EXP" === e && (a.expdata = JSON.stringify(s));
        var o = [];
        for (var r in a)
            o.push(r + "=" + a[r]);
        var l = window.goldlog_queue || (window.goldlog_queue = []);
        l.push({
            action: "goldlog.record",
            arguments: ["/yt/youku.h5.control", e, o.join("&"), "POST"]
        })
    }
}
, function(t, exports) {
    t.exports = function(t) {
        function e(t) {
            Object.defineProperty(this, "val", {
                value: t.toString(),
                enumerable: !0
            }),
            this.gt = function(t) {
                return e.compare(this, t) > 0
            }
            ,
            this.gte = function(t) {
                return e.compare(this, t) >= 0
            }
            ,
            this.lt = function(t) {
                return e.compare(this, t) < 0
            }
            ,
            this.lte = function(t) {
                return e.compare(this, t) <= 0
            }
            ,
            this.eq = function(t) {
                return 0 === e.compare(this, t)
            }
        }
        t.env = t.env || {},
        t.env._versionReady || (t.env._versionReady = !0,
        e.prototype.toString = function() {
            return this.val
        }
        ,
        e.prototype.valueOf = function() {
            for (var t = this.val.split("."), e = [], i = 0; i < t.length; i++) {
                var n = parseInt(t[i], 10);
                isNaN(n) && (n = 0);
                var s = n.toString();
                s.length < 5 && (s = Array(6 - s.length).join("0") + s),
                e.push(s),
                1 === e.length && e.push(".")
            }
            return parseFloat(e.join(""))
        }
        ,
        e.compare = function(t, e) {
            t = t.toString().split("."),
            e = e.toString().split(".");
            for (var i = 0; i < t.length || i < e.length; i++) {
                var n = parseInt(t[i], 10)
                  , s = parseInt(e[i], 10);
                if (n !== n && (n = 0),
                s !== s && (s = 0),
                n < s)
                    return -1;
                if (n > s)
                    return 1
            }
            return 0
        }
        ,
        t.version = function(t) {
            return new e(t)
        }
        )
    }
}
, function(t, exports, e) {
    function i(t, e) {
        n(this),
        a(this, t),
        s(this, e),
        o(this, t),
        r(this, t),
        l(this, t)
    }
    var n = e(49)
      , s = e(47)
      , a = e(46)
      , o = e(44)
      , r = e(45)
      , l = e(48);
    t.exports = i
}
, function(t, exports, e) {
    "use strict";
    function i(t) {
        return t && "object" == typeof t && "default"in t ? t.default : t
    }
    var n = e(2)
      , s = i(e(52))
      , a = i(e(82))
      , o = i(e(55))
      , r = navigator.userAgent
      , l = {
        share: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            if (n.browser.isIOS) {
                var e = "youku";
                n.browser.isIPad && (e = "youkuhd"),
                location.href = e + "://jsbshare?title=" + encodeURIComponent(t.title) + "&weburl=" + encodeURIComponent(t.link) + "&imageurl=" + encodeURIComponent(t.img)
            } else
                window.YoukuJSBridge.showShareView(JSON.stringify({
                    title: t.title,
                    url: t.link,
                    image: t.img,
                    img_only: t.img_only || !1
                }))
        },
        login: function() {
            var t = this
              , e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            if (n.browser.isIOS) {
                var i = n.browser.isPad ? "youkuhd" : "youku"
                  , s = this.getCookie("P_sck")
                  , a = setInterval(function() {
                    var i = t.getCookie("P_sck");
                    !s && i && (e.callback(),
                    clearInterval(a))
                }, 100);
                location.href = i + "://jsblogin?weburl=" + e.weburl
            } else
                e.callback && (window.showLoginViewCallback = function(t) {
                    e.callback(t),
                    window.showLoginViewCallback = void 0
                }
                ),
                window.YoukuJSBridge.showLoginView(JSON.stringify({}))
        },
        play: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , e = "youku"
              , i = "play";
            n.browser.isIOS && (n.browser.isPad ? e = "youkuhd" : i = "jsbplay"),
            location.href = e + "://" + i + "?source=" + t.source + (t.vid ? "&vid=" + t.vid : "") + (t.showid ? "&showid=" + t.showid : "") + (t.playlistid ? "&playlistid=" + t.playlistid : "") + (t.playlistid ? "&playlist_id=" + t.playlistid : "")
        },
        playLive: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , e = n.browser.isPad ? "youkuhd" : "youku";
            n.browser.isIOS ? location.href = e + "://jsbplaylive?id=" + t.id : location.href = e + "://playlive?liveid=" + t.id
        },
        loadUrl: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , e = t.shouldOverride || !1;
            n.browser.isIOS ? location.href = "youku://jsbjump?weburl=" + encodeURIComponent(t.url) : window.YoukuJSBridge.loadUrl('{"url":"' + t.url + '","shouldOverride":' + e + "}")
        },
        pageShare: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            if (n.browser.isIOS) {
                var e = {
                    url: t.link || location.href,
                    imageurl: t.img || "",
                    title: t.title
                };
                window.getMoreInfo || (window.getMoreInfo = function() {
                    return {
                        show: t.show || "yes",
                        otherinfo: e
                    }
                }
                )
            } else
                window.YoukuJSBridge.setShareInfo(JSON.stringify({
                    url: t.link || location.href,
                    title: t.title || document.title,
                    image: t.img || ""
                }))
        },
        close: function() {
            n.browser.isIOS ? location.href = "youku://jsbclose" : window.YoukuJSBridge.closeActivity({
                result: -1
            })
        },
        playList: function() {
            var t = n.browser.isPad ? "youkuhd" : "youku";
            n.browser.isIOS ? location.href = t + "://jsbjumpplaylist" : console.log("已不支持")
        },
        uploadVideo: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            if (n.browser.isIOS) {
                var e = "youku";
                n.browser.isPad && (e = "youkuhd"),
                location.href = e + "://jsbjumpupload"
            } else
                window.YoukuJSBridge.showUploadVideoPage(JSON.stringify({
                    topic: t.topic
                }))
        },
        vipPay: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            if (window.doPayCallback = function(e) {
                t.callback(e),
                window.doPayCallback = void 0
            }
            ,
            n.browser.isIOS) {
                var e = "youku";
                n.browser.isPad && (e = "youkuhd"),
                location.href = e + "://jsbpayment"
            } else {
                var i = "vippay://pay?url_spm_id=xx&r_object_id=xx";
                location.href = i
            }
        },
        subscribe: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , e = "youku";
            n.browser.isPad && (e = "youkuhd"),
            n.browser.isIOS ? location.href = e + "://jsbsubscrib?duid=" + t.duid + "&status=" + t.status : console.log("安卓暂时没有文档")
        },
        getUtdid: function() {
            var t = r.replace(/.+UTDID\s*([^;)]+).*/, "$1");
            return /;/.test(t) && (t = ""),
            t
        },
        getOuid: function() {
            var t = r.replace(/.+OUID\s*([^;)]+).*/, "$1");
            return /;/.test(t) && (t = ""),
            t
        },
        getCookie: function(t) {
            var e = encodeURIComponent(t) + "="
              , i = document.cookie.indexOf(e)
              , n = null
              , s = "";
            return i > -1 && (s = document.cookie.indexOf(";", i),
            s === -1 && (s = document.cookie.length),
            n = decodeURIComponent(document.cookie.substring(i + e.length, s))),
            n
        }
    }
      , u = {
        share: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , e = {
                sourceId: t.sourceId || 10,
                outputType: t.outputType || 1,
                url: t.url,
                titleText: t.title,
                descText: t.desc,
                thumbnailUrl: t.img,
                contentId: t.contentId,
                taskId: t.taskId,
                webImageDownloadUrl: t.webImageDownloadUrl,
                title: t.title,
                desc: t.desc,
                image: t.img
            };
            e = this.assign({}, t, e),
            s.call("WVBehavioursBridge", "showShareView", e, function(t) {
                e.successCallback(t),
                console.log("success:" + JSON.stringify(t))
            }, function(t) {
                e.failureCallback(t),
                console.log("failure:" + JSON.stringify(t))
            })
        },
        pageShare: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , e = {
                sourceId: t.sourceId || 10,
                outputType: t.outputType || 1,
                url: t.link,
                titleText: t.title,
                descText: t.desc,
                thumbnailUrl: t.img,
                contentId: t.contentId,
                taskId: t.taskId,
                webImageDownloadUrl: t.webImageDownloadUrl,
                title: t.title,
                desc: t.desc,
                image: t.img
            };
            e = this.assign({}, t, e),
            s.call("DYKBaseJSBridge", "passShareInfoToNative", e, function(t) {
                e.successCallback(t),
                console.log("success:" + JSON.stringify(t))
            }, function(t) {
                e.failureCallback(t),
                console.log("failure:" + JSON.stringify(t))
            })
        },
        showLogin: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            s.call("WVLoginJSBridge", "showLoginView", t, function(e) {
                t.callback(e)
            }, function(t) {
                console.log("failure:" + JSON.stringify(t))
            })
        },
        play: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , e = "youku://playVideo?" + (t.source ? "source=" + t.source : "") + (t.vid ? "&v=" + t.vid : "") + (t.showid ? "&s=" + t.showid : "") + (t.openHalfUrl ? "&openHalfUrl=" + t.openHalfUrl : "") + (t.spm ? "&spm=" + t.spm : "") + (t.scm ? "&scm=" + t.scm : "")
              , i = "youku://play?" + (t.source ? "source=" + t.source : "") + (t.vid ? "&vid=" + t.vid : "") + (t.showid ? "&showid=" + t.showid : "") + (t.openHalfUrl ? "&openHalfUrl=" + t.openHalfUrl + "&detail_action=startH5&blockPop=1" : "") + (t.spm ? "&spm=" + t.spm : "") + (t.scm ? "&scm=" + t.scm : "");
            t.url = n.browser.isIOS ? e : i,
            t.pop ? this.navToUrl(t) : this.nativeOpen(t)
        },
        playLive: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            t.url = "youku://playLive?id=" + t.id,
            t.pop ? this.navToUrl(t) : this.nativeOpen(t)
        },
        loadUrl: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            t.pop ? this.navToUrl(t) : (t.url = n.browser.isIOS && !t.isBridge ? "youku://http?url=" + t.url : t.url,
            n.browser.isIOS ? this.nativeOpen(t) : t.isBridge ? this.nativeOpen(t) : s.call("WVLoadBridge", "loadUrl", t, function(t) {
                console.log("success:" + JSON.stringify(t))
            }, function(e) {
                console.log("failure:" + JSON.stringify(e)),
                location.href = t.url
            }))
        },
        close: function() {
            var t = {};
            s.call("WVActionJSBridge", "closeActivity", t, function(t) {
                console.log("success:" + JSON.stringify(t))
            }, function(t) {
                console.log("failure:" + JSON.stringify(t))
            })
        },
        getUserInfo: function(t) {
            s.call("DYKUserJSBridge", "getUserInfo", t, function(e) {
                t.successCallback(e)
            }, function(e) {
                t.failureCallback(e),
                console.log("failure:" + JSON.stringify(e))
            })
        },
        getAppInfo: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            s.call("DYKBaseJSBridge", "getAppInfo", t, function(e) {
                t.successCallback(e)
            }, function(e) {
                t.failureCallback(e),
                console.log("failure:" + JSON.stringify(e))
            })
        },
        setStatusBar: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , e = {
                statusBarColor: t.statusBarColor,
                statusBarLight: t.statusBarLight
            };
            e = this.assign({}, t, e),
            s.call("YKWebAppInterface", "setStatusBarColor", e, function(t) {
                console.log("success:" + JSON.stringify(t))
            }, function(t) {
                console.log("failure:" + JSON.stringify(t))
            })
        },
        setTitleBar: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , e = {
                showTitle: t.showTitle,
                setText: t.setText,
                showShare: t.showShare,
                showCopy: t.showCopy,
                showWeb: t.showWeb
            };
            s.call("YKWebAppInterface", "setTitleBar", e, function(t) {
                console.log("success:" + JSON.stringify(t))
            }, function(t) {
                console.log("failure:" + JSON.stringify(t))
            })
        },
        getDeviceInfo: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            s.call("DYKBaseJSBridge", "getDeviceInfo", t, function(e) {
                t.successCallback(e)
            }, function(e) {
                t.failureCallback(e),
                console.log("failure:" + JSON.stringify(e))
            })
        },
        startDiagnose: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            s.call("WVDiagnoseBridge", "startDiagnose", t, function(t) {
                console.log("success:" + JSON.stringify(t))
            }, function(t) {
                console.log("failure:" + JSON.stringify(t))
            })
        },
        isSupportStepCountSensor: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            s.call("YKWVStepBridge", "isSupportStepCountSensor", t, function(t) {
                console.log("success:" + JSON.stringify(t))
            }, function(t) {
                console.log("failure:" + JSON.stringify(t))
            })
        },
        postStepData: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            s.call("YKWVStepBridge", "postStepData", t, function(t) {
                console.log("success:" + JSON.stringify(t))
            }, function(t) {
                console.log("failure:" + JSON.stringify(t))
            })
        },
        setKVItem: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            s.call("DYKStorageJSBridge", "setItem", t, function(e) {
                t.successCallback(e),
                console.log("success:" + JSON.stringify(e))
            }, function(e) {
                t.failureCallback(e),
                console.log("failure:" + JSON.stringify(e))
            })
        },
        getKVItem: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            s.call("DYKStorageJSBridge", "getItem", t, function(e) {
                t.successCallback(e),
                console.log("success:" + JSON.stringify(e))
            }, function(e) {
                t.failureCallback(e),
                console.log("failure:" + JSON.stringify(e))
            })
        },
        enableCalendarPlan: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            s.call("DYKCalendarJSBridge", "enableCalendarPlan", t, function(e) {
                t.successCallback(e),
                console.log("success:" + JSON.stringify(e))
            }, function(e) {
                t.failureCallback(e),
                console.log("failure:" + JSON.stringify(e))
            })
        },
        checkCalendarPlanIsExist: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            s.call("DYKCalendarJSBridge", "checkCalendarPlanIsExist", t, function(e) {
                t.successCallback(e),
                console.log("success:" + JSON.stringify(e))
            }, function(e) {
                t.failureCallback(e),
                console.log("failure:" + JSON.stringify(e))
            })
        },
        addCalendarPlan: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            s.call("DYKCalendarJSBridge", "addCalendarPlan", t, function(e) {
                t.successCallback(e),
                console.log("success:" + JSON.stringify(e))
            }, function(e) {
                t.failureCallback(e),
                console.log("failure:" + JSON.stringify(e))
            })
        },
        getVideoinfo: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            s.call("DJH5Player", "videoinfo", t, function(e) {
                t.successCallback(e),
                console.log("videoinfo success:" + JSON.stringify(e))
            }, function(e) {
                t.failureCallback(e),
                console.log("videoinfo failure:" + JSON.stringify(e))
            })
        },
        openlistener: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , e = {
                play: 1,
                pause: 1,
                duration: 1,
                hdchange: 1,
                langchange: 1,
                fullscreen: 1,
                halfscreen: 1,
                playend: 1,
                playerror: 1,
                start: 1
            };
            e = this.assign({}, t, e),
            s.call("DJH5Player", "openlistener", e, function(t) {
                console.log("openlistener failure:" + JSON.stringify(t))
            }, function(t) {
                console.log("openlistener failure:" + JSON.stringify(t))
            })
        },
        setVideoPlay: function(t) {
            s.call("DJH5Player", "play", t, function(t) {
                console.log("play success:" + JSON.stringify(t))
            }, function(t) {
                console.log("play failure:" + JSON.stringify(t))
            })
        },
        setVideoPause: function(t) {
            s.call("DJH5Player", "pause", t, function(t) {
                console.log("pause success:" + JSON.stringify(t))
            }, function(t) {
                console.log("pause failure:" + JSON.stringify(t))
            })
        },
        setVideoDuration: function(t) {
            var e = {
                second: "60"
            };
            e = this.assign({}, t, e),
            s.call("DJH5Player", "duration", e, function(t) {
                console.log("duration success:" + JSON.stringify(t))
            }, function(t) {
                console.log("duration failure:" + JSON.stringify(t))
            })
        },
        getScreenstate: function(t) {
            s.call("DJH5Player", "screenstate", t, function(e) {
                t.successCallback(e),
                console.log("fullscreen success:" + JSON.stringify(e))
            }, function(e) {
                t.failureCallback(e),
                console.log("fullscreen failure:" + JSON.stringify(e))
            })
        },
        getLanginfo: function(t) {
            s.call("DJH5Player", "langinfo", t, function(e) {
                t.successCallback(e),
                console.log("langinfo success:" + JSON.stringify(e))
            }, function(e) {
                t.failureCallback(e),
                console.log("langinfo failure:" + JSON.stringify(e))
            })
        },
        getHDinfo: function(t) {
            s.call("DJH5Player", "hdinfo", t, function(e) {
                t.successCallback(e),
                console.log("hdinfo success:" + JSON.stringify(e))
            }, function(e) {
                t.failureCallback(e),
                console.log("hdinfo failure:" + JSON.stringify(e))
            })
        },
        nativeOpen: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            s.call("DYKBaseJSBridge", "nativeOpen", t, function(e) {
                console.log("success:" + JSON.stringify(e)),
                t.successCallback(e)
            }, function(e) {
                t.failureCallback(e),
                location.href = t.url
            })
        },
        navToUrl: function() {
            var t = this
              , e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            s.call("WVPopLayer", "navToUrl", e, function(t) {
                e.successCallback(t),
                console.log("success:" + JSON.stringify(t))
            }, function(i) {
                e.failureCallback(i),
                t.nativeOpen(e)
            })
        },
        bindingStatus: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            s.call("WVTaobaoYoukuAccountJSBridge", "queryBindingStatus", t, function(e) {
                t.successCallback(e)
            }, function(e) {
                t.failureCallback(e)
            })
        },
        bindAccount: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            s.call("WVTaobaoYoukuAccountJSBridge", "bindAccount", t, function(e) {
                t.successCallback(e)
            }, function(e) {
                t.failureCallback(e)
            })
        },
        eventRecord: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            s.call("WVPopLayer", "eventRecord", t, function(e) {
                t.successCallback(e)
            }, function(e) {
                t.failureCallback(e)
            })
        },
        getSearch: function() {
            return a.parse(location.search)
        },
        getVersions: function() {
            var t = n.browser.version.split(".")
              , e = parseInt(1e4 * t[0]) + parseInt(100 * t[1]) + parseInt(10 * t[2]);
            return e
        },
        assign: function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = arguments[e];
                for (var n in i)
                    Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
            }
            return t
        }
    }
      , d = {
        share: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , e = {
                weburl: t.url,
                title: t.title,
                imageurl: t.img
            };
            e = this.assign({}, t, e),
            s.call("YKWVJSBridge", "share", e, function(t) {
                console.log("success:" + JSON.stringify(t))
            }, function() {
                l.share(t)
            })
        },
        login: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            s.call("YKWVJSBridge", "login", t, function() {
                t.callback()
            }, function() {
                l.login(t)
            })
        },
        play: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            s.call("YKWVJSBridge", "play", t, function(t) {
                console.log("success:" + JSON.stringify(t))
            }, function() {
                l.play(t)
            })
        },
        playLive: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            s.call("YKWVJSBridge", "playLive", t, function(t) {
                console.log("success:" + JSON.stringify(t))
            }, function() {
                l.playLive(t)
            })
        },
        loadUrl: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            s.call("YKWVJSBridge", "jumpWeb", t, function(t) {
                console.log("success:" + JSON.stringify(t))
            }, function() {
                l.loadUrl(t)
            })
        },
        close: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            s.call("YKWVJSBridge", "close", t, function(t) {
                console.log("success:" + JSON.stringify(t))
            }, function() {
                l.close()
            })
        },
        assign: function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = arguments[e];
                for (var n in i)
                    Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
            }
            return t
        }
    }
      , h = new RegExp("http|https")
      , c = new RegExp("youku")
      , f = {
        navigatorPlanets: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            t.vi = t.vi || "6.6.2.1",
            t.va = t.va || "6.6.3.3",
            t.v = t.v || "6.6.3.3",
            o.navigate(t)
        },
        setShare: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            t.url = this.setHttp(t.link),
            t.img = this.setHttp(t.img),
            t.webImageDownloadUrl = this.setHttp(t.webImageDownloadUrl),
            n.browser.isIPad && n.browser.isWindVane ? d.share(t) : n.browser.isAndroid && n.browser.isWindVane || n.browser.isIOS && n.browser.isWindVane && (this.getVersions() >= 60940 || "6.5.0.999" === n.browser.version) ? u.share(t) : l.share(t)
        },
        pageShare: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            t.url = this.setHttp(t.link),
            t.img = this.setHttp(t.img),
            t.webImageDownloadUrl = this.setHttp(t.webImageDownloadUrl),
            n.browser.isWindVane && !n.browser.isIPad && (n.browser.isIOS && this.getVersions() >= 61180 || n.browser.isAndroid && this.getVersions() >= 61200 || "6.5.0.999" === n.browser.version) ? u.pageShare(t) : l.pageShare(t)
        },
        setPagepoint: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            l.pageShare(t)
        },
        showLogin: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            t.weburl = t.link || location.href,
            n.browser.isIPad && n.browser.isWindVane ? d.login(t) : n.browser.isWindVane && !n.browser.isIPad ? u.showLogin(t) : l.login(t)
        },
        play: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            t.videoid = t.vid,
            t.source = t.source || "mplaypage",
            t.openHalfUrl = this.setHttp(t.openHalfUrl),
            n.browser.isIPad && n.browser.isWindVane ? d.play(t) : n.browser.isWindVane && !t.playlistid ? u.play(t) : l.play(t)
        },
        playLive: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            n.browser.isWindVane && !n.browser.isIPad ? u.playLive(t) : l.playLive(t)
        },
        loadUrl: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , e = new RegExp("http|https");
            t.isBridge = c.test(t.link.substr(0, 5).toLowerCase()),
            t.isBridge ? t.url = t.link : t.url = e.test(t.link.substr(0, 7).toLowerCase()) ? t.link : "https:" + t.link,
            n.browser.isIPad && n.browser.isWindVane ? d.loadUrl(t) : n.browser.isWindVane && !n.browser.isIPad ? u.loadUrl(t) : l.loadUrl(t)
        },
        close: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            n.browser.isIPad && n.browser.isWindVane ? d.close(t) : n.browser.isWindVane && n.browser.isAndroid ? u.close(t) : l.close(t)
        },
        getUserInfo: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            u.getUserInfo(t)
        },
        getAppInfo: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            u.getAppInfo(t)
        },
        setStatusBar: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            u.setStatusBar(t)
        },
        setTitleBar: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            n.browser.isAndroid && n.browser.isWindVane && u.setTitleBar(t)
        },
        getDeviceInfo: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            u.getDeviceInfo(t)
        },
        startDiagnose: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            u.startDiagnose(t)
        },
        isSupportStepCountSensor: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            u.isSupportStepCountSensor(t)
        },
        postStepData: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            u.postStepData(t)
        },
        playList: function() {
            l.playList()
        },
        uploadVideo: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            l.uploadVideo(t)
        },
        vipPay: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            l.vipPay(t)
        },
        subscribe: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            l.subscrib(t)
        },
        getUtdid: function() {
            return l.getUtdid()
        },
        getOuid: function() {
            return l.getOuid()
        },
        setKVItem: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            u.setKVItem(t)
        },
        getKVItem: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            u.getKVItem(t)
        },
        enableCalendarPlan: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            u.enableCalendarPlan(t)
        },
        checkCalendarPlanIsExist: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            u.checkCalendarPlanIsExist(t)
        },
        addCalendarPlan: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            u.addCalendarPlan(t)
        },
        getVideoinfo: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            u.getVideoinfo(t)
        },
        openlistener: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            u.openlistener(t)
        },
        setVideoPlay: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            u.setVideoPlay(t)
        },
        setVideoPause: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            u.setVideoPause(t)
        },
        setVideoDuration: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            u.setVideoDuration(t)
        },
        getScreenstate: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            u.getScreenstate(t)
        },
        getLanginfo: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            u.getLanginfo(t)
        },
        getHDinfo: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            u.getHDinfo(t)
        },
        nativeOpen: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            u.nativeOpen(t)
        },
        navToUrl: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            u.navToUrl(t)
        },
        bindingStatus: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            u.bindingStatus(t)
        },
        bindAccount: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            u.bindAccount(t)
        },
        eventRecord: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            u.eventRecord(t)
        },
        setHttp: function(t) {
            if (t)
                return t = h.test(t.substr(0, 7).toLowerCase()) ? t : "https:" + t
        },
        getVersions: function() {
            var t = n.browser.version.split(".")
              , e = parseInt(1e4 * t[0]) + parseInt(100 * t[1]) + parseInt(10 * t[2]);
            return e
        }
    };
    t.exports = f
}
, function(t, exports) {
    "use strict";
    function e(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    var i = function() {
        function t(t, e) {
            var i = []
              , n = !0
              , s = !1
              , a = void 0;
            try {
                for (var o, r = t[Symbol.iterator](); !(n = (o = r.next()).done) && (i.push(o.value),
                !e || i.length !== e); n = !0)
                    ;
            } catch (t) {
                s = !0,
                a = t
            } finally {
                try {
                    !n && r.return && r.return()
                } finally {
                    if (s)
                        throw a
                }
            }
            return i
        }
        return function(e, i) {
            if (Array.isArray(e))
                return e;
            if (Symbol.iterator in Object(e))
                return t(e, i);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }()
      , n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    }
      , s = function() {
        function t(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        return function(e, i, n) {
            return i && t(e.prototype, i),
            n && t(e, n),
            e
        }
    }();
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var a = new RegExp("^([a-z0-9-]+:)?[/]{2}(?:([^@/:?]+)(?::([^@/:]+))?@)?([^:/?#]+)(?:[:]([0-9]+))?([/][^?#;]*)?(?:[?]([^#]*))?([#][^?]*)?$","i")
      , o = function() {
        function t(i) {
            e(this, t),
            this._params = {},
            this._hash = "",
            i && this.assign(i.toString())
        }
        return s(t, [{
            key: "assign",
            value: function(t) {
                t = t || "";
                var e = t.match(a);
                if (!e)
                    throw new Error("Parse Error");
                this.protocol = e[1] || ("object" === ("undefined" == typeof location ? "undefined" : n(location)) ? location.protocol : ""),
                this.username = e[2] || "",
                this.password = e[3] || "",
                this.hostname = e[4],
                this.port = e[5] || "",
                this.pathname = e[6] || "/",
                this.search = e[7] || "",
                this.hash = e[8] || "",
                this.origin = this.protocol + "//" + this.host
            }
        }, {
            key: "toString",
            value: function() {
                var t = this.protocol + "//";
                return this.username && (t += this.username,
                this.password && (t += ":" + this.password),
                t += "@"),
                t += this.hostname,
                this.port && "80" !== this.port && (t += ":" + this.port),
                this.pathname && (t += this.pathname),
                this.search && (t += this.search),
                this.hash && (t += this.hash),
                t
            }
        }, {
            key: "params",
            get: function() {
                return this._params
            },
            set: function(t) {
                if (t && "object" === ("undefined" == typeof t ? "undefined" : n(t)) && !(t instanceof Date) && !(t instanceof RegExp) && !(t instanceof Array) && !(t instanceof String) && !(t instanceof Number) && !(t instanceof Boolean)) {
                    for (var e in this._params)
                        delete this._params[e];
                    for (var e in t)
                        this._params[e] = t[e]
                }
            }
        }, {
            key: "search",
            get: function() {
                var t = [];
                for (var e in this._params)
                    if (void 0 !== this._params[e])
                        if ("" !== this._params[e])
                            try {
                                t.push(encodeURIComponent(e) + "=" + encodeURIComponent(this._params[e]))
                            } catch (i) {
                                t.push(e + "=" + this._params[e])
                            }
                        else
                            try {
                                t.push(encodeURIComponent(e))
                            } catch (i) {
                                t.push(e)
                            }
                return t.length ? "?" + t.join("&") : ""
            },
            set: function(t) {
                if ("string" == typeof t || t instanceof String) {
                    t = t.toString(),
                    0 === t.indexOf("?") && (t = t.substr(1));
                    var e = t.split("&");
                    for (var n in this._params)
                        delete this._params[n];
                    for (var s = 0; s < e.length; s++) {
                        var a = e[s].split("=")
                          , o = i(a, 2)
                          , r = o[0]
                          , l = o[1];
                        if (void 0 !== l && (l = l.toString()),
                        r)
                            try {
                                this._params[decodeURIComponent(r)] = decodeURIComponent(l)
                            } catch (t) {
                                this._params[r] = l
                            }
                    }
                }
            }
        }, {
            key: "hash",
            get: function() {
                return this._hash
            },
            set: function(t) {
                ("string" == typeof t || t instanceof String) && (t = t.toString(),
                t && t.indexOf("#") < 0 && (t = "#" + t),
                this._hash = t || "")
            }
        }, {
            key: "host",
            get: function() {
                return this.hostname + (this.port ? ":" + this.port : "")
            },
            set: function(t) {
                if ("string" == typeof t || t instanceof String) {
                    t = t.toString();
                    var e = t.match(/([^:\/?#]+)(?:[:]([0-9]+))?/);
                    e && (this.hostname = e[1],
                    this.port = e[2] || "")
                }
            }
        }]),
        t
    }();
    exports.default = o
}
, function(t, exports, e) {
    "use strict";
    function i(t) {
        return t && "object" == typeof t && "default"in t ? t.default : t
    }
    function n(t, e) {
        var i = new d(location.href.split("#")[0]);
        if (!L)
            for (var n in i.params)
                t.params.hasOwnProperty(n) || (t.params[n] = i.params[n]);
        if ("object" === ("undefined" == typeof e ? "undefined" : f(e)))
            for (var s in e)
                "number" == typeof e[s] ? t.params[s] = "" + e[s] : "function" == typeof e[s] ? t.params[s] = "" : t.params[s] = e[s];
        return t
    }
    function s(t, e) {
        return e ? void (location.href = t) : (x || (x = p.createElement("iframe"),
        x.id = "callapp_iframe_" + Date.now(),
        x.frameborder = "0",
        x.style.cssText = "display:none;border:0;width:0;height:0;",
        p.body.appendChild(x)),
        void (x.src = t))
    }
    function a(t, e) {
        e !== !1 && e === !0 ? top.location.replace(t) : top.location.href = t
    }
    function o() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        D = !0;
        var e = t.params
          , i = /auto/i.test(e.source);
        if (U.restore() && i)
            return void U.clear();
        i && (e.universalRedirect = window.location.href,
        U.save());
        var s = e.universalRedirect || "";
        s && (s = new d(s)),
        t.exdParams && s && n(s, t.exdParams),
        r(s),
        s = s.toString(),
        e.fallback_url = s,
        e.fua = /Safari\/\d+(\.\d+)*$/.test(navigator.userAgent) ? "safari" : "other",
        e.special = 1,
        e.ts = (new Date).getTime(),
        e.action = e.action ? e.action : "play";
        var o = new d(t.universalLink || S);
        n(o, e),
        t.exdParams && n(o, t.exdParams),
        r(o),
        a(C.dealUrl(o))
    }
    function r(t) {
        if (t instanceof d)
            for (var e in t._params)
                null !== t.params[e] && "undefined" !== t.params[e] && "" !== t.params[e] || delete t.params[e]
    }
    function l(t) {
        var e = document.cookie.match(RegExp("(^| )" + t + "=([^;]*)(;|$)"));
        return null !== e ? unescape(e[2]) : null
    }
    function u() {
        return b ? "youkuapp" : w ? "weixin" : A ? "weibo" : E ? "uc" : "other"
    }
    var d = i(e(19))
      , h = e(8)
      , c = i(e(39))
      , f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
      , p = window.document
      , m = window.navigator.userAgent
      , v = h.os
      , _ = h.params
      , y = h.browser
      , g = h.os.isIOS ? 2500 : 3e3
      , b = /youku/i.test(m)
      , w = /microMessenger/i.test(m)
      , A = /weibo/i.test(m)
      , E = /ucbrowser/i.test(m)
      , T = /MQQBrowser/i.test(m)
      , k = "com.youku.phone"
      , P = /iPad/.test(navigator.userAgent) ? "youkuhd://" : "youku://"
      , S = "//acz-jump.youku.com/wow/ykpage/act/ulink"
      , I = "//a.app.qq.com/o/simple.jsp?pkgname=com.youku.phone"
      , D = !1
      , L = ""
      , C = {
        gotoApp: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , e = l("cna");
            t.pathname = t.pathname ? t.pathname : "splash",
            t.params.action = t.params.action ? t.params.action : "",
            t.params.ua = t.banParams && t.banParams.ua ? "" : m,
            t.params.refer = _.refer ? _.refer : t.params.refer,
            t.params.is_h5 = _.is_h5 || "1",
            t.params.ccts = t.banParams && t.banParams.ccts ? "" : (new Date).getTime(),
            t.params.cookieid = e || "",
            t.params.refer_url = location.href,
            t.params.tuid = _.tuid ? _.tuid : t.params.tuid,
            L = t.stopTransfer;
            var i = new d(P + t.pathname);
            "/" === i.pathname && (i.pathname = ""),
            t.params && n(i, t.params),
            r(i);
            var u = "";
            t.whiteList && t.whiteList.length > 0 && t.whiteList.forEach(function(t) {
                new RegExp(t).test(m) && (u = !0)
            });
            var h = "";
            t.storeList && t.storeList.length > 0 && t.storeList.forEach(function(t) {
                new RegExp(t).test(m) && (h = !0)
            });
            var c = v.isAndroid && y.isChrome && !y.isWebview
              , f = v.isAndroid && !!m.match(/samsung/i) && v.version.gte("4.3") && v.version.lt("4.5");
            !u && (c || f || t.forceIntent) && (i.hash = "Intent;scheme=" + i.protocol.replace(":", "") + ";package=" + k + ";end",
            i.protocol = "intent:");
            var p = v.isIPhone && v.version.gte("9.0");
            return O.track(t.params),
            console.log(i),
            u ? s(C.dealUrl(i), p) : h && v.isIOS ? a("https://itunes.apple.com/app/id336141475") : w ? v.isIPhone ? p && t.guide ? o(t) : a("https://itunes.apple.com/app/id336141475") : a(I + "&android_schema=" + encodeURIComponent(i.toString())) : !p || t.universalLinkState === !1 || E || T || A ? "intent:" === i.protocol ? setTimeout(function() {
                a(C.dealUrl(i))
            }, 100) : s(C.dealUrl(i), p) : o(t),
            C.dealUrl(i)
        },
        download: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            if (t.downloadUrl) {
                var e = new d(t.downloadUrl);
                t.exdParams && n(e, t.exdParams),
                r(e),
                e = e.toString(),
                a(e, t.replace)
            }
        },
        gotoPage: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            if (t = c({
                timeout: g
            }, t),
            t.targetUrl = C.gotoApp(t),
            D)
                return t.targetUrl;
            if (t.isNeedDownload)
                var e = window.setTimeout(function() {
                    clearTimeout(e),
                    C.download(t)
                }, t.timeout);
            else if (t.uri)
                var i = window.setTimeout(function() {
                    clearTimeout(i),
                    a(t.uri, t.replace)
                }, t.timeout);
            return t.targetUrl
        },
        dealUrl: function(t) {
            if (t._params.openHalfUrl && t._params.openHalfUrl.length) {
                var e = t._params.openHalfUrl;
                return delete t._params.openHalfUrl,
                t.toString() + "&openHalfUrl=" + e
            }
            return t.toString()
        }
    }
      , O = {
        track: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , e = function() {
                return v.isIOS ? "ios" : v.isAndroid ? "android" : "other"
            }()
              , i = {
                page: t.pagetype || "defaultPage",
                source: t.source || "defaultSource",
                shortua: u(),
                os: e
            };
            this.send(i)
        },
        send: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , e = "";
            for (var i in t)
                e += "&" + i + "=" + t[i];
            e && (e = e.substring(1, e.length));
            try {
                goldlog.record("/yt/youkuphoneplaypage.callapp.callappLog", "CLK", e, "H1535059694")
            } catch (t) {
                var n = "//gm.mmstat.com/yt/youkuphoneplaypage.callapp.callappLog?" + e + "&r_=" + (new Date).valueOf();
                (new Image).src = n
            }
        }
    }
      , x = void 0
      , U = {
        key: "_h5_app_launcher_ios9_timestamp",
        save: function() {
            localStorage.setItem(this.key, (new Date).getTime())
        },
        restore: function() {
            return parseInt(localStorage.getItem(this.key) || 0)
        },
        clear: function() {
            localStorage.removeItem(this.key)
        }
    };
    t.exports = C
}
, function(t, exports, e) {
    "use strict";
    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var n, s, a = e(6), o = i(a), r = window.navigator.userAgent;
    if (s = r.match(/Windows\sPhone\s(?:OS\s)?([\d\.]+)/))
        n = {
            name: "Windows Phone",
            isWindowsPhone: !0,
            version: new o.default(s[1])
        };
    else if (r.match(/Safari/) && (s = r.match(/Android[\s\/]([\d\.]+)/)))
        n = {
            version: new o.default(s[1])
        },
        r.match(/Mobile\s+Safari/) ? (n.name = "Android",
        n.isAndroid = !0) : (n.name = "AndroidPad",
        n.isAndroidPad = !0);
    else if (s = r.match(/(iPhone|iPad|iPod)/)) {
        var l = s[1];
        (s = r.match(/OS ([\d_\.]+) like Mac OS X/)) && (n = {
            name: l,
            isIPhone: "iPhone" === l || "iPod" === l,
            isIPad: "iPad" === l,
            isIOS: !0,
            version: new o.default(s[1].split("_").join("."))
        })
    }
    n || (n = {
        name: "unknown",
        version: new o.default("0.0.0")
    }),
    exports.default = n
}
, function(t, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var e = {
        FRONT_AD_API: "//valf.atm.youku.com/vf",
        END_AD_API: "//valb.atm.youku.com/vb",
        MID_AD_API: "//valo.atm.youku.com/vo",
        STA_AD_API: "//valt.atm.youku.com/vt",
        PAUSE_AD_API: "//valp.atm.youku.com/vp"
    }
      , i = {
        FRONT_AD_API: "//yk-ssp.ad.youku.com/mf",
        END_AD_API: "//yk-ssp.ad.youku.com/mb",
        CONTENT_AD_API: "//yk-ssp.ad.youku.com/mo",
        PAUSE_AD_API: "//yk-ssp.ad.youku.com/mp"
    }
      , n = {
        FRONT_AD_API: "//pre-yk-ssp.ad.youku.com/mf",
        END_AD_API: "//pre-yk-ssp.ad.youku.com/mb",
        CONTENT_AD_API: "//pre-yk-ssp.ad.youku.com/mo",
        PAUSE_AD_API: "//pre-yk-ssp.ad.youku.com/mp"
    }
      , s = {
        IF_FRONT: !0,
        IF_MID: !0,
        IF_END: !0,
        IF_CONT: !0
    }
      , a = {
        FRONT: "front",
        END: "end",
        CONT: "contentad",
        STA: "standard",
        PAUSE: "pause"
    };
    exports.YoukuAdApiPC = e,
    exports.YoukuAdApiM = i,
    exports.ADConfigM = s,
    exports.AD_MAP = a,
    exports.YoukuAdApiM_PRE = n
}
, function(t, exports, e) {
    "use strict";
    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    function n(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var s = function() {
        function t(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        return function(e, i, n) {
            return i && t(e.prototype, i),
            n && t(e, n),
            e
        }
    }()
      , a = e(3)
      , o = i(a)
      , r = e(7)
      , l = i(r)
      , u = e(2)
      , d = function() {
        function t(e) {
            n(this, t),
            this.addata = e,
            this.curnum = 0
        }
        return s(t, [{
            key: "changeNum",
            value: function(t) {
                this.curnum = t
            }
        }, {
            key: "setData",
            value: function(t) {
                this.addata = t
            }
        }, {
            key: "setVideoInfo",
            value: function(t, e) {
                this.videoInfo = t,
                this.ccode = e
            }
        }, {
            key: "sendSUS",
            value: function(t) {
                if (!(!this.addata || t < 0 || t >= this.addata.VAL.length)) {
                    var e = this.addata.VAL[t];
                    if (!e.isSendSus) {
                        var i = e.SUS;
                        if ("undefined" != typeof i) {
                            for (var n = 0; n < i.length; n++) {
                                var s = i[n].U;
                                o.default.sendlog(s),
                                "https:" === o.default.protocol && (/^https/.test(s) || (this.sendAdLog(3, 309),
                                this.sendAdGold({
                                    p: 1,
                                    code: 309
                                }, {
                                    index: t
                                })))
                            }
                            this.sendAdGold({
                                p: 1,
                                code: 400
                            }, {
                                index: t
                            }),
                            this._loadBRS(e.BRS),
                            e.isSendSus = !0
                        }
                    }
                }
            }
        }, {
            key: "sendUnitedVTVC",
            value: function(t) {
                if (this.addata) {
                    t += 2;
                    var e = this.addata.VAL[0]
                      , i = e.VTVC;
                    this._vtccache || (this._vtccache = []);
                    for (var n = null, s = 1e6, a = 1e5, r = 0; r < i.length; r++) {
                        var l = i[r].U
                          , u = parseInt(i[r].T, 10)
                          , d = t - u;
                        d >= 0 && d < a && (a = d,
                        n = l,
                        s = u)
                    }
                    null != n && this._vtccache.indexOf(s) === -1 && (this._vtccache.push(s),
                    debug.log("<b> vc = " + n + "</b>"),
                    o.default.loadfile(n, "js"))
                }
            }
        }, {
            key: "sendVC",
            value: function(t) {
                if (!(!this.addata || t < 0 || t >= this.addata.VAL.length)) {
                    var e = this.addata.VAL[this.curnum]
                      , i = e.VT;
                    if ("undefined" != typeof i) {
                        var n = e.VC;
                        loadjscssfile(n, "js")
                    }
                }
            }
        }, {
            key: "sendSUS_",
            value: function(t) {
                if (!(!this.addata || t < 0 || t >= this.addata.VAL.length)) {
                    var e = this.addata
                      , i = this.curnum + 2
                      , n = e["A" + i].SU
                      , s = e["A" + i].ATMSU
                      , a = e["A" + i].ISOSU;
                    o.default.sendlog(n),
                    o.default.sendlog(s),
                    o.default.sendlog(a)
                }
            }
        }, {
            key: "sendSUE",
            value: function(t) {
                if (!(!this.addata || t < 0 || t >= this.addata.VAL.length)) {
                    var e = this.addata.VAL[t];
                    if (!e.isSendSue) {
                        var i = e.SUE;
                        if ("undefined" != typeof i) {
                            for (var n = 0; n < i.length; n++) {
                                var s = i[n].U;
                                o.default.sendlog(s)
                            }
                            e.isSendSue = !0
                        }
                    }
                }
            }
        }, {
            key: "sendSU",
            value: function(t) {
                if (this.addata) {
                    var e = this.addata.VAL[this.curnum]
                      , i = e.SU;
                    if ("undefined" != typeof i) {
                        this._sucache || (this._sucache = []);
                        for (var n = 1e4, s = 1e6, a = 0; a < i.length; a++) {
                            var r = (i[a].U,
                            parseInt(i[a].T, 10))
                              , l = t - r;
                            l >= 0 && l < n && (n = l,
                            s = r)
                        }
                        if (1e6 != s && this._sucache.indexOf(s) == -1) {
                            this._sucache.push(s);
                            for (var u = 0; u < i.length; u++)
                                parseInt(i[u].T, 10) == s && o.default.sendlog(i[u].U)
                        }
                    }
                }
            }
        }, {
            key: "sendSU_",
            value: function(t) {
                if (this.addata) {
                    curnum += 2;
                    var e = this.addata["A" + curnum].MT;
                    if (e && t >= parseInt(e, 10)) {
                        var i = this.addata["A" + curnum].MU
                          , n = this.addata["A" + curnum].CMU;
                        o.default.sendlog(i),
                        o.default.sendlog(n)
                    }
                }
            }
        }, {
            key: "sendCUM",
            value: function() {
                if (this.addata) {
                    var t = this.addata.VAL[this.curnum]
                      , e = t.CUM;
                    if ("undefined" != typeof e)
                        for (var i = 0; i < e.length; i++) {
                            var n = e[i].U;
                            o.default.sendlog(n)
                        }
                }
            }
        }, {
            key: "sendUnitedCUM",
            value: function(t) {
                if (this.addata) {
                    var e = this.addata.VAL[0]
                      , i = e.CUM;
                    if ("undefined" != typeof i && 0 !== i.length)
                        for (var n = 0; n < i.length; n++)
                            if (t < parseInt(i[n].T, 10)) {
                                for (var s = 0; s < (i[n].CUM || []).length; s++)
                                    o.default.sendlog(i[n].CUM[s].U);
                                break
                            }
                }
            }
        }, {
            key: "_loadBRS",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                (/^https/.test(t) || /^https/.test(location.href) && /^\/{2}:/.test(t)) && o.default.loadfile(t, "js")
            }
        }, {
            key: "sendDotSUS",
            value: function(t) {
                if (t && t.SUS)
                    for (var e = 0; e < t.SUS.length; e++) {
                        var i = t.SUS[e].U;
                        o.default.sendlog(i)
                    }
            }
        }, {
            key: "sendDotSUE",
            value: function(t) {
                if (t && t.SUE)
                    for (var e = 0; e < t.SUE.length; e++) {
                        var i = t.SUE[e].U;
                        o.default.sendlog(i)
                    }
            }
        }, {
            key: "sendAdLog",
            value: function(t, e, i) {
                return !1
            }
        }, {
            key: "sendAdGold",
            value: function(t, e) {
                t.os = u.browser.isWindows ? "windows" : u.browser.isIOS ? "ios" : "android",
                t.ccode = this.ccode,
                t.psid = this.videoInfo && this.videoInfo.ups ? this.videoInfo.ups.psid : "",
                t.reqid = e ? e.REQID : null,
                t.protocol = o.default.protocol,
                t.version = l.default.version,
                this.addata && (t.count = this.addata.VAL ? this.addata.VAL.length : 0,
                t.reqid = this.addata.REQID),
                e && (t.count = e.VAL ? e.VAL.length : t.count,
                t.index = e.index);
                var i = [];
                for (var n in t)
                    i.push(n + "=" + t[n]);
                try {
                    goldlog.record("/yt/youkuplayer.fdl.ykplayer_extad", "EXP", i.join("&"), "H1509201103")
                } catch (t) {}
            }
        }], [{
            key: "sendPauseAdCUM",
            value: function(t) {
                var e = t.VAL[0].CUM;
                if (e)
                    for (var i = 0; i < e.length; i++)
                        o.default.sendlog(e[i].U)
            }
        }, {
            key: "sendPauseAdSUS",
            value: function(t) {
                var e = t.VAL[0].SUS;
                if (e)
                    for (var i = 0; i < e.length; i++)
                        o.default.sendlog(e[i].U)
            }
        }]),
        t
    }();
    exports.default = d
}
, function(t, exports, e) {
    "use strict";
    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    function n(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var s = function() {
        function t(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        return function(e, i, n) {
            return i && t(e.prototype, i),
            n && t(e, n),
            e
        }
    }()
      , a = e(3)
      , o = i(a)
      , r = e(5)
      , l = (i(r),
    Object.freeze({
        API: "https://pc.pay.youku.com/api/pay_info",
        preApi: "https://paypre.vip.youku.com/api/pay_info"
    }))
      , u = function() {
        function t() {
            n(this, t),
            this.TAG = "PAYInfo",
            this.param = {
                version: "1.0.0",
                channel: "h5@yk",
                utdid: o.default.cookie.getCookie("cna")
            },
            window.lib && (this.mtop = window.lib.mtop || {},
            this.mtop.config && (this.mtop.config.prefix = o.default.isPre ? "pre-acs" : "acs",
            this.mtop.config.subDomain = "",
            this.mtop.config.mainDomain = "youku.com"))
        }
        return s(t, [{
            key: "_buildReqUrl",
            value: function() {
                var t = l.preApi;
                return t += "?" + o.default.urlParameter(this.param)
            }
        }, {
            key: "getData",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (!t.videoId)
                    return void (t.failCb && t.failCb());
                this.param.videoId = t.videoId,
                t.scene && (this.param.scene = t.scene || []),
                t.place && (this.param.place = t.place || "");
                var e = {
                    v: "1.0",
                    appKey: 24679788,
                    ecode: 0,
                    type: "get",
                    dataType: "jsonp"
                };
                e.api = "mtop.alidme.xgou.payinfo",
                e.data = {
                    req: JSON.stringify(this.param)
                },
                this.mtop.H5Request(e, function(e) {
                    if (e.data && e.data.playerAttrs) {
                        var i = e.data.playerAttrs;
                        i = {
                            result: i
                        },
                        console.log("PAYInfo=>", i),
                        t.successCb && t.successCb(i)
                    } else
                        t.failCb && t.failCb()
                }, function(e) {
                    t.failCb && t.failCb()
                })
            }
        }]),
        t
    }();
    exports.default = u
}
, function(t, exports) {
    "use strict";
    function e() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        /youku|youku_hd/i.test(navigator.userAgent) && "object" === i(window.WindVane) ? /iphone|ipod|ipad/i.test(navigator.userAgent) ? (t.url = "youku://openWVH5?url=" + t.url,
        window.WindVane.call("DYKBaseJSBridge", "nativeOpen", t, function(t) {}, function() {
            location.href = t.url
        })) : window.WindVane.call("WVPopLayer", "navToUrl", t, function(t) {}, function() {
            window.WindVane.call("WVLoadBridge", "loadUrl", t, function() {}, function() {
                location.href = t.url
            })
        }) : location.href = t.url
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    ;
    exports.default = e
}
, function(t, exports, e) {
    "use strict";
    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    function n(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var s = function() {
        function t(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        return function(e, i, n) {
            return i && t(e.prototype, i),
            n && t(e, n),
            e
        }
    }()
      , a = e(4)
      , o = e(1)
      , r = i(o)
      , l = e(25)
      , u = i(l)
      , d = e(13)
      , h = i(d)
      , c = function() {
        function t(e, i, s) {
            n(this, t),
            this.adDom = e,
            this.pauseDom = i,
            this.adBtns = {},
            this.pauseBtns = {},
            this._createAdDom(),
            this._createPauseDomAndBindEvt(),
            this._emitter = new r.default,
            this.lastTime = 0,
            this.num = 0,
            this._reporter = new h.default(e,null,{},s),
            this.counter = 0
        }
        return s(t, [{
            key: "_createAdDom",
            value: function() {
                var t = a.util.createElement("x-advert-info");
                t.setAttribute("data-spm", "x-advert-skip"),
                this.skipDom = a.util.createElement("x-advert-skip"),
                this.skipDom.innerHTML = '<div class="x-advert-txt">跳过广告</div><div class="x-mask">';
                var e = a.util.createElement("x-advert-countdown");
                e.innerHTML = ' <div class="x-advert-txt">广告 <span class="x-advert-sec"></span> 秒</div><div class="x-mask"></div>',
                t.appendChild(e),
                t.appendChild(this.skipDom),
                this.adDom.appendChild(t);
                var i = a.util.createElement("x-advert-detail");
                i.innerHTML = '<div class="x-advert-txt">详细了解<span class="x-ico-detail x-iconmode"></span></div><div class="x-mask"></div>',
                this.adDom.appendChild(i),
                this.adBtns.skipBtn = a.util.get(".x-advert-txt", this.skipDom)[0],
                this.adBtns.skipBtn.setAttribute("data-spm", "show"),
                this.adBtns.timeNum = a.util.get(".x-advert-sec", e)[0],
                this.adBtns.detailBtn = a.util.get(".x-advert-txt", i)[0]
            }
        }, {
            key: "_createPauseDomAndBindEvt",
            value: function() {
                var t = this;
                this.pauseBtns.content = a.util.createElement("x-pause-content"),
                this.pauseBtns.closeBtn = a.util.createElement("x-pause-close"),
                this.pauseBtns.adtipBtn = a.util.createElement("x-pause-adtip"),
                this.pauseDom.appendChild(this.pauseBtns.content),
                this.pauseDom.appendChild(this.pauseBtns.closeBtn),
                this.pauseDom.appendChild(this.pauseBtns.adtipBtn),
                a.util.addEventListenerHander(this.pauseBtns.closeBtn, "touchend", function() {
                    a.util.hide(t.pauseDom)
                }),
                a.util.addEventListenerHander(this.pauseBtns.content, "click", function(e) {
                    t._emitter.emit("pauseAdClicked", t._pauseAdInfo),
                    (0,
                    u.default)({
                        url: e.target.getAttribute("href")
                    })
                })
            }
        }, {
            key: "_fSkipAd",
            value: function(t) {
                var e = a.util.getURlKey("refer", window.location.href) || "";
                if (this._emitter.emit("adpause"),
                this._reporter.sendCrmCLKLog({
                    crm_scm: this.actionParams.scm,
                    scm: this.actionParams.scm,
                    en_spm: this.actionParams.spm,
                    pageurl: window.location.href,
                    spm: "a2h0j.10182321.x-advert-skip.show"
                }),
                this.payUrl)
                    return void (0,
                    u.default)({
                        url: this.payUrl
                    });
                var i = "https://h5.vip.youku.com/cashdesk?type=vip&tags=adpause&refer=" + e;
                window.__INITIAL_DATA__ && window.__INITIAL_DATA__.videoMap && window.__INITIAL_DATA__.videoMap.videoId && (i += "&en_vid=" + window.__INITIAL_DATA__.videoMap.videoId + "&en_sid=" + (window.__INITIAL_DATA__.videoMap.showId || ""));
                var n = "https://activity.youku.com/app/ykvip_rax/yk-vip-cashier-plato/pages/index?h5params=%7B%22pageKey%22%3A%22STANDARDRENDER_YOUKU%22%2C%22tags%22%3A%22adpause_crm%22%7D";
                window.__INITIAL_DATA__ && window.__INITIAL_DATA__.videoMap && window.__INITIAL_DATA__.videoMap.videoId && (n += "&en_vid=" + window.__INITIAL_DATA__.videoMap.videoId + "&en_sid=" + (window.__INITIAL_DATA__.videoMap.showId || "")),
                (0,
                u.default)({
                    url: n
                })
            }
        }, {
            key: "_knowDetail",
            value: function() {
                var t = this.adInfo[this.num].CU;
                t && (this._emitter.emit("adpause"),
                this._emitter.emit("addetail", this.num),
                (0,
                u.default)({
                    url: t
                }))
            }
        }, {
            key: "_bindEvent",
            value: function() {
                this.ifEvent || (this.ifEvent = !0,
                this.e = {
                    skipAd: this._fSkipAd.bind(this),
                    knowDetail: this._knowDetail.bind(this)
                },
                a.util.addEventListenerHander(this.adBtns.skipBtn, "touchend", this.e.skipAd),
                a.util.addEventListenerHander(this.adBtns.detailBtn, "touchend", this.e.knowDetail))
            }
        }, {
            key: "setAdInfo",
            value: function(t) {
                this.adInfo = t.VAL,
                this.totalTime = t.totalTime,
                this.adBtns.timeNum.innerHTML = parseInt(this.totalTime),
                this.actionParams = t.actionParams || {},
                t.payText && (this.adBtns.skipBtn.innerHTML = t.payText),
                t.payUrl && (this.payUrl = t.payUrl),
                this._bindEvent()
            }
        }, {
            key: "reset",
            value: function() {
                this.adInfo = null,
                this.totalTime = 0,
                this.lastTime = 0,
                this.num = 0
            }
        }, {
            key: "hide",
            value: function() {
                a.util.hide(this.adDom)
            }
        }, {
            key: "show",
            value: function() {
                0 === this.counter && this._reporter.sendCrmExpLog({
                    crm_scm: this.actionParams.scm,
                    scm: this.actionParams.scm,
                    en_spm: this.actionParams.spm,
                    pageurl: window.location.href,
                    spm: "a2h0j.10182321.x-advert-skip.show"
                }),
                a.util.show(this.adDom),
                this.counter++
            }
        }, {
            key: "showPauseAd",
            value: function(t) {
                this._pauseAdInfo = t;
                var e = t.VAL[0];
                if (e) {
                    this.pauseBtns.content.innerHTML = '<img src="' + e.RS + '" href="' + e.CU + '"/>';
                    var i = this.pauseBtns.content.querySelector("img")
                      , n = window.innerWidth
                      , s = window.innerHeight
                      , o = .7 * n
                      , r = .7 * n * (430 / 600);
                    n / s > 600 / 430 && (o = .7 * s * (600 / 430),
                    r = .7 * s),
                    i.style.width = o + "px",
                    i.style.height = r + "px",
                    this.pauseDom.style.left = (n - o) / 2 + "px",
                    this.pauseDom.style.top = (s - r) / 2 + "px",
                    a.util.show(this.pauseDom)
                }
            }
        }, {
            key: "hidePauseAd",
            value: function() {
                a.util.hide(this.pauseDom)
            }
        }, {
            key: "update",
            value: function(t, e) {
                return this.num = e,
                t >= this.totalTime ? void this.hide() : void (this.lastTime > 0 && t - this.lastTime < .5 || (this.lastTime = t,
                this.adBtns.timeNum.innerHTML = parseInt(this.totalTime - t)))
            }
        }]),
        t
    }();
    exports.default = c
}
, function(t, exports, e) {
    "use strict";
    function i(t) {
        if (t && t.__esModule)
            return t;
        var e = {};
        if (null != t)
            for (var i in t)
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return e.default = t,
        e
    }
    function n(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    function s(t, e) {
        var i = new f.default(location.href.split("#")[0]);
        if (!U)
            for (var n in i.params)
                t.params.hasOwnProperty(n) || (t.params[n] = i.params[n]);
        if ("object" === ("undefined" == typeof e ? "undefined" : h(e)))
            for (var s in e)
                "number" == typeof e[s] ? t.params[s] = "" + e[s] : "function" == typeof e[s] ? t.params[s] = "" : t.params[s] = e[s];
        return t
    }
    function a(t, e) {
        return e ? void (location.href = t) : (R || (R = y.createElement("iframe"),
        R.id = "callapp_iframe_" + Date.now(),
        R.frameborder = "0",
        R.style.cssText = "display:none;border:0;width:0;height:0;",
        y.body.appendChild(R)),
        void (R.src = t))
    }
    function o(t, e) {
        e !== !1 && e === !0 ? top.location.replace(t) : top.location.href = t
    }
    function r() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        x = !0;
        var e = t.params
          , i = /auto/i.test(e.source);
        if (B.restore() && i)
            return void B.clear();
        i && (e.universalRedirect = window.location.href,
        B.save());
        var n = e.universalRedirect || "";
        n && (n = new f.default(n)),
        t.exdParams && n && s(n, t.exdParams),
        l(n),
        n = n.toString(),
        e.fallback_url = n,
        e.fua = /Safari\/\d+(\.\d+)*$/.test(navigator.userAgent) ? "safari" : "other",
        e.special = 1,
        e.ts = (new Date).getTime(),
        e.action = e.action ? e.action : "play";
        var a = new f.default(t.universalLink || C);
        s(a, e),
        t.exdParams && s(a, t.exdParams),
        l(a),
        o(N.dealUrl(a))
    }
    function l(t) {
        if (t instanceof f.default)
            for (var e in t._params)
                null !== t.params[e] && "undefined" !== t.params[e] && "" !== t.params[e] || delete t.params[e]
    }
    function u(t) {
        var e = document.cookie.match(RegExp("(^| )" + t + "=([^;]*)(;|$)"));
        return null !== e ? unescape(e[2]) : null
    }
    function d() {
        return T ? "youkuapp" : k ? "weixin" : P ? "weibo" : S ? "uc" : "other"
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
      , c = e(19)
      , f = n(c)
      , p = e(8)
      , m = i(p)
      , v = e(39)
      , _ = n(v)
      , y = window.document
      , g = window.navigator.userAgent
      , b = m.os
      , w = m.params
      , A = m.browser
      , E = m.os.isIOS ? 2500 : 3e3
      , T = /youku/i.test(g)
      , k = /microMessenger/i.test(g)
      , P = /weibo/i.test(g)
      , S = /ucbrowser/i.test(g)
      , I = /MQQBrowser/i.test(g)
      , D = "com.youku.phone"
      , L = /iPad/.test(navigator.userAgent) ? "youkuhd://" : "youku://"
      , C = "//acz-jump.youku.com/wow/ykpage/act/ulink"
      , O = "//a.app.qq.com/o/simple.jsp?pkgname=com.youku.phone"
      , x = !1
      , U = ""
      , N = {
        gotoApp: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , e = u("cna");
            t.pathname = t.pathname ? t.pathname : "splash",
            t.params.action = t.params.action ? t.params.action : "",
            t.params.ua = t.banParams && t.banParams.ua ? "" : g,
            t.params.refer = w.refer ? w.refer : t.params.refer,
            t.params.is_h5 = w.is_h5 || "1",
            t.params.ccts = t.banParams && t.banParams.ccts ? "" : (new Date).getTime(),
            t.params.cookieid = e || "",
            t.params.refer_url = location.href,
            t.params.tuid = w.tuid ? w.tuid : t.params.tuid,
            U = t.stopTransfer;
            var i = new f.default(L + t.pathname);
            "/" === i.pathname && (i.pathname = ""),
            t.params && s(i, t.params),
            l(i);
            var n = "";
            t.whiteList && t.whiteList.length > 0 && t.whiteList.forEach(function(t) {
                new RegExp(t).test(g) && (n = !0)
            });
            var d = "";
            t.storeList && t.storeList.length > 0 && t.storeList.forEach(function(t) {
                new RegExp(t).test(g) && (d = !0)
            });
            var h = b.isAndroid && A.isChrome && !A.isWebview
              , c = b.isAndroid && !!g.match(/samsung/i) && b.version.gte("4.3") && b.version.lt("4.5");
            !n && (h || c || t.forceIntent) && (i.hash = "Intent;scheme=" + i.protocol.replace(":", "") + ";package=" + D + ";end",
            i.protocol = "intent:");
            var p = b.isIPhone && b.version.gte("9.0");
            return M.track(t.params),
            n ? a(N.dealUrl(i), p) : d && b.isIOS ? o("https://itunes.apple.com/app/id336141475") : k ? b.isIPhone ? p && t.guide ? r(t) : o("https://itunes.apple.com/app/id336141475") : o(O + "&android_schema=" + encodeURIComponent(i.toString())) : !p || t.universalLinkState === !1 || S || I ? "intent:" === i.protocol ? setTimeout(function() {
                o(N.dealUrl(i))
            }, 100) : a(N.dealUrl(i), p) : r(t),
            N.dealUrl(i)
        },
        download: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            if (t.downloadUrl) {
                var e = new f.default(t.downloadUrl);
                t.exdParams && s(e, t.exdParams),
                l(e),
                e = e.toString(),
                o(e, t.replace)
            }
        },
        gotoPage: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            if (t = (0,
            _.default)({
                timeout: E
            }, t),
            t.targetUrl = N.gotoApp(t),
            x)
                return t.targetUrl;
            if (t.isNeedDownload)
                var e = window.setTimeout(function() {
                    clearTimeout(e),
                    N.download(t)
                }, t.timeout);
            else if (t.uri)
                var i = window.setTimeout(function() {
                    clearTimeout(i),
                    o(t.uri, t.replace)
                }, t.timeout);
            return t.targetUrl
        },
        dealUrl: function(t) {
            if (t._params.openHalfUrl && t._params.openHalfUrl.length) {
                var e = t._params.openHalfUrl;
                return delete t._params.openHalfUrl,
                t.toString() + "&openHalfUrl=" + e
            }
            return t.toString()
        }
    }
      , M = {
        track: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , e = function() {
                return b.isIOS ? "ios" : b.isAndroid ? "android" : "other"
            }()
              , i = {
                page: t.pagetype || "defaultPage",
                source: t.source || "defaultSource",
                shortua: d(),
                os: e
            };
            this.send(i)
        },
        send: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , e = "";
            for (var i in t)
                e += "&" + i + "=" + t[i];
            e && (e = e.substring(1, e.length));
            try {
                goldlog.record("/yt/youkuphoneplaypage.callapp.callappLog", "CLK", e, "H1535059694")
            } catch (t) {
                var n = "//gm.mmstat.com/yt/youkuphoneplaypage.callapp.callappLog?" + e + "&r_=" + (new Date).valueOf();
                (new Image).src = n
            }
        }
    }
      , R = void 0
      , B = {
        key: "_h5_app_launcher_ios9_timestamp",
        save: function() {
            localStorage.setItem(this.key, (new Date).getTime())
        },
        restore: function() {
            return parseInt(localStorage.getItem(this.key) || 0)
        },
        clear: function() {
            localStorage.removeItem(this.key)
        }
    };
    exports.default = N
}
, function(t, exports, e) {
    "use strict";
    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    function n(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var s = function() {
        function t(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        return function(e, i, n) {
            return i && t(e.prototype, i),
            n && t(e, n),
            e
        }
    }()
      , a = e(4)
      , o = e(1)
      , r = i(o)
      , l = function() {
        function t(e, i) {
            n(this, t),
            this.changeDom = e,
            this.hdshowDom = i,
            this._createDom(),
            this._emitter = new r.default,
            this.ifEvent = !1,
            this.e = {
                showHd: this.showHd.bind(this),
                changeHd: this.changeHd.bind(this),
                changeLang: this.changeLang.bind(this)
            }
        }
        return s(t, [{
            key: "init",
            value: function(t, e, i, n, s) {
                this.lang = t || "",
                this.hd = e || "",
                this.langList = i || [],
                this.hdList = n || [],
                this.player = s,
                this._conversionHd(),
                this._bindEvent()
            }
        }, {
            key: "_bindEvent",
            value: function() {
                this.ifEvent || (this.ifEvent = !0,
                a.util.addEventListenerHander(this.changeDom, "click", this.e.showHd),
                a.util.addEventListenerHander(this.hdUl, "click", this.e.changeHd),
                a.util.addEventListenerHander(this.langUl, "click", this.e.changeLang))
            }
        }, {
            key: "_createDom",
            value: function() {
                this.hdListTitle = a.util.createElement("x-hdshowlist-title", "", "清晰度/语言", "span"),
                this.hdListItems = a.util.createElement("x-hdshowlist-items", "", "", "div"),
                this.hdUl = a.util.createElement("left", "", "", "ul"),
                this.langUl = a.util.createElement("", "", "", "ul"),
                this.hdListItems.appendChild(this.hdUl),
                this.hdListItems.appendChild(this.langUl),
                this.hdshowDom.style.zIndex = 71,
                this.hdshowDom.appendChild(this.hdListTitle),
                this.hdshowDom.appendChild(this.hdListItems)
            }
        }, {
            key: "_conversionHd",
            value: function() {
                this.langCh = "",
                this.hdCh = "";
                var t = null
                  , e = this.hdList.filter(function(e, i, n) {
                    var s = !0;
                    return "标清" === e.hdname && (s = !1,
                    t ? "3gphd" === e.hdcode && (t = e) : t = e),
                    s
                });
                t && e.unshift(t),
                this.hdList = e,
                this._chooseHd(),
                this._chooseLang(),
                this.changeDom.innerHTML = this.hdCh + "/" + this.langCh,
                this.showBtn()
            }
        }, {
            key: "_chooseHd",
            value: function() {
                var t = this;
                this.hdUl.innerHTML = "",
                this.hdList.forEach(function(e) {
                    var i = a.util.createElement("", "", e.hdname, "li");
                    i.setAttribute("hdcode", e.hdcode),
                    e.hdcode === t.hd && (t.hdCh = e.hdname,
                    i.setAttribute("class", "current")),
                    t.hdUl.appendChild(i)
                })
            }
        }, {
            key: "_chooseLang",
            value: function() {
                var t = this;
                this.langUl.innerHTML = "",
                this.langList.forEach(function(e) {
                    var i = a.util.createElement("", "", e.lang, "li");
                    i.setAttribute("langcode", e.langcode),
                    e.langcode === t.lang && (t.langCh = e.lang,
                    i.setAttribute("class", "current")),
                    t.langUl.appendChild(i)
                })
            }
        }, {
            key: "changeHd",
            value: function(t) {
                if (t.target.getAttribute("hdcode") && t.target.getAttribute("hdcode") !== this.hd) {
                    var e = this.player.changeHd(t.target.getAttribute("hdcode"), function(t) {});
                    e && (this.hd = t.target.getAttribute("hdcode"),
                    this._chooseHd(),
                    this.hideHd(),
                    this.changeDom.innerHTML = this.hdCh + "/" + this.langCh)
                }
            }
        }, {
            key: "changeLang",
            value: function(t) {
                if (t.target.getAttribute("langcode") && t.target.getAttribute("langcode") !== this.lang) {
                    var e = this.player.changeLanguage(t.target.getAttribute("langcode"), function() {});
                    e && (this.lang = t.target.getAttribute("langcode"),
                    this._chooseLang(),
                    this.hideHd(),
                    this.changeDom.innerHTML = this.hdCh + "/" + this.langCh)
                }
            }
        }, {
            key: "showHd",
            value: function() {
                a.util.show(this.hdshowDom)
            }
        }, {
            key: "hideHd",
            value: function() {
                a.util.hide(this.hdshowDom)
            }
        }, {
            key: "showBtn",
            value: function() {
                a.util.show(this.changeDom)
            }
        }, {
            key: "hideBtn",
            value: function() {
                a.util.hide(this.changeDom)
            }
        }]),
        t
    }();
    exports.default = l
}
, function(t, exports, e) {
    "use strict";
    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    function n(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var s = function() {
        function t(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        return function(e, i, n) {
            return i && t(e.prototype, i),
            n && t(e, n),
            e
        }
    }()
      , a = e(4)
      , o = e(1)
      , r = i(o)
      , l = e(20)
      , u = i(l)
      , d = e(18)
      , h = i(d)
      , c = e(2)
      , f = e(15)
      , p = i(f)
      , m = function() {
        function t(e, i, s) {
            n(this, t),
            this.TAG = "NoticePannel",
            this.parentDom = e,
            this._player = i;
            var a = i.config.limitConfig || {};
            this.uiConfig = s,
            this.source = {
                end: a.playendSource ? a.playendSource : "playerend",
                chall: a.playwatchall ? a.playwatchall : "playerwatchall"
            },
            this.downloadUrl = c.browser.isAndroid ? "https://youku-cpms-cdn.youku.com/apk/6d43cbf537192324/latest-64.apk" : "https://itunes.apple.com/cn/app/id336141475?mt=8",
            this.btns = {},
            this.e = {},
            this.platformDesc = "优酷",
            i && i._platform && i._platform.desc && (this.platformDesc = i._platform.desc),
            this.callAppOpts = {
                isNeedDownload: !0,
                timeout: 2e3,
                downloadUrl: "",
                uri: "",
                replace: !1,
                params: {
                    action: "",
                    vid: "",
                    source: "",
                    refer: "",
                    universalLinkState: !1
                },
                pathname: "splash",
                exdParams: {}
            },
            this._createDom(),
            this._emitter = new r.default,
            this.canOpenApp = {
                android: "MQQBrowser|ucbrowser|weibo|micromessenger|AliApp|article",
                ios: "MQQBrowser|ucbrowser|weibo|QHBrowser|micromessenger|AliApp|article",
                noIntent: "MQQBrowser|ucbrowser|baidubrowser|sogouMobilebrowser|mxbrowser|LieBao|360 APhone|windvane|youku",
                iosNoUN: "Crios|Fxios|baidubrowser|sogouMobilebrowser|QHBrowser|Mxios"
            },
            this._bindEvent()
        }
        return s(t, [{
            key: "_createDom",
            value: function() {
                this.errorTipDom = a.util.createElement("x-errortip");
                var t = a.util.createElement("x-youkulogo x-iconmode");
                this.btns.errorNote = a.util.createElement("", "", "视频出错请重试", "span"),
                this.btns.retryBtn = a.util.createElement("x-error-retry", "", '<i class="x-iconmode"></i>重试'),
                this.timerNoteDom = a.util.createElement("wait-time", "", '<b class="run-time"> </b>秒后重新连接... </p>', "p"),
                this.errorTipDom.appendChild(t),
                this.errorTipDom.appendChild(this.btns.errorNote),
                this.errorTipDom.appendChild(this.btns.retryBtn),
                this.errorTipDom.appendChild(this.timerNoteDom),
                this.timerDom = this.timerNoteDom.getElementsByClassName("run-time")[0],
                this.limitTipDom = a.util.createElement("x-limittip");
                var e = a.util.createElement("x-youkulogo x-iconmode");
                this.btns.limitNote = a.util.createElement("", "", "本页面仅支持试看50分钟，更多内容尽在" + this.platformDesc + "App", "span"),
                this.btns.limitOpen = a.util.createElement("x-openappbtn", "", "打开app，观看完整视频", "button"),
                this.limitTipDom.appendChild(e),
                this.limitTipDom.appendChild(this.btns.limitNote),
                this.limitTipDom.appendChild(this.btns.limitOpen);
                var i = a.util.createElement("x-afteropen");
                this.btns.limitDown = a.util.createElement("x-downApp", "", "下载App", "button"),
                this.btns.limitPlay = a.util.createElement("playagain", "", "重新试看", "button"),
                i.appendChild(this.btns.limitDown),
                i.appendChild(this.btns.limitPlay),
                this.limitTipDom.appendChild(i),
                this.btns.limitAfter = i,
                this.passwordDom = a.util.createElement("x-password-panel"),
                this.btns.passwordNote = a.util.createElement("", "", "该视频已被加密，请输入密码", "span"),
                this.btns.passwordInput = a.util.createElement("", "", "", "input"),
                this.btns.passwordInput.type = "password",
                this.btns.passwordInput.placeholder = "请输入视频密码",
                this.btns.passwordInput.required = !0,
                this.btns.okBtn = a.util.createElement("", "", "", "button"),
                this.btns.okBtn.innerHTML = "确定",
                this.passwordDom.appendChild(this.btns.passwordNote),
                this.passwordDom.appendChild(this.btns.passwordInput),
                this.passwordDom.appendChild(this.btns.okBtn),
                this.hintDom = a.util.createElement("x-hint-app"),
                this.btns.hintOpen = a.util.createElement("x-hint-openapp tudou-skin", "", "打开" + this.platformDesc + "APP观看完整版", "button"),
                this.btns.hintretry = a.util.createElement("x-retry", "", "重新观看", "span"),
                this.hintDom.appendChild(this.btns.hintOpen),
                this.hintDom.appendChild(this.btns.hintretry),
                this.parentDom.appendChild(this.errorTipDom),
                this.parentDom.appendChild(this.limitTipDom),
                this.parentDom.appendChild(this.passwordDom),
                this.parentDom.appendChild(this.hintDom)
            }
        }, {
            key: "_bindEvent",
            value: function() {
                this.ifEvent || (this.ifEvent = !0,
                this.e = {
                    submit: this.submitPassword.bind(this),
                    retry: this.retry.bind(this),
                    openApp: this.openApp.bind(this),
                    downApp: this.downApp.bind(this),
                    replay: this.replay.bind(this),
                    fullPay: this.fullPay.bind(this),
                    hintOpen: this.hintOpen.bind(this)
                },
                a.util.addEventListenerHander(this.btns.okBtn, "touchend", this.e.submit),
                a.util.addEventListenerHander(this.btns.retryBtn, "touchend", this.e.retry),
                a.util.addEventListenerHander(this.btns.limitOpen, "touchend", this.e.hintOpen),
                a.util.addEventListenerHander(this.btns.limitDown, "click", this.e.downApp),
                a.util.addEventListenerHander(this.btns.limitPlay, "click", this.e.replay),
                a.util.addEventListenerHander(this.btns.hintretry, "click", this.e.replay),
                a.util.addEventListenerHander(this.btns.hintOpen, "touchend", this.e.hintOpen))
            }
        }, {
            key: "initData",
            value: function(t, e) {
                this.vid = t,
                this.encodeid = e
            }
        }, {
            key: "showDrmLimit",
            value: function(t) {
                t && (this.btns.limitOpen.innerHTML = t,
                this.btns.limitNote.innerHTML = "抱歉，因版权原因无法观看此视频"),
                a.util.show(this.limitTipDom),
                a.util.show(this.parentDom)
            }
        }, {
            key: "showLimit",
            value: function(t) {
                this._player.sendGoldLog("/yt/youkuphoneplaypage.myoukuinteraction.show_to_player", "EXP", "show_type=showappreplay", "H1567382961"),
                this._player.sendGoldLog("/yt/youkuphoneplaypage.myoukuinteraction.show_to_player", "EXP", "show_type=showappwatchall", "H1567382961"),
                a.util.show(this.hintDom),
                a.util.show(this.parentDom)
            }
        }, {
            key: "hideLimit",
            value: function() {
                a.util.hide(this.parentDom),
                a.util.hide(this.limitTipDom),
                a.util.hide(this.hintDom),
                a.util.hide(this.btns.limitAfter)
            }
        }, {
            key: "showFullLimit",
            value: function() {
                this._player.sendGoldLog("/yt/youkuphoneplaypage.myoukuinteraction.show_to_player", "EXP", "show_type=showwatchall", "H1567382961")
            }
        }, {
            key: "hideFullLimit",
            value: function() {}
        }, {
            key: "showError",
            value: function(t, e, i) {
                return t && (this.btns.errorNote.innerHTML = t),
                a.util.show(this.parentDom),
                a.util.show(this.errorTipDom),
                this.uiConfig && this.uiConfig.event && this.uiConfig.event.onError && this.uiConfig.event.onError({
                    msg: "限制播放"
                }),
                i ? (this.timeCount = 1e3 * parseInt(i, 10),
                a.util.show(this.timerNoteDom),
                a.util.hide(this.btns.retryBtn),
                void this.createTimer()) : (a.util.hide(this.timerNoteDom),
                void (e ? a.util.hide(this.btns.retryBtn) : a.util.show(this.btns.retryBtn)))
            }
        }, {
            key: "createTimer",
            value: function() {
                if (this.timerDom.innerHTML = parseInt(this.timeCount / 1e3, 10),
                this.timeCount > 0) {
                    this.timeCount -= 300;
                    var t = this;
                    setTimeout(function() {
                        t.createTimer()
                    }, 300)
                } else
                    a.util.hide(this.timerNoteDom),
                    a.util.show(this.btns.retryBtn)
            }
        }, {
            key: "hideError",
            value: function() {
                a.util.hide(this.parentDom),
                a.util.hide(this.errorTipDom)
            }
        }, {
            key: "showPassword",
            value: function(t) {
                this.btns.passwordInput.disabled = !1,
                this.btns.passwordInput.readOnly = !1,
                this.btns.passwordInput.value = "",
                this.passwordIfClick = !1,
                t && (this.btns.passwordInput.placeholder = t),
                a.util.show(this.parentDom),
                a.util.show(this.passwordDom)
            }
        }, {
            key: "hidePassword",
            value: function() {
                a.util.hide(this.parentDom),
                a.util.hide(this.passwordDom)
            }
        }, {
            key: "submitPassword",
            value: function() {
                if (!this.passwordIfClick) {
                    this.passwordIfClick = !0;
                    var t = this.btns.passwordInput.value;
                    if ("" == t)
                        this.passwordIfClick = !1;
                    else {
                        this.btns.passwordInput.disabled = !0,
                        this.btns.passwordInput.readOnly = !0;
                        var e = {};
                        e.password = t,
                        this._emitter.emit("retry", e),
                        this.hidePassword()
                    }
                }
            }
        }, {
            key: "hintOpen",
            value: function() {
                (0,
                p.default)({
                    spmC: "player",
                    spm: "a2h0j.10182321.player.end",
                    videoId: window.vid || ""
                }, "CLK"),
                this._player.sendGoldLog("/yt/youkuphoneplaypage.myoukuinteraction.click_to_player", "CLK", "click_type=openappwatchall", "H1568306482"),
                this.callOpenApp(this.source.end, this.downloadUrl)
            }
        }, {
            key: "fullPay",
            value: function() {
                this._player.sendGoldLog("/yt/youkuphoneplaypage.myoukuinteraction.click_to_player", "CLK", "click_type=gowatchall", "H1568306482"),
                this.callOpenApp(this.source.chall, this.downloadUrl)
            }
        }, {
            key: "callOpenApp",
            value: function(t, e) {
                if (this.callAppOpts) {
                    if (c.browser.isYouku)
                        return this._player.pause(),
                        void h.default.play({
                            vid: this.encodeid
                        });
                    this.callAppOpts.params.source = t,
                    this.vid && (this.callAppOpts.universalLinkState = !0,
                    this.callAppOpts.exdParams.position = t,
                    this.callAppOpts.params.vid = this.vid,
                    this.callAppOpts.params.action = "play",
                    this.callAppOpts.pathname = "play",
                    this.callAppOpts.refer = location.href),
                    e && (this.callAppOpts.downloadUrl = e),
                    window.vid && (this.callAppOpts.params.source = "a2h0j.10182321." + this.callAppOpts.params.source),
                    window.vData && (this.callAppOpts.params.data_vdotype = window.toFind ? "short" : "long",
                    this.callAppOpts.params.data_logver = "v2"),
                    this.exdUrl ? (this.callAppOpts.downloadUrl = this.exdUrl,
                    u.default.download(this.callAppOpts)) : u.default.gotoPage(this.callAppOpts)
                }
            }
        }, {
            key: "openApp",
            value: function() {
                if (a.Log.i(this.TAG, " openApp():" + this.ifopenApp),
                !this.ifopenApp) {
                    this.ifopenApp = !0;
                    var t = this._sourceconfig ? this._sourceconfig + "1" : "mplaypage12";
                    this.callOpenApp(t);
                    var e = this;
                    setTimeout(function() {
                        a.util.hide(e.btns.limitOpen),
                        a.util.show(e.btns.limitAfter),
                        e.ifopenApp = !1
                    }, 1e3)
                }
            }
        }, {
            key: "downApp",
            value: function() {
                location.href = "https://h5.m.youku.com//ju/download.html?spm=a1z3i.a4.0.0.5311ca28QkO2Em&from=xianboend"
            }
        }, {
            key: "retry",
            value: function() {
                var t = {};
                this._emitter.emit("retry", t),
                this.hideError()
            }
        }, {
            key: "replay",
            value: function() {
                this._player.sendGoldLog("/yt/youkuphoneplaypage.myoukuinteraction.click_to_player", "CLK", "click_type=openappreplay", "H1568306482"),
                this._emitter.emit("replay"),
                this.hideError(),
                this.hideLimit()
            }
        }, {
            key: "getQueryString",
            value: function(t) {
                var e = new RegExp("(^|&)" + t + "=([^&]*)(&|$)")
                  , i = window.location.search.substr(1).match(e);
                return null != i ? unescape(i[2]) : null
            }
        }, {
            key: "callApp",
            value: function(t, e, i) {
                var n = this.getQueryString("refer") || ""
                  , s = this.getQueryString("tuid") || ""
                  , o = a.util.cookie.getCookie("__ysuid")
                  , r = "mplaypage2";
                t && (r = t);
                var l = "";
                i && (l = "|" + i);
                var u = encodeURIComponent(window.navigator.userAgent)
                  , d = "youku://play?vid=" + this.vid + "&refer=" + n + "&tuid=" + s + "&ua=" + u + "&source=" + r + "&cookieid=" + o + l
                  , h = new RegExp(this.canOpenApp.noIntent,"i");
                if (null != window.navigator.userAgent.match(/OS 9|OS 1\d{1,}/i) || 2 == e && null != window.navigator.userAgent.match(/OS/i) && null != window.navigator.userAgent.match(/CriOS/i))
                    window.location.href = d;
                else {
                    var c = document.createElement("iframe");
                    c.height = 0,
                    c.width = 0,
                    c.src = d,
                    document.body.appendChild(c),
                    setTimeout(function() {
                        if (0 == window.appLaunch && null != window.navigator.userAgent.match(/Android/i) && null == window.navigator.userAgent.match(h)) {
                            var t = "intent://play?vid=" + this.vid + "&refer=" + n + "&tuid=" + s + "&ua=" + u + "&source=" + r + "&cookieid=" + o + l + "#Intent;scheme=youku;package=com.youku.phone;end;";
                            window.location = t
                        }
                    }, 1e3)
                }
            }
        }]),
        t
    }();
    exports.default = m
}
, function(t, exports, e) {
    "use strict";
    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    function n(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var s = function() {
        function t(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        return function(e, i, n) {
            return i && t(e.prototype, i),
            n && t(e, n),
            e
        }
    }()
      , a = e(4)
      , o = e(1)
      , r = i(o)
      , l = e(25)
      , u = i(l)
      , d = e(76)
      , h = (i(d),
    e(20))
      , c = i(h)
      , f = e(13)
      , p = i(f)
      , m = e(2)
      , v = "//vip.youku.com/?c=xhr&a=h5_player_get_pay_info"
      , _ = "//cvip.youku.com/order/pay_info_h5"
      , y = a.util.getURlKey("refer", window.location.href) || ""
      , g = function() {
        function t(e, i) {
            n(this, t),
            this.parentDom = e,
            this._emitter = new r.default,
            this.e = {
                tryPlay: this.tryPlay.bind(this),
                openVip: this.openVip.bind(this)
            },
            this.platformDesc = "优酷",
            i && i._platform && i._platform.desc && (this.platformDesc = i._platform.desc),
            this._reporter = new p.default(e,null,{},i)
        }
        return s(t, [{
            key: "init",
            value: function(t, e, i, n, s) {
                this.videoInfo = t || {},
                this.trialInfo = e || null,
                this.payInfo = i || null,
                this.errorCode = n || "",
                this._createDom(),
                (!this.trialInfo || this.trialInfo && ("cannot" === this.trialInfo.type || parseInt(0 === this.trialInfo.time))) && (s && s.event && s.event.onError && s.event.onError({
                    msg: "限制播放"
                }),
                a.util.hide(this.retryDom)),
                this._organizeInfo(),
                this._bindEvent()
            }
        }, {
            key: "_bindEvent",
            value: function() {
                var t = this;
                this.ifEvent || (this.ifEvent = !0,
                this.tryBtn && a.util.addEventListenerHander(this.tryBtn, "touchend", function() {
                    t.openVip(0)
                }),
                this.openBtn && a.util.addEventListenerHander(this.openBtn, "touchend", function() {
                    t.openVip(1)
                }),
                a.util.addEventListenerHander(this.retryDom, "touchend", this.e.tryPlay))
            }
        }, {
            key: "_createDom",
            value: function() {
                var t = this;
                this.showTipDom = a.util.createElement("x-showtips-txt"),
                this.showTipDom.setAttribute("data-spm", "stopplayer"),
                this.infoDom = a.util.createElement("x-tips-title", "", "", "div"),
                this.showTipDom.appendChild(this.infoDom),
                this.payButtonList = [];
                var e = ""
                  , i = ""
                  , n = ""
                  , s = "";
                if (this.payInfo.vipPayInfo && this.payInfo.vipPayInfo.result && this.payInfo.vipPayInfo.result.pay_scenes) {
                    var o = this.payInfo.vipPayInfo.result.pay_scenes.scenes
                      , r = o.filter(function(t) {
                        return "trial_end" === t.scene
                    });
                    if (r && r.length > 0) {
                        var l = r[0];
                        l.components && l.components.forEach(function(a) {
                            if ("title" === a.code && (e = a.text),
                            "subtitle" === a.code && (i = a.text),
                            "logo" === a.code && (n = a.icon),
                            "ticket" === a.code && (s = a.text),
                            "button" === a.type) {
                                var o = a.action.params && a.action.params.replaceUrl || ""
                                  , r = /^http(s)?:\/\//i;
                                r.test(o) || (o = ""),
                                t.payButtonList.push({
                                    text: a.text,
                                    cornerText: a.superscript,
                                    activityCode: a.action.params.activity_code,
                                    spm: a.action.params.spm,
                                    scm: a.action.params.scm,
                                    products: a.action.params.products,
                                    action: a.action,
                                    cashierUrl: o,
                                    tagPrice: a.tagPrice,
                                    code: a.code
                                })
                            }
                        }),
                        this.payButtonList.forEach(function(n) {
                            n && n.action && "vod" === n.action.type && (e = "因版权要求，该内容仅限客户端观看",
                            i = "",
                            n.text = "立即打开" + t.platformDesc + "客户端观看")
                        }),
                        n && (this.parentDom.style.backgroundImage = "url(" + n + ")")
                    }
                } else
                    e = "播放加载较慢",
                    this.payButtonList.push({
                        text: "重新加载",
                        action: "refresh"
                    });
                e && (this.infoDom.innerHTML = e),
                i && (this.subInfoDom = a.util.createElement("x-tips-subTitle", "", i, "div"),
                this.showTipDom.appendChild(this.subInfoDom)),
                this.btnDom = a.util.createElement("x-showtips-btn"),
                this.payButtonList.length > 0 && this.payButtonList.forEach(function(e, i) {
                    if (0 === i) {
                        var n = 1 === t.payButtonList.length ? "x-btn x-btn-only " + ("svipButtonBuy" === e.code ? "svip" : "") : "x-btn x-btn-try " + ("svipButtonBuy" === e.code ? "svip" : "");
                        t.tryBtn = a.util.createElement(n, "", "", "div");
                        var s = 1 === t.payButtonList.length ? "x-btn-text x-btn-buy-text" : "x-btn-text";
                        t.tryBtnText = a.util.createElement(s, "", e.text, "div"),
                        t.originalPrice = a.util.createElement("original-price", "", e.tagPrice, "span"),
                        t.tryBtnText.appendChild(t.originalPrice),
                        t.tryBtnText.setAttribute("data-spm", "vipbuy"),
                        t.btnDom.appendChild(t.tryBtn),
                        t.tryBtn.appendChild(t.tryBtnText),
                        e.cornerText && (t.tryBtnCorner = a.util.createElement("x-btn-corner", "", e.cornerText, "i"),
                        t.tryBtn.appendChild(t.tryBtnCorner))
                    } else
                        1 === i && (t.openBtn = a.util.createElement("x-btn x-btn-buy  " + ("svipButtonBuy" === e.code ? "svip" : ""), "", "", "div"),
                        t.openBtnText = a.util.createElement("x-btn-text x-btn-buy-text", "", e.text, "div"),
                        t.btnDom.appendChild(t.openBtn),
                        t.openBtn.appendChild(t.openBtnText),
                        e.cornerText && (t.openBtnCorner = a.util.createElement("x-btn-corner", "", e.cornerText, "i"),
                        t.openBtn.appendChild(t.openBtnCorner)))
                }),
                this.showTipDom.appendChild(this.btnDom),
                this.retryDom = a.util.createElement("x-showtips-retry", "", '<img class="x-showtips-retry-img" src="https://img.alicdn.com/tfs/TB1V5bnloT1gK0jSZFrXXcNCXXa-54-54.png"><span class="x-showtips-retry-text">免费试看<span>', "div"),
                this.svipTicket = a.util.createElement("x-showtips-svipticket", "", s, "div"),
                this.parentDom.appendChild(this.svipTicket),
                this.parentDom.appendChild(this.showTipDom),
                this.parentDom.appendChild(this.retryDom)
            }
        }, {
            key: "_organizeInfo",
            value: function() {
                this.videoInfo && this.payInfo.ownChannelId && this._getOwnerPromptInfo()
            }
        }, {
            key: "_getOwnerPromptInfo",
            value: function() {
                var t = this
                  , e = _ + "?own_channel_id=" + this.payInfo.ownChannelId + "&video_id=" + this.videoInfo.id;
                a.util.getJsonp(e, function(e) {
                    if ("20000" === e.code && "success" === e.msg) {
                        var i = e.result.desc;
                        i = i.replace(/>/, "</em>").replace(/</, '<em class="x-type">'),
                        t.infoDom.innerHTML = a.util.htmlEncodeAll(e.result.desc),
                        t.buy_link || (t.buy_link = e.result.button_url + "&cburl=" + encodeURIComponent(location.href))
                    }
                }, function() {
                    console.log("获取自频道提示信息接口报错")
                })
            }
        }, {
            key: "_getMemberPromptInfo",
            value: function() {
                var t = this
                  , e = v + "&video_id=" + this.videoInfo.id;
                a.util.getJsonp(e, function(e) {
                    if ("20000" === e.code && "success" === e.msg) {
                        var i = e.result.product_desc;
                        i = i.replace(/>/, "</em>").replace(/</, '<em class="x-type">'),
                        t.infoDom.innerHTML = i,
                        t.buy_link || (t.buy_link = e.result.buy_link)
                    }
                }, function() {
                    console.log("获取会员提示信息接口报错")
                })
            }
        }, {
            key: "_getTradePromotion",
            value: function() {
                var t = this
                  , e = {
                    req: JSON.stringify({
                        biz: "youku.main.app",
                        subBiz: "player.web",
                        activityCode: "buy_h5",
                        products: [{
                            productId: 128,
                            skuId: 10
                        }],
                        args: {}
                    })
                }
                  , i = {
                    api: "mtop.youku.vip.vmp.readTradePromotion",
                    v: "1.0",
                    appKey: "24679788",
                    ecode: 0,
                    data: e,
                    jsonpIncPrefix: "h5player"
                };
                window.lib.mtop.config.mainDomain = "youku.com",
                window.lib.mtop.config.prefix = "acs",
                window.lib.mtop.config.subDomain = "";
                var n = window.lib.mtop.request(i)
                  , s = '开通<em class="x-type">优酷会员</em>看完整版';
                this.buy_link = "https://h5.vip.youku.com/cashdesk?type=vip&tags=h5playbox_001&refer=" + y + "&en_vid=" + (this.videoInfo && this.videoInfo.encodeid),
                window.__INITIAL_DATA__ && window.__INITIAL_DATA__.videoMap && window.__INITIAL_DATA__.videoMap.showId && (this.buy_link += "&en_sid=" + window.__INITIAL_DATA__.videoMap.showId),
                n.then(function(e) {
                    if (0 === e.retType && e.data && e.data.promotionResultDetailList) {
                        var i = e.data.promotionResultDetailList[0];
                        if (i) {
                            var n = i.promotionResultDetailList[0];
                            s += '<br/><em class="x-type">' + (n && (n.properties.cornerText || "")) + "</em>"
                        }
                    }
                    t.infoDom.innerHTML = s
                }).catch(function(e) {
                    t.infoDom.innerHTML = s
                })
            }
        }, {
            key: "show",
            value: function() {
                a.util.show(this.parentDom);
                var t = this.payButtonList && this.payButtonList[0];
                this._reporter.sendCrmExpLog({
                    crm_scm: t.scm,
                    scm: t.scm,
                    en_spm: t.spm,
                    pageurl: window.location.href,
                    spm: "a2h0j.10182321.stopplayer.vipbuy"
                })
            }
        }, {
            key: "tryPlay",
            value: function() {
                document.getElementsByClassName("x-showtips")[0].style.display = "none",
                this._emitter.emit("tryPlay");
                try {
                    goldlog.record("/yt/youkuphoneplaypage.click.vipplay ", "CLK", "", "GET")
                } catch (t) {}
            }
        }, {
            key: "openVip",
            value: function(t) {
                if (this.payButtonList && this.payButtonList.length > 0) {
                    var e = this.payButtonList[t]
                      , i = e.action;
                    if ("refresh" === i)
                        return void window.location.reload(!0);
                    var n = e.action.type;
                    if ("vod" !== n) {
                        var s = "https://h5.vip.youku.com/cashdesk?type=vip&tags=h5playbox_001" + (e.products ? "&productkeys=" + e.products.join(",") : "") + (e.activityCode ? "&activityCode=" + e.activityCode : "") + "&en_spm=" + e.spm + "&en_scm=" + e.scm + "&refer=" + y + "&en_vid=" + (this.videoInfo && this.videoInfo.encodeid);
                        window.__INITIAL_DATA__ && window.__INITIAL_DATA__.videoMap && window.__INITIAL_DATA__.videoMap.showId && (s += "&en_sid=" + window.__INITIAL_DATA__.videoMap.showId);
                        var a = e.cashierUrl || s;
                        (0,
                        u.default)({
                            url: a
                        })
                    } else {
                        var o = {
                            isNeedDownload: !0,
                            timeout: 2e3,
                            downloadUrl: "",
                            uri: "",
                            replace: !1,
                            params: {
                                action: "",
                                vid: "",
                                source: "",
                                refer: ""
                            },
                            pathname: "splash",
                            exdParams: {}
                        }
                          , r = "h5player_yongquan";
                        o.params.source = r,
                        this.videoInfo && (o.universalLinkState = !0,
                        o.exdParams.position = r,
                        o.params.vid = this.videoInfo.encodeid,
                        o.params.action = "play",
                        o.pathname = "play",
                        o.refer = location.href),
                        o.downloadUrl = m.browser.isAndroid ? "https://youku-cpms-cdn.youku.com/apk/6d43cbf537192324/latest-64.apk" : "https://itunes.apple.com/cn/app/id336141475?mt=8",
                        c.default.gotoPage(o)
                    }
                    try {
                        this._reporter.sendCrmCLKLog({
                            crm_scm: e.scm,
                            scm: e.scm,
                            en_spm: e.spm,
                            pageurl: window.location.href
                        })
                    } catch (t) {
                        console.log(t)
                    }
                }
            }
        }]),
        t
    }();
    exports.default = g
}
, function(t, exports, e) {
    "use strict";
    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    function n(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    function s(t, e) {
        var i = {
            width: 0 === e.width ? "auto" : e.width + "px",
            height: 0 === e.height ? "auto" : e.height + "px",
            color: e.text_color,
            opacity: e.alpha,
            fontSize: e.text_size
        }
          , n = void 0
          , s = void 0
          , a = e.refCoord;
        if (e.rsUrl)
            if (i.background = 'url("' + e.rsUrl + '") 0 0 no-repeat',
            e.width && e.height)
                i.backgroundSize = e.width + "px " + e.height + "px";
            else {
                var o = window.getComputedStyle(t, null);
                i.backgroundSize = o.width + " " + o.height
            }
        0 === a ? (n = "left",
        s = "top",
        e.posX > 0 && (i.right = "auto"),
        e.posY > 0 && (i.bottom = "auto")) : 1 === a ? (n = "right",
        s = "top",
        e.posX > 0 && (i.left = "auto"),
        e.posY > 0 && (i.bottom = "auto")) : 2 === a ? (n = "right",
        s = "bottom",
        e.posX > 0 && (i.left = "auto"),
        e.posY > 0 && (i.top = "auto")) : 3 === a && (n = "left",
        s = "bottom",
        e.posX > 0 && (i.right = "auto"),
        e.posY > 0 && (i.top = "auto")),
        i[n] = e.posX + "px",
        i[s] = e.posY + "px";
        for (var r in i)
            i[r] && (t.style[r] = i[r])
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var a = function() {
        function t(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        return function(e, i, n) {
            return i && t(e.prototype, i),
            n && t(e, n),
            e
        }
    }()
      , o = e(2)
      , r = e(4)
      , l = e(1)
      , u = i(l)
      , d = e(32)
      , h = i(d)
      , c = e(33)
      , f = i(c)
      , p = e(26)
      , m = i(p)
      , v = e(29)
      , _ = i(v)
      , y = e(30)
      , g = i(y)
      , b = e(28)
      , w = i(b)
      , A = e(36)
      , E = i(A)
      , T = e(34)
      , k = e(15)
      , P = i(k)
      , S = e(24)
      , I = i(S)
      , D = {
        vertical: .67,
        landscape: 1.78
    }
      , L = function() {
        function t(e, i, s) {
            n(this, t),
            this.playerDom = e,
            this.config = s || {},
            this.videoId = window.vid || i && i.config && i.config.videoId,
            this.isFocusHideDash = this.config.dash && this.config.dash.focusHidde,
            this.btn = {
                poster: r.util.get(".x-video-poster", this.playerDom)[0],
                title: r.util.get(".x-video-title", this.playerDom)[0],
                midPlayBtn: r.util.get(".x-video-button", this.playerDom)[0],
                youkulogo: r.util.get(".x-youkulogo", this.playerDom)[0],
                register: r.util.get(".x-video-rnum", this.playerDom)[0],
                license: r.util.get(".x-video-lnum", this.playerDom)[0],
                trigger: r.util.get(".x-trigger", this.playerDom)[0],
                midTriggerPlayBtn: r.util.get(".x-video-trigger-ico", this.playerDom)[0],
                loading: r.util.get(".x-video-loading", this.playerDom)[0],
                prompt: r.util.get(".x-prompt", this.playerDom)[0],
                adBtn: r.util.get(".x-advert", this.playerDom)[0],
                pauseAdBtn: r.util.get(".x-ad-pause", this.playerDom)[0],
                noteDom: r.util.get(".x-noticeshow", this.playerDom)[0],
                payDom: r.util.get(".x-showtips", this.playerDom)[0],
                hdshowDom: r.util.get(".x-hdshowlist", this.playerDom)[0],
                grad: r.util.get(".x-gradient", this.playerDom)[0],
                fullBtn: r.util.get(".x-full-video", this.playerDom)[0],
                timeBar: r.util.get(".x-video-time-long", this.playerDom)[0]
            },
            this.dashboard = r.util.get(".x-dashboard", this.playerDom)[0],
            this.config.dash && this.config.focusHidde ? this.dashboard.style.display = "none" : this.dashboard.style.display = "block",
            this.panner = {},
            this.class = {
                pause: "i-pause",
                play: "i-play",
                outScreen: "i-icon i-outscreen",
                inScreen: "i-icon i-fscreen"
            },
            this.ifEvent = !1,
            this.ifFullScreen = !1,
            this.screenDirect = r.util.getScreenState(),
            this.touchMoving = !1,
            (this.config.hidetitle || i.config.purePlay) && r.util.hide(this.btn.title),
            this.config.hideTimer && r.util.hide(this.btn.timeBar),
            this.e = {
                play: this.play.bind(this),
                playNext: this.playNext.bind(this),
                onTrigger: this.onTrigger.bind(this),
                onSeeking: this.onSeeking.bind(this),
                onProgress: this.onTouchProgress.bind(this),
                onProgressEnd: this.onTouchProgressEnd.bind(this),
                retry: this.retry.bind(this),
                switchFullscreen: this.switchFullscreen.bind(this),
                orientationchange: this._orientationchange.bind(this),
                resize: this._widowResize.bind(this),
                sendAdClick: this._sendAdClick.bind(this)
            },
            this._emitter = new u.default,
            this._player = i,
            this._createDashboardDom(),
            this._progress = new h.default(this.btn.progress,this.btn.minProgress,this._player,this.config),
            this._prompt = new f.default(this.btn.prompt),
            this._adPannel = new m.default(this.btn.adBtn,this.btn.pauseAdBtn,i),
            this._noticePannel = new _.default(this.btn.noteDom,this._player,this.config),
            this._noticePannel._emitter.on("retry", this.e.retry),
            this._uiInit(),
            this.config.poster && (this.initPoster(),
            r.util.show(this.btn.poster),
            i.config.purePlay || this.showMidPlayBtn(),
            this.hideLoading()),
            this.isIOS10 = /iPhone|iPod/.test(navigator.userAgent) && /OS 10|OS 1\d{1,}/i.test(navigator.userAgent),
            this.isIOS = window.navigator.userAgent.indexOf("iPhone OS") > -1
        }
        return a(t, [{
            key: "_createDashboardDom",
            value: function() {
                this.xconsoleout = r.util.createElement("x-console-out"),
                this.xconsole = r.util.createElement("x-console"),
                this.dashboard.appendChild(this.xconsoleout),
                this.xconsoleout.appendChild(this.xconsole),
                this.btn.playBtn = r.util.createElement("i-pause i-icon"),
                this.btn.nextVid = r.util.createElement("i-next i-icon"),
                this.btn.progress = r.util.createElement("x-progress"),
                this.btn.changeBtn = r.util.createElement("change"),
                this.btn.fullScreenBtn = r.util.createElement("i-fscreen i-icon"),
                this.btn.mutedBtn = r.util.createElement("x-change-muted"),
                this.xconsole.appendChild(this.btn.playBtn),
                this.xconsole.appendChild(this.btn.nextVid),
                this.xconsole.appendChild(this.btn.progress),
                this.xconsole.appendChild(this.btn.changeBtn),
                this.xconsole.appendChild(this.btn.fullScreenBtn),
                this.xconsole.appendChild(this.btn.mutedBtn),
                r.util.hide(this.xconsoleout),
                0 !== r.util.getScreenState() && (r.util.hide(this.btn.nextVid),
                r.util.hide(this.btn.changeBtn)),
                this.btn.minProgress = r.util.createElement("x-progress-mini"),
                this.dashboard.appendChild(this.btn.minProgress),
                r.util.hide(this.btn.minProgress)
            }
        }, {
            key: "_resize",
            value: function() {
                var t = document.documentElement.clientWidth
                  , e = 9 * t / 16;
                this.playerDom.style.height = e + "px",
                this.playerDom.style.width = t + "px"
            }
        }, {
            key: "_uiInit",
            value: function() {
                var t = this;
                this.config.dash ? (this.config.dash.play && r.util.hide(this.btn.playBtn),
                this.config.dash.next && r.util.hide(this.btn.nextVid),
                this.config.dash.full && (r.util.hide(this.btn.fullScreenBtn),
                this._progress.changeProcessStyle("right")),
                this.config.dash.change && r.util.hide(this.btn.changeBtn),
                this.config.dash.play && !this.config.dash.full ? this._progress.changeProcessStyle("left") : !this.config.dash.play && this.config.dash.full ? this._progress.changeProcessStyle("right") : this.config.dash.play && this.config.dash.full && this._progress.changeProcessStyle("mid"),
                this.config.showMutedIcon && this.showMutedBtn()) : this.config.dash = {},
                this.config.isFeed && (r.util.hide(this.btn.playBtn),
                this.config.dash.full ? this._progress.changeProcessStyle("mid") : this._progress.changeProcessStyle("left")),
                (o.browser.isYouku || o.browser.isYoukuHD) && T.configOnline.init(function(e) {
                    r.util.hide(t.btn.fullScreenBtn),
                    t._progress.changeProcessStyle("right")
                }),
                o.browser.isIOS && /weibo/i.test(window.navigator.userAgent) && r.util.hide(this.btn.fullScreenBtn)
            }
        }, {
            key: "_getPoster",
            value: function() {
                var t = {}
                  , e = ""
                  , i = this._player.getShow()
                  , n = this._player.getVideoInfo();
                return this.config.poster ? e = this.config.poster : "vertical" === this._player.config.playModel && i && i.show_vthumburl_big_jpg ? (e = i.show_vthumburl_huge + "?x-oss-process=image/resize,w_750/interlace,1/quality,Q_100/sharpen,100",
                t.type = "vertical") : "episode" === this.config.posterType && i && i.show_thumburl_big_jpg ? (e = i.show_thumburl_huge + "?x-oss-process=image/resize,w_750/interlace,1/quality,Q_100/sharpen,100",
                t.type = "landscape") : n ? (e = n.logo,
                t.type = "landscape") : t.posterUrl = e,
                t.posterUrl = e.replace("https://", "//"),
                e.indexOf("//") < 0 && (t.posterUrl = ""),
                t
            }
        }, {
            key: "_getPosterSize",
            value: function(t) {
                var e = this.playerDom.offsetWidth
                  , i = (this.playerDom.offsetHeight,
                {});
                switch (t) {
                case "vertical":
                    i = {
                        width: "100%",
                        height: e / D.vertical + "px"
                    };
                    break;
                case "landscape":
                    i = {
                        width: "100%",
                        height: "100%"
                    };
                    break;
                default:
                    i = {
                        width: "100%",
                        height: "100%"
                    }
                }
                return i
            }
        }, {
            key: "initPoster",
            value: function() {
                var t = this._getPoster()
                  , e = this._getPosterSize(t.type);
                if (t.posterUrl)
                    if (this.btn.poster.children.length > 0)
                        this.btn.poster.children[0].src = t.posterUrl;
                    else {
                        var i = document.createElement("img");
                        i.src = t.posterUrl,
                        this.btn.poster.appendChild(i);
                        for (var n in e)
                            i.style[n] = e[n]
                    }
            }
        }, {
            key: "init",
            value: function(t) {
                var e = this;
                if (this._noticePannel.hideError(),
                this._video = this._player.getVideoInfo(),
                this._video) {
                    this.initPoster();
                    var i = this._player.config.title ? this._player.config.title : this._video.title;
                    if (this.btn.title.innerHTML = r.util.htmlEncodeAll(i),
                    this._noticePannel.initData(this._video.id, this._video.encodeid),
                    !this._player.getError()) {
                        this._hdInfoPannel || (this._hdInfoPannel = new w.default(this.btn.changeBtn,this.btn.hdshowDom)),
                        this._hdInfoPannel.init(this._player.control.lang, this._player.control.hd, this._player.getLanguageList(), this._player.getHdList(), this._player),
                        this.hideChangeBtn(),
                        this.showTitle();
                        var n = this._player.getVideoInfo()
                          , s = n ? n.seconds : 0
                          , a = parseInt(s / 60);
                        s = parseInt(s % 60),
                        s = s > 9 ? s : "0" + s,
                        a = a > 9 ? a : "0" + a,
                        this.btn.timeBar.innerHTML = a + ":" + s,
                        this._player.config.purePlay ? (this.hideLoading(),
                        this.hideMidPlayBtn()) : this._player.control.autoplay ? r.util.hide(this.btn.poster) : (this.hideLoading(),
                        this.showMidPlayBtn(),
                        r.util.show(this.btn.poster));
                        var o = null;
                        this._player.getTrialInfo() && (o = parseInt(this._player.getTrialInfo().time)),
                        this._progress.init(this._video.seconds, 0, 0),
                        this._prompt.init(this._video.seconds, 0, o),
                        this.showRegisterNum(),
                        this.showLogo(),
                        this._bindEvent();
                        this._player.getVideoInfo().type.join(",");
                        this._player.getPayInfo(!0, function(t) {
                            if (t && t.can_play === !1)
                                e._payInfoPannel || (e._payInfoPannel = new g.default(e.btn.payDom,e._player),
                                e._payInfoPannel._emitter.on("tryPlay", e.e.play)),
                                e._payInfoPannel.init(e._video, e._player.getTrialInfo(), t, null, e.config),
                                r.util.show(e.btn.poster);
                            else {
                                var i = e._player.getTrialInfo();
                                i && "h5" === i.type && (e.isLimit = !0)
                            }
                        }),
                        this.config.dash && this.config.dash.videoInterest && Array.isArray(this.config.dash.videoInterestData) && (this.videoInterest = new E.default(this.playerDom,this._player,this.config.dash.videoInterestData))
                    }
                }
            }
        }, {
            key: "_bindEvent",
            value: function() {
                var t = this;
                this.ifEvent || (this.ifEvent = !0,
                this.config.isFeed && r.util.addEventListenerHander(this.btn.midTriggerPlayBtn, "click", this.e.play),
                r.util.addEventListenerHander(this.btn.midPlayBtn, "click", this.e.play),
                r.util.addEventListenerHander(this.btn.playBtn, "touchend", this.e.play),
                r.util.addEventListenerHander(this.btn.nextVid, "touchend", this.e.playNext),
                r.util.addEventListenerHander(this.btn.trigger, "touchend", this.e.onTrigger),
                r.util.addEventListenerHander(this.btn.fullScreenBtn, "touchend", this.e.switchFullscreen),
                r.util.addEventListenerHander(this.btn.mutedBtn, "touchend", function(e) {
                    t.changeMute(e)
                }),
                r.util.addEventListenerHander(this.btn.fullBtn, "touchend", function(e) {
                    (0,
                    P.default)({
                        spmC: "player",
                        spm: "a2h0j.10182321.player.watchall",
                        videoId: t.videoId
                    }, "CLK"),
                    t._noticePannel.fullPay()
                }),
                r.util.addEventListenerHander(window, "orientationchange", this.e.orientationchange),
                r.util.addEventListenerHander(window, "resize", this.e.resize),
                this._progress._emitter.on("touchprogressend", this.e.onProgressEnd),
                this._progress._emitter.on("touchprogress", this.e.onProgress),
                this._progress._emitter.on("seeking", this.e.onSeeking),
                this._adPannel._emitter.on("adpause", this.e.play),
                this._adPannel._emitter.on("addetail", this.e.sendAdClick),
                this._noticePannel._emitter.on("replay", this.e.play),
                this._adPannel._emitter.on("pauseAdClicked", function(e) {
                    t._player.sendPauseAdCUM(e)
                }))
            }
        }, {
            key: "_sendAdClick",
            value: function(t) {
                this._player.sendAdClickLog(t)
            }
        }, {
            key: "_dealWater",
            value: function(t) {
                for (var e = 0, i = t.length; e < i; e++)
                    ;
            }
        }, {
            key: "showRegisterNum",
            value: function(t) {
                var e = this._player.getLicense();
                e = t ? e.fullScreen : e.normal;
                var i = this._player.getRegister();
                i = t ? i.fullScreen : i.normal,
                e && (this.btn.license.innerHTML = e.text,
                s(this.btn.license, e),
                r.util.show(this.btn.license)),
                i && (this.btn.register.innerHTML = i.text,
                r.util.show(this.btn.register),
                s(this.btn.register, i));
                var n = this._player.getShow();
                n && (n.license_num && (this.btn.license.innerHTML = n.license_num,
                r.util.show(this.btn.license)),
                n.youku_register_num && (this.btn.register.innerHTML = n.youku_register_num,
                r.util.show(this.btn.register)))
            }
        }, {
            key: "hideRegisterNum",
            value: function() {
                r.util.hide(this.btn.license),
                r.util.hide(this.btn.register)
            }
        }, {
            key: "hideMidPlayBtn",
            value: function() {
                "none" !== this.btn.midPlayBtn.style && r.util.hide(this.btn.midPlayBtn)
            }
        }, {
            key: "showMidPlayBtn",
            value: function() {
                r.util.show(this.btn.midPlayBtn)
            }
        }, {
            key: "hideTriggerMidPlayBtn",
            value: function() {
                "none" !== this.btn.midTriggerPlayBtn.style.display && r.util.hide(this.btn.midTriggerPlayBtn)
            }
        }, {
            key: "showTriggerMidPlayBtn",
            value: function() {
                r.util.show(this.btn.midTriggerPlayBtn)
            }
        }, {
            key: "switchTriggerMidBtnStatus",
            value: function(t) {
                var e = t + " x-video-trigger-ico";
                this.btn.midTriggerPlayBtn.className = e
            }
        }, {
            key: "showMutedBtn",
            value: function() {
                r.util.addClass(this.btn.progress, "x-progress-towicon"),
                r.util.show(this.btn.mutedBtn)
            }
        }, {
            key: "showLogo",
            value: function() {
                var t = this._player.ifShowLogo() && !this.config.hidelogo
                  , e = this._player.getShow();
                if (t) {
                    e && e.exclusive ? this.btn.youkulogo.className = "x-youkulogo x-youkulogo-exclusive" : this.btn.youkulogo.className = "x-youkulogo";
                    var i = this._player.getLogo();
                    i && i.normal && s(this.btn.youkulogo, i.normal),
                    r.util.show(this.btn.youkulogo)
                }
            }
        }, {
            key: "hideLogo",
            value: function() {
                r.util.hide(this.btn.youkulogo)
            }
        }, {
            key: "showChangeBtn",
            value: function() {
                0 === r.util.getScreenState() ? (r.util.show(this.btn.changeBtn),
                r.util.show(this.btn.nextVid)) : (r.util.hide(this.btn.changeBtn),
                r.util.hide(this.btn.nextVid))
            }
        }, {
            key: "hideChangeBtn",
            value: function() {
                r.util.hide(this.btn.changeBtn),
                r.util.hide(this.btn.nextVid)
            }
        }, {
            key: "showTitle",
            value: function() {
                this.config && this.config.hidetitle || this._player.config.purePlay || r.util.show(this.btn.title, "-webkit-box")
            }
        }, {
            key: "showFullLimit",
            value: function() {
                this._player.sendGoldLog("/yt/youkuphoneplaypage.myoukuinteraction.show_to_player", "EXP", "show_type=showwatchall", "H1567382961"),
                r.util.show(this.btn.fullBtn)
            }
        }, {
            key: "hideFullLimit",
            value: function() {
                r.util.hide(this.btn.fullBtn)
            }
        }, {
            key: "play",
            value: function(t) {
                if (!this._firstPlay) {
                    this.config && this.config.event && this.config.event.startPlay && this.config.event.startPlay(),
                    this._firstPlay = !0;
                    var e = this._player.getVideoInfo().category_id;
                    this._player.sendGoldLog("/yt/youkuphoneplaypage.click.youkuplay", "CLK", "cid=" + e, "GET"),
                    "vertical" === this._player.config.playModel && this._player.switchFullStyle(!0),
                    this.showDash()
                }
                this._player.isPause || this._player.mediaElement.paused ? (this._player.sendGoldLog("/yt/youkuphoneplaypage.myoukuinteraction.click_to_player", "CLK", "click_type=play_button", "H1568306482"),
                this._player.play()) : (this._player.sendGoldLog("/yt/youkuphoneplaypage.myoukuinteraction.click_to_player", "CLK", "click_type=stop", "H1568306482"),
                this._player.pause()),
                t && (t.preventDefault(),
                t.stopPropagation(),
                t.cancelBubble = !0)
            }
        }, {
            key: "replay",
            value: function() {
                "vertical" === this._player.config.playModel && this._player.switchFullStyle(!0),
                this.showMedia(),
                this._firstPlay = !1,
                this._player.replay()
            }
        }, {
            key: "retry",
            value: function(t) {
                this.showLoading(),
                t && t.password ? this._player.reLoad(t.password) : this._player.reLoad()
            }
        }, {
            key: "onTrigger",
            value: function() {
                this.adplay || (this.adplay || this.ifdashShow ? (r.util.hide(this.btn.title),
                this.hideDash(!1, !0),
                this.config.isFeed ? this.hideTriggerMidPlayBtn() : "") : (this.ifdashShow = !0,
                this.showTitle(),
                this.showDash(!0),
                this.config.isFeed ? this.showTriggerMidPlayBtn() : ""))
            }
        }, {
            key: "changeMute",
            value: function(t) {
                var e = parseInt(this.btn.mutedBtn.getAttribute("data-muted"));
                e = this._player.changeMuted(!e),
                e ? (this.btn.mutedBtn.setAttribute("data-muted", 1),
                r.util.addClass(this.btn.mutedBtn, "x-close-muted")) : (r.util.removeClass(this.btn.mutedBtn, "x-close-muted"),
                this.btn.mutedBtn.setAttribute("data-muted", 0))
            }
        }, {
            key: "onPlay",
            value: function() {
                this.hideLoading(),
                this.trialInfo = this._player.getTrialInfo(),
                this.adplay = !1,
                this.hideMidPlayBtn(),
                r.util.hide(this.btn.poster),
                r.util.hide(this.btn.timeBar),
                this.showLoading(),
                this._adPannel.hidePauseAd(),
                this.showLogo();
                var t = this.btn.playBtn.className;
                this.btn.playBtn.className = t.replace(this.class.pause, this.class.play),
                this.config.isFeed && this.switchTriggerMidBtnStatus(this.class.play),
                this.trialInfo && "h5" === this.trialInfo.type && this.showFullLimit()
            }
        }, {
            key: "onPause",
            value: function() {
                var t = this.btn.playBtn.className;
                return this.btn.playBtn.className = t.replace(this.class.play, this.class.pause),
                this.config.isFeed ? (this.switchTriggerMidBtnStatus(this.class.pause),
                void this.showTriggerMidPlayBtn()) : this.config.dash && this.config.dash.pauseState ? (this.hideDash(null, !0),
                void this.showMidPlayBtn()) : void (this.isIOS10 || !this.isIOS ? this.showDash(null, !0) : this.showMidPlayBtn())
            }
        }, {
            key: "onTimeUpdate",
            value: function(t) {
                this.hideLoading(),
                t > 5 && t - 5 < 1 && this.hideRegisterNum(),
                this.lastTime && !this._progress.isTouching || (this.lastTime = t),
                (0 === t || 1e3 * Math.abs(t - this.lastTime) >= 500) && (this.lastTime = t,
                this._progress.update(t))
            }
        }, {
            key: "onEnded",
            value: function(t) {
                if (this.hideDash(!0),
                this.hideMedia(),
                this.trialInfo = this._player.getTrialInfo(),
                this._progress.update(0, 0),
                this.hideLoading(),
                this.hideFullLimit(),
                this.trialInfo && "h5" === this.trialInfo.type) {
                    var e = parseInt(this.trialInfo.time);
                    this.showLimit(e)
                } else if (this._payInfoPannel)
                    this._payInfoPannel.show();
                else if (r.util.show(this.btn.poster),
                !this._player.getShow() && this.config.dash && this.config.dash.videoInterest) {
                    var i = this.config.dash.videoInterestData;
                    Array.isArray(i) && i.length > 0 && this.videoInterest.showList()
                } else
                    this.showMidPlayBtn();
                this._player.switchFullStyle(!1)
            }
        }, {
            key: "onAbortError",
            value: function() {
                this.hideMedia(),
                this.showMidPlayBtn(),
                r.util.show(this.btn.poster)
            }
        }, {
            key: "onError",
            value: function(t) {
                var e = this;
                this.initPoster(),
                this._video = this._player.getVideoInfo();
                var i = this._player.config && this._player.config.title ? this._player.config.title : this._video ? this._video.title : "";
                this.btn.title.innerHTML = r.util.htmlEncodeAll(i);
                var n = this._player.getVideoInfo()
                  , s = n ? n.seconds : 0
                  , a = parseInt(s / 60);
                if (s = parseInt(s % 60),
                s = s > 9 ? s : "0" + s,
                a = a > 9 ? a : "0" + a,
                this.btn.timeBar.innerHTML = a + ":" + s,
                r.util.show(this.btn.poster),
                this.hideLoading(),
                this.hideMidPlayBtn(),
                this.hideDash(!0),
                !t || !t.code)
                    return this.showError("播放错误，请重试"),
                    void this._player.sendEventLog("xve", "m");
                if (1111 === t.code)
                    return void this.showError(t.note, !0, t.wait);
                var o = t.code;
                o = "" + o;
                var l = this._player.getPlayPolicy()
                  , u = this._player.getVideoInfo();
                if (u && this._noticePannel.initData(u.id, u.encodeid),
                "-2002" === o || "-2003" === o) {
                    this.initPoster(),
                    r.util.show(this.btn.poster),
                    this.hideMidPlayBtn(),
                    this.needPassword = !0;
                    var d = t.note ? t.note.replace(/<font color="#FF0000">/, "").replace("</font>", "") : "请输入密码";
                    this.showPassword(d)
                } else if (l && l.policyData && "DRM视频禁播" === l.policyData.desc) {
                    this.initPoster(),
                    r.util.show(this.btn.poster);
                    var h = !("-3007" !== o && "-3008" !== o && "-3001" !== o && "-3002" !== o && "-3003" !== o);
                    this.showLimitDrm(h)
                } else if ("-3007" === o || "-3008" === o || "-3001" === o || "-3002" === o || "-3003" === o)
                    this.initPoster(),
                    r.util.show(this.btn.poster),
                    this._video || (this._video = this._player.getVideoInfo()),
                    this._payInfoPannel || (this._payInfoPannel = new g.default(this.btn.payDom,this._player)),
                    this._player.getPayInfo(!0, function(t) {
                        e._payInfoPannel.init(e._video, "", t, o, e.config),
                        e._payInfoPannel.show(),
                        e.showTitle()
                    });
                else if ("-3006" === o) {
                    var c = t.note;
                    this.showError(c, !0)
                } else {
                    var f = t && t.note ? t.note : "播放错误";
                    "-1002" === o && (f = '该视频已被屏蔽，您可以尝试<font color="#22B8FE"><u>搜索</u></font>操作'),
                    this.showError(f, !0)
                }
            }
        }, {
            key: "_showFullBtn",
            value: function() {}
        }, {
            key: "showDash",
            value: function(t) {
                if (!this.isFocusHideDash && (t && this._player.sendEventLog("xCd", "c"),
                !this._player.config.purePlay)) {
                    this._progress.changeStatus(!1),
                    r.util.show(this.xconsoleout),
                    this.showTitle(),
                    r.util.show(this.btn.grad),
                    this._progress.changeTrackWidth(),
                    r.util.hide(this.btn.minProgress),
                    this.trialInfo && "h5" === this.trialInfo.type && this.showFullLimit(),
                    this.ifdashShow = !0,
                    this.config.event && this.config.event.showDash && this.config.event.showDash();
                    var e = this;
                    this.dashtimer && (clearTimeout(this.dashtimer),
                    this.dashtimer = null),
                    this.dashtimer = setTimeout(function() {
                        e._progress.isTouching && e.adplay ? e.showDash() : (e.hideDash(null, !0),
                        e.config.isFeed ? e.hideTriggerMidPlayBtn() : "")
                    }, 8e3)
                }
            }
        }, {
            key: "hideDash",
            value: function(t, e) {
                return this.dashtimer && (clearTimeout(this.dashtimer),
                this.dashtimer = null),
                e && this._player.sendEventLog("xHd", "c"),
                this._progress.changeStatus(!0),
                this.ifdashShow = !1,
                this.hideFullLimit(),
                r.util.hide(this.xconsoleout),
                r.util.hide(this.btn.title),
                r.util.hide(this.btn.hdshowDom),
                r.util.hide(this.btn.grad),
                this.config.event && this.config.event.hideDash && this.config.event.hideDash(!0),
                t ? void r.util.hide(this.btn.minProgress) : void r.util.show(this.btn.minProgress)
            }
        }, {
            key: "hideMedia",
            value: function() {}
        }, {
            key: "showMedia",
            value: function() {
                r.util.show(this._player.mediaElement)
            }
        }, {
            key: "showLoading",
            value: function() {
                var t = this;
                this.loadingTimer && window.clearTimeout(this.loadingTimer),
                this.loadingTimer = window.setTimeout(function() {
                    r.util.show(t.btn.loading)
                }, 500)
            }
        }, {
            key: "hideLoading",
            value: function() {
                this.loadingTimer && (window.clearTimeout(this.loadingTimer),
                this.loadingTimer = null),
                r.util.hide(this.btn.loading)
            }
        }, {
            key: "showPauseAd",
            value: function(t) {
                this._adPannel.showPauseAd(t)
            }
        }, {
            key: "showRecord",
            value: function(t) {
                this.showDash(),
                this._progress.showRecode(t)
            }
        }, {
            key: "showSkipHead",
            value: function(t) {
                this.showDash(),
                this._progress.showSkiplog(t, "已经为您跳过片头")
            }
        }, {
            key: "showSkipTail",
            value: function(t) {
                this.showDash(),
                this._progress.showSkiplog(t, "已经为您跳过片尾")
            }
        }, {
            key: "playNext",
            value: function() {
                this._videoList = this._player.getVideoList(),
                this._videoList.next && this._player.changeByVid(this._videoList.next.encodevid)
            }
        }, {
            key: "showError",
            value: function(t, e, i) {
                this.hideDash(!0),
                this.hideMidPlayBtn(),
                this.hideLoading(),
                this.hideRegisterNum(),
                this._noticePannel.showError(t, e, i)
            }
        }, {
            key: "showPassword",
            value: function(t) {
                this.hideDash(!0),
                this.hideMidPlayBtn(),
                this.hideLoading(),
                this._noticePannel.showPassword(t)
            }
        }, {
            key: "showLimit",
            value: function(t) {
                this.hideDash(!0),
                this.hideMidPlayBtn(),
                this.hideLoading(),
                this.hideRegisterNum();
                var e = t >= 60 ? parseInt(t / 60) + "分钟" : t + "秒"
                  , i = "本页面仅支持试看" + e + "，更多内容尽在优酷App";
                this._noticePannel.showLimit(i)
            }
        }, {
            key: "showLimitDrm",
            value: function(t) {
                this.hideDash(!0),
                this.hideMidPlayBtn(),
                this.hideLoading(),
                this.hideRegisterNum();
                var e = t ? "请打开APP购买观看哦" : "请打开APP观看哦";
                this._noticePannel.showDrmLimit(e)
            }
        }, {
            key: "switchFullscreen",
            value: function(t) {
                if (this.config && this.config.event && this.config.event.switchFullscreen)
                    return void this.config.event.switchFullscreen(this._player.getVideoInfo(), this.ifFullScreen);
                var e = t && t.method ? t.method : "c";
                this.ifFullScreen ? (this._player.sendEventLog("exfs", e),
                this._player.exitFullscreen()) : (this._player.sendGoldLog("/yt/youkuphoneplaypage.myoukuinteraction.click_to_player", "CLK", "click_type=fullscreen", "H1568306482"),
                this._player.sendEventLog("xenfs", e),
                this._player.launchFullscreen())
            }
        }, {
            key: "changeFullState",
            value: function(t) {
                o.browser.isIOS || (this.ifFullScreen = t,
                t ? this.btn.fullScreenBtn.className = this.class.outScreen : this.btn.fullScreenBtn.className = this.class.inScreen)
            }
        }, {
            key: "_orientationchange",
            value: function() {
                this._player.sendEventLog("xre", "m"),
                this._adPannel.hidePauseAd()
            }
        }, {
            key: "_widowResize",
            value: function() {
                this.initPoster()
            }
        }, {
            key: "seek",
            value: function(t, e) {
                this.showLoading(),
                this._player.seek(e)
            }
        }, {
            key: "onTouchProgress",
            value: function(t, e) {
                var i = t.st || 0
                  , n = t.dt || 0;
                this._prompt.setTip(i, n),
                this._prompt.show(),
                this._progress.update(i)
            }
        }, {
            key: "onTouchProgressEnd",
            value: function(t, e, i) {
                this.touchMoving = !0,
                this._player.sendEventLog("xDs", "d", i),
                this._player.seek(e),
                this._prompt.hide()
            }
        }, {
            key: "onSeeking",
            value: function(t, e) {
                this._player.sendEventLog("xcs", "c"),
                this.seek(t, e)
            }
        }, {
            key: "initAd",
            value: function(t) {
                var e = this;
                0 !== t.totalTime && (e._payInfo = new I.default,
                e._payInfo.getData({
                    videoId: e.videoId,
                    scene: ["no_adv"],
                    place: 120,
                    successCb: function(i) {
                        var n = i.result && i.result.pay_scenes && i.result.pay_scenes.scenes
                          , s = [];
                        Array.isArray(n) && n.length > 0 && (n.filter(function(t) {
                            "no_adv" === t.scene && (s = t.components)
                        }),
                        Array.isArray(s) && s.forEach(function(e) {
                            "button" === e.type && (t.payText = e.text,
                            t.actionParams = e.action && e.action.params || {},
                            t.payUrl = t.actionParams.replaceUrl || "")
                        })),
                        e._adPannel.setAdInfo(t)
                    },
                    failCb: function() {
                        e._adPannel.setAdInfo(t)
                    }
                }))
            }
        }, {
            key: "onAdPlay",
            value: function() {
                this.adplay || (this.hideDash(!0),
                this.hideLogo(),
                r.util.hide(this.btn.title),
                r.util.hide(this.btn.poster),
                r.util.hide(this.btn.timeBar),
                this.hideRegisterNum(),
                r.util.hide(this.btn.minProgress)),
                this.adplay = !0,
                this.hideMidPlayBtn(),
                this.showLoading()
            }
        }, {
            key: "onAdCanPlay",
            value: function() {
                this.showMedia(),
                this.hideLoading(),
                this._adPannel.show()
            }
        }, {
            key: "onAdPause",
            value: function() {
                this.showMidPlayBtn()
            }
        }, {
            key: "onAdTimeUpdate",
            value: function(t, e) {
                this.hideLoading(),
                this._adPannel.update(t, e)
            }
        }, {
            key: "onAdEnd",
            value: function() {
                this.adplay && (this.adplay = !1,
                this._adPannel.hide(),
                this._adPannel.reset(),
                this.showLogo(),
                this.showRegisterNum(),
                this.showDash())
            }
        }, {
            key: "onLoading",
            value: function() {
                var t = this;
                this.showLoading(),
                setTimeout(function() {
                    t.hideLoading()
                }, 3e3)
            }
        }, {
            key: "onCanplay",
            value: function() {
                this.showMedia(),
                this.hideLoading()
            }
        }]),
        t
    }();
    exports.default = L
}
, function(t, exports, e) {
    "use strict";
    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    function n(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var s = function() {
        function t(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        return function(e, i, n) {
            return i && t(e.prototype, i),
            n && t(e, n),
            e
        }
    }()
      , a = e(4)
      , o = e(1)
      , r = i(o)
      , l = function() {
        function t(e, i, s, o) {
            n(this, t),
            this.TAG = "Progress",
            this.dom = e,
            this.minDom = i,
            this._player = s,
            this._config = o,
            this.btn = {
                curTimeBtn: null,
                totalTimeBtn: null,
                track: null,
                loaded: null,
                played: null,
                recode: null,
                skiplog: null,
                seekBtn: null,
                trigger: a.util.get(".x-trigger", this._player.playerCon)[0],
                xconsoleout: a.util.get(".x-console-out", this._player.playerCon)[0]
            },
            this.e = {
                seek: this.seek.bind(this),
                touchstartProess: this.touchstartProess.bind(this),
                touchstart: this.onTouchStart.bind(this),
                touchend: this.onTouchEnd.bind(this),
                touchmove: this.onTouchMove.bind(this)
            },
            this.createDom(),
            this._emitter = new r.default
        }
        return s(t, [{
            key: "createDom",
            value: function() {
                this.btn.curTimeBtn = a.util.createElement("x-playtime", null, "00:00", "span"),
                this.btn.totalTimeBtn = a.util.createElement("x-alltime", null, "00:00", "span"),
                this.btn.track = a.util.createElement("x-progress-track"),
                this.dom.appendChild(this.btn.curTimeBtn),
                this.dom.appendChild(this.btn.track),
                this.dom.appendChild(this.btn.totalTimeBtn),
                this.btn.loaded = a.util.createElement("x-progress-load", "", "", "span"),
                this.btn.loaded.style.width = "0px",
                this.btn.played = a.util.createElement("x-progress-play", "", '<i class="seekBtn"></i>', "span"),
                this.btn.played.style.width = "0px",
                this.btn.seekBtn = a.util.get(".seekBtn", this.btn.played)[0],
                this.btn.recode = a.util.createElement("x-play-recode"),
                a.util.hide(this.btn.recode),
                this.btn.skiplog = a.util.createElement("x-play-skiplog"),
                a.util.hide(this.btn.skiplog),
                this.btn.track.appendChild(this.btn.loaded),
                this.btn.track.appendChild(this.btn.played),
                this.btn.track.appendChild(this.btn.skiplog),
                this.btn.track.appendChild(this.btn.recode),
                this.minDom && (this.btn.minLoaded = a.util.createElement("x-progress-load-mini", "", "", "span"),
                this.btn.minPlayed = a.util.createElement("x-progress-play-mini", "", "", "span"),
                this.minDom.appendChild(this.btn.minLoaded),
                this.minDom.appendChild(this.btn.minPlayed),
                a.util.hide(this.minDom))
            }
        }, {
            key: "changeProcessStyle",
            value: function(t) {
                "left" === t ? this.dom.className = "x-progress x-progress-lefthide" : "right" === t ? this.dom.className = "x-progress x-progress-righthide" : "mid" === t ? this.dom.className = "x-progress x-progress-hide" : this.dom.className = "x-progress"
            }
        }, {
            key: "init",
            value: function(t, e, i) {
                this.totalTime = t,
                this.currentTime = e,
                this.loadTime = i;
                var n = e / t * 100
                  , s = i / t * 100;
                e / t * this.btn.track.offsetWidth < 15 && (n = 15 / this.btn.track.offsetWidth * 100),
                this.btn.played.style.width = n + "%",
                this.btn.loaded.style.width = s + "%",
                this.btn.minLoaded && (this.btn.minPlayed.style.width = n + "%",
                this.btn.minLoaded.style.width = s + "%"),
                this.btn.totalTimeBtn.innerHTML = a.util.getTimeModel(t),
                this.btn.curTimeBtn.innerHTML = a.util.getTimeModel(e),
                this.changeTrackWidth(),
                this._bindEvent()
            }
        }, {
            key: "_bindEvent",
            value: function() {
                this.ifEvent || (this.ifEvent = !0,
                a.util.addEventListenerHander(this.btn.track, "touchmove", function(t) {
                    t.preventDefault(),
                    t.stopPropagation()
                }),
                a.util.addEventListenerHander(this.btn.track, "touchend", this.e.seek),
                a.util.addEventListenerHander(this.btn.seekBtn, "touchstart", this.e.touchstartProess),
                this._config.disablePlayerSlide || a.util.addEventListenerHander(this.btn.trigger, "touchstart", this.e.touchstart))
            }
        }, {
            key: "changeTrackWidth",
            value: function() {
                this._trackWidth = this.btn.track.offsetWidth,
                this._left = this.btn.track.offsetLeft
            }
        }, {
            key: "changeStatus",
            value: function(t) {
                this.hide = t
            }
        }, {
            key: "update",
            value: function(t, e) {
                if (t || 0 === t) {
                    t = t > this.totalTime ? this.totalTime : t,
                    this.currentTime = t;
                    var i = t / this.totalTime;
                    this.btn.played.style.width = 100 * i + "%",
                    this.btn.minPlayed && (this.btn.minPlayed.style.width = t / this.totalTime * 100 + "%"),
                    this.btn.curTimeBtn.innerHTML = a.util.getTimeModel(t)
                }
                if (e || 0 === e) {
                    e = e > this.totalTime ? this.totalTime : e;
                    var n = e / this.totalTime * 100;
                    this.btn.loaded.style.width = n + "%",
                    this.btn.minLoaded && (this.btn.minLoaded.style.width = n + "%")
                }
            }
        }, {
            key: "showRecode",
            value: function(t) {
                var e = t / this.totalTime;
                t / this.totalTime < .12 && (e = .12),
                this.btn.recode.style.left = 100 * e + "%",
                this.btn.recode.innerHTML = "已记录您上次观看至" + a.util.getTimeModel(t),
                a.util.show(this.btn.recode);
                var i = this;
                setTimeout(function() {
                    i.hideRecode()
                }, 3e3)
            }
        }, {
            key: "hideRecode",
            value: function() {
                a.util.hide(this.btn.recode)
            }
        }, {
            key: "showSkiplog",
            value: function(t, e) {
                var i = t / this.totalTime;
                t / this.totalTime < .13 && (i = .13),
                this.btn.skiplog.style.left = 100 * i + "%",
                this.btn.skiplog.innerHTML = e,
                a.util.show(this.btn.skiplog);
                var n = this;
                setTimeout(function() {
                    n.hideSkiplog()
                }, 3e3)
            }
        }, {
            key: "hideSkiplog",
            value: function() {
                a.util.hide(this.btn.skiplog)
            }
        }, {
            key: "seek",
            value: function(t) {
                var e = t.offsetX || t.changedTouches[0].clientX - this._left;
                t.preventDefault(),
                t.stopPropagation(),
                t.cancelBubble = !0;
                var i = e / this.btn.track.offsetWidth
                  , n = i * this.totalTime;
                n < 0 && (n = 0),
                n === this.totalTime && (n = this.totalTime),
                this.update(n),
                this._emitter.emit("seeking", t, n)
            }
        }, {
            key: "touchstartProess",
            value: function(t) {
                this._player.sendGoldLog("/yt/youkuphoneplaypage.myoukuinteraction.click_to_player", "CLK", "click_type=progress", "H1568306482"),
                this.onTouchStart(t),
                t.preventDefault(),
                t.stopPropagation(),
                t.cancelBubble = !0
            }
        }, {
            key: "onTouchStart",
            value: function(t) {
                if (!this.hide) {
                    if ("none" == this.btn.xconsoleout.style.display)
                        return !1;
                    if (this.changeTrackWidth(),
                    1 != t.targetTouches.length || this.isTouching)
                        return !1;
                    this.startX = t.targetTouches[0].clientX,
                    a.Log.d(this.TAG, "onTouchStart:" + this.startX + "  " + this.currentTime),
                    t.preventDefault(),
                    t.stopPropagation(),
                    t.cancelBubble = !0,
                    this.isTouching = !0,
                    this.startTime = this.currentTime,
                    a.util.addEventListenerHander(this.btn.seekBtn, "touchmove", this.e.touchmove),
                    a.util.addEventListenerHander(this.btn.seekBtn, "touchend", this.e.touchend),
                    this._config.disablePlayerSlide || (a.util.addEventListenerHander(this.btn.trigger, "touchmove", this.e.touchmove),
                    a.util.addEventListenerHander(this.btn.trigger, "touchend", this.e.touchend))
                }
            }
        }, {
            key: "onTouchMove",
            value: function(t) {
                if (this.isTouching = !0,
                1 != t.targetTouches.length)
                    return !1;
                t.preventDefault(),
                t.stopPropagation();
                var e = t.targetTouches[0].clientX - this.startX
                  , i = e / this._trackWidth
                  , n = this.startTime + i * this.totalTime
                  , s = {
                    st: n,
                    dt: n - this.currentTime
                };
                return (e > 6 || e < -6) && this._emitter.emit("touchprogress", s),
                this.currentTime = Math.min(Math.max(n, 0), this.totalTime),
                this.update(this.currentTime),
                !1
            }
        }, {
            key: "onTouchEnd",
            value: function(t) {
                if (t.changedTouches.length > 1)
                    return !1;
                var e = {
                    tb: parseInt(100 * this.startTime) / 100,
                    to: parseInt(100 * this.currentTime) / 100
                }
                  , i = t.changedTouches[0].clientX - this.startX;
                t.preventDefault(),
                t.stopPropagation();
                Math.min(Math.max(this.currentTime, 0), this.totalTime - 5);
                (i > 6 || i < -6) && this._emitter.emit("touchprogressend", t, this.currentTime, e),
                a.util.removeEventListenerHander(this.btn.seekBtn, "touchmove", this.e.touchmove),
                a.util.removeEventListenerHander(this.btn.seekBtn, "touchend", this.e.touchend),
                this._config.disablePlayerSlide || (a.util.removeEventListenerHander(this.btn.trigger, "touchmove", this.e.touchmove),
                a.util.removeEventListenerHander(this.btn.trigger, "touchend", this.e.touchend)),
                this.isTouching = !1
            }
        }]),
        t
    }();
    exports.default = l
}
, function(t, exports, e) {
    "use strict";
    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    function n(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var s = function() {
        function t(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        return function(e, i, n) {
            return i && t(e.prototype, i),
            n && t(e, n),
            e
        }
    }()
      , a = e(4)
      , o = e(1)
      , r = (i(o),
    function() {
        function t(e) {
            n(this, t),
            this.parentDom = e,
            this.class = {
                forward: "x-prompt-icon forward",
                back: "x-prompt-icon back"
            },
            this.e = {},
            this._createDom()
        }
        return s(t, [{
            key: "init",
            value: function(t, e, i) {
                e = e || 0,
                this.totalTime = t,
                this.tryTime = i || 0 === i ? i : -1,
                this.totalTimeDom.innerHTML = a.util.getTimeModel(this.totalTime),
                this.curTimeDom.innerHTML = a.util.getTimeModel(e)
            }
        }, {
            key: "_createDom",
            value: function() {
                this.modeDom = a.util.createElement("x-prompt-mode"),
                this.stateDom = a.util.createElement("x-prompt-icon"),
                this.timeDom = a.util.createElement("x-prompt-time"),
                this.modeDom.appendChild(this.stateDom),
                this.modeDom.appendChild(this.timeDom),
                this.curTimeDom = a.util.createElement("x-current", "", "", "span");
                var t = a.util.createElement("", "", "/", "i");
                this.totalTimeDom = a.util.createElement("x-total", "", "", "span"),
                this.timeDom.appendChild(this.curTimeDom),
                this.timeDom.appendChild(t),
                this.timeDom.appendChild(this.totalTimeDom),
                this.parentDom.appendChild(this.modeDom)
            }
        }, {
            key: "setStatus",
            value: function(t) {}
        }, {
            key: "hideStatus",
            value: function(t) {}
        }, {
            key: "setTip",
            value: function(t, e) {
                this.tryTime > -1 && t > this.tryTime && (t = this.tryTime),
                t < 0 ? t = 0 : t > this.totalTime && (t = this.totalTime),
                this._progressFlag = !0,
                this.curTimeDom.innerHTML = a.util.getTimeModel(t),
                e <= 0 ? (this.stateDom.className = this.class.back,
                a.util.show(this.parentDom)) : (this.stateDom.className = this.class.forward,
                a.util.show(this.parentDom)),
                this.autoHide();
                var i = this;
                setTimeout(function(t) {
                    i._progressFlag = !1
                }, 1e3)
            }
        }, {
            key: "show",
            value: function() {}
        }, {
            key: "hide",
            value: function() {}
        }, {
            key: "autoHide",
            value: function() {
                if (!this.timer) {
                    var t = this;
                    this.timer = setTimeout(function() {
                        t.timer = null,
                        t._progressFlag ? t.autoHide() : a.util.hide(t.parentDom)
                    }, 2e3)
                }
            }
        }]),
        t
    }());
    exports.default = r
}
, function(t, exports, e) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }),
    exports.configOnline = void 0;
    var i = e(4)
      , n = "https://hudong.alicdn.com/api/data/v2/052b1c26dd4940cf957deb085c1c7a5a.js"
      , s = {
        uaConfig: null,
        callBackList: [],
        init: function(t) {
            var e = this;
            this.uaConfig || window.setYKPhoneUaConfig ? this.uaConfig ? this.check() && t(!0) : this.callBackList.push(t) : (this.callBackList.push(t),
            window.setYKPhoneUaConfig = function(t) {
                e.uaConfig = t,
                e.callBack(),
                window.setYKPhoneUaConfig = null
            }
            ,
            i.util.loadfile(n + "?_" + (new Date).getTime(), "js"))
        },
        check: function() {
            for (var t = this.uaConfig && this.uaConfig.uaList ? this.uaConfig.uaList : [], e = navigator.userAgent.toLowerCase(), i = 0, n = t.length; i < n; i++)
                if (e.indexOf(t[i].uaKey.toLowerCase()) > -1)
                    return !0
        },
        callBack: function() {
            if (this.check() && this.callBackList.length > 0)
                for (var t = 0, e = this.callBackList.length; t < e; t++)
                    this.callBackList[t](!0)
        }
    };
    exports.configOnline = s
}
, function(t, exports) {
    "use strict";
    function e(t, e) {
        function i() {
            m = g.children,
            y = m.length,
            m.length < 2 && (e.continuous = !1),
            p.transitions && e.continuous && m.length < 3 && (g.appendChild(m[0].cloneNode(!0)),
            g.appendChild(g.children[1].cloneNode(!0)),
            m = g.children),
            v = new Array(m.length),
            _ = document.body.offsetWidth,
            g.style.width = m.length * _ + "px";
            for (var i = m.length; i--; ) {
                var n = m[i];
                n.style.width = _ + "px",
                n.setAttribute("data-index", i),
                p.transitions && (n.style.left = i * -_ + "px",
                r(i, b > i ? -_ : b < i ? _ : 0, 0))
            }
            e.continuous && p.transitions && (r(a(b - 1), -_, 0),
            r(a(b + 1), _, 0)),
            p.transitions || (g.style.left = b * -_ + "px"),
            t.style.visibility = "visible"
        }
        function n() {
            e.continuous ? o(b - 1) : b && o(b - 1)
        }
        function s() {
            e.continuous ? o(b + 1) : b < m.length - 1 && o(b + 1)
        }
        function a(t) {
            return (m.length + t % m.length) % m.length
        }
        function o(t, i) {
            if (b != t) {
                if (p.transitions) {
                    var n = Math.abs(b - t) / (b - t);
                    if (e.continuous) {
                        var s = n;
                        n = -v[a(t)] / _,
                        n !== s && (t = -n * m.length + t)
                    }
                    for (var o = Math.abs(b - t) - 1; o--; )
                        r(a((t > b ? t : b) - o - 1), _ * n, 0);
                    t = a(t),
                    r(b, _ * n, i || w),
                    r(t, 0, i || w),
                    e.continuous && r(a(t - n), -(_ * n), 0)
                } else
                    t = a(t),
                    u(b * -_, t * -_, i || w);
                b = t,
                f(e.callback && e.callback(b, m[b]))
            }
        }
        function r(t, e, i) {
            l(t, e, i),
            v[t] = e
        }
        function l(t, e, i) {
            var n = m[t]
              , s = n && n.style;
            s && (s.webkitTransitionDuration = s.MozTransitionDuration = s.msTransitionDuration = s.OTransitionDuration = s.transitionDuration = i + "ms",
            s.webkitTransform = "translate(" + e + "px,0)translateZ(0)",
            s.msTransform = s.MozTransform = s.OTransform = "translateX(" + e + "px)")
        }
        function u(t, i, n) {
            if (!n)
                return void (g.style.left = i + "px");
            var s = +new Date
              , a = setInterval(function() {
                var o = +new Date - s;
                return o > n ? (g.style.left = i + "px",
                T && d(),
                e.transitionEnd && e.transitionEnd.call(event, b, m[b]),
                void clearInterval(a)) : void (g.style.left = (i - t) * (Math.floor(o / n * 100) / 100) + t + "px")
            }, 4)
        }
        function d() {
            A = setTimeout(s, T)
        }
        function h() {
            T = e.auto > 0 ? e.auto : 0,
            clearTimeout(A)
        }
        var c = function() {}
          , f = function(t) {
            setTimeout(t || c, 0)
        }
          , p = {
            addEventListener: !!window.addEventListener,
            touch: "ontouchstart"in window || window.DocumentTouch && document instanceof DocumentTouch,
            transitions: function(t) {
                var e = ["transitionProperty", "WebkitTransition", "MozTransition", "OTransition", "msTransition"];
                for (var i in e)
                    if (void 0 !== t.style[e[i]])
                        return !0;
                return !1
            }(document.createElement("swipe"))
        };
        if (t) {
            var m, v, _, y, g = t.children[0];
            e = e || {};
            var b = parseInt(e.startSlide, 10) || 0
              , w = e.speed || 300;
            e.continuous = void 0 === e.continuous || e.continuous;
            var A, E, T = e.auto || 0, k = {}, P = {}, S = {
                handleEvent: function(t) {
                    switch (t.type) {
                    case "touchstart":
                        this.start(t);
                        break;
                    case "touchmove":
                        this.move(t);
                        break;
                    case "touchend":
                        f(this.end(t));
                        break;
                    case "webkitTransitionEnd":
                    case "msTransitionEnd":
                    case "oTransitionEnd":
                    case "otransitionend":
                    case "transitionend":
                        f(this.transitionEnd(t));
                        break;
                    case "resize":
                        f(i)
                    }
                    e.stopPropagation && t.stopPropagation()
                },
                start: function(t) {
                    var e = t.touches[0];
                    k = {
                        x: e.pageX,
                        y: e.pageY,
                        time: +new Date
                    },
                    E = void 0,
                    P = {},
                    g.addEventListener("touchmove", this, !1),
                    g.addEventListener("touchend", this, !1)
                },
                move: function(t) {
                    if (!(t.touches.length > 1 || t.scale && 1 !== t.scale)) {
                        e.disableScroll && t.preventDefault();
                        var i = t.touches[0];
                        P = {
                            x: i.pageX - k.x,
                            y: i.pageY - k.y
                        },
                        "undefined" == typeof E && (E = !!(E || Math.abs(P.x) < Math.abs(P.y))),
                        E || (t.preventDefault(),
                        h(),
                        e.continuous ? (l(a(b - 1), P.x + v[a(b - 1)], 0),
                        l(b, P.x + v[b], 0),
                        l(a(b + 1), P.x + v[a(b + 1)], 0)) : (P.x = P.x / (!b && P.x > 0 || b == m.length - 1 && P.x < 0 ? Math.abs(P.x) / _ + 1 : 1),
                        l(b - 1, P.x + v[b - 1], 0),
                        l(b, P.x + v[b], 0),
                        l(b + 1, P.x + v[b + 1], 0)))
                    }
                },
                end: function(t) {
                    var i = +new Date - k.time
                      , n = Number(i) < 250 && Math.abs(P.x) > 20 || Math.abs(P.x) > _ / 2
                      , s = !b && P.x > 0 || b == m.length - 1 && P.x < 0;
                    e.continuous && (s = !1);
                    var o = P.x < 0;
                    E || (n && !s ? (o ? (e.continuous ? (r(a(b - 1), -_, 0),
                    r(a(b + 2), _, 0)) : r(b - 1, -_, 0),
                    r(b, v[b] - _, w),
                    r(a(b + 1), v[a(b + 1)] - _, w),
                    b = a(b + 1)) : (e.continuous ? (r(a(b + 1), _, 0),
                    r(a(b - 2), -_, 0)) : r(b + 1, _, 0),
                    r(b, v[b] + _, w),
                    r(a(b - 1), v[a(b - 1)] + _, w),
                    b = a(b - 1)),
                    e.callback && e.callback(b, m[b])) : e.continuous ? (r(a(b - 1), -_, w),
                    r(b, 0, w),
                    r(a(b + 1), _, w)) : (r(b - 1, -_, w),
                    r(b, 0, w),
                    r(b + 1, _, w))),
                    g.removeEventListener("touchmove", S, !1),
                    g.removeEventListener("touchend", S, !1)
                },
                transitionEnd: function(t) {
                    parseInt(t.target.getAttribute("data-index"), 10) == b && (T && d(),
                    e.transitionEnd && e.transitionEnd.call(t, b, m[b]))
                }
            };
            return i(),
            T && d(),
            p.addEventListener ? (p.touch && g.addEventListener("touchstart", S, !1),
            p.transitions && (g.addEventListener("webkitTransitionEnd", S, !1),
            g.addEventListener("msTransitionEnd", S, !1),
            g.addEventListener("oTransitionEnd", S, !1),
            g.addEventListener("otransitionend", S, !1),
            g.addEventListener("transitionend", S, !1)),
            window.addEventListener("resize", S, !1)) : window.onresize = function() {
                i()
            }
            ,
            {
                setup: function() {
                    i()
                },
                slide: function(t, e) {
                    h(),
                    o(t, e)
                },
                prev: function() {
                    h(),
                    n()
                },
                next: function() {
                    h(),
                    s()
                },
                stop: function() {
                    h()
                },
                getPos: function() {
                    return b
                },
                getNumSlides: function() {
                    return y
                },
                kill: function() {
                    h(),
                    g.style.width = "",
                    g.style.left = "";
                    for (var t = m.length; t--; ) {
                        var e = m[t];
                        e.style.width = "",
                        e.style.left = "",
                        p.transitions && l(t, 0, 0)
                    }
                    p.addEventListener ? (g.removeEventListener("touchstart", S, !1),
                    g.removeEventListener("webkitTransitionEnd", S, !1),
                    g.removeEventListener("msTransitionEnd", S, !1),
                    g.removeEventListener("oTransitionEnd", S, !1),
                    g.removeEventListener("otransitionend", S, !1),
                    g.removeEventListener("transitionend", S, !1),
                    window.removeEventListener("resize", S, !1)) : window.onresize = null
                }
            }
        }
    }
    t.exports = e
}
, function(t, exports, e) {
    "use strict";
    function i(t) {
        if (t && t.__esModule)
            return t;
        var e = {};
        if (null != t)
            for (var i in t)
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return e.default = t,
        e
    }
    function n(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    function s(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var a = function() {
        function t(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        return function(e, i, n) {
            return i && t(e.prototype, i),
            n && t(e, n),
            e
        }
    }()
      , o = e(4)
      , r = e(1)
      , l = n(r)
      , u = e(8)
      , d = i(u)
      , h = e(35)
      , c = n(h)
      , f = e(27)
      , p = n(f)
      , m = e(18)
      , v = n(m)
      , _ = e(2)
      , y = e(15)
      , g = n(y)
      , b = function() {
        function t(e, i, n) {
            s(this, t),
            this.TAG = "VideoInterest",
            this.parentDom = e,
            this._player = i,
            this.e = {},
            this.videoInterestData = n.concat(),
            this.callAppOpts = {
                isNeedDownload: !0,
                timeout: 2e3,
                downloadUrl: "",
                uri: "",
                replace: !1,
                params: {
                    action: "",
                    vid: "",
                    source: "",
                    refer: "",
                    universalLinkState: !1
                },
                pathname: "splash",
                exdParams: {}
            },
            this._createDom(),
            this._emitter = new l.default,
            this.canOpenApp = {
                android: "MQQBrowser|ucbrowser|weibo|micromessenger|AliApp|article",
                ios: "MQQBrowser|ucbrowser|weibo|QHBrowser|micromessenger|AliApp|article",
                noIntent: "MQQBrowser|ucbrowser|baidubrowser|sogouMobilebrowser|mxbrowser|LieBao|360 APhone|windvane|youku",
                iosNoUN: "Crios|Fxios|baidubrowser|sogouMobilebrowser|QHBrowser|Mxios"
            },
            this._getVideoInfo(),
            this._bindEvent(),
            this._readerList(),
            this._slider()
        }
        return a(t, [{
            key: "_createDom",
            value: function() {
                this.sliderDom = o.util.createElement("x-slider-app"),
                this.sliderWrapDom = o.util.createElement("videoSwiper", "v-swiper"),
                this.sliderItemsDom = o.util.createElement("swiper-items", ""),
                this.sliderDotsDom = o.util.createElement("swiper_dots", "swiper_dots"),
                this.sliderWrapDom.appendChild(this.sliderItemsDom),
                this.sliderDom.appendChild(this.sliderWrapDom),
                this.sliderDom.appendChild(this.sliderDotsDom),
                this.parentDom.appendChild(this.sliderDom)
            }
        }, {
            key: "_bindEvent",
            value: function() {
                this.ifEvent || (this.ifEvent = !0,
                this.e = {
                    openApp: this.openApp.bind(this)
                })
            }
        }, {
            key: "_getVideoInfo",
            value: function() {
                d.os.isIOS ? 15 : 17,
                o.util.cookie.getCookie("__ysuid"),
                this._player.getVideoInfo().id,
                this._player.getUserInfo().uid
            }
        }, {
            key: "_readerList",
            value: function() {
                var t = []
                  , e = [];
                t = this.videoInterestData.splice(0, 4);
                for (var i = 0, n = t.length; i < n; i++) {
                    var s = o.util.createElement("swiper-item")
                      , a = t[i].data.title
                      , r = t[i].data.lbTexts[0].title ? t[i].data.lbTexts[0].title.slice(1) : 0
                      , l = o.util.createElement("list")
                      , u = o.util.createElement("video-info")
                      , d = o.util.createElement("video-pic", "", '<img vid="' + t[i].id + '" src="' + t[i].data.img + '"/>', "div")
                      , h = o.util.createElement("video-txt", "", '<div vid="' + t[i].id + '" style="-webkit-box-orient: vertical;">' + o.util.htmlEncodeAll(a) + '</div><em vid="' + t[i].id + '">' + r + "</em>", "div")
                      , c = o.util.createElement("videoBtn", "", "用app观看", "button");
                    l.setAttribute("vid", t[i].id),
                    l.setAttribute("codeId", t[i].data.videoId),
                    u.setAttribute("vid", t[i].id),
                    d.setAttribute("vid", t[i].id),
                    h.setAttribute("vid", t[i].id),
                    c.setAttribute("vid", t[i].id),
                    u.appendChild(d),
                    u.appendChild(h),
                    l.appendChild(u),
                    l.appendChild(c),
                    s.appendChild(l),
                    o.util.addEventListenerHander(l, "click", this.e.openApp),
                    e.push("<i></i>"),
                    this.sliderDotsDom.innerHTML = e.join(""),
                    this.sliderDotsDom.querySelectorAll("i")[0].setAttribute("class", "on"),
                    this.sliderItemsDom.appendChild(s)
                }
            }
        }, {
            key: "_slider",
            value: function() {
                var t = this;
                setTimeout(function() {
                    t.mySwipe = (0,
                    c.default)(t.sliderDom.querySelector("#v-swiper"), {
                        auto: 0,
                        continuous: !0,
                        disableScroll: !1,
                        stopPropagation: !1,
                        callback: function(e, i) {
                            for (var n = t.sliderDom.querySelector("#swiper_dots").querySelectorAll("i"), s = 0, a = n.length; s < a; s++)
                                s == e ? n[s].classList.add("on") : n[s].classList.remove("on")
                        }
                    })
                }, 200)
            }
        }, {
            key: "showList",
            value: function() {
                this._player.sendGoldLog("/yt/youkuphoneplaypage.myoukuinteraction.show_to_player", "EXP", "show_type=showplayer-recommend", "H1567382961"),
                o.util.show(this.sliderDom),
                this.mySwipe && this.mySwipe.setup()
            }
        }, {
            key: "hideList",
            value: function() {
                o.util.hide(this.sliderDom),
                this.mySwipe && this.mySwipe.stop()
            }
        }, {
            key: "openApp",
            value: function(t) {
                (0,
                g.default)({
                    spmC: "player",
                    spm: "a2h0j.10182321.player.commend",
                    videoId: window.vid || ""
                }, "CLK");
                var e = t.target.getAttribute("vid")
                  , i = t.target.getAttribute("codeId");
                if (this._player.sendGoldLog("/yt/youkuphoneplaypage.myoukuinteraction.click_to_player", "CLK", "click_type=player-recommend", "H1568306482"),
                this.callAppOpts) {
                    if (this.callAppOpts.params.source = "playerrecommend",
                    e && (this.callAppOpts.exdParams.position = "playerrecommend",
                    this.callAppOpts.params.vid = e,
                    this.callAppOpts.params.action = "play",
                    this.callAppOpts.pathname = "play"),
                    _.browser.isYouku)
                        return this._player.pause(),
                        void v.default.play({
                            vid: i
                        });
                    this.callAppOpts.downloadUrl = "https://m.youku.com/download",
                    window.vid && (this.callAppOpts.params.source = "a2h0j.10182321." + this.callAppOpts.params.source),
                    window.vData && (this.callAppOpts.params.data_vdotype = window.toFind ? "short" : "long",
                    this.callAppOpts.params.data_logver = "v2"),
                    this.exdUrl ? (this.callAppOpts.downloadUrl = this.exdUrl,
                    p.default.download(this.callAppOpts)) : p.default.gotoPage(this.callAppOpts)
                }
            }
        }, {
            key: "toThousands",
            value: function(t) {
                return (t || 0).toString().replace(/(\d)(?=(?:\d{4})+$)/g, "$1,")
            }
        }]),
        t
    }();
    exports.default = b
}
, function(t, exports, e) {
    "use strict";
    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    function n(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    function s(t, e) {
        if (!t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }
    function a(t, e) {
        if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var o = function() {
        function t(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        return function(e, i, n) {
            return i && t(e.prototype, i),
            n && t(e, n),
            e
        }
    }()
      , r = function t(e, i, n) {
        null === e && (e = Function.prototype);
        var s = Object.getOwnPropertyDescriptor(e, i);
        if (void 0 === s) {
            var a = Object.getPrototypeOf(e);
            return null === a ? void 0 : t(a, i, n)
        }
        if ("value"in s)
            return s.value;
        var o = s.get;
        if (void 0 !== o)
            return o.call(n)
    }
      , l = e(4)
      , u = e(2)
      , d = e(31)
      , h = i(d)
      , c = (l.YoukuH5PlayerCore.STATE,
    function(t) {
        function e(t, i, a, o) {
            n(this, e);
            var r = s(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, i));
            r.TAG = "H5PhonePlayer",
            r.playerCon = a;
            var l = o || {};
            return i.width && i.height && (l.width = i.width,
            l.height = i.height),
            r.h5_firstFlag = !0,
            r.ad_firstFlag = !0,
            u.browser.isIOS && /weibo/i.test(window.navigator.userAgent) || r._initFullScreenPro(),
            r._control = new h.default(r.playerCon,r,l),
            (r.config.isMuted || r.config.purePlay) && r._control.changeMute(!0),
            r
        }
        return a(e, t),
        o(e, [{
            key: "destroyComplete",
            value: function() {
                r(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "destroyComplete", this).call(this),
                this.playerCon.innerHTML = "",
                this.playerCon.parentElement.innerHTML = ""
            }
        }, {
            key: "upsDataReady",
            value: function() {
                this.h5_firstFlag = !0,
                this.ad_firstFlag = !0,
                this._control.hideLoading();
                this.getVideoInfo();
                this.error || this._control.init(),
                this.config.events && this.config.events.onReady && this.config.events.onReady()
            }
        }, {
            key: "upsDataError",
            value: function(t) {
                this.h5_firstFlag = !0,
                this.ad_firstFlag = !0,
                this._control.hideLoading(),
                this._control.onError(t)
            }
        }, {
            key: "upsDataFail",
            value: function(t) {
                this._control.hideLoading();
                var e = t && t.note ? t.note : "获取视频数据超时，请重试";
                this._control.showError(e),
                this.config.events && this.config.events.onError && this.config.events.onError()
            }
        }, {
            key: "onPlay",
            value: function() {
                this._control.showLoading(),
                this.h5_firstFlag && (this.h5_firstFlag = !1,
                this.config.events && this.config.events.onPlayStart && this.config.events.onPlayStart({
                    vid: this.config.videoId,
                    ccode: this.config.ccode,
                    clientId: this.config.client_id,
                    control: this.config.control
                })),
                this.config.events && this.config.events.onPlay && this.config.events.onPlay(),
                l.util.show(this.mediaElement),
                this._control.onPlay()
            }
        }, {
            key: "onPause",
            value: function() {
                this._control.onPause(),
                this.config.events && this.config.events.onPause && this.config.events.onPause()
            }
        }, {
            key: "onError",
            value: function(t) {
                this.sendEventLog("xve", "e"),
                this._control.showError("视频播放失败，请重试")
            }
        }, {
            key: "onStalled",
            value: function(t) {
                this.isPause || this.isEnd || this._control.onLoading()
            }
        }, {
            key: "onSuspend",
            value: function(t) {
                this.isPause || this.isEnd || this._control.onLoading()
            }
        }, {
            key: "onWaiting",
            value: function(t) {
                this.isPause || this.isEnd || this._control.onLoading()
            }
        }, {
            key: "onCanplay",
            value: function(t) {
                this._control.onCanplay()
            }
        }, {
            key: "onTimeupdate",
            value: function(t, e) {
                this._control.hideLoading(),
                this._control.onTimeUpdate(e),
                this.config.events && this.config.events.onTimeupdate && this.config.events.onTimeupdate(e)
            }
        }, {
            key: "onEnded",
            value: function(t) {
                if (this.control.loop)
                    return void this.play();
                if (this._control.onEnded(t),
                this.config.events && this.config.events.onPlayEnd) {
                    var e = this.getVideoList()
                      , i = (this.getUserInfo.vip,
                    !this.getTrialInfo() && e && e.next ? e.next : null);
                    this.config.events.onPlayEnd(i)
                }
            }
        }, {
            key: "onAdTimeUpdate",
            value: function(t, e, i, n) {
                this._control.onAdTimeUpdate(e, n)
            }
        }, {
            key: "onAdStartPlay",
            value: function(t, e) {
                this.ad_firstFlag && "front" === e && (this.ad_firstFlag = !1,
                this.config.events && this.config.events.onAdPlayStart && this.config.events.onAdPlayStart()),
                this._control.onAdPlay()
            }
        }, {
            key: "onAbortError",
            value: function() {
                this._control.onAbortError()
            }
        }, {
            key: "onAdCanPlay",
            value: function(t, e) {
                this._control.onAdCanPlay()
            }
        }, {
            key: "onAdPause",
            value: function(t, e) {
                this._control.onAdPause()
            }
        }, {
            key: "onAdEnd",
            value: function(t, e) {
                this._control.onAdEnd()
            }
        }, {
            key: "onAdError",
            value: function(t, e) {}
        }, {
            key: "onAdReady",
            value: function(t, e) {
                "front" === e && this.config.events && this.config.events.onPlayerReady && this.config.events.onPlayerReady()
            }
        }, {
            key: "onAdLoading",
            value: function() {
                this._control.showLoading()
            }
        }, {
            key: "adDataOk",
            value: function(t, e) {
                this._control.initAd(t, e)
            }
        }, {
            key: "pauseAdDataOk",
            value: function(t) {
                this._control.showPauseAd(t),
                this.sendPauseAdSUS(t)
            }
        }, {
            key: "adDataError",
            value: function() {}
        }, {
            key: "_initFullScreenPro",
            value: function() {
                for (var t = ["fullScreen", "webkitIsFullScreen", "mozFullScreen", "msFullscreenElement"], e = {
                    fullScreen: "exitFullscreen",
                    webkitIsFullScreen: "webkitCancelFullScreen",
                    mozFullScreen: "mozCancelFullScreen",
                    msFullscreenElement: "msExitFullScreen"
                }, i = {
                    fullScreen: "requestFullScreen",
                    webkitIsFullScreen: "webkitRequestFullScreen",
                    mozFullScreen: "mozRequestFullScreen",
                    msFullscreenElement: "msRequestFullScreen"
                }, n = {
                    fullScreen: "fullscreenchange",
                    webkitIsFullScreen: "webkitfullscreenchange",
                    mozFullScreen: "mozfullscreenchange",
                    msFullscreenElement: "MSFullscreenChange"
                }, s = 0; s < t.length; s++) {
                    var a = t[s];
                    if ("undefined" != typeof document[a]) {
                        this._fullscreenProperty = a,
                        this._enterFullScreenApi = i[a],
                        this._exitFullScreenApi = e[a],
                        this._eventName = n[a];
                        break
                    }
                }
                this._addFullscreenEvents()
            }
        }, {
            key: "_addFullscreenEvents",
            value: function() {
                var t = this;
                this.mediaElement.addEventListener("webkitbeginfullscreen", function() {
                    t._control.changeFullState(!0)
                }),
                this.mediaElement.addEventListener("webkitendfullscreen", function() {
                    t._control.changeFullState(!1)
                }),
                "" !== this._eventName && this._eventName && document.addEventListener(this._eventName, function() {
                    document[t._fullscreenProperty] === !1 ? t._control.changeFullState(!1) : t._control.changeFullState(!0)
                })
            }
        }, {
            key: "switchFullStyle",
            value: function(t) {
                t ? l.util.addClass(this.playerCon, "ykplayer-fullscreen") : l.util.removeClass(this.playerCon, "ykplayer-fullscreen")
            }
        }, {
            key: "launchFullscreen",
            value: function() {
                this.control.fullscreen = !0,
                this._enterFullScreenApi ? this.playerCon[this._enterFullScreenApi]() : this.mediaElement.webkitSupportsFullscreen && this.mediaElement.readyState >= 1 && this.mediaElement.webkitEnterFullscreen(),
                this.config.events && this.config.events.onSwitchFullScreen && this.config.events.onSwitchFullScreen(this.control.fullscreen)
            }
        }, {
            key: "exitFullscreen",
            value: function() {
                this.control.fullscreen = !1,
                this._exitFullScreenApi && document[this._exitFullScreenApi](),
                this.config.events && this.config.events.onSwitchFullScreen && this.config.events.onSwitchFullScreen(this.control.fullscreen)
            }
        }, {
            key: "switchFullScreen",
            value: function() {
                this._control && this._control.switchFullScreen()
            }
        }]),
        e
    }(l.YoukuH5PlayerCore));
    exports.default = c
}
, function(t, exports, e) {
    (function(t) {
        function i(t, e) {
            this._id = t,
            this._clearFn = e
        }
        var n = "undefined" != typeof t && t || "undefined" != typeof self && self || window
          , s = Function.prototype.apply;
        exports.setTimeout = function() {
            return new i(s.call(setTimeout, n, arguments),clearTimeout)
        }
        ,
        exports.setInterval = function() {
            return new i(s.call(setInterval, n, arguments),clearInterval)
        }
        ,
        exports.clearTimeout = exports.clearInterval = function(t) {
            t && t.close()
        }
        ,
        i.prototype.unref = i.prototype.ref = function() {}
        ,
        i.prototype.close = function() {
            this._clearFn.call(n, this._id)
        }
        ,
        exports.enroll = function(t, e) {
            clearTimeout(t._idleTimeoutId),
            t._idleTimeout = e
        }
        ,
        exports.unenroll = function(t) {
            clearTimeout(t._idleTimeoutId),
            t._idleTimeout = -1
        }
        ,
        exports._unrefActive = exports.active = function(t) {
            clearTimeout(t._idleTimeoutId);
            var e = t._idleTimeout;
            e >= 0 && (t._idleTimeoutId = setTimeout(function() {
                t._onTimeout && t._onTimeout()
            }, e))
        }
        ,
        e(83),
        exports.setImmediate = "undefined" != typeof self && self.setImmediate || "undefined" != typeof t && t.setImmediate || this && this.setImmediate,
        exports.clearImmediate = "undefined" != typeof self && self.clearImmediate || "undefined" != typeof t && t.clearImmediate || this && this.clearImmediate
    }
    ).call(exports, function() {
        return this
    }())
}
, function(t, exports) {
    function e() {
        for (var t = {}, e = 0; e < arguments.length; e++) {
            var n = arguments[e];
            for (var s in n)
                i.call(n, s) && (t[s] = n[s])
        }
        return t
    }
    t.exports = e;
    var i = Object.prototype.hasOwnProperty
}
, function(t, exports, e) {
    var i = e(16)
      , n = e(41);
    !function(t, e) {
        var s = t.navigator.userAgent;
        t.location.search;
        i(e),
        n(e, s)
    }(window, window.orbit || (window.orbit = {}))
}
, function(t, exports) {
    t.exports = function(t, e) {
        if (t.env = t.env || {},
        !t.env._osReady) {
            t.env._osReady = !0;
            var i;
            if (i = e.match(/Windows\sPhone\s(?:OS\s)?([\d\.]+)/))
                t.env.os = {
                    name: "Windows Phone",
                    isWindowsPhone: !0,
                    version: i[1]
                };
            else if (e.match(/Safari/) && (i = e.match(/Android[\s\/]([\d\.]+)/)))
                t.env.os = {
                    version: i[1]
                },
                e.match(/Mobile\s+Safari/) ? (t.env.os.name = "Android",
                t.env.os.isAndroid = !0) : (t.env.os.name = "AndroidPad",
                t.env.os.isAndroidPad = !0),
                t.env.os.isAndroidOS = t.env.os.isAndroid || t.env.os.isAndroidPad;
            else if (i = e.match(/(iPhone|iPad|iPod)/)) {
                var n = i[1];
                (i = e.match(/OS ([\d_\.]+) like Mac OS X/)) && (t.env.os = {
                    name: n,
                    isIPhone: "iPhone" === n || "iPod" === n,
                    isIPad: "iPad" === n,
                    isIOS: !0,
                    version: i[1].split("_").join(".")
                })
            }
            t.env.os || (t.env.os = {
                name: "unknown",
                version: "0.0.0"
            }),
            t.version && (t.env.os.version = t.version(t.env.os.version))
        }
    }
}
, function(t, exports) {
    t.exports = function(t, e) {
        if (t.env = t.env || {},
        !t.env._thirdAppReady) {
            t.env._thirdAppReady = !0;
            e.match(/Weibo/i) ? t.env.thirdapp = {
                appname: "Weibo",
                isWeibo: !0
            } : e.match(/MicroMessenger/i) ? t.env.thirdapp = {
                appname: "Weixin",
                isWeixin: !0
            } : e.match(/QQ\//i) ? t.env.thirdapp = {
                appname: "QQ",
                isQQ: !0
            } : e.match(/Youku\/([0-9.]+)/) ? t.env.thirdapp = {
                appname: "Youku",
                isYouku: !0,
                version: e.match(/Youku\/([0-9.]+)/)[1],
                bridgeSdk: e.indexOf("Bridge_SDK") > 0
            } : t.env.thirdapp = !1
        }
    }
}
, function(t, exports, e) {
    var i = e(16)
      , n = e(42);
    !function(t, e) {
        var s = t.navigator.userAgent;
        t.location.search;
        i(e),
        n(e, s)
    }(window, window.orbit || (window.orbit = {}))
}
, function(t, exports) {
    t.exports = function(t, e) {
        if (t.env = t.env || {},
        !t.env._appReady) {
            t.env._appReady = !0;
            var i, n;
            (n = e.match(/WindVane[\/\s]([\d\.\_]+)/)) && (i = n[1]);
            var s = !1
              , a = ""
              , o = ""
              , r = ""
              , l = "";
            "object" == typeof window && (l = window._ua_popLayer);
            var u = !1
              , d = "";
            (n = e.match(/AliApp\(([A-Z\-]+)\/([\d\.]+)\)/i)) && (s = !0,
            a = n[1],
            r = n[2],
            o = a.indexOf("-PD") > 0 ? t.env.os.isIOS ? "iPad" : t.env.os.isAndroid ? "AndroidPad" : t.env.os.name : t.env.os.name),
            !a && e.indexOf("TBIOS") > 0 && (a = "TB"),
            l && (n = l.match(/PopLayer\/([\d\.]+)/i)) && (u = !0,
            d = n[1]),
            s ? t.env.aliapp = {
                windvane: t.version(i || "0.0.0"),
                appname: a || "unkown",
                version: t.version(r || "0.0.0"),
                platform: o || t.env.os.name,
                poplayer: u || !1,
                poplayerVersion: t.version(d || "0.0.0")
            } : t.env.aliapp = !1,
            "AENT" == a.toUpperCase() ? t.env.isAliPlanet = !0 : "XM" == a.toUpperCase() && (t.env.isXiami = !0),
            t.env.taobaoApp = t.env.aliapp
        }
    }
}
, function(t, exports) {
    t.exports = function(t, e) {
        if (t.env = t.env || {},
        !t.env._browserReady) {
            t.env._browserReady = !0;
            var i;
            (i = e.match(/(?:UCWEB|UCBrowser\/)([\d\.]+)/)) ? t.env.browser = {
                name: "UC",
                isUC: !0,
                version: i[1]
            } : (i = e.match(/MQQBrowser\/([\d\.]+)/)) ? t.env.browser = {
                name: "QQ",
                isQQ: !0,
                version: i[1]
            } : (i = e.match(/(?:Firefox|FxiOS)\/([\d\.]+)/)) ? t.env.browser = {
                name: "Firefox",
                isFirefox: !0,
                version: i[1]
            } : (i = e.match(/MSIE\s([\d\.]+)/)) || (i = e.match(/IEMobile\/([\d\.]+)/)) ? (t.env.browser = {
                version: i[1]
            },
            e.match(/IEMobile/) ? (t.env.browser.name = "IEMobile",
            t.env.browser.isIEMobile = !0) : (t.env.browser.name = "IE",
            t.env.browser.isIE = !0),
            e.match(/Android|iPhone/) && (t.env.browser.isIELikeWebkit = !0)) : (i = e.match(/(?:Chrome|CriOS)\/([\d\.]+)/)) ? (t.env.browser = {
                name: "Chrome",
                isChrome: !0,
                version: i[1]
            },
            e.match(/Version\/[\d+\.]+\s*Chrome/) && (t.env.browser.name = "Chrome Webview",
            t.env.browser.isWebview = !0)) : e.match(/Safari/) && (i = e.match(/Android[\s\/]([\d\.]+)/)) ? t.env.browser = {
                name: "Android",
                isAndroid: !0,
                version: i[1]
            } : e.match(/iPhone|iPad|iPod/) && (e.match(/Safari/) && (i = e.match(/Version\/([\d\.]+)/)) ? t.env.browser = {
                name: "Safari",
                isSafari: !0,
                version: i[1]
            } : (i = e.match(/OS ([\d_\.]+) like Mac OS X/)) && (t.env.browser = {
                name: "iOS Webview",
                isWebview: !0,
                version: i[1].replace(/\_/g, ".")
            })),
            t.env.browser || (t.env.browser = {
                name: "unknown",
                version: "0.0.0"
            }),
            t.version && (t.env.browser.version = t.version(t.env.browser.version))
        }
    }
}
, function(t, exports) {
    t.exports = function(t, e) {
        if (t.env = t.env || {},
        !t.env._osReady) {
            t.env._osReady = !0;
            var i;
            if (i = e.match(/Windows\sPhone\s(?:OS\s)?([\d\.]+)/))
                t.env.os = {
                    name: "Windows Phone",
                    isWindowsPhone: !0,
                    version: i[1]
                };
            else if (e.match(/Safari/) && (i = e.match(/Android[\s\/]([\d\.]+)/)))
                t.env.os = {
                    version: i[1]
                },
                e.match(/Mobile\s+Safari/) ? (t.env.os.name = "Android",
                t.env.os.isAndroid = !0) : (t.env.os.name = "AndroidPad",
                t.env.os.isAndroidPad = !0),
                t.env.os.isAndroidOS = t.env.os.isAndroid || t.env.os.isAndroidPad;
            else if (i = e.match(/(iPhone|iPad|iPod)/)) {
                var n = i[1];
                (i = e.match(/OS ([\d_\.]+) like Mac OS X/)) && (t.env.os = {
                    name: n,
                    isIPhone: "iPhone" === n || "iPod" === n,
                    isIPad: "iPad" === n,
                    isIOS: !0,
                    version: i[1].split("_").join(".")
                })
            }
            t.env.os || (t.env.os = {
                name: "unknown",
                version: "0.0.0"
            }),
            t.version && (t.env.os.version = t.version(t.env.os.version))
        }
    }
}
, function(t, exports) {
    t.exports = function(t, e) {
        if (t.env = t.env || {},
        !t.env._paramsReady && (t.env._paramsReady = !0,
        e && (e = e.replace(/^\?/, ""),
        t.env.params = {},
        e)))
            for (var i = e.split("&"), n = 0; n < i.length; n++) {
                var s = i[n].split("=")[0]
                  , a = s + "="
                  , o = i[n].split(a)[1];
                i[n] = i[n].split("=");
                try {
                    t.env.params[i[n][0]] = decodeURIComponent(o)
                } catch (e) {
                    t.env.params[i[n][0]] = o
                }
            }
    }
}
, function(t, exports) {
    t.exports = function(t, e) {
        if (t.env = t.env || {},
        !t.env._thirdAppReady) {
            t.env._thirdAppReady = !0;
            e.match(/Weibo/i) ? t.env.thirdapp = {
                appname: "Weibo",
                isWeibo: !0
            } : e.match(/MicroMessenger/i) ? t.env.thirdapp = {
                appname: "Weixin",
                isWeixin: !0
            } : e.match(/QQ\//i) ? t.env.thirdapp = {
                appname: "QQ",
                isQQ: !0
            } : e.match(/Youku\/([0-9.]+)/) ? t.env.thirdapp = {
                appname: "Youku",
                isYouku: !0,
                version: e.match(/Youku\/([0-9.]+)/)[1],
                bridgeSdk: e.indexOf("Bridge_SDK") > 0
            } : t.env.thirdapp = !1
        }
    }
}
, function(t, exports) {
    t.exports = function(t) {
        function e(t) {
            Object.defineProperty(this, "val", {
                value: t.toString(),
                enumerable: !0
            }),
            this.gt = function(t) {
                return e.compare(this, t) > 0
            }
            ,
            this.gte = function(t) {
                return e.compare(this, t) >= 0
            }
            ,
            this.lt = function(t) {
                return e.compare(this, t) < 0
            }
            ,
            this.lte = function(t) {
                return e.compare(this, t) <= 0
            }
            ,
            this.eq = function(t) {
                return 0 === e.compare(this, t)
            }
        }
        t.env = t.env || {},
        t.env._versionReady || (t.env._versionReady = !0,
        e.prototype.toString = function() {
            return this.val
        }
        ,
        e.prototype.valueOf = function() {
            for (var t = this.val.split("."), e = [], i = 0; i < t.length; i++) {
                var n = parseInt(t[i], 10);
                isNaN(n) && (n = 0);
                var s = n.toString();
                s.length < 5 && (s = Array(6 - s.length).join("0") + s),
                e.push(s),
                1 === e.length && e.push(".")
            }
            return parseFloat(e.join(""))
        }
        ,
        e.compare = function(t, e) {
            t = t.toString().split("."),
            e = e.toString().split(".");
            for (var i = 0; i < t.length || i < e.length; i++) {
                var n = parseInt(t[i], 10)
                  , s = parseInt(e[i], 10);
                if (n !== n && (n = 0),
                s !== s && (s = 0),
                n < s)
                    return -1;
                if (n > s)
                    return 1
            }
            return 0
        }
        ,
        t.version = function(t) {
            return new e(t)
        }
        )
    }
}
, function(t, exports) {
    function e() {
        var t = m[v];
        if (t)
            return t.spmA;
        var e = document.querySelector('meta[name="data-spm"]');
        return e && e.getAttribute("content")
    }
    function i() {
        var t = m[v];
        return t ? t.spmB : document.body.getAttribute("data-spm")
    }
    function n(t) {
        return "[object Object]" === p.call(t)
    }
    function s(t) {
        if (n(t))
            for (var e = 1, i = arguments.length; e < i; ++e) {
                var s = arguments[e];
                if (n(s))
                    for (var a in s)
                        s.hasOwnProperty(a) && (t[a] = s[a])
            }
        return t
    }
    function a(t, n, s) {
        if (t) {
            var a = e()
              , o = i()
              , r = (n || 0) + ""
              , l = (s || 0) + ""
              , u = t.split("#")
              , d = u[0].split("?");
            if (a && o) {
                var h = a + "." + o + "." + r + "." + l
                  , c = "spm=" + window.encodeURIComponent(h);
                t = d[0] + "?" + c,
                d[1] && (t += "&" + d[1]),
                u[1] && (t += "#" + u[1])
            }
        }
        return t
    }
    function o(t, e) {
        if ("string" == typeof t && (t = document.querySelector(t)),
        e = e || t && t.getAttribute("data-href"),
        t && window.g_SPM && window.g_SPM.getParam) {
            var i = window.g_SPM.getParam(t)
              , n = i.a + "." + i.b + "." + i.c + "." + i.d
              , s = "spm=" + window.encodeURIComponent(n)
              , a = e.split("?");
            e = a[0] + "?" + s,
            a.length > 1 && (e += "&" + a[1])
        }
        return e
    }
    function r(t, e, i, n, s) {
        n = n || "CLK";
        var a = "";
        if (i) {
            var o = [];
            for (var r in i)
                i.hasOwnProperty(r) && (s ? o.push(r + "=" + i[r]) : o.push(window.encodeURIComponent(r) + "=" + window.encodeURIComponent(i[r])));
            a = o.join("&")
        }
        _("record", function(i) {
            i(t, n, a, e)
        })
    }
    function l(t, e, i, n, s) {
        var a = document.body.getAttribute("data-spm")
          , o = f + a;
        t && (o += "." + t),
        r(o, e, i, n, s)
    }
    function u(t) {
        t = (t || "").split("#")[0].split("?")[0];
        var e = t.length
          , i = function(t) {
            var e, i = t.length, n = 0;
            for (e = 0; e < i; e++)
                n = 31 * n + t.charCodeAt(e);
            return n
        };
        return e ? i(e + "#" + t.charCodeAt(e - 1)) : -1
    }
    function d(t, n, s) {
        var a = "tb-beacon-aplus";
        if (document.querySelector("#" + a))
            g.resolve();
        else {
            var o = document.querySelector('[name="aplus-terminal"]');
            o || (o = document.createElement("meta"),
            o.setAttribute("name", "aplus-terminal"),
            o.setAttribute("content", "1"),
            document.head.appendChild(o));
            var r = document.createElement("script");
            r.setAttribute("type", "text/javascript"),
            r.setAttribute("id", a),
            r.setAttribute("src", "//g.alicdn.com/alilog/mlog/aplus_v2.js"),
            r.onload = function() {
                g.resolve()
            }
            ,
            document.body.appendChild(r)
        }
        n = n || e(),
        t = t || i();
        var l = u(n + "." + t);
        g.promise.then(function() {
            _("setPageSPM", function() {
                var e = window.goldlog;
                if (e.setPageSPM && e.setPageSPM(n, t),
                e.sendPV) {
                    if (window.g_SPM) {
                        s = s || {};
                        var i = window.g_SPM._current_spm = window.g_SPM._current_spm || {};
                        i.a = i.a || s.spmA || "0",
                        i.b = i.b || s.spmB || "0",
                        i.c = s.spmC || "0",
                        i.d = s.spmD || "0"
                    }
                    e.sendPV({
                        page_id: "",
                        checksum: l
                    })
                }
            })
        })
    }
    function h(t) {
        t && (s(m, t),
        Object.keys(t).forEach(function(n) {
            var s = t[n];
            s.name && (m[s.name] = m[s.name] || s),
            s.name = s.name || n,
            s.spmA = s.spmA || e(),
            s.spmB = s.spmB || i()
        }))
    }
    function c(t, e, i) {
        var n = m[v]
          , s = m[t]
          , a = e || 0
          , o = i || 0
          , r = function() {
            v = s.name,
            d(s.spmB, s.spmA, {
                spmA: n && n.spmA,
                spmB: n && n.spmB,
                spmC: a,
                spmD: o
            })
        };
        return !(!s || s === n) && (r(),
        !0)
    }
    var f = "/yt/ykplanet."
      , p = Object.prototype.toString
      , m = {}
      , v = null
      , _ = function(t, e) {
        !function() {
            var i = window.goldlog && window.goldlog[t];
            i ? e(i) : setTimeout(arguments.callee, 200)
        }()
    }
      , y = function() {
        var t = {
            resolved: !1
        };
        return t.promise = new Promise(function(e, i) {
            t.resolve = function() {
                t.resolved || (t.resolved = !0,
                e())
            }
            ,
            t.reject = i
        }
        ),
        t
    }
      , g = y()
      , b = {
        spmUrl: a,
        domSpmUrl: o,
        goldlog: r,
        goldlogPlanet: l,
        spa: {
            addPages: h,
            setPage: c
        }
    };
    t.exports = b
}
, function(t, exports, e) {
    t.exports = e(50)
}
, function(t, exports, e) {
    "use strict";
    e(53),
    e(54),
    t.exports = window.lib.windvane
}
, function(t, exports, e) {
    var require, require;
    (function(t) {
        !function t(e, i, n) {
            function s(o, r) {
                if (!i[o]) {
                    if (!e[o]) {
                        var l = "function" == typeof require && require;
                        if (!r && l)
                            return require(o, !0);
                        if (a)
                            return a(o, !0);
                        var u = new Error("Cannot find module '" + o + "'");
                        throw u.code = "MODULE_NOT_FOUND",
                        u
                    }
                    var d = i[o] = {
                        exports: {}
                    };
                    e[o][0].call(d.exports, function(t) {
                        var i = e[o][1][t];
                        return s(i ? i : t)
                    }, d, d.exports, t, e, i, n)
                }
                return i[o].exports
            }
            for (var a = "function" == typeof require && require, o = 0; o < n.length; o++)
                s(n[o]);
            return s
        }({
            1: [function(t, e) {
                function i() {}
                var n = e.exports = {};
                n.nextTick = function() {
                    var t = "undefined" != typeof window && window.setImmediate
                      , e = "undefined" != typeof window && window.postMessage && window.addEventListener;
                    if (t)
                        return function(t) {
                            return window.setImmediate(t)
                        }
                        ;
                    if (e) {
                        var i = [];
                        return window.addEventListener("message", function(t) {
                            var e = t.source;
                            if ((e === window || null === e) && "process-tick" === t.data && (t.stopPropagation(),
                            i.length > 0)) {
                                var n = i.shift();
                                n()
                            }
                        }, !0),
                        function(t) {
                            i.push(t),
                            window.postMessage("process-tick", "*")
                        }
                    }
                    return function(t) {
                        setTimeout(t, 0)
                    }
                }(),
                n.title = "browser",
                n.browser = !0,
                n.env = {},
                n.argv = [],
                n.on = i,
                n.addListener = i,
                n.once = i,
                n.off = i,
                n.removeListener = i,
                n.removeAllListeners = i,
                n.emit = i,
                n.binding = function() {
                    throw new Error("process.binding is not supported")
                }
                ,
                n.cwd = function() {
                    return "/"
                }
                ,
                n.chdir = function() {
                    throw new Error("process.chdir is not supported")
                }
            }
            , {}],
            2: [function(t, e) {
                "use strict";
                function i(t) {
                    function e(t) {
                        return null === l ? void d.push(t) : void a(function() {
                            var e = l ? t.onFulfilled : t.onRejected;
                            if (null === e)
                                return void (l ? t.resolve : t.reject)(u);
                            var i;
                            try {
                                i = e(u)
                            } catch (e) {
                                return void t.reject(e)
                            }
                            t.resolve(i)
                        })
                    }
                    function i(t) {
                        try {
                            if (t === h)
                                throw new TypeError("A promise cannot be resolved with itself.");
                            if (t && ("object" == typeof t || "function" == typeof t)) {
                                var e = t.then;
                                if ("function" == typeof e)
                                    return void s(e.bind(t), i, o)
                            }
                            l = !0,
                            u = t,
                            r()
                        } catch (t) {
                            o(t)
                        }
                    }
                    function o(t) {
                        l = !1,
                        u = t,
                        r()
                    }
                    function r() {
                        for (var t = 0, i = d.length; i > t; t++)
                            e(d[t]);
                        d = null
                    }
                    if ("object" != typeof this)
                        throw new TypeError("Promises must be constructed via new");
                    if ("function" != typeof t)
                        throw new TypeError("not a function");
                    var l = null
                      , u = null
                      , d = []
                      , h = this;
                    this.then = function(t, i) {
                        return new h.constructor(function(s, a) {
                            e(new n(t,i,s,a))
                        }
                        )
                    }
                    ,
                    s(t, i, o)
                }
                function n(t, e, i, n) {
                    this.onFulfilled = "function" == typeof t ? t : null,
                    this.onRejected = "function" == typeof e ? e : null,
                    this.resolve = i,
                    this.reject = n
                }
                function s(t, e, i) {
                    var n = !1;
                    try {
                        t(function(t) {
                            n || (n = !0,
                            e(t))
                        }, function(t) {
                            n || (n = !0,
                            i(t))
                        })
                    } catch (t) {
                        if (n)
                            return;
                        n = !0,
                        i(t)
                    }
                }
                var a = t("asap");
                e.exports = i
            }
            , {
                asap: 4
            }],
            3: [function(t, e) {
                "use strict";
                function i(t) {
                    this.then = function(e) {
                        return "function" != typeof e ? this : new n(function(i, n) {
                            s(function() {
                                try {
                                    i(e(t))
                                } catch (t) {
                                    n(t)
                                }
                            })
                        }
                        )
                    }
                }
                var n = t("./core.js")
                  , s = t("asap");
                e.exports = n,
                i.prototype = n.prototype;
                var a = new i(!0)
                  , o = new i(!1)
                  , r = new i(null)
                  , l = new i(void 0)
                  , u = new i(0)
                  , d = new i("");
                n.resolve = function(t) {
                    if (t instanceof n)
                        return t;
                    if (null === t)
                        return r;
                    if (void 0 === t)
                        return l;
                    if (t === !0)
                        return a;
                    if (t === !1)
                        return o;
                    if (0 === t)
                        return u;
                    if ("" === t)
                        return d;
                    if ("object" == typeof t || "function" == typeof t)
                        try {
                            var e = t.then;
                            if ("function" == typeof e)
                                return new n(e.bind(t))
                        } catch (t) {
                            return new n(function(e, i) {
                                i(t)
                            }
                            )
                        }
                    return new i(t)
                }
                ,
                n.all = function(t) {
                    var e = Array.prototype.slice.call(t);
                    return new n(function(t, i) {
                        function n(a, o) {
                            try {
                                if (o && ("object" == typeof o || "function" == typeof o)) {
                                    var r = o.then;
                                    if ("function" == typeof r)
                                        return void r.call(o, function(t) {
                                            n(a, t)
                                        }, i)
                                }
                                e[a] = o,
                                0 === --s && t(e)
                            } catch (t) {
                                i(t)
                            }
                        }
                        if (0 === e.length)
                            return t([]);
                        for (var s = e.length, a = 0; a < e.length; a++)
                            n(a, e[a])
                    }
                    )
                }
                ,
                n.reject = function(t) {
                    return new n(function(e, i) {
                        i(t)
                    }
                    )
                }
                ,
                n.race = function(t) {
                    return new n(function(e, i) {
                        t.forEach(function(t) {
                            n.resolve(t).then(e, i)
                        })
                    }
                    )
                }
                ,
                n.prototype.catch = function(t) {
                    return this.then(null, t)
                }
            }
            , {
                "./core.js": 2,
                asap: 4
            }],
            4: [function(e, i) {
                (function(e) {
                    function n() {
                        for (; a.next; ) {
                            a = a.next;
                            var t = a.task;
                            a.task = void 0;
                            var e = a.domain;
                            e && (a.domain = void 0,
                            e.enter());
                            try {
                                t()
                            } catch (t) {
                                if (u)
                                    throw e && e.exit(),
                                    setTimeout(n, 0),
                                    e && e.enter(),
                                    t;
                                setTimeout(function() {
                                    throw t
                                }, 0)
                            }
                            e && e.exit()
                        }
                        r = !1
                    }
                    function s(t) {
                        o = o.next = {
                            task: t,
                            domain: u && e.domain,
                            next: null
                        },
                        r || (r = !0,
                        l())
                    }
                    var a = {
                        task: void 0,
                        next: null
                    }
                      , o = a
                      , r = !1
                      , l = void 0
                      , u = !1;
                    if ("undefined" != typeof e && e.nextTick)
                        u = !0,
                        l = function() {
                            e.nextTick(n)
                        }
                        ;
                    else if ("function" == typeof t)
                        l = "undefined" != typeof window ? t.bind(window, n) : function() {
                            t(n)
                        }
                        ;
                    else if ("undefined" != typeof MessageChannel) {
                        var d = new MessageChannel;
                        d.port1.onmessage = n,
                        l = function() {
                            d.port2.postMessage(0)
                        }
                    } else
                        l = function() {
                            setTimeout(n, 0)
                        }
                        ;
                    i.exports = s
                }
                ).call(this, e("_process"))
            }
            , {
                _process: 1
            }],
            5: [function() {
                "function" != typeof Promise.prototype.done && (Promise.prototype.done = function() {
                    var t = arguments.length ? this.then.apply(this, arguments) : this;
                    t.then(null, function(t) {
                        setTimeout(function() {
                            throw t
                        }, 0)
                    })
                }
                )
            }
            , {}],
            6: [function(t) {
                t("asap"),
                "undefined" == typeof Promise && (Promise = t("./lib/core.js"),
                t("./lib/es6-extensions.js")),
                t("./polyfill-done.js")
            }
            , {
                "./lib/core.js": 2,
                "./lib/es6-extensions.js": 3,
                "./polyfill-done.js": 5,
                asap: 4
            }]
        }, {}, [6])
    }
    ).call(exports, e(38).setImmediate)
}
, function(t, exports) {
    "undefined" == typeof window && (window = {
        ctrl: {},
        lib: {}
    }),
    !window.ctrl && (window.ctrl = {}),
    !window.lib && (window.lib = {}),
    !function(t, e) {
        function i(t, e) {
            t = t.toString().split("."),
            e = e.toString().split(".");
            for (var i = 0; i < t.length || i < e.length; i++) {
                var n = parseInt(t[i], 10)
                  , s = parseInt(e[i], 10);
                if (window.isNaN(n) && (n = 0),
                window.isNaN(s) && (s = 0),
                s > n)
                    return -1;
                if (n > s)
                    return 1
            }
            return 0
        }
        var n = t.Promise
          , s = t.document
          , a = t.navigator.userAgent
          , o = /Windows\sPhone\s(?:OS\s)?[\d\.]+/i.test(a) || /Windows\sNT\s[\d\.]+/i.test(a)
          , r = o && t.WindVane_Win_Private && t.WindVane_Win_Private.call
          , l = /iPhone|iPad|iPod/i.test(a)
          , u = /Android/i.test(a)
          , d = a.match(/WindVane[\/\s](\d+[._]\d+[._]\d+)/)
          , h = Object.prototype.hasOwnProperty
          , c = e.windvane = t.WindVane || (t.WindVane = {
            version: "2.1.12"
        })
          , f = Math.floor(65536 * Math.random())
          , p = 1
          , m = []
          , v = 3
          , _ = "hybrid"
          , y = "wv_hybrid"
          , g = "iframe_"
          , b = "param_"
          , w = 6e5
          , A = 6e4;
        d = d ? (d[1] || "0.0.0").replace(/\_/g, ".") : "0.0.0";
        var E = {
            isAvailable: 1 === i(d, "0"),
            isNewBridgeAvailable: 1 === i(d, u ? "8.3.0" : "8.2.0"),
            call2: function(t, e, i, n, s) {
                var a = t.indexOf(".");
                return E.call(t.substr(0, a), t.substr(a + 1), e, i, n, s)
            },
            call: function(e, i, s, a, o, r) {
                var l, d;
                if ("number" == typeof arguments[arguments.length - 1] && (r = arguments[arguments.length - 1]),
                "function" != typeof a && (a = null),
                "function" != typeof o && (o = null),
                !n || a || o || (d = new n(function(t, e) {
                    a = t,
                    o = e
                }
                )),
                !u && E.isNewBridgeAvailable && t.__windvane__ && t.__windvane__.call)
                    return t.__windvane__.call(e + "." + i, s, a, o, r),
                    d;
                l = T.getSid();
                var h = {
                    success: a,
                    failure: o
                };
                return r > 0 && (h.timeout = setTimeout(function() {
                    E.onFailure(l, {
                        ret: "HY_TIMEOUT"
                    })
                }, r)),
                T.registerCall(l, h),
                T.registerGC(l, r),
                E.isAvailable ? T.callMethod(e, i, s, l) : E.onFailure(l, {
                    ret: "HY_NOT_IN_WINDVANE"
                }),
                d
            },
            fireEvent: function(t, e, i) {
                var n = s.createEvent("HTMLEvents");
                n.initEvent(t, !1, !0),
                n.param = T.parseData(e),
                s.dispatchEvent(n)
            },
            getParam: function(t) {
                return T.getParam(t)
            },
            setData: function(t, e) {},
            find: function(t, e) {
                e || T.unregisterCall(t, !1)
            },
            onSuccess: function(t, e, i) {
                T.onComplete(t, e, "success", i)
            },
            onFailure: function(t, e) {
                T.onComplete(t, e, "failure")
            }
        };
        E.isNewBridgeAvailable && t.__windvane__ && t.__windvane__.callSync && (E.callSync = function(e, i) {
            if (l)
                return t.__windvane__.callSync(e, i);
            if (u) {
                var n = {
                    name: e
                };
                i && (n.params = JSON.stringify(i));
                var s = t.__windvane__.callSync(n);
                if (s)
                    try {
                        return JSON.parse(s)
                    } catch (t) {}
            }
        }
        );
        var T = {
            params: {},
            calls: {},
            getSid: function() {
                return (f + p++) % 65536 + ""
            },
            buildParam: function(t) {
                return t && "object" == typeof t ? JSON.stringify(t) : t || ""
            },
            getParam: function(t) {
                return this.params[b + t] || ""
            },
            setParam: function(t, e) {
                this.params[b + t] = e
            },
            parseData: function(t) {
                var e;
                if (t && "string" == typeof t)
                    try {
                        e = JSON.parse(t)
                    } catch (i) {
                        e = {
                            ret: "HY_RESULT_PARSE_ERROR",
                            originValue: t
                        }
                    }
                else
                    e = t || {};
                return e
            },
            registerCall: function(t, e) {
                this.calls[t] = e
            },
            unregisterCall: function(t, e) {
                var i = this.calls[t] || {}
                  , n = i.timeout;
                return n && clearTimeout(n),
                e || delete this.calls[t],
                i
            },
            useIframe: function(t, e) {
                var i = g + t
                  , n = m.pop();
                n || (n = s.createElement("iframe"),
                n.setAttribute("frameborder", "0"),
                n.style.cssText = "width:0;height:0;border:0;display:none;"),
                n.setAttribute("id", i),
                n.setAttribute("src", e),
                n.parentNode || setTimeout(function() {
                    s.body.appendChild(n)
                }, 5)
            },
            retrieveIframe: function(t) {
                var e = g + t
                  , i = s.querySelector("#" + e);
                if (i)
                    if (m.length >= v)
                        try {
                            s.body.removeChild(i)
                        } catch (t) {}
                    else
                        m.indexOf(i) < 0 && m.push(i)
            },
            callMethod: function(e, i, n, s) {
                var a = T.buildParam(n);
                if (o)
                    r ? t.WindVane_Win_Private.call(e, i, s, a) : this.onComplete(s, {
                        ret: "HY_NO_HANDLER_ON_WP"
                    }, "failure");
                else if (l) {
                    this.setParam(s, a);
                    var d = _ + "://" + e + ":" + s + "/" + i + "?" + encodeURIComponent(a);
                    this.useIframe(s, d)
                } else if (u) {
                    this.setParam(s, n);
                    var d = _ + "://" + e + ":" + s + "/" + i + "?" + a
                      , h = y + ":";
                    window.prompt(d, h)
                } else
                    this.onComplete(s, {
                        ret: "HY_NOT_SUPPORT_DEVICE"
                    }, "failure")
            },
            registerGC: function(t, e) {
                var i = this
                  , n = Math.max(e || 0, w)
                  , s = Math.max(e || 0, A);
                setTimeout(function() {
                    i.unregisterCall(t)
                }, n),
                l && setTimeout(function() {
                    i.params[b + t] && delete i.params[b + t]
                }, s)
            },
            onComplete: function(t, e, i, n) {
                var s = this.unregisterCall(t, n)
                  , a = s.success
                  , o = s.failure;
                e = this.parseData(e);
                var r = e.ret;
                "string" == typeof r && (e = e.value || e,
                e.ret || (e.ret = [r])),
                "success" === i ? a && a(e) : "failure" === i && o && o(e),
                l && (this.retrieveIframe(t),
                this.params[b + t] && delete this.params[b + t])
            }
        };
        for (var k in E)
            h.call(c, k) || (c[k] = E[k])
    }(window, window.lib || (window.lib = {})),
    t.exports = window.lib.windvane
}
, function(t, exports, e) {
    t.exports = e(56)
}
, function(t, exports, e) {
    "use strict";
    function i(t) {
        location.replace(o.spmUrl(t))
    }
    function n(t) {
        orbit.bridge.jump(o.spmUrl(t))
    }
    function s(t) {
        return t = t || {},
        t.target = a.getStringOrEmptyValue([t.target, t.url]),
        t.fallback = a.getStringOrEmptyValue([t.fallback]),
        t.vi = a.getStringOrEmptyValue([t.vi, t.v]),
        t.va = a.getStringOrEmptyValue([t.va, t.v]),
        t
    }
    e(40),
    e(43),
    e(61);
    var a = e(57)
      , o = e(51);
    t.exports = {
        navigate: function(t) {
            t = s(t);
            var e = orbit.env.thirdapp || {}
              , o = orbit.env.os || {}
              , r = o.isIOS ? t.vi : t.va;
            e.isYouku && !a.isEqualEmptyValue(t.target) ? orbit.version(e.version).lt(r) ? i(t.fallback) : n(t.target) : a.isEqualEmptyValue(t.fallback) || i(t.fallback)
        }
    }
}
, function(t, exports) {
    var e = null;
    t.exports = {
        CONST: {
            EMPTY_VALUE: e
        },
        getStringOrEmptyValue: function(t) {
            for (var i = 0; i < t.length; i++)
                if ("string" == typeof t[i] && t[i])
                    return t[i];
            return e
        },
        isEqualEmptyValue: function(t) {
            return t === e
        }
    }
}
, function(t, exports, e) {
    var require, require;
    !function(e) {
        t.exports = e()
    }(function() {
        return function t(e, i, n) {
            function s(o, r) {
                if (!i[o]) {
                    if (!e[o]) {
                        var l = "function" == typeof require && require;
                        if (!r && l)
                            return require(o, !0);
                        if (a)
                            return a(o, !0);
                        throw new Error("Cannot find module '" + o + "'")
                    }
                    var u = i[o] = {
                        exports: {}
                    };
                    e[o][0].call(u.exports, function(t) {
                        var i = e[o][1][t];
                        return s(i ? i : t)
                    }, u, u.exports, t, e, i, n)
                }
                return i[o].exports
            }
            for (var a = "function" == typeof require && require, o = 0; o < n.length; o++)
                s(n[o]);
            return s
        }({
            1: [function(t, e, i) {
                function n(t) {
                    return this instanceof n || !h(t) ? void 0 : a(t)
                }
                function s(t) {
                    var e, i;
                    for (e in t)
                        i = t[e],
                        n.Mutators.hasOwnProperty(e) ? n.Mutators[e].call(this, i) : this.prototype[e] = i
                }
                function a(t) {
                    return t.extend = n.extend,
                    t.implement = s,
                    t
                }
                function o() {}
                function r(t, e, i) {
                    for (var n in e)
                        if (e.hasOwnProperty(n)) {
                            if (i && -1 === c(i, n))
                                continue;
                            "prototype" !== n && (t[n] = e[n])
                        }
                }
                e.exports = n,
                n.create = function(t, e) {
                    function i() {
                        t.apply(this, arguments),
                        this.constructor === i && this.initialize && this.initialize.apply(this, arguments)
                    }
                    return h(t) || (e = t,
                    t = null),
                    e || (e = {}),
                    t || (t = e.Extends || n),
                    e.Extends = t,
                    t !== n && r(i, t, t.StaticsWhiteList),
                    s.call(i, e),
                    a(i)
                }
                ,
                n.extend = function(t) {
                    return t || (t = {}),
                    t.Extends = this,
                    n.create(t)
                }
                ,
                n.Mutators = {
                    Extends: function(t) {
                        var e = this.prototype
                          , i = l(t.prototype);
                        r(i, e),
                        i.constructor = this,
                        this.prototype = i,
                        this.superclass = t.prototype
                    },
                    Implements: function(t) {
                        d(t) || (t = [t]);
                        for (var e, i = this.prototype; e = t.shift(); )
                            r(i, e.prototype || e)
                    },
                    Statics: function(t) {
                        r(this, t)
                    }
                };
                var l = Object.__proto__ ? function(t) {
                    return {
                        __proto__: t
                    }
                }
                : function(t) {
                    return o.prototype = t,
                    new o
                }
                  , u = Object.prototype.toString
                  , d = Array.isArray || function(t) {
                    return "[object Array]" === u.call(t)
                }
                  , h = function(t) {
                    return "[object Function]" === u.call(t)
                }
                  , c = Array.prototype.indexOf ? function(t, e) {
                    return t.indexOf(e)
                }
                : function(t, e) {
                    for (var i = 0, n = t.length; n > i; i++)
                        if (t[i] === e)
                            return i;
                    return -1
                }
            }
            , {}],
            2: [function(t, e, i) {
                e.exports = {
                    app: "seed",
                    style: "app/common/sufei-tb.css"
                }
            }
            , {}],
            3: [function(t, e, i) {
                var n = {}
                  , s = {};
                n.on = function(t, e) {
                    var i = s[t] || (s[t] = []);
                    return i.push(e),
                    n
                }
                ,
                n.off = function(t, e) {
                    if (!t && !e)
                        return s = {},
                        n;
                    var i = s[t];
                    if (i)
                        if (e)
                            for (var a = i.length - 1; a >= 0; a--)
                                i[a] === e && i.splice(a, 1);
                        else
                            delete s[t];
                    return n
                }
                ,
                n.fire = function(t, e) {
                    var i = s[t];
                    if (i) {
                        i = i.slice();
                        for (var a = 0, o = i.length; o > a; a++)
                            i[a](e)
                    }
                    return n
                }
                ,
                e.exports = n
            }
            , {}],
            4: [function(t, e, i) {
                var n = t("./mod/sufei-seed")
                  , s = t("./config/sufei-seed");
                screen.width < 800 && (s.style = "app/common/sufei-h5.css");
                var a = "0.3.116";
                s.version = a,
                s.style = "//g.alicdn.com/sd/sufei/" + a + "/" + s.style,
                e.exports = new n(s),
                window.__sufei_injected__ = 1
            }
            , {
                "./config/sufei-seed": 2,
                "./mod/sufei-seed": 6
            }],
            5: [function(t, e, i) {
                var n = t("./utils")
                  , s = "https://g.alicdn.com/sd/sufei/0.3.116";
                e.exports = {
                    limit: function(t, e) {
                        var i = document.createElement("div")
                          , s = {
                            mask: "width: 100%;height: 100%;background-color: rgba(0, 0, 0, .7);position: fixed;top: 0;left: 0;",
                            alert: "width: 60%;max-width: 350px;position: fixed;top: 40%;left: 0;right: 0;margin: auto;padding: 10px;box-sizing: border-box;background: #fcfcfc;border-radius: 4px;text-align: center;color: #666;",
                            close: "color: #108ee9;border-top: 1px solid #ccc;margin-top: 10px;padding-top: 10px;"
                        }
                          , a = t.ret && t.ret[0];
                        a && a.indexOf("::") > -1 && (a = a.split("::")[1],
                        (a = "流量限制") && (a = "哎呦喂，挤爆了！！")),
                        i.innerHTML = '<div style="' + s.mask + '" id="mask"></div><div style="' + s.alert + '"id="alert"><div>' + a + '</div><div id="sufei-dialog-close" style="' + s.close + '">稍后重试</div></div>',
                        document.body.appendChild(i);
                        var o = document.getElementById("sufei-dialog-close");
                        n.addEvent("click", o, function() {
                            i.innerHTML = "",
                            e && e(!1, {})
                        })
                    },
                    antiFlood: function(t) {
                        t.AntiFloodReferer ? location.href = t.data.url.replace(/(http_referer=).+/, "$1" + t.AntiFloodReferer) : location.href = t.data.url
                    },
                    antiCreep: function(t, e) {
                        var i = function() {
                            var i = window.__sufeiCaller__
                              , n = {
                                data: "",
                                url: ""
                            };
                            i.check(t, n).then(function() {});
                            var s = !1;
                            i.on("event:resendRequest@sufei-caller", function(t) {
                                s = !0,
                                e && e(!1, t)
                            }),
                            i.on("event:dialogHide@sufei", function(t) {
                                s || e && e(!1, t || {})
                            })
                        };
                        return window.__sufeiCaller__ ? void i(window.__sufeiCaller__) : ("undefined" == typeof sufei && (window.sufei = {}),
                        window.__sufeiSeed__ = sufei,
                        void n.loadJS(s + "/app/common/sufei-caller.js", {}, function() {
                            window.__sufeiCaller__ = sufei,
                            window.__sufeiCaller__.dialogWrapper = window.__sufeiSeed__.dialogWrapper,
                            window.sufei = __sufeiSeed__,
                            i()
                        }))
                    }
                }
            }
            , {
                "./utils": 7
            }],
            6: [function(t, e, i) {
                var n = t("../utils")
                  , s = t("../emit")
                  , a = t("../class")
                  , o = t("../intercept-handler")
                  , r = a.create({
                    initialize: function() {
                        s.on("event:triggerFn@sufei", this.callback)
                    },
                    check: function(t, e) {
                        var i = this;
                        this.initialize(t, e),
                        t.url = t.url || t.data && t.data.url || "";
                        var s = n.checkResult(t);
                        s.pass ? e(!0, t) : (i.queue = i.queue || [],
                        i.queue.push({
                            result: t,
                            fn: e
                        }),
                        1 === i.queue.length && o[s.interceptType] && o[s.interceptType].call(this, t, function(t, e) {
                            i.callback(t, e)
                        }))
                    },
                    callback: function(t, e) {
                        var i = this;
                        i.queue && (i.queue.forEach(function(i) {
                            i.fn && i.fn(t, e)
                        }),
                        i.queue = [])
                    }
                });
                e.exports = r
            }
            , {
                "../class": 1,
                "../emit": 3,
                "../intercept-handler": 5,
                "../utils": 7
            }],
            7: [function(t, e, i) {
                var n = document
                  , s = "rgv587_flag"
                  , a = "sm"
                  , o = "FAIL_SYS_USER_VALIDATE"
                  , r = "RGV587_ERROR::SM"
                  , l = "FAIL_SYS_TRAFFIC_LIMIT::流量限制"
                  , u = "FAIL_SYS_TRAFFIC_LIMIT"
                  , d = "FAIL_SYS_FLOWLIMIT"
                  , h = "assist_flag"
                  , c = "true"
                  , f = {
                    loadJS: function(t, e, i) {
                        var s, a = [];
                        if ("string" == typeof e)
                            a.push(e);
                        else
                            for (s in e)
                                e.hasOwnProperty(s) && a.push(s + "=" + encodeURIComponent(e[s]));
                        t = t + (-1 == t.indexOf("?") ? "?" : "&") + a.join("&");
                        var o = "script"
                          , r = n.getElementsByTagName(o)[0]
                          , l = n.createElement(o);
                        if (l.async = 1,
                        l.src = t,
                        i) {
                            var u = !1;
                            l.onload = l.onreadystatechange = function() {
                                u || l.readyState && !/loaded|complete/.test(l.readyState) || (l.onload = l.onreadystatechange = null,
                                u = !0,
                                i())
                            }
                        }
                        r.parentNode.insertBefore(l, r)
                    },
                    checkResult: function(t) {
                        if (t) {
                            var e = t.ret;
                            "object" == typeof e && (e = JSON.stringify(e)),
                            (t && t[s] === a || t[s + "0"] === a) && (e = r),
                            t && t[h] === c && (e = r);
                            var i = "";
                            e && (e.indexOf(r) > -1 || e.indexOf(h) > -1 ? i = "antiCreep" : e.indexOf(o) > -1 ? i = "antiFlood" : (e.indexOf(l) > -1 || e.indexOf(d) > -1 || e.indexOf(u) > -1) && (i = "limit"));
                            var n = "antiCreep" === i;
                            return {
                                pass: !i,
                                interceptType: i,
                                isAntiFlood: "antiFlood" === i,
                                isAntiCreep: n,
                                immediate: n && t[s + "0"] !== a
                            }
                        }
                        return {
                            pass: !0
                        }
                    },
                    addEvent: function(t, e, i) {
                        e.addEventListener ? e.addEventListener(t, i, !1) : e.attachEvent("on" + t, i)
                    },
                    removeEvent: function(t, e, i) {
                        e.removeEventListener ? e.addEventListener(t, i, !1) : e.detachEvent("on" + t, i)
                    },
                    getDomainURI: function(t) {
                        var e = /(https|http):\/\/([^\/]+)\//i
                          , i = t.match(e);
                        return i ? i[0] : ""
                    }
                };
                e.exports = f
            }
            , {}]
        }, {}, [4])(4)
    })
}
, function(t, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var e = {
        string: "string",
        number: "number",
        object: "object",
        boolean: "boolean"
    }
      , i = {
        login: {
            params: {
                redirectUrl: e.string,
                duid: e.string
            },
            ios: {
                method: "jsblogin",
                paramsTransformer: function(t) {
                    return {
                        duid: t.duid,
                        weburl: t.redirectUrl || window.location.href
                    }
                }
            },
            android: {
                method: "showLoginView",
                callback: "showLoginViewCallback"
            }
        },
        pay: {
            params: {},
            ios: {
                method: "jsbpayment",
                callback: "doPayCallback"
            },
            android: {
                method: "doPay",
                callback: "doPayCallback",
                paramsTransformer: function(t) {
                    return {
                        vip_id: "1",
                        periods: 1,
                        pay_channel: 100,
                        salePrice: "30元"
                    }
                }
            }
        },
        loadurl: {
            params: {
                url: e.string,
                source: e.string,
                dist: e.number,
                orientation: e.number
            },
            ios: {
                method: "jsbjump",
                paramsTransformer: function(t) {
                    return {
                        weburl: t.url
                    }
                }
            },
            android: {
                method: "loadUrl",
                paramsTransformer: function(t) {
                    return {
                        url: t.url,
                        source: t.source,
                        dst: t.dist,
                        orientation: t.orientation
                    }
                }
            }
        },
        share: {
            params: {
                title: e.string,
                url: e.string,
                image: e.string
            },
            ios: {
                method: "jsbshare",
                paramsTransformer: function(t) {
                    return {
                        title: t.title,
                        weburl: t.url,
                        imageurl: t.image
                    }
                }
            },
            android: {
                method: "showShareView",
                paramsTransformer: function(t) {
                    return {
                        title: t.title,
                        url: t.url,
                        image: t.image
                    }
                }
            }
        },
        shareimage: {
            params: {
                title: e.string,
                url: e.string,
                image: e.string
            },
            ios: {
                method: "jsbshareimage",
                paramsTransformer: function(t) {
                    return {
                        imageurl: t.image
                    }
                }
            },
            android: {
                method: "showShareView",
                paramsTransformer: function(t) {
                    return {
                        title: t.title,
                        url: t.url,
                        image: t.image,
                        img_only: !0
                    }
                }
            }
        },
        uploadvideo: {
            params: {
                topic: e.string
            },
            ios: {
                method: "jsbjumpupload",
                paramsTransformer: function(t) {
                    return {}
                }
            },
            android: {
                method: "showUploadVideoPage",
                paramsTransformer: function(t) {
                    return {
                        topic: t.topic
                    }
                }
            }
        },
        closewebview: {
            params: {},
            ios: {
                method: "jsbclose"
            },
            android: {
                method: "closeActivity"
            }
        },
        addcart: {
            params: {
                itemId: e.string,
                unionId: e.string,
                subPid: e.string,
                pid: e.string,
                ybhpss: e.string,
                tips: e.string,
                toast: e.boolean
            },
            ios: {
                method: "jsbaddcart",
                paramsTransformer: function(t) {
                    return {
                        itemId: t.itemId,
                        unionId: t.unionId,
                        subPid: t.subPid,
                        pid: t.pid,
                        ybhpss: t.ybhpss
                    }
                }
            },
            android: {
                method: "oneKeyAddCart",
                callback: "oneKeyAddCartCallback",
                paramsTransformer: function(t) {
                    return {
                        itemId: t.itemId,
                        unionId: t.unionId,
                        subPid: t.subPid,
                        pid: t.pid,
                        ybhpss: t.ybhpss,
                        tips: t.tips,
                        toast: t.toast
                    }
                }
            }
        }
    };
    exports.default = i
}
, function(t, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var e = [{
        code: "ENV_NOT_SUPPORTED",
        msg: "不支持浏览器环境"
    }]
      , i = {};
    e.forEach(function(t) {
        i[t.code] = t
    }),
    exports.default = i
}
, function(t, exports, e) {
    "use strict";
    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }),
    exports.bridge = exports.version = void 0;
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
      , s = e(17)
      , a = i(s)
      , o = e(60)
      , r = i(o)
      , l = e(59)
      , u = i(l)
      , d = e(63)
      , h = i(d)
      , c = e(62)
      , f = i(c)
      , p = "0.1.0"
      , m = "youku://"
      , v = "_jsbplugincallback"
      , _ = "youku://jsbjumpplanet?weburl="
      , y = void 0
      , g = void 0
      , b = void 0
      , w = {
        _OE: null,
        _eventCallBackId: 0,
        _eventCallBackQueue: {},
        _jsbCallBackId: 0,
        initWX: h.default,
        taobao: f.default,
        get OE() {
            return this._OE || ("undefined" == typeof window ? this._OE = new a.default("","") : this._OE = new a.default(window.navigator.userAgent,window.location.search)),
            this._OE
        },
        initEnv: function(t, e) {
            this._OE = new a.default(t,e)
        },
        jump: function(t) {
            var e = this;
            e.OE.env.os.isIOS ? window.location.href = _ + encodeURIComponent(t) : window.location.href = t
        },
        listen: function(t, e, i) {
            var n = this;
            if (t) {
                var s = t;
                t = t.toLowerCase(),
                i || (s = "_jsb" + t);
                var a = ++n._eventCallBackId;
                n._getEventCallBackQueue(t).push({
                    callback: e,
                    id: a
                });
                var o = window[s];
                return o || (window[s] = function(e) {
                    var i = n._getEventCallBackQueue(t);
                    i.forEach(function(t) {
                        t.callback(e)
                    })
                }
                ),
                {
                    eventName: t,
                    id: a
                }
            }
        },
        unlisten: function(t) {
            if (t)
                for (var e = this, i = e._getEventCallBackQueue(t.eventName), n = 0, s = i.length; n < s; n++) {
                    var a = i[n];
                    if (a.id === t.id)
                        return void i.splice(n, 1)
                }
        },
        _getEventCallBackQueue: function(t) {
            var e = this
              , i = "_jsb" + t;
            return e._eventCallBackQueue[i] || (e._eventCallBackQueue[i] = []),
            e._eventCallBackQueue[i]
        },
        invoke: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
              , e = arguments[1]
              , i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                callback: !1,
                timeout: null
            }
              , n = this
              , s = t.toLowerCase()
              , a = new Promise(function(a, o) {
                n.OE.env.thirdapp.isYouku && n.OE.env.thirdapp.bridgeSdk || o(r.default.ENV_NOT_SUPPORTED);
                var l = void 0
                  , d = void 0;
                u.default[s] && (l = u.default[s].ios,
                d = u.default[s].android),
                n.OE.env.os.isIOS ? n._iosHanlder(t, l, e, i, {
                    resolve: a,
                    reject: o
                }) : n.OE.env.os.isAndroidOS ? n._androidHanlder(t, d, e, i, {
                    resolve: a,
                    reject: o
                }) : o(r.default.ENV_NOT_SUPPORTED)
            }
            );
            return a
        },
        _iosHanlder: function(t, e) {
            var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
              , s = arguments[3]
              , a = arguments[4];
            t = t.toLowerCase();
            var o = this
              , r = !!e
              , l = void 0;
            e ? (i = e.paramsTransformer ? e.paramsTransformer(i) : {},
            l = m + e.method) : l = m + ("planet/jsb" + t);
            var u = !r && s.callback;
            if (u) {
                var d = o._getNextCallbackName();
                i.callback = d,
                o._handleCallback(d, s, a)
            }
            var h = !0;
            l = "" + l;
            for (var c in i) {
                var f = i[c];
                "object" === ("undefined" == typeof f ? "undefined" : n(f)) && (f = JSON.stringify(f)),
                h ? (h = !1,
                l = l + "?" + c + "=" + encodeURIComponent(f)) : l = l + "&" + c + "=" + encodeURIComponent(f)
            }
            window.location.href = l,
            u || a.resolve({})
        },
        _androidHanlder: function(t, e) {
            var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
              , n = arguments[3]
              , s = arguments[4]
              , a = this
              , o = !!e
              , r = void 0;
            o ? (r = e.method,
            i = e.paramsTransformer ? e.paramsTransformer(i) : {}) : r = t;
            var l = !o && n.callback;
            if (l) {
                var u = a._getNextCallbackName();
                i.callback = u,
                a._handleCallback(u, n, s)
            }
            o ? g[r](JSON.stringify(i)) : b[r](JSON.stringify(i)),
            l || s.resolve({})
        },
        _getNextCallbackName: function() {
            return v + ++this._jsbCallBackId
        },
        _handleCallback: function(t, e, i) {
            e.timeout && (i.timer = setTimeout(function() {
                i.expired = !0,
                i.reject({
                    msg: "timeout"
                }),
                window[t] = null
            }, e.timeout)),
            window[t] = function(e) {
                return i.timer && (clearTimeout(i.timer),
                i.timer = null),
                i.expired ? void (window[t] = null) : (i.resolve(e),
                void (window[t] = null))
            }
        }
    };
    "undefined" != typeof window && (window.orbit = window.orbit || {},
    window.orbit.bridge = w,
    y = window.orbit,
    g = window.YoukuJSBridge,
    b = window.PlanetJSBridge),
    exports.version = p,
    exports.bridge = w
}
, function(t, exports, e) {
    "use strict";
    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    function n() {
        return new Promise(function(t, e) {
            window.WindVane.call("WVLoginJSBridge", "showLoginView", {
                needReload: !1
            }, t, e)
        }
        )
    }
    function s() {
        return new Promise(function(t, e) {
            window.WindVane.call("WVTaobaoYoukuAccountJSBridge", "queryBindingStatus", {}, function(i) {
                var n = i && i.data
                  , s = n && n.info ? n.info : n;
                s.tuid ? t(s) : e()
            }, e)
        }
        )
    }
    function a(t, e) {
        return t = t || "youku",
        new Promise(function(i, n) {
            function a() {
                u = u || new l.default(window.navigator.userAgent,window.location.search);
                var e = u.env.os.isIOS ? {
                    source: t
                } : t;
                window.WindVane.call("WVTaobaoYoukuAccountJSBridge", "bindAccount", e, function(t) {
                    s().then(i, function() {
                        i()
                    })
                }, n)
            }
            e ? a() : s().then(function(t) {
                i(t)
            }, a)
        }
        )
    }
    function o() {
        return new Promise(function(t, e) {
            n().then(function() {
                a().then(t, function(t) {
                    e({
                        type: "bind",
                        err: t
                    })
                })
            }, function(t) {
                e({
                    type: "login",
                    err: t
                })
            })
        }
        )
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var r = e(17)
      , l = i(r)
      , u = null;
    exports.default = {
        queryBinding: s,
        bindAccount: a,
        loginAndBind: o
    }
}
, function(t, exports) {
    "use strict";
    function e(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          , s = this
          , a = new Promise(function(a, o) {
            if (s.OE.env.thirdapp && s.OE.env.thirdapp.isWeixin) {
                var r = window.wxConfig || {};
                r.jsApiList = i;
                var l = {};
                n.forEach(function(t) {
                    var i = r[t]
                      , n = e[t];
                    "jsApiList" === t && n && n.length ? l[t] = i.concat(n) : l[t] = n || i
                }),
                "undefined" != typeof wx ? (wx.ready(function() {
                    t && (wx.onMenuShareAppMessage(t),
                    wx.onMenuShareQQ(t),
                    wx.onMenuShareWeibo(t),
                    wx.onMenuShareQZone(t),
                    wx.onMenuShareTimeline(t)),
                    a()
                }),
                wx.error(function(t) {
                    o(t)
                }),
                wx.config(l)) : o({
                    msg: "请确保//static.youku.com/lvip/js/plugins/weixin.js已经在页面中引用"
                })
            }
        }
        );
        return a
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var i = ["onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareWeibo", "onMenuShareQZone"]
      , n = ["appId", "nonceStr", "timestamp", "signature", "jsApiList"];
    exports.default = e
}
, function(t, exports, e) {
    "use strict";
    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var n, s, a = e(6), o = i(a), r = e(21), l = i(r), u = window.navigator.userAgent, d = !1, h = "", c = "", f = "";
    (s = u.match(/WindVane[\/\s]([\d\.\_]+)/i)) && (n = s[1]),
    (s = u.match(/AliApp\(([A-Z\-]+)\/([\d\.]+)\)/i)) && (d = !0,
    h = s[1],
    f = s[2],
    c = h.indexOf("-PD") > 0 ? l.default.isIOS ? "iPad" : l.default.isAndroid ? "AndroidPad" : l.default.name : l.default.name),
    !h && u.indexOf("TBIOS") > 0 && (h = "TB");
    var p = window._ua_popLayer || ""
      , m = !1
      , v = "";
    p && (s = p.match(/PopLayer\/([\d\.]+)/i)) && (m = !0,
    v = s[1]),
    d && (d = {
        windvane: new o.default(n || "0.0.0"),
        appname: h || "unkown",
        version: new o.default(f || "0.0.0"),
        platform: c || l.default.name,
        poplayer: m || !1,
        poplayerVersion: new o.default(v || "0.0.0")
    }),
    exports.default = d
}
, function(t, exports, e) {
    "use strict";
    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var n, s, a = e(6), o = i(a), r = window.navigator.userAgent;
    (s = r.match(/(?:UCWEB|UCBrowser\/)([\d\.]+)/)) ? n = {
        name: "UC",
        isUC: !0,
        version: new o.default(s[1])
    } : (s = r.match(/MQQBrowser\/([\d\.]+)/)) ? n = {
        name: "QQ",
        isQQ: !0,
        version: new o.default(s[1])
    } : (s = r.match(/(?:Firefox|FxiOS)\/([\d\.]+)/)) ? n = {
        name: "Firefox",
        isFirefox: !0,
        version: new o.default(s[1])
    } : (s = r.match(/MSIE\s([\d\.]+)/)) || (s = r.match(/IEMobile\/([\d\.]+)/)) ? (n = {
        version: new o.default(s[1])
    },
    r.match(/IEMobile/) ? (n.name = "IEMobile",
    n.isIEMobile = !0) : (n.name = "IE",
    n.isIE = !0),
    r.match(/Android|iPhone/) && (n.isIELikeWebkit = !0)) : (s = r.match(/(?:Chrome|CriOS)\/([\d\.]+)/)) ? (n = {
        name: "Chrome",
        isChrome: !0,
        version: new o.default(s[1])
    },
    r.match(/Version\/[\d+\.]+\s*Chrome/) && (n.name = "Chrome Webview",
    n.isWebview = !0)) : r.match(/Safari/) && (s = r.match(/Android[\s\/]([\d\.]+)/)) ? n = {
        name: "Android",
        isAndroid: !0,
        version: new o.default(s[1])
    } : r.match(/iPhone|iPad|iPod/) && (r.match(/Safari/) && (s = r.match(/Version\/([\d\.]+)/)) ? n = {
        name: "Safari",
        isSafari: !0,
        version: new o.default(s[1])
    } : (s = r.match(/OS ([\d_\.]+) like Mac OS X/)) && (n = {
        name: "iOS Webview",
        isWebview: !0,
        version: new o.default(s[1].replace(/\_/g, "."))
    })),
    n || (n = {
        name: "unknown",
        version: new o.default("0.0.0")
    }),
    exports.default = n
}
, function(t, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var e = {}
      , i = window.location.search.replace(/^\?/, "");
    if (i)
        for (var n = i.split("&"), s = 0; s < n.length; s++) {
            n[s] = n[s].split("=");
            try {
                e[n[s][0]] = decodeURIComponent(n[s][1])
            } catch (t) {
                e[n[s][0]] = n[s][1]
            }
        }
    exports.default = e
}
, function(t, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var e, i = window.navigator.userAgent;
    e = i.match(/Weibo/i) ? {
        appname: "Weibo",
        isWeibo: !0
    } : !!i.match(/MicroMessenger/i) && {
        appname: "Weixin",
        isWeixin: !0
    },
    exports.default = e
}
, function(t, exports, e) {
    "use strict";
    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    function n(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var s = function() {
        function t(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        return function(e, i, n) {
            return i && t(e.prototype, i),
            n && t(e, n),
            e
        }
    }()
      , a = e(9)
      , o = i(a)
      , r = e(3)
      , l = i(r)
      , u = e(1)
      , d = i(u)
      , h = e(5)
      , c = i(h)
      , f = e(23)
      , p = i(f)
      , m = function() {
        function t(e) {
            n(this, t),
            this.TAG = "ADPlayer",
            this.config = e,
            this.supportType = e.supportType || "mp4",
            this.addata = null,
            this.curNum = 0,
            this.remainTime = 0,
            this.currentTime = 0,
            this._pastTime = 0,
            this._firstTag = !0,
            this._isEnd = !0,
            this.posiTime = 0,
            this.e = {
                onPlay: this._onPlay.bind(this),
                onEnd: this._onEnd.bind(this),
                onUnitEnd: this._onUnitEnd.bind(this),
                onPause: this._onPause.bind(this),
                onTimeupdate: this._onTimeupdate.bind(this),
                onUnitTimeUpdate: this._onUnitTimeUpdate.bind(this),
                onCanPlay: this._onCanPlay.bind(this),
                onStalled: this._onStalled.bind(this),
                onError: this._onError.bind(this),
                onProgress: this._onProgress.bind(this),
                onWaiting: this._onWaiting.bind(this)
            },
            this.tryNum = 1,
            this._emitter = new d.default,
            this._mediaElement = null,
            this._timer = null,
            this._adreport = new p.default
        }
        return s(t, [{
            key: "destroy",
            value: function() {
                this.addata = null,
                this.curNum = 0,
                this.remainTime = 0,
                this.currentTime = 0,
                this._pastTime = 0,
                this._firstTag = !0,
                this._isEnd = !0,
                this._timer && (clearInterval(this._timer),
                this._timer = null)
            }
        }, {
            key: "attachMediaElement",
            value: function(t) {
                this._mediaElement = t,
                this._mediaElement.poster = "",
                l.default.addEventListenerHander(this._mediaElement, "play", this.e.onPlay),
                "m3u8" === this.supportType ? (l.default.addEventListenerHander(this._mediaElement, "timeupdate", this.e.onUnitTimeUpdate),
                l.default.addEventListenerHander(this._mediaElement, "ended", this.e.onUnitEnd)) : (l.default.addEventListenerHander(this._mediaElement, "ended", this.e.onEnd),
                l.default.addEventListenerHander(this._mediaElement, "timeupdate", this.e.onTimeupdate)),
                l.default.addEventListenerHander(this._mediaElement, "canplay", this.e.onCanPlay),
                l.default.addEventListenerHander(this._mediaElement, "stalled", this.e.onStalled),
                l.default.addEventListenerHander(this._mediaElement, "error", this.e.onError),
                l.default.addEventListenerHander(this._mediaElement, "progress", this.e.onProgress),
                l.default.addEventListenerHander(this._mediaElement, "pause", this.e.onPause),
                l.default.addEventListenerHander(this._mediaElement, "waiting", this.e.onWaiting)
            }
        }, {
            key: "dettachMediaElement",
            value: function() {
                if (this._mediaElement)
                    return this._mediaElement.removeEventListener("timeupdate", this.e.onTimeupdate),
                    this._mediaElement.removeEventListener("ended", this.e.onEnd),
                    l.default.removeEventListenerHander(this._mediaElement, "play", this.e.onPlay),
                    l.default.removeEventListenerHander(this._mediaElement, "ended", this.e.onEnd),
                    l.default.removeEventListenerHander(this._mediaElement, "timeupdate", this.e.onTimeupdate),
                    l.default.removeEventListenerHander(this._mediaElement, "canplay", this.e.onCanPlay),
                    l.default.removeEventListenerHander(this._mediaElement, "stalled", this.e.onStalled),
                    l.default.removeEventListenerHander(this._mediaElement, "error", this.e.onError),
                    l.default.removeEventListenerHander(this._mediaElement, "progress", this.e.onProgress),
                    l.default.removeEventListenerHander(this._mediaElement, "pause", this.e.onPause),
                    "m3u8" === this.supportType ? void this._mediaElement.pause() : void (this._mediaElement && (this._mediaElement.src = "",
                    this._mediaElement.removeAttribute("src"),
                    this._mediaElement = null))
            }
        }, {
            key: "on",
            value: function(t, e) {
                this._emitter.addListener(t, e)
            }
        }, {
            key: "off",
            value: function(t, e) {
                this._emitter.removeListener(t, e)
            }
        }, {
            key: "setAdData",
            value: function(t, e) {
                c.default.i(this.TAG, "setAdData:"),
                this.addata = t,
                this._adreport.setData(t),
                this.remainTime = this.addata.totalTime,
                this.m3u8url = e,
                this.load()
            }
        }, {
            key: "setVideoInfo",
            value: function(t, e) {
                this._adreport.setVideoInfo(t, e)
            }
        }, {
            key: "startTimer",
            value: function() {
                if (!this._timer) {
                    var t = this;
                    this._lastTime = 0,
                    this._timer = setInterval(function() {
                        return t._isEnd ? void clearInterval(t._timer) : (t._lastTime === t._mediaElement.currentTime && (c.default.i(t.TAG, "stall try again"),
                        this._mediaElement.load(),
                        this._mediaElement.play()),
                        void (t._lastTime = t._mediaElement.currentTime))
                    }, 3e3)
                }
            }
        }, {
            key: "load",
            value: function() {
                if (c.default.i(this.TAG, "load"),
                !this._mediaElement)
                    throw new IllegalStateException("HTMLMediaElement must be attached before load()!");
                if (!this.addata)
                    throw new IllegalStateException("adPlayer must be set adData and adtype");
                var t = this.addata.VAL.length;
                return 0 === t ? (c.default.d(this.TAG, "the length of addata is 0"),
                void this.destroy()) : (this.currentTime = 0,
                this._pastTime = 0,
                this.curNum = 0,
                this._isEnd = !1,
                "m3u8" === this.supportType ? (this.src = this.m3u8url,
                this.posiTime = this._mediaElement.currentTime || 0) : (this.src = this.addata.VAL[this.curNum].RS,
                this.IE = this.addata.VAL[this.curNum].IE),
                void (this._mediaElement.readyState > 0 && (this._mediaElement.currentTime = 0)))
            }
        }, {
            key: "play",
            value: function() {
                if (c.default.i(this.TAG, "this._mediaElement.paused:" + this._mediaElement.paused + " this._isEnd:" + this._isEnd + " this._firstTag:" + this._firstTag),
                !this._isEnd) {
                    if (!this._mediaElement)
                        return void c.default.e("please attachMediaElement for adPlayer");
                    var t = null;
                    if (this._firstTag) {
                        ("m3u8" !== this.supportType || "m3u8" === this.supportType && "" === this._mediaElement.src) && (this._mediaElement.src = this.src),
                        this._mediaElement.style.display = "block",
                        t = this._mediaElement.play();
                        var e = 0
                          , i = this;
                        this._mediaElement.addEventListener("canplay", function() {
                            1 !== e && (e = 1,
                            c.default.i(i.TAG, "canplay time=" + i.currentTime),
                            this.play())
                        })
                    }
                    return l.default.playVideoElementExclusion(this._mediaElement),
                    this._mediaElement.paused && (t = this._mediaElement.play()),
                    t
                }
            }
        }, {
            key: "setSrc",
            value: function() {
                ("m3u8" !== this.supportType || "m3u8" === this.supportType && "" === this._mediaElement.src) && (this._mediaElement.src = this.src)
            }
        }, {
            key: "pause",
            value: function() {
                if (!this._isEnd)
                    return this._mediaElement ? void this._mediaElement.pause() : void c.default.e("please attachMediaElement for adPlayer")
            }
        }, {
            key: "skip",
            value: function(t) {
                if (!(this._isEnd || t < 0 || 0 !== t && !t))
                    if (t < this.addata.VAL.length - 1) {
                        this.curNum = t + 1,
                        this._pastTime = 0;
                        for (var e = 0; e < this.curNum; e++)
                            this._pastTime += this.addata.VAL[e].AL;
                        if (this.currentTime = this._pastTime,
                        "m3u8" === this.supportType)
                            this._seek(this._pastTime);
                        else {
                            this._mediaElement.src = this.addata.VAL[this.curNum].RS,
                            this._mediaElement.play();
                            var i = !1
                              , n = this;
                            l.default.addEventListenerHander(this._mediaElement, "canplay", function() {
                                i || (n._mediaElement.play(),
                                i = !0)
                            })
                        }
                    } else
                        this.curNum = this.addata.VAL.length - 1,
                        "m3u8" === this.supportType && this._seek(this.addata.totalTime),
                        this._pastTime += this.addata.VAL[this.curNum].AL,
                        this.currentTime = this.addata.totalTime,
                        "m3u8" === this.supportType ? this._onUnitTimeUpdate(null) : (this._mediaElement.pause(),
                        this._ifEmitPause = !0,
                        this._emitter.emit(o.default.AD_TIMEUPDATE, null, this.currentTime, this.curNum),
                        this._onEnd(null))
            }
        }, {
            key: "sendDotSUS",
            value: function(t) {
                this._adreport.sendDotSUS(t)
            }
        }, {
            key: "sendDotSUE",
            value: function(t) {
                this._adreport.sendDotSUE(t)
            }
        }, {
            key: "_seek",
            value: function(t) {
                if (Math.abs(this._mediaElement.currentTime - t) < 1)
                    return !1;
                try {
                    this._mediaElement.currentTime = t
                } catch (n) {
                    var e = !1
                      , i = this;
                    l.default.addEventListenerHander(this._mediaElement, "canplay", function() {
                        e || (e = !0,
                        i._mediaElement.currentTime = t)
                    })
                }
                this._mediaElement.play()
            }
        }, {
            key: "_onEnd",
            value: function(t) {
                this._isEnd || (c.default.i(this.TAG, "_adEnd:||this.curNum:" + this.curNum + "this.currentTime:" + this.currentTime),
                this._pastTime += this.addata.VAL[this.curNum].AL,
                this._adreport.sendSUE(this.curNum),
                this.curNum++,
                this.curNum < this.addata.VAL.length ? (this._adreport.changeNum(this.curNum),
                this._mediaElement.pause(),
                this._ifEmitPause = !0,
                this._mediaElement.src = this.addata.VAL[this.curNum].RS,
                this._mediaElement.play()) : (c.default.i(this.TAG, "_adEnd:||this._isEnd:" + this._isEnd),
                this._isEnd || (this._isEnd = !0,
                this.destroy(),
                this._adreport.sendAdLog(4, 400),
                this._adreport.sendAdGold({
                    p: 1,
                    code: 304
                }, {
                    index: this.curnum
                }),
                this._emitter.emit(o.default.AD_END, t))))
            }
        }, {
            key: "_onUnitEnd",
            value: function(t) {
                this._isEnd || (this._adreport.sendAdLog(4, 400),
                this._adreport.sendAdGold({
                    p: 1,
                    code: 304
                }, {
                    index: this.curnum
                }),
                c.default.i(this.TAG, "_onUnitEnd:||this._isEnd:" + this._isEnd + "   this._mediaElement.currentTime:" + this._mediaElement.currentTime),
                this._isEnd = !0,
                this._mediaElement.pause(),
                this._ifEmitPause = !0,
                this.destroy(),
                this._emitter.emit(o.default.AD_END, t, this._mediaElement.currentTime))
            }
        }, {
            key: "_onTimeupdate",
            value: function(t) {
                if (!this._isEnd && this._mediaElement) {
                    var e = this._mediaElement.currentTime;
                    this.currentTime = this._pastTime + e,
                    this.remainTime = this.addata.totalTime - this.currentTime,
                    this._emitter.emit(o.default.AD_TIMEUPDATE, t, this.currentTime, this.curNum)
                }
            }
        }, {
            key: "_onUnitTimeUpdate",
            value: function(t) {
                this._isEnd || this._mediaElement && (this.currentTime = this._mediaElement.currentTime,
                this.currentTime >= this.addata.totalTime ? (this._adreport.sendSUE(this.curNum),
                this._onUnitEnd(t)) : (this.currentTime > this._pastTime + this.addata.VAL[this.curNum].AL && (this._adreport.sendAdLog(3, 300, {
                    IE: this.addata.VAL[this.curNum].IE,
                    ext: {
                        num: this.curNum,
                        cdnUrl: this._mediaElement.src
                    }
                }),
                this._adreport.sendAdGold({
                    p: 1,
                    code: 300
                }, {
                    index: this.curNum
                }),
                this._pastTime += this.addata.VAL[this.curNum].AL,
                this._adreport.sendSUE(this.curNum),
                this.curNum++,
                this._adreport.sendSUS(this.curNum),
                this._adreport.changeNum(this.curNum)),
                this._emitter.emit(o.default.AD_TIMEUPDATE, t, this.currentTime, this.curNum)))
            }
        }, {
            key: "_onPlay",
            value: function(t) {
                this._isEnd || (this._firstTag && this._adreport.sendSUS(this.curNum),
                this._firstTag = !1,
                this._emitter.emit(o.default.AD_PLAY, t))
            }
        }, {
            key: "_onPause",
            value: function(t) {
                return this._isEnd ? (c.default.d(this.TAG, "_onPause:" + this._ifEmitPause),
                void (this._ifEmitPause = !1)) : (c.default.i(this.TAG, "_onPause::this._isEnd:" + this._isEnd),
                void this._emitter.emit(o.default.AD_PAUSE, t))
            }
        }, {
            key: "_onError",
            value: function(t) {
                if (!this._isEnd) {
                    if (this.tryNum > 0) {
                        this.tryNum--;
                        var e = this._mediaElement.src;
                        return this._mediaElement.src = e,
                        this._mediaElement.currentTime = this.currentTime,
                        void this._mediaElement.play()
                    }
                    var i = {
                        num: this.curNum,
                        cdnUrl: encodeURIComponent(this._mediaElement.src)
                    }
                      , n = {
                        IE: this.addata.VAL[this.curNum].IE,
                        curNum: this.curnum,
                        p: this.addata.p,
                        ext: i
                    };
                    this._adreport.sendAdGold({
                        p: this.addata.p,
                        code: 303
                    }, n),
                    this._adreport.sendAdLog(3, 303, n),
                    "m3u8" === this.supportType ? (this._isEnd = !0,
                    this._emitter.emit(o.default.AD_ERROR, t)) : this.curNum < this.addata.VAL.length - 1 ? this.skip(this.curNum) : (this._isEnd = !0,
                    this._emitter.emit(o.default.AD_ERROR, t))
                }
            }
        }, {
            key: "_onCanPlay",
            value: function(t) {
                if (c.default.i(this.TAG, "_onCanPlay"),
                !this._isEnd) {
                    var e = {
                        ext: {
                            num: this.curNum,
                            cdnUrl: this._mediaElement.src
                        }
                    };
                    this.curNum >= 0 && this.addata && this.addata.VAL.length >= this.curNum && (e.IE = this.addata.VAL[this.curNum].IE),
                    this._adreport.sendAdLog(3, 300, e),
                    this._adreport.sendSUS(this.curNum),
                    this._adreport.sendAdGold({
                        p: 1,
                        code: 300
                    }, {
                        index: this.curNum
                    }),
                    this._emitter.emit(o.default.AD_CANPLAY, t)
                }
            }
        }, {
            key: "_onWaiting",
            value: function(t) {
                this._emitter.emit(o.default.AD_LOADING, t)
            }
        }, {
            key: "_onProgress",
            value: function(t) {}
        }, {
            key: "_onStalled",
            value: function(t) {}
        }, {
            key: "_onSeeking",
            value: function(t) {}
        }]),
        t
    }();
    exports.default = m
}
, function(t, exports, e) {
    "use strict";
    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    function n(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var s = function() {
        function t(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        return function(e, i, n) {
            return i && t(e.prototype, i),
            n && t(e, n),
            e
        }
    }()
      , a = e(22)
      , o = e(3)
      , r = i(o)
      , l = e(5)
      , u = i(l)
      , d = e(68)
      , h = i(d)
      , c = e(1)
      , f = i(c)
      , p = e(9)
      , m = i(p)
      , v = e(7)
      , _ = i(v)
      , y = ["vali.cp31.ott.cibntv.net", "vali-dns.cp31.ott.cibntv.net", "vali.cp12.wasu.tv", "vali-dns.cp12.wasu.tv", "play2-download.cp31.ott.cibntv.net"]
      , g = location.protocol
      , b = function() {
        function t(e, i, s) {
            n(this, t),
            this.TAG = "ADplugin",
            this.param = {},
            this.adpoint = [],
            this.param.aw = "w",
            this.param.vs = "1.0",
            this.param.pver = "1",
            this.param.tict = 0,
            this.param.vr = 0,
            this.param.wintype = "xplayer_m3u8",
            this.param.bf = 1,
            this.param.client_id = i.client_id,
            i.atoken && (this.param.ccode = i.ccode,
            this.param.atoken = i.atoken),
            (s || i) && this.init(s, i),
            this.param.site = location.origin.indexOf("tudou.com") > -1 || "0505" === this.ccode ? "-1" : "1",
            this.param.avs = _.default.version,
            console.log(this.param),
            this._mediaElement = e,
            this.status = 0,
            this.contentNum = 0,
            this.netflag = !1,
            this.startplay = !1,
            this.content_addata = null,
            this.stand_addata = null,
            this.front_addata = null,
            this.end_addata = null,
            this.frontAdTime = 0,
            this.endAdTime = 0,
            this.addata = null,
            this._vtvc = [],
            this._defaultData = {
                VAL: []
            },
            this.e = {
                adPlayError: this._adError.bind(this),
                adPlay: this._adPlay.bind(this),
                adTimeUpdate: this._adtimeUpdate.bind(this),
                adPlayEnd: this._adplayEnd.bind(this),
                adPlayPause: this._adplayPause.bind(this),
                adCanPlay: this._adcanplay.bind(this),
                adPlayLoading: this._adplayLoading.bind(this),
                adReady: this._adReady.bind(this)
            },
            this._emitter = new f.default,
            this._adplayer = new h.default({
                supportType: this.supportType
            }),
            this._adplayer.attachMediaElement(this._mediaElement),
            this._addAdplayerEmit()
        }
        return s(t, [{
            key: "resetPlayer",
            value: function(t) {
                this._removeAdplayerEmit(),
                this._adplayer.destroy(),
                this._adplayer = new h.default({
                    supportType: t
                }),
                this._adplayer.attachMediaElement(this._mediaElement),
                this._addAdplayerEmit(),
                this.addata && this._adplayer.setAdData(this.addata, this.m3u8url)
            }
        }, {
            key: "destroy",
            value: function() {
                this.adpoint = [],
                this.status = 0,
                this.contentNum = 0,
                this.netflag = !1,
                this.startplay = !1,
                this.content_addata = null,
                this.stand_addata = null,
                this.front_addata = null,
                this.end_addata = null,
                this.frontAdTime = 0,
                this.endAdTime = 0,
                this.unitedAd = !1,
                this._adplayer.destroy()
            }
        }, {
            key: "_reset",
            value: function() {
                this.status = 0,
                this.startplay = !1,
                this.adType = "",
                this.netflag = !1,
                this.addata = null,
                this._ispause = !1
            }
        }, {
            key: "init",
            value: function(t, e, i) {
                if (e) {
                    if (e.m3u8_url && (this.m3u8url = e.m3u8_url),
                    e.supportType && (this.supportType = e.supportType),
                    e.ccode && (this.ccode = e.ccode),
                    this.isAutoplay = !!e.autoplay,
                    e.param)
                        for (var n in e.param)
                            this.param[n] = e.param[n];
                    if (e.adConfig)
                        for (var s in e.adConfig)
                            this.param[s] = e.adConfig[s];
                    e.adext && (this.param.adext = e.adext)
                }
                if (t) {
                    this.param.ups_ytid = e.ytid,
                    this._adplayer.setVideoInfo(t, this.ccode),
                    this.videoId = t.encodeId,
                    this.param.isvert = r.default.getScreenState(),
                    this.param.wintype = "xplayer_m3u8",
                    this.param.vl = t.trial ? parseInt(t.trial.time) - 1 : parseInt(t.video.seconds),
                    this.param.ct = t.video.category_letter_id,
                    this.param.sid = t.ups.psid,
                    this.param.ccode = t.ccode;
                    for (var a = t.video.subcategories || [], o = [], l = 0, u = a.length; l < u; l++)
                        o.push(a[l].id);
                    this.param.cs = o.join("|");
                    var d = t.video.type.join(",");
                    this.param.paid = d.indexOf("fee") > -1 || d.indexOf("channel_vip") > -1 || t.fee || t.show && t.show.pay ? 1 : 0,
                    this.param.s = t.show ? t.show.id : 0,
                    this.param.v = t.videoId,
                    this.param.vip = t.user && t.user.vip ? 1 : 0;
                    var h = t.video.tags || [];
                    this.param.k = encodeURIComponent(h.join("|")),
                    this.param.u = t.video.userid || "",
                    this.param.td = t.video.source ? t.video.source : 0,
                    this.param.ti = encodeURIComponent(t.video.title),
                    this.param.vr = 0,
                    t.trial && (this.param.tt = t.trial.type);
                    var c = t.dvd && t.dvd.point || [];
                    this._setAdPoint(c),
                    i && (this.dots = this._createDotInfo(i),
                    t.ups.pcad && this.parseFrontAd(i)),
                    t.ups.pcad || ("m3u8" === this.supportType ? (this.requestFrontAd(),
                    this.requestEndAd()) : this.requestFrontAd())
                }
            }
        }, {
            key: "_removeAdplayerEmit",
            value: function() {
                this._adplayer.off(m.default.AD_PLAY, this.e.adPlay),
                this._adplayer.off(m.default.AD_PAUSE, this.e.adPlayPause),
                this._adplayer.off(m.default.AD_END, this.e.adPlayEnd),
                this._adplayer.off(m.default.AD_TIMEUPDATE, this.e.adTimeUpdate),
                this._adplayer.off(m.default.AD_ERROR, this.e.adPlayError),
                this._adplayer.off(m.default.AD_CANPLAY, this.e.adCanPlay),
                this._adplayer.off(m.default.AD_LOADING, this.e.adPlayLoading)
            }
        }, {
            key: "_addAdplayerEmit",
            value: function() {
                this._adplayer.on(m.default.AD_PLAY, this.e.adPlay),
                this._adplayer.on(m.default.AD_PAUSE, this.e.adPlayPause),
                this._adplayer.on(m.default.AD_END, this.e.adPlayEnd),
                this._adplayer.on(m.default.AD_TIMEUPDATE, this.e.adTimeUpdate),
                this._adplayer.on(m.default.AD_ERROR, this.e.adPlayError),
                this._adplayer.on(m.default.AD_CANPLAY, this.e.adCanPlay),
                this._adplayer.on(m.default.AD_LOADING, this.e.adPlayLoading)
            }
        }, {
            key: "on",
            value: function(t, e) {
                this._emitter.addListener(t, e)
            }
        }, {
            key: "off",
            value: function(t, e) {
                this._emitter.removeListener(t, e)
            }
        }, {
            key: "play",
            value: function() {
                if (u.default.i(this.TAG, "play|||this.startplay:" + this.startplay),
                !this.addata)
                    return void this._adplayEnd(null);
                var t = null;
                if (this.startplay)
                    t = this._adplayer.play();
                else {
                    if (!this.addata || 0 === this.addata.VAL.length)
                        return u.default.d(this.TAG, "play|||this.addata.VAL.length:" + this.addata.VAL.length),
                        void this._adplayEnd(null);
                    this.ifReady || this._initAdPlayer(this.addata),
                    this.loadVTVC(this.addata.vtvc),
                    u.default.i(this.TAG, "play|||this._adplayer:"),
                    t = this._adplayer.play()
                }
                return this._ispause = !1,
                this._adplayer._adreport.sendAdLog(3, 310, {
                    p: this.addata.p,
                    addata: this.addata,
                    ext: {
                        autoplay: this.isAutoplay
                    }
                }),
                this._adplayer._adreport.sendAdGold({
                    p: this.addata.p,
                    code: 310
                }, this.addata),
                t
            }
        }, {
            key: "autoPlay",
            value: function() {
                if (r.default.show(this._mediaElement),
                r.default.checkVideoIsPaused(this._mediaElement))
                    return null;
                if (!this.addata || 0 === this.addata.VAL.length)
                    return void this._adplayEnd(null);
                this._adplayer.setSrc();
                var t = this._adplayer.play();
                return t
            }
        }, {
            key: "pause",
            value: function() {
                this.addata && this.startplay && (this._adplayer.pause(),
                this._ispause = !0)
            }
        }, {
            key: "skip",
            value: function(t, e) {
                this._adplayer.skip(t)
            }
        }, {
            key: "ifPlayAd",
            value: function(t) {
                if (0 === this._midpoints.length)
                    return !1;
                if (this.contentNum < this._midpoints.length) {
                    var e = parseInt(this._midpoints[this.contentNum].start) / 1e3;
                    if (e - t <= 5 && !this.netflag && !this.content_addata)
                        return this.requestContentAd(),
                        !1;
                    if (t >= e)
                        return !0
                }
                return !1
            }
        }, {
            key: "_initAdPlayer",
            value: function(t) {
                return this.ifReady = !0,
                this.addata && 0 !== this.addata.VAL.length ? (this._adplayer.setAdData(this.addata, this.m3u8url),
                void this._adReady(null)) : void this._adReady(null)
            }
        }, {
            key: "_setAdPoint",
            value: function(t) {
                for (var e = [], i = 0, n = 0, s = 0, a = t.length; s < a; s++)
                    "standard" !== t[s].ctype && "contentad" !== t[s].ctype || (t[s].num = "standard" === t[s].ctype ? i++ : n++,
                    e.push(t[s]));
                this._midpoints = e
            }
        }, {
            key: "_isNeedAd",
            value: function(t) {
                return !0
            }
        }, {
            key: "_checkRS",
            value: function(t) {
                for (var e = !1, i = y.length, n = 0; n < i; n++)
                    if (t.indexOf(y[n]) > -1) {
                        e = !0;
                        break
                    }
                return "https:" === g && e && (t = t.replace("http:", g)),
                t
            }
        }, {
            key: "_splitVTVC",
            value: function(t) {
                var e = 0
                  , i = (t.VAL || [],
                [])
                  , n = []
                  , s = []
                  , a = {};
                for (var o in t)
                    "VAL" != o && (a[o] = t[o]);
                a.VAL = [];
                for (var l = t.VAL, u = 0; u < l.length; u++)
                    2 !== parseInt(l[u].VT) ? null != l[u].RS && "" != l[u].RS.trim() && null != l[u].VID && null != l[u].VQT && (a.VAL.push(l[u]),
                    l[u].RS = r.default.changeProtocol(l[u].RS),
                    s.push(l[u].RS),
                    n.push(parseInt(l[u].AL)),
                    e += l[u].AL) : (l[u].pos_ = u - 1 - i.length,
                    i.push(l[u]));
                return a.urls = s,
                a.seconds = n,
                a.vtvc = i,
                a.totalTime = e,
                a
            }
        }, {
            key: "_createDotInfo",
            value: function(t) {
                var e = {
                    index: -1,
                    preindex: -1,
                    dots: [],
                    count: 0
                };
                if (!t || !t.BFVAL)
                    return e;
                for (var i = t.BFVAL, n = [], s = [], a = 0, o = 0, r = i.length; o < r; o++) {
                    var l = i[o]
                      , u = l.DOT;
                    u.start = u.STA + a,
                    u.end = u.start + l.AL,
                    u.thumb = [],
                    u.IE = l.IE,
                    u.VID = l.VID,
                    u.SUS = l.SUS,
                    u.ifSUS = !1,
                    u.AL = l.AL,
                    u.CUM = l.CUM,
                    u.RS = l.RS,
                    u.SUE = l.SUE,
                    u.accTime = a,
                    a += u.AL;
                    var d = {};
                    t.BFSTREAM && t.BFSTREAM[l.VID] && t.BFSTREAM[l.VID].preview && (u.thumb = t.BFSTREAM[l.VID].preview.thumb,
                    u.timespan = t.BFSTREAM[l.VID].preview.timespan,
                    d.thumb = t.BFSTREAM[l.VID].preview.thumb,
                    d.timespan = t.BFSTREAM[l.VID].preview.timespan,
                    d.start = u.start,
                    d.end = u.end,
                    s.push(d)),
                    n.push(u)
                }
                return e.dots = n,
                e.count = n.length,
                e.curDot = null,
                e.preview = s,
                e
            }
        }, {
            key: "buildM3u8",
            value: function(t, e) {
                t && (this.m3u8url = t);
                var i = this.front_addata && this.front_addata.VAL && !e ? this.front_addata.VAL : []
                  , n = this.end_addata && this.end_addata.VAL ? this.end_addata.VAL : [];
                if (0 === i.length && 0 === n.length)
                    return this.m3u8url;
                var s = this.m3u8url.split("?")
                  , a = s[0];
                s = s[1].split("&");
                for (var o = 0, l = -1, u = "", d = "", h = 0; h < s.length; h++) {
                    var c = s[h].indexOf("=")
                      , f = s[h].substring(0, c)
                      , p = s[h].substring(c + 1);
                    f && "vid" === f && (o = h,
                    d = p),
                    f && "type" === f && (u = p,
                    l = h)
                }
                u || (u = "mp4");
                for (var m = [], v = 0, _ = i.length, y = 0; y < _; y++) {
                    var g = i[y]
                      , b = (g.RS,
                    g.VID)
                      , w = g.VQT;
                    m["a" + (y + 1)] = b + "_" + w
                }
                v = i.length + 1,
                m.v = decodeURIComponent(d) + "_" + u;
                for (var A = n.length, E = 0; E < A; E++) {
                    var T = n[E]
                      , k = (T.RS,
                    T.VID)
                      , P = T.VQT;
                    m["a" + (v + E)] = k + "_" + P
                }
                return s[o] = "ids=" + encodeURIComponent(r.default.toJSON(m)),
                s[l] = "",
                this.m3u8url = a + "?" + s.join("&"),
                this.m3u8url
            }
        }, {
            key: "parseFrontAd",
            value: function(t) {
                if (!this.front_addata) {
                    if (u.default.i(this.TAG, "parseFrontAd"),
                    this.adType = a.AD_MAP.FRONT,
                    this.front_addata = this._splitVTVC(t),
                    this.addata = this.front_addata,
                    this.frontAdTime = this.front_addata.totalTime,
                    this.netflag = !1,
                    this._adplayer._adreport.sendAdLog(2, 200, {
                        p: this.addata.p,
                        addata: this.addata
                    }),
                    this._adplayer._adreport.sendAdGold({
                        p: this.addata.p,
                        code: 200
                    }, this.addata),
                    this._emitter.emit(m.default.AD_DATA_OK, this.front_addata, this.adType),
                    "m3u8" === this.supportType)
                        return void this.parseUnited();
                    this.addata = this.front_addata,
                    this._initAdPlayer()
                }
            }
        }, {
            key: "parseEndAd",
            value: function(t) {
                return u.default.i(this.TAG, "parseEndAd"),
                this.netflag = !1,
                this.adType = a.AD_MAP.END,
                this.end_addata = this._splitVTVC(t),
                "m3u8" === this.supportType ? void this.parseUnited() : (this.addata = this.end_addata,
                this._emitter.emit(m.default.AD_DATA_OK, this.end_addata, this.adType),
                this._initAdPlayer(this.addata),
                u.default.i(this.TAG, "parseEndAd(data)"),
                void this.play())
            }
        }, {
            key: "parseContentAd",
            value: function(t) {
                this.netflag = !1,
                this.content_addata = this._splitVTVC(t),
                this._emitter.emit(m.default.AD_DATA_OK, this.content_addata, this.adType),
                this.addata = this.content_addata
            }
        }, {
            key: "parsePauseAd",
            value: function(t) {
                u.default.i(this.TAG, "parsePauseAd"),
                this._emitter.emit(m.default.AD_DATA_OK, t, a.AD_MAP.PAUSE)
            }
        }, {
            key: "parseUnited",
            value: function() {
                this.unitedAd || this.front_addata && this.end_addata && (this.unitedAd = !0,
                u.default.i(this.TAG, "parseUnited"),
                this.endAdTime = this.end_addata.totalTime,
                this.m3u8url = this.buildM3u8(this.m3u8url, !1),
                this.addata = this.front_addata,
                this.adType = a.AD_MAP.FRONT,
                this._initAdPlayer(this.addata))
            }
        }, {
            key: "adDataTimeout",
            value: function(t) {
                u.default.i(this.TAG, "adDataTimeout:" + t),
                t === a.AD_MAP.FRONT ? this.parseFrontAd(this._defaultData) : t === a.AD_MAP.END && this.parseEndAd(this._defaultData),
                this._emitter.emit(m.default.AD_DATA_ERROR, this.adType)
            }
        }, {
            key: "adDataError",
            value: function(t) {
                u.default.e(this.TAG, "fronOutAdError:" + t),
                t === a.AD_MAP.FRONT ? this.parseFrontAd(this._defaultData) : t === a.AD_MAP.END && this.parseEndAd(this._defaultData),
                this._emitter.emit(m.default.AD_DATA_ERROR, this.adType)
            }
        }, {
            key: "changeParam",
            value: function(t) {
                for (var e in t)
                    this.param[e] = t[e]
            }
        }, {
            key: "requestFrontAd",
            value: function(t) {
                var e = this;
                this.adType = a.AD_MAP.FRONT;
                var i = {};
                i.p = 7;
                var n = r.default.protocol + (r.default.isPre ? a.YoukuAdApiM_PRE.FRONT_AD_API : a.YoukuAdApiM.FRONT_AD_API) + "?" + r.default.urlParameter(this.param) + "&" + r.default.urlParameter(i);
                this.netflag = !0,
                this._adplayer._adreport.sendAdLog(1, 100, {
                    p: 7,
                    ext: {
                        autoplay: this.isAutoplay
                    }
                }),
                this._adplayer._adreport.sendAdGold({
                    p: 7,
                    code: 100
                }),
                r.default.getJsonp(n, function(i) {
                    e.parseFrontAd(i, t)
                }, function() {
                    e._adplayer._adreport.sendAdLog(2, 201, {
                        p: 7
                    }),
                    e._adplayer._adreport.sendAdGold({
                        p: 7,
                        code: 201
                    }),
                    e.adDataError(a.AD_MAP.FRONT)
                }, function() {
                    e._adplayer._adreport.sendAdLog(2, 204, {
                        p: 7
                    }),
                    e._adplayer._adreport.sendAdGold({
                        p: 7,
                        code: 204
                    }),
                    e.adDataTimeout(a.AD_MAP.FRONT)
                }, 1e4)
            }
        }, {
            key: "requestContentAd",
            value: function(t) {
                var e = this;
                u.default.i(this.TAG, "requestContentAd");
                var i = {};
                i.p = 8,
                i.ps = this._midpoints[this.contentNum];
                this._midpoints[this.contentNum];
                i.pt = this._midpoints[this.contentNum].start / 1e3;
                var n = r.default.protocol + (r.default.isPre ? a.YoukuAdApiM_PRE.CONTENT_AD_API : a.YoukuAdApiM.CONTENT_AD_API) + "?" + r.default.urlParameter(this.param) + "&" + r.default.urlParameter(i);
                this.netflag = !0,
                r.default.getJsonp(n, function(i) {
                    e.parseContentAd(i, t)
                }, function() {
                    e.adDataError(a.AD_MAP.CONT)
                }, function() {
                    e.adDataTimeout(a.AD_MAP.CONT)
                })
            }
        }, {
            key: "requestStandardAd",
            value: function() {
                var t = {};
                t.p = 9
            }
        }, {
            key: "requestEndAd",
            value: function(t) {
                var e = this;
                u.default.i(this.TAG, "requestEndAd:ifPlay" + t);
                var i = {};
                i.p = 9,
                i.ctu = 1;
                var n = r.default.protocol + (r.default.isPre ? a.YoukuAdApiM_PRE.END_AD_API : a.YoukuAdApiM.END_AD_API) + "?" + r.default.urlParameter(this.param) + "&" + r.default.urlParameter(i);
                this.netflag = !0,
                r.default.getJsonp(n, function(i) {
                    e.parseEndAd(i, t)
                }, function() {
                    e.adDataError(a.AD_MAP.END)
                }, function() {
                    e.adDataTimeout(a.AD_MAP.END)
                })
            }
        }, {
            key: "requestPauseAd",
            value: function() {
                var t = this;
                u.default.i(this.TAG + " requestPauseAd");
                var e = {
                    p: 10
                }
                  , i = "" + r.default.protocol + (r.default.isPre ? a.YoukuAdApiM_PRE.PAUSE_AD_API : a.YoukuAdApiM.PAUSE_AD_API) + "?" + r.default.urlParameter(this.param) + "&" + r.default.urlParameter(e);
                r.default.getJsonp(i, function(e) {
                    t.parsePauseAd(e)
                }, function() {
                    t.adDataError(a.AD_MAP.PAUSE)
                }, function() {
                    t.adDataTimeout(a.AD_MAP.PAUSE)
                })
            }
        }, {
            key: "loadVTVC",
            value: function(t) {
                if (t)
                    for (var e = 0; e < t.length; e++)
                        r.default.loadfile(t[e].VC, "js")
            }
        }, {
            key: "sendCUM",
            value: function() {
                this._adplayer._adreport && this._adplayer._adreport.sendCUM()
            }
        }, {
            key: "playFrontAD",
            value: function() {
                u.default.i(this.TAG, "playFrontAD():"),
                this.adType = a.AD_MAP.FRONT,
                this.front_addata ? (this.addata = this.front_addata,
                this._initAdPlayer(this.addata),
                this.play()) : "m3u8" === this.supportType ? (this.requestFrontAd(),
                this.requestEndAd()) : this.requestFrontAd(!0)
            }
        }, {
            key: "playEndAD",
            value: function() {
                this.adType = a.AD_MAP.END,
                "m3u8" === this.supportType ? (this.addata = this.end_addata,
                this._emitter.emit(m.default.AD_DATA_OK, this.end_addata, this.adType),
                this._initAdPlayer(this.addata, !0),
                this.play()) : this.requestEndAd(!0)
            }
        }, {
            key: "playContentAd",
            value: function() {
                this.adType = a.AD_MAP.CONT
            }
        }, {
            key: "_adReady",
            value: function(t) {
                u.default.i(this.TAG, "_adReady|adtype:" + this.adType),
                this._emitter.emit(m.default.AD_READY, t, this.adType)
            }
        }, {
            key: "_adError",
            value: function(t) {
                u.default.i(this.TAG, "_adError|adtype"),
                this._emitter.emit(m.default.AD_ERROR, t, this.adType)
            }
        }, {
            key: "_adPlay",
            value: function(t) {
                this.startplay = !0,
                u.default.i(this.TAG, "_adPlay|adtype" + this.adType),
                this._emitter.emit(m.default.AD_PLAY, t, this.adType)
            }
        }, {
            key: "_adtimeUpdate",
            value: function(t, e, i) {
                this._currentTime = e,
                this._currentNum = i,
                this._emitter.emit(m.default.AD_TIMEUPDATE, t, e, this.adType, i)
            }
        }, {
            key: "_adplayEnd",
            value: function(t, e) {
                u.default.i(this.TAG, "_adplayEnd|adtype|" + this.adType),
                this.startplay = !1,
                this.adType !== a.AD_MAP.CONT && this.adType !== a.AD_MAP.STA || this.contentNum++,
                this.adType === a.AD_MAP.FRONT && (this.frontAdTime = e || this.frontAdTime,
                u.default.i(this.TAG, "_adplayEnd(e):this..frontAdTime" + this.frontAdTime)),
                this.addata = null,
                this._emitter.emit(m.default.AD_END, t, this.adType),
                this._reset()
            }
        }, {
            key: "_adplayPause",
            value: function(t) {
                u.default.i(this.TAG, "_adplayPause|adtype" + this.adType),
                this._emitter.emit(m.default.AD_PAUSE, t, this.adType)
            }
        }, {
            key: "_adplayLoading",
            value: function(t) {
                u.default.i(this.TAG, "_adplayLoading|adtype" + this.adType),
                this._emitter.emit(m.default.AD_LOADING, t, this.adType)
            }
        }, {
            key: "_adcanplay",
            value: function(t) {
                u.default.i(this.TAG, "_adcanplay|adtype" + this.adType),
                this._emitter.emit(m.default.AD_CANPLAY, t, this.adType)
            }
        }, {
            key: "posiTimeUpdate",
            value: function(t) {
                if (this.dots && this.dots.dots && this.dots.dots.length > 0) {
                    var e = this.dots.dots.length
                      , i = -1
                      , n = this.dots.index;
                    if (e > 0 && n === -1)
                        if (t < this.dots.dots[0].start || t > this.dots.dots[e - 1].end)
                            i = -1;
                        else
                            for (var s = 0; s < e; s++) {
                                if (t >= this.dots.dots[s].start && t <= this.dots.dots[s].end) {
                                    i = s;
                                    break
                                }
                                t > this.dots.dots[s].end && (this.actCurrentTime = t - this.dots.dots[s].AL)
                            }
                    n === -1 && i > -1 ? (this.dots.curDot = this.dots.dots[i],
                    this.dots.index = i,
                    console.log("sendDotSUS::" + i + "  ifSUS:" + this.dots.curDot.ifSUS),
                    this.dots.curDot.ifSUS || (this._adplayer.sendDotSUS(this.dots.curDot),
                    this.dots.curDot.ifSUS = !0)) : n > -1 && this.dots.curDot && t >= this.dots.curDot.end && (console.log("sendDotSUE：：" + this.dots.index + "  ifSUE:" + this.dots.curDot.ifSUE),
                    this.dots.curDot.ifSUE || (this._adplayer.sendDotSUE(this.dots.curDot),
                    this.dots.curDot.ifSUE = !0),
                    this.dots.curDot = null,
                    this.dots.index = -1)
                }
            }
        }, {
            key: "getDotsIndex",
            value: function(t, e) {
                var i = t.length;
                if (e > t[0].start || t[i - 1].end)
                    return -1;
                for (var n = 0; n < i; n++)
                    if (e > e > t[n].start && e > t[n].end)
                        return n;
                return -1
            }
        }]),
        t
    }();
    exports.default = b
}
, function(t, exports, e) {
    "use strict";
    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    function n(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var s = function() {
        function t(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        return function(e, i, n) {
            return i && t(e.prototype, i),
            n && t(e, n),
            e
        }
    }()
      , a = e(12)
      , o = e(1)
      , r = i(o)
      , l = e(5)
      , u = i(l)
      , d = e(3)
      , h = i(d)
      , c = function() {
        function t(e) {
            n(this, t),
            this.TAG = "M3U8Player",
            this._currentTime = 0,
            this.m3u8Url = e.m3u8Url || [],
            this._tryTime = e.tryTime || -1,
            this._totalTime = e.totalTime || 0,
            this._firstflag = !0,
            this._frontAdTime = 0,
            this._endAdTime = 0,
            this._emitter = new r.default,
            this.adStatus = !0,
            this._ifEmitPause = !1,
            this._e = {
                onPlay: this._onPlay.bind(this),
                onPause: this._onPause.bind(this),
                onEnded: this._onEnd.bind(this),
                onCanPlay: this._onCanplay.bind(this),
                onTimeUpdate: this._onTimeupdate.bind(this),
                onError: this._onError.bind(this),
                onLoadeddata: this._onLoadeddata.bind(this),
                onLoadedmetaData: this._onLoadedmetaData.bind(this),
                onAbort: this._onAbort.bind(this),
                onStalled: this._onStalled.bind(this),
                onSuspend: this._onSuspend.bind(this),
                onWaiting: this._onWaiting.bind(this),
                onVolumeChange: this._onVolumeChange.bind(this),
                onPlaying: this._onPlaying.bind(this),
                onSeeked: this._onSeeked.bind(this),
                onSeeking: this._onSeeking.bind(this),
                onDurationChange: this._onDurationChange.bind(this),
                onProgress: this._onProgress.bind(this),
                onRateChange: this._onRateChange.bind(this),
                onLoadStart: this._onLoadStart.bind(this)
            }
        }
        return s(t, [{
            key: "destroy",
            value: function() {
                this._currentTime = 0,
                this._segs = [],
                this._tryTime = -1,
                this._totalTime = 0,
                this._firstflag = !0,
                this._mediaElement && this._mediaElement.pause(),
                this._ifEmitPause = !1,
                this.dettachMediaElement()
            }
        }, {
            key: "on",
            value: function(t, e) {
                this._emitter.addListener(t, e)
            }
        }, {
            key: "off",
            value: function(t, e) {
                this._emitter.removeListener(t, e)
            }
        }, {
            key: "attachMediaElement",
            value: function(t) {
                if (!this.ifEvent) {
                    this.ifEvent = !0,
                    this._mediaElement = t,
                    this._mediaElement.poster = "";
                    for (var e in a.VIDEO_EVENTS)
                        h.default.addEventListenerHander(this._mediaElement, e, this._e[a.VIDEO_EVENTS[e]])
                }
            }
        }, {
            key: "dettachMediaElement",
            value: function() {
                if (this.ifEvent = !1,
                this._mediaElement) {
                    for (var t in a.VIDEO_EVENTS)
                        h.default.removeEventListenerHander(this._mediaElement, t, this._e[a.VIDEO_EVENTS[t]]);
                    this._mediaElement && (this._mediaElement.src = "",
                    this._mediaElement.removeAttribute("src"),
                    this._mediaElement = null)
                }
            }
        }, {
            key: "load",
            value: function(t) {
                t.m3u8Url && (this.m3u8Url = t.m3u8Url),
                t.time && (this._currentTime = t.time),
                t.totalTime && (this._totalTime = t.totalTime),
                t.frontAdTime ? this._frontAdTime = t.frontAdTime : this._frontAdTime = 0,
                t.endAdTime && (this._endAdTime = _mediaElement.endAdTime),
                this._ifEmitPause = !0,
                this._firstflag && "" !== this._mediaElement.src || (this._mediaElement.src = this.m3u8Url),
                u.default.i(this.TAG, "m3u8Url:" + this._mediaElement.src + " _currentTime:" + this._currentTime + "   _frontAdTime:" + this._frontAdTime),
                this._currentTime > 0 && (this._mediaElement.pause(),
                this.firstTime = this._currentTime + this._frontAdTime,
                this.seek(this.firstTime)),
                0 === this._currentTime && this._frontAdTime > 0 && this._onCanplay(null)
            }
        }, {
            key: "play",
            value: function() {
                if (this.m3u8Url && this._mediaElement) {
                    var t = null;
                    return this._mediaElement.style.display = "block",
                    this._mediaElement.src || (this._mediaElement.src = this.m3u8Url,
                    t = this._mediaElement.play()),
                    t = this._mediaElement.play(),
                    h.default.playVideoElementExclusion(this._mediaElement),
                    t
                }
            }
        }, {
            key: "pause",
            value: function() {
                this.m3u8Url && this._mediaElement && (this._mediaElement.paused || this._mediaElement.pause())
            }
        }, {
            key: "replay",
            value: function(t) {
                if (this.m3u8Url && this._mediaElement) {
                    if (this._firstflag = !0,
                    this._frontAdTime = 0,
                    t)
                        return void this.seek(t);
                    this._mediaElement.src = this.m3u8Url,
                    this._currentTime = 0,
                    this._mediaElement.currentTime = 0 + this._frontAdTime,
                    this._mediaElement.play()
                }
            }
        }, {
            key: "seek",
            value: function(t) {
                if (this.m3u8Url && this._mediaElement && this._mediaElement.src && !(t < 0)) {
                    0 === t && (t = .2),
                    t >= this._totalTime && (t = this._totalTime - 1 > 0 ? this._totalTime - 1 : this._totalTime),
                    t += this._frontAdTime,
                    u.default.i(this.TAG, "Seek:" + t + "   _mediaElement.currentTime:" + this._mediaElement.currentTime + " _frontAdTime:" + this._frontAdTime);
                    try {
                        this._mediaElement.currentTime = t
                    } catch (n) {
                        var e = this
                          , i = 0;
                        this._mediaElement.addEventListener("canplay", function() {
                            1 !== i && (i = 1,
                            e._mediaElement.currentTime = t,
                            e._mediaElement.play())
                        })
                    }
                }
            }
        }, {
            key: "_setCurrentTime",
            value: function(t) {
                try {
                    this._mediaElement.currentTime = t
                } catch (i) {
                    var e = !1;
                    h.default.addEventListenerHander("canplay", function() {
                        e || (e = !0,
                        this._mediaElement.currentTime = t)
                    })
                }
            }
        }, {
            key: "_onPlay",
            value: function(t) {
                this._ifEmitPause = !1,
                this.adStatus || this._mediaElement.currentTime < this._frontAdTime || (this._firstflag && (this._firstflag = !1),
                this._emitter.emit(a.VIDEO_EVENTS.play, t))
            }
        }, {
            key: "_onPause",
            value: function(t) {
                if (!(this.adStatus || this._mediaElement.currentTime < this._frontAdTime))
                    return this._ifEmitPause ? (u.default.d(this.TAG, "_onPause:_ifEmitPause" + this._ifEmitPause),
                    void (this._ifEmitPause = !1)) : void this._emitter.emit(a.VIDEO_EVENTS.pause, t)
            }
        }, {
            key: "_onEnd",
            value: function(t) {
                this.adStatus || this._mediaElement.currentTime < this._frontAdTime || (u.default.i(this.TAG, "_onEnd(e)" + this._mediaElement.currentTime),
                this._emitter.emit(a.VIDEO_EVENTS.ended, t))
            }
        }, {
            key: "_onCanplay",
            value: function(t) {
                this.adStatus || this._mediaElement.currentTime < this._frontAdTime || (this.firstTime > 0 && (u.default.i(this.TAG + "  _onCanplay(e):this.firstTime:" + this.firstTime),
                this._mediaElement.currentTime = this.firstTime,
                this._mediaElement.play(),
                this.firstTime = 0),
                this._emitter.emit(a.VIDEO_EVENTS.canplay, t))
            }
        }, {
            key: "_onTimeupdate",
            value: function(t) {
                if (!(this.adStatus || this._mediaElement.currentTime < this._frontAdTime))
                    return this._currentTime = this._mediaElement.currentTime - this._frontAdTime,
                    this._currentTime >= this._totalTime ? (this._mediaElement.pause(),
                    this._ifEmitPause = !0,
                    u.default.i(this.TAG, "trytime is out"),
                    void this._onEnd(t)) : void this._emitter.emit(a.VIDEO_EVENTS.timeupdate, t, this._currentTime)
            }
        }, {
            key: "_onError",
            value: function(t) {
                this.adStatus || this._emitter.emit(a.VIDEO_EVENTS.error, t)
            }
        }, {
            key: "_onLoadeddata",
            value: function(t) {
                this.adStatus || this._mediaElement.currentTime < this._frontAdTime || this._emitter.emit(a.VIDEO_EVENTS.loadeddata, t)
            }
        }, {
            key: "_onLoadedmetaData",
            value: function(t) {
                this.adStatus || this._mediaElement.currentTime < this._frontAdTime || this._emitter.emit(a.VIDEO_EVENTS.loadedmetadata, t)
            }
        }, {
            key: "_onLoadStart",
            value: function(t) {
                this.adStatus || this._mediaElement.currentTime < this._frontAdTime || this._emitter.emit(a.VIDEO_EVENTS.loadstart, t)
            }
        }, {
            key: "_onAbort",
            value: function(t) {
                this.adStatus || this._mediaElement.currentTime < this._frontAdTime || this._emitter.emit(a.VIDEO_EVENTS.abort, t)
            }
        }, {
            key: "_onStalled",
            value: function(t) {
                this.adStatus || this._mediaElement.currentTime < this._frontAdTime || this._emitter.emit(a.VIDEO_EVENTS.stalled, t)
            }
        }, {
            key: "_onSuspend",
            value: function(t) {
                this.adStatus || this._mediaElement.currentTime < this._frontAdTime || this._emitter.emit(a.VIDEO_EVENTS.suspend, t)
            }
        }, {
            key: "_onWaiting",
            value: function(t) {
                this.adStatus || this._mediaElement.currentTime < this._frontAdTime || this._emitter.emit(a.VIDEO_EVENTS.waiting, t)
            }
        }, {
            key: "_onVolumeChange",
            value: function(t) {
                this.adStatus || this._mediaElement.currentTime < this._frontAdTime || this._emitter.emit(a.VIDEO_EVENTS.volumechange, t)
            }
        }, {
            key: "_onPlaying",
            value: function(t) {
                this.adStatus || this._mediaElement.currentTime < this._frontAdTime || this._emitter.emit(a.VIDEO_EVENTS.playing, t)
            }
        }, {
            key: "_onSeeked",
            value: function(t) {
                this.adStatus || this._mediaElement.currentTime < this._frontAdTime || this._emitter.emit(a.VIDEO_EVENTS.seeked, t)
            }
        }, {
            key: "_onSeeking",
            value: function(t) {
                this.adStatus || this._mediaElement.currentTime < this._frontAdTime || this._emitter.emit(a.VIDEO_EVENTS.seeking, t)
            }
        }, {
            key: "_onDurationChange",
            value: function(t) {
                this.adStatus || this._mediaElement.currentTime < this._frontAdTime || (this._currentTime = this._mediaElement.currentTime - this._frontAdTime,
                this._emitter.emit(a.VIDEO_EVENTS.durationchange, t))
            }
        }, {
            key: "_onProgress",
            value: function(t) {
                this.adStatus || this._mediaElement.currentTime < this._frontAdTime || this._emitter.emit(a.VIDEO_EVENTS.progress, t)
            }
        }, {
            key: "_onRateChange",
            value: function(t) {
                this.adStatus || this._mediaElement.currentTime < this._frontAdTime || this._emitter.emit(a.VIDEO_EVENTS.ratechange, t)
            }
        }]),
        t
    }();
    exports.default = c
}
, function(t, exports, e) {
    "use strict";
    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    function n(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var s = function() {
        function t(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        return function(e, i, n) {
            return i && t(e.prototype, i),
            n && t(e, n),
            e
        }
    }()
      , a = e(12)
      , o = e(1)
      , r = i(o)
      , l = e(5)
      , u = i(l)
      , d = e(3)
      , h = i(d)
      , c = function() {
        function t(e) {
            n(this, t),
            this.TAG = "MP4Player",
            this._curNum = 0,
            this._isPause = !0,
            this._pastTime = 0,
            this._currentTime = 0,
            this._segs = e.segs || [],
            this._tryTime = e.tryTime || -1,
            this._totalTime = e.totalTime || 0,
            this._firstflag = !0,
            this._retryNum = 3,
            this._emitter = new r.default,
            this._e = {
                onPlay: this._onPlay.bind(this),
                onPause: this._onPause.bind(this),
                onEnded: this._onEnd.bind(this),
                onCanPlay: this._onCanplay.bind(this),
                onTimeUpdate: this._onTimeupdate.bind(this),
                onError: this._onError.bind(this),
                onLoadeddata: this._onLoadeddata.bind(this),
                onLoadedmetaData: this._onLoadedmetaData.bind(this),
                onAbort: this._onAbort.bind(this),
                onStalled: this._onStalled.bind(this),
                onSuspend: this._onSuspend.bind(this),
                onWaiting: this._onWaiting.bind(this),
                onVolumeChange: this._onVolumeChange.bind(this),
                onPlaying: this._onPlaying.bind(this),
                onSeeked: this._onSeeked.bind(this),
                onSeeking: this._onSeeking.bind(this),
                onDurationChange: this._onDurationChange.bind(this),
                onProgress: this._onProgress.bind(this),
                onRateChange: this._onRateChange.bind(this),
                onLoadStart: this._onLoadStart.bind(this)
            }
        }
        return s(t, [{
            key: "destroy",
            value: function() {
                this._curNum = 0,
                this._isPause = !0,
                this._pastTime = 0,
                this._currentTime = 0,
                this._segs = [],
                this._tryTime = -1,
                this._totalTime = 0,
                this._firstflag = !0,
                this.dettachMediaElement()
            }
        }, {
            key: "resetStatus",
            value: function() {
                u.default.i(this.TAG, "resetStatus"),
                this._curNum = 0,
                this._isPause = !0,
                this._pastTime = 0,
                this._currentTime = 0,
                this._firstflag = !0
            }
        }, {
            key: "on",
            value: function(t, e) {
                this._emitter.addListener(t, e)
            }
        }, {
            key: "off",
            value: function(t, e) {
                this._emitter.removeListener(t, e)
            }
        }, {
            key: "attachMediaElement",
            value: function(t) {
                if (!this.ifEvent) {
                    this.ifEvent = !0,
                    this._mediaElement = t,
                    this._mediaElement.poster = "";
                    for (var e in a.VIDEO_EVENTS)
                        h.default.addEventListenerHander(this._mediaElement, e, this._e[a.VIDEO_EVENTS[e]])
                }
            }
        }, {
            key: "dettachMediaElement",
            value: function() {
                if (this._mediaElement) {
                    this.ifEvent = !1;
                    for (var t in a.VIDEO_EVENTS)
                        h.default.removeEventListenerHander(this._mediaElement, t, this._e[a.VIDEO_EVENTS[t]]);
                    this._mediaElement && (this._mediaElement.src = "",
                    this._mediaElement.removeAttribute("src"),
                    this._mediaElement = null)
                }
            }
        }, {
            key: "load",
            value: function(t) {
                if (t)
                    if (t.segs && (this._segs = t.segs),
                    t.time && (this._currentTime = t.time),
                    t.totalTime)
                        this._totalTime = t.totalTime;
                    else {
                        this._totalTime = 0;
                        for (var e = 0, i = this._segs.length; e < i; e++)
                            this._totalTime += this._segs[e].seconds_video
                    }
                this._mediaElement.style.display = "block",
                this._firstflag && (this._curNum = 0),
                this._mediaElement.src = this._segs[this._curNum].cdn_url,
                this._mediaElement.play(),
                this._currentTime > 0 && this.seek(this._currentTime)
            }
        }, {
            key: "play",
            value: function(t) {
                this._segs && 0 !== this._segs.length && this._mediaElement.paused && (t && (this._mediaElement.src = this._segs[this._curNum].cdn_url,
                this._mediaElement.currentTime = this._currentTime - this._pastTime),
                console.log("playVideoElementExclusion"),
                h.default.playVideoElementExclusion(this._mediaElement),
                this._isPause = !1,
                this._mediaElement.play())
            }
        }, {
            key: "pause",
            value: function() {
                this._segs && 0 !== this._segs.length && !this._mediaElement.paused && (this._isPause = !0,
                this._mediaElement.pause())
            }
        }, {
            key: "seek",
            value: function(t) {
                if (!this.adStatus && (u.default.i(this.TAG, "seek(time):" + t),
                this._segs && 0 !== this._segs.length)) {
                    t >= this._totalTime && (t = this._totalTime >= 1 ? this._totalTime - 1 : this._totalTime),
                    t < 0 && (t = 0);
                    var e = 0
                      , i = this._segs.length;
                    1 === i ? (e = 0,
                    this._curNum = 0,
                    this._mediaElement.currentTime = t,
                    this._mediaElement.play(),
                    this._setCurrentTime(t)) : this._seekMultiSeg(t)
                }
            }
        }, {
            key: "replay",
            value: function(t) {
                return this._firstflag = !0,
                this._isPause = !0,
                t ? void this.seek(t) : (this._curNum = 0,
                this._pastTime = 0,
                this._currentTime = 0,
                this._mediaElement.src = this._segs[this._curNum].cdn_url,
                this._mediaElement.currentTime = this._currentTime - this._pastTime,
                void this._mediaElement.play())
            }
        }, {
            key: "_seekMultiSeg",
            value: function(t) {
                var e = 0
                  , i = void 0;
                if (i = 0 === t ? 0 : this._getCurNumBy(t),
                0 === i ? (e = t,
                this._pastTime = 0) : (this._pastTime = this._segs[i - 1].totalSegs_seconds_video,
                e = t - this._pastTime),
                u.default.i(this.TAG, "_num:" + i + " _pastTime:" + this._pastTime + "  _vtTime:" + e),
                i === this._curNum) {
                    this._mediaElement.currentTime = e;
                    this._setCurrentTime(e),
                    this._mediaElement.play()
                } else {
                    var n = this._segs[i].cdn_url;
                    this.vkey = h.default.getURlKey("vkey", n),
                    this.fileid = this._segs[i].fileid,
                    this._curNum = i,
                    n ? (this._mediaElement.pause(),
                    this._mediaElement.src = n,
                    this._mediaElement.currentTime = e,
                    this._setCurrentTime(e),
                    this._mediaElement.play()) : this._mediaElement.pause()
                }
            }
        }, {
            key: "_setCurrentTime",
            value: function(t) {
                try {
                    this._mediaElement.currentTime = t
                } catch (n) {
                    var e = !0
                      , i = this;
                    h.default.addEventListenerHander(this._mediaElement, "canplay", function() {
                        e && (e = !1,
                        i._mediaElement.currentTime = t,
                        i._mediaElement.play())
                    })
                }
            }
        }, {
            key: "_getCurNumBy",
            value: function(t) {
                var e = Math.floor(this._segs.length / 2);
                if (1 === this._segs.length)
                    return 0;
                t < this._segs[e].totalSegs_seconds_video && (e = 0);
                for (var i = this._segs.length; e < i && !(t < this._segs[e].totalSegs_seconds_video); e++)
                    ;
                return e
            }
        }, {
            key: "_onPlay",
            value: function(t) {
                this.adStatus || (this._firstflag && (this._firstflag = !1),
                this._emitter.emit(a.VIDEO_EVENTS.play, t))
            }
        }, {
            key: "_onPause",
            value: function(t) {
                if (!this.adStatus)
                    return this._ifEmitPause ? void (this._ifEmitPause = !1) : void this._emitter.emit(a.VIDEO_EVENTS.pause, t)
            }
        }, {
            key: "_onEnd",
            value: function(t) {
                if (!this.adStatus)
                    if (this._curNum++,
                    this._curNum < this._segs.length) {
                        this._pastTime += this._segs[this._curNum - 1].seconds_video,
                        this._mediaElement.pause(),
                        this._ifEmitPause = !0;
                        var e = this._segs[this._curNum].cdn_url;
                        this._mediaElement.src = e,
                        this.vkey = h.default.getURlKey("vkey", e),
                        this.fileid = this._segs[this._curNum].fileid;
                        var i = !0
                          , n = this;
                        h.default.addEventListenerHander(this._mediaElement, "canplay", function() {
                            i && (u.default.d("MP4Player", "canplay:" + n._mediaElement.paused),
                            n._mediaElement.play(),
                            i = !1)
                        }),
                        this._mediaElement.play()
                    } else
                        u.default.i(this.TAG, "_onEnd" + this._curNum),
                        this._emitter.emit(a.VIDEO_EVENTS.ended, t)
            }
        }, {
            key: "_onCanplay",
            value: function(t) {
                this.adStatus || this._emitter.emit(a.VIDEO_EVENTS.canplay, t)
            }
        }, {
            key: "_onTimeupdate",
            value: function(t) {
                if (!this.adStatus)
                    return this._currentTime = this._mediaElement.currentTime + this._pastTime,
                    this._currentTime >= this._totalTime ? (u.default.i(this.TAG, "trytime is out"),
                    this._mediaElement.pause(),
                    this._ifEmitPause = !0,
                    u.default.i(this.TAG, "_onEnd" + this._curNum),
                    void this._emitter.emit(a.VIDEO_EVENTS.ended, t)) : void this._emitter.emit(a.VIDEO_EVENTS.timeupdate, t, this._currentTime)
            }
        }, {
            key: "_onError",
            value: function(t) {
                this.adStatus || (this._retryNum > 0 ? (this._mediaElement.src = this._segs[this._curNum].cdn_url,
                this.seek(this._currentTime),
                this._retryNum--) : (this._retryNum = 3,
                this._emitter.emit(a.VIDEO_EVENTS.error, t)))
            }
        }, {
            key: "_onLoadeddata",
            value: function(t) {
                this.adStatus || this._emitter.emit(a.VIDEO_EVENTS.loadeddata, t)
            }
        }, {
            key: "_onLoadedmetaData",
            value: function(t) {
                this.adStatus || this._emitter.emit(a.VIDEO_EVENTS.loadedmetadata, t)
            }
        }, {
            key: "_onLoadStart",
            value: function(t) {
                this.adStatus || this._emitter.emit(a.VIDEO_EVENTS.loadstart, t)
            }
        }, {
            key: "_onAbort",
            value: function(t) {
                this.adStatus || this._emitter.emit(a.VIDEO_EVENTS.abort, t)
            }
        }, {
            key: "_onStalled",
            value: function(t) {
                this.adStatus || this._emitter.emit(a.VIDEO_EVENTS.stalled, t)
            }
        }, {
            key: "_onSuspend",
            value: function(t) {
                this.adStatus || this._emitter.emit(a.VIDEO_EVENTS.suspend, t)
            }
        }, {
            key: "_onWaiting",
            value: function(t) {
                this.adStatus || this._emitter.emit(a.VIDEO_EVENTS.waiting, t)
            }
        }, {
            key: "_onVolumeChange",
            value: function(t) {
                this.adStatus || this._emitter.emit(a.VIDEO_EVENTS.volumechange, t)
            }
        }, {
            key: "_onPlaying",
            value: function(t) {
                this.adStatus || this._emitter.emit(a.VIDEO_EVENTS.playing, t)
            }
        }, {
            key: "_onSeeked",
            value: function(t) {
                this.adStatus || this._emitter.emit(a.VIDEO_EVENTS.seeked, t)
            }
        }, {
            key: "_onSeeking",
            value: function(t) {
                this.adStatus || this._emitter.emit(a.VIDEO_EVENTS.seeking, t)
            }
        }, {
            key: "_onDurationChange",
            value: function(t) {
                this.adStatus || this._emitter.emit(a.VIDEO_EVENTS.durationchange, t)
            }
        }, {
            key: "_onProgress",
            value: function(t) {
                this.adStatus || this._emitter.emit(a.VIDEO_EVENTS.progress, t)
            }
        }, {
            key: "_onRateChange",
            value: function(t) {
                this.adStatus || this._emitter.emit(a.VIDEO_EVENTS.ratechange, t)
            }
        }]),
        t
    }();
    exports.default = c
}
, function(t, exports, e) {
    "use strict";
    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    function n(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var s = function() {
        function t(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        return function(e, i, n) {
            return i && t(e.prototype, i),
            n && t(e, n),
            e
        }
    }()
      , a = e(3)
      , o = i(a)
      , r = e(5)
      , l = i(r)
      , u = (e(10),
    e(58))
      , d = i(u)
      , h = Object.freeze({
        UPS_API_URL: "https://ups.youku.com/ups/get.json",
        OPEN_API_URL: "https://api.youku.com/players/custom.json",
        OPEN_API_URL_TOKEN: "https://api.youku.com/players/consume.json",
        defaultUA: "DIl58SLFxFNndSV1GFNnMQVYkx1PP5tKe1siZu/86PR1u/Wh1Ptd+WOZsHHWxysSfAOhNJpdVWsdVJNsfJ8Sxd8WKVvNfAS8aS8fAOzYARzPyPc3JvtnPHjTdKfESTdnuTW6ZPvk2pNDh4uFzotgdMEFkzQ5wZVXl2Pf1/Y6hLK0OnCNxBj3+nb0v72gZ6b0td+WOZsHHWxysSo/0y9D2K42SaB8Y/+aD2K42SaB8Y/+ahU+WOZsHcrxysooUeND"
    })
      , c = function() {
        function t(e, i) {
            n(this, t),
            this.TAG = "UPSInfo",
            this.tryCount = 4,
            this.param = e,
            this.iserror = 0,
            this.issuccess = 0,
            this.callback = null,
            this.error = null,
            this.timeout = null,
            this.utidErrorNum = 0,
            this.customParam = i,
            this.customData = null,
            this.customContol = {
                success: !1
            }
        }
        return s(t, [{
            key: "destroy",
            value: function() {
                this.destroyed = !0,
                this.issuccess = 0,
                this.iserror = 0,
                this.customData = null,
                this.customContol = {
                    success: !1
                }
            }
        }, {
            key: "_initData",
            value: function(t) {
                return this.destroyed ? void l.default.i(this.TAG, "get ups info success destroyed block") : (l.default.i(this.TAG, "get ups info success"),
                this.issuccess++,
                t.status ? void this.callback(t, this.customData) : void this.callback(t.data, this.customData))
            }
        }, {
            key: "_requestError",
            value: function(t) {
                if (this.destroyed)
                    return void l.default.i(this.TAG, "get ups _requestError  destroyed block");
                if (console.error(this.TAG, "_requestError" + this.iserror),
                !this.issuccess) {
                    if (this.iserror++,
                    t && 1111 === t.status)
                        return this.iserror = 0,
                        void this.error(t);
                    if (this.iserror < this.tryCount && !this.issuccess) {
                        this.ckey = o.default.getUA() ? o.default.getUA() : this.ckey,
                        this.param.client_ts = (new Date).getTime();
                        var e = this._buildUpsUrl();
                        e = this.iserror > 2 && "http:" === o.default.protocol ? e.replace("https:", "http:") : e,
                        this.upsUrl = e,
                        o.default.request(e, function(t) {
                            this._initData(t)
                        }
                        .bind(this), function(t) {
                            this._requestError(t)
                        }
                        .bind(this), function() {
                            this.timeout()
                        }
                        .bind(this), 5e3)
                    } else
                        this.iserror = 0,
                        this.error(t)
                }
            }
        }, {
            key: "_getOpenAPI",
            value: function() {
                l.default.d(this.TAG, "_getOpenAPI(data)" + JSON.stringify(this.customParam));
                var t = {};
                t.refer = this.customParam.refer,
                t.client_id = this.customParam.client_id,
                t.video_id = this.param.vid,
                t.showid = this.param.showid,
                t.version = "1.0",
                t.type = "h5",
                t.embsig = this.customParam.embsig || "";
                var e = h.OPEN_API_URL + "?" + o.default.urlParameter(t)
                  , i = {
                    count: this.customParam.openapi_retry_count || 0
                };
                this._exeRetryJsonp(o.default.getJsonp, [e, function(t) {
                    this._parseCustom(t)
                }
                .bind(this), function() {
                    this._customFail()
                }
                .bind(this), function() {
                    this._customFail()
                }
                .bind(this)], i)
            }
        }, {
            key: "_exeRetryJsonp",
            value: function(t, e, i) {
                function n(t) {
                    console.info({
                        alarm_type: "player-open-api",
                        alarm_code: 5002,
                        client_msg: {
                            message: "retry_function_failed",
                            api: e[0]
                        }
                    }),
                    t.apply(this, arguments)
                }
                function s(i) {
                    a - i > 0 && console.info({
                        alarm_type: "player-open-api",
                        alarm_code: 5001,
                        client_msg: {
                            message: "retry_count_" + (a - i),
                            api: e[0]
                        }
                    }),
                    i > 0 ? (i--,
                    t.call(this, e[0], e[1], s.bind(this, i), s.bind(this, i))) : t.call(this, e[0], e[1], n.bind(this, e[2]), n.bind(this, e[3]))
                }
                var a = i.count && i.count > 0 ? i.count : 0;
                s.call(this, a)
            }
        }, {
            key: "_parseCustom",
            value: function(t) {
                l.default.d(this.TAG, "_parseCustom(data)" + JSON.stringify(t)),
                this.customData = t,
                this.customData && this.customParam.password && this.customData.passless && 1 === parseInt(this.customData.passless) ? (this.param.client_id = this.customParam.client_id,
                this.param.password = this.customParam.password) : this.param.client_id ? delete this.param.client_id : "",
                this._getUpsData()
            }
        }, {
            key: "_customFail",
            value: function() {
                this.customData = null,
                this._getUpsData(),
                l.default.d(this.TAG, "_customFail()")
            }
        }, {
            key: "sendThirdToken",
            value: function() {
                if (this.customData) {
                    var t = this.customData.token
                      , e = h.OPEN_API_URL_TOKEN + "?token=" + t;
                    o.default.getJsonp(e, function(t) {
                        this._thirdTokenSuccess(t)
                    }
                    .bind(this), function() {
                        this._thirdTokenFail()
                    }
                    .bind(this), function() {
                        this._thirdTokenFail()
                    }
                    .bind(this), 1e4)
                }
            }
        }, {
            key: "_thirdTokenSuccess",
            value: function(t) {
                l.default.d(this.TAG, "_thirdTokenSuccess(data):" + JSON.stringify(t))
            }
        }, {
            key: "_thirdTokenFail",
            value: function() {
                l.default.d(this.TAG, "_thirdTokenFail()")
            }
        }, {
            key: "_buildUpsUrl",
            value: function() {
                this.param.play_ability = 1024;
                var t = o.default.upstest ? o.default.upstest : h.UPS_API_URL;
                t += "?" + o.default.urlParameter(this.param),
                t += "&utid=" + encodeURIComponent(this.utid),
                this.customData && this.customParam.password && 1 === this.customData.status && 1 === this.customData.passless && (t += "&client_id=" + this.customParam.client_id),
                this.customData && this.customParam.atoken && (t += "&client_id=" + this.customParam.client_id,
                t += "&atoken=" + this.customParam.atoken),
                this.customData && this.customData.stealsign && (t += "&r=" + encodeURIComponent(this.customData.stealsign)),
                t += "&ckey=" + encodeURIComponent(this.ckey);
                var e = o.default.getUCStr(this.param.vid, this.param.ccode);
                return t += e
            }
        }, {
            key: "_getUpsData",
            value: function() {
                if (this.param.client_ts = parseInt((new Date).getTime() / 1e3),
                this.param.utid ? this.utid = this.param.utid : this.utid = o.default.getCna(),
                delete this.param.utid,
                this.utid && this.ckey) {
                    this.utidErrorNum = 0;
                    var t = this._buildUpsUrl();
                    this.upsUrl = t,
                    this._request(this.upsUrl)
                } else {
                    if (this.utidErrorNum > 10) {
                        this.error({
                            note: "请允许cookie存储",
                            code: "0000"
                        });
                        var e = "http://gm.mmstat.com/yt/youkuplayer.fdl.error?track_view_code=&utid=&ccode=0501&ups_url=&cdn_url=&m3u8_url=&error_type=10&error_code=10101&error_position=0&user_timestamp=" + (new Date).getTime() + "&userid=&vip=&player_version=&t=" + (new Date).getTime();
                        return o.default.sendlog(e),
                        void (this.utidErrorNum = 0)
                    }
                    this.utidErrorNum++;
                    var i = this;
                    this.tryTimer = setTimeout(function() {
                        l.default.i(this.TAG, "再次获取utid"),
                        i.utid = o.default.getCna(),
                        i.utidErrorNum > 9 && !i.ckey ? i.ckey = h.defaultUA : i.ckey = o.default.getUA(),
                        i.start(),
                        clearTimeout(this.tryTimer)
                    }, 500)
                }
            }
        }, {
            key: "_request",
            value: function(t) {
                o.default.request(t, function(e) {
                    var i = this;
                    d.default.check(e, function(e, n) {
                        e ? i._initData(n) : (console.log(n),
                        t += n._sufeiToken,
                        i._getUpsData(t))
                    })
                }
                .bind(this), function(t) {
                    this._requestError(t)
                }
                .bind(this), function() {
                    this.timeout()
                }
                .bind(this), 5e3)
            }
        }, {
            key: "start",
            value: function(t, e, i, n, s) {
                if (this.error = e || this.error,
                this.callback = t || this.callback,
                this.timeout = i || function() {}
                ,
                n)
                    for (var a in n)
                        this.param[a] = n[a];
                if (s)
                    for (var a in s)
                        this.customParam[a] = s[a];
                s ? this._getOpenAPI() : (this.customParam && this.customParam.password && delete this.customParam.password,
                this._getUpsData())
            }
        }]),
        t
    }();
    exports.default = c
}
, function(t, exports, e) {
    "use strict";
    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    function n(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var s = function() {
        function t(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        return function(e, i, n) {
            return i && t(e.prototype, i),
            n && t(e, n),
            e
        }
    }()
      , a = e(3)
      , o = i(a)
      , r = e(5)
      , l = i(r)
      , u = e(2)
      , d = e(11)
      , h = e(24)
      , c = i(h)
      , f = ["vali.cp31.ott.cibntv.net", "vali-dns.cp31.ott.cibntv.net", "vali.cp12.wasu.tv", "vali-dns.cp12.wasu.tv", "play2-download.cp31.ott.cibntv.net"]
      , p = location.protocol
      , m = {
        ups: "ups",
        video: "video",
        stream: "stream",
        show: "show",
        fee: "fee",
        dvd: "dvd",
        videos: "videos",
        trial: "trial",
        user: "user",
        vip: "vip",
        ticket: "ticket",
        cloud: "cloud",
        uploader: "uploader",
        preview: "preview",
        album: "album",
        token: "token",
        controller: "controller",
        network: "network",
        playlog: "playlog",
        videolike: "videolike",
        pay: "pay",
        vipPayInfo: "vip_pay_info",
        zpdPayInfo: "zpd_pay_info",
        playPolicy: "play_policy",
        error: "error",
        watermark: "watermark"
    }
      , v = function() {
        function t(e) {
            n(this, t),
            this.TAG = "VideoInfo",
            this.ups = null,
            this.security = null,
            this.stream = {},
            this.ccode = e
        }
        return s(t, [{
            key: "destroy",
            value: function() {
                for (var t in m)
                    this[t] = null
            }
        }, {
            key: "init",
            value: function(t, e, i) {
                if (this.destroy(),
                !t.ups || !t.video)
                    return void l.default.e(this.TAG, "the data.ups is undefined,please check data");
                if (this.password = e,
                this.client_id = i,
                this._copyData(t),
                this.totalTime = this.video.seconds,
                this.video.title = o.default.htmlEncodeAll(this.video.title),
                this.show && (this.show.title = o.default.htmlEncodeAll(this.show.title)),
                this.encodeId = this.video.encodeid,
                this.videoId = this.video.id || window.vid,
                this.stream && !(this.stream.length < 1)) {
                    var n = {
                        lang: "默认",
                        langcode: this.stream[0].audio_lang,
                        vid: this.encodeid
                    }
                      , s = [];
                    s.push(n),
                    this.languageList = this.dvd && this.dvd.audiolang ? this.dvd.audiolang : s;
                    for (var a = [], r = 0, u = this.languageList.length; r < u; r++)
                        a.push(this.languageList[r].langcode);
                    this.langcodes = a,
                    this.logo = {},
                    this.waterInfo = {
                        logo: {
                            normal: null,
                            fullScreen: null
                        },
                        license: {
                            normal: null,
                            fullScreen: null
                        },
                        register: {
                            normal: null,
                            fullScreen: null
                        }
                    },
                    this.ups && (this.upsTs = this.ups.ups_ts),
                    this._createStream(this.stream, a),
                    this._createHdList(),
                    this._dealWaterInfo()
                }
            }
        }, {
            key: "_copyData",
            value: function(t) {
                for (var e in m)
                    this[e] = t[m[e]]
            }
        }, {
            key: "_getPreviewInfo",
            value: function(t) {
                this.preview.point = t.point,
                this.preview.head = t.head,
                this.preview.tail = t.tail,
                this.preview.notsharing = t.notsharing,
                this.preview.threed = t.threed
            }
        }, {
            key: "_createStream",
            value: function(t, e) {
                if (0 === t.length)
                    return [];
                var i = {};
                t[0].audio_lang;
                this.logo = {};
                for (var n = 0, s = e.length; n < s; n++) {
                    var a = e[n];
                    i[a] = {},
                    this.logo[a] = {};
                    for (var r = 0, l = t.length; r < l; r++) {
                        for (var u = t[r], d = u.segs, h = 0, c = 0, f = 0, p = d.length; f < p; f++)
                            d[f].seconds_audio = parseInt(d[f].total_milliseconds_audio) / 1e3,
                            d[f].seconds_video = parseInt(d[f].total_milliseconds_video) / 1e3,
                            h += parseInt(d[f].total_milliseconds_audio),
                            c += parseInt(d[f].total_milliseconds_video),
                            d[f].totalSegs_seconds_audio = h / 1e3,
                            d[f].totalSegs_seconds_video = c / 1e3,
                            d[f].cdn_url = o.default.changeProtocol(d[f].cdn_url);
                        var m = void 0;
                        t[r].audio_lang === a && (u.seconds_audio = u.milliseconds_audio / 1e3,
                        u.seconds_video = u.milliseconds_video / 1e3,
                        i[a][t[r].stream_type] ? (m = i[a][t[r].stream_type],
                        m.seconds_video += u.seconds_video,
                        m.seconds_audio += u.seconds_audio,
                        m.size += u.size,
                        m.segs = this._splicSegs(m.segs, u.segs),
                        "tail" === u.channel_type && (m.tailTime = u.seconds_video)) : (m = u,
                        "head" === m.channel_type ? m.headTime = u.seconds_video : m.headTime = 0,
                        m.tailTime = 0,
                        m.m3u8_url = this._checkM3u8(u.m3u8_url),
                        this.logo[a][t[r].stream_type] = u.logo && "none" !== u.logo ? 1 : 0),
                        i[a][t[r].stream_type] = m)
                    }
                }
                this.stream = i
            }
        }, {
            key: "_checkUrlDomain",
            value: function(t) {
                if (!t || !u.browser.isYouku)
                    return !1;
                for (var e = 0; e < f.length; e++)
                    if (t.indexOf(f[e]) > -1)
                        return !0;
                return !1
            }
        }, {
            key: "_checkCdnUrl",
            value: function(t) {
                return "https:" === p && this._checkUrlDomain(t) ? t = t.replace("http:", p) : t
            }
        }, {
            key: "_splicSegs",
            value: function(t, e) {
                for (var i = t[t.length - 1], n = i.totalSegs_seconds_audio, s = i.totalSegs_seconds_video, a = i.total_milliseconds_video, o = i.total_milliseconds_audio, r = 0, l = e.length; r < l; r++) {
                    var u = e[r];
                    u.totalSegs_seconds_audio += n,
                    u.totalSegs_seconds_video += s,
                    u.total_milliseconds_audio += o,
                    u.total_milliseconds_video += a,
                    t.push(u)
                }
                return t
            }
        }, {
            key: "_checkM3u8",
            value: function(t) {
                if (o.default.m3u8test && (t = t.replace("http://pl-ali.youku.com", o.default.m3u8test)),
                this.password && t.indexOf("&password=") < 0 && (t += "&password=" + this.password),
                this.client_id && "youkumobileplaypage" !== this.client_id && t.indexOf("&client_id") < 0 && (t += "&client_id=" + this.client_id),
                u.browser.isYouku && u.browser.isIOS) {
                    var e = /iPhone|iPod/.test(navigator.userAgent) && /OS 11|OS 1\d{1,}/i.test(navigator.userAgent);
                    if (e) {
                        var i = o.default.getIOSM3u8Str(this.videoId, this.upsTs) || "";
                        t += i
                    }
                }
                return t = o.default.changeProtocol(t)
            }
        }, {
            key: "_checkKUrl",
            value: function(t) {
                return t
            }
        }, {
            key: "_createHdList",
            value: function() {
                for (var t = {}, e = 0, i = this.langcodes.length; e < i; e++) {
                    var n = this.langcodes[e]
                      , s = this.stream[n];
                    t[n] = {},
                    t[n].hditems = [],
                    t[n].hdcodes = [];
                    for (var a in d.SHOWHD_MAP)
                        if (s[a] && ("3gphd" !== a || !s.mp4sd)) {
                            var o = a;
                            if (s[d.ACT_HD_MAP[a]]) {
                                o = d.ACT_HD_MAP[a];
                                break
                            }
                            var r = {
                                hdcode: o,
                                hdname: d.SHOWHD_MAP[a]
                            };
                            t[n].hditems.push(r),
                            t[n].hdcodes.push(o)
                        }
                }
                this.hdList = t,
                this.hdcodes = this.hdList[this.langcodes[0]].hdcodes
            }
        }, {
            key: "_dealWaterInfo",
            value: function() {
                if (this.watermark)
                    for (var t = 0, e = this.watermark.length; t < e; t++) {
                        var i = parseInt(this.watermark[t].type)
                          , n = this.watermark[t].displayMode
                          , s = this.watermark[t].displayDTOS[0];
                        for (var a in s)
                            this.watermark[t][a] = s[a];
                        this.watermark[t].displayDTOS = null,
                        3 === i && (1 === n ? this.waterInfo.license.fullScreen = this.watermark[t] : 0 === n && (this.waterInfo.license.normal = this.watermark[t])),
                        2 !== i && 8 !== i || (1 === n ? this.waterInfo.register.fullScreen = this.watermark[t] : 0 === n && (this.waterInfo.register.normal = this.watermark[t])),
                        3 !== i && 2 !== i && 8 !== i && (1 === n ? this.waterInfo.logo.fullScreen = this.watermark[t] : 0 === n && (this.waterInfo.logo.normal = this.watermark[t]))
                    }
            }
        }, {
            key: "getVideoInfo",
            value: function() {
                return this.video ? this.video : null
            }
        }, {
            key: "getVideoList",
            value: function() {
                if (!this.videos)
                    return null;
                var t = {};
                return t.list = this.videos.list || [],
                t.next = this.videos.next || null,
                t.previous = this.videos.previous || null,
                t
            }
        }, {
            key: "getShow",
            value: function() {
                return this.show ? this.show : null
            }
        }, {
            key: "getStreamLogo",
            value: function() {
                return this.logo ? this.logo : null
            }
        }, {
            key: "getTrialInfo",
            value: function() {
                return this.trial ? this.trial : null
            }
        }, {
            key: "getPreviewInfo",
            value: function() {
                if (!this.dvd && !this.preview)
                    return null;
                var t = {};
                return this.preview && (t.thumb = this.preview.thumb,
                t.timespan = this.preview.timespan),
                this.dvd && (t.head = this.dvd.head ? parseInt(this.dvd.head) / 1e3 : 0,
                t.tail = this.dvd.tail ? parseInt(this.dvd.tail) / 1e3 : 0,
                t.point = this.dvd.point),
                t
            }
        }, {
            key: "getCloudOptions",
            value: function() {
                if (!this.cloud && !this.playlog)
                    return null;
                var t = {};
                return this.playlog && (t.lastpoint = this.playlog.lastpoint),
                this.cloud && (t.subtitle = this.cloud.player_var_subtitle,
                t.skip = this.cloud.player_skip_titles_credits,
                t.lang = this.cloud.player_language),
                t
            }
        }, {
            key: "getUserInfo",
            value: function() {
                var t = {};
                return this.user && (t.uid = this.user.uid,
                t.vip = this.user.vip,
                t.ip = this.user.ip,
                t.ytid = this.user.ytid),
                this.vip && (t.ad = this.vip.ad,
                t.acc_support = this.vip.acc_support,
                t.acc_pen = this.vip.acc_open,
                t.hd3 = this.vip.hd3,
                t.note = this.vip.note,
                t.reason = this.vip.reason,
                t.link = this.vip.link),
                t
            }
        }, {
            key: "getPayInfo",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
                  , e = arguments[1];
                if (!this.pay && !this.fee)
                    return null;
                var i = {};
                return this.pay && (i.can_play = this.pay.can_play,
                i.h5_caseurl = this.pay.h5_caseurl,
                i.price = this.pay.price,
                i.discount_price = this.pay.discount_price,
                i.duration = this.pay.duration),
                this.fee && (i.ad = this.fee.ad,
                i.paidType = this.fee.paid_type,
                i.ownChannelId = this.fee.own_channel_id,
                i.paid = this.fee.paid,
                i.videoType = this.fee.video_type),
                this._payInfo = new c.default,
                t ? void this._payInfo.getData({
                    videoId: this.videoId,
                    successCb: function(t) {
                        i.vipPayInfo = t,
                        e && e(i)
                    },
                    failCb: function() {
                        e && e(i)
                    }
                }) : i
            }
        }, {
            key: "getVipPayInfo",
            value: function() {
                return this.vipPayInfo ? this.vipPayInfo : null
            }
        }, {
            key: "getZpdPayInfo",
            value: function() {
                if (!this.zpdPayInfo)
                    return this.zpdPayInfo
            }
        }, {
            key: "getFee",
            value: function() {
                return this.fee ? this.fee : null
            }
        }, {
            key: "getUploader",
            value: function() {
                return this.uploader
            }
        }, {
            key: "getVideolike",
            value: function() {
                return this.videolike
            }
        }, {
            key: "getController",
            value: function() {
                return this.controller ? this.controller : null
            }
        }, {
            key: "getAlbum",
            value: function() {
                return this.album ? this.album : null
            }
        }, {
            key: "getStreamData",
            value: function(t, e) {
                return this.stream && this.stream[t] && this.stream[t][e] ? this.stream[t][e] : null
            }
        }, {
            key: "getLogo",
            value: function() {
                return this.waterInfo.logo
            }
        }, {
            key: "getLicense",
            value: function() {
                return this.waterInfo.license
            }
        }, {
            key: "getRegister",
            value: function() {
                return this.waterInfo.register
            }
        }]),
        t
    }();
    exports.default = v
}
, function(t, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var e = {
        ALI: {
            TSLOG: "//yt.mmstat.com/yt/vp.vtslog",
            DURATIONLOG: "//yt.mmstat.com/yt/vp.vdoview",
            EVENTLOG: "//yt.mmstat.com/yt/vp.event"
        },
        YOUKU: {
            TSLOG: "//p-log.ykimg.com/tslog",
            DURATIONLOG: "//stat.youku.com/player/addPlayerDurationReport",
            EVENTLOG: "//p-log.ykimg.com/event"
        },
        TUDOU: {
            TSLOG: "//gm.mmstat.com/yt/newtudou.web.ts",
            DURATIONLOG: "//gm.mmstat.com/yt/newtudou.web.vv",
            EVENTLOG: "//gm.mmstat.com/yt/newtudou.web.event"
        }
    }
      , i = {
        guoyu: {
            num: 1,
            name: "国语"
        },
        yue: {
            num: 2,
            name: "粤语"
        },
        chuan: {
            num: 3,
            name: "川话"
        },
        tai: {
            num: 4,
            name: "台湾"
        },
        min: {
            num: 5,
            name: "闽南"
        },
        en: {
            num: 6,
            name: "英语"
        },
        ja: {
            num: 7,
            name: "日语"
        },
        kr: {
            num: 8,
            name: "韩语"
        },
        in: {
            num: 9,
            name: "印度"
        },
        fr: {
            num: 11,
            name: "法语"
        },
        de: {
            num: 12,
            name: "德语"
        },
        it: {
            num: 13,
            name: "意语"
        },
        es: {
            num: 14,
            name: "西语"
        },
        th: {
            num: 16,
            name: "泰语"
        },
        baby: {
            num: 1,
            name: "萌童"
        },
        man: {
            num: 1,
            name: "暖男"
        }
    }
      , n = "//playlog.youku.com/playlog/open/push_web.json";
    exports.REPORT_API = e,
    exports.LANGMAP = i,
    exports.PLAYLOGAPI = n
}
, function(t, exports) {
    "use strict";
    function e(t) {
        function e(t, e) {
            var i = t << e | t >>> 32 - e;
            return i
        }
        function i(t) {
            var e, i, n = "";
            for (e = 7; e >= 0; e--)
                i = t >>> 4 * e & 15,
                n += i.toString(16);
            return n
        }
        function n(t) {
            t = t.replace(/\r\n/g, "\n");
            for (var e = "", i = 0; i < t.length; i++) {
                var n = t.charCodeAt(i);
                n < 128 ? e += String.fromCharCode(n) : n > 127 && n < 2048 ? (e += String.fromCharCode(n >> 6 | 192),
                e += String.fromCharCode(63 & n | 128)) : (e += String.fromCharCode(n >> 12 | 224),
                e += String.fromCharCode(n >> 6 & 63 | 128),
                e += String.fromCharCode(63 & n | 128))
            }
            return e
        }
        var s, a, o, r, l, u, d, h, c, f = new Array(80), p = 1732584193, m = 4023233417, v = 2562383102, _ = 271733878, y = 3285377520;
        t = n(t);
        var g = t.length
          , b = new Array;
        for (a = 0; a < g - 3; a += 4)
            o = t.charCodeAt(a) << 24 | t.charCodeAt(a + 1) << 16 | t.charCodeAt(a + 2) << 8 | t.charCodeAt(a + 3),
            b.push(o);
        switch (g % 4) {
        case 0:
            a = 2147483648;
            break;
        case 1:
            a = t.charCodeAt(g - 1) << 24 | 8388608;
            break;
        case 2:
            a = t.charCodeAt(g - 2) << 24 | t.charCodeAt(g - 1) << 16 | 32768;
            break;
        case 3:
            a = t.charCodeAt(g - 3) << 24 | t.charCodeAt(g - 2) << 16 | t.charCodeAt(g - 1) << 8 | 128
        }
        for (b.push(a); b.length % 16 != 14; )
            b.push(0);
        for (b.push(g >>> 29),
        b.push(g << 3 & 4294967295),
        s = 0; s < b.length; s += 16) {
            for (a = 0; a < 16; a++)
                f[a] = b[s + a];
            for (a = 16; a <= 79; a++)
                f[a] = e(f[a - 3] ^ f[a - 8] ^ f[a - 14] ^ f[a - 16], 1);
            for (r = p,
            l = m,
            u = v,
            d = _,
            h = y,
            a = 0; a <= 19; a++)
                c = e(r, 5) + (l & u | ~l & d) + h + f[a] + 1518500249 & 4294967295,
                h = d,
                d = u,
                u = e(l, 30),
                l = r,
                r = c;
            for (a = 20; a <= 39; a++)
                c = e(r, 5) + (l ^ u ^ d) + h + f[a] + 1859775393 & 4294967295,
                h = d,
                d = u,
                u = e(l, 30),
                l = r,
                r = c;
            for (a = 40; a <= 59; a++)
                c = e(r, 5) + (l & u | l & d | u & d) + h + f[a] + 2400959708 & 4294967295,
                h = d,
                d = u,
                u = e(l, 30),
                l = r,
                r = c;
            for (a = 60; a <= 79; a++)
                c = e(r, 5) + (l ^ u ^ d) + h + f[a] + 3395469782 & 4294967295,
                h = d,
                d = u,
                u = e(l, 30),
                l = r,
                r = c;
            p = p + r & 4294967295,
            m = m + l & 4294967295,
            v = v + u & 4294967295,
            _ = _ + d & 4294967295,
            y = y + h & 4294967295
        }
        var c = i(p) + i(m) + i(v) + i(_) + i(y);
        return c.toLowerCase()
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var i = {
        hcbt: function(t) {
            var e = "";
            return e = this.genH(t)
        },
        genH: function(t) {
            for (var i = !1, n = void 0, s = ""; !i; ) {
                s = this.randomString(20);
                var a = t + s;
                n = e(a),
                "00" == n.substring(0, 2) && (i = !0)
            }
            return s
        },
        randomString: function(t) {
            for (var e = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz", i = "", n = 0; n < t; n++) {
                var s = Math.floor(Math.random() * e.length);
                i += e.substring(s, s + 1)
            }
            return i
        }
    };
    exports.default = i
}
, function(t, exports, e) {
    "use strict";
    function i() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        /youku|youku_hd/i.test(navigator.userAgent) ? "object" === a(window.WindVane) ? o.browser.isIPad ? window.WindVane.call("YKWVJSBridge", "login", t, function() {
            s()
        }, function() {
            n(t)
        }) : window.WindVane.call("WVLoginJSBridge", "showLoginView", t, function() {
            s()
        }, function(e) {
            n(t)
        }) : n(t) : window.location.href = t.url
    }
    function n() {
        var t = this
          , e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (o.browser.isIOS) {
            var i = o.browser.isIPad ? "youkuhd" : "youku"
              , n = window.getCookie("P_sck")
              , a = setInterval(function() {
                var e = t.getCookie("P_sck");
                !n && e && clearInterval(a)
            }, 100);
            window.location.href = i + "://jsblogin?weburl=" + e.url
        } else
            window.showLoginViewCallback = function(t) {
                s(),
                window.showLoginViewCallback = void 0
            }
            ,
            window.YoukuJSBridge.showLoginView(JSON.stringify({}))
    }
    function s() {
        location.reload()
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    ;
    exports.default = i;
    var o = e(2)
}
, function(t, exports, e) {
    "use strict";
    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    function n(t) {
        for (var e = 0, i = l.length; e < i; e++) {
            var n = l[e]
              , s = document.createElement("div");
            s.className = n.class,
            s.innerHTML = n.inner,
            t.appendChild(s)
        }
    }
    var s = e(3)
      , a = i(s)
      , o = e(37)
      , r = i(o)
      , l = [{
        class: "x-video-player",
        inner: ""
    }, {
        class: "x-video-title-box",
        inner: '<div class="x-video-title"></div>'
    }, {
        class: "x-video-poster",
        inner: ""
    }, {
        class: "x-video-time-long",
        inner: ""
    }, {
        class: "x-youkulogo-box",
        inner: '<div class="x-youkulogo"></div>'
    }, {
        class: "x-video-button",
        inner: '<div class="x-video-play-ico i-pause"></div>'
    }, {
        class: "x-video-rnum x-video-num",
        inner: null
    }, {
        class: "x-video-lnum x-video-num",
        inner: null
    }, {
        class: "x-video-loading",
        inner: ""
    }, {
        class: "x-advert",
        inner: null
    }, {
        class: "x-ad-pause",
        inner: null
    }, {
        class: "x-prompt",
        inner: null
    }, {
        class: "x-dashboard",
        inner: null
    }, {
        class: "x-hdshowlist",
        inner: ""
    }, {
        class: "x-showtips",
        inner: ""
    }, {
        class: "x-noticeshow",
        inner: ""
    }, {
        class: "x-recommend",
        inner: ""
    }, {
        class: "x-gradient",
        inner: ""
    }, {
        class: "x-trigger",
        inner: ""
    }, {
        class: "x-top-control",
        inner: '<div class="x-full-video">看完整版</div>'
    }, {
        class: "i-pause x-video-trigger-ico",
        inner: ""
    }];
    window.YKPlayer = {},
    YKPlayer.stopIOSDoubleToucheEnd = function() {
        var t = navigator.userAgent.toLowerCase()
          , e = null;
        try {
            (t.indexOf("iphone") >= 0 || t.indexOf("ipad") >= 0) && document.body.addEventListener("touchend", function(t) {
                var i = (new Date).getTime();
                e = e || i + 1;
                var n = i - e;
                return n < 500 && n > 0 ? (t.preventDefault(),
                !1) : void (e = i)
            }, !1)
        } catch (t) {}
    }
    ,
    YKPlayer.stopIOSDoubleToucheEnd(),
    YKPlayer.Player = function(t, e, i) {
        var s = a.default.get("#" + t)
          , o = document.createElement("div");
        o.className = o.className + "ykplayer";
        var l = window && window.location.host
          , u = /tudou\.com(:\d+)?$/;
        u.test(l) && (o.className += " tudouSkin",
        e._isTudou = !0),
        s.appendChild(o),
        e.vid && (e.videoId = e.vid,
        delete e.vid),
        e.ccode || (e.ccode = "0501"),
        e.password && (e.param = {},
        e.param.password = e.password);
        var d = a.default.getURlKey("hd", location.href);
        d && (e.control = {},
        e.control.hd = d),
        n(o);
        var h = o.getElementsByClassName("x-video-player")[0]
          , c = new r.default(h,e,o,i);
        return c
    }
}
, function(t, exports) {
    "use strict";
    function e(t, i) {
        try {
            return [decodeURIComponent(t.join(""))]
        } catch (t) {}
        if (1 === t.length)
            return t;
        i = i || 1;
        var n = t.slice(0, i)
          , s = t.slice(i);
        return Array.prototype.concat.call([], e(n), e(s))
    }
    function i(t) {
        try {
            return decodeURIComponent(t)
        } catch (s) {
            for (var i = t.match(a) || [], n = 1; n < i.length; n++)
                t = e(i, n).join(""),
                i = t.match(a) || [];
            return t
        }
    }
    function n(t) {
        for (var e = {
            "%FE%FF": "��",
            "%FF%FE": "��"
        }, n = o.exec(t); n; ) {
            try {
                e[n[0]] = decodeURIComponent(n[0])
            } catch (t) {
                var s = i(n[0]);
                s !== n[0] && (e[n[0]] = s)
            }
            n = o.exec(t)
        }
        e["%C2"] = "�";
        for (var a = Object.keys(e), r = 0; r < a.length; r++) {
            var l = a[r];
            t = t.replace(new RegExp(l,"g"), e[l])
        }
        return t
    }
    var s = "%[a-f0-9]{2}"
      , a = new RegExp("(" + s + ")|([^%]+?)","gi")
      , o = new RegExp("(" + s + ")+","gi");
    t.exports = function(t) {
        if ("string" != typeof t)
            throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof t + "`");
        try {
            return t = t.replace(/\+/g, " "),
            decodeURIComponent(t)
        } catch (e) {
            return n(t)
        }
    }
}
, function(t, exports) {
    /*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
    "use strict";
    function e(t) {
        if (null === t || void 0 === t)
            throw new TypeError("Object.assign cannot be called with null or undefined");
        return Object(t)
    }
    function i() {
        try {
            if (!Object.assign)
                return !1;
            var t = new String("abc");
            if (t[5] = "de",
            "5" === Object.getOwnPropertyNames(t)[0])
                return !1;
            for (var e = {}, i = 0; i < 10; i++)
                e["_" + String.fromCharCode(i)] = i;
            var n = Object.getOwnPropertyNames(e).map(function(t) {
                return e[t]
            });
            if ("0123456789" !== n.join(""))
                return !1;
            var s = {};
            return "abcdefghijklmnopqrst".split("").forEach(function(t) {
                s[t] = t
            }),
            "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, s)).join("")
        } catch (t) {
            return !1
        }
    }
    var n = Object.getOwnPropertySymbols
      , s = Object.prototype.hasOwnProperty
      , a = Object.prototype.propertyIsEnumerable;
    t.exports = i() ? Object.assign : function(t, i) {
        for (var o, r, l = e(t), u = 1; u < arguments.length; u++) {
            o = Object(arguments[u]);
            for (var d in o)
                s.call(o, d) && (l[d] = o[d]);
            if (n) {
                r = n(o);
                for (var h = 0; h < r.length; h++)
                    a.call(o, r[h]) && (l[r[h]] = o[r[h]])
            }
        }
        return l
    }
}
, function(t, exports) {
    function e() {
        throw new Error("setTimeout has not been defined")
    }
    function i() {
        throw new Error("clearTimeout has not been defined")
    }
    function n(t) {
        if (u === setTimeout)
            return setTimeout(t, 0);
        if ((u === e || !u) && setTimeout)
            return u = setTimeout,
            setTimeout(t, 0);
        try {
            return u(t, 0)
        } catch (e) {
            try {
                return u.call(null, t, 0)
            } catch (e) {
                return u.call(this, t, 0)
            }
        }
    }
    function s(t) {
        if (d === clearTimeout)
            return clearTimeout(t);
        if ((d === i || !d) && clearTimeout)
            return d = clearTimeout,
            clearTimeout(t);
        try {
            return d(t)
        } catch (e) {
            try {
                return d.call(null, t)
            } catch (e) {
                return d.call(this, t)
            }
        }
    }
    function a() {
        p && c && (p = !1,
        c.length ? f = c.concat(f) : m = -1,
        f.length && o())
    }
    function o() {
        if (!p) {
            var t = n(a);
            p = !0;
            for (var e = f.length; e; ) {
                for (c = f,
                f = []; ++m < e; )
                    c && c[m].run();
                m = -1,
                e = f.length
            }
            c = null,
            p = !1,
            s(t)
        }
    }
    function r(t, e) {
        this.fun = t,
        this.array = e
    }
    function l() {}
    var u, d, h = t.exports = {};
    !function() {
        try {
            u = "function" == typeof setTimeout ? setTimeout : e
        } catch (t) {
            u = e
        }
        try {
            d = "function" == typeof clearTimeout ? clearTimeout : i
        } catch (t) {
            d = i
        }
    }();
    var c, f = [], p = !1, m = -1;
    h.nextTick = function(t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var i = 1; i < arguments.length; i++)
                e[i - 1] = arguments[i];
        f.push(new r(t,e)),
        1 !== f.length || p || n(o)
    }
    ,
    r.prototype.run = function() {
        this.fun.apply(null, this.array)
    }
    ,
    h.title = "browser",
    h.browser = !0,
    h.env = {},
    h.argv = [],
    h.version = "",
    h.versions = {},
    h.on = l,
    h.addListener = l,
    h.once = l,
    h.off = l,
    h.removeListener = l,
    h.removeAllListeners = l,
    h.emit = l,
    h.prependListener = l,
    h.prependOnceListener = l,
    h.listeners = function(t) {
        return []
    }
    ,
    h.binding = function(t) {
        throw new Error("process.binding is not supported")
    }
    ,
    h.cwd = function() {
        return "/"
    }
    ,
    h.chdir = function(t) {
        throw new Error("process.chdir is not supported")
    }
    ,
    h.umask = function() {
        return 0
    }
}
, function(t, exports, e) {
    (function(e) {
        !function(i) {
            function n() {}
            function s(t, e) {
                return function() {
                    t.apply(e, arguments)
                }
            }
            function a(t) {
                if (!(this instanceof a))
                    throw new TypeError("Promises must be constructed via new");
                if ("function" != typeof t)
                    throw new TypeError("not a function");
                this._state = 0,
                this._handled = !1,
                this._value = void 0,
                this._deferreds = [],
                h(t, this)
            }
            function o(t, e) {
                for (; 3 === t._state; )
                    t = t._value;
                return 0 === t._state ? void t._deferreds.push(e) : (t._handled = !0,
                void a._immediateFn(function() {
                    var i = 1 === t._state ? e.onFulfilled : e.onRejected;
                    if (null === i)
                        return void (1 === t._state ? r : l)(e.promise, t._value);
                    var n;
                    try {
                        n = i(t._value)
                    } catch (t) {
                        return void l(e.promise, t)
                    }
                    r(e.promise, n)
                }))
            }
            function r(t, e) {
                try {
                    if (e === t)
                        throw new TypeError("A promise cannot be resolved with itself.");
                    if (e && ("object" == typeof e || "function" == typeof e)) {
                        var i = e.then;
                        if (e instanceof a)
                            return t._state = 3,
                            t._value = e,
                            void u(t);
                        if ("function" == typeof i)
                            return void h(s(i, e), t)
                    }
                    t._state = 1,
                    t._value = e,
                    u(t)
                } catch (e) {
                    l(t, e)
                }
            }
            function l(t, e) {
                t._state = 2,
                t._value = e,
                u(t)
            }
            function u(t) {
                2 === t._state && 0 === t._deferreds.length && a._immediateFn(function() {
                    t._handled || a._unhandledRejectionFn(t._value)
                });
                for (var e = 0, i = t._deferreds.length; e < i; e++)
                    o(t, t._deferreds[e]);
                t._deferreds = null
            }
            function d(t, e, i) {
                this.onFulfilled = "function" == typeof t ? t : null,
                this.onRejected = "function" == typeof e ? e : null,
                this.promise = i
            }
            function h(t, e) {
                var i = !1;
                try {
                    t(function(t) {
                        i || (i = !0,
                        r(e, t))
                    }, function(t) {
                        i || (i = !0,
                        l(e, t))
                    })
                } catch (t) {
                    if (i)
                        return;
                    i = !0,
                    l(e, t)
                }
            }
            var c = setTimeout;
            a.prototype.catch = function(t) {
                return this.then(null, t)
            }
            ,
            a.prototype.then = function(t, e) {
                var i = new this.constructor(n);
                return o(this, new d(t,e,i)),
                i
            }
            ,
            a.all = function(t) {
                return new a(function(e, i) {
                    function n(t, o) {
                        try {
                            if (o && ("object" == typeof o || "function" == typeof o)) {
                                var r = o.then;
                                if ("function" == typeof r)
                                    return void r.call(o, function(e) {
                                        n(t, e)
                                    }, i)
                            }
                            s[t] = o,
                            0 === --a && e(s)
                        } catch (t) {
                            i(t)
                        }
                    }
                    if (!t || "undefined" == typeof t.length)
                        throw new TypeError("Promise.all accepts an array");
                    var s = Array.prototype.slice.call(t);
                    if (0 === s.length)
                        return e([]);
                    for (var a = s.length, o = 0; o < s.length; o++)
                        n(o, s[o])
                }
                )
            }
            ,
            a.resolve = function(t) {
                return t && "object" == typeof t && t.constructor === a ? t : new a(function(e) {
                    e(t)
                }
                )
            }
            ,
            a.reject = function(t) {
                return new a(function(e, i) {
                    i(t)
                }
                )
            }
            ,
            a.race = function(t) {
                return new a(function(e, i) {
                    for (var n = 0, s = t.length; n < s; n++)
                        t[n].then(e, i)
                }
                )
            }
            ,
            a._immediateFn = "function" == typeof e && function(t) {
                e(t)
            }
            || function(t) {
                c(t, 0)
            }
            ,
            a._unhandledRejectionFn = function(t) {
                "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", t)
            }
            ,
            a._setImmediateFn = function(t) {
                a._immediateFn = t
            }
            ,
            a._setUnhandledRejectionFn = function(t) {
                a._unhandledRejectionFn = t
            }
            ,
            "undefined" != typeof t && t.exports ? t.exports = a : i.Promise || (i.Promise = a)
        }(this)
    }
    ).call(exports, e(38).setImmediate)
}
, function(t, exports, e) {
    "use strict";
    function i(t) {
        switch (t.arrayFormat) {
        case "index":
            return function(e, i, n) {
                return null === i ? [s(e, t), "[", n, "]"].join("") : [s(e, t), "[", s(n, t), "]=", s(i, t)].join("")
            }
            ;
        case "bracket":
            return function(e, i) {
                return null === i ? s(e, t) : [s(e, t), "[]=", s(i, t)].join("")
            }
            ;
        default:
            return function(e, i) {
                return null === i ? s(e, t) : [s(e, t), "=", s(i, t)].join("")
            }
        }
    }
    function n(t) {
        var e;
        switch (t.arrayFormat) {
        case "index":
            return function(t, i, n) {
                return e = /\[(\d*)\]$/.exec(t),
                t = t.replace(/\[\d*\]$/, ""),
                e ? (void 0 === n[t] && (n[t] = {}),
                void (n[t][e[1]] = i)) : void (n[t] = i)
            }
            ;
        case "bracket":
            return function(t, i, n) {
                return e = /(\[\])$/.exec(t),
                t = t.replace(/\[\]$/, ""),
                e ? void 0 === n[t] ? void (n[t] = [i]) : void (n[t] = [].concat(n[t], i)) : void (n[t] = i)
            }
            ;
        default:
            return function(t, e, i) {
                return void 0 === i[t] ? void (i[t] = e) : void (i[t] = [].concat(i[t], e))
            }
        }
    }
    function s(t, e) {
        return e.encode ? e.strict ? l(t) : encodeURIComponent(t) : t
    }
    function a(t) {
        return Array.isArray(t) ? t.sort() : "object" == typeof t ? a(Object.keys(t)).sort(function(t, e) {
            return Number(t) - Number(e)
        }).map(function(e) {
            return t[e]
        }) : t
    }
    function o(t) {
        var e = t.indexOf("?");
        return e === -1 ? "" : t.slice(e + 1)
    }
    function r(t, e) {
        e = u({
            arrayFormat: "none"
        }, e);
        var i = n(e)
          , s = Object.create(null);
        return "string" != typeof t ? s : (t = t.trim().replace(/^[?#&]/, "")) ? (t.split("&").forEach(function(t) {
            var e = t.replace(/\+/g, " ").split("=")
              , n = e.shift()
              , a = e.length > 0 ? e.join("=") : void 0;
            a = void 0 === a ? null : d(a),
            i(d(n), a, s)
        }),
        Object.keys(s).sort().reduce(function(t, e) {
            var i = s[e];
            return Boolean(i) && "object" == typeof i && !Array.isArray(i) ? t[e] = a(i) : t[e] = i,
            t
        }, Object.create(null))) : s
    }
    var l = e(84)
      , u = e(79)
      , d = e(78);
    exports.extract = o,
    exports.parse = r,
    exports.stringify = function(t, e) {
        var n = {
            encode: !0,
            strict: !0,
            arrayFormat: "none"
        };
        e = u(n, e),
        e.sort === !1 && (e.sort = function() {}
        );
        var a = i(e);
        return t ? Object.keys(t).sort(e.sort).map(function(i) {
            var n = t[i];
            if (void 0 === n)
                return "";
            if (null === n)
                return s(i, e);
            if (Array.isArray(n)) {
                var o = [];
                return n.slice().forEach(function(t) {
                    void 0 !== t && o.push(a(i, t, o.length))
                }),
                o.join("&")
            }
            return s(i, e) + "=" + s(n, e)
        }).filter(function(t) {
            return t.length > 0
        }).join("&") : ""
    }
    ,
    exports.parseUrl = function(t, e) {
        return {
            url: t.split("?")[0] || "",
            query: r(o(t), e)
        }
    }
}
, function(t, exports, e) {
    (function(t, e) {
        !function(t, i) {
            "use strict";
            function n(t) {
                "function" != typeof t && (t = new Function("" + t));
                for (var e = new Array(arguments.length - 1), i = 0; i < e.length; i++)
                    e[i] = arguments[i + 1];
                var n = {
                    callback: t,
                    args: e
                };
                return m[p] = n,
                f(p),
                p++
            }
            function s(t) {
                delete m[t]
            }
            function a(t) {
                var e = t.callback
                  , n = t.args;
                switch (n.length) {
                case 0:
                    e();
                    break;
                case 1:
                    e(n[0]);
                    break;
                case 2:
                    e(n[0], n[1]);
                    break;
                case 3:
                    e(n[0], n[1], n[2]);
                    break;
                default:
                    e.apply(i, n)
                }
            }
            function o(t) {
                if (v)
                    setTimeout(o, 0, t);
                else {
                    var e = m[t];
                    if (e) {
                        v = !0;
                        try {
                            a(e)
                        } finally {
                            s(t),
                            v = !1
                        }
                    }
                }
            }
            function r() {
                f = function(t) {
                    e.nextTick(function() {
                        o(t)
                    })
                }
            }
            function l() {
                if (t.postMessage && !t.importScripts) {
                    var e = !0
                      , i = t.onmessage;
                    return t.onmessage = function() {
                        e = !1
                    }
                    ,
                    t.postMessage("", "*"),
                    t.onmessage = i,
                    e
                }
            }
            function u() {
                var e = "setImmediate$" + Math.random() + "$"
                  , i = function(i) {
                    i.source === t && "string" == typeof i.data && 0 === i.data.indexOf(e) && o(+i.data.slice(e.length))
                };
                t.addEventListener ? t.addEventListener("message", i, !1) : t.attachEvent("onmessage", i),
                f = function(i) {
                    t.postMessage(e + i, "*")
                }
            }
            function d() {
                var t = new MessageChannel;
                t.port1.onmessage = function(t) {
                    var e = t.data;
                    o(e)
                }
                ,
                f = function(e) {
                    t.port2.postMessage(e)
                }
            }
            function h() {
                var t = _.documentElement;
                f = function(e) {
                    var i = _.createElement("script");
                    i.onreadystatechange = function() {
                        o(e),
                        i.onreadystatechange = null,
                        t.removeChild(i),
                        i = null
                    }
                    ,
                    t.appendChild(i)
                }
            }
            function c() {
                f = function(t) {
                    setTimeout(o, 0, t)
                }
            }
            if (!t.setImmediate) {
                var f, p = 1, m = {}, v = !1, _ = t.document, y = Object.getPrototypeOf && Object.getPrototypeOf(t);
                y = y && y.setTimeout ? y : t,
                "[object process]" === {}.toString.call(t.process) ? r() : l() ? u() : t.MessageChannel ? d() : _ && "onreadystatechange"in _.createElement("script") ? h() : c(),
                y.setImmediate = n,
                y.clearImmediate = s
            }
        }("undefined" == typeof self ? "undefined" == typeof t ? this : t : self)
    }
    ).call(exports, function() {
        return this
    }(), e(80))
}
, function(t, exports) {
    "use strict";
    t.exports = function(t) {
        return encodeURIComponent(t).replace(/[!'()*]/g, function(t) {
            return "%" + t.charCodeAt(0).toString(16).toUpperCase()
        })
    }
}
, function(t, exports) {
    !function(t) {
        "use strict";
        function e(t) {
            if ("string" != typeof t && (t = String(t)),
            /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))
                throw new TypeError("Invalid character in header field name");
            return t.toLowerCase()
        }
        function i(t) {
            return "string" != typeof t && (t = String(t)),
            t
        }
        function n(t) {
            var e = {
                next: function() {
                    var e = t.shift();
                    return {
                        done: void 0 === e,
                        value: e
                    }
                }
            };
            return _.iterable && (e[Symbol.iterator] = function() {
                return e
            }
            ),
            e
        }
        function s(t) {
            this.map = {},
            t instanceof s ? t.forEach(function(t, e) {
                this.append(e, t)
            }, this) : Array.isArray(t) ? t.forEach(function(t) {
                this.append(t[0], t[1])
            }, this) : t && Object.getOwnPropertyNames(t).forEach(function(e) {
                this.append(e, t[e])
            }, this)
        }
        function a(t) {
            return t.bodyUsed ? Promise.reject(new TypeError("Already read")) : void (t.bodyUsed = !0)
        }
        function o(t) {
            return new Promise(function(e, i) {
                t.onload = function() {
                    e(t.result)
                }
                ,
                t.onerror = function() {
                    i(t.error)
                }
            }
            )
        }
        function r(t) {
            var e = new FileReader
              , i = o(e);
            return e.readAsArrayBuffer(t),
            i
        }
        function l(t) {
            var e = new FileReader
              , i = o(e);
            return e.readAsText(t),
            i
        }
        function u(t) {
            for (var e = new Uint8Array(t), i = new Array(e.length), n = 0; n < e.length; n++)
                i[n] = String.fromCharCode(e[n]);
            return i.join("")
        }
        function d(t) {
            if (t.slice)
                return t.slice(0);
            var e = new Uint8Array(t.byteLength);
            return e.set(new Uint8Array(t)),
            e.buffer
        }
        function h() {
            return this.bodyUsed = !1,
            this._initBody = function(t) {
                if (this._bodyInit = t,
                t)
                    if ("string" == typeof t)
                        this._bodyText = t;
                    else if (_.blob && Blob.prototype.isPrototypeOf(t))
                        this._bodyBlob = t;
                    else if (_.formData && FormData.prototype.isPrototypeOf(t))
                        this._bodyFormData = t;
                    else if (_.searchParams && URLSearchParams.prototype.isPrototypeOf(t))
                        this._bodyText = t.toString();
                    else if (_.arrayBuffer && _.blob && g(t))
                        this._bodyArrayBuffer = d(t.buffer),
                        this._bodyInit = new Blob([this._bodyArrayBuffer]);
                    else {
                        if (!_.arrayBuffer || !ArrayBuffer.prototype.isPrototypeOf(t) && !b(t))
                            throw new Error("unsupported BodyInit type");
                        this._bodyArrayBuffer = d(t)
                    }
                else
                    this._bodyText = "";
                this.headers.get("content-type") || ("string" == typeof t ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : _.searchParams && URLSearchParams.prototype.isPrototypeOf(t) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
            }
            ,
            _.blob && (this.blob = function() {
                var t = a(this);
                if (t)
                    return t;
                if (this._bodyBlob)
                    return Promise.resolve(this._bodyBlob);
                if (this._bodyArrayBuffer)
                    return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                if (this._bodyFormData)
                    throw new Error("could not read FormData body as blob");
                return Promise.resolve(new Blob([this._bodyText]))
            }
            ,
            this.arrayBuffer = function() {
                return this._bodyArrayBuffer ? a(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(r)
            }
            ),
            this.text = function() {
                var t = a(this);
                if (t)
                    return t;
                if (this._bodyBlob)
                    return l(this._bodyBlob);
                if (this._bodyArrayBuffer)
                    return Promise.resolve(u(this._bodyArrayBuffer));
                if (this._bodyFormData)
                    throw new Error("could not read FormData body as text");
                return Promise.resolve(this._bodyText)
            }
            ,
            _.formData && (this.formData = function() {
                return this.text().then(p)
            }
            ),
            this.json = function() {
                return this.text().then(JSON.parse)
            }
            ,
            this
        }
        function c(t) {
            var e = t.toUpperCase();
            return w.indexOf(e) > -1 ? e : t
        }
        function f(t, e) {
            e = e || {};
            var i = e.body;
            if (t instanceof f) {
                if (t.bodyUsed)
                    throw new TypeError("Already read");
                this.url = t.url,
                this.credentials = t.credentials,
                e.headers || (this.headers = new s(t.headers)),
                this.method = t.method,
                this.mode = t.mode,
                i || null == t._bodyInit || (i = t._bodyInit,
                t.bodyUsed = !0)
            } else
                this.url = String(t);
            if (this.credentials = e.credentials || this.credentials || "omit",
            !e.headers && this.headers || (this.headers = new s(e.headers)),
            this.method = c(e.method || this.method || "GET"),
            this.mode = e.mode || this.mode || null,
            this.referrer = null,
            ("GET" === this.method || "HEAD" === this.method) && i)
                throw new TypeError("Body not allowed for GET or HEAD requests");
            this._initBody(i)
        }
        function p(t) {
            var e = new FormData;
            return t.trim().split("&").forEach(function(t) {
                if (t) {
                    var i = t.split("=")
                      , n = i.shift().replace(/\+/g, " ")
                      , s = i.join("=").replace(/\+/g, " ");
                    e.append(decodeURIComponent(n), decodeURIComponent(s))
                }
            }),
            e
        }
        function m(t) {
            var e = new s
              , i = t.replace(/\r?\n[\t ]+/g, " ");
            return i.split(/\r?\n/).forEach(function(t) {
                var i = t.split(":")
                  , n = i.shift().trim();
                if (n) {
                    var s = i.join(":").trim();
                    e.append(n, s)
                }
            }),
            e
        }
        function v(t, e) {
            e || (e = {}),
            this.type = "default",
            this.status = void 0 === e.status ? 200 : e.status,
            this.ok = this.status >= 200 && this.status < 300,
            this.statusText = "statusText"in e ? e.statusText : "OK",
            this.headers = new s(e.headers),
            this.url = e.url || "",
            this._initBody(t)
        }
        if (!t.fetch) {
            var _ = {
                searchParams: "URLSearchParams"in t,
                iterable: "Symbol"in t && "iterator"in Symbol,
                blob: "FileReader"in t && "Blob"in t && function() {
                    try {
                        return new Blob,
                        !0
                    } catch (t) {
                        return !1
                    }
                }(),
                formData: "FormData"in t,
                arrayBuffer: "ArrayBuffer"in t
            };
            if (_.arrayBuffer)
                var y = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"]
                  , g = function(t) {
                    return t && DataView.prototype.isPrototypeOf(t)
                }
                  , b = ArrayBuffer.isView || function(t) {
                    return t && y.indexOf(Object.prototype.toString.call(t)) > -1
                }
                ;
            s.prototype.append = function(t, n) {
                t = e(t),
                n = i(n);
                var s = this.map[t];
                this.map[t] = s ? s + "," + n : n
            }
            ,
            s.prototype.delete = function(t) {
                delete this.map[e(t)]
            }
            ,
            s.prototype.get = function(t) {
                return t = e(t),
                this.has(t) ? this.map[t] : null
            }
            ,
            s.prototype.has = function(t) {
                return this.map.hasOwnProperty(e(t))
            }
            ,
            s.prototype.set = function(t, n) {
                this.map[e(t)] = i(n)
            }
            ,
            s.prototype.forEach = function(t, e) {
                for (var i in this.map)
                    this.map.hasOwnProperty(i) && t.call(e, this.map[i], i, this)
            }
            ,
            s.prototype.keys = function() {
                var t = [];
                return this.forEach(function(e, i) {
                    t.push(i)
                }),
                n(t)
            }
            ,
            s.prototype.values = function() {
                var t = [];
                return this.forEach(function(e) {
                    t.push(e)
                }),
                n(t)
            }
            ,
            s.prototype.entries = function() {
                var t = [];
                return this.forEach(function(e, i) {
                    t.push([i, e])
                }),
                n(t)
            }
            ,
            _.iterable && (s.prototype[Symbol.iterator] = s.prototype.entries);
            var w = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
            f.prototype.clone = function() {
                return new f(this,{
                    body: this._bodyInit
                })
            }
            ,
            h.call(f.prototype),
            h.call(v.prototype),
            v.prototype.clone = function() {
                return new v(this._bodyInit,{
                    status: this.status,
                    statusText: this.statusText,
                    headers: new s(this.headers),
                    url: this.url
                })
            }
            ,
            v.error = function() {
                var t = new v(null,{
                    status: 0,
                    statusText: ""
                });
                return t.type = "error",
                t
            }
            ;
            var A = [301, 302, 303, 307, 308];
            v.redirect = function(t, e) {
                if (A.indexOf(e) === -1)
                    throw new RangeError("Invalid status code");
                return new v(null,{
                    status: e,
                    headers: {
                        location: t
                    }
                })
            }
            ,
            t.Headers = s,
            t.Request = f,
            t.Response = v,
            t.fetch = function(t, e) {
                return new Promise(function(i, n) {
                    var s = new f(t,e)
                      , a = new XMLHttpRequest;
                    a.onload = function() {
                        var t = {
                            status: a.status,
                            statusText: a.statusText,
                            headers: m(a.getAllResponseHeaders() || "")
                        };
                        t.url = "responseURL"in a ? a.responseURL : t.headers.get("X-Request-URL");
                        var e = "response"in a ? a.response : a.responseText;
                        i(new v(e,t))
                    }
                    ,
                    a.onerror = function() {
                        n(new TypeError("Network request failed"))
                    }
                    ,
                    a.ontimeout = function() {
                        n(new TypeError("Network request failed"))
                    }
                    ,
                    a.open(s.method, s.url, !0),
                    "include" === s.credentials ? a.withCredentials = !0 : "omit" === s.credentials && (a.withCredentials = !1),
                    "responseType"in a && _.blob && (a.responseType = "blob"),
                    s.headers.forEach(function(t, e) {
                        a.setRequestHeader(e, t)
                    }),
                    a.send("undefined" == typeof s._bodyInit ? null : s._bodyInit)
                }
                )
            }
            ,
            t.fetch.polyfill = !0
        }
    }("undefined" != typeof self ? self : this)
}
]);
//# sourceMappingURL=h5phoneplayer.min.js.map
