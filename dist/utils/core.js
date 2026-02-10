"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.runServer = void 0;
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const config_1 = require("../config");
const routes_1 = require("../routes");
const runServer = () => {
    if (process.env.PORT) {
        const port = config_1.serverConfig.port;
        const app = (0, express_1.default)();
        app.use(body_parser_1.default.json());
        app.use(routes_1.HomeRoad);
        app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
    }
};
exports.runServer = runServer;
//# sourceMappingURL=core.js.map