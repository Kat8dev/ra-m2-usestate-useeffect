import { InputLabel } from "./styled";
import PropTypes from "prop-types";

const Label = ({htmlFor, title}) => {
  return (
    <InputLabel htmlFor={htmlFor}>{title}</InputLabel>
  )
}

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default Label;
