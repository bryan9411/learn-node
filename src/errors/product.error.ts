import { AppError } from './app.error'

export class ProductNotFoundError extends AppError {
  constructor() {
    super(404, 'PRODUCT_NOT_FOUND', 'Product not found')
  }
}

export class ProductAlreadyExistsError extends AppError {
  constructor() {
    super(409, 'PRODUCT_ALREADY_EXISTS', 'Product name already exists')
  }
}
