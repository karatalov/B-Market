import type { ProductDetail } from '../../types/product.types'

type ProductDetailsProps = {
	product: ProductDetail
}

const ProductDetails = ({ product }: ProductDetailsProps) => {
	return (
		<dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-neutral-200 pt-6 text-sm">
			{product.sku && (
				<div>
					<dt className="text-neutral-500">Артикул</dt>

					<dd className="mt-1 font-medium text-neutral-900">{product.sku}</dd>
				</div>
			)}

			{product.volume && (
				<div>
					<dt className="text-neutral-500">Объём</dt>

					<dd className="mt-1 font-medium text-neutral-900">
						{product.volume}
					</dd>
				</div>
			)}

			{product.color && (
				<div>
					<dt className="text-neutral-500">Цвет</dt>

					<dd className="mt-1 font-medium text-neutral-900">{product.color}</dd>
				</div>
			)}

			{product.country && (
				<div>
					<dt className="text-neutral-500">Страна</dt>

					<dd className="mt-1 font-medium text-neutral-900">
						{product.country}
					</dd>
				</div>
			)}

			<div>
				<dt className="text-neutral-500">В наличии</dt>

				<dd className="mt-1 font-medium text-neutral-900">
					{product.stock} шт.
				</dd>
			</div>
		</dl>
	)
}

export default ProductDetails
