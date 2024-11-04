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
    switch (feedbackType) {
      case "good":
        console.log("good");

        break;
      case "neutral":
        console.log("neutral");

        break;
      case "bad":
        console.log("bad");

        break;
      default:
        console.log("Something wrong");
    }
  };
  return (
    <>
      <Description />
      <Options values={stats} />
      <Feedback values={stats} />
    </>
  );
}

export default App;
