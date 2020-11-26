import React from "react";
import "./Day.css";
import AppointmentInDay from "./AppointmentInDay";

function Day(props) {
  props.appointments.sort((a, b) =>
    a.time > b.time ? 1 : b.time > a.time ? -1 : 0
  );
  const appointmentsJSX = props.appointments.map((props, index) => (
    <AppointmentInDay
      time={props.time}
      patient={props.patient}
      dentist={props.dentist}
      assistant={props.assistant}
      sickDentist={props.sickDentist}
      key={index}
    />
  ));
  return <ul className="dayview">{appointmentsJSX}</ul>;
}

export default Day;
