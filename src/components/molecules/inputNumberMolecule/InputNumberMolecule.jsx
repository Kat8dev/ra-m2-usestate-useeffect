import { Flexbox } from "../../styled/layout/flexbox";
import InputNumber from "../../atoms/inputNumber/Index";
import Label from "../../atoms/label/Index";

const InputNumberMolecule = ({htmlFor, id, name, value, onChange}) => {
  return (
    <Flexbox direction="row" gap="0.5rem">
      <Label htmlFor={htmlFor} title={value} />
      <InputNumber 
        id={id}
        name={name}
        value={value}
        onChange={onChange}
      />
    </Flexbox>
  );
};

export default InputNumberMolecule;
