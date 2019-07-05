import React from "react";
import PropTypes from "prop-types";
import FlowingLetter from "./FlowingLetter";
import classnames from "classnames";
import css from "./FlowingTitle module.scss";

const FlowingTitle = ({ title, size }) => {
	function propperSize() {
		return classnames(css.root, {
			[css.size1]: size === 1,
			[css.size2]: size === 2
		});
	}

	return (
		<div className={propperSize()}>
			{[...title].map((letter, index) => (
				<FlowingLetter key={letter + size + index} letter={letter} />
			))}
		</div>
	);
};

FlowingTitle.propTypes = {
	title: PropTypes.string.isRequired,
	size: PropTypes.number.isRequired
};

export default FlowingTitle;
