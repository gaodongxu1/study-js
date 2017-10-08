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
      items: [{ name: 'USA', value: '美国' }, { name: 'CHN', value: '中国', checked: 'true' }, { name: 'BRA', value: '巴西' }, { name: 'JPN', value: '日本' }, { name: 'ENG', value: '英国' }]
    }, _this.methods = {
      ontap: function ontap() {
        var self = this;
        self.age++;
      },

      bindChange: function bindChange(e) {
        var val = e.detail.value;
        this.setData({
          year: this.data.years[val[0]],
          month: this.data.months[val[1]],
          day: this.data.days[val[2]]
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImRhdGUiLCJEYXRlIiwieWVhcnMiLCJtb250aHMiLCJkYXlzIiwiaSIsImdldEZ1bGxZZWFyIiwicHVzaCIsIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJhZ2UiLCJ5ZWFyIiwibW9udGgiLCJkYXkiLCJ5ZWFyMSIsInZhbHVlIiwiaXRlbXMiLCJuYW1lIiwiY2hlY2tlZCIsIm1ldGhvZHMiLCJvbnRhcCIsInNlbGYiLCJiaW5kQ2hhbmdlIiwiZSIsInZhbCIsImRldGFpbCIsInNldERhdGEiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBTyxJQUFJQyxJQUFKLEVBQWI7QUFDRixJQUFNQyxRQUFRLEVBQWQ7QUFDQSxJQUFNQyxTQUFTLEVBQWY7QUFDQSxJQUFNQyxPQUFPLEVBQWI7QUFDQSxLQUFLLElBQUlDLElBQUksSUFBYixFQUFtQkEsS0FBS0wsS0FBS00sV0FBTCxFQUF4QixFQUE0Q0QsR0FBNUMsRUFBaUQ7QUFDN0NILFFBQU1LLElBQU4sQ0FBV0YsQ0FBWDtBQUNIOztBQUVELEtBQUssSUFBSUEsS0FBSSxDQUFiLEVBQWdCQSxNQUFLLEVBQXJCLEVBQXlCQSxJQUF6QixFQUE4QjtBQUMxQkYsU0FBT0ksSUFBUCxDQUFZRixFQUFaO0FBQ0g7QUFDRCxLQUFLLElBQUlBLE1BQUksQ0FBYixFQUFnQkEsT0FBSyxFQUFyQixFQUF5QkEsS0FBekIsRUFBOEI7QUFDMUJELE9BQUtHLElBQUwsQ0FBVUYsR0FBVjtBQUNIOztJQUNzQkcsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLFdBQUssRUFEQTtBQUVMVixhQUFPQSxLQUZGO0FBR0xXLFlBQU1iLEtBQUtNLFdBQUwsRUFIRDtBQUlMSCxjQUFRQSxNQUpIO0FBS0xXLGFBQU8sQ0FMRjtBQU1MVixZQUFNQSxJQU5EO0FBT0xXLFdBQUssQ0FQQTtBQVFMQyxhQUFPaEIsS0FBS00sV0FBTCxFQVJGO0FBU0xXLGFBQU8sQ0FBQyxJQUFELEVBQU8sQ0FBUCxFQUFVLENBQVYsQ0FURjtBQVVMQyxhQUFPLENBQ1AsRUFBQ0MsTUFBTSxLQUFQLEVBQWNGLE9BQU8sSUFBckIsRUFETyxFQUVQLEVBQUNFLE1BQU0sS0FBUCxFQUFjRixPQUFPLElBQXJCLEVBQTJCRyxTQUFTLE1BQXBDLEVBRk8sRUFHUCxFQUFDRCxNQUFNLEtBQVAsRUFBY0YsT0FBTyxJQUFyQixFQUhPLEVBSVAsRUFBQ0UsTUFBTSxLQUFQLEVBQWNGLE9BQU8sSUFBckIsRUFKTyxFQUtQLEVBQUNFLE1BQU0sS0FBUCxFQUFjRixPQUFPLElBQXJCLEVBTE87QUFWRixLLFFBa0JQSSxPLEdBQVU7QUFDUkMsV0FEUSxtQkFDQTtBQUNOLFlBQUlDLE9BQU8sSUFBWDtBQUNBQSxhQUFLWCxHQUFMO0FBQ0QsT0FKTzs7QUFLUlksa0JBQVksb0JBQVNDLENBQVQsRUFBWTtBQUN0QixZQUFNQyxNQUFNRCxFQUFFRSxNQUFGLENBQVNWLEtBQXJCO0FBQ0EsYUFBS1csT0FBTCxDQUFhO0FBQ1hmLGdCQUFNLEtBQUtGLElBQUwsQ0FBVVQsS0FBVixDQUFnQndCLElBQUksQ0FBSixDQUFoQixDQURLO0FBRVhaLGlCQUFPLEtBQUtILElBQUwsQ0FBVVIsTUFBVixDQUFpQnVCLElBQUksQ0FBSixDQUFqQixDQUZJO0FBR1hYLGVBQUssS0FBS0osSUFBTCxDQUFVUCxJQUFWLENBQWVzQixJQUFJLENBQUosQ0FBZjtBQUhNLFNBQWI7QUFLRDtBQVpPLEs7Ozs7OzZCQWNELENBQUU7Ozs7RUFwQ3NCLGVBQUtHLEk7O2tCQUFuQnJCLEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICBjb25zdCBkYXRlID0gbmV3IERhdGUoKVxuY29uc3QgeWVhcnMgPSBbXVxuY29uc3QgbW9udGhzID0gW11cbmNvbnN0IGRheXMgPSBbXVxuZm9yIChsZXQgaSA9IDE5OTA7IGkgPD0gZGF0ZS5nZXRGdWxsWWVhcigpOyBpKyspIHtcbiAgICB5ZWFycy5wdXNoKGkpXG59XG5cbmZvciAobGV0IGkgPSAxOyBpIDw9IDEyOyBpKyspIHtcbiAgICBtb250aHMucHVzaChpKVxufVxuZm9yIChsZXQgaSA9IDE7IGkgPD0gMzE7IGkrKykge1xuICAgIGRheXMucHVzaChpKVxufVxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+iHquaIkeS7i+e7jSdcbiAgICB9XG4gICAgZGF0YSA9IHtcbiAgICAgIGFnZTogMTgsXG4gICAgICB5ZWFyczogeWVhcnMsXG4gICAgICB5ZWFyOiBkYXRlLmdldEZ1bGxZZWFyKCksXG4gICAgICBtb250aHM6IG1vbnRocyxcbiAgICAgIG1vbnRoOiAyLFxuICAgICAgZGF5czogZGF5cyxcbiAgICAgIGRheTogMixcbiAgICAgIHllYXIxOiBkYXRlLmdldEZ1bGxZZWFyKCksXG4gICAgICB2YWx1ZTogWzk5OTksIDEsIDFdLFxuICAgICAgaXRlbXM6IFtcbiAgICAgIHtuYW1lOiAnVVNBJywgdmFsdWU6ICfnvo7lm70nfSxcbiAgICAgIHtuYW1lOiAnQ0hOJywgdmFsdWU6ICfkuK3lm70nLCBjaGVja2VkOiAndHJ1ZSd9LFxuICAgICAge25hbWU6ICdCUkEnLCB2YWx1ZTogJ+W3tOilvyd9LFxuICAgICAge25hbWU6ICdKUE4nLCB2YWx1ZTogJ+aXpeacrCd9LFxuICAgICAge25hbWU6ICdFTkcnLCB2YWx1ZTogJ+iLseWbvSd9XG4gICAgICBdXG4gICAgfVxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBvbnRhcCgpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICAgIHNlbGYuYWdlKytcbiAgICAgIH0sXG4gICAgICBiaW5kQ2hhbmdlOiBmdW5jdGlvbihlKSB7XG4gICAgICAgIGNvbnN0IHZhbCA9IGUuZGV0YWlsLnZhbHVlXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgeWVhcjogdGhpcy5kYXRhLnllYXJzW3ZhbFswXV0sXG4gICAgICAgICAgbW9udGg6IHRoaXMuZGF0YS5tb250aHNbdmFsWzFdXSxcbiAgICAgICAgICBkYXk6IHRoaXMuZGF0YS5kYXlzW3ZhbFsyXV1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gICAgb25Mb2FkKCkge31cbiAgfVxuIl19