'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _webVsStyle = require('@vivintsolar-oss/web-vs-style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VSInput = function (_Component) {
  _inherits(VSInput, _Component);

  function VSInput() {
    _classCallCheck(this, VSInput);

    return _possibleConstructorReturn(this, (VSInput.__proto__ || Object.getPrototypeOf(VSInput)).apply(this, arguments));
  }

  _createClass(VSInput, [{
    key: 'borderState',
    value: function borderState() {
      if (this.props.disable) {
        return '1px dashed ' + _webVsStyle.LIGHT_GRAY;
      } else if (this.props.active) {
        return '2px solid ' + _webVsStyle.GREEN;
      } else if (this.props.error) {
        return '2px solid ' + _webVsStyle.ERROR;
      }

      return '1px solid ' + _webVsStyle.BORDER_GRAY;
    }
  }, {
    key: 'labelState',
    value: function labelState() {
      if (this.props.active) {
        return _webVsStyle.GREEN;
      } else if (this.props.error) {
        return _webVsStyle.ERROR;
      } else if (this.props.dark) {
        return _webVsStyle.WHITE;
      }

      return _webVsStyle.DARK_GRAY;
    }
  }, {
    key: 'widthState',
    value: function widthState() {
      var size = this.props.size;


      if (size === 'large') {
        return '544px';
      } else if (size === 'medium') {
        return '256px';
      } else if (size === 'small') {
        return '160px';
      }
    }
  }, {
    key: 'heightState',
    value: function heightState() {
      if (this.props.size) {
        return '48px';
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          error = _props.error,
          label = _props.label,
          name = _props.name,
          className = _props.className,
          handleChange = _props.handleChange;


      var styles = {
        wrapper: {
          display: 'grid'
        },
        labelWrapper: {
          width: '100%',
          marginTop: _webVsStyle.ELEMENT_PADDING
        },
        input: {
          width: this.widthState(),
          height: this.heightState(),
          borderRadius: _webVsStyle.BORDER_RADIUS,
          marginBottom: _webVsStyle.ELEMENT_PADDING,
          marginTop: _webVsStyle.ELEMENT_PADDING,
          padding: _webVsStyle.INNER_PADDING,
          border: this.borderState(),
          backgroundColor: 'transparent',
          fontSize: _webVsStyle.FONT_SIZE
        },
        label: {
          color: this.labelState(),
          fontSize: _webVsStyle.LABEL_SIZE,
          fontFamily: _webVsStyle.FONT
        },
        error: {
          color: _webVsStyle.ERROR,
          fontSize: _webVsStyle.LABEL_SIZE,
          fontFamily: _webVsStyle.FONT
        }
      };

      return _react2.default.createElement(
        'label',
        { htmlFor: name, style: styles.wrapper },
        _react2.default.createElement(
          'span',
          { style: styles.label },
          label
        ),
        _react2.default.createElement('input', {
          className: className,
          style: styles.input,
          type: 'text',
          onChange: handleChange,
          name: name
        }),
        error ? _react2.default.createElement(
          'span',
          { style: styles.error },
          error
        ) : null
      );
    }
  }]);

  return VSInput;
}(_react.Component);

VSInput.propTypes = {
  error: _propTypes2.default.string,
  disable: _propTypes2.default.bool,
  active: _propTypes2.default.bool,
  dark: _propTypes2.default.bool,
  size: _propTypes2.default.string,
  label: _propTypes2.default.string,
  name: _propTypes2.default.string,
  className: _propTypes2.default.string,
  handleChange: _propTypes2.default.function
};

VSInput.defaultProps = {
  error: null,
  disable: false,
  active: false,
  label: 'label'
};

exports.default = VSInput;