import { useCallback, useEffect, useState } from "react";
import StyledButton from "@/components/StyledButton.tsx";
import StyledStack from "@/components/StyledStack.tsx";
import StyledSpan from "@/components/StyledSpan.tsx";
import { matchCase } from "@/helper.ts";
import StyledMovable from "@/components/StyledMovable.tsx";
import type { FlowStepProps } from "@/types/pageFlow.ts";
import StyledContainer from "@/components/StyledContainer.tsx";
import { MorphingText } from "@/components/magicui/morphing-text.tsx";
import { CoolMode } from "@/components/magicui/cool-mode.tsx";
import { ComicText } from "@/components/magicui/comic-text.tsx";
import { Pointer } from "@/components/magicui/pointer.tsx";
import { motion } from "motion/react";
import { AuroraText } from "@/components/magicui/aurora-text.tsx";
import confetti from "canvas-confetti";

const NEEDED_NO_COUNT = 5;
const TIME_TO_WAIT = 8500;

const questionArr = ["Will", "You", "Be", "My", "Valentine?"];

const Question = ({ nextPage }: FlowStepProps) => {
  const [noCount, setNoCount] = useState(0);
  const [pos, setPos] = useState<[number | null, number | null]>([null, null]);
  const [fontMultiplier, setFontMultiplier] = useState<number>(1);
  const [visible, setVisible] = useState(true);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      console.log("setting");
      setShow(true);
    }, TIME_TO_WAIT);
  }, []);

  const isTouchDevice =
    "ontouchstart" in window || navigator.maxTouchPoints > 0;
  const remainingCount: number = NEEDED_NO_COUNT - noCount;
  const canClickNo = remainingCount > 1;
  const isMoving = pos[0] !== null;

  const reset = () => {
    setNoCount(0);
    setVisible(true);
    setFontMultiplier(1);
    setPos([null, null]);
  };

  const handleConfirm = () => {
    reset();
    console.log("Yay!!!");
    startFireWork();
    setTimeout(nextPage, 5);
  };

  const startFireWork = () => {
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) =>
      Math.random() * (max - min) + min;

    const interval = window.setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 100 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);
  };

  const blink = () => {
    setVisible(false);
    setTimeout(() => setVisible(true), 500);
  };

  const randomizeLocation = useCallback(() => {
    if (canClickNo) return;
    if (isTouchDevice) blink();
    const maxViewPortLimit = 90;
    const x = Math.floor(Math.random() * maxViewPortLimit);
    const y = Math.floor(Math.random() * maxViewPortLimit);
    setPos([x, y]);
    setFontMultiplier(fontMultiplier - 0.03);
  }, [remainingCount, fontMultiplier]);

  const maybeSetNoCount = useCallback(() => {
    if (!canClickNo) randomizeLocation();
    else setNoCount(noCount + 1);
  }, [remainingCount]);

  console.log({ fontMultiplier, pos, isTouchDevice, visible, isMoving });

  return (
    <StyledContainer>
      {!show ? (
        <MorphingText className="text-pink-600" texts={questionArr} />
      ) : (
        <>
          <StyledStack className={"fade-in"} direction={"vertical"}>
            <ComicText>Will you be my</ComicText>
            <CoolMode options={{ particle: "/my_valentine/public/heart.svg" }}>
              <AuroraText
                className="text-4xl sm:text-9xl font-bold fade-in-slow"
                colors={["red", "pink", "cyan", "purple"]}
              >
                Valentine?
              </AuroraText>
            </CoolMode>
          </StyledStack>
          <StyledStack
            className={"my-12"}
            direction={"horizontal"}
            gap={"14rem"}
          >
            <div className={"relative"}>
              <Pointer>
                <motion.div
                  animate={{
                    scale: [0.8, 1, 0.8],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-pink-600"
                  >
                    <motion.path
                      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                      fill="currentColor"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </svg>
                </motion.div>
              </Pointer>
              <StyledButton
                className={"bg-green-600 z-2"}
                size={"lg"}
                primary
                pulse
                onClick={handleConfirm}
              >
                Yes 🥰
              </StyledButton>
            </div>

            <div
              onMouseDown={isTouchDevice ? undefined : maybeSetNoCount}
              onTouchStart={isTouchDevice ? maybeSetNoCount : undefined}
            >
              <Pointer>
                <div className={"text-3xl"}>💔</div>
              </Pointer>
              <StyledMovable
                fontSizeMultiplier={fontMultiplier}
                x={pos[0]}
                y={pos[1]}
                isTouchDevice={isTouchDevice}
                visible={visible}
                isMoving={isMoving}
                onMouseEnter={randomizeLocation}
              >
                <StyledButton
                  className={"bg-pink-400 z-1"}
                  size="lg"
                  primary={false}
                >
                  No 😢
                </StyledButton>
              </StyledMovable>
            </div>
          </StyledStack>
          {remainingCount < 5 && (
            <p className={"fade-in"}>
              Click No <StyledSpan size={"xl"} text={remainingCount} />{" "}
              {matchCase(remainingCount, "time", "times")} if you want to say No
            </p>
          )}
        </>
      )}
    </StyledContainer>
  );
};

export default Question;
