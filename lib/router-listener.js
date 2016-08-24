'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = RouterListener;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Listens for events emitted from Angular UI Router and fires redux events
 *
 * @param {object} $transitions Dependency
 * @param {object} $urlRouter Dependency
 * @param {object} ngUiStateChangeActions Dependency
 * @return {undefined} undefined
 */
function RouterListener($transitions, $urlRouter, ngUiStateChangeActions) {
  var prevNext = function prevNext(t) {
    return [t.to(), t.to().params, t.from(), t.from().params];
  };

  $transitions.onStart({}, function ($transition$) {
    return ngUiStateChangeActions.onStateChangeStart.apply(ngUiStateChangeActions, _toConsumableArray(prevNext($transition$)));
  });
  $transitions.onError({}, function ($transition$) {
    return ngUiStateChangeActions.onStateChangeError.apply(ngUiStateChangeActions, _toConsumableArray(prevNext($transition$)).concat([$transition$.error()]));
  });
  $transitions.onSuccess({}, function () {
    return ngUiStateChangeActions.onStateChangeSuccess();
  });
}

RouterListener.$inject = ['$transitions', '$urlRouter', 'ngUiStateChangeActions'];