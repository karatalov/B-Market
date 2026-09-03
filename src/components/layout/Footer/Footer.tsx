import FooterLogo from './FooterLogo'
import FooterLinks from './FooterLinks'

const Footer = () => {
	return (
		<footer className="mt-auto border-t border-neutral-200 bg-white select-none">
			<div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
				<FooterLogo />

				<FooterLinks />
			</div>

			<div className="border-t border-neutral-100">
				<div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-center text-xs text-neutral-400 sm:flex-row sm:px-6 sm:text-left">
					<p>© {new Date().getFullYear()} BeautyMarket. Все права защищены.</p>

					<p>Кыргызстан 🇰🇬</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer
