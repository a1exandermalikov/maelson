import { useState, useEffect } from 'react'
import './LangSwitcher.css'

export default function LangSwitcher() {
	const [lang, setLang] = useState('en')

	useEffect(() => {
		const saved = localStorage.getItem('lang')
		if (saved) setLang(saved)
	}, [])

	const switchTo = newLang => {
		setLang(newLang)
		localStorage.setItem('lang', newLang)
	}

	return (
		<div className='lang-switcher'>
			<span
				className={`lang-option ${lang === 'en' ? 'active' : ''}`}
				onClick={() => switchTo('en')}
			>
				en
			</span>
			<span
				className={`lang-option ${lang === 'ru' ? 'active' : ''}`}
				onClick={() => switchTo('ru')}
			>
				ru
			</span>
		</div>
	)
}
