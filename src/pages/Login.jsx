import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Alert from '@material-ui/lab/Alert'
import LoginForm from '../components/LoginForm'
import RegistrationForm from '../components/RegistrationForm'
import Snackbar from '@material-ui/core/Snackbar'
import logo from '../assets/logo.png'

const Login = () => {
	const classes = useStyles()
	const [openAlert, setOpenAlert] = useState(false)
	const [view, setView] = useState('login')

	const handleViewSwitch = () =>
		view === 'login' ? setView('register') : setView('login')

	return (
		<div className={classes.root}>
			<div className={classes.header}>
				<img src={logo} className={classes.logo} />
			</div>
			<div className={classes.space1} />
			<div>
				{view === 'login' && (
					<LoginForm
						handleViewSwitch={handleViewSwitch}
						setOpenAlert={setOpenAlert}
					/>
				)}
				{view === 'register' && (
					<RegistrationForm
						handleViewSwitch={handleViewSwitch}
						setOpenAlert={setOpenAlert}
					/>
				)}
			</div>
			<div className={classes.space2} />
			<Snackbar
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'center',
				}}
				open={openAlert}
				onClose={() => setOpenAlert(false)}
				autoHideDuration={3000}
			>
				<Alert severity='error' variant='filled'>
					Wrong credentials. Try again.
				</Alert>
			</Snackbar>
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
	logo: {
		width: 80,
		height: 80,
	},
	snackbar: { background: 'red' },
})

export default Login
