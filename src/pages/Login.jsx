import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import LoginForm from '../components/LoginForm'
import RegistrationForm from '../components/RegistrationForm'

const Login = () => {
	const classes = useStyles()
	const [view, setView] = useState('login')

	const handleViewSwitch = () => {
		if (view === 'login') {
			setView('register')
		} else {
			setView('login')
		}
	}
	return (
		<div className={classes.root}>
			<div className={classes.header}>TaskPanel</div>
			<div className={classes.space1} />
			<div>
				{view === 'login' && <LoginForm handleViewSwitch={handleViewSwitch} />}
				{view === 'register' && (
					<RegistrationForm handleViewSwitch={handleViewSwitch} />
				)}
			</div>
			<div className={classes.space2} />
		</div>
	)
}

const useStyles = makeStyles({
	root: {
		width: '100%',
		minHeight: '100vh',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	header: {
		height: 100,
		width: '100%',
		background: '#333',
		color: '#FFF',
		fontSize: 30,
		fontWeight: 'bold',
		display: 'flex',
		padding: '0 20px',
		alignItems: 'center',
		letterSpacing: 2,
	},
	space1: {
		flexGrow: 1,
	},
	space2: {
		flexGrow: 2,
	},
	caption: {
		fontSize: 40,
		letterSpacing: 1.1,
		fontWeight: 'bold',
		flexBasis: 60,
		marginBottom: 30,
	},
})

export default Login
