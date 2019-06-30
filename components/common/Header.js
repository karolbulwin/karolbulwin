import { useState, memo } from "react";
import ActiveLink from "./ActiveLink";
import NabButton from "./NavButton";
import FaIconHref from "./FaIconHref";
import classnames from "classnames";
import css from "./Header.module.scss";

const Header = memo(() => {
	const [navActive, setNavActive] = useState(false);
	const [justTurnOn, setJustTurnOn] = useState(true);
	const [timeToHide, setTimeToHide] = useState(true);

	function toggelNav() {
		if (navActive) {
			setNavActive(false);
			const timer = setTimeout(() => {
				setTimeToHide(true);
			}, 800);
			clearTimeout(timer);
		} else {
			setNavActive(true);
			setTimeToHide(false);
		}

		if (justTurnOn === true) {
			setJustTurnOn(false);
		}
	}

	function navIsOn() {
		return classnames(
			css.navbar,
			{ [css.slideIn]: navActive },
			{ [css.slideOut]: !navActive && !justTurnOn },
			{ [css.hide]: timeToHide }
		);
	}

	return (
		<header>
			<nav className={css.nav}>
				<NabButton onClick={toggelNav} navActive={navActive} />
				<div>
					<ul className={navIsOn()}>
						<ActiveLink href="/">Home</ActiveLink>
						<ActiveLink href="/about">About me</ActiveLink>
						<ActiveLink href="/projects">Projects</ActiveLink>
						<ActiveLink href="/contact">Contact</ActiveLink>
						<li className={css.socialIcons}>
							<FaIconHref
								faName="faGithub"
								name="Github"
								href="https://github.com/karolbulwin"
							/>
							<FaIconHref
								faName="faLinkedinIn"
								name="Linkedin"
								href="https://www.linkedin.com/in/karol-bulwin-501770184/"
							/>
							<FaIconHref
								faName="faTwitter"
								name="Twitter"
								href="https://twitter.com/BulwinKarol"
							/>
							<FaIconHref
								faName="faFacebook"
								name="Facebook"
								href="https://www.facebook.com/karol.bulwin.5"
							/>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
});

export default Header;
