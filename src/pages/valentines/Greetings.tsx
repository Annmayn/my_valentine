import type { FlowStepProps } from "../../types/pageFlow.ts";
import StyledContainer from "../../components/StyledContainer.tsx";
const Greetings = ({ nextPage }: FlowStepProps) => {
  return (
    <StyledContainer onClick={nextPage}>
      <p>Happy Valentines Day</p>
      <p>To the most special person</p>
      <p>Momu</p>
    </StyledContainer>
  );
};

export default Greetings;
