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


// const ImageExampleFluid = () => <Image src='https://react.semantic-ui.com/images/wireframe/image.png' fluid />


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
          description: _react2.default.createElement(_routes.Link, { route: "/campaigns/" + address, __source: {
              fileName: _jsxFileName,
              lineNumber: 34
            }
          }, _react2.default.createElement("a", { color: "green", __source: {
              fileName: _jsxFileName,
              lineNumber: 35
            }
          }, "View campaign")),
          fluid: true
        };
      });

      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 42
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
          lineNumber: 49
        }
      }, _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
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
        inverted: true, color: "olive",
        content: "Create Campaign",
        icon: "add circle",
        labelPosition: "left",
        floated: "right",

        primary: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }), _react2.default.createElement("button", { "class": "ui inverted button", __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, "Standard"))), this.renderCampaigns()));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImZhY3RvcnkiLCJDYXJkIiwiQnV0dG9uIiwiU2VnbWVudCIsIkxheW91dCIsIkxpbmsiLCJDYW1wYWlnbkluZGV4IiwicmVuZGVyQ2FtcGFpZ25zIiwiaXRlbXMiLCJwcm9wcyIsImNhbXBhaWducyIsIm1hcCIsImhlYWRlciIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsImZsdWlkIiwibWV0aG9kcyIsImdldERlcGxveWVkQ2FtcGFpZ24iLCJjYWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBYTs7OztBQUNwQixBQUVFLEEsQUFGRixBQUNFLEFBRUE7O0FBS0YsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVMsQUFBWTs7OzswRkFKTztBQUM1QjtBQUNBOzs7QUFJQTs7O0lBR00sQTs7Ozs7Ozs7Ozs7Ozs7ME5BWUosQSxrQkFBa0IsWUFBTSxBQUN0QjtVQUFNLGNBQVEsQUFBSyxNQUFMLEFBQVcsVUFBWCxBQUFxQixJQUFJLG1CQUFXLEFBQ2hEOztrQkFBTyxBQUNHLEFBQ1I7dUNBQ0UsQUFBQyw4QkFBSyx1QkFBTixBQUE2Qjt3QkFBN0I7MEJBQUEsQUFDQTtBQURBO1dBQUEsa0JBQ0EsY0FBQSxPQUFHLE9BQUgsQUFBUzt3QkFBVDswQkFBQTtBQUFBO2FBSkcsQUFHSCxBQUNBLEFBRUY7aUJBTkYsQUFBTyxBQU1FLEFBRVY7QUFSUSxBQUNMO0FBRkosQUFBYyxBQVdkLE9BWGM7OzJDQVlaLEFBQUMsc0JBQUQsQUFBTSxTQUFNLE9BQVosQUFBbUI7b0JBQW5CO3NCQURGLEFBQ0UsQUFFSDtBQUZHO09BQUE7QTs7Ozs7NkJBS0ssQUFDUDs2QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUVFO0FBRkY7QUFBQSxPQUFBLGtCQUVFLGNBQUE7O29CQUFBO3NCQUFBLEFBRUU7QUFGRjtBQUFBLHlCQUVFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUZGLEFBRUUsQUFFQSxtQ0FBQSxBQUFDLDhCQUFLLE9BQU4sQUFBWTtvQkFBWjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRztBQURIO0FBQUEsU0FBQSxBQUdFLHFCQUFBLEFBQUM7a0JBQUQsTUFDVyxPQURYLEFBQ21CLEFBQ2pCO2lCQUZGLEFBRVUsQUFDUjtjQUhGLEFBR08sQUFDTDt1QkFKRixBQUlnQixBQUNkO2lCQUxGLEFBS1UsQUFFUjs7aUJBUEY7O29CQUFBO3NCQUhGLEFBR0UsQUFTQTtBQVRBO0FBQ0UsMEJBUUYsY0FBQSxZQUFRLFNBQVIsQUFBYztvQkFBZDtzQkFBQTtBQUFBO1NBakJOLEFBSUUsQUFDRSxBQVlFLEFBSUgsb0JBeEJQLEFBQ0UsQUFFRSxBQXFCRyxBQUFLLEFBSWI7Ozs7Ozs7Ozs7Ozt1QkF2RHlCLGtCQUFBLEFBQVEsUUFBUixBQUNyQixzQkFEcUIsQSxBQUVyQjs7bUJBRkc7QTtpREFJQyxFQUFFLFdBQUYsQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVJpQixBLEFBOEQ1Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJGOi9QcmFuaWthKHByb2YuKS9raWNrc3RhcnRFdGhlcmV1bS1tYXN0ZXIifQ==

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS40OTlkMTg3YmJjM2U3MGU2ZGE4ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/OTA1Y2JiYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgZmFjdG9yeSBmcm9tIFwiLi4vZXRoZXJldW0vZmFjdG9yeS5qc1wiO1xuaW1wb3J0IHtcbiAgQ2FyZCxcbiAgQnV0dG9uLFxuICBTZWdtZW50XG4gIFxufSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjsgLypodHRwczovL3JlYWN0LnNlbWFudGljLXVpLmNvbS92aWV3cy9jYXJkI3R5cGVzLWdyb3VwLXByb3BzKi9cbi8qaHR0cHM6Ly9yZWFjdC5zZW1hbnRpYy11aS5jb20vZWxlbWVudHMvYnV0dG9uI3R5cGVzLWxhYmVsZWQtaWNvbi1zaG9ydGhhbmQqL1xuLyppbXBvcnQgJ3NlbWFudGljLXVpLWNzcy9zZW1hbnRpYy5taW4uY3NzJzsqL1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXQuanNcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwiLi4vcm91dGVzLmpzXCI7XG5cbi8vIGNvbnN0IEltYWdlRXhhbXBsZUZsdWlkID0gKCkgPT4gPEltYWdlIHNyYz0naHR0cHM6Ly9yZWFjdC5zZW1hbnRpYy11aS5jb20vaW1hZ2VzL3dpcmVmcmFtZS9pbWFnZS5wbmcnIGZsdWlkIC8+XG5cblxuY2xhc3MgQ2FtcGFpZ25JbmRleCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHtcbiAgIFxuICAgIGNvbnN0IGNhbXBhaWducyA9IGF3YWl0IGZhY3RvcnkubWV0aG9kc1xuICAgICAgLmdldERlcGxveWVkQ2FtcGFpZ24oKVxuICAgICAgLmNhbGwoKTsgXG4gICAgLy9yZXR1cm4ge2NhbXBhaWducyA6IGNhbXBhaWduc31cbiAgICByZXR1cm4geyBjYW1wYWlnbnMgfTtcbiAgICAvL2NvbnNvbGUubG9nKGNhbXBhaWducyk7XG4gIH1cblxuICByZW5kZXJDYW1wYWlnbnMgPSAoKSA9PiB7XG4gICAgY29uc3QgaXRlbXMgPSB0aGlzLnByb3BzLmNhbXBhaWducy5tYXAoYWRkcmVzcyA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBoZWFkZXI6IGFkZHJlc3MsXG4gICAgICAgIGRlc2NyaXB0aW9uOihcbiAgICAgICAgICA8TGluayByb3V0ZSA9IHtgL2NhbXBhaWducy8ke2FkZHJlc3N9YH0+XG4gICAgICAgICAgPGEgY29sb3I9J2dyZWVuJz5WaWV3IGNhbXBhaWduPC9hPlxuICAgICAgICAgIDwvTGluaz4gKSwgXG4gICAgICAgIGZsdWlkOiB0cnVlIFxuICAgICAgfTtcbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICA8Q2FyZC5Hcm91cCBpdGVtcz17aXRlbXN9IC8+XG4gICAgKTtcbiAgfTtcblxuICBcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0ID5cbiAgICAgICAgXG4gICAgICAgIDxkaXY+XG4gICAgICAgIFxuICAgICAgICAgIDxoMz5PcGVuIENhbXBhaWduczwvaDM+XG4gICAgICAgICBcbiAgICAgICAgICA8TGluayByb3V0ZT1cIi9jYW1wYWlnbnMvbmV3XCI+XG4gICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIGludmVydGVkIGNvbG9yID0gJ29saXZlJ1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJDcmVhdGUgQ2FtcGFpZ25cIlxuICAgICAgICAgICAgICAgIGljb249XCJhZGQgY2lyY2xlXCJcbiAgICAgICAgICAgICAgICBsYWJlbFBvc2l0aW9uPVwibGVmdFwiXG4gICAgICAgICAgICAgICAgZmxvYXRlZD1cInJpZ2h0XCJcblxuICAgICAgICAgICAgICAgIHByaW1hcnlcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInVpIGludmVydGVkIGJ1dHRvblwiPlN0YW5kYXJkPC9idXR0b24+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAge3RoaXMucmVuZGVyQ2FtcGFpZ25zKCl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYW1wYWlnbkluZGV4IDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFRQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUFhQTtBQUNBOztBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFQQTtBQVNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFGQTtBQUFBOzs7Ozs7QUFNQTtBQUNBOztBQUFBO0FBRUE7QUFGQTtBQUFBOztBQUVBO0FBRUE7QUFGQTtBQUFBOztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFHQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFSQTs7QUFBQTtBQVNBO0FBVEE7QUFDQTtBQVFBO0FBQUE7QUFBQTtBQUlBOzs7Ozs7Ozs7Ozs7QUFuREE7QUFDQTtBQURBOztBQUlBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcURBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=