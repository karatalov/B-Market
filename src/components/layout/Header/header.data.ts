import type { LanguageItem, NavItem } from './header.types'

export const navItems: NavItem[] = [
	{ label: 'Каталог', href: '/catalog' },
	{ label: 'Бренды', href: '/brands' },
	{ label: 'Магазины', href: '/shops' },
	{ label: 'Поддержка', href: '/support' },
	{ label: 'Аналитика', href: '/analytics' },
]

export const languages: LanguageItem[] = [
	{ code: 'ru', label: 'Русский', flag: '🇷🇺' },
	{ code: 'ky', label: 'Кыргызча', flag: '🇰🇬' },
	{ code: 'en', label: 'English', flag: '🇬🇧' },
]
