function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function flattenArray(arr) {
  var res = [];
  arr.forEach(function (el) {
    if (Array.isArray(el)) {
      res.push(flattenArray(el));
    } else {
      res.push(el);
    }
  });
  return res;
}

var Candy = /*#__PURE__*/function (_Array) {
  _inherits(Candy, _Array);

  var _super = _createSuper(Candy);

  function Candy(items) {
    _classCallCheck(this, Candy);

    return _super.call.apply(_super, [this].concat(_toConsumableArray(items)));
  }

  return Candy;
}( /*#__PURE__*/_wrapNativeSuper(Array));

function qsa(selector, context) {
  if (typeof selector !== 'string') {
    return [selector];
  }

  var a = [];
  var items = document.querySelectorAll(selector);
  items.forEach(function (item) {
    a.push(item);
  });
  return a;
}

function $(selector, context) {
  var arr = [];

  if (!context && selector instanceof Candy) {
    return [selector];
  }

  if (!selector) {
    return new Candy(arr);
  }

  if (typeof selector === 'string') {
    arr = qsa(selector.trim(), context || document);
    console.log(arr);
  }

  return new Candy(arr);
}

Candy.prototype.addClass = function (classes) {
  var classNames = flattenArray(classes.split(' '));
  this.forEach(function (el) {
    var _el$classList;

    return (_el$classList = el.classList).add.apply(_el$classList, _toConsumableArray(classNames));
  });
  return this;
};

Candy.prototype.attr = function (attrs, value) {
  var _arguments = arguments;

  if (arguments.length === 1 && typeof attrs === 'string') {
    if (arguments[0]) return this[0].getAttribute(attrs);
    return undefined;
  }

  this.forEach(function (el) {
    if (_arguments.length === 2 && value) {
      el.setAttribute(attrs, value);
    }
  });
  return this;
};

Candy.prototype.hasClass = function (classes) {
  console.log("Searching for a class");
  var classNames = classes.split(' ');
  var contains = false;
  this.forEach(function (el) {
    var _el$classList2;

    contains = (_el$classList2 = el.classList).contains.apply(_el$classList2, _toConsumableArray(classNames));
  }); // const nodes = [...this];
  // const contains = classNames.filter(className => {
  // 	return nodes.filter(el => el.classList.contains(className))
  // }).length > 0;

  console.log(contains);
};

Candy.prototype.removeAttr = function (attr) {
  this.forEach(function (el) {
    el.removeAttribute(attr);
  });
  return this;
};

Candy.prototype.removeClass = function (classes) {
  var classNames = classes.split(' ');
  this.forEach(function (el) {
    var _el$classList3;

    return (_el$classList3 = el.classList).remove.apply(_el$classList3, _toConsumableArray(classNames));
  });
  return this;
};

Candy.prototype.toggleClass = function (classes) {
  console.log('toggle');
  var classNames = classes.split(' ');
  this.forEach(function (el) {
    classNames.forEach(function (c) {
      el.classList.toggle(c);
    });
  });
  return this;
};