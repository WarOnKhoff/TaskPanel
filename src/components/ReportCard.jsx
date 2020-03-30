import React from 'react'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import EditIcon from '@material-ui/icons/Edit'
import IconButton from '@material-ui/core/IconButton'
import { format } from 'date-fns'

const Card = ({
	reportId,
	reporter,
	articul,
	quantity,
	date,
	admin,
	handleUpdateOpen,
}) => {
	return (
		<TableRow>
			<TableCell align='center'>{reportId}</TableCell>
			<TableCell align='center'>{reporter.fullName}</TableCell>
			<TableCell align='center'>{articul}</TableCell>
			<TableCell align='center'>{quantity}</TableCell>
			<TableCell align='center'>
				{format(new Date(date), 'd.MM.Y H:mm')}
			</TableCell>
			{admin && (
				<TableCell align='center'>
					<IconButton
						color='primary'
						style={{ padding: 0, width: 40, height: 40 }}
						onClick={() => handleUpdateOpen(reportId)}
					>
						<EditIcon />
					</IconButton>
				</TableCell>
			)}
		</TableRow>
	)
}

export default Card
