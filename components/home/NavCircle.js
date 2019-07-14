import ProptTypes from "prop-types";
import Router from "next/router";
import css from "./NavCircle.module.scss";

const NavCircle = ({ text, href }) => {
  const handlerClick = () => {
    Router.push({
      pathname: href
    });
  };
  return (
    <div className={css.root}>
      <button
        aria-label={`Go to ${text}`}
        className={css.button}
        onClick={handlerClick}
      >
        {text}
      </button>
    </div>
  );
};

NavCircle.propTypes = {
  text: ProptTypes.string.isRequired,
  href: ProptTypes.string.isRequired
};

export default NavCircle;
