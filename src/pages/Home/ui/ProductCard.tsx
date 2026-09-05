import { Link } from 'react-router-dom'
import { memo } from 'react'
import type { ProductListItem } from '../../../types/product.types'

type ProductCardProps = {
	product: ProductListItem
}

const ProductCard = ({ product }: ProductCardProps) => {
	const price = Number(product.price)
	const oldPrice = product.old_price ? Number(product.old_price) : null
	const wholesalePrice = product.wholesale_price
		? Number(product.wholesale_price)
		: null

	return (
		<Link
			to={`/product/${product.slug}`}
			className="group flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-pink-200 hover:shadow-lg"
		>
			<div className="relative aspect-3/4 overflow-hidden bg-neutral-100">
				{product.main_image ? (
					<img
						src={product.main_image}
						alt={product.name}
						loading="lazy"
						className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
					/>
				) : (
					<div className="flex h-full items-center justify-center text-6xl text-neutral-300">
						🌸
					</div>
				)}

				<div className="absolute left-3 top-3 flex flex-col items-start gap-1.5">
					{product.has_discount && (
						<span className="rounded-full bg-red-500 px-2.5 py-1 text-xs font-semibold text-white">
							-{product.discount_percent}%
						</span>
					)}

					{product.is_bestseller && (
						<span className="rounded-full bg-pink-600 px-2.5 py-1 text-xs font-semibold text-white">
							Хит
						</span>
					)}

					{product.is_new && (
						<span className="rounded-full bg-emerald-500 px-2.5 py-1 text-xs font-semibold text-white">
							Новинка
						</span>
					)}

					{product.has_wholesale && (
						<span className="rounded-full bg-amber-400 px-2.5 py-1 text-xs font-semibold text-neutral-900">
							Опт
						</span>
					)}
				</div>
			</div>

			<div className="flex flex-1 flex-col gap-2 p-4">
				<h3 className="line-clamp-2 text-sm font-medium text-neutral-800 transition group-hover:text-pink-600">
					{product.name}
				</h3>

				{product.volume && (
					<p className="text-xs text-neutral-500">{product.volume}</p>
				)}

				<div className="mt-auto">
					<div className="flex flex-wrap items-baseline gap-2">
						<span className="text-lg font-bold text-neutral-900">
							{price.toLocaleString('ru-RU')} сом
						</span>

						{product.has_discount && oldPrice !== null && (
							<span className="text-sm text-neutral-400 line-through">
								{oldPrice.toLocaleString('ru-RU')} сом
							</span>
						)}
					</div>

					{product.has_wholesale && wholesalePrice !== null && (
						<p className="mt-1 text-xs text-neutral-500">
							Опт от{' '}
							<span className="font-medium text-neutral-700">
								{wholesalePrice.toLocaleString('ru-RU')} сом
							</span>
							{' · '}
							от {product.wholesale_min_qty} шт.
						</p>
					)}

					{product.rating > 0 && (
						<p className="mt-2 text-xs text-neutral-500">
							★ {product.rating}
							{product.rating_count > 0 && (
								<span> ({product.rating_count})</span>
							)}
						</p>
					)}
				</div>
			</div>
		</Link>
	)
}

export default memo(ProductCard)
