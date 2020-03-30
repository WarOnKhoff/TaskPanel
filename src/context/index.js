import React, { useState } from 'react'
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
		setLoading(true)
		const db = app.firestore()
		const users = await db
			.collection('users')
			.get()
			.then(data => {
				setUsers(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))
				return data.docs.map(doc => ({ ...doc.data(), id: doc.id }))
			})
		await db
			.collection('reports')
			.get()
			.then(data => {
				const reports = data.docs.map(doc => ({
					...doc.data(),
					id: doc.id,
					reporter: users.find(usr => usr.userId === doc.data().reporterId),
				}))
				return reports
			})
			.then(reports => {
				if (currentUser && !currentUser.isAdmin) {
					setReports(
						reports.filter(report => report.reporterId === currentUser.userId),
					)
				} else {
					setReports(reports)
				}
				setLoading(false)
			})
	}

	React.useMemo(() => {
		if (!currentUser || !currentUser.isAdmin) {
			return
		} else {
			app
				.firestore()
				.collection('reports')
				.onSnapshot(() => fetchData())
		}
	}, [currentUser])

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

	const createReport = async report => {
		const db = app.firestore()
		await db.collection('reports').add(report)
		const totalReports = users.find(user => user.id === currentUser.id).reports
		await db
			.collection('users')
			.doc(currentUser.id)
			.update({
				reports: totalReports + 1,
			})
			.then(() => fetchData())
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
				createReport,
				fetchData,
			}}
		>
			{children}
		</AppContext.Provider>
	)
}
