import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import { makeStyles } from '@material-ui/core/styles'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import { AppContext } from '../../context'
import { dateFormat } from '../../config'
import format from 'date-fns/format'

const UpdateReport = ({ open, setOpen, selectedReport, setSelectedReport }) => {
	const classes = useStyles()
	const { loading, updateReport, reports } = React.useContext(AppContext)

	const [articul, setArticul] = React.useState('')
	const [quantity, setQuantity] = React.useState(0)
	const [date, setDate] = React.useState(new Date().getTime())
	const [reporter, setReporter] = React.useState('')

	React.useMemo(() => {
		if (!selectedReport) return
		const target = reports.find(report => report.reportId === selectedReport)
		setArticul(target.articul)
		setQuantity(target.quantity)
		setDate(target.date)
		setReporter(target.reporter.fullName)
	}, [open])

	const handleSubmit = async e => {
		e.preventDefault()
		const target = reports.find(report => report.reportId === selectedReport)
		const updatedReport = {
			articul,
			quantity,
		}
		updateReport(target.id, updatedReport)
		setSelectedReport(null)
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
						label='Reporter'
						disabled
						style={{ background: '#F0F0F0' }}
						value={reporter}
						onChange={e => setArticul(e.target.value)}
					/>
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
					<TextField
						variant='outlined'
						fullWidth
						className={classes.mb}
						label='Date'
						disabled={true}
						style={{ background: '#F0F0F0' }}
						value={format(new Date(date), dateFormat)}
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
						Update
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
})

export default UpdateReport
