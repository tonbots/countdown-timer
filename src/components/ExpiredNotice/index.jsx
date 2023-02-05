import React from "react";
import "../../App.css";

const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <span>Expired!</span>
      <p>PLease select a future date and time</p>
    </div>
  );
};

export default ExpiredNotice;
