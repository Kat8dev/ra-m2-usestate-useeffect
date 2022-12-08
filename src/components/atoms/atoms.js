import styled from "styled-components";

export const InputColor = styled.input``;

export const InputNumber = styled.input`
  max-width: 3rem;
`;

export const Label = styled.label``;

export const SvgTriangle = styled.svg`
  width: 0;
  height: 0;
  border-left: ${(props) => `${props.size / 2}px solid transparent`};
  border-right: ${(props) => `${props.size / 2}px solid transparent`};
  border-bottom: ${(props) => `solid ${props.size}px ${props.color}`};
`;

export const SvgSquare = styled.svg`
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};
  background: ${(props) => props.color};
`;

export const SvgCircle = styled.svg`
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};
  background: ${(props) => props.color};
  border-radius: 50%;
`;

export const Flexbox = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.direction ? props.direction : "column")};
  justify-content: center;
  align-items: center;
  gap: ${(props) => (props.gap ? props.gap : "2rem")};
`;
