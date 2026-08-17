import type { ZodType } from 'zod'
import { AppError } from '../errors/app.error'

export const parseOrThrow = <T>(schema: ZodType<T>, input: unknown): T =>  {
  const result = schema.safeParse(input)
  
  if (!result.success) {
    throw new AppError(
      422,
      'VALIDATION_ERROR',
      'Invalid request data',
    )
  }
  
  return result.data
}
