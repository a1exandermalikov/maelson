import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button/Button'
import backgroundMusic from '../../assets/audio/background.mp3' // ✅ импорт mp3
import './EnterPage.css'

export default function EnterPage() {
	const navigate = useNavigate()

	const handleEnter = () => {
		// Запуск фоновой музыки
		if (!window.backgroundAudio) {
			window.backgroundAudio = new Audio(backgroundMusic) // ✅ путь соберётся Vite-ом
			window.backgroundAudio.loop = true
			window.backgroundAudio.volume = 0.5
		}
		window.backgroundAudio.play().catch(err => {
			console.error('Не удалось воспроизвести аудио:', err)
		})

		// Переход с анимацией
		document.body.classList.add('fade-out')
		setTimeout(() => {
			navigate('/main')
		}, 300)
	}

	return (
		<div className='page'>
			<div className='enter-page'>
				<h1>Where Backend Begins. Maelson.</h1>
				<Button variant='primary' onClick={handleEnter}>
					Start
				</Button>
			</div>
		</div>
	)
}
