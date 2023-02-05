import "./App.css";
import CountDownTimer from "./components/CountDownTimer";

function App() {
  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;
  // console.log(dateTimeAfterThreeDays);

  return (
    <div className="App">
      <h1>Countdown Timer</h1>
      <CountDownTimer targetDate={dateTimeAfterThreeDays} />
    </div>
  );
}

export default App;
