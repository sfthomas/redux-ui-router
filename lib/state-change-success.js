'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = onStateChangeSuccess;

var _actionTypes = require('./action-types');

/**
 * This action is triggered when a $stateChangeSuccess event is broadcast.
 * Accepts a payload which matches the UI Router $stateChangeSuccess event.
 *
 * http://angular-ui.github.io/ui-router/site/#/api/ui.router.state.$state
 *
 * @return {Object} Action object
 */
function onStateChangeSuccess() {
  return {
    type: _actionTypes.STATE_CHANGE_SUCCESS
  };
}