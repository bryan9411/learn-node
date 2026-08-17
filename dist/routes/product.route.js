"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_controller_1 = require("../controllers/product.controller");
const product_validation_1 = require("../middlewares/product-validation");
const router = (0, express_1.Router)();
router.get('/products', product_validation_1.validateGetProductsQuery, product_controller_1.getProducts);
router.get('/products/:id', product_validation_1.validateGetProductParams, product_controller_1.getProduct);
exports.default = router;
