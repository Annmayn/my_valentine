import Question from "./Question.tsx";
import { useCallback, useState } from "react";
import StyledMain from "../../components/StyledMain.tsx";
import { Particles } from "@/components/magicui/particles.tsx";
import Greetings from "@/pages/valentines/Greetings.tsx";
import Stats from "@/pages/valentines/Stats.tsx";

const pageOrder = [Greetings, Stats, Question];

const Valentines = () => {
  const [page, setPage] = useState(0);
  const CurrentPage = pageOrder[page];

  const nextPage = useCallback(() => {
    setPage(page === pageOrder.length - 1 ? 0 : page + 1);
  }, [page]);

  return (
    <StyledMain>
      <Particles
        className={"absolute inset-0 z-0"}
        quantity={100}
        ease={80}
        refresh
        size={1}
      />
      <CurrentPage nextPage={nextPage} />
    </StyledMain>
  );
};

export default Valentines;
