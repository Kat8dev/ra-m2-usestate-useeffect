const wrapper = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "0.5rem"
};

const inputs = {
  display: "flex",
  alignItems: "center",
  gap: "0.5rem"
};

// Crear carpetas de atoms/molecules/organisms, una o todas y colocar este componente en una de ellas
function FigureTemplate(props) {
  return (
    <div style={wrapper}>
      <div style={props.styles}></div>
      <div style={inputs}>
        {/* Cada input debería de tener un label asociado. Se puede ocultar mediante CSS después */}
        <input
          type="color"
          name={props.nameC}
          value={props.valueC}
          onChange={props.handleOnChange}
        />
        <input
          style={{ maxWidth: "3rem" }}
          type="number"
          name={props.nameS}
          value={props.valueS}
          onChange={props.handleOnChange}
        />
      </div>
    </div>
  );
}

export default FigureTemplate;
