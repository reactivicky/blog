import React, { useContext, useState, useEffect } from 'react'
import Card from '../Card/Card'
import classes from './OurTutors.module.css'
import { TutorContext } from '../../TutorContext'

const OurTutors = () => {
	const [state, setState] = useContext(TutorContext)
	const [filter, setFilter] = useState('')
	const [showTutors, setShowTutors] = useState(false)
	const sort = state.sort

	const handleFilter = (e) => {
		setFilter(e.target.value)
	}

	const sortHandler = (data) => {
		setState((prevState) => ({
			...prevState,
			sort: data,
		}))
	}

	const handleShowTutors = () => {
		setShowTutors((prevState) => !prevState)
	}

	useEffect(() => {
		setState((prevState) => ({
			...prevState,
			filteredTutors: prevState.tutors.filter(
				(tutor) => tutor.address.city === filter
			),
		}))
	}, [filter, setState])

	let cards = null

	if (!state.loading) {
		if (!state.filteredTutors.length) {
			const arrayToMap = showTutors ? state.tutors : state.tutors.slice(0, 8)
			cards = arrayToMap.map((user) => (
				<Card key={user.id} name={user.name} city={user.address.city} />
			))
		} else {
			cards = state.filteredTutors.map((user) => (
				<Card key={user.id} name={user.name} city={user.address.city} />
			))
		}
	} else {
		cards = 'Loading...'
	}

	return (
		<div className={classes.OurTutors}>
			<div className={classes.HeadingContainer}>
				<h2 className={classes.Heading}>Our Tutors</h2>
				<p className={classes.HeadingText}>
					We have more than 100 tutors from various disciplines ready to match
					with you.
				</p>
			</div>

			<div className={classes.FilterSortContainer}>
				<div className={classes.FilterContainer}>
					<p>Filter by city:</p>
					<select value={filter} onChange={handleFilter}>
						{state.cities.map((city, index) => (
							<option key={city + index} value={city}>
								{city}
							</option>
						))}
					</select>
				</div>
				<div className={classes.SortContainer}>
					<p>Sort by:</p>
					<button
						onClick={() => sortHandler('name')}
						className={sort === 'name' ? classes.Active : ''}
					>
						Name
					</button>
					<button
						onClick={() => sortHandler('city')}
						className={sort === 'city' ? classes.Active : ''}
					>
						City
					</button>
				</div>
			</div>

			<hr />

			<div className={classes.CardContainer}>{cards}</div>
			<div className={classes.SeeAllTutorsBtnContainer}>
				<button className={classes.SeeAllTutorsBtn} onClick={handleShowTutors}>
					{!showTutors ? 'See all Tutors' : 'Hide'}
				</button>
			</div>
		</div>
	)
}

export default OurTutors
