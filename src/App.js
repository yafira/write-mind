import Header from './components/Header'
import React from 'react'
import { useState } from 'react'
import '../src/stylesheets/style.css'
import '../src/stylesheets/queries.css'

function App() {
	const [message, setMessage] = useState('')
	const [valid, setValid] = useState(false)

	const handleChange = (e) => {
		const text = e.target.value
		setMessage(text)

		if (!text.trim()) return setValid(false)
		if (!text.match(/^[aA-zZ\s]+$/)) return setValid(false)
		setValid(true)
	}

	return (
		<div className='app-main'>
			<Header />
			<textarea
				id='message'
				className='app-input'
				name='message'
				type='text'
				placeholder='inhale, exhale, let it all out.'
				onChange={handleChange}
				value={message}
			/>
			<button
				className='clay'
				button
				onClick={() => setMessage('')}
				disabled={!valid}
			>
				Clear
			</button>
		</div>
	)
}

export default App
