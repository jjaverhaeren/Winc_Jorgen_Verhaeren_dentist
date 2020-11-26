import React from "react";
import ListItem from "./ListItem";

const List = props => {
  let itemsArray = props.items.map(item => (
    <ListItem
      key={item.id}
      patient={item}
      deletePatient={props.deletePatient}
      handleSick={props.handleSick}
      handleMakeAppointment={props.handleMakeAppointment}
    />
  ));
  return (
    <div className="list">
      <div className="headers_container">
        <section className="header_id">ID</section>
        <section className="header_name">Voornaam</section>
        <section className="header_surname">Achternaam</section>
        <section className="header_tel">Tel</section>
        <section className="header_email">Email</section>
        <section className="header_year">Geb. jaar</section>
        <section className="header_skillF">F</section>
        <section className="header_skillC">C</section>
        <section className="header_skillP">P</section>
        <section className="header_skillJ">J</section>
      </div>

      {itemsArray}
    </div>
  );
};

export default List;
