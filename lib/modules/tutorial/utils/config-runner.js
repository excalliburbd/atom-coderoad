"use strict";
var path_1 = require('path');
var system_1 = require('./system');
var node_file_exists_1 = require('node-file-exists');
function configRunner(name, runner, dir) {
    var flatDep = path_1.join(dir, 'node_modules', runner, 'package.json');
    var treeDep = path_1.join(dir, 'node_modules', name, 'node_modules', runner, 'package.json');
    var runnerMain;
    var runnerRoot;
    if (node_file_exists_1.default(flatDep)) {
        runnerMain = require(flatDep).main;
        runnerRoot = flatDep;
    }
    else if (node_file_exists_1.default(treeDep)) {
        runnerMain = require(treeDep).main;
        runnerRoot = treeDep;
    }
    else {
        var message = 'Error loading test runner. Post an issue. https://github.com/coderoad/atom-coderoad/issues';
        console.log(message);
        throw message;
    }
    var slash = system_1.isWindows ? '\\' : '/';
    runnerMain = path_1.join.apply(null, runnerMain.split(slash));
    runnerRoot = runnerRoot.substring(0, runnerRoot.lastIndexOf(slash));
    var pathToMain = path_1.join(runnerRoot, runnerMain);
    if (!!require(pathToMain).default) {
        return require(pathToMain).default;
    }
    else {
        return require(pathToMain);
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = configRunner;
