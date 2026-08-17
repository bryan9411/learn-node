import { z } from 'zod'

export const createProductSchema = z.object({
  name: z.string().min(1).max(100),
  price: z.number().positive(),
  category: z.number().int().positive()
}).strict()

export const getProductsQuerySchema = z.object({
  category: z.coerce.number().int().positive().optional(),
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().positive().max(100).default(20),
  sortBy: z.enum(['id', 'name', 'price']).default('id'),
  sortOrder: z.enum(['asc', 'desc']).default('asc'),
}).strict()

export const getProductParamsSchema = z.object({
  id: z.coerce.number().int().positive()
})

export type GetProductsQuery = z.output<typeof getProductsQuerySchema>
export type GetProductParams = z.output<typeof getProductParamsSchema>
export type CreateProductBody = z.output<typeof createProductSchema>
