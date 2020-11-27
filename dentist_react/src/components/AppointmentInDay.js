import React from "react";

const AppointmentInDay = props => {
  const format_time = time => (time < 10 ? `0${time}:00u` : `${time}:00u`);

  let dentistStyle;
  props.sickDentist
    ? (dentistStyle = {
        backgroundColor: "red",
        color: "white",
        fontWeight: "bold",
      })
    : (dentistStyle = { backgroundColor: "lightyellow", color: "black" });

  let patientStyle;
  props.sickPatient
    ? (patientStyle = {
        backgroundColor: "red",
        color: "white",
        fontWeight: "bold",
      })
    : (patientStyle = { backgroundColor: "deepskyblue", color: "black" });

  let assistentStyle;
  props.sickAssistent
    ? (assistentStyle = {
        backgroundColor: "orange",
        color: "white",
        fontWeight: "bold",
      })
    : (assistentStyle = { backgroundColor: "lightyellow", color: "black" });

  return (
    <li className="appointment">
      <div className="time">{format_time(props.time)}</div>
      <div className="patient" style={patientStyle}>
        Patiënt: {props.patient}
      </div>
      <div className="dentist" style={dentistStyle}>
        Tandarts: {props.dentist}
      </div>
      <div className="assistant" style={assistentStyle}>
        Assistent: {props.assistent}
      </div>
    </li>
  );
};

export default AppointmentInDay;
