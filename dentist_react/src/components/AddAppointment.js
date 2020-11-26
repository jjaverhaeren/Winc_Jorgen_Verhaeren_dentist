import React from "react";

const AddAppointment = props => {
  let dentists = props.dentists.map(dentist => (
    <option key={dentist.id} value={dentist.name}>
      {`${dentist.name} ${dentist.surname}`}
    </option>
  ));

  let assistents = props.assistents.map(assistent => (
    <option key={assistent.id} value={assistent.name}>
      {`${assistent.name} ${assistent.surname}`}
    </option>
  ));

  let days = props.days.map(day => (
    <option key={day} value={day}>
      {day}
    </option>
  ));

  let time = props.time.map(hour => (
    <option key={hour} value={hour}>
      {hour}
    </option>
  ));

  return (
    <form
      className="add_form"
      autoComplete="off"
      onSubmit={props.handleSubmitAppointment}
    >
      <input
        className="appoint_input"
        id="appointment_id_input"
        type="text"
        name="patientId"
        value={props.appointId}
        onChange={event => props.updateAppointId(event)}
        placeholder="patient ID"
        ref={props.idForAppointment}
      />
      <select onChange={props.handleChange} name="chooseDentist">
        <option>kies een tandarts</option>
        {dentists}
      </select>
      <select onChange={props.handleChange} name="chooseAssistent">
        <option>kies een assistent</option>
        {assistents}
      </select>
      <select
        value={props.whichDate}
        onChange={props.handleChange}
        name="whichDate"
      >
        <option value="chooseDate">kies datum</option>
        {days}
      </select>
      <select
        value={props.whichHour}
        onChange={props.handleChange}
        name="whichHour"
      >
        <option value="chooseTime">kies tijd</option>
        {time}
      </select>
      <button className="add-button" type="submit">
        toevoegen
      </button>
    </form>
  );
};

export default AddAppointment;
