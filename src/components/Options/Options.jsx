function Options({ updateFeedback }) {
  return (
    <div>
      <button onClick={updateFeedback}>Good</button>
      <button onClick={updateFeedback}>Neutral</button>
      <button onClick={updateFeedback}>Bad</button>
    </div>
  );
}
export default Options;
