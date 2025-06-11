import { useEffect, useRef } from 'react'

export default function Starfield() {
	const canvasRef = useRef(null)

	useEffect(() => {
		const canvas = canvasRef.current
		const ctx = canvas.getContext('2d')

		let width = (canvas.width = window.innerWidth)
		let height = (canvas.height = window.innerHeight)

		const STAR_COLOR = '#065f46'
		const STAR_COUNT = 200
		const SPEED = 0.5

		let stars = []

		for (let i = 0; i < STAR_COUNT; i++) {
			stars.push({
				x: Math.random() * width,
				y: Math.random() * height,
				vx: (width / 2 - Math.random() * width) * SPEED * 0.0001,
				vy: (height / 2 - Math.random() * height) * SPEED * 0.0001,
				size: Math.random() * 1.5 + 0.5,
			})
		}

		function animate() {
			ctx.clearRect(0, 0, width, height)

			for (let star of stars) {
				star.x += star.vx
				star.y += star.vy

				// если ушла за пределы — сброс
				if (star.x < 0 || star.x > width || star.y < 0 || star.y > height) {
					star.x = Math.random() * width
					star.y = Math.random() * height
					star.vx = (width / 2 - star.x) * SPEED * 0.0001
					star.vy = (height / 2 - star.y) * SPEED * 0.0001
				}

				ctx.beginPath()
				ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
				ctx.fillStyle = STAR_COLOR
				ctx.fill()
			}

			requestAnimationFrame(animate)
		}

		animate()

		const handleResize = () => {
			width = canvas.width = window.innerWidth
			height = canvas.height = window.innerHeight
		}
		window.addEventListener('resize', handleResize)

		return () => window.removeEventListener('resize', handleResize)
	}, [])

	return (
		<canvas
			ref={canvasRef}
			style={{
				position: 'fixed',
				top: 0,
				left: 0,
				width: '100vw',
				height: '100vh',
				zIndex: -6,
				pointerEvents: 'none',
			}}
		/>
	)
}
