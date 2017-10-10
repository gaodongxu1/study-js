'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '礼物说'
    }, _this.data = {
      src: '',
      give: '../photo/4.jpg',
      like: '../photo/1.png',
      right: '../photo/2.jpg',
      myself: '../photo/myself.jpg',
      girlfriend: '../photo/girlfriend.jpg',
      friend: '../photo/friend.jpg',
      mother: '../photo/mother.jpg',
      elders: '../photo/elders.jpg',
      colleagues: '../photo/colleagues.jpg'
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/WeChat'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIldlQ2hhdC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwic3JjIiwiZ2l2ZSIsImxpa2UiLCJyaWdodCIsIm15c2VsZiIsImdpcmxmcmllbmQiLCJmcmllbmQiLCJtb3RoZXIiLCJlbGRlcnMiLCJjb2xsZWFndWVzIiwibWV0aG9kcyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBSVRDLEksR0FBTztBQUNMQyxXQUFLLEVBREE7QUFFTEMsWUFBTSxnQkFGRDtBQUdMQyxZQUFNLGdCQUhEO0FBSUxDLGFBQU8sZ0JBSkY7QUFLTEMsY0FBUSxxQkFMSDtBQU1MQyxrQkFBWSx5QkFOUDtBQU9MQyxjQUFRLHFCQVBIO0FBUUxDLGNBQVEscUJBUkg7QUFTTEMsY0FBUSxxQkFUSDtBQVVMQyxrQkFBWTtBQVZQLEssUUFZUEMsTyxHQUFVLEU7Ozs7OzZCQUdELENBQUc7Ozs7RUFwQnFCLGVBQUtDLEk7O2tCQUFuQmYsSyIsImZpbGUiOiJXZUNoYXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn56S854mp6K+0J1xuICB9XG5cbiAgZGF0YSA9IHtcbiAgICBzcmM6ICcnLFxuICAgIGdpdmU6ICcuLi9waG90by80LmpwZycsXG4gICAgbGlrZTogJy4uL3Bob3RvLzEucG5nJyxcbiAgICByaWdodDogJy4uL3Bob3RvLzIuanBnJyxcbiAgICBteXNlbGY6ICcuLi9waG90by9teXNlbGYuanBnJyxcbiAgICBnaXJsZnJpZW5kOiAnLi4vcGhvdG8vZ2lybGZyaWVuZC5qcGcnLFxuICAgIGZyaWVuZDogJy4uL3Bob3RvL2ZyaWVuZC5qcGcnLFxuICAgIG1vdGhlcjogJy4uL3Bob3RvL21vdGhlci5qcGcnLFxuICAgIGVsZGVyczogJy4uL3Bob3RvL2VsZGVycy5qcGcnLFxuICAgIGNvbGxlYWd1ZXM6ICcuLi9waG90by9jb2xsZWFndWVzLmpwZydcbiAgfVxuICBtZXRob2RzID0ge1xuXG4gIH1cbiAgb25Mb2FkKCkgeyB9XG59XG4iXX0=