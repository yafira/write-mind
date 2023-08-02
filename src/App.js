import React from 'react'
import { useState } from 'react'
import './style.css'
import './queries.css'

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
			<h1>mind write</h1>
			<h2>a space to write what's on your mind, no strings attached.</h2>
			<textarea
				id='message'
				name='message'
				type='text'
				className='app-input'
				placeholder='what is on your mind?'
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
