export type Product = {
	id: number
	name: string
	slug: string
	price: string
	old_price: string | null
	wholesale_price: string | null
	wholesale_min_qty: number | null
	stock: number
	volume: string | null
	color: string | null
	is_bestseller: boolean
	rating: number
	rating_count: number
	has_discount: boolean
	discount_percent: number
	is_new: boolean
	has_wholesale: boolean
	main_image: string | null
}

export type ProductsResponse = {
	count: number
	next: string | null
	previous: string | null
	results: Product[]
}
