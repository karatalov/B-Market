import HeaderLanguageSwitcher from "./HeaderLanguageSwitcher"

const HeaderActions = () => {
	return (
		<>
			<HeaderLanguageSwitcher />
			<button
				type="button"
				aria-label="Уведомления"
				className="rounded-lg p-2 text-xl transition hover:bg-neutral-100"
			>
				🔔
			</button>

			<button
				type="button"
				aria-label="Корзина"
				className="rounded-lg p-2 text-xl transition hover:bg-neutral-100"
			>
				🛒
			</button>

			<a
				href="#"
				className="rounded-lg px-4 py-3 text-base font-medium text-neutral-700 transition hover:bg-neutral-100"
			>
				Войти
			</a>

			<a
				href="#"
				className="rounded-xl bg-pink-600 px-5 py-3 text-base font-semibold text-white transition hover:bg-pink-700"
			>
				Регистрация
			</a>
		</>
	)
}

export default HeaderActions
