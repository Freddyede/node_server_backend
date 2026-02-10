"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.index = void 0;
const response_1 = require("../utils/response");
const index = (_req, res) => {
    (0, response_1.jsonResponse)({ controller_name: 'HomeController', status: res.statusCode }, res);
};
exports.index = index;
//# sourceMappingURL=HomeController.js.map