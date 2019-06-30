import Layout from "../components/common/Layout";
import Head from "../components/common/Head";
import Skills from "../components/about/Skills";
import css from "./about.module.scss";

function About() {
	return (
		<div className={css.root}>
			<Head
				title="About me"
				description="A little about me"
				keywords="Front-end Developer, skills"
			/>
			<Layout>
				<div className={css.container}>
					<div className={css.row}>
						<div className={css.col3}>
							<div className={css.imgContainer}>
								<picture>
									<img
										className={css.img}
										srcSet={`/static/images/a_karolbulwin_126.jpg 320w, /static/images/a_karolbulwin_252.jpg 640w,
									/static/images/a_karolbulwin_378.jpg 960w`}
										src={"/static/images/a_karolbulwin_378.jpg"}
										alt="Smiling Author."
										draggable="false"
									/>
								</picture>
							</div>
						</div>
						<div className={css.titleContainer}>
							<h1 className={css.title}>Welcome</h1>
						</div>
					</div>
					<div className={css.row}>
						<div className={css.col}>
							<div className={css.text}>
								I’m Front-end Developer making websites and web applications. I
								like to code things from scratch and enjoy bringing ideas to
								life in the browser. My front-end build process involves the use
								of HTML, CSS, Sass, Bootstrap, JavaScript, React, npm, webpack,
								Prettier, ESLint, Jest, Enzyme, Storage, Service Workers,
								Next.js, GitHub, MongoDB and Light House. The last one shows me
								what can I improve. I constantly increase my skills and gain new
								ones. I am always looking for the best solution.
							</div>
						</div>
					</div>
					<div className={css.row}>
						<div className={css.col}>
							<Skills />
						</div>
					</div>
				</div>
			</Layout>
		</div>
	);
}

export default About;
