import { InputColor, Label, Flexbox } from "../atoms/atoms";

// este componente esta bien
// Renombralo a InputColor y muevelo a atoms.
// Crea otro componente Label
// En el nivel de molecula es donde se combinan los atomos
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
  );
};

export default InputCMolecule;
