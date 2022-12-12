import { Flexbox } from "../../styled/layout/flexbox";
import Label from "../../atoms/label/Index";
import InputColor from "../../atoms/inputColor/Index";

const InputColorMolecule = ({htmlFor, id, name, value, onChange}) => {
  return (
    <Flexbox direction="row" gap="0.5rem">
      <Label htmlFor={htmlFor} title={value} />
      <InputColor
        id={id}
        name={name}
        value={value}
        onChange={onChange}
      />
    </Flexbox>
  );
};

export default InputColorMolecule;