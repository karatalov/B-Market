import { api } from '../api'

import type { ProductDetail, ProductsResponse } from '../../types/product.types'

export type ProductsParams = {
	category?: number
	category_parent?: number
	brand?: number
	price_gte?: number
	price_lte?: number
	is_bestseller?: boolean
	is_active?: boolean
	country?: string
	wholesale?: boolean
	search?: string
	ordering?: string
	page?: number
	page_size?: number
}

export const getProducts = (
	params: ProductsParams = {},
): Promise<ProductsResponse> => {
	const searchParams = new URLSearchParams()

	Object.entries(params).forEach(([key, value]) => {
		if (value !== undefined) {
			searchParams.set(key, String(value))
		}
	})

	const query = searchParams.toString()

	return api<ProductsResponse>(`/products/${query ? `?${query}` : ''}`)
}

export const getProductBySlug = (slug: string): Promise<ProductDetail> => {
	return api<ProductDetail>(`/products/${slug}/`)
}
