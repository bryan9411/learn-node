"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateGetProductParams = exports.validateGetProductsQuery = void 0;
const product_schema_1 = require("../schemas/product.schema");
const validate_1 = require("./validate");
const validateGetProductsQuery = (req, res, next) => {
    const query = (0, validate_1.parseOrThrow)(product_schema_1.getProductsQuerySchema, req.query);
    res.locals.validated = {
        query
    };
    next();
};
exports.validateGetProductsQuery = validateGetProductsQuery;
const validateGetProductParams = (req, res, next) => {
    const params = (0, validate_1.parseOrThrow)(product_schema_1.getProductParamsSchema, req.params);
    res.locals.validated = {
        params
    };
    next();
};
exports.validateGetProductParams = validateGetProductParams;
