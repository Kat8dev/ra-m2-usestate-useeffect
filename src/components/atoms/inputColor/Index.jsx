import { Input } from "./styled";
import PropTypes from "prop-types";

const InputColor = ({id, name, value, onChange}) => {
  return (
      <Input type="color" id={id} name={name} value={value} onChange={onChange} />    
  )
}

InputColor.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default InputColor;

