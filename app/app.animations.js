'use strict';

angular.
  module('phonecatApp').
  animation('.phone', function phoneAnimationFactory() {
    return {
      addClass: animateIn,
      removeClass: animateOut
    };

    function animateIn(element, className, done) {
      if (className !== 'selected') return;

      element.css({
        display: 'block',
        position: 'absolute',
          opacity: 0
      }).animate({
          opacity: 1
      }, 1000, done);

      return function animateInEnd(wasCanceled) {
        if (wasCanceled) element.stop();
      };
    }

    function animateOut(element, className, done) {
      if (className !== 'selected') return;

      element.css({
        position: 'absolute',
        opacity: 1
      }).animate({
        opacity: 0
      }, 1000, done);

      return function animateOutEnd(wasCanceled) {
        if (wasCanceled) element.stop();
      };
    }
  });
