import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const TutorContext = createContext()

export const TutorProvider = (props) => {
	const [state, setState] = useState({
		tutors: [],
		filteredTutors: [],
		cities: [],
		loading: false,
		error: '',
		sort: 'name',
	})

	const compareByName = (a, b) => {
		if (a.name < b.name) {
			return -1
		}
		if (a.name > b.name) {
			return 1
		}
		return 0
	}

	const compareByCity = (a, b) => {
		if (a.address.city < b.address.city) {
			return -1
		}
		if (a.address.city > b.address.city) {
			return 1
		}
		return 0
	}

	useEffect(() => {
		const fetchData = async () => {
			try {
				setState((prevState) => ({
					...prevState,
					loading: true,
				}))
				const res = await axios.get(
					'https://jsonplaceholder.typicode.com/users'
				)
				const tutors = res.data.sort(compareByName)
				const cities = []
				res.data.map((user) => cities.push(user.address.city))
				setState((prevState) => ({
					...prevState,
					tutors,
					loading: false,
					cities,
				}))
			} catch (e) {
				setState((prevState) => ({
					...prevState,
					error: e.message,
					loading: false,
				}))
			}
		}
		fetchData()
	}, [])

	useEffect(() => {
		const tutors =
			state.sort === 'name'
				? state.tutors.sort(compareByName)
				: state.tutors.sort(compareByCity)
		setState((prevState) => ({
			...prevState,
			tutors,
		}))
	}, [state.sort, state.tutors])

	return (
		<TutorContext.Provider value={[state, setState]}>
			{props.children}
		</TutorContext.Provider>
	)
}
