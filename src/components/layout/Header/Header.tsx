import { useState } from 'react'
import HeaderMobileMenu from './HeaderMobileMenu'
import HeaderActions from './HeaderActions'
import HeaderSearch from './HeaderSearch'
import HeaderLogo from './HeaderLogo'
import HeaderNav from './HeaderNav'

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false)

	return (
		<header className="sticky top-0 z-50 border-b border-neutral-200 bg-white">
			<div className="mx-auto flex min-h-22 w-full items-center gap-4 px-4 sm:px-6">
				<HeaderLogo />

				<div className="relative hidden w-full max-w-87.5 lg:block">
					<HeaderSearch />
				</div>

				<nav className="ml-auto hidden items-center gap-1 xl:flex">
					<HeaderNav />
				</nav>

				<div className="ml-auto hidden shrink-0 items-center gap-1 sm:flex xl:ml-0">
					<HeaderActions />
				</div>

				<button
					type="button"
					aria-label="Открыть меню"
					aria-expanded={menuOpen}
					onClick={() => setMenuOpen((prev) => !prev)}
					className="ml-auto flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-2xl text-neutral-700 transition hover:bg-neutral-100 xl:hidden"
				>
					{menuOpen ? '✕' : '☰'}
				</button>
			</div>

			<HeaderMobileMenu menuOpen={menuOpen} />
		</header>
	)
}

export default Header
