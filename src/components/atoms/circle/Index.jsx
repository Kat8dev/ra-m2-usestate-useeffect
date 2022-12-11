import React from 'react'
import { SVG } from './styled';
import PropTypes from "prop-types";

const Circle = ({size, color}) => {
  return (
    <SVG width={size} height={size} color={color} />
  )
}

Circle.propTypes = {
  size: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
}

export default Circle;
