import styled from "styled-components";

export const Flexbox = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.direction ? props.direction : "column")};
  justify-content: center;
  align-items: center;
  gap: ${(props) => (props.gap ? props.gap : "2rem")};
`