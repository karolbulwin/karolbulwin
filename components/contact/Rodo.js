import { memo } from "react";
import css from "./Rodos.module.scss";

const Rodo = memo(() => {
	return (
		<div className={css.root}>
			Data will be processed for the purpose of answering an inquiry (legal
			basis: legally justified interest of the administrator) and marketing of
			own products (legal basis: legally justified interest of the
			administrator). Providing data is a condition for responding. The data
			will be stored until the reply to the request is given.
		</div>
	);
});

export default Rodo;
