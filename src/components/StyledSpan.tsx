import styled from "styled-components";

interface StyledSpanProps {
  text: string | number;
  size?: "md" | "xl";
}

interface SpanProps {
  size?: "md" | "xl";
}

const SpanWrapper = styled.span<SpanProps>`
  font-weight: bold;
  vertical-align: sub;
  font-size: ${({ size = "md" }) => (size === "md" ? "1rem" : "2rem")};
`;

const StyledSpan = ({ text, size }: StyledSpanProps) => {
  return <SpanWrapper size={size}>{text}</SpanWrapper>;
};

export default StyledSpan;
