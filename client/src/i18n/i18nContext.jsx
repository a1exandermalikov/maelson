import { createContext, useContext, useState } from 'react'
import translations from './translations'

const LangContext = createContext()

export const LangProvider = ({ children }) => {
	const [lang, setLang] = useState('en')

	const toggleLang = () => {
		setLang(prevLang => (prevLang === 'en' ? 'ru' : 'en'))
	}

	return (
		<LangContext.Provider value={{ lang, toggleLang }}>
			{children}
		</LangContext.Provider>
	)
}

// Универсальный хук возвращает весь контекст, чтобы использовать и lang, и toggleLang вместе
export const useLang = () => {
	const context = useContext(LangContext)
	if (!context) throw new Error('useLang must be used within a LangProvider')
	return context
}

// Переводчик с доступом по ключам
export const useT = () => {
	const { lang } = useLang()
	const obj = translations[lang]

	return path => path.split('.').reduce((acc, key) => acc?.[key], obj)
}
