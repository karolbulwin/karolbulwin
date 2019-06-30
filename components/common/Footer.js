import { memo } from "react";
import css from "./Footer.module.scss";
import FaIcon from "./FaIcon";
import FaIconHref from "./FaIconHref";

const Footer = memo(() => {
	return (
		<footer className={css.root}>
			<div className={css.socialIcons}>
				<FaIconHref
					faName="faGithub"
					name="Github"
					href="https://github.com/karolbulwin"
				/>
				<FaIconHref
					faName="faLinkedinIn"
					name="Linkedin"
					href="https://www.linkedin.com/in/karol-bulwin-501770184/"
				/>
				<FaIconHref
					faName="faTwitter"
					name="Twitter"
					href="https://twitter.com/BulwinKarol"
				/>
				<FaIconHref
					faName="faFacebook"
					name="Facebook"
					href="https://www.facebook.com/karol.bulwin.5"
				/>
			</div>
			<div className={css.email}>
				<FaIcon faName="faEnvelope" />
				<a href="mailto:karolbulwin@gmail.com">karolbulwin@gmail.com</a>
			</div>
			<div className={css.copyright}>
				Copyright <FaIcon faName="faCopyright" /> 2019 Karol Bulwin
			</div>
		</footer>
	);
});

export default Footer;
