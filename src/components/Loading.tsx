import { useEffect, useState } from "react";
import "./styles/Loading.css";
import { useLoading } from "../context/LoadingProvider";

const greetings = [
  "नमस्ते",
  "Hello",
  "Bonjour",
  "Hola",
  "こんにちは",
  "你好",
  "Ciao",
  "مرحبا",
  "Olá",
  "Hallo",
  "안녕하세요",
  "Привет",
];

const Loading = ({ percent }: { percent: number }) => {
  const { setIsLoading } = useLoading();
  const [isLoaded, setIsLoaded] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [greetingIndex, setGreetingIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setGreetingIndex((prev) => (prev + 1) % greetings.length);
        setFade(true);
      }, 200);
    }, 700);
    return () => clearInterval(interval);
  }, []);

  // Brief hold so the user sees 100%, then begin the exit.
  useEffect(() => {
    if (percent < 100) return;
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, [percent]);

  useEffect(() => {
    if (!isLoaded) return;
    setClicked(true);
    import("./utils/initialFX").then((module) => {
      // Keep the screen mounted long enough for the 0.8s exit fade.
      setTimeout(() => {
        if (module.initialFX) {
          module.initialFX();
        }
        setIsLoading(false);
      }, 900);
    });
  }, [isLoaded]);

  return (
    <>
      <div className="loading-header">
        
        <div className={`loaderGame ${clicked && "loader-out"}`}>
          <div className="loaderGame-container">
            <div className="loaderGame-in">
              {[...Array(27)].map((_, index) => (
                <div className="loaderGame-line" key={index}></div>
              ))}
            </div>
            <div className="loaderGame-ball"></div>
          </div>
        </div>
      </div>
      <div className={`loading-screen ${clicked ? "loading-exit" : ""}`}>
        <div className="loading-greeting">
          <span
            className={`greeting-text ${fade ? "greeting-visible" : "greeting-hidden"}`}
          >
            {greetings[greetingIndex]}
          </span>
        </div>
        <div className="loading-bottom">
          <div className="loading-progress">
            <div
              className="loading-progress-bar"
              style={{ width: `${percent}%` }}
            ></div>
          </div>
          <div className="loading-percent">{percent}%</div>
        </div>
      </div>
    </>
  );
};

export default Loading;

export const setProgress = (setLoading: (value: number) => void) => {
  let percent: number = 0;

  let interval = setInterval(() => {
    if (percent <= 50) {
      let rand = Math.round(Math.random() * 5);
      percent = percent + rand;
      setLoading(percent);
    } else {
      clearInterval(interval);
      // Keep visibly climbing toward ~90% so a slow model fetch on prod
      // never looks frozen. `loaded()` takes over and ramps to 100 once
      // the real model finishes loading.
      interval = setInterval(() => {
        percent = Math.min(90, percent + Math.round(Math.random() * 2) + 1);
        setLoading(percent);
        if (percent >= 90) {
          clearInterval(interval);
        }
      }, 300);
    }
  }, 100);

  function clear() {
    clearInterval(interval);
    setLoading(100);
  }

  function loaded() {
    return new Promise<number>((resolve) => {
      clearInterval(interval);
      interval = setInterval(() => {
        if (percent < 100) {
          percent++;
          setLoading(percent);
        } else {
          resolve(percent);
          clearInterval(interval);
        }
      }, 2);
    });
  }
  return { loaded, percent, clear };
};
