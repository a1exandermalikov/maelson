import { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Mousewheel } from 'swiper/modules'
import Icon from '../../components/Icon/Icon'
import 'swiper/css'

import AudioMixerVisualizer from '../../components/AudioMixer/AudioMixer'
import { Button } from '../../components/Button/Button'
import LangSwitcher from '../../components/LangSwitcher/LangSwitcher'

import './MainPage.css'

export default function MainPage() {
	const audioRef = useRef(null)
	const [isPlaying, setIsPlaying] = useState(false)

	useEffect(() => {
		document.body.classList.remove('fade-out')
	}, [])

	useEffect(() => {
		if (!window.backgroundAudio) {
			window.backgroundAudio = new Audio('/src/assets/audio/background.mp3')
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
							<p>
								Hey! I'm a backend developer who thrives on building powerful
								and reliable systems. I design the architecture, optimize
								performance, and make sure everything runs smoothly behind the
								scenes — turning complex logic into clean, scalable code.
								<br />
								<br />
								Whether it's crafting RESTful APIs, managing databases, or
								integrating third-party services, I focus on creating
								maintainable solutions that support seamless user experiences.
								I’m all about clean architecture, thoughtful design, and
								rock-solid performance — because great products start with a
								strong foundation.
							</p>
						</section>
					</div>
				</SwiperSlide>

				<SwiperSlide>
					<div className='swiper-slide'>
						<section className='about'>
							<h2>
								<Icon name='fa-solid fa-user' /> About Me
							</h2>
						</section>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	)
}
