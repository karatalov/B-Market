export type ProductListItem = {
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
	results: ProductListItem[]
}

export type ProductShop = {
	id: number
	name: string
}

export type ProductImage = {
	id: number
	image: string
	is_main: boolean
	url: string
}

export type WholesaleTier = {
	min_qty: number
	max_qty: number | null
	price: string
}

export type ProductDetail = {
	id: number

	name: string
	name_ru: string
	name_ky: string
	name_en: string

	description: string
	description_ru: string
	description_ky: string
	description_en: string

	slug: string
	sku: string

	price: string
	old_price: string | null

	wholesale_price: string | null
	wholesale_min_qty: number | null

	stock: number
	volume: string | null
	color: string | null
	country: string | null

	category: number
	brand: number

	shop: ProductShop

	rating: number
	rating_count: number

	has_discount: boolean
	discount_percent: number

	is_new: boolean
	is_out_of_stock: boolean
	is_bestseller: boolean
	has_wholesale: boolean

	main_image: string | null
	images: ProductImage[]

	wholesale_tiers: WholesaleTier[]

	related_products: ProductListItem[]

	view_count: number
	favorite_count: number

	created_at: string
}
