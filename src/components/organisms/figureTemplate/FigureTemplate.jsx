import { Flexbox } from "../../styled/layout/flexbox";
import InputColorMolecule from "../../molecules/inputColorMolecule/InputColorMolecule";
import InputNumberMolecule from "../../molecules/inputNumberMolecule/InputNumberMolecule";
import PropTypes from "prop-types";

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
  children: PropTypes.func.isRequired,
}

export default FigureTemplate;
