import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import { makeStyles } from '@material-ui/core/styles'

import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'

const CreateReport = ({ open, setOpen }) => {
	const classes = useStyles()
	const [loading, setLoading] = React.useState(false)
	const [articul, setArticul] = React.useState('')
	const [quantity, setQuantity] = React.useState(0)

	React.useMemo(() => {
		setLoading(false)
		setArticul('')
		setQuantity(0)
	}, [open])

	const handleSubmit = e => {
		e.preventDefault()
		setLoading(true)
		setOpen(false)
	}

	const handleClose = () => {
		setOpen(false)
	}

	return (
		<Dialog open={open} onClose={handleClose} disableBackdropClick>
			<DialogTitle id='alert-dialog-title'>Create New Report</DialogTitle>
			<form onSubmit={handleSubmit}>
				<DialogContent>
					<TextField
						variant='outlined'
						fullWidth
						className={classes.mb}
						label='Articul'
						disabled={loading}
						required
						value={articul}
						onChange={e => setArticul(e.target.value)}
					/>
					<TextField
						variant='outlined'
						fullWidth
						className={classes.mb}
						label='Quantity'
						disabled={loading}
						type='number'
						required
						value={quantity}
						onChange={e => setQuantity(e.target.value)}
					/>
				</DialogContent>
				<DialogActions>
					<Button
						onClick={handleClose}
						color='primary'
						variant='contained'
						disabled={loading}
					>
						Cancel
					</Button>
					<Button
						color='primary'
						autoFocus
						variant='contained'
						disabled={loading}
						type='submit'
					>
						Create
					</Button>
					{loading && <CircularProgress />}
				</DialogActions>
			</form>
		</Dialog>
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

export default CreateReport
