import { getProductsQuerySchema, getProductParamsSchema, createProductSchema } from '../schemas/product.schema'
import type { GetProductsHandler, GetProductHandler, CreateProductHandler } from '../types/product'
import { parseOrThrow } from './validate'

export const validateGetProductsQuery: GetProductsHandler = (req, res, next) => {
  const query = parseOrThrow(getProductsQuerySchema, req.query)
  
  res.locals.validated = {
    query
  }
  
  next()
}

export const validateGetProductParams: GetProductHandler = (req, res, next) => {
  const params = parseOrThrow(getProductParamsSchema, req.params)
  
  res.locals.validated = {
    params
  }
  
  next()
}

export const validateCreateProductBody: CreateProductHandler = (req, res, next) => {
  const body = parseOrThrow(createProductSchema, req.body)
  
  res.locals.validated = {
    body
  }
  
  next()
}
