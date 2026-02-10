"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonResponse = void 0;
const jsonResponse = (object, res) => {
    res.status(200).json(object);
};
exports.jsonResponse = jsonResponse;
//# sourceMappingURL=response.js.map