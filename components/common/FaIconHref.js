import { memo } from "react";
import ProptTypes from "prop-types";
import FaIcon from "./FaIcon";
import css from "./FaIconHref.module.scss";

const FaIconHref = memo(({ faName, name, href }) => {
	return (
		<div className={css.root}>
			<a
				target="_blank"
				rel="noopener noreferrer"
				href={href}
				aria-label={`See my profile at ${name}.`}
			>
				<FaIcon faName={faName} />
			</a>
		</div>
	);
});

FaIconHref.propTypes = {
	faName: ProptTypes.string.isRequired,
	name: ProptTypes.string.isRequired,
	href: ProptTypes.string.isRequired
};

export default FaIconHref;
