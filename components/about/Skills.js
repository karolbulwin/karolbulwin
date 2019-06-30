import FaIcon from "../common/FaIcon";
import css from "./Skills.module.scss";

const Skills = () => (
	<div className={css.root}>
		<FaIcon faName="faJs" />
		<FaIcon faName="faReact" />
		<FaIcon faName="faNode" />
		<FaIcon faName="faHtml5" />
		<FaIcon faName="faSass" />
		<FaIcon faName="faCss3Alt" />
		<FaIcon faName="faBootstrap" />
		<FaIcon faName="faGitAlt" />
	</div>
);

export default Skills;
