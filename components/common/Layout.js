import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import Footer from "./Footer";
import Spinner from "./Spinner";
import "./Layout.scss";

const Layout = ({ children }) => {
	const [dataIsLoaded, setDataIsLoaded] = useState(false);
	useEffect(() => {
		const timer = setTimeout(() => {
			setDataIsLoaded(true);
		}, 600);
		return () => {
			clearTimeout(timer);
		};
	}, []);

	return (
		<>
			{dataIsLoaded ? (
				<>
					<Header />
					<main>{children}</main>
					<Footer />
				</>
			) : (
				<Spinner />
			)}
		</>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default Layout;
