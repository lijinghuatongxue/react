'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _form = require('antd/es/form');

var _form2 = _interopRequireDefault(_form);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _class;
//组件
//预览
//元素列表


require('antd/es/form/style/css');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDndHtml5Backend = require('react-dnd-html5-backend');

var _reactDndHtml5Backend2 = _interopRequireDefault(_reactDndHtml5Backend);

var _reactDnd = require('react-dnd');

var _immutabilityHelper = require('immutability-helper');

var _immutabilityHelper2 = _interopRequireDefault(_immutabilityHelper);

var _Context = require('@/Context');

var _Priview = require('./Priview');

var _Priview2 = _interopRequireDefault(_Priview);

var _ElementList = require('./ElementList');

var _ElementList2 = _interopRequireDefault(_ElementList);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _EditingContent = require('./EditingContent');

var _EditingContent2 = _interopRequireDefault(_EditingContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//编辑抽屉


var PrivicwContainer = _styledComponents2.default.div.withConfig({
  displayName: 'FormBuilder__PrivicwContainer',
  componentId: 'ol5v4z-0'
})(['float:left;@media screen and (max-width:1900px){width:600px;}@media screen and (max-width:1024px){width:500px;}']);
var ElementListContainer = _styledComponents2.default.div.withConfig({
  displayName: 'FormBuilder__ElementListContainer',
  componentId: 'ol5v4z-1'
})(['float:left;']);

var FormBuilder = (_dec = (0, _reactDnd.DragDropContext)(_reactDndHtml5Backend2.default, { window: window }), _dec2 = _form2.default.create({
  onFieldsChange: function onFieldsChange(props, fields) {
    console.log(props, fields);
  }
}), _dec(_class = _dec2(_class = function (_Component) {
  _inherits(FormBuilder, _Component);

  function FormBuilder() {
    var _ref;

    _classCallCheck(this, FormBuilder);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = FormBuilder.__proto__ || Object.getPrototypeOf(FormBuilder)).call.apply(_ref, [this].concat(args)));

    _this.state = {
      data: [],
      editing: false,
      editingData: { label: '' },
      editingIndex: null,
      elementTypes: [{
        type: 'input',
        name: '\u6587\u672C\u8F93\u5165\u6846',
        demo: true
      }, {
        type: 'inputNumber',
        name: '\u6570\u5B57\u8F93\u5165\u6846',
        demo: true
      }, {
        type: 'radio',
        name: '\u5355\u9009\u6846',
        demo: true
      }, {
        type: 'checkbox',
        name: '\u590D\u9009\u6846',
        demo: true
      }, {
        type: 'checkboxGroup',
        name: '\u590D\u9009\u6846\u7EC4',
        demo: true
      }, {
        type: 'select',
        name: '\u4E0B\u62C9\u6846',
        demo: true
      }]
    };
    _this.widgetIndex = 0;

    _this.deleteItem = function (item) {
      var i = _this.getIndex(item);
      var newState = (0, _immutabilityHelper2.default)(_this.state, {
        data: {
          $splice: [[i, 1]]
        }
      });
      _this.setState(newState);
    };

    _this.moveElement = function (dragIndex, hoverIndex) {
      var data = _this.state.data;

      var dragCard = data[dragIndex];
      var hoverCard = data[hoverIndex];
      var newData = (0, _immutabilityHelper2.default)(_this.state, {
        data: {
          $splice: [[dragIndex, 1], [hoverIndex, 0, dragCard]]
        }
      });
      _this.setState(newData);
    };

    _this.setDownElement = function (element) {
      if (element.demo) {
        delete element.demo;
        var newDemo = _extends({}, element, { demo: true });
        var index = _this.state.elementTypes.indexOf(element);
        var newState = (0, _immutabilityHelper2.default)(_this.state, {
          elementTypes: {
            $splice: [[index, 1], [index, 0, newDemo]]
          }
        });
        _this.setState(newState);
      }
    };

    _this.getIndex = function (data) {
      //获取元素索引
      return _this.state.data.indexOf(data);
    };

    _this.setGroupData = function (data, field, index, gpfield, value) {
      var i = _this.getIndex(data);
      var newState = (0, _immutabilityHelper2.default)(_this.state, {
        data: _defineProperty({}, i, _defineProperty({}, field, _defineProperty({}, index, _defineProperty({}, gpfield, {
          $set: value
        }))))
      });
      newState.editingData = newState.data[i];
      _this.setState(newState);
    };

    _this.addGroupData = function (data, field, index, insertData) {
      var i = _this.getIndex(data);
      var newState = (0, _immutabilityHelper2.default)(_this.state, {
        data: _defineProperty({}, i, _defineProperty({}, field, {
          $splice: [[index + 1, 0, insertData]]
        }))
      });
      newState.editingData = newState.data[i];
      _this.setState(newState);
    };

    _this.deleteGroupData = function (data, field, index) {
      var i = _this.getIndex(data);
      var newState = (0, _immutabilityHelper2.default)(_this.state, {
        data: _defineProperty({}, i, _defineProperty({}, field, {
          $splice: [[index, 1]]
        }))
      });
      newState.editingData = newState.data[i];
      _this.setState(newState);
    };

    _this.addElement = function (element) {
      console.log('addElement');
      var data = _this.state.data;

      console.log(_this);
      var fl = '' + element.type + _this.widgetIndex;
      var newEl = _extends({}, element, { demo: false });
      newEl.fieldName = fl;
      newEl.label = fl;
      _this.checkType(newEl);
      var newState = (0, _immutabilityHelper2.default)(_this.state, {
        data: {
          $push: [newEl]
        }
      });
      _this.widgetIndex++;
      _this.setState(newState);
    };

    _this.checkType = function (item) {
      var type = item.type;

      if (type == 'checkboxGroup' || type == 'radio' || type == 'select') {
        item.options = [{ label: 'default1', value: 'default1Value' }, { label: 'default2', value: 'default2Value' }];
        if (type == 'checkboxGroup' || type == 'radio') {
          item.optionRowShow = 3;
        }
      }
    };

    _this.createElement = function (dragItem, hoverIndex) {
      console.log('createElement');
      var fl = '' + dragItem.type + _this.widgetIndex;
      //const newEl={...dragItem}
      dragItem.fieldName = fl;
      dragItem.label = fl;
      dragItem.adding = true;
      _this.checkType(dragItem);
      _this.widgetIndex++;
      _this.state.data.splice(hoverIndex, 0, dragItem);
      var newData = (0, _immutabilityHelper2.default)(_this.state, {
        data: {
          $splice: [[hoverIndex, 1], [hoverIndex, 0, dragItem]]
        }
      });
      _this.setState(newData);
    };

    _this.editShow = function (editingData) {
      //编辑界面出现
      _this.setState({
        editing: true,
        editingData: editingData,
        editingIndex: _this.state.data.indexOf(editingData)
      });
    };

    _this.editingClose = function () {
      //编辑界面关闭
      _this.setState({ editing: false });
    };

    _this.setEditingData = function (data, index, field, value) {
      //编辑表单元素
      //this.state.data[index][field]=value;
      index = _this.state.data.indexOf(data);
      var newState = (0, _immutabilityHelper2.default)(_this.state, {
        data: _defineProperty({}, index, _defineProperty({}, field, {
          $set: value
        }))
      });
      newState.editingData = newState.data[index];
      _this.setState(newState);
    };

    _this.provide = {
      state: _this.state,
      form: _this.props.form
    };
    var moveElement = _this.moveElement,
        createElement = _this.createElement,
        addElement = _this.addElement,
        setDownElement = _this.setDownElement,
        editShow = _this.editShow,
        setEditingData = _this.setEditingData,
        setGroupData = _this.setGroupData,
        addGroupData = _this.addGroupData,
        deleteGroupData = _this.deleteGroupData,
        deleteItem = _this.deleteItem;

    _this.state.actions = {
      moveElement: moveElement,
      createElement: createElement,
      addElement: addElement,
      setDownElement: setDownElement,
      editShow: editShow,
      setEditingData: setEditingData,
      setGroupData: setGroupData,
      addGroupData: addGroupData,
      deleteGroupData: deleteGroupData,
      deleteItem: deleteItem
    };
    return _this;
  }

  _createClass(FormBuilder, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props = this.props,
          data = _props.data,
          _props$design = _props.design,
          design = _props$design === undefined ? true : _props$design;

      if (data) {
        this.setState({ data: data, design: design });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      console.log('FormBuilder render');
      var form = this.props.form;

      return _react2.default.createElement(
        _Context.Provider,
        { value: { state: this.state, form: form, setState: this.setState.bind(this) } },
        _react2.default.createElement(
          'style',
          null,
          '\n          p,ol{\n            margin:0\n          }\n          '
        ),
        _react2.default.createElement(_EditingContent2.default, null),
        _react2.default.createElement(
          PrivicwContainer,
          null,
          _react2.default.createElement(_Priview2.default, null)
        ),
        _react2.default.createElement(
          ElementListContainer,
          null,
          _react2.default.createElement(_ElementList2.default, null)
        )
      );
    }
  }]);

  return FormBuilder;
}(_react.Component)) || _class) || _class);
exports.default = FormBuilder;