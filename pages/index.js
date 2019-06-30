import Layout from "../components/common/Layout";
import Head from "../components/common/Head";
import AsideNav from "../components/home/AsideNav";
import css from "./index.module.scss";

function Home() {
	return (
		<div className={css.root}>
			<Head
				title="Karol Bulwin"
				description="Personal website"
				keywords="Karl Bulwin, personal website, website"
			/>
			<Layout>
				<div className={css.container}>
					<div className={css.title}>
						<h1>KAROL BULWIN</h1>
						<h2>FRONT-END DEVELOPER</h2>
					</div>
					<div className={css.asideNav}>
						<AsideNav />
					</div>
				</div>
			</Layout>
		</div>
	);
}

export default Home;
