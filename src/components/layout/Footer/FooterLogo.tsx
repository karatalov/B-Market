import { Link } from 'react-router-dom'

const FooterLogo = () => {
	return (
		<div className="md:col-span-2 lg:col-span-1">
			<Link to="/" className="inline-flex items-center gap-2">
				<span className="flex h-9 w-9 items-center justify-center rounded-xl bg-pink-600 text-lg font-bold text-white">
					B
				</span>

				<span className="text-lg font-bold text-neutral-900">BeautyMarket</span>
			</Link>

			<p className="mt-4 max-w-xs text-sm leading-6 text-neutral-500">
				Косметика, парфюмерия и товары для ухода от проверенных продавцов в
				одном месте.
			</p>
		</div>
	)
}

export default FooterLogo
