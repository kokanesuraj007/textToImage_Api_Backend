"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _express = _interopRequireDefault(require("express"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var dotenv = _interopRequireWildcard(require("dotenv"));

var _cors = _interopRequireDefault(require("cors"));

var _createImageRoutes = _interopRequireDefault(require("./routes/createImageRoutes.js"));

var _postRoutes = _interopRequireDefault(require("./routes/postRoutes.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

dotenv.config();
var app = (0, _express["default"])();
var port = 1710;
app.use((0, _cors["default"])());
app.use(_express["default"].json({
  limit: "50mb"
}));
app.use("/api/v1/post", _postRoutes["default"]);
app.use("/api/v1/createImage", _createImageRoutes["default"]);
app.get("/", function _callee(req, res) {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          res.send("Hello from SERVER!");

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
});

var startServer = function startServer() {
  return regeneratorRuntime.async(function startServer$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          try {
            _mongoose["default"].set("strictQuery", true);

            _mongoose["default"].connect(process.env.MONGODB_URI).then(function () {
              return console.log("MongoDB connected successfully!");
            })["catch"](function (err) {
              return console.log(err);
            });

            app.listen(port, function () {
              console.log("Server has started on port http://localhost:".concat(port));
            });
          } catch (error) {
            console.log(error);
          }

        case 1:
        case "end":
          return _context2.stop();
      }
    }
  });
};

startServer();
//# sourceMappingURL=index.dev.js.map
