import styled from "styled-components";

export const SVG = styled.svg`
  width: 0;
  height: 0;
  border-left: ${(props) => `${props.size / 2}px solid transparent`};
  border-right: ${(props) => `${props.size / 2}px solid transparent`};
  border-bottom: ${(props) => `solid ${props.size}px ${props.color}`};
`;