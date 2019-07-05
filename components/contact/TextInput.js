import PropTypes from "prop-types";
import css from "./TextInput.module.scss";

const TextInput = ({ name, label, onChange, placeholder, value }) => (
	<div className={css.root}>
		<label className={css.label} htmlFor={name}>
			{label}
		</label>
		<input
			type="text"
			id={name}
			name={name}
			className={css.input}
			placeholder={placeholder}
			value={value}
			onChange={onChange}
			maxLength="50"
			minLength="3"
			required
		/>
		<span className={css.underline} />
	</div>
);

TextInput.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	placeholder: PropTypes.string,
	value: PropTypes.string
};

export default TextInput;
