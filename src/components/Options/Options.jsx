function Options({ updateFeedback, totalFeedback }) {
  function handleClick(event) {
    updateFeedback(event.target.innerHTML.toLowerCase());
  }
  return (
    <div>
      <button onClick={handleClick}>Good</button>
      <button onClick={handleClick}>Neutral</button>
      <button onClick={handleClick}>Bad</button>
      {totalFeedback > 0 && <button onClick={handleClick}>Reset</button>}
    </div>
  );
}
export default Options;
