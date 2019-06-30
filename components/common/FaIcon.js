import { memo } from "react";
import PropTypes from "prop-types";
import css from "./FaIcon.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FaIcon = memo(({ faName }) => {
	function getIcon(faName) {
		let icon;
		switch (faName) {
		case "faGithub":
			icon = require("@fortawesome/free-brands-svg-icons").faGithub;
			break;
		case "faEnvelope":
			icon = require("@fortawesome/free-solid-svg-icons").faEnvelope;
			break;
		case "faCopyright":
			icon = require("@fortawesome/free-solid-svg-icons").faCopyright;
			break;
		case "faChevronLeft":
			icon = require("@fortawesome/free-solid-svg-icons").faChevronLeft;
			break;
		case "faChevronRight":
			icon = require("@fortawesome/free-solid-svg-icons").faChevronRight;
			break;
		case "faCircle":
			icon = require("@fortawesome/free-solid-svg-icons").faCircle;
			break;
		case "faReact":
			icon = require("@fortawesome/free-brands-svg-icons").faReact;
			break;
		case "faNode":
			icon = require("@fortawesome/free-brands-svg-icons").faNode;
			break;
		case "faJs":
			icon = require("@fortawesome/free-brands-svg-icons").faJsSquare;
			break;
		case "faSass":
			icon = require("@fortawesome/free-brands-svg-icons").faSass;
			break;
		case "faCss3Alt":
			icon = require("@fortawesome/free-brands-svg-icons").faCss3Alt;
			break;
		case "faBootstrap":
			icon = require("@fortawesome/free-brands-svg-icons").faBootstrap;
			break;
		case "faHtml5":
			icon = require("@fortawesome/free-brands-svg-icons").faHtml5;
			break;
		case "faGitAlt":
			icon = require("@fortawesome/free-brands-svg-icons").faGitAlt;
			break;
		case "faTwitter":
			icon = require("@fortawesome/free-brands-svg-icons").faTwitter;
			break;
		case "faFacebook":
			icon = require("@fortawesome/free-brands-svg-icons").faFacebook;
			break;
		default:
			icon = require("@fortawesome/free-brands-svg-icons").faLinkedinIn;
			break;
		}
		return icon;
	}

	return (
		<span className={css.root}>
			<FontAwesomeIcon icon={getIcon(faName)} />
		</span>
	);
});

FaIcon.propTypes = {
	faName: PropTypes.string.isRequired
};

export default FaIcon;
