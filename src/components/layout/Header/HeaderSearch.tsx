const HeaderSearch = () => {
	return (
		<>
			<span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-lg">
				🔍
			</span>

			<input
				type="text"
				placeholder="Поиск косметики, кремов, парфюма"
				className="h-12 w-full rounded-full border border-neutral-200 bg-white pl-12 pr-4 text-base text-neutral-700 outline-none transition placeholder:text-neutral-400 focus:border-pink-400 focus:ring-2 focus:ring-pink-100"
			/>
		</>
	)
}
export default HeaderSearch
