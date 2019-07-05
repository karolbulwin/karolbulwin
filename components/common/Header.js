import { useState, memo } from "react";
import ActiveLink from "./ActiveLink";
import NabButton from "./NavButton";
import FaIconHref from "./FaIconHref";
import classnames from "classnames";
import css from "./Header.module.scss";

const Header = memo(() => {
	const [navActive, setNavActive] = useState(false);
	const [justTurnOn, setJustTurnOn] = useState(true);

	function toggelNav() {
		const navLinks = document.querySelectorAll("Header a");
		const footerLinks = document.querySelectorAll("Footer a");

		if (navActive) {
			setNavActive(false);
			[...navLinks].map(link => (link.tabIndex = "-1"));
			[...footerLinks].map(link => (link.tabIndex = "0"));
		} else {
			setNavActive(true);
			[...navLinks].map(link => (link.tabIndex = "0"));
			[...footerLinks].map(link => (link.tabIndex = "-1"));
		}

		if (justTurnOn === true) {
			setJustTurnOn(false);
		}
	}

	function navIsOn() {
		return classnames(
			css.navbar,
			{ [css.slideIn]: navActive },
			{ [css.slideOut]: !navActive && !justTurnOn }
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
								faName="github"
								name="Github"
								href="https://github.com/karolbulwin"
							/>
							<FaIconHref
								faName="linkedin-in"
								name="Linkedin"
								href="https://www.linkedin.com/in/karol-bulwin-501770184/"
							/>
							<FaIconHref
								faName="twitter"
								name="Twitter"
								href="https://twitter.com/BulwinKarol"
							/>
							<FaIconHref
								faName="facebook"
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
