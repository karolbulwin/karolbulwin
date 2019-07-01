import { memo } from "react";
import PropTypes from "prop-types";
import css from "./FaIcon.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FaIcon = memo(({ faName }) => {
	return (
		<span className={css.root}>
			<FontAwesomeIcon
				icon={["fab", faName]}
				style={{
					maxWidth: 80,
					display: "inline-block",
					verticalAlign: "-0.125em"
				}}
			/>
		</span>
	);
});

FaIcon.propTypes = {
	faName: PropTypes.string.isRequired
};

export default FaIcon;
