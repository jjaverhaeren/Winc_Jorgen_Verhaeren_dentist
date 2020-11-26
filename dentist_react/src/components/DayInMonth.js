import React from "react";
import AppointmentInMonth from "./AppointmentInMonth";

export default ({ appointments }) => {
  appointments.sort((a, b) => (a.time > b.time ? 1 : b.time > a.time ? -1 : 0));
  const appointmentsJSX = appointments.map(
    ({ time, patient, sickDentist }, index) => (
      <AppointmentInMonth
        time={time}
        patient={patient}
        sickDentist={sickDentist}
        key={index}
      />
    )
  );
  return <div className="day">{appointmentsJSX}</div>;
};
