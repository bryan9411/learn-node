"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const app_error_1 = require("../errors/app.error");
const errorHandler = (err, req, res, next) => {
    console.error(err);
    if (err instanceof app_error_1.AppError) {
        return res.status(err.statusCode).json({
            error: {
                code: err.code,
                message: err.message,
            },
        });
    }
    return res.status(500).json({
        error: {
            code: 'INTERNAL_SERVER_ERROR',
            message: 'Internal server error',
        }
    });
};
exports.errorHandler = errorHandler;
