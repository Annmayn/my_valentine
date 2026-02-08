import styled from "styled-components";

interface StyledMovableProps {
  fontSizeMultiplier: number;
  x: number | null;
  y: number | null;
  isTouchDevice: boolean;
  visible: boolean;
}

const StyledMovable = styled.div<StyledMovableProps>`
  position: ${(p) => `${p.x === null ? "relative" : "fixed"}`};
  ${(p) =>
    p.x === null
      ? ""
      : `
    left: ${p.x}vw;
    bottom: ${p.y}vh;
    font-size: calc(1rem * ${p.fontSizeMultiplier});
    opacity: ${p.isTouchDevice && !p.visible ? "0" : "1"};
  `};
  transition:
    left 0.5s ease,
    bottom 0.5s ease;
`;

export default StyledMovable;
