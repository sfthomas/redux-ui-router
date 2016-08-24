'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = routerMiddleware;

var _actionTypes = require('./action-types');

function routerMiddleware($state) {
  return function (_ref) {
    var getState = _ref.getState;
    return function (next) {
      return function (action) {
        var payload = action.payload;


        switch (action.type) {
          case _actionTypes.STATE_GO:
            return $state.go(payload.to, payload.params, payload.options).then(next(action));

          case _actionTypes.STATE_RELOAD:
            return $state.reload(payload).then(next(action));

          case _actionTypes.STATE_TRANSITION_TO:
            return $state.transitionTo(payload.to, payload.params, payload.options).then(next(action));

          case _actionTypes.STATE_CHANGE_SUCCESS:
            return next({
              type: _actionTypes.STATE_CHANGE_SUCCESS,
              payload: {
                currentState: $state.$current.name,
                currentParams: $state.$current.params,
                prevState: getState().router.currentState,
                prevParams: getState().router.currentParams
              }
            });

          default:
            return next(action);
        }
      };
    };
  };
}

routerMiddleware.$inject = ['$state'];