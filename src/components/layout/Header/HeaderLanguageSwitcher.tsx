import { useState } from 'react'

import { languages } from './header.data'

import type { LanguageCode } from './header.types'

const HeaderLanguageSwitcher = () => {
	const [languageOpen, setLanguageOpen] = useState(false)
	const [language, setLanguage] = useState<LanguageCode>('ru')

	return (
		<div className="relative">
			<button
				type="button"
				aria-label="Выбрать язык"
				aria-expanded={languageOpen}
				onClick={() => setLanguageOpen((prev) => !prev)}
				className="flex items-center gap-1 rounded-lg px-3 py-2 text-base font-semibold uppercase text-neutral-700 transition hover:bg-neutral-100"
			>
				{language}

				<span
					className={`text-xs transition-transform ${
						languageOpen ? 'rotate-180' : ''
					}`}
				>
					▼
				</span>
			</button>

			{languageOpen && (
				<div className="absolute left-0 top-full z-50 mt-2 w-44 overflow-hidden rounded-xl border border-neutral-200 bg-white p-1 shadow-lg sm:left-auto sm:right-0">
					{languages.map((item) => (
						<button
							key={item.code}
							type="button"
							onClick={() => {
								setLanguage(item.code)
								setLanguageOpen(false)
							}}
							className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition hover:bg-neutral-50 ${
								language === item.code
									? 'bg-pink-50 font-semibold text-pink-600'
									: 'text-neutral-700'
							}`}
						>
							<span className="text-lg">{item.flag}</span>

							<span className="flex-1">{item.label}</span>

							{language === item.code && (
								<span className="text-pink-600">✓</span>
							)}
						</button>
					))}
				</div>
			)}
		</div>
	)
}

export default HeaderLanguageSwitcher
