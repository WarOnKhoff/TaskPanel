import React, { useContext, useCallback, useMemo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import logo from '../assets/logo.png'
import Button from '@material-ui/core/Button'
import app from '../config'
import { AppContext } from '../context'
import format from 'date-fns/format'
import { dateFormat } from '../config'

const Header = () => {
	const classes = useStyles()
	const { currentUser, setCurrentUser } = useContext(AppContext)

	// const userData = users.find(
	// 	user => user.email.toLowerCase() === currentUser.email.toLowerCase(),
	// )
	// const userFullName = userData && `${userData.firstName} ${userData.lastName}`
	// const lastVisit = userData && format(new Date(userData.lastVisit), dateFormat)

	const userFullName =
		currentUser && `${currentUser.firstName} ${currentUser.lastName}`
	const lastVisit =
		currentUser && format(new Date(currentUser.lastVisit), dateFormat)

	const handleClick = () => {
		setCurrentUser(null)
		localStorage.removeItem('currentUser')
		app.auth().signOut()
	}

	return (
		<div className={classes.header}>
			<img src={logo} className={classes.logo} />
			<div className={classes.group}>
				<div className={classes.nameGroup}>
					<div className={classes.name}>Welcome, {userFullName}</div>
					<div className={classes.lastVisit}>last visited: {lastVisit}</div>
				</div>
				<Button variant='contained' onClick={handleClick}>
					Sign out
				</Button>
			</div>
		</div>
	)
}

const useStyles = makeStyles({
	header: {
		height: 100,
		width: '100%',
		background: '#333',
		color: '#FFF',
		fontSize: 30,
		fontWeight: 'bold',
		display: 'flex',
		padding: '0 20px',
		alignItems: 'center',
		letterSpacing: 2,
		justifyContent: 'space-between',
	},
	logo: {
		width: 80,
		height: 80,
	},
	group: {
		display: 'flex',
		alignItems: 'center',
	},
	name: {
		fontSize: 30,
		textAlign: 'end',
	},
	lastVisit: {
		fontSize: 15,
	},
	nameGroup: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-end',
		marginRight: 60,
	},
})

export default Header
