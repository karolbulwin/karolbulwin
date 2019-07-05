import Layout from "../components/common/Layout";
import Head from "../components/common/Head";
import AsideNav from "../components/home/AsideNav";
import FlowingTitle from "../components/home/FlowingTitle";
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
						<div className={css.firstTitle}>
							<FlowingTitle size={1} title="KAROL" />
							<FlowingTitle size={1} title="BULWIN" />
						</div>
						<div className={css.secondTitle}>
							<FlowingTitle size={2} title="FRONT-END" />
							<FlowingTitle size={2} title="DEVELOPER" />
						</div>
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
