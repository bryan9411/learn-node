"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductNotFoundError = void 0;
const app_error_1 = require("./app.error");
class ProductNotFoundError extends app_error_1.AppError {
    constructor() {
        super(404, 'PRODUCT_NOT_FOUND', 'Product not found');
    }
}
exports.ProductNotFoundError = ProductNotFoundError;
