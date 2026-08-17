import * as productService from "../services/product.service"
import type {
  GetProductsHandler,
  GetProductHandler,
  CreateProductHandler,
} from "../types/product"

export const getProducts: GetProductsHandler = (_req, res) => {
  const query = res.locals.validated.query
  const { products, total } = productService.getProducts(query)

  return res.status(200).json({
    data: products,
    meta: {
      page: query.page,
      limit: query.limit,
      total,
      totalPages: Math.ceil(total / query.limit),
      sortBy: query.sortBy,
      sortOrder: query.sortOrder
    }
  })
}

export const getProduct: GetProductHandler = (_req, res) => {
  const product = productService.getProductById(res.locals.validated.params.id)

  return res.status(200).json({
    data: product,
  })
}

export const createProduct: CreateProductHandler = (_req, res) => {
  const product = productService.createProduct(res.locals.validated.body)

  return res.status(201).json({
    data: product,
  })
}
