import React from 'react'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import { format } from 'date-fns'

const Card = ({ reportId, reporter, articul, quantity, date }) => {
	return (
		<TableRow>
			<TableCell align='center'>{reportId}</TableCell>
			<TableCell align='center'>{reporter}</TableCell>
			<TableCell align='center'>{articul}</TableCell>
			<TableCell align='center'>{quantity}</TableCell>
			<TableCell align='center'>{format(date, 'd.MM.Y H:mm')}</TableCell>
		</TableRow>
	)
}

export default Card
