import PropTypes from "prop-types";
import css from "./Textarea.module.scss";

const Textarea = ({ name, label, onChange, placeholder, value }) => (
	<div className={css.root}>
		<label className={css.label} htmlFor={name}>
			{label}
		</label>
		<textarea
			className={css.textarea}
			type="text"
			id={name}
			name={name}
			placeholder={placeholder}
			value={value}
			maxLength="950"
			onChange={onChange}
		/>
		<span className={css.underline} />
	</div>
);

Textarea.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	placeholder: PropTypes.string,
	value: PropTypes.string,
	error: PropTypes.string
};

export default Textarea;
