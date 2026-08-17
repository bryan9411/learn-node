"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductParamsSchema = exports.getProductsQuerySchema = exports.createProductSchema = void 0;
const zod_1 = require("zod");
exports.createProductSchema = zod_1.z.object({
    name: zod_1.z.string().min(1).max(100),
    price: zod_1.z.number().positive(),
    category: zod_1.z.number().int().positive()
});
exports.getProductsQuerySchema = zod_1.z.object({
    category: zod_1.z.coerce.number().int().positive().optional(),
    page: zod_1.z.coerce.number().int().positive().default(1),
    limit: zod_1.z.coerce.number().int().positive().max(100).default(20)
}).strict();
exports.getProductParamsSchema = zod_1.z.object({
    id: zod_1.z.coerce.number().int().positive()
});
