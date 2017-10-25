'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VSButton = function (_Component) {
  _inherits(VSButton, _Component);

  function VSButton(props) {
    _classCallCheck(this, VSButton);

    var _this = _possibleConstructorReturn(this, (VSButton.__proto__ || Object.getPrototypeOf(VSButton)).call(this, props));

    _this.toggleHover = _this.toggleHover.bind(_this);
    _this.toggleActive = _this.toggleActive.bind(_this);

    _this.state = {
      hover: false,
      active: false,
      dark: false
    };
    return _this;
  }

  _createClass(VSButton, [{
    key: 'toggleHover',
    value: function toggleHover() {
      this.setState({ hover: !this.state.hover });
    }
  }, {
    key: 'toggleActive',
    value: function toggleActive() {
      this.setState({ active: !this.state.active });
    }
  }, {
    key: 'backgroundColorState',
    value: function backgroundColorState() {
      if (this.props.dark) {
        if (this.props.disabled) {
          return 'rgba(255, 255, 255, 0.12)';
        } else if (this.state.active) {
          return '#E96300';
        } else if (this.state.hover) {
          return '#FFE7D7';
        } else if (this.props.color) {
          return this.props.color;
        }

        return '#fff';
      }

      if (this.props.disabled) {
        return 'rgba(0, 0, 0, 0.12)';
      } else if (this.state.active) {
        return '#DE5E02';
      } else if (this.state.hover) {
        return '#FD8835';
      } else if (this.props.color) {
        return this.props.color;
      }

      return '#FA6B03';
    }
  }, {
    key: 'textColorState',
    value: function textColorState() {
      if (this.props.dark) {
        if (this.props.disabled) {
          return 'rgba(255, 255, 255, 0.26)';
        } else if (this.state.active) {
          return '#fff';
        } else if (this.state.hover) {
          return '#FA6B03';
        } else if (this.props.color) {
          return this.props.color;
        }

        return '#FA6B03';
      }

      if (this.props.disabled) {
        return 'rgba(0, 0, 0, 0.26)';
      } else if (this.state.active) {
        return '#fff';
      } else if (this.state.hover) {
        return '#fff';
      }

      return '#fff';
    }
  }, {
    key: 'sizeState',
    value: function sizeState() {
      if (this.props.size === 'large') {
        return '133px';
      } else if (this.props.size === 'medium') {
        return '77px';
      } else if (this.props.size === 'small') {
        return '21px';
      }

      return '100%';
    }
  }, {
    key: 'render',
    value: function render() {
      var style = {
        backgroundColor: this.backgroundColorState(),
        color: this.textColorState(),
        textTransform: 'uppercase',
        border: 'none',
        padding: '15px ' + this.sizeState(),
        height: '48px',
        borderRadius: '4px',
        fontSize: '16px',
        fontFamily: 'IntCircularPro, IntCircularProBook, Arial',
        WebkitFontSmoothing: 'antialiased',
        cursor: 'pointer'
      };

      return _react2.default.createElement(
        'button',
        {
          style: style,
          onMouseEnter: this.toggleHover,
          onMouseLeave: this.toggleHover,
          onMouseDown: this.toggleActive,
          onMouseUp: this.toggleActive,
          disabled: this.props.disabled
        },
        this.props.children
      );
    }
  }]);

  return VSButton;
}(_react.Component);

exports.default = VSButton;