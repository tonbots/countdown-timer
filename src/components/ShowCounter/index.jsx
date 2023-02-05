import React from "react";
import "../../App.css";
import DateTimeDisplay from "../DateTimeDisplay";

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="show-counter">
      <a
        href="https://github.com/tonbots"
        target="_blank"
        rel="noopener noreferrer"
        className="countdown-link"
      >
        <DateTimeDisplay value={days} type={"Days"} isDanger={days <= 3} />
        <p>:</p>
        <DateTimeDisplay value={hours} type={"Hours"} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={minutes} type={"Minutes"} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={seconds} type={"Second"} isDanger={false} />
      </a>
    </div>
  );
};

export default ShowCounter;
