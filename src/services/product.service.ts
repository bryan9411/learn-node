import * as productRepository from '../repositories/product.repository'
import { ProductNotFoundError, ProductAlreadyExistsError } from '../errors/product.error'
import type { Product, CreateProductData, ListProductsInput, ListProductsResult } from '../types/product'

export const getProducts = (input: ListProductsInput): ListProductsResult => {
  return productRepository.findAll(input)
}

export const getProductById = (id: number) => {
  const product = productRepository.findById(id)

  if (!product) {
    throw new ProductNotFoundError()
  }
  
  return product
}

export const createProduct = (input: CreateProductData): Product => {
  const existingProduct = productRepository.findByName(input.name)
  
  if (existingProduct) {
    throw new ProductAlreadyExistsError()
  }

  return productRepository.create(input)
}


