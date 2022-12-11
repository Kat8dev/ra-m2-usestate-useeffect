import { Flexbox } from "../../styled/layout/flexbox";
import Label from "../../atoms/label/Index";
import InputColor from "../../atoms/inputColor/Index";
import PropTypes from "prop-types";

const InputColorMolecule = ({htmlFor, id, name, value, onChange}) => {
  return (
    <Flexbox direction="row" gap="0.5rem">
      <Label htmlFor={htmlFor} title={value} />
      <InputColor
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        children={value}
      />
    </Flexbox>
  );
};

InputColorMolecule.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired, 
  value: PropTypes.string.isRequired, 
  onChange: PropTypes.func.isRequired,
};

export default InputColorMolecule;