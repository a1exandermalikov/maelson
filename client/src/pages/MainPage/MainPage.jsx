import { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Mousewheel } from 'swiper/modules'
import Icon from '../../components/Icon/Icon'
import 'swiper/css'

import AudioMixerVisualizer from '../../components/AudioMixer/AudioMixer'
import { Button } from '../../components/Button/Button'
import LangSwitcher from '../../components/LangSwitcher/LangSwitcher'

import backgroundMusic from '../../assets/audio/background.mp3' // ✅ импорт аудио
import './MainPage.css'

export default function MainPage() {
	const audioRef = useRef(null)
	const [isPlaying, setIsPlaying] = useState(false)

	useEffect(() => {
		document.body.classList.remove('fade-out')
	}, [])

	useEffect(() => {
		// Инициализация аудио
		if (!window.backgroundAudio) {
			window.backgroundAudio = new Audio(backgroundMusic) // ✅ используется импортированный путь
			window.backgroundAudio.loop = true
			window.backgroundAudio.volume = 0.5
		}
		audioRef.current = window.backgroundAudio
		setIsPlaying(!audioRef.current.paused)

		// Очистка при размонтировании
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
					<div class='swiper-slide'>
						<section class='about'>
							<h2 class='about-title'>
								<Icon name='fa-solid fa-user' /> About Me
							</h2>

							<div class='about-grid'>
								<div class='about-card'>
									<h3>
										<i class='fa-solid fa-code'></i> Web Development
									</h3>
									<ul>
										<li>→ From simple sites to complex web apps</li>
										<li>→ Making slow sites lightning fast</li>
										<li>→ Interfaces that look great on any device</li>
									</ul>
								</div>

								<div class='about-card'>
									<h3>
										<i class='fa-brands fa-telegram'></i> Telegram Bots
									</h3>
									<ul>
										<li>→ Smart bots with payments and subscriptions</li>
										<li>→ Crypto integration and wallet features</li>
										<li>→ Rock-solid infrastructure that never sleeps</li>
									</ul>
								</div>

								<div class='about-card'>
									<h3>
										<i class='fa-solid fa-server'></i> DevOps & Server-Side
									</h3>
									<ul>
										<li>→ Containerization and cloud deployment</li>
										<li>→ Automated pipelines that save time</li>
										<li>→ Bulletproof backup and monitoring</li>
									</ul>
								</div>

								<div class='about-card'>
									<h3>
										<i class='fa-solid fa-gauge-high'></i> Speed & Security
									</h3>
									<ul>
										<li>→ Turbocharging websites with smart caching</li>
										<li>→ Keeping the bad guys out of your systems</li>
										<li>→ Finding and fixing performance bottlenecks</li>
									</ul>
								</div>
							</div>
						</section>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='swiper-slide'>
						<section className='stack'>
							<h2 className='stack-title'>
								<Icon name='fa-solid fa-toolbox' /> What I Work With
							</h2>

							<div className='stack-grid'>
								<div className='stack-card'>
									<h3>
										<i className='fa-solid fa-gears'></i> Process Automation
									</h3>
									<ul>
										<li>→ Connecting systems that weren't meant to talk</li>
										<li>→ Building scrapers and scheduled tasks</li>
										<li>→ Taming unruly data into useful structures</li>
									</ul>
								</div>

								<div className='stack-card'>
									<h3>
										<i className='fa-solid fa-rocket'></i> Full Service
									</h3>
									<ul>
										<li>→ Taking your idea from sketch to launch</li>
										<li>→ Keeping your project up and running</li>
										<li>→ Squeezing every bit of performance</li>
									</ul>
								</div>

								<div className='stack-card'>
									<h3>
										<i className='fa-solid fa-puzzle-piece'></i> Custom
										Solutions
									</h3>
									<ul>
										<li>→ Software that fits your business like a glove</li>
										<li>→ Interfaces that make users go wow</li>
										<li>→ Features you won't find off-the-shelf</li>
									</ul>
								</div>

								<div className='stack-card'>
									<h3>
										<i className='fa-solid fa-stethoscope'></i> Consulting
									</h3>
									<ul>
										<li>→ Untangling technical messes</li>
										<li>→ Making slow systems run like new</li>
										<li>→ Finding security holes before hackers do</li>
									</ul>
								</div>
							</div>
						</section>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='swiper-slide'>
						<section className='tech-stack'>
							<h2 className='stack-title'>
								<Icon name='fa-solid fa-layer-group' /> My Tech Stack
							</h2>

							<div className='tech-grid'>
								<div className='stack-card'>
									<h3>
										<i className='fa-solid fa-code'></i> Frontend
									</h3>
									<ul>
										<li>→ HTML5 / CSS3 / JavaScript (ES6+)</li>
										<li>→ Blender</li>
										<li>→ Tailwind CSS, Framer Motion</li>
										<li>→ Animations, Three.js</li>
									</ul>
								</div>

								<div className='stack-card'>
									<h3>
										<i className='fa-solid fa-server'></i> Backend
									</h3>
									<ul>
										<li>→ Python (FastAPI, aiogram, asyncio)</li>
										<li>→ Node.js (Telegram API)</li>
										<li>→ PHP (Laravel, Slim)</li>
									</ul>
								</div>

								<div className='stack-card'>
									<h3>
										<i className='fa-solid fa-database'></i> Databases
									</h3>
									<ul>
										<li>→ PostgreSQL / MySQL / SQLite</li>
										<li>→ ORM: SQLAlchemy</li>
									</ul>
								</div>

								<div className='stack-card'>
									<h3>
										<i className='fa-solid fa-network-wired'></i> DevOps
									</h3>
									<ul>
										<li>→ Linux (Ubuntu)</li>
										<li>→ Docker / Docker Compose</li>
										<li>→ Nginx</li>
										<li>→ Cloudflare, SSL</li>
									</ul>
								</div>
							</div>
						</section>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	)
}
