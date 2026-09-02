import { navItems } from './header.data'
import HeaderLanguageSwitcher from './HeaderLanguageSwitcher'
import HeaderSearch from './HeaderSearch'

const HeaderMobileMenu = ({ menuOpen }: { menuOpen: boolean }) => {
	return (
		<>
			{menuOpen && (
				<div className="border-t border-neutral-200 bg-white px-4 py-4 xl:hidden sm:px-6">
					<div className="mx-auto flex max-w-3xl flex-col gap-3">
						<div className="relative lg:hidden">
							<HeaderSearch />
						</div>

						<nav className="flex flex-col">
							{navItems.map((item) => (
								<a
									key={item.href}
									href={item.href}
									className="rounded-lg px-3 py-3 text-base font-medium text-neutral-700 transition hover:bg-neutral-50 hover:text-pink-600"
								>
									{item.label}
								</a>
							))}
						</nav>

						<div className="flex items-center gap-2 border-t border-neutral-100 pt-3 sm:hidden">
							<HeaderLanguageSwitcher />

							<button
								type="button"
								aria-label="Уведомления"
								className="rounded-lg p-2 text-xl hover:bg-neutral-100"
							>
								🔔
							</button>

							<button
								type="button"
								aria-label="Корзина"
								className="rounded-lg p-2 text-xl hover:bg-neutral-100"
							>
								🛒
							</button>
						</div>

						<div className="grid grid-cols-2 gap-2 sm:hidden">
							<a
								href="#"
								className="rounded-xl border border-neutral-200 px-4 py-3 text-center font-medium text-neutral-700"
							>
								Войти
							</a>

							<a
								href="#"
								className="rounded-xl bg-pink-600 px-4 py-3 text-center font-semibold text-white"
							>
								Регистрация
							</a>
						</div>
					</div>
				</div>
			)}
		</>
	)
}

export default HeaderMobileMenu
