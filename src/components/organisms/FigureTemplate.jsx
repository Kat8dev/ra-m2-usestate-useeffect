import { Flexbox } from "../atoms/atoms";
import InputCMolecule from "../molecules/InputCMolecule";
import InputNMolecule from "../molecules/InputNMolecule";

// No solo en este componente, pero también en el resto de los componentes destructura las props y utiliza PropTypes para hacer más explicito y mejor documentado el código.
const FigureTemplate = (props) => {
  return (
    <Flexbox gap="1rem">
      <div>{props.children}</div>
      <Flexbox gap="0.5rem">
        <InputCMolecule
          colorId={props.colorId}
          nameC={props.nameC}
          valueC={props.valueC}
          handleOnChange={props.handleOnChange}
        />
        <InputNMolecule
          numberId={props.numberId}
          nameS={props.nameS}
          valueS={props.valueS}
          handleOnChange={props.handleOnChange}
        />
      </Flexbox>
    </Flexbox>
  );
};

export default FigureTemplate;
