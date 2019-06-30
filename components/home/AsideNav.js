import NavCircle from "./NavCircle";
import css from "./AsideNav.module.scss";

const AsideNav = () => {
	return (
		<div className={css.root}>
			<NavCircle text="ABOUT ME" href="/about" />
			<NavCircle text="PROJECTS" href="/projects" />
			<NavCircle text="CONTACT" href="/contact" />
		</div>
	);
};

export default AsideNav;
