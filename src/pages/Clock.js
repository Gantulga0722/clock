function Timer() {
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  const handleChange = (event) => {
    setTime(event.target.value);
  };

  const startTimer = () => {
    setTimerOn(true);
    setTimeout(() => {
      setTimerOn(false);
      alert("Time is up!");
    }, time * 1000);
  };

  return (
    <div>
      <label htmlFor="time">Enter time in seconds:</label>
      <input
        type="number"
        id="time"
        name="time"
        value={time}
        onChange={handleChange}
      />
      <button onClick={startTimer}>Start</button>
      {timerOn && <p>Timer is running...</p>}
    </div>
  );
}
