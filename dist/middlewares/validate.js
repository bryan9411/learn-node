"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseOrThrow = void 0;
const app_error_1 = require("../errors/app.error");
const parseOrThrow = (schema, input) => {
    const result = schema.safeParse(input);
    if (!result.success) {
        throw new app_error_1.AppError(422, 'VALIDATION_ERROR', 'Invalid request data');
    }
    return result.data;
};
exports.parseOrThrow = parseOrThrow;
