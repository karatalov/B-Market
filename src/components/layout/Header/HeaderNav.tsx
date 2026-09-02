import { navItems } from './header.data'

const HeaderNav = () => {
	return (
		<>
			{navItems.map((item) => (
				<a
					key={item.href}
					href={item.href}
					className="whitespace-nowrap rounded-lg px-3 py-2 text-base font-medium text-neutral-600 transition hover:bg-neutral-50 hover:text-pink-600"
				>
					{item.label}
				</a>
			))}
		</>
	)
}

export default HeaderNav
