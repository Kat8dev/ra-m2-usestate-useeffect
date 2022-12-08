import { InputColor, Label, Flexbox } from "../atoms/atoms";

const InputCMolecule = (props) => {
  return (
    <Flexbox direction="row" gap="0.5rem">
          <Label htmlFor={props.colorId}>{props.valueC}</Label>
          <InputColor
            id={props.colorId}
            type="color"
            name={props.nameC}
            value={props.valueC}
            onChange={props.handleOnChange}
          />
    </Flexbox>
  )
}

export default InputCMolecule
