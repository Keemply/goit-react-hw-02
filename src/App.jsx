import { useState, useEffect } from "react";
import "./App.css";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";
function App() {
  const localStorageKey = "save-stats";
  const [stats, setStats] = useState(() => {
    const savedStats = localStorage.getItem(localStorageKey);
    if (savedStats === null) {
      return { good: 0, neutral: 0, bad: 0 };
    }
    return JSON.parse(savedStats);
  });

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(stats));
  }, [stats]);

  const totalFeedback = stats.bad + stats.neutral + stats.good;
  const updateFeedback = (feedbackType) => {
    switch (feedbackType) {
      case "good":
        setStats({
          ...stats,
          good: stats.good + 1,
        });
        break;
      case "neutral":
        setStats({
          ...stats,
          neutral: stats.neutral + 1,
        });

        break;
      case "bad":
        setStats({
          ...stats,
          bad: stats.bad + 1,
        });

        break;
      case "reset":
        setStats({
          good: 0,
          neutral: 0,
          bad: 0,
        });
        break;
      default:
        console.log("Something wrong");
    }
  };
  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} />
      {totalFeedback > 0 ? (
        <Feedback
          values={stats}
          totalFeedback={totalFeedback}
          good={stats.good}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
