import React, { useState } from "react";
import Layout from "../components/common/Layout";
import Head from "../components/common/Head";
import Carousel from "../components/projects/Carousel.js";
import CarouselNav from "../components/projects/CarouselNav.js";
import CarouselItem from "../components/projects/CarouselItem.js";
import projectsDb from "../tools/projectsDb.json";

import css from "./projects.module.scss";

function Projects() {
	const [activeIndex, setActiveIndex] = useState(0);
	const numSlides = projectsDb.length;

	function handleClickPrevious() {
		setActiveIndex(activeIndex - 1 >= 0 ? activeIndex - 1 : numSlides - 1);
	}
	function handleClickNext() {
		setActiveIndex(activeIndex + 1 <= numSlides - 1 ? activeIndex + 1 : 0);
	}

	function handleOnClick(e) {
		setActiveIndex(e.target.value);
	}

	function renderNav() {
		return (
			<CarouselNav
				onPrevious={handleClickPrevious}
				hasPrevious={activeIndex > 0}
				onNext={handleClickNext}
				hasNext={activeIndex < numSlides - 1}
				numSlides={numSlides}
				activeIndex={activeIndex}
				onClick={handleOnClick}
			/>
		);
	}

	return (
		<>
			<Head
				title="Projects"
				description="A few of my projects"
				keywords="projects, Tic-tac-toe, Blackjack, Tasks, Star-match, One-page-website, Website, Website-v2, WebRTC-Chat, Publishing-house, Library"
			/>
			<Layout>
				<div className={css.root}>
					<Carousel activeIndex={activeIndex} nav={renderNav()}>
						{projectsDb.map(project => (
							<CarouselItem
								key={project.title}
								onPrevious={handleClickPrevious}
								onNext={handleClickNext}
								activeIndex={activeIndex}
								imgName={project.imgName}
								title={project.title}
								hrefLive={project.hrefLive}
								hrefCode={project.hrefCode}
								video={project.video}
							>
								{project.text}
							</CarouselItem>
						))}
					</Carousel>
				</div>
			</Layout>
		</>
	);
}

export default Projects;
