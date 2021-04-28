import React from 'react'
import classes from './Hero.module.css'
import logo from '../../assets/tutormatch-logo.png'

const Hero = () => {
	return (
		<div className={classes.Hero}>
			<div className={classes.LogoAndSignInContainer}>
				<div className={classes.LogoContainer}>
					<img className={classes.Logo} src={logo} alt='logo' />
				</div>
				<div className={classes.SignInContainer}>
					<p>Become a Tutor</p>
					<button className={classes.SignInBtn}>Sign In</button>
				</div>
			</div>

			<div className={classes.HeroTextContainer}>
				<p className={classes.HeroText}>
					Find out who can help you take your education to the next level.
				</p>
				<button className={classes.HeroGreenBtn}>Get started now</button>
			</div>
		</div>
	)
}

export default Hero
