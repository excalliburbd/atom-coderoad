"use strict";
var store_1 = require('../../store/store');
var _actions_1 = require('../../actions/_actions');
function handleResult(result) {
    store_1.store.dispatch(_actions_1.testComplete());
    if (result.completed) {
        store_1.store.dispatch(_actions_1.testResult(result));
        store_1.store.dispatch(_actions_1.completePage());
    }
    else if (!result.pass) {
        store_1.store.dispatch(_actions_1.testResult(result));
    }
    else if (result.pass) {
        result.msg = "Task " + result.taskPosition + " Complete";
        store_1.store.dispatch(_actions_1.testResult(result));
    }
}
exports.handleResult = handleResult;
;