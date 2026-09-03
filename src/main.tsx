import { createRoot } from 'react-dom/client'
import AppRoutes from './app/AppRoutes'
import './styles/globals.css'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
	<BrowserRouter>
		<AppRoutes />
	</BrowserRouter>,
)
