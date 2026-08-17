import express from 'express'
import productRouter from './routes/product.route'
import { errorHandler } from './middlewares/error-handler'

const app = express()

app.use(express.json())
app.use(productRouter)
app.use(errorHandler)

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000')
}) 
