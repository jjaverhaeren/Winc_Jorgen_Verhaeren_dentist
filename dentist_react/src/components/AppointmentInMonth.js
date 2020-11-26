import React from "react";

const format_time = time => (time < 10 ? `0${time}:00u` : `${time}:00u`);

export default ({ time, patient, sickDentist }) => {
  let styleTime;
  sickDentist === true
    ? (styleTime = { backgroundColor: "red", color: "white" })
    : (styleTime = { backgroundColor: "lightyellow", color: "blue" });

  return (
    <div className="appointment">
      <span className="time" style={styleTime}>
        {format_time(time)}
      </span>
      <span className="patient">{patient}</span>
    </div>
  );
};
