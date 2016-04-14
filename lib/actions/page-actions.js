"use strict";
var Type = require('./actionTypes');
var store_1 = require('../store/store');
var package_1 = require('../services/package');
var _ = require('lodash');
function setPage(selectedPosition) {
    if (selectedPosition === void 0) { selectedPosition = { chapter: 0, page: 0 }; }
    if (selectedPosition.completed) {
        return { type: Type.SET_ROUTE, payload: { route: 'final' } };
    }
    var page = package_1.default.getPage(selectedPosition);
    var tasks = package_1.default.getTasks(selectedPosition);
    var taskTests = _.flatten(tasks.map(function (task) { return task.tests || []; }));
    var actions = tasks.map(function (task) { return task.actions || []; });
    return { type: Type.SET_PAGE, payload: { page: page, tasks: tasks, position: selectedPosition, taskTests: taskTests, actions: actions } };
}
exports.setPage = setPage;
function nextPage() {
    var position = store_1.store.getState().position;
    var nextPosition = package_1.default.getNextPosition(position);
    return setPage(nextPosition);
}
exports.nextPage = nextPage;