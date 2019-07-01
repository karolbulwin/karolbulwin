import React from "react";
import App, { Container } from "next/app";
import {
	faGithub,
	faReact,
	faNode,
	faJs,
	faSass,
	faCss3Alt,
	faBootstrap,
	faHtml5,
	faGitAlt,
	faTwitter,
	faFacebook,
	faLinkedinIn,
	faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import {
	faBars,
	faTimes,
	faEnvelope,
	faCopyright,
	faChevronLeft,
	faChevronRight
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(
	faBars,
	faTimes,
	faEnvelope,
	faCopyright,
	faChevronLeft,
	faChevronRight,
	faGithub,
	faReact,
	faNode,
	faJs,
	faSass,
	faCss3Alt,
	faBootstrap,
	faHtml5,
	faGitAlt,
	faTwitter,
	faFacebook,
	faLinkedinIn,
	faLinkedin
);

class MyApp extends App {
	static async getInitialProps({ Component, ctx }) {
		let pageProps = {};

		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx);
		}

		return { pageProps };
	}

	render() {
		const { Component, pageProps } = this.props;

		return (
			<Container>
				<Component {...pageProps} />
			</Container>
		);
	}
}

export default MyApp;
