import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { isSameDay } from 'date-fns'

const Filter = ({ setData, initialData, isAdmin }) => {
	const classes = useStyles()
	const [value, setValue] = useState('none')
	const [inputValue, setInputValue] = useState('')

	const handleChange = event => {
		setData(initialData)
		setInputValue('')
		setValue(event.target.value)
	}

	const handleFilter = () => {
		if (!inputValue) {
			setData(initialData)
			return
		}
		if (value !== 'date') {
			if (value === 'reporter') {
				setData(
					initialData.filter(item =>
						item[value].toLowerCase().includes(inputValue.toLocaleLowerCase()),
					),
				)
				return
			}
			setData(
				initialData.filter(
					item => item[value].toLowerCase() === inputValue.toLowerCase(),
				),
			)
		} else {
			setData(
				initialData.filter(item =>
					isSameDay(new Date(item[value]), new Date(inputValue)),
				),
			)
		}
	}

	return (
		<div className={classes.filterGroup}>
			{value !== 'none' && (
				<TextField
					style={{ marginRight: 10, maxWidth: 205 }}
					variant='outlined'
					value={inputValue}
					size='small'
					type={value === 'date' ? 'date' : 'text'}
					onChange={e => setInputValue(e.target.value)}
				/>
			)}
			<RadioGroup
				aria-label='filter'
				name='filter'
				value={value}
				onChange={handleChange}
				className={classes.filter}
			>
				{isAdmin && (
					<FormControlLabel
						control={<Radio color='primary' />}
						value='reporter'
						label='By Reporter'
					/>
				)}
				<FormControlLabel
					control={<Radio color='primary' />}
					value='articul'
					label='By Articul'
				/>
				<FormControlLabel
					control={<Radio color='primary' />}
					value='date'
					label='By Date'
				/>
				<FormControlLabel
					control={<Radio color='primary' />}
					value='none'
					label='None'
				/>
			</RadioGroup>
			{value !== 'none' && (
				<Button variant='contained' color='primary' onClick={handleFilter}>
					Filter
				</Button>
			)}
		</div>
	)
}

const useStyles = makeStyles({
	filterGroup: {
		display: 'flex',
	},
	filter: {
		height: '100%',
		display: 'flex',
		flexWrap: 'nowrap',
		alignItems: 'center',
		flexDirection: 'row',
	},
})

export default Filter
