import type { FlowStepProps } from "@/types/pageFlow.ts";
import StyledContainer from "../../components/StyledContainer.tsx";
import { ComicText } from "@/components/magicui/comic-text.tsx";
import { TypingAnimation } from "@/components/magicui/typing-animation.tsx";

const Greetings = ({ nextPage }: FlowStepProps) => {
  const isMobile = window.innerWidth < 500;
  return (
    <StyledContainer onClick={nextPage}>
      <ComicText fontSize={isMobile ? 3 : 4}>Happy Valentines Day</ComicText>
      <TypingAnimation>To the most special person...</TypingAnimation>
      <ComicText fontSize={5}>Momu</ComicText>
    </StyledContainer>
  );
};

export default Greetings;
