import PropTypes from "prop-types";
import css from "./CarouselNav.module.scss";
import FaIcon from "../common/FaIcon";

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
				<FaIcon faName="faChevronLeft" />
			</button>
			<button className={css.btnRigth} onClick={onNext} aria-label="Next">
				<FaIcon faName="faChevronRight" />
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
