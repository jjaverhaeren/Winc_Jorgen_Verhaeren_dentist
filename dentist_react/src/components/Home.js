import React from "react";
import Add from "./Add";
import List from "./List";
import SearchPatient from "./SearchPatient";
import AddAppointment from "./AddAppointment";
import "./Home.css";

const Home = props => {
  return (
    <div>
      <section className="add">
        <h3>Toevoegen:</h3>
        <Add
          name={props.name}
          surname={props.surname}
          tel={props.tel}
          email={props.email}
          id={props.id}
          year={props.year}
          isPatient={props.isPatient}
          isDentist={props.isDentist}
          isAssistent={props.assistent}
          handleChange={props.handleChange}
          handleSubmit={props.handleSubmit}
          handleClickToAdd={props.handleClickToAdd}
          canFill={props.canFill}
          canCrown={props.canCrown}
          canPull={props.canPull}
          canJaw={props.canJaw}
        />
      </section>

      <section className="dentists">
        <h3>Tandartsen</h3>
        <List
          items={props.dentists}
          deletePatient={props.deletePatient}
          handleSick={props.handleSick}
        />
      </section>

      <section className="assistents">
        <h3>Assistenten</h3>
        <List
          items={props.assistents}
          deletePatient={props.deletePatient}
          handleSick={props.handleSick}
        />
      </section>

      <section className="foundPatients">
        <SearchPatient
          handleSearchPatient={props.handleSearchPatient}
          searchId={props.searchID}
          searchSurname={props.searchSurname}
          handleChange={props.handleChange}
          clearSearchFields={props.clearSearchFields}
          showAllPatients={props.showAllPatients}
          showing={props.showing}
        />

        <h3>Zoekresultaten</h3>
        <List
          items={props.foundPatients}
          deletePatient={props.deletePatient}
          handleSick={props.handleSick}
          handleMakeAppointment={props.handleMakeAppointment}
        />
      </section>

      <section className="addAppointment">
        <h3>Afspraak</h3>
        <AddAppointment
          handleChange={props.handleChange}
          appointId={props.appointId}
          idForAppointment={props.idForAppointment}
          dentists={props.dentists}
          assistents={props.assistents}
          days={props.days}
          time={props.time}
          handleSubmitAppointment={props.handleSubmitAppointment}
          updateAppointId={props.updateAppointId}
          chooseDate={props.chooseDate}
          chooseHour={props.chooseHour}
        />
      </section>
      {props.showing ? (
        <section className="patients">
          <h3>Patienten</h3>
          <List
            items={props.patients}
            deletePatient={props.deletePatient}
            handleSick={props.handleSick}
            handleMakeAppointment={props.handleMakeAppointment}
          />
        </section>
      ) : undefined}
    </div>
  );
};

export default Home;
