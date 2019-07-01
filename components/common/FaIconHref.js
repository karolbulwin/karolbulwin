import { memo } from "react";
import ProptTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
				<span>
					<FontAwesomeIcon
						icon={["fab", faName]}
						style={{
							maxWidth: 44.8,
							display: "inline-block",
							verticalAlign: "-0.125em"
						}}
					/>
				</span>
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
