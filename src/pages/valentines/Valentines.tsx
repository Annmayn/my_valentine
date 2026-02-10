import Question from "./Question.tsx";
import Greetings from "./Greetings.tsx";
import { useCallback, useState } from "react";
import Stats from "./Stats.tsx";
import StyledMain from "../../components/StyledMain.tsx";

const pageOrder = [Greetings, Stats, Question];

const Valentines = () => {
  const [page, setPage] = useState(1);
  const CurrentPage = pageOrder[page];

  const nextPage = useCallback(() => {
    setPage(page === pageOrder.length - 1 ? 0 : page + 1);
  }, [page]);

  return (
    <StyledMain>
      <CurrentPage nextPage={nextPage} />
    </StyledMain>
  );
};

export default Valentines;
