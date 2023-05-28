import React, { useState } from 'react'

import { Navigation } from '/src/components/display/Navigation.jsx'
import { Registration } from './Registration'
import { Entry } from './Entry'
import { LoginService } from '../../services/axios/login.service'

export const Authorisation = () => {
	const [openRegister, setOpenRegister] = useState(true)
	const [openEntry, setOpenEntry] = useState(false)

	if (!LoginService.isRegister) {
		setOpenRegister(true)
	}

	return (
		<>
			{!openRegister && !openEntry ? (
				<>
					<h1>Profile</h1>
					<Navigation />
				</>
			) : openRegister ? (
				<Registration
					setOpenRegister={setOpenRegister}
					setOpenEntry={setOpenEntry}
				/>
			) : openEntry ? (
				<Entry setOpenEntry={setOpenEntry} />
			) : null}
		</>
	)
}
