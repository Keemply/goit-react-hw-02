import { useState, useEffect } from "react";
import "./App.css";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
function App() {
  const [stats, setStats] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const updateFeedback = (feedbackType) => {
    console.log(feedbackType.target.outerText);

    switch (feedbackType.target.outerText) {
      case "Good":
        setStats({
          ...stats,
          good: stats.good + 1,
        });
        break;
      case "Neutral":
        setStats({
          ...stats,
          neutral: stats.neutral + 1,
        });

        break;
      case "Bad":
        setStats({
          ...stats,
          bad: stats.bad + 1,
        });

        break;
      default:
        console.log("Something wrong");
    }
  };
  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} />
      <Feedback values={stats} />
    </>
  );
}

export default App;
