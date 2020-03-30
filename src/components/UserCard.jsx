import React from 'react'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import { format } from 'date-fns'

const UserCard = ({
	userId,
	fullName,
	joined,
	reports,
	isAdmin,
	lastVisit,
}) => {
	return (
		<TableRow>
			<TableCell align='center'>{userId}</TableCell>
			<TableCell align='center'>{fullName}</TableCell>
			<TableCell align='center'>
				{format(new Date(joined), 'd.MM.Y H:mm')}
			</TableCell>
			<TableCell align='center'>{reports}</TableCell>
			<TableCell align='center'>
				{format(new Date(lastVisit), 'd.MM.Y H:mm')}
			</TableCell>
			<TableCell align='center'>{isAdmin.toString()}</TableCell>
		</TableRow>
	)
}

export default UserCard
