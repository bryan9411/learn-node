import type { RequestHandler } from 'express'
import type { GetProductsQuery, GetProductParams, CreateProductBody } from '../schemas/product.schema'

export interface Product {
  id: number
  name: string
  price: number
  category: number
}

export type CreateProductData = Omit<Product, 'id'>
export type ListProductsInput = {
  category?: number
  page: number
  limit: number,
  sortBy: 'id' | 'name' | 'price',
  sortOrder: 'asc' | 'desc'
}

type EmptyObject = Record<string, never>

// ----------------------------- product List -------------------------------

export type ListProductsResult = {
  products: Product[]
  total: number
}

type ProductListResponse = {
  data: Product[],
  meta: {
    page: number
    limit: number
    total: number
    totalPages: number
    sortBy: 'id' | 'name' | 'price'
    sortOrder: 'asc' | 'desc'
  }
}

export type GetProductsLocals = {
  validated: {
    query: GetProductsQuery
  }
}

export type GetProductsHandler = RequestHandler<
  EmptyObject,          // params：此 endpoint 不用
  ProductListResponse,  // response body
  EmptyObject,          // request body：此 endpoint 不用
  unknown,              // unknown 代表 Controller 不該使用原始 req.query。它只能使用已驗證的 res.locals.validated.query
  GetProductsLocals     // res.locals 的資料契約
>

// ----------------------------- product detail -------------------------------
type ProductDetailResponse = {
  data: Product
}

export type GetProductLocals = {
  validated: {
    params: GetProductParams
  }
}

export type GetProductHandler = RequestHandler<
  unknown,    
  ProductDetailResponse,
  EmptyObject,          
  unknown,              
  GetProductLocals      
>

// ----------------------------- create product -------------------------------
type CreateProductResponse = {
  data: Product
}

export type CreateProductLocals = {
  validated: {
    body: CreateProductBody
  }
}

export type CreateProductHandler = RequestHandler<
  unknown,    
  CreateProductResponse,
  unknown,          
  unknown,              
  CreateProductLocals      
>
