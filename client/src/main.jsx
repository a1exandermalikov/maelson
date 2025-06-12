import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles/Global.css'
import { LangProvider } from './i18n/i18nContext.jsx'

createRoot(document.getElementById('root')).render(
	<LangProvider>
		<App />
	</LangProvider>
)
