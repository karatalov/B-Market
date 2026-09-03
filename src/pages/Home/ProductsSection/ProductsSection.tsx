import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { getProducts } from '../../../services/products/products.api'
import type { Product } from '../../../types/product.types'
import ProductCard from '../ui/ProductCard'

const ProductsSection = () => {
	const [products, setProducts] = useState<Product[]>([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		const loadProducts = async () => {
			try {
				setLoading(true)
				setError(null)

				const data = await getProducts({
					page_size: 8,
				})

				setProducts(data.results)
			} catch (error) {
				if (error instanceof Error) {
					setError(`Ошибка при загрузке товаров. ${error.message}`)
				} else {
					setError('Ошибка при загрузке товаров.')
				}
			} finally {
				setLoading(false)
			}
		}

		loadProducts()
	}, [])

	return (
		<section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6">
			<div className="mb-6 flex items-center justify-between">
				<h2 className="text-2xl font-bold text-neutral-900">
					Популярные товары
				</h2>

				<Link
					to="/catalog"
					className="text-sm font-medium text-pink-600 transition hover:text-pink-700"
				>
					Смотреть все →
				</Link>
			</div>

			{loading && (
				<div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
					{Array.from({ length: 8 }).map((_, index) => (
						<div
							key={index}
							className="overflow-hidden rounded-2xl border border-neutral-200 bg-white"
						>
							<div className="aspect-3/4 animate-pulse bg-neutral-200" />

							<div className="space-y-3 p-4">
								<div className="h-4 w-full animate-pulse rounded bg-neutral-200" />

								<div className="h-4 w-2/3 animate-pulse rounded bg-neutral-200" />

								<div className="h-6 w-1/2 animate-pulse rounded bg-neutral-200" />
							</div>
						</div>
					))}
				</div>
			)}

			{error && !loading && (
				<div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-6 text-center">
					<p className="font-medium text-red-700">
						Не удалось загрузить товары
					</p>

					<p className="mt-1 text-sm text-red-600">{error}</p>
				</div>
			)}

			{!loading && !error && products.length === 0 && (
				<div className="py-10 text-center text-neutral-500">
					Товары пока отсутствуют
				</div>
			)}

			{!loading && !error && products.length > 0 && (
				<div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
					{products.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
				</div>
			)}
		</section>
	)
}

export default ProductsSection
