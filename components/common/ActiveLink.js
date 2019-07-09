import { memo } from "react";
import { withRouter } from "next/router";
import PropTypes from "prop-types";
import css from "./ActiveLink.module.scss";

const ActiveLink = ({ children, router, href }) => {
  const checkPath = () => {
    const regex = /[^/]+/;
    let result = router.pathname.match(regex);
    result = result === null ? "/" : `/${result[0]}`;
    return result;
  };
  const style = {
    color: checkPath() === href ? "#6e9590" : "none"
  };

  const handleClick = e => {
    e.preventDefault();
    router.push(href);
    window.scrollTo(0, 0);
  };

  return (
    <li className={css.root} onClick={handleClick}>
      <a className={css.link} href={href} style={style}>
        {children}
        {router.pathname === href ? (
          <span className={css.srOnly}>(current)</span>
        ) : null}
      </a>
    </li>
  );
};

ActiveLink.propTypes = {
  children: PropTypes.string.isRequired,
  router: PropTypes.object.isRequired,
  href: PropTypes.string.isRequired
};

export default withRouter(memo(ActiveLink));
