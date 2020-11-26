import React from "react";
import trashbin from "../images/trashbin.png";

const ListItem = props => {
  return (
    <li
      key={props.patient.id + 99}
      className="list_item"
      value={props.patient.title}
    >
      <section
        className="list_id"
        key={props.patient.id}
        value={props.patient.id}
      >
        {props.patient.id}{" "}
      </section>
      <section className="list_name" key={props.patient.id + 1}>
        {props.patient.name}{" "}
      </section>
      <section className="list_surname" key={props.patient.id + 2}>
        {props.patient.surname}
      </section>
      <section className="list_tel" key={props.patient.id + 3}>
        {props.patient.tel}
      </section>
      <section className="list_email" key={props.patient.id + 4}>
        {props.patient.email}
      </section>
      <section className="list_year" key={props.patient.id + 5}>
        {props.patient.year}
      </section>
      <input
        type="radio"
        className="list_skill"
        checked={props.patient.canFill}
        readOnly
        key={props.patient.id + 6}
      ></input>
      <input
        type="radio"
        className="list_skill"
        checked={props.patient.canCrown}
        readOnly
        key={props.patient.id + 7}
      ></input>
      <input
        type="radio"
        className="list_skill"
        checked={props.patient.canPull}
        readOnly
        key={props.patient.id + 8}
      ></input>
      <input
        type="radio"
        className="list_skill"
        checked={props.patient.canJaw}
        readOnly
        key={props.patient.id + 9}
      ></input>
      <img
        key={props.patient.id + 10}
        src={trashbin}
        alt="trashbin"
        className="trashbin"
        onClick={props.deletePatient}
      />
      <button
        className="button_sick"
        onClick={event => props.handleSick(event)}
      >
        ziek melden
      </button>
      <button
        className="button_appointment"
        onClick={props.handleMakeAppointment}
      >
        afspraak maken
      </button>
    </li>
  );
};

export default ListItem;
