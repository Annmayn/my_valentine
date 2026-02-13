import styled from "styled-components";

interface StyledMovableProps {
  fontSizeMultiplier: number;
  x: number | null;
  y: number | null;
  isTouchDevice: boolean;
  visible: boolean;
  isMoving: boolean;
}

const StyledMovable = styled.div<StyledMovableProps>`
  position: ${(p) => `${p.isMoving ? "fixed" : "relative"}`};
  ${(p) => p.isMoving && `left: ${p.x}vw`};
  ${(p) => p.isMoving && `bottom: ${p.x}vh`};
  ${(p) => p.isMoving && `font-size: ${p.fontSizeMultiplier}rem !important`};
  ${(p) =>
    p.isMoving && `opacity: ${p.isTouchDevice && !p.visible ? "0" : "1"}`};
  transition:
    left 0.5s ease,
    bottom 0.5s ease;
`;

export default StyledMovable;
