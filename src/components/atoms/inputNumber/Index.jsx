import { Input } from "./styled";
import PropTypes from "prop-types";

const InputNumber = ({id, name, value, onChange}) => {
  return (
      <Input type="number" id={id} name={name} value={value} onChange={onChange} />
  )
}

InputNumber.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default InputNumber;
