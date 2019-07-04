import { memo } from "react";
import PropTypes from "prop-types";
import Head from "next/head";

const MyHead = memo(({ title, description, keywords }) => {
	return (
		<Head>
			<title>{title}</title>
			<meta name="theme-color" content="#333" />
			<meta name="description" content={description} />
			<meta name="keywords" content={keywords} />
			<meta name="author" content="Karol Bulwin" />
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			<link rel="shortcut icon" href="/static/favicon/favicon.ico" />
			<link rel="icon" sizes="16x16 32x32 64x64" href="/static/favicon.ico" />
			<link
				href="https://fonts.googleapis.com/css?family=Russo+One|Roboto&display=swap"
				rel="stylesheet"
			/>
			<link rel="manifest" href="/static/favicon/site.webmanifest" />
			<meta property="og:title" content="Karol Bulwin - personal website" />
			<meta property="og:type" content="website" />
			<meta
				property="og:image"
				content="https://karolbulwin.dev/static/images/p_karolbulwin-dev_1080.jpg"
			/>
			<meta property="og:url" content="https://karolbulwin.dev" />
			<meta name="twitter:card" content="summary" />
			<meta name="twitter:site" content="@BulwinKarol" />
			<meta name="twitter:title" content="Karol Bulwin - personal website" />
			<meta
				name="twitter:image"
				content="https://karolbulwin.dev/static/images/p_karolbulwin-dev_1080.jpg"
			/>
			<meta name="twitter:url" content="https://karolbulwin.dev" />
		</Head>
	);
});

MyHead.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	keywords: PropTypes.string.isRequired
};

export default MyHead;
