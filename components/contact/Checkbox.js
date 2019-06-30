import PropTypes from "prop-types";
import css from "./Checkbox.module.scss";
import Rodo from "./Rodo";

const Checkbox = ({ name, label, onChange, checked }) => {
	return (
		<div className={css.root}>
			<Rodo />
			<label className={css.label} htmlFor={name}>
				{label}
			</label>
			<input
				type="checkbox"
				id={name}
				name={name}
				className={css.checkbox}
				checked={checked}
				onChange={onChange}
				required
			/>
		</div>
	);
};

Checkbox.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	checked: PropTypes.bool.isRequired
};

export default Checkbox;
