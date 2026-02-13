import styled from "styled-components";

interface StyledButtonProps {
  primary?: boolean;
  size?: "sm" | "md" | "lg";
}

const sizeMap = {
  sm: 1,
  md: 1.3,
  lg: 1.9,
};

const StyledButton = styled.button<StyledButtonProps>`
  position: relative;
  font-size: ${(props) => `${sizeMap[props.size ?? "md"]}em`};
  border-radius: 16px;
  cursor: none;
  -webkit-animation: pulse 1.5s infinite;

  //.pulse {
  //  transform: scale(1.5);
  //  animation: fadeIn 0.8s ease-out forwards;
  //}
  //
  //@keyframes fadeIn {
  //  to {
  //    transform: scale(1);
  //  }
  //}
`;

export default StyledButton;
