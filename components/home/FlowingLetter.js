import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import css from "./FlowingLetter.module.scss";

const FlowingLetter = ({ letter }) => {
	const [isTimeToFlow, setIsTimeToFlow] = useState(false);
	const [isTimeToShow, setIsTimeToShow] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsTimeToShow(false);
		}, 1500);

		return () => {
			setIsTimeToShow(true);
			clearTimeout(timer);
		};
	}, []);

	function makeItFlow() {
		return classnames(css.root, {
			[css.flow]: isTimeToFlow,
			[css.show]: isTimeToShow
		});
	}

	function handleMouseEnter() {
		if (!isTimeToFlow) {
			setIsTimeToFlow(true);
			setTimeout(() => {
				setIsTimeToFlow(false);
			}, 1000);
		}
	}
	return (
		<div
			onMouseEnter={handleMouseEnter}
			onTouchMove={handleMouseEnter}
			className={makeItFlow()}
		>
			{letter}
		</div>
	);
};

FlowingLetter.propTypes = {
	letter: PropTypes.string.isRequired
};

export default FlowingLetter;
