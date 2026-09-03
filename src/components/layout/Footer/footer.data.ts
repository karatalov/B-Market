import type { FooterSection } from './footer.types'

export const footerSections: FooterSection[] = [
	{
		title: 'Покупателям',
		links: [
			{ label: 'Каталог', to: '/catalog' },
			{ label: 'Бренды', to: '/brands' },
			{ label: 'Магазины', to: '/shops' },
			{ label: 'Корзина', to: '/cart' },
			{ label: 'Мои заказы', to: '/orders' },
		],
	},
	{
		title: 'Для бизнеса',
		links: [
			{ label: 'Стать продавцом', to: '/register?seller=1' },
			{ label: 'Аналитика', to: '/analytics' },
			{ label: 'Поддержка', to: '/support' },
		],
	},
	{
		title: 'BeautyMarket',
		links: [
			{ label: 'О нас', to: '/about' },
			{ label: 'Контакты', to: '/contacts' },
			{
				label: 'Политика конфиденциальности',
				to: '/privacy',
			},
		],
	},
]
