import Layout from "../components/common/Layout";
import Head from "../components/common/Head";
import ContactForm from "../components/contact/ContactForm";
import css from "./contact.module.scss";

function Contact() {
	return (
		<div className={css.root}>
			<Head
				title="Contact"
				description="Contact me if you want"
				keywords="contact form"
			/>
			<Layout>
				<div className={css.container}>
					<h1>CONTACT ME</h1>
					<div className={css.text}>
						I&apos;m always interested about cool stuff. Are you minding a
						project? Let&apos;s talk.
					</div>
					<ContactForm />
				</div>
			</Layout>
		</div>
	);
}

export default Contact;
