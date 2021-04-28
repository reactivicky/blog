import React from 'react'
import { TutorProvider } from './TutorContext'
import Hero from './components/Hero/Hero'
import OurTutors from './components/OurTutors/OurTutors'

function App() {
	return (
		<TutorProvider>
			<div>
				<Hero />
				<OurTutors />
			</div>
		</TutorProvider>
	)
}

export default App
