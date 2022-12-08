import { Flexbox } from "../atoms/atoms";
import InputCMolecule from "../molecules/InputCMolecule";
import InputNMolecule from "../molecules/InputNMolecule";

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
