"use strict";
var redux_1 = require('redux');
var alert_1 = require('./alert');
var checks_1 = require('./checks');
var editor_actions_1 = require('./editor-actions');
var globals_1 = require('./globals');
var hint_position_1 = require('./hint-position');
var page_1 = require('./page');
var position_1 = require('./position');
var progress_1 = require('./progress');
var route_1 = require('./route');
var task_position_1 = require('./task-position');
var task_tests_1 = require('./task-tests');
var tasks_1 = require('./tasks');
var test_run_1 = require('./test-run');
var tutorial_info_1 = require('./tutorial-info');
var tutorials_1 = require('./tutorials');
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = redux_1.combineReducers({
    alert: alert_1.default, checks: checks_1.default, editorActions: editor_actions_1.default, globals: globals_1.default, hintPosition: hint_position_1.default,
    page: page_1.default, position: position_1.default, progress: progress_1.default, route: route_1.default, taskPosition: task_position_1.default, taskTests: task_tests_1.default,
    tasks: tasks_1.default, testRun: test_run_1.default, tutorialInfo: tutorial_info_1.default, tutorials: tutorials_1.default,
});