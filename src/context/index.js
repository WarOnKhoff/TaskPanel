import React, { useEffect, useState } from 'react'
import app from '../config'

export const AppContext = React.createContext()

export const AppProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(
		JSON.parse(localStorage.getItem('currentUser')) || null,
	)
	const [loading, setLoading] = useState(false)
	const [users, setUsers] = useState([])
	const [reports, setReports] = useState([])

	const fetchData = async () => {
		const db = app.firestore()
		await db
			.collection('users')
			.get()
			.then(data => {
				setUsers(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))
			})
		await db
			.collection('reports')
			.get()
			.then(data => {
				setReports(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))
			})
		// setUsers(usersData.docs.map(doc => ({ ...doc.data() })))
		// setReports(reportsData.docs.map(doc => ({ ...doc.data() })))
	}

	// useEffect(() => {
	// 	console.log('fetchTriggers')
	// 	fetchData()
	// }, [loading])

	React.useMemo(() => {
		if (!currentUser) return
		console.log('fetch Triggers')
		fetchData()
	}, [loading])

	const getCurrentUser = async data => {
		const db = app.firestore()
		await db
			.collection('users')
			.get()
			.then(users => {
				return users.docs
					.map(doc => ({ ...doc.data(), id: doc.id }))
					.find(
						arrUser =>
							arrUser.email.toLowerCase() === data.user.email.toLowerCase(),
					)
			})
			.then(usr => {
				db.collection('users')
					.doc(usr.id)
					.update({ lastVisit: new Date().getTime() })
				setCurrentUser(usr)
				localStorage.setItem('currentUser', JSON.stringify(usr))
			})
	}

	return (
		<AppContext.Provider
			value={{
				setCurrentUser,
				currentUser,
				users,
				reports,
				loading,
				setLoading,
				getCurrentUser,
			}}
		>
			{children}
		</AppContext.Provider>
	)
}
