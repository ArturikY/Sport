import React from 'react'
import ReactDOM from 'react-dom/client'
import '../assets/styles/index.scss'
import { Router } from '../components/routering/Router.jsx'
import { GlobalProvider } from '../services/contexts/GlobalContext'
import { Authorisation } from './authorisation/Authorisation'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<GlobalProvider>
			{/* <Authorisation /> */}
			<Router />
		</GlobalProvider>
	</React.StrictMode>
)
