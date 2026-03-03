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

  if (percent >= 100) {
    setTimeout(() => {
      setTimeout(() => {
        setIsLoaded(true);
      }, 1000);
    }, 600);
  }

  useEffect(() => {
    import("./utils/initialFX").then((module) => {
      if (isLoaded) {
        setClicked(true);
        setTimeout(() => {
          if (module.initialFX) {
            module.initialFX();
          }
          setIsLoading(false);
        }, 900);
      }
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
      interval = setInterval(() => {
        percent = percent + Math.round(Math.random());
        setLoading(percent);
        if (percent > 91) {
          clearInterval(interval);
        }
      }, 2000);
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
