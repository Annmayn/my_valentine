import "./Valentines.css";
import { useCallback, useState } from "react";
import StyledButton from "../../components/StyledButton.tsx";
import StyledStack from "../../components/StyledStack.tsx";
import StyledSpan from "../../components/StyledSpan.tsx";
import { matchCase } from "../../helper.ts";
import StyledMovable from "../../components/StyledMovable.tsx";

const NEEDED_NO_COUNT = 5;

const Valentines = () => {
  const [noCount, setNoCount] = useState(0);
  const [pos, setPos] = useState<[number | null, number | null]>([null, null]);
  const [fontMultiplier, setFontMultiplier] = useState<number>(1);
  const [visible, setVisible] = useState(true);

  const isTouchDevice =
    "ontouchstart" in window || navigator.maxTouchPoints > 0;
  const remainingCount: number = NEEDED_NO_COUNT - noCount;
  const canClickNo = remainingCount > 1;

  const reset = () => {
    setNoCount(0);
    setVisible(true);
    setFontMultiplier(1);
    setPos([null, null]);
  };

  const handleConfirm = () => {
    reset();
    console.log("Yay!!!");
  };

  const blink = () => {
    setVisible(false);
    setTimeout(() => setVisible(true), 500);
  };

  const randomizeLocation = useCallback(() => {
    if (canClickNo) return;
    if (isTouchDevice) blink();
    const x = Math.floor(Math.random() * 90);
    const y = Math.floor(Math.random() * 90);
    setPos([x, y]);
    setFontMultiplier(fontMultiplier - 0.1);
  }, [remainingCount, fontMultiplier]);

  const maybeSetNoCount = useCallback(() => {
    if (!canClickNo) randomizeLocation();
    else setNoCount(noCount + 1);
  }, [remainingCount]);

  return (
    <main>
      <StyledStack direction={"vertical"}>
        <h1>Will you be my Valentine?</h1>
        <p>
          Click No <StyledSpan size={"xl"} text={remainingCount} />{" "}
          {matchCase(remainingCount, "time", "times")} if you want to say No
        </p>
      </StyledStack>
      <menu>
        <li>
          <StyledButton onClick={handleConfirm}>Yes</StyledButton>
        </li>
        <li>
          <StyledMovable
            fontSizeMultiplier={fontMultiplier}
            x={pos[0]}
            y={pos[1]}
            isTouchDevice={isTouchDevice}
            visible={visible}
          >
            <StyledButton
              onMouseEnter={randomizeLocation}
              onMouseDown={isTouchDevice ? undefined : maybeSetNoCount}
              onTouchStart={isTouchDevice ? maybeSetNoCount : undefined}
            >
              No
            </StyledButton>
          </StyledMovable>
        </li>
      </menu>
    </main>
  );
};

export default Valentines;
