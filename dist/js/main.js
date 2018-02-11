/* jQuery Form Styler v1.7.7 | (c) Dimox | https://github.com/Dimox/jQueryFormStyler */ ! function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(e) {
    "use strict";
    function t(t, s) {
        this.element = t, this.options = e.extend({}, l, s);
        var i = this.options.locale;
        void 0 !== this.options.locales[i] && e.extend(this.options, this.options.locales[i]), this.init()
    }
    function s(t) {
        if (!e(t.target).parents().hasClass("jq-selectbox") && "OPTION" != t.target.nodeName && e("div.jq-selectbox.opened").length) {
            var s = e("div.jq-selectbox.opened"),
                l = e("div.jq-selectbox__search input", s),
                o = e("div.jq-selectbox__dropdown", s),
                a = s.find("select").data("_" + i).options;
            a.onSelectClosed.call(s), l.length && l.val("").keyup(), o.hide().find("li.sel").addClass("selected"), s.removeClass("focused opened dropup dropdown")
        }
    }
    var i = "styler",
        l = {
            idSuffix: "-styler",
            filePlaceholder: "Файл не выбран",
            fileBrowse: "Обзор...",
            fileNumber: "Выбрано файлов: %s",
            selectPlaceholder: "Выберите...",
            selectSearch: !1,
            selectSearchLimit: 10,
            selectSearchNotFound: "Совпадений не найдено",
            selectSearchPlaceholder: "Поиск...",
            selectVisibleOptions: 0,
            singleSelectzIndex: "100",
            selectSmartPositioning: !0,
            locale: "ru",
            locales: {
                en: {
                    filePlaceholder: "No file selected",
                    fileBrowse: "Browse...",
                    fileNumber: "Selected files: %s",
                    selectPlaceholder: "Select...",
                    selectSearchNotFound: "No matches found",
                    selectSearchPlaceholder: "Search..."
                }
            },
            onSelectOpened: function() {},
            onSelectClosed: function() {},
            onFormStyled: function() {}
        };
    t.prototype = {
        init: function() {
            function t() {
                void 0 !== i.attr("id") && "" !== i.attr("id") && (this.id = i.attr("id") + l.idSuffix), this.title = i.attr("title"), this.classes = i.attr("class"), this.data = i.data()
            }
            var i = e(this.element),
                l = this.options,
                o = !(!navigator.userAgent.match(/(iPad|iPhone|iPod)/i) || navigator.userAgent.match(/(Windows\sPhone)/i)),
                a = !(!navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/(Windows\sPhone)/i));
            if (i.is(":checkbox")) {
                var d = function() {
                    var s = new t,
                        l = e('<div class="jq-checkbox"><div class="jq-checkbox__div"></div></div>').attr({
                            id: s.id,
                            title: s.title
                        }).addClass(s.classes).data(s.data);
                    i.css({
                        position: "absolute",
                        zIndex: "-1",
                        opacity: 0,
                        margin: 0,
                        padding: 0
                    }).after(l).prependTo(l), l.attr("unselectable", "on").css({
                        "-webkit-user-select": "none",
                        "-moz-user-select": "none",
                        "-ms-user-select": "none",
                        "-o-user-select": "none",
                        "user-select": "none",
                        display: "inline-block",
                        position: "relative",
                        overflow: "hidden"
                    }), i.is(":checked") && l.addClass("checked"), i.is(":disabled") && l.addClass("disabled"), l.click(function(e) {
                        e.preventDefault(), l.is(".disabled") || (i.is(":checked") ? (i.prop("checked", !1), l.removeClass("checked")) : (i.prop("checked", !0), l.addClass("checked")), i.focus().change())
                    }), i.closest("label").add('label[for="' + i.attr("id") + '"]').on("click.styler", function(t) {
                        e(t.target).is("a") || e(t.target).closest(l).length || (l.triggerHandler("click"), t.preventDefault())
                    }), i.on("change.styler", function() {
                        i.is(":checked") ? l.addClass("checked") : l.removeClass("checked")
                    }).on("keydown.styler", function(e) {
                        32 == e.which && l.click()
                    }).on("focus.styler", function() {
                        l.is(".disabled") || l.addClass("focused")
                    }).on("blur.styler", function() {
                        l.removeClass("focused")
                    })
                };
                d(), i.on("refresh", function() {
                    i.closest("label").add('label[for="' + i.attr("id") + '"]').off(".styler"), i.off(".styler").parent().before(i).remove(), d()
                })
            } else if (i.is(":radio")) {
                var r = function() {
                    var s = new t,
                        l = e('<div class="jq-radio"><div class="jq-radio__div"></div></div>').attr({
                            id: s.id,
                            title: s.title
                        }).addClass(s.classes).data(s.data);
                    i.css({
                        position: "absolute",
                        zIndex: "-1",
                        opacity: 0,
                        margin: 0,
                        padding: 0
                    }).after(l).prependTo(l), l.attr("unselectable", "on").css({
                        "-webkit-user-select": "none",
                        "-moz-user-select": "none",
                        "-ms-user-select": "none",
                        "-o-user-select": "none",
                        "user-select": "none",
                        display: "inline-block",
                        position: "relative"
                    }), i.is(":checked") && l.addClass("checked"), i.is(":disabled") && l.addClass("disabled"), e.fn.commonParents = function() {
                        var t = this;
                        return t.first().parents().filter(function() {
                            return e(this).find(t).length === t.length
                        })
                    }, e.fn.commonParent = function() {
                        return e(this).commonParents().first()
                    }, l.click(function(t) {
                        if (t.preventDefault(), !l.is(".disabled")) {
                            var s = e('input[name="' + i.attr("name") + '"]');
                            s.commonParent().find(s).prop("checked", !1).parent().removeClass("checked"), i.prop("checked", !0).parent().addClass("checked"), i.focus().change()
                        }
                    }), i.closest("label").add('label[for="' + i.attr("id") + '"]').on("click.styler", function(t) {
                        e(t.target).is("a") || e(t.target).closest(l).length || (l.triggerHandler("click"), t.preventDefault())
                    }), i.on("change.styler", function() {
                        i.parent().addClass("checked")
                    }).on("focus.styler", function() {
                        l.is(".disabled") || l.addClass("focused")
                    }).on("blur.styler", function() {
                        l.removeClass("focused")
                    })
                };
                r(), i.on("refresh", function() {
                    i.closest("label").add('label[for="' + i.attr("id") + '"]').off(".styler"), i.off(".styler").parent().before(i).remove(), r()
                })
            } else if (i.is(":file")) {
                i.css({
                    position: "absolute",
                    top: 0,
                    right: 0,
                    margin: 0,
                    padding: 0,
                    opacity: 0,
                    fontSize: "100px"
                });
                var n = function() {
                    var s = new t,
                        o = i.data("placeholder");
                    void 0 === o && (o = l.filePlaceholder);
                    var a = i.data("browse");
                    void 0 !== a && "" !== a || (a = l.fileBrowse);
                    var d = e('<div class="jq-file"><div class="jq-file__name">' + o + '</div><div class="jq-file__browse">' + a + "</div></div>").css({
                        display: "inline-block",
                        position: "relative",
                        overflow: "hidden"
                    }).attr({
                        id: s.id,
                        title: s.title
                    }).addClass(s.classes).data(s.data);
                    i.after(d).appendTo(d), i.is(":disabled") && d.addClass("disabled"), i.on("change.styler", function() {
                        var t = i.val(),
                            s = e("div.jq-file__name", d);
                        if (i.is("[multiple]")) {
                            t = "";
                            var a = i[0].files.length;
                            if (a > 0) {
                                var r = i.data("number");
                                void 0 === r && (r = l.fileNumber), r = r.replace("%s", a), t = r
                            }
                        }
                        s.text(t.replace(/.+[\\\/]/, "")), "" === t ? (s.text(o), d.removeClass("changed")) : d.addClass("changed")
                    }).on("focus.styler", function() {
                        d.addClass("focused")
                    }).on("blur.styler", function() {
                        d.removeClass("focused")
                    }).on("click.styler", function() {
                        d.removeClass("focused")
                    })
                };
                n(), i.on("refresh", function() {
                    i.off(".styler").parent().before(i).remove(), n()
                })
            } else if (i.is('input[type="number"]')) {
                var c = function() {
                    var s = new t,
                        l = e('<div class="input-number-box"><div class="jq-number__spin input-number-less"></div><div class="jq-number__spin input-number-more"></div></div>').attr({
                            id: s.id,
                            title: s.title
                        }).addClass(s.classes).data(s.data);
                    i.after(l).prependTo(l).wrap('<div class="aside_input-number"></div>'), i.is(":disabled") && l.addClass("disabled");
                    var o, a, d, r = null,
                        n = null;
                    void 0 !== i.attr("min") && (o = i.attr("min")), void 0 !== i.attr("max") && (a = i.attr("max")), d = void 0 !== i.attr("step") && e.isNumeric(i.attr("step")) ? Number(i.attr("step")) : Number(1);
                    var c = function(t) {
                        var s, l = i.val();
                        e.isNumeric(l) || (l = 0, i.val("0")), t.is(".input-number-less") ? s = Number(l) - d : t.is(".input-number-more") && (s = Number(l) + d);
                        var r = (d.toString().split(".")[1] || []).length;
                        if (r > 0) {
                            for (var n = "1"; n.length <= r;) n += "0";
                            s = Math.round(s * n) / n
                        }
                        e.isNumeric(o) && e.isNumeric(a) ? s >= o && a >= s && i.val(s) : e.isNumeric(o) && !e.isNumeric(a) ? s >= o && i.val(s) : !e.isNumeric(o) && e.isNumeric(a) ? a >= s && i.val(s) : i.val(s)
                    };
                    l.is(".disabled") || (l.on("mousedown", "div.jq-number__spin", function() {
                        var t = e(this);
                        c(t), r = setTimeout(function() {
                            n = setInterval(function() {
                                c(t)
                            }, 40)
                        }, 350)
                    }).on("mouseup mouseout", "div.jq-number__spin", function() {
                        clearTimeout(r), clearInterval(n)
                    }).on("mouseup", "div.jq-number__spin", function() {
                        i.change()
                    }), i.on("focus.styler", function() {
                        l.addClass("focused")
                    }).on("blur.styler", function() {
                        l.removeClass("focused")
                    }))
                };
                c(), i.on("refresh", function() {
                    i.off(".styler").closest(".input-number-box").before(i).remove(), c()
                })
            } else if (i.is("select")) {
                var f = function() {
                    function d(t) {
                        t.off("mousewheel DOMMouseScroll").on("mousewheel DOMMouseScroll", function(t) {
                            var s = null;
                            "mousewheel" == t.type ? s = -1 * t.originalEvent.wheelDelta : "DOMMouseScroll" == t.type && (s = 40 * t.originalEvent.detail), s && (t.stopPropagation(), t.preventDefault(), e(this).scrollTop(s + e(this).scrollTop()))
                        })
                    }
                    function r() {
                        for (var e = 0; e < f.length; e++) {
                            var t = f.eq(e),
                                s = "",
                                i = "",
                                o = "",
                                a = "",
                                d = "",
                                r = "",
                                n = "",
                                c = "",
                                u = "",
                                p = "disabled",
                                v = "selected sel disabled";
                            t.prop("selected") && (i = "selected sel"), t.is(":disabled") && (i = p), t.is(":selected:disabled") && (i = v), void 0 !== t.attr("id") && "" !== t.attr("id") && (a = ' id="' + t.attr("id") + l.idSuffix + '"'), void 0 !== t.attr("title") && "" !== f.attr("title") && (d = ' title="' + t.attr("title") + '"'), void 0 !== t.attr("class") && (n = " " + t.attr("class"), u = ' data-jqfs-class="' + t.attr("class") + '"');
                            var m = t.data();
                            for (var g in m) "" !== m[g] && (r += " data-" + g + '="' + m[g] + '"');
                            i + n !== "" && (o = ' class="' + i + n + '"'), s = "<li" + u + r + o + d + a + ">" + t.html() + "</li>", t.parent().is("optgroup") && (void 0 !== t.parent().attr("class") && (c = " " + t.parent().attr("class")), s = "<li" + u + r + ' class="' + i + n + " option" + c + '"' + d + a + ">" + t.html() + "</li>", t.is(":first-child") && (s = '<li class="optgroup' + c + '">' + t.parent().attr("label") + "</li>" + s)), h += s
                        }
                    }
                    function n() {
                        var a = new t,
                            n = "",
                            c = i.data("placeholder"),
                            u = i.data("search"),
                            p = i.data("search-limit"),
                            v = i.data("search-not-found"),
                            m = i.data("search-placeholder"),
                            g = i.data("z-index"),
                            b = i.data("smart-positioning");
                        void 0 === c && (c = l.selectPlaceholder), void 0 !== u && "" !== u || (u = l.selectSearch), void 0 !== p && "" !== p || (p = l.selectSearchLimit), void 0 !== v && "" !== v || (v = l.selectSearchNotFound), void 0 === m && (m = l.selectSearchPlaceholder), void 0 !== g && "" !== g || (g = l.singleSelectzIndex), void 0 !== b && "" !== b || (b = l.selectSmartPositioning);
                        var y = e('<div class="jq-selectbox jqselect"><div class="jq-selectbox__select" style="position: relative"><div class="jq-selectbox__select-text"></div><div class="jq-selectbox__trigger"><div class="jq-selectbox__trigger-arrow"></div></div></div></div>').css({
                            display: "inline-block",
                            position: "relative",
                            zIndex: g
                        }).attr({
                            id: a.id,
                            title: a.title
                        }).addClass(a.classes).data(a.data);
                        i.css({
                            margin: 0,
                            padding: 0
                        }).after(y).prependTo(y);
                        var C = e("div.jq-selectbox__select", y),
                            x = e("div.jq-selectbox__select-text", y),
                            w = f.filter(":selected");
                        r(), u && (n = '<div class="jq-selectbox__search"><input type="search" autocomplete="off" placeholder="' + m + '"></div><div class="jq-selectbox__not-found">' + v + "</div>");
                        var q = e('<div class="jq-selectbox__dropdown" style="position: absolute">' + n + '<ul style="position: relative; list-style: none; overflow: auto; overflow-x: hidden">' + h + "</ul></div>");
                        y.append(q);
                        var _ = e("ul", q),
                            j = e("li", q),
                            k = e("input", q),
                            S = e("div.jq-selectbox__not-found", q).hide();
                        j.length < p && k.parent().hide(), "" === f.first().text() && f.first().is(":selected") && c !== !1 ? x.text(c).addClass("placeholder") : x.text(w.text());
                        var T = 0,
                            N = 0;
                        if (j.css({
                                display: "inline-block"
                            }), j.each(function() {
                                var t = e(this);
                                t.innerWidth() > T && (T = t.innerWidth(), N = t.width())
                            }), j.css({
                                display: ""
                            }), x.is(".placeholder") && x.width() > T) x.width(x.width());
                        else {
                            var P = y.clone().appendTo("body").width("auto"),
                                A = P.outerWidth();
                            P.remove(), A == y.outerWidth() && x.width(N)
                        }
                        T > y.width() && q.width(T), "" === f.first().text() && "" !== i.data("placeholder") && j.first().hide(), i.css({
                            position: "absolute",
                            left: 0,
                            top: 0,
                            width: "100%",
                            height: "100%",
                            opacity: 0
                        });
                        var D = y.outerHeight(!0),
                            I = k.parent().outerHeight(!0) || 0,
                            H = _.css("max-height"),
                            z = j.filter(".selected");
                        z.length < 1 && j.first().addClass("selected sel"), void 0 === j.data("li-height") && j.data("li-height", j.outerHeight());
                        var K = q.css("top");
                        if ("auto" == q.css("left") && q.css({
                                left: 0
                            }), "auto" == q.css("top") && (q.css({
                                top: D
                            }), K = D), q.hide(), z.length && (f.first().text() != w.text() && y.addClass("changed"), y.data("jqfs-class", z.data("jqfs-class")), y.addClass(z.data("jqfs-class"))), i.is(":disabled")) return y.addClass("disabled"), !1;
                        C.click(function() {
                            if (e("div.jq-selectbox").filter(".opened").length && l.onSelectClosed.call(e("div.jq-selectbox").filter(".opened")), i.focus(), !o) {
                                var t = e(window),
                                    s = j.data("li-height"),
                                    a = y.offset().top,
                                    r = t.height() - D - (a - t.scrollTop()),
                                    n = i.data("visible-options");
                                void 0 !== n && "" !== n || (n = l.selectVisibleOptions);
                                var c = 5 * s,
                                    h = s * n;
                                n > 0 && 6 > n && (c = h), 0 === n && (h = "auto");
                                var u = function() {
                                        q.height("auto").css({
                                            bottom: "auto",
                                            top: K
                                        });
                                        var e = function() {
                                            _.css("max-height", Math.floor((r - 20 - I) / s) * s)
                                        };
                                        e(), _.css("max-height", h), "none" != H && _.css("max-height", H), r < q.outerHeight() + 20 && e()
                                    },
                                    p = function() {
                                        q.height("auto").css({
                                            top: "auto",
                                            bottom: K
                                        });
                                        var e = function() {
                                            _.css("max-height", Math.floor((a - t.scrollTop() - 20 - I) / s) * s)
                                        };
                                        e(), _.css("max-height", h), "none" != H && _.css("max-height", H), a - t.scrollTop() - 20 < q.outerHeight() + 20 && e()
                                    };
                                b === !0 || 1 === b ? r > c + I + 20 ? (u(), y.removeClass("dropup").addClass("dropdown")) : (p(), y.removeClass("dropdown").addClass("dropup")) : b !== !1 && 0 !== b || r > c + I + 20 && (u(), y.removeClass("dropup").addClass("dropdown")), y.offset().left + q.outerWidth() > t.width() && q.css({
                                    left: "auto",
                                    right: 0
                                }), e("div.jqselect").css({
                                    zIndex: g - 1
                                }).removeClass("opened"), y.css({
                                    zIndex: g
                                }), q.is(":hidden") ? (e("div.jq-selectbox__dropdown:visible").hide(), q.show(), y.addClass("opened focused"), l.onSelectOpened.call(y)) : (q.hide(), y.removeClass("opened dropup dropdown"), e("div.jq-selectbox").filter(".opened").length && l.onSelectClosed.call(y)), k.length && (k.val("").keyup(), S.hide(), k.keyup(function() {
                                    var t = e(this).val();
                                    j.each(function() {
                                        e(this).html().match(new RegExp(".*?" + t + ".*?", "i")) ? e(this).show() : e(this).hide()
                                    }), "" === f.first().text() && "" !== i.data("placeholder") && j.first().hide(), j.filter(":visible").length < 1 ? S.show() : S.hide()
                                })), j.filter(".selected").length && ("" === i.val() ? _.scrollTop(0) : (_.innerHeight() / s % 2 !== 0 && (s /= 2), _.scrollTop(_.scrollTop() + j.filter(".selected").position().top - _.innerHeight() / 2 + s))), d(_)
                            }
                        }), j.hover(function() {
                            e(this).siblings().removeClass("selected")
                        });
                        var M = j.filter(".selected").text();
                        j.filter(":not(.disabled):not(.optgroup)").click(function() {
                            i.focus();
                            var t = e(this),
                                s = t.text();
                            if (!t.is(".selected")) {
                                var o = t.index();
                                o -= t.prevAll(".optgroup").length, t.addClass("selected sel").siblings().removeClass("selected sel"), f.prop("selected", !1).eq(o).prop("selected", !0), M = s, x.text(s), y.data("jqfs-class") && y.removeClass(y.data("jqfs-class")), y.data("jqfs-class", t.data("jqfs-class")), y.addClass(t.data("jqfs-class")), i.change()
                            }
                            q.hide(), y.removeClass("opened dropup dropdown"), l.onSelectClosed.call(y)
                        }), q.mouseout(function() {
                            e("li.sel", q).addClass("selected")
                        }), i.on("change.styler", function() {
                            x.text(f.filter(":selected").text()).removeClass("placeholder"), j.removeClass("selected sel").not(".optgroup").eq(i[0].selectedIndex).addClass("selected sel"), f.first().text() != j.filter(".selected").text() ? y.addClass("changed") : y.removeClass("changed")
                        }).on("focus.styler", function() {
                            y.addClass("focused"), e("div.jqselect").not(".focused").removeClass("opened dropup dropdown").find("div.jq-selectbox__dropdown").hide()
                        }).on("blur.styler", function() {
                            y.removeClass("focused")
                        }).on("keydown.styler keyup.styler", function(e) {
                            var t = j.data("li-height");
                            "" === i.val() ? x.text(c).addClass("placeholder") : x.text(f.filter(":selected").text()), j.removeClass("selected sel").not(".optgroup").eq(i[0].selectedIndex).addClass("selected sel"), 38 != e.which && 37 != e.which && 33 != e.which && 36 != e.which || ("" === i.val() ? _.scrollTop(0) : _.scrollTop(_.scrollTop() + j.filter(".selected").position().top)), 40 != e.which && 39 != e.which && 34 != e.which && 35 != e.which || _.scrollTop(_.scrollTop() + j.filter(".selected").position().top - _.innerHeight() + t), 13 == e.which && (e.preventDefault(), q.hide(), y.removeClass("opened dropup dropdown"), l.onSelectClosed.call(y))
                        }).on("keydown.styler", function(e) {
                            32 == e.which && (e.preventDefault(), C.click())
                        }), s.registered || (e(document).on("click", s), s.registered = !0)
                    }
                    function c() {
                        var s = new t,
                            l = e('<div class="jq-select-multiple jqselect"></div>').css({
                                display: "inline-block",
                                position: "relative"
                            }).attr({
                                id: s.id,
                                title: s.title
                            }).addClass(s.classes).data(s.data);
                        i.css({
                            margin: 0,
                            padding: 0
                        }).after(l), r(), l.append("<ul>" + h + "</ul>");
                        var o = e("ul", l).css({
                                position: "relative",
                                "overflow-x": "hidden",
                                "-webkit-overflow-scrolling": "touch"
                            }),
                            a = e("li", l).attr("unselectable", "on"),
                            n = i.attr("size"),
                            c = o.outerHeight(),
                            u = a.outerHeight();
                        void 0 !== n && n > 0 ? o.css({
                            height: u * n
                        }) : o.css({
                            height: 4 * u
                        }), c > l.height() && (o.css("overflowY", "scroll"), d(o), a.filter(".selected").length && o.scrollTop(o.scrollTop() + a.filter(".selected").position().top)), i.prependTo(l).css({
                            position: "absolute",
                            left: 0,
                            top: 0,
                            width: "100%",
                            height: "100%",
                            opacity: 0
                        }), i.is(":disabled") ? (l.addClass("disabled"), f.each(function() {
                            e(this).is(":selected") && a.eq(e(this).index()).addClass("selected")
                        })) : (a.filter(":not(.disabled):not(.optgroup)").click(function(t) {
                            i.focus();
                            var s = e(this);
                            if (t.ctrlKey || t.metaKey || s.addClass("selected"), t.shiftKey || s.addClass("first"), t.ctrlKey || t.metaKey || t.shiftKey || s.siblings().removeClass("selected first"), (t.ctrlKey || t.metaKey) && (s.is(".selected") ? s.removeClass("selected first") : s.addClass("selected first"), s.siblings().removeClass("first")), t.shiftKey) {
                                var l = !1,
                                    o = !1;
                                s.siblings().removeClass("selected").siblings(".first").addClass("selected"), s.prevAll().each(function() {
                                    e(this).is(".first") && (l = !0)
                                }), s.nextAll().each(function() {
                                    e(this).is(".first") && (o = !0)
                                }), l && s.prevAll().each(function() {
                                    return e(this).is(".selected") ? !1 : void e(this).not(".disabled, .optgroup").addClass("selected")
                                }), o && s.nextAll().each(function() {
                                    return e(this).is(".selected") ? !1 : void e(this).not(".disabled, .optgroup").addClass("selected")
                                }), 1 == a.filter(".selected").length && s.addClass("first")
                            }
                            f.prop("selected", !1), a.filter(".selected").each(function() {
                                var t = e(this),
                                    s = t.index();
                                t.is(".option") && (s -= t.prevAll(".optgroup").length), f.eq(s).prop("selected", !0)
                            }), i.change()
                        }), f.each(function(t) {
                            e(this).data("optionIndex", t)
                        }), i.on("change.styler", function() {
                            a.removeClass("selected");
                            var t = [];
                            f.filter(":selected").each(function() {
                                t.push(e(this).data("optionIndex"))
                            }), a.not(".optgroup").filter(function(s) {
                                return e.inArray(s, t) > -1
                            }).addClass("selected")
                        }).on("focus.styler", function() {
                            l.addClass("focused")
                        }).on("blur.styler", function() {
                            l.removeClass("focused")
                        }), c > l.height() && i.on("keydown.styler", function(e) {
                            38 != e.which && 37 != e.which && 33 != e.which || o.scrollTop(o.scrollTop() + a.filter(".selected").position().top - u), 40 != e.which && 39 != e.which && 34 != e.which || o.scrollTop(o.scrollTop() + a.filter(".selected:last").position().top - o.innerHeight() + 2 * u)
                        }))
                    }
                    var f = e("option", i),
                        h = "";
                    if (i.is("[multiple]")) {
                        if (a || o) return;
                        c()
                    } else n()
                };
                f(), i.on("refresh", function() {
                    i.off(".styler").parent().before(i).remove(), f()
                })
            } else i.is(":reset") && i.on("click", function() {
                setTimeout(function() {
                    i.closest("form").find("input, select").trigger("refresh")
                }, 1)
            })
        },
        destroy: function() {
            var t = e(this.element);
            t.is(":checkbox") || t.is(":radio") ? (t.removeData("_" + i).off(".styler refresh").removeAttr("style").parent().before(t).remove(), t.closest("label").add('label[for="' + t.attr("id") + '"]').off(".styler")) : t.is('input[type="number"]') ? t.removeData("_" + i).off(".styler refresh").closest(".input-number-box").before(t).remove() : (t.is(":file") || t.is("select")) && t.removeData("_" + i).off(".styler refresh").removeAttr("style").parent().before(t).remove()
        }
    }, e.fn[i] = function(s) {
        var l = arguments;
        if (void 0 === s || "object" == typeof s) return this.each(function() {
            e.data(this, "_" + i) || e.data(this, "_" + i, new t(this, s))
        }).promise().done(function() {
            var t = e(this[0]).data("_" + i);
            t && t.options.onFormStyled.call()
        }), this;
        if ("string" == typeof s && "_" !== s[0] && "init" !== s) {
            var o;
            return this.each(function() {
                var a = e.data(this, "_" + i);
                a instanceof t && "function" == typeof a[s] && (o = a[s].apply(a, Array.prototype.slice.call(l, 1)))
            }), void 0 !== o ? o : this
        }
    }, s.registered = !1
});

//////////////////////
///// 
//////////////////////
$('#chartLines').height(250);
////
$("#asideBar").sparkline([1.699,1.686,8.368,9.011,6.126,3.837,0.997,2.034,0.483,1.457,2.950,8.946,0.866,6.247,8.222,5.727,0.20,6.883,3.410,5.224,2.034,0.483,1.457,2.950,5.946,0.866], {
    type: 'bar',
    height: 30,
	barWidth: 4,
	barSpacing: 2,
    zeroAxis: false,
	negBarColor: '#3366cc'});
$("#jqstooltip").css({
	"width": "154"
});

$("#asideArea").sparkline([5.696,6.514,9.647,6.326,6.028,8.869,8.251,9.146,6.137,8.997,6.892,9.544,7.011,6.556,7.737,8.348,7.011,6.558,7.556], {
    type: 'line',
    width: 154,
	height: 30,
	lineWidth: 2,
	spotRadius: 2,
    lineColor: '#ed4949',
	fillColor: '#a14043',
	spotColor: '#ed4949',
	highlightSpotColor: '#ed4949',
	highlightLineColor: '#ed4949',
    minSpotColor: '#ed4949',
    maxSpotColor: '#ed4949'});
		
$("#asideThin").sparkline([6.658,8.005,9.003,3.385,9.018,9.089,7.804,5.574,7.556,6.910,4.327,7.500,6.563, 0.649,2.584,8.757,6.815,8.368,9.011,6.129,3.837,0.997,2.034,0.483,1.457,2.950,8.946,0.866,6.247,3.385,9.018,9.089,7.804,5.574,7.556,6.910,4.327,7.500,7.804,5.574,7.556,6.910,4.327,7.500,6.563,0.649,2.584], {
    type: 'bar',
	barWidth: 2,
	height: 30,
	barColor: '#fed42a',
    negBarColor: '#fed42a',
    zeroAxis: false});
	
$("#asideLine").sparkline([0.075,0.487,0.581,0.520,0.075,0.630,0.350,0.631,0.794,0.666,0.466,0.322,0.833,0.471,0.721,0.703,0.042,0.328,0.844,0.996,0.099,0.342,0.841,0.599], {
    type: 'bar',
	height: 30,
	barWidth: 4,
	barSpacing: 2,
	barColor: '#20c05c',
    negBarColor: '#20c05c',
    zeroAxis: false});	

var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
new Morris.Line({
  // ID of the element in which to draw the chart.
  element: 'chartLines',
  // Chart data records -- each entry in this array corresponds to a point on
  // the chart.
  data: [
    {q: '2015-01', a: 75, b: 15, c: 5},
    {q: '2015-02', a: 90, b: 60, c: 15},
    {q: '2015-03', a: 80, b: 30, c: 10},
    {q: '2015-04', a: 90, b: 50, c: 20},
    {q: '2015-05', a: 95, b: 35, c: 15},
    {q: '2015-06', a: 15, b: 90, c: 5},
    {q: '2015-07', a: 50, b: 35, c: 15},
    {q: '2015-08', a: 100, b: 50, c: 10},
    {q: '2015-09', a: 75, b: 30, c: 5},
    {q: '2015-10', a: 30, b: 75, c: 75},
    {q: '2015-11', a: 30, b: 95, c: 15},
    {q: '2015-12', a: 45, b: 30, c: 20}
  ],
  // The name of the data record attribute that contains x-values.
xkey: 'q',
  // A list of names of data record attributes that contain y-values.
ykeys: ['a', 'b', 'c'], //
   // Labels for the ykeys -- will be displayed when you hover over the
  // chart.
labels: ['Free', 'Light', 'Free'],
lineColors: ['#20C05C', '#ed4949', '#fed42a'],
  lineWidth: 3, pointSize: 3, xLabels: "month", resize: true, hideHover: true,
      xLabelFormat: function (x) {
        var month = months[ x.getMonth() ];
        var year = x.getFullYear();
        return month;
    },
    dateFormat: function (x) {
        var month = months[ new Date(x).getMonth() ];
        var year = new Date(x).getFullYear();
        return month + ' ' + year;
    },
});
new Morris.Donut({
  element: 'chartDonut',
  data: [
    {label: "Light", value: 30},
    {label: "Pro", value: 20},
    {label: "Free", value: 45}
  ],
  colors: ['#ed4949', '#fed42a', '#20c05c'] ,
  labelColor: '#5e6870'
});
