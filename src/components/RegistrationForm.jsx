import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Fade from '@material-ui/core/Fade'
import CircularProgress from '@material-ui/core/CircularProgress'

const RegistartionForm = ({ handleViewSwitch, setOpenAlert }) => {
	const [loading, setLoading] = React.useState(false)
	const classes = useStyles()
	const handleSumbit = e => {
		e.preventDefault()
		setOpenAlert(true)
		setLoading(true)
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
						disabled={loading}
						required
					/>
					<TextField
						variant='outlined'
						fullWidth
						className={classes.mb}
						label='First Name'
						name='firstName'
						disabled={loading}
						required
					/>
					<TextField
						variant='outlined'
						fullWidth
						className={classes.mb}
						label='Last Name'
						name='lastName'
						disabled={loading}
						required
					/>
					<TextField
						variant='outlined'
						fullWidth
						label='Password'
						type='password'
						name='password'
						className={classes.mb}
						disabled={loading}
						required
					/>
					<div className={classes.btnGroup}>
						<Button
							variant='contained'
							color='primary'
							className={classes.ml}
							type='submit'
							disabled={loading}
						>
							Register
						</Button>
						<Button
							variant='contained'
							color='primary'
							onClick={handleViewSwitch}
							className={classes.ml}
							disabled={loading}
						>
							Back to Login
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
