import FigureTemplate from "./components/FigureTemplate";
import { useEffect, useState } from "react";

const wrapper = {
  position: "absolute",
  left: "50%",
  transform: "translate(-50%)",
  display: "flex",
  flexDirection: "column",
  gap: "1rem"
};

// Al decidir poner todo en un mismo archivo aumentas la complejidad y dificultas la reutilización
// Crear los siguientes componentes: InputColor, InputNumber, Label, Triangle, Circle y Square. Los componentes de las formas deven devolver un SVG y las propiedades estar validadas con PropTypes idealmente.
function App() {
  const [properties, setProperties] = useState({
    triangleC: "#ef476f",
    triangleS: 50,
    squareC: "#ffd166",
    squareS: 80,
    circleC: "#06d6a0",
    circleS: 70
  });

  // Iba a utilizarlos como dependencias para useEffect
  const [isColorEqual, setIsColorEqual] = useState(false);
  const [isSizeEqual, setIsSizeEqual] = useState(false);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setProperties((prev) => {
      return {
        ...prev,
        [name]: value
      };
    });
  };

  /* hace mucho que estoy dando vueltas 
    y no he podido solucionar el tema de alerts.
    he provado muchas cosas */
    
    // Tarda un paso más porque el input number devuelve text y has seteado los valores inicialmente como number
  useEffect(() => {
    if (
      properties.triangleS === properties.circleS &&
      properties.triangleS === properties.squareS
    ) {
      alert("colors");
    }
    if (
      properties.triangleC === properties.circleC &&
      properties.triangleC === properties.squareC
    ) {
      alert("numbers");
    }
  });

// Demasiada complejidad, reducir en componentes más pequeños como indico arriba
  const data = [
    {
      id: "Triangle",
      styles: {
        width: 0,
        height: 0,
        borderBottom: `solid ${properties.triangleS}px ${properties.triangleC}`,
        borderLeft: `${properties.triangleS / 2}px solid transparent`,
        borderRight: `${properties.triangleS / 2}px solid transparent`
      },
      color: properties.triangleC,
      size: properties.triangleS,
      nameC: "triangleC",
      nameS: "triangleS"
    },
    {
      id: "square",
      styles: {
        width: `${properties.squareS}px`,
        height: `${properties.squareS}px`,
        background: properties.squareC
      },
      color: properties.squareC,
      size: properties.squareS,
      nameC: "squareC",
      nameS: "squareS"
    },
    {
      id: "circle",
      styles: {
        width: `${properties.circleS}px`,
        height: `${properties.circleS}px`,
        background: properties.circleC,
        borderRadius: "50%"
      },
      color: properties.circleC,
      size: properties.circleS,
      nameC: "circleC",
      nameS: "circleS"
    }
  ];

  return (
    <div style={{ position: "relative", width: "100vw" }}>
      {
        <div style={wrapper}>
          {data.map((item) => (
            <FigureTemplate
              key={item.id}
              styles={item.styles}
              valueC={item.color}
              valueS={item.size}
              nameS={item.nameS}
              nameC={item.nameC}
              handleOnChange={handleOnChange}
            />
          ))}
        </div>
      }
    </div>
  );
}

export default App;