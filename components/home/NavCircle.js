import ProptTypes from "prop-types";
import Router from "next/router";
import css from "./NavCircle.module.scss";

const NavCircle = ({ text, href }) => {
	const handlerClick = () => {
		Router.push({
			pathname: href
		});
	};
	return (
		<button
			aria-label={`Go to ${text}`}
			className={css.root}
			onClick={handlerClick}
		>
			{text}
		</button>
	);
};

NavCircle.propTypes = {
	text: ProptTypes.string.isRequired,
	href: ProptTypes.string.isRequired
};

export default NavCircle;
