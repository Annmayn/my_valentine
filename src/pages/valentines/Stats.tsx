import type { FlowStepProps } from "../../types/pageFlow.ts";
import StyledContainer from "../../components/StyledContainer.tsx";

const Stats = ({ nextPage }: FlowStepProps) => {
  const hours = 1000;
  const days = 155;
  const heartbeats = 100000;
  const message = `That's roughly ${hours} hours. Or around ${heartbeats} heartbeats`;

  return (
    <StyledContainer onClick={nextPage}>
      <p>{days}</p>
      <p>{message}</p>
    </StyledContainer>
  );
};

export default Stats;
