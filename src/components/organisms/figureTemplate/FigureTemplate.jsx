import { Flexbox } from "../../styled/layout/flexbox";
import InputColorMolecule from "../../molecules/inputColorMolecule/InputColorMolecule";
import InputNumberMolecule from "../../molecules/inputNumberMolecule/InputNumberMolecule";
import PropTypes from "prop-types";


// No solo en este componente, pero también en el resto de los componentes destructura las props y utiliza PropTypes para hacer más explicito y mejor documentado el código.
const FigureTemplate = ({htmlForS, idS, nameS, valueS, htmlForC, idC, nameC, valueC, onChange, children}) => {
  return (
    <Flexbox gap="1rem">
      {children}    
      <InputColorMolecule htmlFor={htmlForC} id={idC} name={nameC} value={valueC} onChange={onChange} />
      <InputNumberMolecule htmlFor={htmlForS} id={idS} name={nameS} value={valueS} onChange={onChange} />    
    </Flexbox>
  );
};

FigureTemplate.proptype = {
  htmlForS: PropTypes.string.isRequired, 
  idS: PropTypes.string.isRequired, 
  nameS: PropTypes.string.isRequired, 
  valueS: PropTypes.string.isRequired, 
  htmlForC: PropTypes.string.isRequired, 
  dC: PropTypes.string.isRequired, 
  nameC: PropTypes.string.isRequired, 
  valueC: PropTypes.string.isRequired, 
  onChange: PropTypes.func.isRequired,
  children: PropTypes.any.isRequired,
}

export default FigureTemplate;
