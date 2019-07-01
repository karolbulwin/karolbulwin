import PropTypes from "prop-types";
import css from "./CarouselNav.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CarouselNav = ({
	onPrevious,
	onNext,
	onClick,
	numSlides,
	activeIndex
}) => {
	return (
		<>
			<ol className={css.indicators}>
				{[...Array(numSlides)].map((slide, index) => (
					<li
						key={index}
						style={{ opacity: activeIndex === index ? 1 : null }}
						onClick={onClick}
						value={index}
					/>
				))}
			</ol>
			<button
				className={css.btnLeft}
				onClick={onPrevious}
				aria-label="Previous"
			>
				<span>
					<FontAwesomeIcon
						icon="chevron-left"
						style={{
							maxWidth: 30,
							display: "inline-block",
							verticalAlign: "-0.125em"
						}}
					/>
				</span>
			</button>
			<button className={css.btnRigth} onClick={onNext} aria-label="Next">
				<span>
					<FontAwesomeIcon
						icon="chevron-right"
						style={{
							maxWidth: 30,
							display: "inline-block",
							verticalAlign: "-0.125em"
						}}
					/>
				</span>
			</button>
		</>
	);
};

CarouselNav.propTypes = {
	onPrevious: PropTypes.func.isRequired,
	onNext: PropTypes.func.isRequired,
	onClick: PropTypes.func.isRequired,
	numSlides: PropTypes.number.isRequired,
	activeIndex: PropTypes.number.isRequired
};

export default CarouselNav;
