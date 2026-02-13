import styled from "styled-components";

interface StyledButtonProps {
  primary?: boolean;
  size?: "sm" | "md" | "lg";
  pulse?: boolean;
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
  ${(props) =>
    props.pulse && `animation: pulse 0.5s infinite alternate ease-in-out`};

  @keyframes pulse {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(1.05);
    }
  }
`;

export default StyledButton;
