import PropTypes from "prop-types";
import React from "react";
import css from "./Carousel.module.scss";

const Carousel = ({ nav, activeIndex, children }) => {
	function renderSlides(children, activeIndex) {
		return React.Children.map(children, (slide, i) => {
			return React.cloneElement(slide, {
				style: {
					...slide.props.style,
					display: activeIndex === i ? "block" : null
				}
			});
		});
	}
	return (
		<div className={css.root}>
			<div className={css.inner}>
				<div className={css.slides}>{renderSlides(children, activeIndex)}</div>
			</div>
			{nav}
		</div>
	);
};

Carousel.propTypes = {
	nav: PropTypes.node.isRequired,
	children: PropTypes.node.isRequired,
	activeIndex: PropTypes.number
};

export default Carousel;
