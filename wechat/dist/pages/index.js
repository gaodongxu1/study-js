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

var date = new Date();
var years = [];
var months = [];
var days = [];
for (var i = 1990; i <= date.getFullYear(); i++) {
  years.push(i);
}

for (var _i = 1; _i <= 12; _i++) {
  months.push(_i);
}
for (var _i2 = 1; _i2 <= 31; _i2++) {
  days.push(_i2);
}

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
      navigationBarTitleText: '自我介绍'
    }, _this.data = {
      age: 18,
      years: years,
      year: date.getFullYear(),
      months: months,
      month: 2,
      days: days,
      day: 2,
      year1: date.getFullYear(),
      value: [9999, 1, 1],
      items: [{ name: 'USA', value: '美国' }, { name: 'CHN', value: '中国', checked: 'true' }, { name: 'BRA', value: '巴西' }, { name: 'JPN', value: '日本' }, { name: 'ENG', value: '英国' }],
      image: ''
    }, _this.methods = {
      ontap: function ontap() {
        var self = this;
        self.age++;
      },
      date: function date(e) {
        var self = this;
        var val = e.detail.value;
        self.year = this.years[val[0]];
        self.month = this.months[val[1]];
        self.day = this.days[val[2]];
      },
      vedio: function vedio() {
        var self = this;
        _wepy2.default.chooseVideo({
          sourceType: ['album', 'camera'],
          maxDuration: 60,
          camera: 'back',
          success: function success(res) {
            self.setData({
              vedio: res.tempFilePath
            });
          }
        });
      },
      image: function image() {
        var self = this;
        _wepy2.default.chooseImage({
          count: 1, // 默认9
          sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
          sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
          success: function success(res) {
            // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
            self.image = res.tempFilePaths[0];
            self.setData({
              image: res.tempFilePaths[0]
            });
          }
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImRhdGUiLCJEYXRlIiwieWVhcnMiLCJtb250aHMiLCJkYXlzIiwiaSIsImdldEZ1bGxZZWFyIiwicHVzaCIsIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJhZ2UiLCJ5ZWFyIiwibW9udGgiLCJkYXkiLCJ5ZWFyMSIsInZhbHVlIiwiaXRlbXMiLCJuYW1lIiwiY2hlY2tlZCIsImltYWdlIiwibWV0aG9kcyIsIm9udGFwIiwic2VsZiIsImUiLCJ2YWwiLCJkZXRhaWwiLCJ2ZWRpbyIsImNob29zZVZpZGVvIiwic291cmNlVHlwZSIsIm1heER1cmF0aW9uIiwiY2FtZXJhIiwic3VjY2VzcyIsInJlcyIsInNldERhdGEiLCJ0ZW1wRmlsZVBhdGgiLCJjaG9vc2VJbWFnZSIsImNvdW50Iiwic2l6ZVR5cGUiLCJ0ZW1wRmlsZVBhdGhzIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU8sSUFBSUMsSUFBSixFQUFiO0FBQ0YsSUFBTUMsUUFBUSxFQUFkO0FBQ0EsSUFBTUMsU0FBUyxFQUFmO0FBQ0EsSUFBTUMsT0FBTyxFQUFiO0FBQ0EsS0FBSyxJQUFJQyxJQUFJLElBQWIsRUFBbUJBLEtBQUtMLEtBQUtNLFdBQUwsRUFBeEIsRUFBNENELEdBQTVDLEVBQWlEO0FBQzdDSCxRQUFNSyxJQUFOLENBQVdGLENBQVg7QUFDSDs7QUFFRCxLQUFLLElBQUlBLEtBQUksQ0FBYixFQUFnQkEsTUFBSyxFQUFyQixFQUF5QkEsSUFBekIsRUFBOEI7QUFDMUJGLFNBQU9JLElBQVAsQ0FBWUYsRUFBWjtBQUNIO0FBQ0QsS0FBSyxJQUFJQSxNQUFJLENBQWIsRUFBZ0JBLE9BQUssRUFBckIsRUFBeUJBLEtBQXpCLEVBQThCO0FBQzFCRCxPQUFLRyxJQUFMLENBQVVGLEdBQVY7QUFDSDs7SUFDc0JHLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxXQUFLLEVBREE7QUFFTFYsYUFBT0EsS0FGRjtBQUdMVyxZQUFNYixLQUFLTSxXQUFMLEVBSEQ7QUFJTEgsY0FBUUEsTUFKSDtBQUtMVyxhQUFPLENBTEY7QUFNTFYsWUFBTUEsSUFORDtBQU9MVyxXQUFLLENBUEE7QUFRTEMsYUFBT2hCLEtBQUtNLFdBQUwsRUFSRjtBQVNMVyxhQUFPLENBQUMsSUFBRCxFQUFPLENBQVAsRUFBVSxDQUFWLENBVEY7QUFVTEMsYUFBTyxDQUNQLEVBQUNDLE1BQU0sS0FBUCxFQUFjRixPQUFPLElBQXJCLEVBRE8sRUFFUCxFQUFDRSxNQUFNLEtBQVAsRUFBY0YsT0FBTyxJQUFyQixFQUEyQkcsU0FBUyxNQUFwQyxFQUZPLEVBR1AsRUFBQ0QsTUFBTSxLQUFQLEVBQWNGLE9BQU8sSUFBckIsRUFITyxFQUlQLEVBQUNFLE1BQU0sS0FBUCxFQUFjRixPQUFPLElBQXJCLEVBSk8sRUFLUCxFQUFDRSxNQUFNLEtBQVAsRUFBY0YsT0FBTyxJQUFyQixFQUxPLENBVkY7QUFpQkxJLGFBQU87QUFqQkYsSyxRQW1CUEMsTyxHQUFVO0FBQ1JDLFdBRFEsbUJBQ0E7QUFDTixZQUFJQyxPQUFPLElBQVg7QUFDQUEsYUFBS1osR0FBTDtBQUNELE9BSk87QUFLUlosVUFMUSxnQkFLSHlCLENBTEcsRUFLQTtBQUNOLFlBQUlELE9BQU8sSUFBWDtBQUNBLFlBQU1FLE1BQU1ELEVBQUVFLE1BQUYsQ0FBU1YsS0FBckI7QUFDQU8sYUFBS1gsSUFBTCxHQUFZLEtBQUtYLEtBQUwsQ0FBV3dCLElBQUksQ0FBSixDQUFYLENBQVo7QUFDQUYsYUFBS1YsS0FBTCxHQUFhLEtBQUtYLE1BQUwsQ0FBWXVCLElBQUksQ0FBSixDQUFaLENBQWI7QUFDQUYsYUFBS1QsR0FBTCxHQUFXLEtBQUtYLElBQUwsQ0FBVXNCLElBQUksQ0FBSixDQUFWLENBQVg7QUFDRCxPQVhPO0FBWVJFLFdBWlEsbUJBWUE7QUFDTixZQUFJSixPQUFPLElBQVg7QUFDQSx1QkFBS0ssV0FBTCxDQUFpQjtBQUNmQyxzQkFBWSxDQUFDLE9BQUQsRUFBVSxRQUFWLENBREc7QUFFZkMsdUJBQWEsRUFGRTtBQUdmQyxrQkFBUSxNQUhPO0FBSWZDLG1CQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckJWLGlCQUFLVyxPQUFMLENBQWE7QUFDWFAscUJBQU9NLElBQUlFO0FBREEsYUFBYjtBQUdEO0FBUmMsU0FBakI7QUFVRCxPQXhCTztBQXlCUmYsV0F6QlEsbUJBeUJBO0FBQ04sWUFBSUcsT0FBTyxJQUFYO0FBQ0EsdUJBQUthLFdBQUwsQ0FBaUI7QUFDZkMsaUJBQU8sQ0FEUSxFQUNMO0FBQ1ZDLG9CQUFVLENBQUMsVUFBRCxFQUFhLFlBQWIsQ0FGSyxFQUV1QjtBQUN0Q1Qsc0JBQVksQ0FBQyxPQUFELEVBQVUsUUFBVixDQUhHLEVBR2tCO0FBQ2pDRyxtQkFBUyxpQkFBVUMsR0FBVixFQUFlO0FBQ2xCO0FBQ0pWLGlCQUFLSCxLQUFMLEdBQWFhLElBQUlNLGFBQUosQ0FBa0IsQ0FBbEIsQ0FBYjtBQUNBaEIsaUJBQUtXLE9BQUwsQ0FBYTtBQUNYZCxxQkFBT2EsSUFBSU0sYUFBSixDQUFrQixDQUFsQjtBQURJLGFBQWI7QUFHRDtBQVZjLFNBQWpCO0FBWUQ7QUF2Q08sSzs7Ozs7NkJBeUNELENBQUU7Ozs7RUFoRXNCLGVBQUtDLEk7O2tCQUFuQmpDLEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICBjb25zdCBkYXRlID0gbmV3IERhdGUoKVxuY29uc3QgeWVhcnMgPSBbXVxuY29uc3QgbW9udGhzID0gW11cbmNvbnN0IGRheXMgPSBbXVxuZm9yIChsZXQgaSA9IDE5OTA7IGkgPD0gZGF0ZS5nZXRGdWxsWWVhcigpOyBpKyspIHtcbiAgICB5ZWFycy5wdXNoKGkpXG59XG5cbmZvciAobGV0IGkgPSAxOyBpIDw9IDEyOyBpKyspIHtcbiAgICBtb250aHMucHVzaChpKVxufVxuZm9yIChsZXQgaSA9IDE7IGkgPD0gMzE7IGkrKykge1xuICAgIGRheXMucHVzaChpKVxufVxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+iHquaIkeS7i+e7jSdcbiAgICB9XG4gICAgZGF0YSA9IHtcbiAgICAgIGFnZTogMTgsXG4gICAgICB5ZWFyczogeWVhcnMsXG4gICAgICB5ZWFyOiBkYXRlLmdldEZ1bGxZZWFyKCksXG4gICAgICBtb250aHM6IG1vbnRocyxcbiAgICAgIG1vbnRoOiAyLFxuICAgICAgZGF5czogZGF5cyxcbiAgICAgIGRheTogMixcbiAgICAgIHllYXIxOiBkYXRlLmdldEZ1bGxZZWFyKCksXG4gICAgICB2YWx1ZTogWzk5OTksIDEsIDFdLFxuICAgICAgaXRlbXM6IFtcbiAgICAgIHtuYW1lOiAnVVNBJywgdmFsdWU6ICfnvo7lm70nfSxcbiAgICAgIHtuYW1lOiAnQ0hOJywgdmFsdWU6ICfkuK3lm70nLCBjaGVja2VkOiAndHJ1ZSd9LFxuICAgICAge25hbWU6ICdCUkEnLCB2YWx1ZTogJ+W3tOilvyd9LFxuICAgICAge25hbWU6ICdKUE4nLCB2YWx1ZTogJ+aXpeacrCd9LFxuICAgICAge25hbWU6ICdFTkcnLCB2YWx1ZTogJ+iLseWbvSd9XG4gICAgICBdLFxuICAgICAgaW1hZ2U6ICcnXG4gICAgfVxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBvbnRhcCgpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICAgIHNlbGYuYWdlKytcbiAgICAgIH0sXG4gICAgICBkYXRlKGUpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICAgIGNvbnN0IHZhbCA9IGUuZGV0YWlsLnZhbHVlXG4gICAgICAgIHNlbGYueWVhciA9IHRoaXMueWVhcnNbdmFsWzBdXVxuICAgICAgICBzZWxmLm1vbnRoID0gdGhpcy5tb250aHNbdmFsWzFdXVxuICAgICAgICBzZWxmLmRheSA9IHRoaXMuZGF5c1t2YWxbMl1dXG4gICAgICB9LFxuICAgICAgdmVkaW8oKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgICB3ZXB5LmNob29zZVZpZGVvKHtcbiAgICAgICAgICBzb3VyY2VUeXBlOiBbJ2FsYnVtJywgJ2NhbWVyYSddLFxuICAgICAgICAgIG1heER1cmF0aW9uOiA2MCxcbiAgICAgICAgICBjYW1lcmE6ICdiYWNrJyxcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgIHNlbGYuc2V0RGF0YSh7XG4gICAgICAgICAgICAgIHZlZGlvOiByZXMudGVtcEZpbGVQYXRoXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBpbWFnZSgpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICAgIHdlcHkuY2hvb3NlSW1hZ2Uoe1xuICAgICAgICAgIGNvdW50OiAxLCAvLyDpu5jorqQ5XG4gICAgICAgICAgc2l6ZVR5cGU6IFsnb3JpZ2luYWwnLCAnY29tcHJlc3NlZCddLCAvLyDlj6/ku6XmjIflrprmmK/ljp/lm77ov5jmmK/ljovnvKnlm77vvIzpu5jorqTkuozogIXpg73mnIlcbiAgICAgICAgICBzb3VyY2VUeXBlOiBbJ2FsYnVtJywgJ2NhbWVyYSddLCAvLyDlj6/ku6XmjIflrprmnaXmupDmmK/nm7jlhozov5jmmK/nm7jmnLrvvIzpu5jorqTkuozogIXpg73mnIlcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICAgICAgLy8g6L+U5Zue6YCJ5a6a54Wn54mH55qE5pys5Zyw5paH5Lu26Lev5b6E5YiX6KGo77yMdGVtcEZpbGVQYXRo5Y+v5Lul5L2c5Li6aW1n5qCH562+55qEc3Jj5bGe5oCn5pi+56S65Zu+54mHXG4gICAgICAgICAgICBzZWxmLmltYWdlID0gcmVzLnRlbXBGaWxlUGF0aHNbMF1cbiAgICAgICAgICAgIHNlbGYuc2V0RGF0YSh7XG4gICAgICAgICAgICAgIGltYWdlOiByZXMudGVtcEZpbGVQYXRoc1swXVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICAgIG9uTG9hZCgpIHt9XG4gIH1cbiJdfQ==