import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Fade from '@material-ui/core/Fade'

const LoginForm = ({ handleViewSwitch, setOpenAlert }) => {
	const handleSumbit = e => {
		setOpenAlert(true)
		e.preventDefault()
		const { email, password } = e.target.elements
	}
	const classes = useStyles()
	return (
		<Fade in={true}>
			<div>
				<div className={classes.caption}>Login</div>
				<form className={classes.form} onSubmit={handleSumbit}>
					<TextField
						variant='outlined'
						fullWidth
						className={classes.mb}
						label='Email'
						name='email'
						required
					/>
					<TextField
						variant='outlined'
						fullWidth
						label='Password'
						type='password'
						className={classes.mb}
						name='password'
						required
					/>
					<div className={classes.btnGroup}>
						<Button
							variant='contained'
							color='primary'
							className={classes.ml}
							type='submit'
						>
							Login
						</Button>
						<Button
							variant='contained'
							color='primary'
							onClick={handleViewSwitch}
						>
							Register
						</Button>
					</div>
				</form>
			</div>
		</Fade>
	)
}

const useStyles = makeStyles({
	mb: {
		marginBottom: 20,
	},
	form: {
		width: 400,
		display: 'flex',
		flexDirection: 'column',
		marginBottom: 40,
		'&-required': {
			display: 'none',
		},
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

export default LoginForm