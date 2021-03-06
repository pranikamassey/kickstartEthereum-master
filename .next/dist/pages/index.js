"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _factory = require("../ethereum/factory.js");

var _factory2 = _interopRequireDefault(_factory);

var _semanticUiReact = require("semantic-ui-react");

var _Layout = require("../components/Layout.js");

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = require("../routes.js");

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