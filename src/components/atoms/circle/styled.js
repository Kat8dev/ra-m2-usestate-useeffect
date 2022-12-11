import styled from "styled-components";

export const SVG = styled.svg`
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};
  background: ${(props) => props.color};
  border-radius: 50%;
`;