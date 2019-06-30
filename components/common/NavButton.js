import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import css from "./NavButton.module.scss";

const NavButton = ({ onClick, navActive }) => {
	return (
		<button
			onClick={onClick}
			className={navActive ? css.open : css.root}
			aria-label="Toggle navigation"
		>
			<span>
				{navActive === true ? (
					<FontAwesomeIcon icon={faTimes} />
				) : (
					<FontAwesomeIcon icon={faBars} />
				)}
			</span>
		</button>
	);
};
NavButton.propTypes = {
	onClick: PropTypes.func.isRequired,
	navActive: PropTypes.bool.isRequired
};

export default NavButton;
