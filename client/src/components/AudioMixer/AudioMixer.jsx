import { useEffect, useRef } from 'react'

export default function AudioMixerVisualizer() {
	const canvasRef = useRef(null)

	const BAR_COUNT = 4
	const BAR_WIDTH = 4
	const GAP = 3
	const MAX_HEIGHT = 25
	const SMOOTHING = 0.02 // плавность — чем меньше, тем медленнее

	useEffect(() => {
		const canvas = canvasRef.current
		const ctx = canvas.getContext('2d')

		let width = (canvas.width = BAR_COUNT * (BAR_WIDTH + GAP))
		let height = (canvas.height = MAX_HEIGHT)

		let currentHeights = Array(BAR_COUNT).fill(MAX_HEIGHT / 2)
		let targets = currentHeights.map(h => getTarget())

		function getTarget() {
			return 10 + Math.random() * 15 // колебания в мягком диапазоне
		}

		let frame = 0
		const animate = () => {
			ctx.clearRect(0, 0, width, height)

			// каждые 40 кадров обновляем цели
			if (frame++ % 40 === 0) {
				targets = targets.map(() => getTarget())
			}

			for (let i = 0; i < BAR_COUNT; i++) {
				currentHeights[i] += (targets[i] - currentHeights[i]) * SMOOTHING

				const x = i * (BAR_WIDTH + GAP)
				const y = height - currentHeights[i]

				const gradient = ctx.createLinearGradient(0, y, 0, height)
				gradient.addColorStop(0, '#a8a29e')
				gradient.addColorStop(1, '#78716c')

				ctx.fillStyle = gradient
				ctx.fillRect(x, y, BAR_WIDTH, currentHeights[i])
			}

			requestAnimationFrame(animate)
		}

		animate()

		return () => cancelAnimationFrame(animate)
	}, [])

	return (
		<canvas
			ref={canvasRef}
			style={{
				display: 'block',
				position: 'fixed',
				width: 'auto',
				height: '35px',
				background: 'transparent',
				bottom: '15px',
				right: '15px',
			}}
		/>
	)
}
