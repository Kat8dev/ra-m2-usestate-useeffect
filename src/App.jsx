import { useEffect, useState } from "react";
import FigureTemplate from "./components/organisms/FigureTemplate";
import { SvgCircle, SvgTriangle, SvgSquare, Flexbox } from "./components/atoms/atoms";

function App() {
  const [properties, setProperties] = useState({
    triangleC: "#ef476f",
    triangleS: 50,
    squareC: "#ffd166",
    squareS: 80,
    circleC: "#06d6a0",
    circleS: 70,
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
        colorId="triangleC"
        numberId="triengleS"
        valueS={properties.triangleS}
        valueC={properties.triangleC}
        nameC="triangleC"
        nameS="triangleS"
        handleOnChange={handleOnChange}
      >
        <SvgTriangle size={properties.triangleS} color={properties.triangleC} />
      </FigureTemplate>
      <FigureTemplate
        colorId="squareC"
        numberId="squareS"
        valueS={properties.squareS}
        valueC={properties.squareC}
        nameC="squareC"
        nameS="squareS"
        handleOnChange={handleOnChange}
      >
        <SvgSquare
          width={properties.squareS}
          height={properties.squareS}
          color={properties.squareC}
        />
      </FigureTemplate>
      <FigureTemplate
        colorId="circleC"
        numberId="circleS"
        valueS={properties.circleS}
        valueC={properties.circleC}
        nameC="circleC"
        nameS="circleS"
        handleOnChange={handleOnChange}
      >
        <SvgCircle
          width={properties.circleS}
          height={properties.circleS}
          color={properties.circleC}
        />
      </FigureTemplate>
    </Flexbox>
  );
}

export default App;
