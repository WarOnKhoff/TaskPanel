import React, { useContext, useCallback } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Fade from '@material-ui/core/Fade'
import CircularProgress from '@material-ui/core/CircularProgress'
import { withRouter, Redirect } from 'react-router-dom'
import app from '../config'
import { AppContext } from '../context'

const LoginForm = ({ history, handleViewSwitch, setOpenAlert }) => {
	const classes = useStyles()

	const { currentUser, loading, setLoading, getCurrentUser } = useContext(
		AppContext,
	)

	const handleLogin = useCallback(
		async event => {
			event.preventDefault()
			const { email, password } = event.target.elements
			try {
				setLoading(true)
				await app
					.auth()
					.signInWithEmailAndPassword(email.value, password.value)
					.then(getCurrentUser)
				history.push('/')
				setLoading(false)
			} catch (error) {
				setLoading(false)
				setOpenAlert(true)
			}
		},
		[history],
	)

	if (currentUser) {
		return <Redirect to='/' />
	}

	return (
		<Fade in={true}>
			<div>
				<div className={classes.caption}>Login</div>
				<form className={classes.form} onSubmit={handleLogin}>
					<TextField
						variant='outlined'
						fullWidth
						className={classes.mb}
						label='Email'
						name='email'
						required
						disabled={loading}
					/>
					<TextField
						variant='outlined'
						fullWidth
						label='Password'
						type='password'
						className={classes.mb}
						name='password'
						required
						disabled={loading}
					/>
					<div className={classes.btnGroup}>
						<Button
							variant='contained'
							color='primary'
							className={classes.ml}
							type='submit'
							disabled={loading}
						>
							Login
						</Button>
						<Button
							variant='contained'
							color='primary'
							onClick={handleViewSwitch}
							disabled={loading}
							className={classes.ml}
						>
							Register
						</Button>
						{loading && <CircularProgress />}
					</div>
				</form>
			</div>
		</Fade>
	)
}

const useStyles = makeStyles({
	mb: {
		marginBottom: 30,
	},
	form: {
		width: 400,
		display: 'flex',
		flexDirection: 'column',
		marginBottom: 40,
	},

	ml: {
		marginRight: 20,
	},
	btnGroup: {
		display: 'flex',
		justifyContent: 'center',
	},
	caption: {
		fontSize: 40,
		letterSpacing: 1.1,
		fontWeight: 'bold',
		flexBasis: 60,
		marginBottom: 30,
		textAlign: 'center',
	},
})

export default withRouter(LoginForm)
