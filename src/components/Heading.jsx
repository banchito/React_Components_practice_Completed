import React from "react";

function Heading() {
  const time = new Date().getHours();
  var customStyle = { color: "" };
  var timeOfDay;

  if (time < 12) {
    customStyle.color = "red";
    timeOfDay = "Good morning";
  } else if (time < 18) {
    customStyle.color = "green";
    timeOfDay = "Good Afternoon";
  } else {
    customStyle.color = "blue";
    timeOfDay = "Good Evening";
  }

  return (
    <div>
      <h1 className="heading" style={customStyle}>
        {timeOfDay}
      </h1>
    </div>
  );
}

export default Heading;
