import { memo } from "react";
import FaIconHref from "./FaIconHref";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import css from "./Footer.module.scss";

const Footer = memo(() => {
	return (
		<footer className={css.root}>
			<div className={css.socialIcons}>
				<FaIconHref
					faName="github"
					name="Github"
					href="https://github.com/karolbulwin"
				/>
				<FaIconHref
					faName="linkedin-in"
					name="Linkedin"
					href="https://www.linkedin.com/in/karol-bulwin-501770184/"
				/>
				<FaIconHref
					faName="twitter"
					name="Twitter"
					href="https://twitter.com/BulwinKarol"
				/>
				<FaIconHref
					faName="facebook"
					name="Facebook"
					href="https://www.facebook.com/karol.bulwin.5"
				/>
			</div>
			<div className={css.email}>
				<span className={css.icon}>
					<FontAwesomeIcon
						icon="envelope"
						style={{
							maxWidth: 22.4,
							display: "inline-block",
							verticalAlign: "-0.125em"
						}}
					/>
				</span>
				<a href="mailto:karolbulwin@gmail.com">karolbulwin@gmail.com</a>
			</div>
			<div className={css.copyright}>
				Copyright&nbsp;
				<span className={css.icon}>
					<FontAwesomeIcon
						icon="copyright"
						style={{
							maxWidth: 16,
							display: "inline-block",
							verticalAlign: "-0.125em"
						}}
					/>
				</span>
				&nbsp;2019 Karol Bulwin
			</div>
		</footer>
	);
});

export default Footer;
