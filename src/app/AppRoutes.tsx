import { Route, Routes } from 'react-router-dom'
import Footer from '../components/layout/Footer/Footer'
import Header from '../components/layout/Header/Header'
import HomePage from '../pages/Home/HomePage'
import ProductPage from '../pages/ProductDetails/ProductPage'
import ScrollToTop from '../components/ui/ScrollToTop'

const AppRoutes = () => {
	const ROUTES = [
		{ id: 1, path: '/', element: <HomePage /> },
		{ id: 2, path: '/product/:slug', element: <ProductPage /> },
	]
	return (
		<>
			<Header />
			<Routes>
				{ROUTES.map((route) => (
					<Route key={route.id} path={route.path} element={route.element} />
				))}
			</Routes>
			<ScrollToTop />
			<Footer />
		</>
	)
}

export default AppRoutes
