function Feedback({ values, totalFeedback, good }) {
  return (
    <div>
      <ul>
        <li>Good:{values.good}</li>
        <li>Neutral:{values.neutral}</li>
        <li>Bad:{values.bad}</li>
        <li>Total:{totalFeedback}</li>
        <li>Positive:{Math.round((good / totalFeedback) * 100)}%</li>
      </ul>
    </div>
  );
}
export default Feedback;
