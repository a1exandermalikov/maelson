import { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Mousewheel } from 'swiper/modules'
import Icon from '../../components/Icon/Icon'
import 'swiper/css'

import AudioMixerVisualizer from '../../components/AudioMixer/AudioMixer'
import { Button } from '../../components/Button/Button'
import LangSwitcher from '../../components/LangSwitcher/LangSwitcher'

import backgroundMusic from '../../assets/audio/background.mp3'
import './MainPage.css'
import { useT } from '../../i18n/i18nContext'

export default function MainPage() {
	const t = useT()
	const audioRef = useRef(null)
	const [isPlaying, setIsPlaying] = useState(false)

	useEffect(() => {
		document.body.classList.remove('fade-out')
	}, [])

	useEffect(() => {
		if (!window.backgroundAudio) {
			window.backgroundAudio = new Audio(backgroundMusic)
			window.backgroundAudio.loop = true
			window.backgroundAudio.volume = 0.5
		}
		audioRef.current = window.backgroundAudio
		setIsPlaying(!audioRef.current.paused)

		return () => {
			audioRef.current.pause()
		}
	}, [])

	const toggleAudio = () => {
		if (!audioRef.current) return

		if (audioRef.current.paused) {
			audioRef.current.play()
			setIsPlaying(true)
		} else {
			audioRef.current.pause()
			setIsPlaying(false)
		}
	}

	return (
		<div className='page'>
			<Swiper
				direction='vertical'
				slidesPerView={1}
				mousewheel={true}
				modules={[Mousewheel]}
				className='vertical-swiper'
			>
				<div className='main-page'>
					{isPlaying && <AudioMixerVisualizer />}
					<LangSwitcher />
					<Button onClick={toggleAudio} className='pp'>
						<Icon
							name={
								isPlaying
									? 'fa-solid fa-volume-high'
									: 'fa-solid fa-volume-xmark'
							}
						/>
					</Button>
				</div>

				<SwiperSlide>
					<div className='swiper-slide'>
						<section className='hero'>
							<h2>
								<Icon name='fa-solid fa-code' /> Maelson <hr /> Muhammed
							</h2>
							<p>{t('intro.paragraph')}</p>
						</section>
					</div>
				</SwiperSlide>

				<SwiperSlide>
					<div className='swiper-slide'>
						<section className='about'>
							<h2 className='about-title'>
								<Icon name='fa-solid fa-user' /> <span>{t('about.title')}</span>
							</h2>

							<div className='about-grid'>
								{Array.isArray(t('about.cards')) &&
									t('about.cards').map((card, index) => (
										<div className='about-card' key={index}>
											<h3>
												<i className={card.icon}></i> {card.title}
											</h3>
											<ul>
												{card.points.map((point, i) => (
													<li key={i}>{point}</li>
												))}
											</ul>
										</div>
									))}
							</div>
						</section>
					</div>
				</SwiperSlide>

				<SwiperSlide>
					<div className='swiper-slide'>
						<section className='stack'>
							<h2 className='stack-title'>
								<Icon name='fa-solid fa-toolbox' />{' '}
								<span>{t('stack.title')}</span>
							</h2>

							<div className='stack-grid'>
								{t('stack.cards').map((card, index) => (
									<div className='stack-card' key={index}>
										<h3>
											<i className={card.icon}></i> {card.title}
										</h3>
										<ul>
											{card.points.map((point, i) => (
												<li key={i}>{point}</li>
											))}
										</ul>
									</div>
								))}
							</div>
						</section>
					</div>
				</SwiperSlide>

				<SwiperSlide>
					<div className='swiper-slide'>
						<section className='tech-stack'>
							<h2 className='stack-title'>
								<Icon name='fa-solid fa-layer-group' />{' '}
								<span>{t('tech.title')}</span>
							</h2>

							<div className='tech-grid'>
								{t('tech.cards').map((card, index) => (
									<div className='stack-card' key={index}>
										<h3>
											<i className={card.icon}></i> {card.title}
										</h3>
										<ul>
											{card.points.map((point, i) => (
												<li key={i}>{point}</li>
											))}
										</ul>
									</div>
								))}
							</div>
						</section>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	)
}
