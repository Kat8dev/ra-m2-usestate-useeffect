import { useEffect, useState } from "react";
import { Flexbox } from "./components/styled/layout/flexbox";
import FigureTemplate from "./components/organisms/figureTemplate/FigureTemplate";
import Triangle from "./components/atoms/triangle/Index";
import Square from "./components/atoms/square/Index";
import Circle from "./components/atoms/circle/Index";

function App() {
  const [properties, setProperties] = useState({
    triangleC: "#ef476f",
    triangleS: "50",
    squareC: "#ffd166",
    squareS: "80",
    circleC: "#06d6a0",
    circleS: "70",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setProperties((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  useEffect(() => {
    if (
      properties.triangleS === properties.circleS &&
      properties.triangleS === properties.squareS
    ) {
      alert("sizes are equal");
    }
    if (
      properties.triangleC === properties.circleC &&
      properties.triangleC === properties.squareC
    ) {
      alert("colors are equal");
    }
  });

  return (
    <Flexbox>
      <FigureTemplate
        htmlForS="triangleS"
        idS="triangleS"
        nameS="triangleS"
        valueS={properties.triangleS}
        htmlForC="triangleC"
        idC="triangleC"
        nameC="triangleC"
        valueC={properties.triangleC}
        onChange={handleOnChange}
      >
        {<Triangle size={properties.triangleS} color={properties.triangleC} />}
      </FigureTemplate>
      <FigureTemplate
        htmlForS="squareS"
        idS="squareS"
        nameS="squareS"
        valueS={properties.squareS}
        htmlForC="squareC"
        idC="squareC"
        nameC="squareC"
        valueC={properties.squareC}
        onChange={handleOnChange}
      >
        {<Square size={properties.squareS} color={properties.squareC} />}
      </FigureTemplate>
      <FigureTemplate
        htmlForS="circleS"
        idS="circleS"
        nameS="circleS"
        valueS={properties.circleS}
        htmlForC="circleC"
        idC="circleC"
        nameC="circleC"
        valueC={properties.circleC}
        onChange={handleOnChange}
      >
        {<Circle size={properties.circleS} color={properties.circleC} />}
      </FigureTemplate>
    </Flexbox>
  );
}

export default App;
