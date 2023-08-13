'use strict';
function _typeof(t) {
  return (_typeof =
    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
      ? function (t) {
          return typeof t;
        }
      : function (t) {
          return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t;
        })(t);
}
!(function (t) {
  /*!
   * Project : simply-countdown
   * Date : 27/06/2015
   * License : MIT
   * Version : 1.6.0
   * Author : Vincent Loy <vincent.loy1@gmail.com>
   * Contributors :
   *  - Justin Beasley <JustinB@harvest.org>
   *  - Nathan Smith <NathanS@harvest.org>
   */
  var n = function t(n) {
      for (var e, o = n || {}, s = 1; s < arguments.length; s += 1) {
        e = arguments[s];
        var r = Object.keys(e);
        if (r.length)
          for (var a = 0; a < r.length; a += 1) {
            var l = r[a];
            Object.prototype.hasOwnProperty.call(e, l) && ('object' === _typeof(e[l]) ? t(o[l], e[l]) : (o[l] = e[l]));
          }
      }
      return o;
    },
    e = function (t, n, e) {
      var o = document.createElement('div'),
        s = document.createElement('span'),
        r = document.createElement('span'),
        a = document.createElement('div');
      return (
        a.appendChild(s),
        a.appendChild(r),
        o.appendChild(a),
        o.classList.add(n.sectionClass),
        o.classList.add(e),
        s.classList.add(n.amountClass),
        r.classList.add(n.wordClass),
        t.appendChild(o),
        { full: o, amount: s, word: r }
      );
    };
  t.simplyCountdown = function (t, o) {
    var s,
      r,
      a,
      l,
      i,
      u,
      c,
      d,
      p,
      m,
      y,
      g = Object.getPrototypeOf(t),
      w = n(
        {
          year: 2015,
          month: 6,
          day: 28,
          hours: 0,
          minutes: 0,
          seconds: 0,
          words: {
            days: { singular: 'day', plural: 'days' },
            hours: { singular: 'hour', plural: 'hours' },
            minutes: { singular: 'minute', plural: 'minutes' },
            seconds: { singular: 'second', plural: 'seconds' },
          },
          plural: !0,
          inline: !1,
          enableUtc: !1,
          onEnd: function () {},
          refresh: 1e3,
          inlineClass: 'simply-countdown-inline',
          sectionClass: 'simply-section',
          amountClass: 'simply-amount',
          wordClass: 'simply-word',
          zeroPad: !1,
          countUp: !1,
        },
        o
      );
    (y = g === String.prototype ? document.querySelectorAll(t) : t),
      (a = new Date(w.year, w.month - 1, w.day, w.hours, w.minutes, w.seconds)),
      (r = w.enableUtc ? new Date(a.getUTCFullYear(), a.getUTCMonth(), a.getUTCDate(), a.getUTCHours(), a.getUTCMinutes(), a.getUTCSeconds()) : a);
    var f,
      h = function (t) {
        var n,
          o = t,
          a = (function (t, n) {
            var o;
            return t.inline
              ? ((o = document.createElement('span')).classList.add(t.inlineClass), o)
              : { days: e(n, t, 'simply-days-section'), hours: e(n, t, 'simply-hours-section'), minutes: e(n, t, 'simply-minutes-section'), seconds: e(n, t, 'simply-seconds-section') };
          })(w, o);
        (n = function () {
          var t,
            n,
            e,
            y,
            g = function () {
              (c = parseInt(u / 86400, 10)), (u %= 86400), (d = parseInt(u / 3600, 10)), (u %= 3600), (p = parseInt(u / 60, 10)), (m = parseInt(u % 60, 10));
            };
          (l = new Date()),
            w.enableUtc ? ((i = new Date(l.getFullYear(), l.getMonth(), l.getDate(), l.getHours(), l.getMinutes(), l.getSeconds())), (u = (r - i.getTime()) / 1e3)) : (u = (r - l.getTime()) / 1e3),
            u > 0 ? g() : w.countUp ? ((u = (l.getTime() - r) / 1e3), g()) : ((c = 0), (d = 0), (p = 0), (m = 0), window.clearInterval(s), w.onEnd()),
            w.plural
              ? ((t = c > 1 ? w.words.days.plural : w.words.days.singular),
                (n = d > 1 ? w.words.hours.plural : w.words.hours.singular),
                (e = p > 1 ? w.words.minutes.plural : w.words.minutes.singular),
                (y = m > 1 ? w.words.seconds.plural : w.words.seconds.singular))
              : ((t = w.words.days.singular), (n = w.words.hours.singular), (e = w.words.minutes.singular), (y = w.words.seconds.singular)),
            w.inline
              ? (o.innerHTML = ''.concat(c, ' ').concat(t, ', ') + ''.concat(d, ' ').concat(n, ', ') + ''.concat(p, ' ').concat(e, ', ') + ''.concat(m, ' ').concat(y, '.'))
              : ((a.days.amount.textContent = (w.zeroPad && c.toString().length < 2 ? '0' : '') + c),
                (a.days.word.textContent = t),
                (a.hours.amount.textContent = (w.zeroPad && d.toString().length < 2 ? '0' : '') + d),
                (a.hours.word.textContent = n),
                (a.minutes.amount.textContent = (w.zeroPad && p.toString().length < 2 ? '0' : '') + p),
                (a.minutes.word.textContent = e),
                (a.seconds.amount.textContent = (w.zeroPad && m.toString().length < 2 ? '0' : '') + m),
                (a.seconds.word.textContent = y));
        })(),
          (s = window.setInterval(n, w.refresh));
      };
    null !== (f = y) && Symbol.iterator in Object(f)
      ? Array.prototype.forEach.call(y, function (t) {
          h(t);
        })
      : h(y);
  };
})(window),
  window.jQuery &&
    (function (t, n) {
      t.fn.simplyCountdown = function (t) {
        return (function (t, e) {
          n(t, e);
        })(this.selector, t);
      };
    })(jQuery, simplyCountdown);
