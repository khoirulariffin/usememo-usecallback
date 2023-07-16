import React from "react";
import PropTypes from "prop-types";

import classes from "./Button.module.css";

const Button = React.memo(function Button(props) {
  console.log("Button RUNNING");

  return (
    <button
      type={props.type || "button"}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
});

Button.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.string,
  children: PropTypes.node,
};

export default Button;
