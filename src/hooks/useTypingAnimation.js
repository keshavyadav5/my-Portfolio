import { useEffect, useState } from "react";

export function useTypingAnimation(texts, speed = 100, pause = 2000) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [forward, setForward] = useState(true);
  const [blink, setBlink] = useState(true);
  const [typingText, setTypingText] = useState("");

  useEffect(() => {
    if (texts.length === 0) return;

    const timeout = setTimeout(() => {
      setTypingText(texts[index].substring(0, subIndex));

      if (forward) {
        if (subIndex < texts[index].length) {
          setSubIndex((prev) => prev + 1);
        } else {
          setForward(false);
          setTimeout(() => {}, pause);
        }
      } else {
        if (subIndex > 0) {
          setSubIndex((prev) => prev - 1);
        } else {
          setForward(true);
          setIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, forward ? speed : speed / 2);

    return () => clearTimeout(timeout);
  }, [subIndex, index, forward, texts, speed, pause]);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);

  return typingText + (blink ? "|" : "");
}
