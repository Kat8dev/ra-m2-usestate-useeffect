import { InputColor, Label, Flexbox, InputNumber } from "./atoms";

const FigureTemplate = (props) => {
  return (
    <Flexbox gap="1rem">
      <div>{props.children}</div>
      <Flexbox gap="0.5rem">
        <Flexbox direction="row" gap="0.5rem">
          <Label htmlFor={props.id}>{props.valueC}</Label>
          <InputColor
            id={props.id}
            type="color"
            name={props.nameC}
            value={props.valueC}
            onChange={props.handleOnChange}
          />
        </Flexbox>
        <div>
          <Label htmlFor={props.id}></Label>
          <InputNumber
            id={props.id}
            type="number"
            name={props.nameS}
            value={props.valueS}
            onChange={props.handleOnChange}
          />
        </div>
      </Flexbox>
    </Flexbox>
  );
};

export default FigureTemplate;
