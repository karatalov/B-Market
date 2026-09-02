const HeroSection = () => {
	return (
		<section className="overflow-hidden bg-linear-to-br from-pink-50 via-white to-pink-100 select-none">
			<div className="mx-auto flex min-h-125 w-full max-w-7xl flex-col items-center justify-between gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:flex-row lg:py-20">
				<div className="max-w-2xl text-center lg:text-left">
					<h1 className="animate-hero-title text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
						Красота начинается
						<span className="mt-2 block text-pink-600">
							с правильного выбора
						</span>
					</h1>

					<p className="animate-hero-text mx-auto mt-6 max-w-xl text-base leading-7 text-neutral-600 sm:text-lg lg:mx-0">
						Косметика, парфюмерия и уходовые средства от лучших брендов в одном
						месте.
					</p>

					<div className="animate-hero-actions mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
						<a
							href="#"
							className="inline-flex min-h-12 items-center justify-center rounded-xl bg-pink-600 px-7 py-3 text-base font-semibold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-pink-700 hover:shadow-lg"
						>
							Перейти в каталог
						</a>

						<a
							href="#"
							className="group inline-flex min-h-12 items-center justify-center gap-2 px-4 py-3 text-base font-medium text-neutral-600 transition hover:text-pink-600"
						>
							Стать продавцом
							<span className="transition-transform duration-300 group-hover:translate-x-1">
								→
							</span>
						</a>
					</div>
				</div>

				<div className="animate-hero-image flex w-full max-w-sm justify-center lg:max-w-md lg:justify-end">
					<div className="flex aspect-square w-full max-w-80 items-center justify-center rounded-4xl border border-pink-100 bg-white/80 shadow-xl backdrop-blur-sm sm:max-w-90">
						<span
							className="animate-hero-float text-8xl sm:text-9xl"
							aria-hidden="true"
						>
							🌸
						</span>
					</div>
				</div>
			</div>
		</section>
	)
}

export default HeroSection
