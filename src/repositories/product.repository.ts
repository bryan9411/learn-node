import type {
  Product,
  ListProductsInput,
  CreateProductData,
  ListProductsResult,
} from "../types/product"

const products: Product[] = [
  {
    id: 1,
    name: "牛仔褲",
    price: 1290,
    category: 1,
  },
  {
    id: 2,
    name: "羽絨外套",
    price: 2990,
    category: 2,
  },
  {
    id: 3,
    name: "T-shirt",
    price: 590,
    category: 1,
  },
]

let nextProductId = 4

const sortProducts = (
  input: ListProductsInput,
  products: Product[],
): Product[] => {
  const direction = input.sortOrder === "asc" ? 1 : -1
  return [...products].sort((first, second) => {
    switch (input.sortBy) {
      case "id":
        return (first.id - second.id) * direction

      case "price":
        return (first.price - second.price) * direction

      case "name":
        return first.name.localeCompare(second.name) * direction
    }
  })
}

export const create = (input: CreateProductData): Product => {
  const product: Product = {
    id: nextProductId,
    ...input,
  }

  nextProductId += 1
  products.push(product)

  return product
}

export const findAll = (input: ListProductsInput): ListProductsResult => {
  const filteredProducts = input.category
    ? products.filter((product) => product.category === input.category)
    : products
  
  const sortedProducts = sortProducts(input, filteredProducts)

  const total = sortedProducts.length
  const offset = (input.page - 1) * input.limit

  return {
    products: sortedProducts.slice(offset, offset + input.limit),
    total,
  }
}

export const findById = (id: number): Product | undefined => {
  return products.find((product) => product.id === id)
}

export const findByName = (name: string): Product | undefined => {
  return products.find((product) => product.name === name)
}
