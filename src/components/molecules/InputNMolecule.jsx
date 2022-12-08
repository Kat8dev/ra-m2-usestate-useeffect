import { Label, InputNumber } from "../atoms/atoms";

const InputNMolecule = (props) => {
  return (
    <div>
      <Label htmlFor={props.numberId}></Label>
      <InputNumber
        id={props.numberId}
        type="number"
        name={props.nameS}
        value={props.valueS}
        onChange={props.handleOnChange}
      />
    </div>
  );
};

export default InputNMolecule;
