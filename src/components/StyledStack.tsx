import styled from "styled-components";

interface StackProps {
  direction: "horizontal" | "vertical";
  gap?: string;
}

const StyledStack = styled.div<StackProps>`
  display: flex;
  flex-direction: ${(props) =>
    props.direction === "vertical" ? "column" : "row"};
  justify-content: center;
  align-items: center;
  gap: ${(props) => props.gap || "0px"};
`;

export default StyledStack;
