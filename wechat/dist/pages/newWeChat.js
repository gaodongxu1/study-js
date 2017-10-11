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
      // src: '',
      give: '../photo/4.jpg',
      like: '../photo/1.png',
      right: '../photo/2.jpg',
      myself: '../photo/myself.jpg',
      girlfriend: '../photo/girlfriend.jpg',
      friend: '../photo/friend.jpg',
      mother: '../photo/mother.jpg',
      elders: '../photo/elders.jpg',
      colleagues: '../photo/colleagues.jpg',
      father: '../photo/father.jpg',
      boy: '../photo/boy.jpg',
      husbands: '../photo/husbands.jpg',
      wifes: '老婆/女票',
      sister: '姐妹/闺蜜',
      mom: '妈妈',
      wifess: '../photo/friend.jpg',
      sisters: '../photo/girlfriend.jpg',
      moms: '../photo/mother.jpg',
      color: '',
      colorshe: 'red',
      solidshe: 'red',
      solidhe: 'white'
    }, _this.methods = {
      she: function she() {
        var self = this;
        self.color = 'black';
        self.colorshe = 'red';
        self.solidshe = 'red';
        self.solidhe = 'white';
        self.wifes = '老婆/女票';
        self.sister = '姐妹/闺蜜';
        self.mom = '妈妈';
        self.wifess = '../photo/friend.jpg';
        self.sisters = '../photo/girlfriend.jpg';
        self.moms = '../photo/mother.jpg';
      },
      he: function he() {
        var self = this;
        self.color = 'red';
        self.colorshe = 'black';
        self.solidshe = 'white';
        self.solidhe = 'red';
        self.wifes = '老公/男票';
        self.sister = '兄弟/基友';
        self.mom = '爸爸';
        self.moms = '../photo/father.jpg';
        self.wifess = '../photo/boy.jpg';
        self.sisters = '../photo/husbands.jpg';
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/newWeChat'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ld1dlQ2hhdC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwiZ2l2ZSIsImxpa2UiLCJyaWdodCIsIm15c2VsZiIsImdpcmxmcmllbmQiLCJmcmllbmQiLCJtb3RoZXIiLCJlbGRlcnMiLCJjb2xsZWFndWVzIiwiZmF0aGVyIiwiYm95IiwiaHVzYmFuZHMiLCJ3aWZlcyIsInNpc3RlciIsIm1vbSIsIndpZmVzcyIsInNpc3RlcnMiLCJtb21zIiwiY29sb3IiLCJjb2xvcnNoZSIsInNvbGlkc2hlIiwic29saWRoZSIsIm1ldGhvZHMiLCJzaGUiLCJzZWxmIiwiaGUiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlUQyxJLEdBQU87QUFDTDtBQUNBQyxZQUFNLGdCQUZEO0FBR0xDLFlBQU0sZ0JBSEQ7QUFJTEMsYUFBTyxnQkFKRjtBQUtMQyxjQUFRLHFCQUxIO0FBTUxDLGtCQUFZLHlCQU5QO0FBT0xDLGNBQVEscUJBUEg7QUFRTEMsY0FBUSxxQkFSSDtBQVNMQyxjQUFRLHFCQVRIO0FBVUxDLGtCQUFZLHlCQVZQO0FBV0xDLGNBQVEscUJBWEg7QUFZTEMsV0FBSyxrQkFaQTtBQWFMQyxnQkFBVSx1QkFiTDtBQWNMQyxhQUFPLE9BZEY7QUFlTEMsY0FBUSxPQWZIO0FBZ0JMQyxXQUFLLElBaEJBO0FBaUJMQyxjQUFRLHFCQWpCSDtBQWtCTEMsZUFBUyx5QkFsQko7QUFtQkxDLFlBQU0scUJBbkJEO0FBb0JMQyxhQUFPLEVBcEJGO0FBcUJMQyxnQkFBVSxLQXJCTDtBQXNCTEMsZ0JBQVUsS0F0Qkw7QUF1QkxDLGVBQVM7QUF2QkosSyxRQXlCUEMsTyxHQUFVO0FBQ1JDLFNBRFEsaUJBQ0Y7QUFDSixZQUFJQyxPQUFPLElBQVg7QUFDQUEsYUFBS04sS0FBTCxHQUFhLE9BQWI7QUFDQU0sYUFBS0wsUUFBTCxHQUFnQixLQUFoQjtBQUNBSyxhQUFLSixRQUFMLEdBQWdCLEtBQWhCO0FBQ0FJLGFBQUtILE9BQUwsR0FBZSxPQUFmO0FBQ0FHLGFBQUtaLEtBQUwsR0FBYSxPQUFiO0FBQ0FZLGFBQUtYLE1BQUwsR0FBYyxPQUFkO0FBQ0FXLGFBQUtWLEdBQUwsR0FBVyxJQUFYO0FBQ0FVLGFBQUtULE1BQUwsR0FBYyxxQkFBZDtBQUNBUyxhQUFLUixPQUFMLEdBQWUseUJBQWY7QUFDQVEsYUFBS1AsSUFBTCxHQUFZLHFCQUFaO0FBQ0QsT0FiTztBQWNSUSxRQWRRLGdCQWNIO0FBQ0gsWUFBSUQsT0FBTyxJQUFYO0FBQ0FBLGFBQUtOLEtBQUwsR0FBYSxLQUFiO0FBQ0FNLGFBQUtMLFFBQUwsR0FBZ0IsT0FBaEI7QUFDQUssYUFBS0osUUFBTCxHQUFnQixPQUFoQjtBQUNBSSxhQUFLSCxPQUFMLEdBQWUsS0FBZjtBQUNBRyxhQUFLWixLQUFMLEdBQWEsT0FBYjtBQUNBWSxhQUFLWCxNQUFMLEdBQWMsT0FBZDtBQUNBVyxhQUFLVixHQUFMLEdBQVcsSUFBWDtBQUNBVSxhQUFLUCxJQUFMLEdBQVkscUJBQVo7QUFDQU8sYUFBS1QsTUFBTCxHQUFjLGtCQUFkO0FBQ0FTLGFBQUtSLE9BQUwsR0FBZSx1QkFBZjtBQUNEO0FBMUJPLEs7Ozs7OzZCQTRCRCxDQUFHOzs7O0VBMURxQixlQUFLVSxJOztrQkFBbkI5QixLIiwiZmlsZSI6Im5ld1dlQ2hhdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfnpLznianor7QnXG4gIH1cblxuICBkYXRhID0ge1xuICAgIC8vIHNyYzogJycsXG4gICAgZ2l2ZTogJy4uL3Bob3RvLzQuanBnJyxcbiAgICBsaWtlOiAnLi4vcGhvdG8vMS5wbmcnLFxuICAgIHJpZ2h0OiAnLi4vcGhvdG8vMi5qcGcnLFxuICAgIG15c2VsZjogJy4uL3Bob3RvL215c2VsZi5qcGcnLFxuICAgIGdpcmxmcmllbmQ6ICcuLi9waG90by9naXJsZnJpZW5kLmpwZycsXG4gICAgZnJpZW5kOiAnLi4vcGhvdG8vZnJpZW5kLmpwZycsXG4gICAgbW90aGVyOiAnLi4vcGhvdG8vbW90aGVyLmpwZycsXG4gICAgZWxkZXJzOiAnLi4vcGhvdG8vZWxkZXJzLmpwZycsXG4gICAgY29sbGVhZ3VlczogJy4uL3Bob3RvL2NvbGxlYWd1ZXMuanBnJyxcbiAgICBmYXRoZXI6ICcuLi9waG90by9mYXRoZXIuanBnJyxcbiAgICBib3k6ICcuLi9waG90by9ib3kuanBnJyxcbiAgICBodXNiYW5kczogJy4uL3Bob3RvL2h1c2JhbmRzLmpwZycsXG4gICAgd2lmZXM6ICfogIHlqYYv5aWz56WoJyxcbiAgICBzaXN0ZXI6ICflp5Dlprkv6Ze66JycJyxcbiAgICBtb206ICflpojlpognLFxuICAgIHdpZmVzczogJy4uL3Bob3RvL2ZyaWVuZC5qcGcnLFxuICAgIHNpc3RlcnM6ICcuLi9waG90by9naXJsZnJpZW5kLmpwZycsXG4gICAgbW9tczogJy4uL3Bob3RvL21vdGhlci5qcGcnLFxuICAgIGNvbG9yOiAnJyxcbiAgICBjb2xvcnNoZTogJ3JlZCcsXG4gICAgc29saWRzaGU6ICdyZWQnLFxuICAgIHNvbGlkaGU6ICd3aGl0ZSdcbiAgfVxuICBtZXRob2RzID0ge1xuICAgIHNoZSgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgc2VsZi5jb2xvciA9ICdibGFjaydcbiAgICAgIHNlbGYuY29sb3JzaGUgPSAncmVkJ1xuICAgICAgc2VsZi5zb2xpZHNoZSA9ICdyZWQnXG4gICAgICBzZWxmLnNvbGlkaGUgPSAnd2hpdGUnXG4gICAgICBzZWxmLndpZmVzID0gJ+iAgeWphi/lpbPnpagnXG4gICAgICBzZWxmLnNpc3RlciA9ICflp5Dlprkv6Ze66JycJ1xuICAgICAgc2VsZi5tb20gPSAn5aaI5aaIJ1xuICAgICAgc2VsZi53aWZlc3MgPSAnLi4vcGhvdG8vZnJpZW5kLmpwZydcbiAgICAgIHNlbGYuc2lzdGVycyA9ICcuLi9waG90by9naXJsZnJpZW5kLmpwZydcbiAgICAgIHNlbGYubW9tcyA9ICcuLi9waG90by9tb3RoZXIuanBnJ1xuICAgIH0sXG4gICAgaGUoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYuY29sb3IgPSAncmVkJ1xuICAgICAgc2VsZi5jb2xvcnNoZSA9ICdibGFjaydcbiAgICAgIHNlbGYuc29saWRzaGUgPSAnd2hpdGUnXG4gICAgICBzZWxmLnNvbGlkaGUgPSAncmVkJ1xuICAgICAgc2VsZi53aWZlcyA9ICfogIHlhawv55S356WoJ1xuICAgICAgc2VsZi5zaXN0ZXIgPSAn5YWE5byfL+WfuuWPiydcbiAgICAgIHNlbGYubW9tID0gJ+eIuOeIuCdcbiAgICAgIHNlbGYubW9tcyA9ICcuLi9waG90by9mYXRoZXIuanBnJ1xuICAgICAgc2VsZi53aWZlc3MgPSAnLi4vcGhvdG8vYm95LmpwZydcbiAgICAgIHNlbGYuc2lzdGVycyA9ICcuLi9waG90by9odXNiYW5kcy5qcGcnXG4gICAgfVxuICB9XG4gIG9uTG9hZCgpIHsgfVxufVxuIl19