import React from 'react'
import { AppProvider } from './context'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Login from './pages/Login'
import Reports from './pages/Reports'
import PrivateRoute from './pages/PrivateRoute'

const App = () => {
	return (
		<AppProvider>
			<Router>
				<PrivateRoute exact path='/' component={Reports} />
				<Route exact path='/login' component={Login} />
				{/* <Redirect to='/login' /> */}
			</Router>
		</AppProvider>
	)
}

export default App
