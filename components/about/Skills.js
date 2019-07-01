import FaIcon from "../common/FaIcon";
import css from "./Skills.module.scss";

const Skills = () => (
	<div className={css.root}>
		<FaIcon faName="js" />
		<FaIcon faName="react" />
		<FaIcon faName="node" />
		<FaIcon faName="html5" />
		<FaIcon faName="sass" />
		<FaIcon faName="css3-alt" />
		<FaIcon faName="bootstrap" />
		<FaIcon faName="git-alt" />
	</div>
);

export default Skills;
