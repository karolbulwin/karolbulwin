import { useState } from "react";
import axios from "axios";
import TextInput from "./TextInput";
import Textarea from "./Textarea";
import Checkbox from "./Checkbox";

import css from "./ContactForm.module.scss";

const INITIAL_STATE = {
	name: "",
	email: "",
	subject: "",
	message: "",
	agree: false,
	error: "",
	sending: false,
	response: ""
};

const ContactForm = () => {
	const [data, setData] = useState({ ...INITIAL_STATE });
	const isInvalid =
		data.name === "" ||
		data.email === "" ||
		data.subject === "" ||
		data.message === "" ||
		data.agree === false;

	const handleSubmit = event => {
		event.preventDefault();
		axios
			.post("/apt/contact", data)
			.then(res => {
				if (res.data === "success") {
					setData({ sending: true });
					setData({
						response: res.data
					});
				} else {
					setData({ ...data, response: res.data });
				}
			})
			.catch(err => {
				setData({ ...data, error: err.message });
			});
	};

	const handleChange = event => {
		const target = event.target;
		const value = target.type === "checkbox" ? target.checked : target.value;

		setData({ ...data, [event.target.name]: value });
	};

	const handleInvalid = () => {
		setData({ ...data, error: "Are you joking?" });
	};

	return (
		<>
			{data && (
				<form
					onSubmit={handleSubmit}
					onInvalid={handleInvalid}
					className={css.root}
				>
					<TextInput
						name="name"
						label="Name"
						value={data.name || ""}
						onChange={handleChange}
					/>
					<TextInput
						name="email"
						label="Email"
						value={data.email || ""}
						onChange={handleChange}
					/>
					<TextInput
						name="subject"
						label="Subject"
						value={data.subject || ""}
						onChange={handleChange}
					/>
					<Textarea
						name="message"
						label="Message"
						value={data.message || ""}
						onChange={handleChange}
					/>
					<Checkbox
						name="agree"
						label="Agree"
						checked={data.agree || false}
						onChange={handleChange}
					/>
					<div className={css.btnContainer}>
						<button
							className={css.btn}
							disabled={isInvalid}
							type="submit"
							aria-label="Send message"
						>
							{data.sending ? "SENDING" : "SEND"}
						</button>
					</div>
					<div className={css.info}>
						{data.error && <p className={css.error}>{data.error}</p>}
						{data.response && (
							<p
								className={
									data.response === "success" ? css.success : css.error
								}
							>
								{data.response === "success"
									? "Thank you! I will reply as soon as possible ;)"
									: "Sorry something went wrong."}
							</p>
						)}
					</div>
				</form>
			)}
		</>
	);
};

export default ContactForm;
