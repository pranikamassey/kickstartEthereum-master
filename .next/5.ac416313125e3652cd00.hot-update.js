webpackHotUpdate(5,{

/***/ 735:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(87);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(88);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _factory = __webpack_require__(736);

var _factory2 = _interopRequireDefault(_factory);

var _semanticUiReact = __webpack_require__(498);

var _Layout = __webpack_require__(1173);

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = __webpack_require__(728);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "F:\\Pranika(prof.)\\kickstartEthereum-master\\pages\\index.js?entry"; /*https://react.semantic-ui.com/views/card#types-group-props*/
/*https://react.semantic-ui.com/elements/button#types-labeled-icon-shorthand*/
/*import 'semantic-ui-css/semantic.min.css';*/


var CampaignIndex = function (_Component) {
  (0, _inherits3.default)(CampaignIndex, _Component);

  function CampaignIndex() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, CampaignIndex);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CampaignIndex.__proto__ || (0, _getPrototypeOf2.default)(CampaignIndex)).call.apply(_ref, [this].concat(args))), _this), _this.renderCampaigns = function () {
      var items = _this.props.campaigns.map(function (address) {
        return {

          header: address,
          image: "https://react.semantic-ui.com/images/avatar/small/daniel.jpg",
          style: {
            overflowWrap: "break-word",
            height: "100%",
            width: "50%"
          },
          description: _react2.default.createElement(_routes.Link, { route: "/campaigns/" + address, __source: {
              fileName: _jsxFileName,
              lineNumber: 36
            }
          }, _react2.default.createElement("a", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 37
            }
          }, "View campaign")),
          fluid: true
        };
      });

      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(CampaignIndex, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, _react2.default.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, "Open Campaigns"), _react2.default.createElement(_routes.Link, { route: "/campaigns/new", __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, _react2.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, " ", _react2.default.createElement(_semanticUiReact.Button, {
        content: "Create Campaign",
        icon: "add circle",
        labelPosition: "left",
        floated: "right",
        primary: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }))), this.renderCampaigns()));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var campaigns;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _factory2.default.methods.getDeployedCampaign().call();

              case 2:
                campaigns = _context.sent;
                return _context.abrupt("return", { campaigns: campaigns });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _ref2.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return CampaignIndex;
}(_react.Component);

exports.default = CampaignIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImZhY3RvcnkiLCJDYXJkIiwiQnV0dG9uIiwiTGF5b3V0IiwiTGluayIsIkNhbXBhaWduSW5kZXgiLCJyZW5kZXJDYW1wYWlnbnMiLCJpdGVtcyIsInByb3BzIiwiY2FtcGFpZ25zIiwibWFwIiwiaGVhZGVyIiwiYWRkcmVzcyIsImltYWdlIiwic3R5bGUiLCJvdmVyZmxvd1dyYXAiLCJoZWlnaHQiLCJ3aWR0aCIsImRlc2NyaXB0aW9uIiwiZmx1aWQiLCJtZXRob2RzIiwiZ2V0RGVwbG95ZWRDYW1wYWlnbiIsImNhbGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTyxBQUFhOzs7O0FBQ3BCLEEsQUFBQSxBQUNFLEFBQ0E7O0FBSUYsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVMsQUFBWTs7OzswRkFKTztBQUM1QjtBQUNBOzs7SSxBQUlNOzs7Ozs7Ozs7Ozs7OzswTixBQVlKLGtCQUFrQixZQUFNLEFBQ3RCO1VBQU0sY0FBUSxBQUFLLE1BQUwsQUFBVyxVQUFYLEFBQXFCLElBQUksbUJBQVcsQUFDaEQ7OztrQkFBTyxBQUVHLEFBQ1I7aUJBSEssQUFHRSxBQUNOOzswQkFBTyxBQUNTLEFBQ2Y7b0JBRk0sQUFFRSxBQUNSO21CQVBHLEFBSUcsQUFHQyxBQUVUO0FBTFEsQUFDTDt1Q0FLRCxBQUFDLDhCQUFLLHVCQUFOLEFBQTZCO3dCQUE3QjswQkFBQSxBQUNBO0FBREE7V0FBQSxrQkFDQSxjQUFBOzt3QkFBQTswQkFBQTtBQUFBO0FBQUEsYUFYRyxBQVVILEFBQ0EsQUFFRjtpQkFiRixBQUFPLEFBYUUsQUFFVjtBQWZRLEFBRUw7QUFISixBQUFjLEFBa0JkLE9BbEJjOzsyQ0FtQlosQUFBQyxzQkFBRCxBQUFNLFNBQU0sT0FBWixBQUFtQjtvQkFBbkI7c0JBREYsQUFDRSxBQUVIO0FBRkc7T0FBQTtBOzs7Ozs2QkFLSyxBQUNQOzZCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUVBLG1DQUFBLEFBQUMsOEJBQUssT0FBTixBQUFZO29CQUFaO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNHO0FBREg7QUFBQSxTQUFBLEFBR0UscUJBQUEsQUFBQztpQkFBRCxBQUNVLEFBQ1I7Y0FGRixBQUVPLEFBQ0w7dUJBSEYsQUFHZ0IsQUFDZDtpQkFKRixBQUlVLEFBQ1I7aUJBTEY7O29CQUFBO3NCQVBOLEFBR0UsQUFDRSxBQUdFLEFBVUg7QUFWRztBQUNFLGlCQVZaLEFBQ0UsQUFDRSxBQWlCRyxBQUFLLEFBSWI7Ozs7Ozs7Ozs7Ozt1QkF6RHlCLGtCQUFBLEFBQVEsUUFBUixBQUNyQixzQkFDQSxBLEFBRnFCOzttQkFBbEI7QTtpREFJQyxFQUFFLFcsQUFBRjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVJpQixBLEFBZ0U1Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJGOi9QcmFuaWthKHByb2YuKS9raWNrc3RhcnRFdGhlcmV1bS1tYXN0ZXIifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "F:\\Pranika(prof.)\\kickstartEthereum-master\\pages\\index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "F:\\Pranika(prof.)\\kickstartEthereum-master\\pages\\index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5hYzQxNjMxMzEyNWUzNjUyY2QwMC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/MDM2ZTA2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgZmFjdG9yeSBmcm9tIFwiLi4vZXRoZXJldW0vZmFjdG9yeS5qc1wiO1xuaW1wb3J0IHtcbiAgQ2FyZCxcbiAgQnV0dG9uXG59IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiOyAvKmh0dHBzOi8vcmVhY3Quc2VtYW50aWMtdWkuY29tL3ZpZXdzL2NhcmQjdHlwZXMtZ3JvdXAtcHJvcHMqL1xuLypodHRwczovL3JlYWN0LnNlbWFudGljLXVpLmNvbS9lbGVtZW50cy9idXR0b24jdHlwZXMtbGFiZWxlZC1pY29uLXNob3J0aGFuZCovXG4vKmltcG9ydCAnc2VtYW50aWMtdWktY3NzL3NlbWFudGljLm1pbi5jc3MnOyovXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dC5qc1wiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCIuLi9yb3V0ZXMuanNcIjtcblxuY2xhc3MgQ2FtcGFpZ25JbmRleCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHtcbiAgIFxuICAgIGNvbnN0IGNhbXBhaWducyA9IGF3YWl0IGZhY3RvcnkubWV0aG9kc1xuICAgICAgLmdldERlcGxveWVkQ2FtcGFpZ24oKVxuICAgICAgLmNhbGwoKTsgXG4gICAgLy9yZXR1cm4ge2NhbXBhaWducyA6IGNhbXBhaWduc31cbiAgICByZXR1cm4geyBjYW1wYWlnbnMgfTtcbiAgICAvL2NvbnNvbGUubG9nKGNhbXBhaWducyk7XG4gIH1cblxuICByZW5kZXJDYW1wYWlnbnMgPSAoKSA9PiB7XG4gICAgY29uc3QgaXRlbXMgPSB0aGlzLnByb3BzLmNhbXBhaWducy5tYXAoYWRkcmVzcyA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgIFxuICAgICAgICBoZWFkZXI6IGFkZHJlc3MsXG4gICAgICAgIGltYWdlOiBcImh0dHBzOi8vcmVhY3Quc2VtYW50aWMtdWkuY29tL2ltYWdlcy9hdmF0YXIvc21hbGwvZGFuaWVsLmpwZ1wiLFxuICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgb3ZlcmZsb3dXcmFwOiBcImJyZWFrLXdvcmRcIixcbiAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgICAgIHdpZHRoOiBcIjUwJVwiXG4gICAgICAgIH0sXG4gICAgICAgIGRlc2NyaXB0aW9uOihcbiAgICAgICAgICA8TGluayByb3V0ZSA9IHtgL2NhbXBhaWducy8ke2FkZHJlc3N9YH0+XG4gICAgICAgICAgPGE+VmlldyBjYW1wYWlnbjwvYT5cbiAgICAgICAgICA8L0xpbms+ICksIFxuICAgICAgICBmbHVpZDogdHJ1ZSBcbiAgICAgIH07XG4gICAgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENhcmQuR3JvdXAgaXRlbXM9e2l0ZW1zfSAvPlxuICAgICk7XG4gIH07XG5cbiAgXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dD5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDM+T3BlbiBDYW1wYWlnbnM8L2gzPlxuICAgICAgICAgXG4gICAgICAgICAgPExpbmsgcm91dGU9XCIvY2FtcGFpZ25zL25ld1wiPlxuICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBjb250ZW50PVwiQ3JlYXRlIENhbXBhaWduXCJcbiAgICAgICAgICAgICAgICBpY29uPVwiYWRkIGNpcmNsZVwiXG4gICAgICAgICAgICAgICAgbGFiZWxQb3NpdGlvbj1cImxlZnRcIlxuICAgICAgICAgICAgICAgIGZsb2F0ZWQ9XCJyaWdodFwiXG4gICAgICAgICAgICAgICAgcHJpbWFyeVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgIHt0aGlzLnJlbmRlckNhbXBhaWducygpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTGF5b3V0PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FtcGFpZ25JbmRleDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBTUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FBY0E7QUFDQTs7O0FBSUE7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFKQTtBQUtBO0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQWJBO0FBZUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUZBO0FBQUE7Ozs7OztBQU1BO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7O0FBQUE7QUFVQTtBQVZBO0FBQ0E7Ozs7Ozs7Ozs7OztBQTVDQTtBQUNBO0FBREE7O0FBSUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1REE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==