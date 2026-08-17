"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findById = exports.findAll = void 0;
const products = [
    {
        id: 1,
        name: '牛仔褲',
        price: 1290,
        category: 1,
    },
    {
        id: 2,
        name: '羽絨外套',
        price: 2990,
        category: 2,
    },
    {
        id: 3,
        name: 'T-shirt',
        price: 590,
        category: 1,
    },
];
const findAll = (input) => {
    let result = [];
    const offset = (input.page - 1) * input.limit;
    if (input.category) {
        result = products.filter(product => product.category === input.category);
        return result.slice(offset, offset + input.limit);
    }
    return products.slice(offset, offset + input.limit);
};
exports.findAll = findAll;
const findById = (id) => {
    return products.find(product => product.id === id);
};
exports.findById = findById;
