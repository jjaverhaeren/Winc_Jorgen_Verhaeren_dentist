import React from "react";

function SearchPatient(props) {
  return (
    <div className="search_patient_container">
      <h3>Zoek patient:</h3>
      <form
        className="search_patient_form"
        autoComplete="off"
        onSubmit={props.handleSearchPatient}
      >
        <input
          type="tel"
          name="searchId"
          placeholder="zoek op ID"
          value={props.searchId}
          onChange={props.handleChange}
        ></input>
        <input
          className="search-surname"
          type="text"
          name="searchName"
          onChange={props.handleChange}
          placeholder="zoek op achternaam"
        ></input>
        <button type="submit">Zoek patient</button>
      </form>
      <button onClick={props.clearSearchFields}>
        Verwijder Zoekresultaten
      </button>
      <button onClick={props.showAllPatients}>Show Patients List</button>
    </div>
  );
}

export default SearchPatient;
