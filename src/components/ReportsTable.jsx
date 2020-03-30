import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from './Card'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

const ReportsTable = ({ data }) => {
	const classes = useStyles()
	return (
		<Paper className={classes.content}>
			<TableContainer component={Paper} className={classes.tableConatiner}>
				<Table className={classes.table} aria-label='simple table' stickyHeader>
					<TableHead>
						<TableRow>
							<TableCell className={classes.tableHead} align='center'>
								Report Id
							</TableCell>
							<TableCell className={classes.tableHead} align='center'>
								Reporter
							</TableCell>
							<TableCell className={classes.tableHead} align='center'>
								Articul
							</TableCell>
							<TableCell className={classes.tableHead} align='center'>
								Quantity
							</TableCell>
							<TableCell className={classes.tableHead} align='center'>
								Date
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{data.map((item, index) => (
							<Card
								className={classes.item}
								{...item}
								key={'reportCard' + index}
							>
								{item}
							</Card>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Paper>
	)
}

const useStyles = makeStyles({
	content: {
		width: '100%',
		height: '100%',
		overflowY: 'auto',
		padding: '10px 25px',
	},
	item: {
		width: '100%',
		height: 400,
	},
	table: {
		minWidth: 650,
	},
	tableHead: {
		background: '#333',
		color: '#FFF',
	},
	tableConatiner: {
		maxHeight: '100%',
	},
})

export default ReportsTable
