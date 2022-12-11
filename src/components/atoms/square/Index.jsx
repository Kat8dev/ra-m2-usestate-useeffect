import { SVG } from "./styled";
import PropTypes from "prop-types";

const Square = ({size, color}) => {
  return (
    <SVG width={size} height={size} color={color} />
  )
}

Square.propType = {
  size: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
}

export default Square;
