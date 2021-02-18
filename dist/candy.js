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

function toCamelCase(string) {
  return string.toLowerCase().replace(/-(.)/g, function (match, group) {
    return group.toUpperCase();
  });
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
  var items = context.querySelectorAll(selector);
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
  } else if (selector.nodeType || selector === document || selector === window) {
    arr.push(selector);
  } else if (Array.isArray(selector)) {
    return new Candy(selector);
  }

  return new Candy(arr);
}

Candy.prototype.add = function () {
  var dom = this;

  for (var i = 0; i < arguments.length; i++) {
    var toAdd = $(i < 0 || arguments.length <= i ? undefined : arguments[i]);

    for (var _j = 0; _j < toAdd.length; _j++) {
      dom.append(toAdd[_j]);
    }
  }

  return dom;
};

Candy.prototype.addClass = function (classes) {
  var classNames = flattenArray(classes.split(' '));
  this.forEach(function (el) {
    var _el$classList;

    return (_el$classList = el.classList).add.apply(_el$classList, _toConsumableArray(classNames));
  });
  return this;
};

Candy.prototype.after = function (content) {
  var _this = this;

  // If content instance of Candy
  if (content instanceof Candy) {
    // Clone content elements if more than one target element
    if (this.length > 1) {
      this.forEach(function (el, idx) {
        content.forEach(function (elToAppend) {
          el.parentElement.insertBefore($(elToAppend).clone()[0], _this[idx + 1]);
        });
      });
    } else {
      // Append content els to single target
      content.forEach(function (elToAppend) {
        _this[0].parentElement.insertBefore(elToAppend, _this[0].nextElementSibling);
      });
    } // Same logic for html string

  } else if (typeof content === 'string') {
    var tempDiv = document.createElement('div');
    tempDiv.innerHTML = content;

    if (this.length > 1) {
      this.forEach(function (el, idx) {
        el.parentElement.insertBefore($(tempDiv.firstChild).clone()[0], _this[idx + 1]);
      });
    } else {
      this.forEach(function (el) {
        _this[0].parentElement.insertBefore(tempDiv.firstChild, _this[0].nextElementSibling);
      });
    }
  }

  return this;
};

Candy.prototype.append = function () {
  var childEl;

  for (var i = 0; i < arguments.length; i++) {
    childEl = i < 0 || arguments.length <= i ? undefined : arguments[i]; //console.log(childEl);

    for (var _j2 = 0; _j2 < this.length; _j2++) {
      if (typeof childEl === 'string') {
        var tempDiv = document.createElement('div');
        tempDiv.innerHTML = childEl;

        this[_j2].appendChild(tempDiv.firstElementChild);
      } else if (childEl instanceof Candy) {
        this[_j2].appendChild(childEl[_j2]);
      } else {
        this[_j2].appendChild(childEl);
      }
    }
  }
};

Candy.prototype.appendTo = function (parent) {
  $(parent).append(this);
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

Candy.prototype.before = function (content) {
  var _this2 = this;

  // If content instance of Candy
  if (content instanceof Candy) {
    // Clone content elements if more than one target element
    if (this.length > 1) {
      this.forEach(function (el, idx) {
        content.forEach(function (elToAppend) {
          el.parentElement.insertBefore($(elToAppend).clone()[0], _this2[idx]);
        });
      });
    } else {
      // Append content els to single target
      content.forEach(function (elToAppend) {
        _this2[0].parentElement.insertBefore(elToAppend, _this2[0]);
      });
    } // Same logic for html string

  } else if (typeof content === 'string') {
    var tempDiv = document.createElement('div');
    tempDiv.innerHTML = content;

    if (this.length > 1) {
      this.forEach(function (el, idx) {
        el.parentElement.insertBefore($(tempDiv.firstChild).clone()[0], _this2[idx]);
      });
    } else {
      this.forEach(function (el) {
        _this2[0].parentElement.insertBefore(tempDiv.firstChild, _this2[0]);
      });
    }
  }

  return this;
};

Candy.prototype.children = function (selector) {
  var children = [];

  for (var i = 0; i < this.length; i++) {
    var childNodes = this[i].children;

    for (var _j3 = 0; _j3 < childNodes.length; _j3++) {
      if (!selector || $(childNodes[_j3]).is(selector)) {
        children.push(childNodes[_j3]);
      }
    }
  }

  return $(children);
};

Candy.prototype.clone = function () {
  return new Candy([this[0].cloneNode(true)]);
};

Candy.prototype.css = function (propertyName, value) {
  if (propertyName && !value) {
    // $('p').css('color')
    if (typeof propertyName === 'string') {
      if (this[0]) {
        return getComputedStyle(this[0])[toCamelCase(propertyName)];
      }
    } else {
      // $('p').css({color: 'red'})
      this.forEach(function (el) {
        for (var prop in propertyName) {
          //console.log(toCamelCase())
          el.style[toCamelCase(prop)] = propertyName[prop];
        }
      });
      return this;
    }
  }

  if (propertyName && value) {
    // $('p').css('width', '20px');
    this.forEach(function (el) {
      el.style[toCamelCase(propertyName)] = value;
    });
    return this;
  }

  return this;
};

Candy.prototype.data = function (key, value) {
  if (key && !value) {
    if (typeof key === 'string') {
      if (this[0]) return this[0].dataset[toCamelCase(key)];
    } else {
      // Object -> set value
      this.forEach(function (el) {
        for (var name in key) {
          el.dataset[toCamelCase(name)] = key[name];
        }
      });
    }
  } else if (typeof key === 'string' && typeof value === 'string') {
    this.forEach(function (el) {
      el.dataset[toCamelCase(key)] = value;
    });
  }
};

Candy.prototype.each = function (callback) {
  this.forEach(function (el, idx) {
    callback.call(el, idx);
  });
};

Candy.prototype.empty = function () {
  this.forEach(function (el) {
    // If element node
    if (el.nodeType === 1) {
      // Remove all node childs (Element, text)
      while (el.firstChild) {
        el.removeChild(el.firstChild);
      }
    }
  });
  return this;
};

Candy.prototype.even = function () {
  var nodes = _toConsumableArray(this);

  var evenArr = nodes.filter(function (el, idx) {
    if (idx % 2 === 0) return el;
  });
  return $(evenArr);
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

Candy.prototype.height = function (value) {
  if (typeof value === 'undefined') {
    if (this[0]) {
      return this[0].offsetHeight;
    }

    return undefined;
  }

  var val = typeof value === 'number' ? "".concat(value, "px") : value;
  console.log(val);
  this.forEach(function (el) {
    $(el).css('height', val);
  });
};

Candy.prototype.is = function (selector) {
  var el = this[0]; //console.log(el.parentElement);

  var compareWith;
  if (!el || typeof selector === 'undefined') return false;

  if (typeof selector === 'string') {
    compareWith = $(selector, el.parentElement); //console.log(compareWith);

    for (var i = 0; i < compareWith.length; i++) {
      if (el === compareWith[i]) {
        return true;
      }
    }
  } else if (selector.nodeType || selector instanceof Candy) {
    compareWith = selector.nodeType ? [selector] : selector;

    for (var _i = 0; _i < compareWith.length; _i++) {
      if (el === compareWith[_i]) {
        return true;
      }
    }
  }

  return false;
};

Candy.prototype.next = function (selector) {
  if (this.length > 0) {
    if (this[0].nextElementSibling) {
      if (!selector || $(this[0].nextElementSibling).is(selector)) {
        return $([this[0].nextElementSibling]);
      }
    }
  }

  return $([]);
};

Candy.prototype.nextAll = function (selector) {
  if (this.length > 0) {
    var nextSiblings = [];
    var el = this[0];

    while (el.nextElementSibling) {
      if (!selector || $(el.nextElementSibling).is(selector)) {
        nextSiblings.push(el.nextElementSibling);
      }

      el = el.nextElementSibling;
    }

    return $(nextSiblings);
  }

  return $([]);
};

Candy.prototype.odd = function () {
  var nodes = _toConsumableArray(this);

  var evenArr = nodes.filter(function (el, idx) {
    if (idx % 2 !== 0) return el;
  });
  return $(evenArr);
};

Candy.prototype.off = function () {
  var _this3 = this;

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var eventType = args[0],
      targetSelector = args[1],
      callback = args[2];

  if (typeof targetSelector === 'function') {
    targetSelector = null;
    eventType = args[0];
    callback = args[1];
  }

  var events = eventType.split(' ');
  events.forEach(function (event) {
    _this3.forEach(function (el) {
      if (!targetSelector || $(el).is(targetSelector)) {
        var eventsToRemove = el.candyEvents.filter(function (eventObj) {
          return eventObj.type === event;
        });
        console.log(eventsToRemove);
      }
    });
  });
};

Candy.prototype.on = function () {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  var eventType = args[0],
      targetSelector = args[1],
      callback = args[2],
      data = args.slice(3); // If function is first parameter or no parameters return

  if (!eventType || typeof eventType === 'function') return this; // If second parameter is a function then no targetSelector;

  if (typeof targetSelector === 'function') {
    eventType = args[0];
    callback = args[1];
    data = args.slice(2);
    targetSelector = undefined;
  } // Named function for eventlistener so we can than remove it with off();
  // function callbackHandler(e) {
  //     callback.call(null, e, data);
  // }
  // this.forEach(el => {
  //     if (!targetSelector || $(el).is(targetSelector)) {
  //         events.forEach(eventName => {
  //             el.addEventListener(eventName, callbackHandler);
  //         });
  //         console.log(this);
  //     }
  // });


  function handleEvent(e) {
    var targetData = e && e.target ? e.target.candyEvents.event[0].data : []; // If targetData already has e object than replace it with the new one, if not add one

    var hasEvent = targetData.find(function (el) {
      return el.target;
    });

    if (hasEvent) {
      targetData.shift();
      targetData.unshift(e);
    } else {
      targetData.unshift(e);
    }

    callback.apply(this, targetData);
  }

  var events = eventType.split(' ');
  this.forEach(function (el) {
    if (!targetSelector || $(el).is(targetSelector)) {
      events.forEach(function (eventName) {
        // set candyEvents property on the current element
        if (!el.candyEvents) {
          el.candyEvents = [];
        }

        if (!el.candyEvents.event) el.candyEvents.event = [];
        el.candyEvents.push({
          event: {
            type: eventName,
            callback: callback,
            proxyCallback: handleEvent,
            data: data
          }
        });
        console.dir(el);
        el.addEventListener(eventName, handleEvent);
      });
    }
  });
  return this;
};

Candy.prototype.parent = function (selector) {
  var parents = [];
  this.forEach(function (el) {
    if (el.parentNode) {
      if ((!selector || $(el.parentNode).is(selector)) && !parents.includes(el.parentNode)) {
        parents.push(el.parentNode);
      }
    }
  });
  return $(parents);
};

Candy.prototype.parents = function (selector) {
  var parents = [];
  this.forEach(function (el) {
    var parentEl = el.parentNode;

    while (parentEl) {
      console.log(parentEl);
      if (parentEl === document.body) break;

      if ((!selector || $(parentEl).is(selector)) && !parents.includes(parentEl)) {
        parents.push(parentEl);
      }

      parentEl = parentEl.parentNode;
    }
  });
  return $(parents);
};

Candy.prototype.prepend = function () {
  var childEl;

  for (var i = 0; i < arguments.length; i++) {
    childEl = i < 0 || arguments.length <= i ? undefined : arguments[i];

    for (j = 0; j < this.length; j++) {
      if (typeof childEl === 'string') {
        var tempDiv = document.createElement('div');
        tempDiv.innerHTML = childEl;
        this[j].insertBefore(tempDiv.firstElementChild, this[j].childNodes[0]);
      } else if (childEl instanceof Candy) {
        this[j].insertBefore(childEl[j], this[j].childNodes[0]);
      } else {
        this[j].insertBefore(childEl[j], this[j].childNodes[0]);
      }
    }
  }
};

Candy.prototype.prependTo = function (parent) {
  $(parent).prepend(this);
};

Candy.prototype.prev = function (selector) {
  if (this.length > 0) {
    if (this[0].previousElementSibling) {
      if (!selector || $(this[0].previousElementSibling).is(selector)) {
        return $(this[0].previousElementSibling);
      }
    }
  }

  return $([]);
};

Candy.prototype.prevAll = function (selector) {
  if (this.length > 0) {
    var prevSiblings = [];
    var el = this[0];

    while (el.previousElementSibling) {
      if (!selector || $(el.previousElementSibling).is(selector)) {
        prevSiblings.push(el.previousElementSibling);
      }

      el = el.previousElementSibling;
    }

    return $(prevSiblings);
  }

  return $([]);
};

Candy.prototype.prop = function (props, value) {
  var _arguments2 = arguments;

  if (arguments.length === 1 && typeof props === 'string') {
    if (this[0]) return this[0][props];
  } else {
    // Set props
    this.forEach(function (el) {
      if (_arguments2.length === 2) {
        // Two strings
        el[props] = value;
      } else if (_arguments2.length === 1) {
        // Object
        for (var propName in props) {
          el[propName] = props[propName];
        }
      }
    });
  }

  return this;
};

Candy.prototype.remove = function () {
  this.forEach(function (el) {
    return el.remove();
  });
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

Candy.prototype.siblings = function (selector) {
  var siblings = [];

  if (this.length > 0) {
    if (!this[0].parentNode) return siblings;
    var sibling = this[0].parentNode.firstChild;
    console.log(sibling);

    while (sibling) {
      if (sibling.nodeType === 1 && (!selector || $(sibling).is(selector)) && sibling !== this[0]) {
        siblings.push(sibling);
      }

      sibling = sibling.nextSibling;
    }
  }

  return $(siblings);
};

Candy.prototype.text = function (text) {
  if (text) {
    if (this[0]) {
      this.forEach(function (el) {
        return el.textContent = text.trim();
      });
    }
  } else {
    return this[0].textContent;
  }

  return this;
};

Candy.prototype.toArray = function () {
  return _toConsumableArray(this);
};

Candy.prototype.toggleClass = function (classes) {
  var classNames = classes.split(' ');
  this.forEach(function (el) {
    classNames.forEach(function (c) {
      el.classList.toggle(c);
    });
  });
  return this;
};

Candy.prototype.val = function (val) {
  if (typeof val === 'undefined') {
    var el = this[0];
    console.log(el.multiple);
    if (!el) return undefined;

    if (el.multiple && el.nodeName.toLowerCase() === 'select') {
      console.log(el.selectedOptions);
      var values = [];

      for (var i = 0; i < el.selectedOptions.length; i++) {
        values.push(el.selectedOptions[i].value);
      }

      return values;
    }

    return el.value;
  }

  this[0].value = val;
  return this;
};

Candy.prototype.value = function () {
  return this.value;
};

Candy.prototype.width = function (value) {
  if (typeof value === 'undefined') {
    if (this[0]) {
      return this[0].offsetWidth;
    }

    return undefined;
  }

  var val = typeof value === 'number' ? "".concat(value, "px") : value; //console.log(val);

  this.forEach(function (el) {
    $(el).css('width', val);
  });
  return this;
};