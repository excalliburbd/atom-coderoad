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
var actions_1 = require('../../../../actions');
var RaisedButton_1 = require('material-ui/RaisedButton');
var styles = {
    border: '0px',
    boxShadow: 'none',
    backgroundColor: 'inherit',
    position: 'relative',
    top: '10px',
};
var Continue = (function (_super) {
    __extends(Continue, _super);
    function Continue() {
        _super.apply(this, arguments);
    }
    Continue.prototype.render = function () {
        return (React.createElement(RaisedButton_1.default, {style: styles, label: 'Continue', primary: true, onTouchTap: this.props.pageNext}));
    };
    Continue = __decorate([
        react_redux_1.connect(null, { pageNext: actions_1.pageNext }), 
        __metadata('design:paramtypes', [])
    ], Continue);
    return Continue;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Continue;
