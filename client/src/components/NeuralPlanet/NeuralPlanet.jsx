import { useRef, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function NeuralPlanet() {
	const canvasRef = useRef(null)
	const points = useRef([])

	const location = useLocation()

	const POINT_COUNT = 250
	const RADIUS = 250
	const ROTATE_SPEED = 0.0005
	const CONNECTION_DISTANCE = 70

	const PLANET_COLOR = '#57534e'
	const GLOW_COLOR = '#a8a29e'

	const WAVE_SPEED = 0.002
	const WAVE_WIDTH = 0.4

	useEffect(() => {
		const canvas = canvasRef.current
		const ctx = canvas.getContext('2d')

		let width = (canvas.width = window.innerWidth)
		let height = (canvas.height = window.innerHeight)

		points.current = []
		const jitter = 0.08

		for (let i = 0; i < POINT_COUNT; i++) {
			const theta = Math.random() * 2 * Math.PI
			const phi = Math.acos(2 * Math.random() - 1)

			const jitteredTheta = theta + (Math.random() - 0.5) * jitter
			const jitteredPhi = phi + (Math.random() - 0.5) * jitter

			const x = RADIUS * Math.sin(jitteredPhi) * Math.cos(jitteredTheta)
			const y = RADIUS * Math.sin(jitteredPhi) * Math.sin(jitteredTheta)
			const z = RADIUS * Math.cos(jitteredPhi)

			points.current.push({
				theta: jitteredTheta,
				phi: jitteredPhi,
				x,
				y,
				z,
			})
		}

		let angle = 0
		let waveAngle = 0
		let scale = 1.5
		let targetScale = 1.5

		let mouseX = 0
		let mouseY = 0
		let offsetX = 0
		let offsetY = 0

		const handleMouseMove = e => {
			const dx = e.clientX - width / 2
			const dy = e.clientY - height / 2
			mouseX = dx / 40 // чувствительность
			mouseY = dy / 40
		}

		window.addEventListener('mousemove', handleMouseMove)

		const draw = () => {
			if (location.pathname === '/main') {
				targetScale = 2.5
			} else {
				targetScale = 1.5
			}

			scale += (targetScale - scale) * 0.05

			offsetX += (mouseX - offsetX) * 0.05
			offsetY += (mouseY - offsetY) * 0.05

			ctx.clearRect(0, 0, width, height)

			const centerX = width / 2
			const centerY = height / 2

			ctx.save()
			ctx.translate(centerX + offsetX, centerY + offsetY)
			ctx.scale(scale, scale)
			ctx.translate(-centerX, -centerY)

			const cos = Math.cos(angle)
			const sin = Math.sin(angle)

			const rotated = points.current.map(p => {
				const x = p.x * cos - p.z * sin
				const z = p.x * sin + p.z * cos
				return { ...p, x, z }
			})

			for (let i = 0; i < rotated.length; i++) {
				for (let j = i + 1; j < rotated.length; j++) {
					const a = rotated[i]
					const b = rotated[j]
					const dx = a.x - b.x
					const dy = a.y - b.y
					const dz = a.z - b.z
					const dist = Math.sqrt(dx * dx + dy * dy + dz * dz)
					if (dist < CONNECTION_DISTANCE) {
						const alpha = (1 - dist / CONNECTION_DISTANCE) * 0.5

						let dThetaA = Math.abs(a.theta - waveAngle)
						let dThetaB = Math.abs(b.theta - waveAngle)
						if (dThetaA > Math.PI) dThetaA = 2 * Math.PI - dThetaA
						if (dThetaB > Math.PI) dThetaB = 2 * Math.PI - dThetaB
						const inWave = dThetaA < WAVE_WIDTH || dThetaB < WAVE_WIDTH

						const color = inWave ? GLOW_COLOR : PLANET_COLOR
						ctx.strokeStyle = hexToRgba(color, alpha)
						ctx.beginPath()
						ctx.moveTo(centerX + a.x, centerY + a.y)
						ctx.lineTo(centerX + b.x, centerY + b.y)
						ctx.stroke()
					}
				}
			}

			for (let p of rotated) {
				let dTheta = Math.abs(p.theta - waveAngle)
				if (dTheta > Math.PI) dTheta = 2 * Math.PI - dTheta
				const inWave = dTheta < WAVE_WIDTH

				const brightness = inWave ? 1 : 0.6
				const radius = (inWave ? 3 : 2) / scale

				const color = inWave ? GLOW_COLOR : PLANET_COLOR
				ctx.fillStyle = hexToRgba(color, brightness)
				ctx.beginPath()
				ctx.arc(centerX + p.x, centerY + p.y, radius, 0, Math.PI * 2)
				ctx.fill()
			}

			ctx.restore()

			angle += ROTATE_SPEED
			waveAngle += WAVE_SPEED
			if (waveAngle > 2 * Math.PI) waveAngle -= 2 * Math.PI

			requestAnimationFrame(draw)
		}

		draw()

		const handleResize = () => {
			width = canvas.width = window.innerWidth
			height = canvas.height = window.innerHeight
		}
		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
			window.removeEventListener('mousemove', handleMouseMove)
		}
	}, [location.pathname])

	function hexToRgba(hex, alpha) {
		const r = parseInt(hex.slice(1, 3), 16)
		const g = parseInt(hex.slice(3, 5), 16)
		const b = parseInt(hex.slice(5, 7), 16)
		return `rgba(${r},${g},${b},${alpha})`
	}

	return (
		<canvas
			ref={canvasRef}
			style={{
				position: 'fixed',
				top: 0,
				left: 0,
				zIndex: -1,
				width: '100vw',
				height: '100vh',
				pointerEvents: 'none',
			}}
		/>
	)
}
