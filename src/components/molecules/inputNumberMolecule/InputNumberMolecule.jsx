import { Flexbox } from "../../styled/layout/flexbox";
import InputNumber from "../../atoms/inputNumber/Index";
import Label from "../../atoms/label/Index";
import PropTypes from "prop-types";

const InputNumberMolecule = ({htmlFor, id, name, value, onChange}) => {
  return (
    <Flexbox direction="row" gap="0.5rem">
      <Label htmlFor={htmlFor} title={value} />
      <InputNumber 
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        children={value}
      />
    </Flexbox>
  );
};

InputNumberMolecule.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired, 
  value: PropTypes.string.isRequired, 
  onChange: PropTypes.func.isRequired,
};

export default InputNumberMolecule;
