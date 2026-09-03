import { Link } from 'react-router-dom'

import { footerSections } from './footer.data'

const FooterLinks = () => {
	return (
		<>
			{footerSections.map((section) => (
				<div key={section.title}>
					<h3 className="font-semibold text-neutral-900">{section.title}</h3>

					<ul className="mt-4 space-y-3 text-sm text-neutral-500">
						{section.links.map((link) => (
							<li key={link.to}>
								<Link to={link.to} className="transition hover:text-pink-600">
									{link.label}
								</Link>
							</li>
						))}
					</ul>
				</div>
			))}
		</>
	)
}

export default FooterLinks
