import styled from "styled-components";

const StyledButton = styled.button<{ $primary?: boolean }>`
  background: ${(props) => (props.$primary ? "hsl(100, 100%, 60%)" : "hsl(200, 100%, 60%)")};
  color: ${(props) => (props.$primary ? "white" : "blue")}  
  font-size: 1em;
  border: 2px solid hsl(100, 100%, 60%);
  border-radius: 5px;
`;

export default StyledButton;
