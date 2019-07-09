import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import css from "./NavButton.module.scss";

const NavButton = ({ onClick, navActive }) => {
  return (
    <button
      onClick={onClick}
      className={navActive ? css.open : css.root}
      aria-label="Toggle navigation"
      style={{
        padding: ".3em .3em .6em .6em",
        backgroundColor: "transparent",
        fontSize: "1em"
      }}
    >
      <span>
        {navActive === true ? (
          <FontAwesomeIcon icon="times" />
        ) : (
          <FontAwesomeIcon
            icon="bars"
            style={{
              width: 19.6,
              height: 22.4,
              fontSize: "1em",
              display: "inline-block",
              verticalAlign: "-0.125em",
              color: "#c9d8d6"
            }}
          />
        )}
      </span>
    </button>
  );
};
NavButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  navActive: PropTypes.bool.isRequired
};

export default NavButton;
