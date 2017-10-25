'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

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
        return '1px dashed #8e8e93';
      } else if (this.props.active) {
        return '2px solid #3fbfad';
      } else if (this.props.error) {
        return '2px solid #E74C3C';
      }

      return '1px solid #D9DADB';
    }
  }, {
    key: 'labelState',
    value: function labelState() {
      if (this.props.active) {
        return '#3fbfad';
      } else if (this.props.error) {
        return '#E74C3C';
      } else if (this.props.dark) {
        return '#ffffff';
      }

      return '#37404B';
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
          handleChange = _props.handleChange;


      var styles = {
        wrapper: {
          display: 'grid'
        },
        labelWrapper: {
          width: '100%',
          marginTop: '8px'
        },
        input: {
          width: this.widthState(),
          height: this.heightState(),
          borderRadius: '4px',
          marginBottom: '8px',
          marginTop: '8px',
          padding: '16px',
          border: this.borderState(),
          backgroundColor: 'transparent',
          fontSize: '16px'
        },
        label: {
          color: this.labelState(),
          fontSize: '12px',
          fontFamily: 'IntCircularPro, Arial'
        },
        error: {
          color: '#E74C3C',
          fontSize: '12px',
          fontFamily: 'IntCircularPro, Arial'
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
        _react2.default.createElement('input', _extends({}, this.props, {
          style: styles.input,
          type: 'text',
          onChange: handleChange,
          name: name
        })),
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
  handleChange: _propTypes2.default.function
};

VSInput.defaultProps = {
  error: null,
  disable: false,
  active: false,
  label: 'label'
};

exports.default = VSInput;