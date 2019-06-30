import PropTypes from "prop-types";
import classnames from "classnames";
import css from "./CarouselItem.module.scss";

const CarouselItem = ({
	imgName,
	style,
	title,
	onPrevious,
	onNext,
	activeIndex,
	children,
	hrefLive,
	hrefCode,
	video
}) => {
	let touchStartX, touchEndX;

	function handleOnTouchStart(e) {
		touchStartX = e.touches[0].clientX;
	}
	function handleOnTouchEnd(e) {
		touchEndX = e.changedTouches[0].clientX;
		const move = touchEndX - touchStartX;
		if (move < -80) {
			onNext();
		}
		if (move > 80) {
			onPrevious();
		}
	}

	function checkHref(href) {
		return classnames(css.link, {
			[css.disabled]: href ? false : true
		});
	}

	function changeBackground(col) {
		switch (col) {
		case 1:
			return classnames(
				css.col1,
				{ [css.bg1]: activeIndex === 0 },
				{ [css.bg2]: activeIndex === 1 },
				{ [css.bg3]: activeIndex === 2 },
				{ [css.bg4]: activeIndex === 3 },
				{ [css.bg5]: activeIndex === 4 },
				{ [css.bg1]: activeIndex === 5 },
				{ [css.bg2]: activeIndex === 6 },
				{ [css.bg3]: activeIndex === 7 },
				{ [css.bg4]: activeIndex === 8 },
				{ [css.bg5]: activeIndex === 9 },
				{ [css.bg1]: activeIndex === 10 }
			);
		case 2:
			return classnames(
				css.col2,
				{ [css.bg2]: activeIndex === 0 },
				{ [css.bg3]: activeIndex === 1 },
				{ [css.bg4]: activeIndex === 2 },
				{ [css.bg5]: activeIndex === 3 },
				{ [css.bg1]: activeIndex === 4 },
				{ [css.bg2]: activeIndex === 5 },
				{ [css.bg3]: activeIndex === 6 },
				{ [css.bg4]: activeIndex === 7 },
				{ [css.bg5]: activeIndex === 8 },
				{ [css.bg1]: activeIndex === 9 },
				{ [css.bg2]: activeIndex === 10 }
			);

		case 3:
			return classnames(
				css.col3,
				{ [css.bg3]: activeIndex === 0 },
				{ [css.bg4]: activeIndex === 1 },
				{ [css.bg5]: activeIndex === 2 },
				{ [css.bg1]: activeIndex === 3 },
				{ [css.bg2]: activeIndex === 4 },
				{ [css.bg3]: activeIndex === 5 },
				{ [css.bg4]: activeIndex === 6 },
				{ [css.bg5]: activeIndex === 7 },
				{ [css.bg1]: activeIndex === 8 },
				{ [css.bg2]: activeIndex === 9 },
				{ [css.bg3]: activeIndex === 10 }
			);

		case 4:
			return classnames(
				css.col4,
				{ [css.bg4]: activeIndex === 0 },
				{ [css.bg5]: activeIndex === 1 },
				{ [css.bg1]: activeIndex === 2 },
				{ [css.bg2]: activeIndex === 3 },
				{ [css.bg3]: activeIndex === 4 },
				{ [css.bg4]: activeIndex === 5 },
				{ [css.bg5]: activeIndex === 6 },
				{ [css.bg1]: activeIndex === 7 },
				{ [css.bg2]: activeIndex === 8 },
				{ [css.bg3]: activeIndex === 9 },
				{ [css.bg4]: activeIndex === 10 }
			);
		default:
			return classnames(
				css.col5,
				{ [css.bg5]: activeIndex === 0 },
				{ [css.bg1]: activeIndex === 1 },
				{ [css.bg2]: activeIndex === 2 },
				{ [css.bg3]: activeIndex === 3 },
				{ [css.bg4]: activeIndex === 4 },
				{ [css.bg5]: activeIndex === 5 },
				{ [css.bg1]: activeIndex === 6 },
				{ [css.bg2]: activeIndex === 7 },
				{ [css.bg3]: activeIndex === 8 },
				{ [css.bg4]: activeIndex === 9 },
				{ [css.bg5]: activeIndex === 10 }
			);
		}
	}
	return (
		<article
			className={css.root}
			style={style}
			onTouchStart={handleOnTouchStart}
			onTouchEnd={handleOnTouchEnd}
		>
			<div className={css.composition}>
				<div className={changeBackground(1)} />
				<div className={changeBackground(2)} />
				<div className={changeBackground(3)}>
					<div className={css.content}>
						<div className={css.titleContainer}>
							<h2 className={css.title}>{title}</h2>
						</div>
						<div className={css.mediaContainer}>
							{video ? (
								<video
									className={css.video}
									poster={`/static/images/p_${imgName}_540.jpg`}
									src={`/static/video/${video}.mp4`}
									controls
									muted
								>
									Your browser does not support the video tag.
								</video>
							) : (
								<picture>
									<source
										srcSet={`/static/images/p_${imgName}_180.webp 180w, /static/images/p_${imgName}_360.webp 360w,
									/static/images/p_${imgName}_540.webp 540w, /static/images/p_${imgName}_720.webp 720w, 
									/static/images/p_${imgName}_900.webp 900w, /static/images/p_${imgName}_1080.webp 1080w`}
									/>
									<img
										className={css.img}
										src={`/static/images/p_${imgName}_540.jpg`}
										alt={title}
										draggable="false"
										srcSet={`/static/images/p_${imgName}_180.jpg 180w, /static/images/p_${imgName}_360.jpg 360w,
									/static/images/p_${imgName}_540.jpg 540w, /static/images/p_${imgName}_720.jpg 720w, 
									/static/images/p_${imgName}_900.jpg 900w, /static/images/p_${imgName}_1080.jpg 1080w`}
									/>
								</picture>
							)}
						</div>
						<div className={css.textLinksContainer}>
							<div>{children}</div>
							<div className={css.links}>
								<a
									target="_blank"
									aria-label="Go Live"
									rel="noopener noreferrer"
									href={hrefLive ? hrefLive : null}
									className={checkHref(hrefLive)}
								>
									Live
								</a>
								<a
									target="_blank"
									aria-label="See Code"
									rel="noopener noreferrer"
									href={hrefCode ? hrefCode : null}
									className={checkHref(hrefCode)}
								>
									Code
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className={changeBackground(4)} />
				<div className={changeBackground(5)} />
			</div>
		</article>
	);
};

CarouselItem.propTypes = {
	imgName: PropTypes.string.isRequired,
	style: PropTypes.object,
	title: PropTypes.string.isRequired,
	onPrevious: PropTypes.func.isRequired,
	onNext: PropTypes.func.isRequired,
	activeIndex: PropTypes.number.isRequired,
	hrefLive: PropTypes.string.isRequired,
	hrefCode: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
	video: PropTypes.string
};

export default CarouselItem;
