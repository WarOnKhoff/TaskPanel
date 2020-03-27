import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Fade from '@material-ui/core/Fade'

const RegistartionForm = ({ handleViewSwitch }) => {
	const classes = useStyles()
	const handleSumbit = e => {
		e.preventDefault()
		const { email, password, firstName, lastName } = e.target.elements
	}
	return (
		<Fade in={true}>
			<div>
				<div className={classes.caption}>Register</div>
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
						className={classes.mb}
						label='First Name'
						name='firstName'
						required
					/>
					<TextField
						variant='outlined'
						fullWidth
						className={classes.mb}
						label='Last Name'
						name='lastName'
						required
					/>
					<TextField
						variant='outlined'
						fullWidth
						label='Password'
						type='password'
						name='password'
						className={classes.mb}
						required
					/>
					<div className={classes.btnGroup}>
						<Button
							variant='contained'
							color='primary'
							className={classes.ml}
							type='submit'
						>
							Register
						</Button>
						<Button
							variant='contained'
							color='primary'
							onClick={handleViewSwitch}
						>
							Back to Login
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

export default RegistartionForm
