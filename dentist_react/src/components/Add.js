import React from "react";

const Add = props => {
  return (
    <form className="add_form" autoComplete="off" onSubmit={props.handleSubmit}>
      <label>
        <input
          type="radio"
          name="toAdd"
          value="isPatient"
          checked={props.isPatient}
          onChange={props.handleChange}
          onClick={props.handleClickToAdd}
        ></input>
        patient
      </label>
      <label>
        <input
          type="radio"
          name="toAdd"
          value="isDentist"
          checked={props.isDentist}
          onChange={props.handleChange}
          onClick={props.handleClickToAdd}
        ></input>
        tandarts
      </label>
      <label>
        <input
          type="radio"
          name="toAdd"
          value="isAssistent"
          checked={props.isAssistent}
          onChange={props.handleChange}
          onClick={props.handleClickToAdd}
        ></input>
        assistent
      </label>
      <input
        className="patient_input"
        type="text"
        name="name"
        required
        onChange={props.handleChange}
        value={props.name}
        placeholder="voornaam"
      />
      <input
        className="patient_input"
        type="text"
        name="surname"
        required
        onChange={props.handleChange}
        value={props.surname}
        placeholder="achternaam"
      />
      <input
        className="patient_input"
        type="tel"
        name="tel"
        required
        onChange={props.handleChange}
        value={props.tel}
        placeholder="tel.nr"
      />

      <input
        className="patient_input"
        type="email"
        name="email"
        required
        onChange={props.handleChange}
        value={props.email}
        placeholder="email"
      />
      <input
        className="patient_input"
        type="tel"
        name="year"
        onChange={props.handleChange}
        value={props.year}
        placeholder="geb. jaar"
      />
      <section className="skills" style={{ display: "none" }}>
        Skills:
        <label>
          <input
            type="checkbox"
            name="canFill"
            checked={props.canFill}
            onChange={props.handleChange}
          />
          F: gaatjes vullen
        </label>
        <label>
          <input
            type="checkbox"
            name="canCrown"
            checked={props.canCrown}
            onChange={props.handleChange}
          />
          C: kroon zetten
        </label>
        <label>
          <input
            type="checkbox"
            name="canPull"
            checked={props.canPull}
            onChange={props.handleChange}
          />
          P: tanden trekken
        </label>
        <label>
          <input
            type="checkbox"
            name="canJaw"
            checked={props.cnaJaw}
            onChange={props.handleChange}
          />
          J: kaakchirurgie
        </label>
      </section>
      <button className="add-button" type="submit">
        toevoegen
      </button>
    </form>
  );
};

export default Add;
