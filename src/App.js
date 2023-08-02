import React from 'react'
import { useState } from 'react'
import './style.css'

function App() {
	const [userPrompt, setPrompt] = useState('')
	const [valid, setValid] = useState(false)

	const handleChange = (e) => {
		const text = e.target.value
		setPrompt(text)

		if (!text.trim()) return setValid(false)
		if (!text.match(/^[aA-zZ\s]+$/)) return setValid(false)
		setValid(true)
	}

	return (
		<div className='app-main'>
			<h1>mind write</h1>
			<h2>a space to write what's on your mind.</h2>
			<textarea
				className='app-input'
				placeholder='what is on your mind?'
				value={userPrompt}
				onChange={handleChange}
			/>
			<button className='clay' disabled={!valid}>
				Clear
			</button>
		</div>
	)
}

export default App
