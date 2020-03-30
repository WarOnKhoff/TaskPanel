import React, { useState, useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Header from '../components/Header'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Filter from '../components/Filter'
import CreateReport from '../components/dialogs/CreateReport'
import ReportsTable from '../components/ReportsTable'
import { AppContext } from '../context'
import CircularProgress from '@material-ui/core/CircularProgress'

const TasksList = () => {
	const { loading, currentUser, reports, fetchData } = useContext(AppContext)
	const classes = useStyles()
	const [data, setData] = useState(reports)
	const [openCreate, setOpenCreate] = useState(false)

	React.useEffect(() => {
		setData([])
		fetchData()
	}, [])

	React.useMemo(() => {
		if (!currentUser) return
		setData(reports)
	}, [reports])

	return (
		<div className={classes.root}>
			<Header />
			<Paper className={classes.top}>
				<div className={classes.reports}>
					{currentUser.isAdmin ? 'All reports' : 'My reports'} ({reports.length}
					)
				</div>
				<div>
					{currentUser.isAdmin && (
						<Button
							variant='contained'
							color='primary'
							onClick={() => setOpenCreate(true)}
							className={classes.mr}
						>
							Show Users
						</Button>
					)}
					{!currentUser.isAdmin && (
						<Button
							variant='contained'
							color='primary'
							onClick={() => setOpenCreate(true)}
							className={classes.ml}
						>
							Create new report
						</Button>
					)}
				</div>
			</Paper>
			<Paper className={classes.topFilter}>
				<Filter
					data={data}
					setData={setData}
					initialData={reports}
					isAdmin={currentUser.isAdmin}
				/>
			</Paper>
			<ReportsTable data={data} />
			<CreateReport open={openCreate} setOpen={setOpenCreate} />
			{loading && (
				<div className={classes.spinner}>
					<CircularProgress />
				</div>
			)}
		</div>
	)
}

const useStyles = makeStyles({
	root: {
		width: '100%',
		maxHeight: '100vh',
		height: '100vh',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'center',
		position: 'relative',
	},
	mr: {
		marginRight: 20,
	},
	top: {
		width: '100%',
		height: 80,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: '0 20px',
	},
	topFilter: {
		width: '100%',
		height: 80,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		padding: '0 20px',
	},
	reports: {
		letterSpacing: 1.4,
		fontSize: 30,
	},
	spinner: {
		position: 'fixed',
		width: '100%',
		height: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		color: 'red',
		zIndex: 100,
		background: '#F0F0F0',
		opacity: '0.8',
	},
})

export default TasksList
