import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import { getProductBySlug } from '../../services/products/products.api'
import type { ProductDetail } from '../../types/product.types'
import ProductGallery from './ProductGallery'
import ProductInfo from './ProductInfo'
import ProductPageSkeleton from './ProductPageSkeleton'

const ProductPage = () => {
	const { slug } = useParams<{ slug: string }>()

	const [product, setProduct] = useState<ProductDetail | null>(null)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		if (!slug) return

		const loadProduct = async () => {
			try {
				setLoading(true)
				setError(null)

				const data = await getProductBySlug(slug)

				setProduct(data)
			} catch (error) {
				if (error instanceof Error) {
					setError(error.message)
				} else {
					setError('Не удалось загрузить товар')
				}
			} finally {
				setLoading(false)
			}
		}

		loadProduct()
	}, [slug])

	if (loading) {
		return <ProductPageSkeleton />
	}

	if (error) {
		return (
			<div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6">
				<h1 className="text-xl font-semibold text-neutral-900">
					Не удалось загрузить товар
				</h1>

				<p className="mt-2 text-sm text-neutral-500">{error}</p>
			</div>
		)
	}

	if (!product) {
		return (
			<div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6">
				<h1 className="text-xl font-semibold text-neutral-900">
					Товар не найден
				</h1>
			</div>
		)
	}

	return (
		<main className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6">
			<nav className="mb-5 flex items-center gap-2 text-sm text-neutral-500">
				<Link to="/catalog" className="transition hover:text-pink-600">
					Каталог
				</Link>

				<span>/</span>

				<span className="truncate text-neutral-400">{product.name}</span>
			</nav>

			<div className="grid gap-8 lg:grid-cols-2">
				<ProductGallery product={product} />

				<ProductInfo product={product} />
			</div>

			{product.description && (
				<section className="mt-12 border-t border-neutral-200 pt-8">
					<h2 className="text-xl font-bold text-neutral-900">Описание</h2>

					<p className="mt-4 max-w-4xl whitespace-pre-line leading-7 text-neutral-600">
						{product.description}
					</p>
				</section>
			)}
		</main>
	)
}

export default ProductPage
