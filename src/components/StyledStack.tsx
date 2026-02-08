import styled from "styled-components";

interface StackProps {
  direction: "horizontal" | "vertical";
}

const StyledStack = styled.div<StackProps>`
  display: flex;
  flex-direction: ${(props) =>
    props.direction === "vertical" ? "column" : "row"};
  justify-content: center;
  align-items: center;
`;

export default StyledStack;
