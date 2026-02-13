import type { FlowStepProps } from "@/types/pageFlow.ts";
import { TextAnimate } from "@/components/magicui/text-animate";
import StyledContainer from "../../components/StyledContainer.tsx";
import { NumberTicker } from "@/components/magicui/number-ticker.tsx";
import { useEffect, useState } from "react";
import { SparklesText } from "@/components/magicui/sparkles-text.tsx";
import { humanReadableNumber } from "@/helper.ts";

const date1 = new Date("2022-05-12");
const date2 = new Date();

const diffTime = date2.getTime() - date1.getTime();
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
const diffHours = Math.floor(diffDays * 24);
const heartbeats = diffHours * 60 * 175;

const Stats = ({ nextPage }: FlowStepProps) => {
  const [nextPageDisabled, setNextPageDisabled] = useState(true);
  const gotoNextPage = () => {
    if (!nextPageDisabled) nextPage();
  };
  useEffect(() => {
    setTimeout(() => setNextPageDisabled(false), 5000);
  }, []);

  return (
    <StyledContainer onClick={gotoNextPage}>
      <TextAnimate
        className={"text-2xl"}
        animation="blurInUp"
        by="character"
        duration={3}
        once
      >
        This is how long we&#39;ve been together...
      </TextAnimate>
      <SparklesText>
        <NumberTicker
          className={"text-yellow-300 font-extrabold text-8xl my-2"}
          value={diffDays}
        />
      </SparklesText>
      {!nextPageDisabled && (
        <p className={"my-4 fade-in"}>
          That&#39;s roughly{" "}
          <span className={"text-red-300 font-bold text-lg"}>
            {humanReadableNumber(diffHours)}
          </span>{" "}
          hours. Or around{" "}
          <span className={"text-red-300 font-bold text-lg"}>
            {humanReadableNumber(heartbeats)}
          </span>{" "}
          heartbeats
        </p>
      )}
    </StyledContainer>
  );
};

export default Stats;
