import { useState } from 'react'

import type { ProductDetail } from '../../types/product.types'

type ProductGalleryProps = {
	product: ProductDetail
}

const ProductGallery = ({ product }: ProductGalleryProps) => {
	const [activeIndex, setActiveIndex] = useState(0)

	const galleryImages = (
		product.images?.length
			? product.images.map((image) => image.url)
			: product.main_image
				? [product.main_image]
				: []
	).filter(Boolean)


	const activeImage = galleryImages[activeIndex]

	const showPrevious = () => {
		setActiveIndex((current) =>
			current === 0 ? galleryImages.length - 1 : current - 1,
		)
	}

	const showNext = () => {
		setActiveIndex((current) =>
			current === galleryImages.length - 1 ? 0 : current + 1,
		)
	}

	return (
		<div>
			<div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50">
				{activeImage ? (
					<img
						src={activeImage}
						alt={product.name}
						className="h-full w-full object-cover"
					/>
				) : (
					<span className="text-8xl">🌸</span>
				)}

				{galleryImages.length > 1 && (
					<>
						<button
							type="button"
							onClick={showPrevious}
							aria-label="Предыдущее изображение"
							className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-2xl text-neutral-700 shadow-sm transition hover:bg-white"
						>
							‹
						</button>

						<button
							type="button"
							onClick={showNext}
							aria-label="Следующее изображение"
							className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-2xl text-neutral-700 shadow-sm transition hover:bg-white"
						>
							›
						</button>
					</>
				)}
			</div>

			{galleryImages.length > 1 && (
				<div className="mt-3 flex gap-2 overflow-x-auto">
					{galleryImages.map((image, index) => (
						<button
							key={image}
							type="button"
							onClick={() => setActiveIndex(index)}
							className={`shrink-0 overflow-hidden rounded-lg border p-0.5 transition ${
								index === activeIndex
									? 'border-pink-500 ring-2 ring-pink-100'
									: 'border-neutral-200 hover:border-pink-300'
							}`}
						>
							<img
								src={image}
								alt=""
								className="h-16 w-16 rounded-md object-cover"
							/>
						</button>
					))}
				</div>
			)}
		</div>
	)
}

export default ProductGallery
