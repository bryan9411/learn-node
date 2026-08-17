import { Router } from 'express'
import { getProducts, getProduct, createProduct } from '../controllers/product.controller'
import { validateGetProductsQuery, validateGetProductParams, validateCreateProductBody } from '../middlewares/product-validation'

const router = Router()

router.get('/products', validateGetProductsQuery, getProducts)
router.get('/products/:id', validateGetProductParams, getProduct)
router.post('/products', validateCreateProductBody, createProduct)
export default router
