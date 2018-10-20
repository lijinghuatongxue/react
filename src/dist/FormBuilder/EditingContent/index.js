'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _drawer = require('antd/es/drawer');

var _drawer2 = _interopRequireDefault(_drawer);

var _slider = require('antd/es/slider');

var _slider2 = _interopRequireDefault(_slider);

var _button = require('antd/es/button');

var _button2 = _interopRequireDefault(_button);

var _col = require('antd/es/col');

var _col2 = _interopRequireDefault(_col);

var _checkbox = require('antd/es/checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _input = require('antd/es/input');

var _input2 = _interopRequireDefault(_input);

var _divider = require('antd/es/divider');

var _divider2 = _interopRequireDefault(_divider);

var _radio = require('antd/es/radio');

var _radio2 = _interopRequireDefault(_radio);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

require('antd/es/drawer/style/css');

require('antd/es/slider/style/css');

require('antd/es/button/style/css');

require('antd/es/col/style/css');

require('antd/es/checkbox/style/css');

require('antd/es/input/style/css');

require('antd/es/divider/style/css');

require('antd/es/radio/style/css');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDraftWysiwyg = require('react-draft-wysiwyg');

require('react-draft-wysiwyg/dist/react-draft-wysiwyg.css');

var _draftJs = require('draft-js');

var _draftjsToHtml = require('draftjs-to-html');

var _draftjsToHtml2 = _interopRequireDefault(_draftjsToHtml);

var _htmlToDraftjs = require('html-to-draftjs');

var _htmlToDraftjs2 = _interopRequireDefault(_htmlToDraftjs);

var _immutabilityHelper = require('immutability-helper');

var _immutabilityHelper2 = _interopRequireDefault(_immutabilityHelper);

var _styled = require('@/styled');

var _Context = require('@/Context');

var _LabelEditor = require('./LabelEditor');

var _LabelEditor2 = _interopRequireDefault(_LabelEditor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//编辑label

var RadioButton = _radio2.default.Button;
var RadioGroup = _radio2.default.Group;

var EditingContent = (0, _Context.FormConsume)(_class = function (_Component) {
  _inherits(EditingContent, _Component);

  function EditingContent() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, EditingContent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = EditingContent.__proto__ || Object.getPrototypeOf(EditingContent)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      position: 'right'
    }, _this.positionChange = function (e) {
      _this.setState({ position: e.target.value });
    }, _this.requireChange = function (e) {
      //必须改变
      var checked = e.target.checked;
      var _this2 = _this,
          _this2$props$state = _this2.props.state,
          data = _this2$props$state.editingData,
          setEditingData = _this2$props$state.actions.setEditingData;

      setEditingData(data, 0, 'required', checked);
    }, _this.optionRowShowChange = function (e) {
      var _this3 = _this,
          _this3$props$state = _this3.props.state,
          data = _this3$props$state.editingData,
          setEditingData = _this3$props$state.actions.setEditingData;

      setEditingData(data, 0, 'optionRowShow', e);
    }, _this.onClose = function () {
      var _this4 = _this,
          setState = _this4.props.setState;

      setState({ editing: false });
    }, _this.fieldNameChange = function (e) {
      //必须改变
      var value = e.target.value;
      var _this5 = _this,
          _this5$props = _this5.props,
          form = _this5$props.form,
          _this5$props$state = _this5$props.state,
          data = _this5$props$state.editingData,
          setEditingData = _this5$props$state.actions.setEditingData;

      setEditingData(data, 0, 'fieldName', value);
    }, _this.requiredMessageChange = function (e) {
      //必须校验信息改变
      var value = e.target.value;
      var _this6 = _this,
          _this6$props = _this6.props,
          form = _this6$props.form,
          _this6$props$state = _this6$props.state,
          data = _this6$props$state.editingData,
          setEditingData = _this6$props$state.actions.setEditingData;

      setEditingData(data, 0, 'requiredMessage', value);
      var fName = data.fieldName || 'invalidField';
      if (!form.getFieldValue(fName)) {
        form.setFieldsValue(_defineProperty({}, fName, 1));
        form.setFieldsValue(_defineProperty({}, fName, ''));
        setTimeout(function () {
          form.validateFields();
        }, 1);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(EditingContent, [{
    key: 'render',
    value: function render() {
      console.log('EditingContent render');
      var _props$state = this.props.state,
          visible = _props$state.editing,
          data = _props$state.editingData,
          _props$state$editingD = _props$state.editingData,
          required = _props$state$editingD.required,
          type = _props$state$editingD.type,
          options = _props$state$editingD.options,
          requiredMessage = _props$state$editingD.requiredMessage,
          fieldName = _props$state$editingD.fieldName,
          optionRowShow = _props$state$editingD.optionRowShow,
          _props$state$actions = _props$state.actions,
          setGroupData = _props$state$actions.setGroupData,
          addGroupData = _props$state$actions.addGroupData,
          deleteGroupData = _props$state$actions.deleteGroupData,
          position = this.state.position,
          positionChange = this.positionChange;

      return _react2.default.createElement(
        _drawer2.default,
        {
          style: { background: 'white' },
          onClose: this.onClose,
          mask: false,
          title: _react2.default.createElement(
            RadioGroup,
            {
              onChange: positionChange,
              value: position
            },
            _react2.default.createElement(
              RadioButton,
              { value: 'top' },
              'top'
            ),
            _react2.default.createElement(
              RadioButton,
              { value: 'right' },
              'right'
            ),
            _react2.default.createElement(
              RadioButton,
              { value: 'bottom' },
              'bottom'
            ),
            _react2.default.createElement(
              RadioButton,
              { value: 'left' },
              'left'
            )
          ),
          width: 500,
          height: 350,
          visible: visible,
          placement: position
        },
        _react2.default.createElement(
          _divider2.default,
          { orientation: 'left' },
          'FieldName'
        ),
        _react2.default.createElement(_input2.default, {
          value: fieldName,
          onChange: this.fieldNameChange,
          placeHolder: '\u8F93\u5165\u4F20\u5165\u540E\u53F0\u5B57\u6BB5\u540D\u79F0',
          style: { width: 200 }
        }),
        _react2.default.createElement(
          _divider2.default,
          { orientation: 'left' },
          'Label'
        ),
        _react2.default.createElement(_LabelEditor2.default, null),
        _react2.default.createElement(
          _divider2.default,
          { orientation: 'left' },
          'Required'
        ),
        _react2.default.createElement(
          _styled.SpanLH32,
          null,
          _react2.default.createElement(
            _checkbox2.default,
            { checked: required, onChange: this.requireChange },
            'required'
          )
        ),
        required ? _react2.default.createElement(_input2.default, {
          value: requiredMessage,
          onChange: this.requiredMessageChange,
          placeHolder: '\u8F93\u5165\u6821\u9A8Crequired\u7684\u6807\u8BED',
          style: { width: 200 }
        }) : void 0,
        type == 'checkboxGroup' || type == 'radio' || type == 'select' ? _react2.default.createElement(
          _react.Fragment,
          null,
          _react2.default.createElement(
            _divider2.default,
            { orientation: 'left' },
            'Options'
          ),
          options.map(function (e, i) {
            return _react2.default.createElement(
              _styled.RowMB10,
              { gutter: 15 },
              _react2.default.createElement(
                _col2.default,
                { span: 10 },
                _react2.default.createElement(_input2.default, {
                  onChange: function onChange(e) {
                    return setGroupData(data, 'options', i, 'label', e.target.value);
                  },
                  value: e.label,
                  placeHolder: 'label'
                })
              ),
              _react2.default.createElement(
                _col2.default,
                { span: 10 },
                _react2.default.createElement(_input2.default, {
                  onChange: function onChange(e) {
                    return setGroupData(data, 'options', i, 'value', e.target.value);
                  },
                  value: e.value,
                  placeHolder: 'value'
                })
              ),
              _react2.default.createElement(
                _col2.default,
                { span: 2 },
                _react2.default.createElement(_button2.default, {
                  icon: 'plus',
                  onClick: function onClick(e) {
                    return addGroupData(data, 'options', i, { label: 'default', value: 'default' });
                  }
                })
              ),
              _react2.default.createElement(
                _col2.default,
                { span: 2 },
                options && options.length > 1 ? _react2.default.createElement(_button2.default, {
                  icon: 'minus',
                  onClick: function onClick(e) {
                    return deleteGroupData(data, 'options', i);
                  }
                }) : void 0
              )
            );
          }),
          type == 'checkboxGroup' || type == 'radio' ? _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement(
              _divider2.default,
              { orientation: 'left' },
              'OptionsRowShow'
            ),
            _react2.default.createElement(_slider2.default, { min: 1, max: 4, onChange: this.optionRowShowChange, value: Number(optionRowShow) })
          ) : void 0
        ) : void 0
      );
    }
  }]);

  return EditingContent;
}(_react.Component)) || _class;

exports.default = EditingContent;