import React from 'react'
import classes from './Card.module.css'
import user from '../../assets/user-photo.jpg'
import student from '../../assets/student-photo.svg'

const Card = ({ name, city }) => {
	return (
		<div className={classes.Card}>
			<img src={user} alt='user' />
			<div className={classes.CardBody}>
				<p className={classes.CardTitle}>{name}</p>
				<p className={classes.City}>City</p>
				<p className={classes.CityName}>{city}</p>
				<p className={classes.Students}>Students so far</p>
				<img src={student} alt='student' />
				<img src={student} alt='student' />
				<img src={student} alt='student' />
				<img src={student} alt='student' />
			</div>
		</div>
	)
}

export default Card
