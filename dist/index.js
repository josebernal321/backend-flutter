"use strict";

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _index = _interopRequireDefault(require("./router/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

require("@babel/polyfill");

var app = (0, _express["default"])();
app.use(_express["default"].json());
app.use((0, _morgan["default"])('dev'));
app.use('/api', _index["default"]);
app.listen(8000, function () {
  console.log('se esta usando el puerto 3000');
});