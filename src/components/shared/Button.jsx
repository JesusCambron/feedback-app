import React from "react";
import PropTypes from "prop-types";

const Button = ({ children, version, type, isDisabled, onClickEvent }) => {
  return (
    <button
      onClick={onClickEvent}
      type={type}
      disabled={isDisabled}
      className={`btn btn-${version}`}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  version: "primary",
  type: "button",
  isDisabled: false,
  onClickEvent: null,
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  version: PropTypes.string,
  type: PropTypes.string,
  isDisabled: PropTypes.bool,
};

export default Button;
