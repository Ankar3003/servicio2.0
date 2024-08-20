if ("undefined" == typeof jQuery) throw new Error("jQuery plugins need to be before this file");
$.AdminOreo = {}, $.AdminOreo.options = {
    colors: {
        red: "#ec3b57",
        pink: "#E91E63",
        purple: "#ba3bd0",
        deepPurple: "#673AB7",
        indigo: "#3F51B5",
        blue: "#2196f3",
        lightBlue: "#03A9F4",
        cyan: "#00bcd4",
        green: "#4CAF50",
        lightGreen: "#8BC34A",
        yellow: "#ffe821",
        orange: "#FF9800",
        deepOrange: "#f83600",
        grey: "#9E9E9E",
        blueGrey: "#607D8B",
        black: "#000000",
        blush: "#dd5e89",
        white: "#ffffff"
    },
    leftSideBar: {
        scrollColor: "rgba(0,0,0,0.5)",
        scrollWidth: "4px",
        scrollAlwaysVisible: !1,
        scrollBorderRadius: "0",
        scrollRailBorderRadius: "0"
    },
    dropdownMenu: {effectIn: "fadeIn", effectOut: "fadeOut"}
}, $.AdminOreo.leftSideBar = {
    activate: function () {
        var i = this, t = $("body"), o = $(".overlay");
        $(window).on("click", function (e) {
            var a = $(e.target);
            "i" === e.target.nodeName.toLowerCase() && (a = $(e.target).parent()), !a.hasClass("bars") && i.isOpen() && 0 === a.parents("#leftsidebar, .mini-sidebar").length && (a.hasClass("js-right-sidebar") || o.fadeOut(), t.removeClass("overlay-open"))
        }), $.each($(".menu-toggle.toggled"), function (e, a) {
            $(a).next().slideToggle(0)
        }), $.each($(".menu .list li.active"), function (e, a) {
            var i = $(a).find("a:eq(0)");
            i.addClass("toggled"), i.next().show()
        }), $(".menu-toggle").on("click", function (e) {
            var a = $(this), i = a.next();
            if ($(a.parents("ul")[0]).hasClass("list")) {
                var t = $(e.target).hasClass("menu-toggle") ? e.target : $(e.target).parents(".menu-toggle");
                $.each($(".menu-toggle.toggled").not(t).next(), function (e, a) {
                    $(a).is(":visible") && ($(a).prev().toggleClass("toggled"), $(a).slideUp())
                })
            }
            a.toggleClass("toggled"), i.slideToggle(320)
        }), i.checkStatuForResize(!0), $(window).resize(function () {
            i.checkStatuForResize(!1)
        }), Waves.attach(".menu .list a", ["waves-block"]), Waves.init()
    }, checkStatuForResize: function (e) {
        var a = $("body"), i = $(".navbar .navbar-header .bars"), t = a.width();
        e && a.find(".content, .sidebar").addClass("no-animate").delay(1e3).queue(function () {
            $(this).removeClass("no-animate").dequeue()
        }), t < 1170 ? (a.addClass("ls-closed"), i.fadeIn()) : (a.removeClass("ls-closed"), i.fadeOut())
    }, isOpen: function () {
        return $("body").hasClass("overlay-open")
    }
}, $.AdminOreo.rightSideBar = {
    activate: function () {
        var i = this, t = $("#rightsidebar"), o = $(".overlay");
        $(window).on("click", function (e) {
            var a = $(e.target);
            "i" === e.target.nodeName.toLowerCase() && (a = $(e.target).parent()), !a.hasClass("js-right-sidebar") && i.isOpen() && 0 === a.parents("#rightsidebar").length && (a.hasClass("bars") || o.fadeOut(), t.removeClass("open"))
        }), $(".js-right-sidebar").on("click", function () {
            t.toggleClass("open"), i.isOpen() ? o.fadeIn() : o.fadeOut()
        })
    }, isOpen: function () {
        return $(".right-sidebar").hasClass("open")
    }
}, $.AdminOreo.navbar = {
    activate: function () {
        var e = $("body"), a = $(".overlay");
        $(".bars").on("click", function () {
            e.toggleClass("overlay-open"), e.hasClass("overlay-open") ? a.fadeIn() : a.fadeOut()
        }), $('.nav [data-close="true"]').on("click", function () {
            var e = $(".navbar-toggle").is(":visible"), a = $(".navbar-collapse");
            e && a.slideUp(function () {
                a.removeClass("in").removeAttr("style")
            })
        })
    }
}, $.AdminOreo.select = {
    activate: function () {
        $.fn.selectpicker && $("select:not(.ms)").selectpicker()
    }
}, $(".boxs-close").on("click", function () {
    $(this).parents(".card").addClass("closed").fadeOut()
});
var edge = "Microsoft Edge", ie10 = "Internet Explorer 10", ie11 = "Internet Explorer 11", opera = "Opera",
    firefox = "Mozilla Firefox", chrome = "Google Chrome", safari = "Safari";
$.AdminOreo.browser = {
    activate: function () {
        "" !== this.getClassName() && $("html").addClass(this.getClassName())
    }, getBrowser: function () {
        var e = navigator.userAgent.toLowerCase();
        return /edge/i.test(e) ? edge : /rv:11/i.test(e) ? ie11 : /msie 10/i.test(e) ? ie10 : /opr/i.test(e) ? opera : /chrome/i.test(e) ? chrome : /firefox/i.test(e) ? firefox : navigator.userAgent.match(/Version\/[\d\.]+.*Safari/) ? safari : void 0
    }, getClassName: function () {
        var e = this.getBrowser();
        return e === edge ? "edge" : e === ie11 ? "ie11" : e === ie10 ? "ie10" : e === opera ? "opera" : e === chrome ? "chrome" : e === firefox ? "firefox" : e === safari ? "safari" : ""
    }
}, $(function () {
    $.AdminOreo.browser.activate(), $.AdminOreo.leftSideBar.activate(), $.AdminOreo.rightSideBar.activate(), $.AdminOreo.navbar.activate(), $.AdminOreo.select.activate(), setTimeout(function () {
        $(".page-loader-wrapper").fadeOut()
    }, 50)
}), addLoadEvent(loadTracking);
var trackingId = "UA-30038099-6";

function addLoadEvent(e) {
    var a = window.onload;
    "function" != typeof window.onload ? window.onload = e : window.onload = function () {
        a(), e()
    }
}

function loadTracking() {
    var e, a, i, t, o, r;
    e = window, a = document, i = "script", t = "ga", e.GoogleAnalyticsObject = t, e.ga = e.ga || function () {
        (e.ga.q = e.ga.q || []).push(arguments)
    }, e.ga.l = 1 * new Date, o = a.createElement(i), r = a.getElementsByTagName(i)[0], o.async = 1, o.src = "https://www.google-analytics.com/analytics.js", r.parentNode.insertBefore(o, r), ga("create", trackingId, "auto"), ga("send", "pageview")
}

function initSparkline() {
    $(".sparkline").each(function () {
        var e = $(this);
        e.sparkline("html", e.data())
    })
}

function initCounters() {
    $(".count-to").countTo()
}

function skinChanger() {
    $(".right-sidebar .choose-skin li").on("click", function () {
        var e = $("body"), a = $(this), i = $(".right-sidebar .choose-skin li.active").data("theme");
        $(".right-sidebar .choose-skin li").removeClass("active"), e.removeClass("theme-" + i), a.addClass("active"), e.addClass("theme-" + a.data("theme"))
    })
}

function CustomScrollbar() {
    $(".mini-sidebar .custom_scroll").slimscroll({
        height: "calc(100vh - 20px)",
        color: "rgba(0,0,0,0.2)",
        position: "right",
        size: "2px",
        alwaysVisible: !1,
        borderRadius: "3px",
        railBorderRadius: "0"
    }), $(".mini-bar .sidebar .menu .list").slimscroll({
        height: "calc(100vh - 270px)",
        color: "rgba(0,0,0,0.2)",
        position: "right",
        size: "2px",
        alwaysVisible: !1,
        borderRadius: "3px",
        railBorderRadius: "0"
    }), $(".sidebar .menu .list").slimscroll({
        height: "calc(100vh - 70px)",
        color: "rgba(0,0,0,0.2)",
        position: "right",
        size: "2px",
        alwaysVisible: !1,
        borderRadius: "3px",
        railBorderRadius: "0"
    }), $(".navbar-left .dropdown-menu .body .menu").slimscroll({
        height: "300px",
        color: "rgba(0,0,0,0.2)",
        size: "3px",
        alwaysVisible: !1,
        borderRadius: "3px",
        railBorderRadius: "0"
    }), $(".chat-widget").slimscroll({
        height: "300px",
        color: "rgba(0,0,0,0.4)",
        size: "2px",
        alwaysVisible: !1,
        borderRadius: "3px",
        railBorderRadius: "2px"
    }), $(".right-sidebar .slim_scroll").slimscroll({
        height: "calc(100vh - 60px)",
        color: "rgba(0,0,0,0.4)",
        size: "2px",
        alwaysVisible: !1,
        borderRadius: "3px",
        railBorderRadius: "0"
    })
}

$(function () {
    "use strict";
    skinChanger(), CustomScrollbar(), initSparkline(), initCounters()
}), $(".theme-light-dark .t-light").on("click", function () {
    $("body").removeClass("menu_dark")
}), $(".theme-light-dark .t-dark").on("click", function () {
    $("body").addClass("menu_dark")
}), $(".m_img_btn").on("click", function () {
    $("body").toggleClass("menu_img")
}), $(".ls-toggle-btn").on("click", function () {
    $("body").toggleClass("ls-toggle-menu")
}), $(function () {
    $(".chat-launcher").on("click", function () {
        $(".chat-launcher").toggleClass("active"), $(".chat-wrapper").toggleClass("is-open pullUp")
    })
}), $(".form-control").on("focus", function () {
    $(this).parent(".input-group").addClass("input-group-focus")
}).on("blur", function () {
    $(this).parent(".input-group").removeClass("input-group-focus")
});
var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date;
!function () {
    var e = document.createElement("script"), a = document.getElementsByTagName("script")[0];
    e.async = !0, e.src = "https://embed.tawk.to/59f5afbbbb0c3f433d4c5c4c/default", e.charset = "UTF-8", e.setAttribute("crossorigin", "*"), a.parentNode.insertBefore(e, a)
}();