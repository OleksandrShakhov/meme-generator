import React from 'react'

export default function Navbar() {
	return(
		<nav>
			<div className='nav--left'>
				<img className='nav--left-img' src='/images/logo.png' alt='Logo' />
				<div className='nav--left-name'>Meme Generator</div>
			</div>
			<div className='nav--right'>
				<a className='nav--right-text' href='https://github.com/OleksandrShakhov' target="_blank">Made by Oleksandr Shakhov</a>
			</div>
		</nav>
	)
}