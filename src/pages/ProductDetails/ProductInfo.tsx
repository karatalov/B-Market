import { useState } from 'react'
import { Link } from 'react-router-dom'

import type { ProductDetail } from '../../types/product.types'
import ProductDetails from './ProductDetails'

type ProductInfoProps = {
	product: ProductDetail
}

const ProductInfo = ({ product }: ProductInfoProps) => {
	const [quantity, setQuantity] = useState(1)

	const price = Number(product.price)

	const oldPrice = product.old_price ? Number(product.old_price) : null

	const wholesalePrice = product.wholesale_price
		? Number(product.wholesale_price)
		: null

	const decreaseQuantity = () => {
		setQuantity((current) => Math.max(1, current - 1))
	}

	const increaseQuantity = () => {
		setQuantity((current) => Math.min(product.stock, current + 1))
	}

	return (
		<div>
			<div className="flex flex-wrap items-center gap-2">
				{product.has_discount && (
					<span className="rounded-full bg-red-50 px-2.5 py-1 text-xs font-semibold text-red-600">
						-{product.discount_percent}%
					</span>
				)}

				{product.is_bestseller && (
					<span className="rounded-full bg-pink-50 px-2.5 py-1 text-xs font-semibold text-pink-600">
						Хит
					</span>
				)}

				{product.has_wholesale && (
					<span className="rounded-full bg-amber-100 px-2.5 py-1 text-xs font-semibold text-amber-700">
						Опт
					</span>
				)}

				{product.stock <= 0 && (
					<span className="rounded-full bg-neutral-100 px-2.5 py-1 text-xs font-semibold text-neutral-600">
						Нет в наличии
					</span>
				)}
			</div>

			<h1 className="mt-3 text-2xl font-bold leading-tight text-neutral-900 sm:text-3xl">
				{product.name}
			</h1>

			{product.shop && (
				<Link
					to={`/shops/${product.shop.id}`}
					className="mt-2 inline-flex text-sm text-neutral-500 transition hover:text-pink-600"
				>
					🏪 {product.shop.name}
				</Link>
			)}

			{product.rating > 0 && (
				<p className="mt-3 text-sm text-neutral-500">
					<span className="text-amber-400">★</span> {product.rating} ·{' '}
					{product.rating_count} отзывов
				</p>
			)}

			<div className="mt-6 flex flex-wrap items-baseline gap-3">
				<span className="text-3xl font-bold text-neutral-900">
					{price.toLocaleString('ru-RU')} сом
				</span>

				{product.has_discount && oldPrice !== null && (
					<span className="text-lg text-neutral-400 line-through">
						{oldPrice.toLocaleString('ru-RU')} сом
					</span>
				)}
			</div>

			{product.has_wholesale &&
				wholesalePrice !== null &&
				product.wholesale_min_qty && (
					<p className="mt-2 text-sm text-neutral-500">
						Опт от{' '}
						<span className="font-medium text-neutral-700">
							{wholesalePrice.toLocaleString('ru-RU')} сом
						</span>{' '}
						при заказе от {product.wholesale_min_qty} шт.
					</p>
				)}

			<div className="mt-7 flex gap-3">
				<div className="flex h-12 items-center rounded-xl border border-neutral-300 bg-white">
					<button
						type="button"
						onClick={decreaseQuantity}
						className="h-full px-4 text-lg transition hover:text-pink-600"
					>
						−
					</button>

					<span className="w-10 text-center font-medium">{quantity}</span>

					<button
						type="button"
						onClick={increaseQuantity}
						disabled={quantity >= product.stock}
						className="h-full px-4 text-lg transition hover:text-pink-600 disabled:cursor-not-allowed disabled:text-neutral-300"
					>
						+
					</button>
				</div>

				<button
					type="button"
					disabled={product.stock <= 0}
					className="h-12 flex-1 rounded-xl bg-pink-600 px-6 font-semibold text-white transition hover:bg-pink-700 disabled:cursor-not-allowed disabled:bg-neutral-300"
				>
					{product.stock > 0 ? 'В корзину' : 'Нет в наличии'}
				</button>

				<button
					type="button"
					aria-label="Добавить в избранное"
					className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-neutral-200 bg-white text-xl transition hover:border-pink-300"
				>
					🤍
				</button>
			</div>

			<button
				type="button"
				className="mt-3 rounded-xl border border-neutral-200 bg-white px-5 py-3 text-sm font-medium text-neutral-700 transition hover:border-pink-300 hover:text-pink-600"
			>
				💬 Написать продавцу
			</button>

			{product.wholesale_tiers?.length > 0 && (
				<div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4">
					<h3 className="font-semibold text-neutral-900">Оптовые цены</h3>

					<ul className="mt-3 space-y-2 text-sm">
						{product.wholesale_tiers.map((tier) => (
							<li key={tier.min_qty} className="flex justify-between gap-4">
								<span className="text-neutral-600">От {tier.min_qty} шт.</span>

								<span className="font-medium text-neutral-900">
									{Number(tier.price).toLocaleString('ru-RU')} сом
								</span>
							</li>
						))}
					</ul>
				</div>
			)}

			<ProductDetails product={product} />
		</div>
	)
}

export default ProductInfo
