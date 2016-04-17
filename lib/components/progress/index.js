"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var React = require('react');
var react_redux_1 = require('react-redux');
var actions_1 = require('../../actions');
var index_1 = require('../index');
var classnames = require('classnames');
var Paper_1 = require('material-ui/Paper');
var List_1 = require('material-ui/List');
var Subheader_1 = require('material-ui/Subheader');
var colors_1 = require('material-ui/styles/colors');
var check_box_1 = require('material-ui/svg-icons/toggle/check-box');
var play_circle_filled_1 = require('material-ui/svg-icons/av/play-circle-filled');
var check_box_outline_blank_1 = require('material-ui/svg-icons/toggle/check-box-outline-blank');
var ProgressPage = (function (_super) {
    __extends(ProgressPage, _super);
    function ProgressPage() {
        _super.apply(this, arguments);
    }
    ProgressPage.prototype.getProgressIcon = function (completed, current) {
        if (completed) {
            return React.createElement(check_box_1.default, null);
        }
        else if (current) {
            return React.createElement(play_circle_filled_1.default, {color: colors_1.pink500});
        }
        else {
            return React.createElement(check_box_outline_blank_1.default, null);
        }
    };
    ProgressPage.prototype.canActivate = function (isActive, itemPosition, position) {
        var earlierChapter = itemPosition.chapter < position.chapter;
        var currentChapter = itemPosition.chapter = position.chapter;
        var earlierOrCurrentPage = itemPosition.page <= position.page;
        if (isActive || earlierChapter || (currentChapter && earlierOrCurrentPage)) {
            return true;
        }
        else {
            return null;
        }
    };
    ProgressPage.prototype.render = function () {
        var _a = this.props, page = _a.page, itemPosition = _a.itemPosition, position = _a.position;
        var isActive = itemPosition.chapter === position.chapter && itemPosition.page === position.page;
        return React.createElement(List_1.ListItem, {className: classnames({
            'page': true,
            'page-isDisabled': !this.canActivate(isActive, itemPosition, position)
        }), primaryText: (itemPosition.page + 1) + ". " + page.title, secondaryText: page.description, leftIcon: this.getProgressIcon(page.completed, isActive), onClick: this.canActivate(isActive, itemPosition, position) ? this.props.selectPage.bind(this, itemPosition) : null});
    };
    ;
    ProgressPage = __decorate([
        react_redux_1.connect(null, function (dispatch) {
            return {
                selectPage: function (position) {
                    dispatch(actions_1.pageSet(position));
                    dispatch(actions_1.setRoute('page'));
                }
            };
        }), 
        __metadata('design:paramtypes', [])
    ], ProgressPage);
    return ProgressPage;
}(React.Component));
;
var style = {
    width: '100%',
    margin: 0
};
exports.Progress = function (_a) {
    var progress = _a.progress, position = _a.position;
    return (React.createElement(Paper_1.default, {style: style, zDepth: 1, className: 'cr-progress'}, React.createElement(List_1.List, null, React.createElement(Subheader_1.default, null, "Progress"), progress.chapters.map(function (chapter, chapterIndex) {
        var isActive = chapterIndex === position.chapter;
        return React.createElement(List_1.ListItem, {key: 'c' + chapterIndex, className: classnames({
            'chapter': true,
            'isActive': isActive
        }), initiallyOpen: chapterIndex === 0, leftIcon: chapter.completed ? React.createElement(check_box_1.default, null) : null, primaryTogglesNestedList: chapterIndex === position.chapter && !chapter.completed, nestedItems: chapter.pages.map(function (page, pageIndex) {
            var itemPosition = { chapter: chapterIndex, page: pageIndex };
            return React.createElement(ProgressPage, {key: 'c' + chapterIndex + 'p' + pageIndex, page: page, itemPosition: itemPosition, position: position});
        })}, React.createElement("h3", null, chapterIndex + 1, ". ", chapter.title), React.createElement("span", {className: 'chapter-description'}, React.createElement(index_1.Markdown, null, chapter.description)));
    }))));
};