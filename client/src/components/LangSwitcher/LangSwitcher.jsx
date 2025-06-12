import './LangSwitcher.css'
import { useLang } from '../../i18n/i18nContext'

export default function LangSwitcher() {
	const { lang, toggleLang } = useLang()

	return (
		<div className='lang-switcher'>
			<span
				className={`lang-option ${lang === 'en' ? 'active' : ''}`}
				onClick={() => toggleLang()}
			>
				en
			</span>
			<span
				className={`lang-option ${lang === 'ru' ? 'active' : ''}`}
				onClick={() => toggleLang()}
			>
				ru
			</span>
		</div>
	)
}
