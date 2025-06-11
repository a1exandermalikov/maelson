import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import EnterPage from './pages/EnterPage/EnterPage'
import MainPage from './pages/MainPage/MainPage'
import NeuralPlanet from './components/NeuralPlanet/NeuralPlanet'
import StarfieldCanvas from './components/StarfieldCanvas/StarfieldCanvas'

function App() {
	return (
		<HashRouter>
			<div className='App'>
				<NeuralPlanet />
				<StarfieldCanvas />
				<Routes>
					<Route path='/' element={<EnterPage />} />
					<Route path='/main' element={<MainPage />} />
				</Routes>
			</div>
		</HashRouter>
	)
}

export default App
