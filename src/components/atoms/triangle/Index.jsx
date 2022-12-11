import { SVG } from "./styled";
import PropTypes from "prop-types";

const Triangle = ({ size, color }) => {
  return (
    <SVG size={size} color={color} />
  )
}

Triangle.propType = {
  size: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
}

export default Triangle;
