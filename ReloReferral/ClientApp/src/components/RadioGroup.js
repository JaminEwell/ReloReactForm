'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RadioGroup = exports.Radio = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Radio = exports.Radio = function (_React$Component) {
  _inherits(Radio, _React$Component);

  function Radio() {
    _classCallCheck(this, Radio);

    return _possibleConstructorReturn(this, (Radio.__proto__ || Object.getPrototypeOf(Radio)).apply(this, arguments));
  }

  _createClass(Radio, [{
    key: 'render',
    value: function render() {
      var _context$radioGroup = this.context.radioGroup,
          name = _context$radioGroup.name,
          selectedValue = _context$radioGroup.selectedValue,
          onChange = _context$radioGroup.onChange;

      var optional = {};
      if (selectedValue !== undefined) {
        optional.checked = this.props.value === selectedValue;
      }
      if (typeof onChange === 'function') {
        optional.onChange = onChange.bind(null, this.props.value);
      }

      return _react2.default.createElement('input', _extends({}, this.props, {
        role: 'radio',
        'aria-checked': optional.checked,
        type: 'radio',
        name: name
      }, optional));
    }
  }]);

  return Radio;
}(_react2.default.Component);

;

Radio.contextTypes = {
  radioGroup: _propTypes2.default.object
};

var RadioGroup = exports.RadioGroup = function (_React$Component2) {
  _inherits(RadioGroup, _React$Component2);

  function RadioGroup() {
    _classCallCheck(this, RadioGroup);

    return _possibleConstructorReturn(this, (RadioGroup.__proto__ || Object.getPrototypeOf(RadioGroup)).apply(this, arguments));
  }

  _createClass(RadioGroup, [{
    key: 'getChildContext',
    value: function getChildContext() {
      var _props = this.props,
          name = _props.name,
          selectedValue = _props.selectedValue,
          onChange = _props.onChange;

      return {
        radioGroup: {
          name: name, selectedValue: selectedValue, onChange: onChange
        }
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          Component = _props2.Component,
          name = _props2.name,
          selectedValue = _props2.selectedValue,
          onChange = _props2.onChange,
          children = _props2.children,
          rest = _objectWithoutProperties(_props2, ['Component', 'name', 'selectedValue', 'onChange', 'children']);

      return _react2.default.createElement(
        Component,
        _extends({ role: 'radiogroup' }, rest),
        children
      );
    }
  }]);

  return RadioGroup;
}(_react2.default.Component);

;

RadioGroup.defaultProps = {
  Component: "div"
};

RadioGroup.propTypes = {
  name: _propTypes2.default.string,
  selectedValue: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.bool]),
  onChange: _propTypes2.default.func,
  children: _propTypes2.default.node.isRequired,
  Component: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func, _propTypes2.default.object])
};

RadioGroup.childContextTypes = {
  radioGroup: _propTypes2.default.object
};