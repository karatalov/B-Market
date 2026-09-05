const ProductPageSkeleton = () => {
	return (
		<div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6">
			<div className="mb-5 h-4 w-40 animate-pulse rounded bg-neutral-200" />

			<div className="grid gap-8 lg:grid-cols-2">
				<div>
					<div className="aspect-square animate-pulse rounded-2xl bg-neutral-200" />

					<div className="mt-3 flex gap-2">
						{Array.from({ length: 4 }).map((_, index) => (
							<div
								key={index}
								className="h-16 w-16 animate-pulse rounded-lg bg-neutral-200"
							/>
						))}
					</div>
				</div>

				<div className="space-y-4">
					<div className="h-5 w-24 animate-pulse rounded bg-neutral-200" />
					<div className="h-8 w-3/4 animate-pulse rounded bg-neutral-200" />
					<div className="h-4 w-32 animate-pulse rounded bg-neutral-200" />
					<div className="h-10 w-48 animate-pulse rounded bg-neutral-200" />
					<div className="h-12 w-full animate-pulse rounded-xl bg-neutral-200" />

					<div className="mt-8 grid grid-cols-2 gap-4">
						{Array.from({ length: 4 }).map((_, index) => (
							<div
								key={index}
								className="h-12 animate-pulse rounded bg-neutral-200"
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProductPageSkeleton
