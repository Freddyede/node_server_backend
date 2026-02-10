"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const homeRoad = (0, express_1.Router)();
homeRoad.get('/', controllers_1.HomeController.index);
exports.default = homeRoad;
//# sourceMappingURL=HomeRoad.js.map