import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import Calendar from "./components/Calendar";
import Day from "./components/Day";

import generateRandomAppointments from "./utils/utils";
import patients from "./data/patients";
import dentists from "./data/dentists";
import assistents from "./data/assistents";
import days from "./data/days";
import time from "./data/time";

let appointments = generateRandomAppointments(150);

class Container extends Component {
  constructor() {
    super();
    this.idForAppointment = React.createRef();
    this.state = {
      toAdd: "",
      appointments: appointments,
      patients: patients,
      foundPatients: [],
      showing: false,
      name: "",
      surname: "",
      tel: "",
      email: "",
      id: "",
      year: "",
      searchId: "",
      searchSurname: "",
      appointId: "",
      dentists: dentists,
      canFill: "",
      canCrown: "",
      canPull: "",
      canJaw: "",
      isSick: false,
      assistents: assistents,
      newAppointments: [],
      days: days,
      time: time,
      chooseDate: "",
      chooseHour: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deletePatient = this.deletePatient.bind(this);
    this.handleSearchPatient = this.handleSearchPatient.bind(this);
    this.handleClickToAdd = this.handleClickToAdd.bind(this);
    this.handleSick = this.handleSick.bind(this);
    this.clearFoundPatientsList = this.clearFoundPatientsList.bind(this);
    this.handleMakeAppointment = this.handleMakeAppointment.bind(this);
    this.handleSubmitAppointment = this.handleSubmitAppointment.bind(this);
    this.showAllPatients = this.showAllPatients.bind(this);
    this.updateAppointId = this.updateAppointId.bind(this);
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === "radio"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  }

  clearFoundPatientsList() {
    let newFoundPatients = [];
    this.setState(prevState => {
      const newState = { ...prevState, foundPatients: newFoundPatients };
      return newState;
    });
  }

  clearInputFields() {
    let resetId = 0,
      resetName = "",
      resetSurname = "",
      resetTel = "",
      resetEmail = "",
      resetYear = "",
      resetSearchId = "",
      resetSearchSurname = "";
    this.setState(prevState => {
      const newState = {
        ...prevState,
        id: resetId,
        name: resetName,
        surname: resetSurname,
        tel: resetTel,
        email: resetEmail,
        year: resetYear,
        searchId: resetSearchId,
        searchSurname: resetSearchSurname,
      };
      return newState;
    });
  }

  handleClickToAdd(event) {
    if (event.target.parentElement.firstChild.value === "isPatient") {
      event.target.parentElement.parentElement.childNodes[7].style =
        "display:inline";
      event.target.parentElement.parentElement.childNodes[8].style =
        "display: none";
    } else if (event.target.parentElement.firstChild.value === "isDentist") {
      event.target.parentElement.parentElement.childNodes[7].style =
        "display:none";
      event.target.parentElement.parentElement.childNodes[8].style =
        "display: block";
    } else if (event.target.parentElement.firstChild.value === "isAssistent") {
      event.target.parentElement.parentElement.childNodes[7].style =
        "display:none";
      event.target.parentElement.parentElement.childNodes[8].style =
        "display: none";
    }
  }

  handleSubmit(event) {
    event.preventDefault();

    if (event.target.childNodes[0].firstChild.checked === true) {
      let newId = this.state.patients.length + 1;
      let newName = event.target.childNodes[3].value;
      let newSurname = event.target.childNodes[4].value;
      let newTel = event.target.childNodes[5].value;
      let newEmail = event.target.childNodes[6].value;
      let newYear = event.target.childNodes[7].value;

      let newPatient = {
        id: newId,
        name: newName,
        surname: newSurname,
        tel: newTel,
        email: newEmail,
        year: newYear,
        isIll: false,
      };
      this.setState(prevState => ({
        patients: [...prevState.patients, newPatient],
      }));

      this.clearInputFields();
    } else if (event.target.childNodes[1].firstChild.checked === true) {
      let newId = this.state.dentists.length + 1;
      let newName = event.target.childNodes[3].value;
      let newSurname = event.target.childNodes[4].value;
      let newTel = event.target.childNodes[5].value;
      let newEmail = event.target.childNodes[6].value;
      let newCanFill =
        event.target.childNodes[8].childNodes[1].childNodes[0].checked;
      let newCanCrown =
        event.target.childNodes[8].childNodes[2].childNodes[0].checked;
      let newCanPull =
        event.target.childNodes[8].childNodes[3].childNodes[0].checked;
      let newCanJaw =
        event.target.childNodes[8].childNodes[4].childNodes[0].checked;

      let newDentist = {
        id: newId,
        name: newName,
        surname: newSurname,
        tel: newTel,
        email: newEmail,
        isIll: false,
        canFill: newCanFill,
        canCrown: newCanCrown,
        canPull: newCanPull,
        canJaw: newCanJaw,
      };
      this.setState(prevState => ({
        dentists: [...prevState.dentists, newDentist],
      }));
      this.clearInputFields();
    } else if (event.target.childNodes[2].firstChild.checked === true) {
      let newId = this.state.assistents.length + 1;
      let newName = event.target.childNodes[3].value;
      let newSurname = event.target.childNodes[4].value;
      let newTel = event.target.childNodes[5].value;
      let newEmail = event.target.childNodes[6].value;
      let newYear = event.target.childNodes[7].value;

      let newAssistent = {
        id: newId,
        name: newName,
        surname: newSurname,
        tel: newTel,
        email: newEmail,
        year: newYear,
        isIll: false,
      };
      this.setState(prevState => ({
        assistents: [...prevState.assistents, newAssistent],
      }));
      this.clearInputFields();
    }
  }

  handleSick(event) {
    event.preventDefault();
    let category =
      event.target.parentElement.parentElement.parentElement.className;
    switch (category) {
      case "dentists":
        let sickDentist = `${event.target.parentElement.childNodes[1].innerHTML}${event.target.parentElement.childNodes[2].innerHTML}`;
        this.state.appointments.forEach(appointment => {
          appointment.dentist === sickDentist
            ? (appointment.sickDentist = true)
            : (appointment.sickDentist = false);
        });

        break;
      case "assistents":
        let sickAssistent = `${event.target.parentElement.childNodes[1].innerHTML}${event.target.parentElement.childNodes[2].innerHTML}`;
        this.state.appointments.forEach(appointment => {
          appointment.assistent === sickAssistent
            ? (appointment.sickAssistent = true)
            : (appointment.sickAssistent = false);
        });

        break;
      case "patients":
      case "foundPatients":
        let sickPatient = `${event.target.parentElement.childNodes[1].innerHTML}${event.target.parentElement.childNodes[2].innerHTML}`;
        this.state.appointments.forEach(appointment => {
          if (appointment.patient === sickPatient) {
            let index = this.state.appointments.indexOf(appointment);
            this.state.appointments.splice(index, 1);
            this.setState({ appointments: this.state.appointments });
          }
        });
        break;
      default:
        console.log(`Elvis lives!`);
    }
  }

  //deletePatient DRY maken!
  deletePatient(event) {
    event.preventDefault();
    const toDelete = parseInt(
      event.target.parentElement.childNodes[0].innerHTML
    );
    this.state.patients.forEach(patient => {
      if (toDelete === patient.id) {
        let index = this.state.patients.indexOf(patient);
        this.setState(prevState => {
          const newPatients = [...prevState.patients];
          newPatients.splice(index, 1);
          const newState = { ...prevState, patients: newPatients };
          return newState;
        });
      }
    });
    this.state.foundPatients.forEach(patient => {
      if (toDelete === patient.id) {
        let index = this.state.foundPatients.indexOf(patient);
        this.setState(prevState => {
          const newFoundPatients = [...prevState.foundPatients];
          newFoundPatients.splice(index, 1);
          const newState = { ...prevState, foundPatients: newFoundPatients };
          return newState;
        });
      }
    });
  }

  handleSearchPatient(event) {
    event.preventDefault();
    let searchId = parseInt(
      event.target.parentElement.childNodes[1].childNodes[0].value
    );
    let searchSurname =
      event.target.parentElement.childNodes[1].childNodes[1].value;
    this.state.patients.forEach(patient => {
      if (
        patient.id === searchId ||
        patient.surname.toLowerCase() === searchSurname.toLowerCase()
      ) {
        this.setState(prevState => {
          const newFoundPatients = [...prevState.foundPatients];
          newFoundPatients.push(patient);
          const newState = { ...prevState, foundPatients: newFoundPatients };
          return newState;
        });
      }
    });
    this.clearInputFields();
    //clearInputFields werkt nog niet.
  }

  updateAppointId(evt) {
    this.setState({
      appointId: evt.target.value,
    });
  }

  handleSubmitAppointment(event) {
    event.preventDefault();
    let newAppointment = {};

    newAppointment.day = parseInt(event.target[3].value);
    newAppointment.time = parseInt(event.target[4].value);

    this.state.patients.forEach(patient => {
      if (patient.id === parseInt(this.state.appointId)) {
        newAppointment.patient = `${patient.name} ${patient.surname}`;
      }
    });

    this.state.assistents.forEach(assistent => {
      if (assistent.name === event.target[2].value) {
        newAppointment.assistent = `${assistent.name} ${assistent.surname}`;
      }
    });

    this.state.dentists.forEach(dentist => {
      if (dentist.name === event.target[1].value) {
        newAppointment.dentist = `${dentist.name} ${dentist.surname}`;
        this.state.appointments.forEach(appointment => {
          if (
            appointment.dentist === newAppointment.dentist &&
            appointment.day === newAppointment.day &&
            appointment.time === newAppointment.time
          ) {
            console.log(`Dentist not available at chosen date and time`);
            alert(
              `Tandarts ${newAppointment.dentist} niet beschikbaar op datum ${newAppointment.day} om ${newAppointment.time} uur. Kies een ander tijdstip.`
            );
            return;
          }
        });
      }
    });

    this.setState(prevState => {
      const updatedAppointments = [...prevState.appointments];
      updatedAppointments.push(newAppointment);
      updatedAppointments.sort((a, b) =>
        a.day > b.day ? 1 : b.day > a.day ? -1 : 0
      );
      const newState = { ...prevState, appointments: updatedAppointments };
      return newState;
    });
  }

  handleMakeAppointment(event) {
    const patientId = parseInt(
      event.target.parentElement.childNodes[0].innerHTML
    );
    this.idForAppointment.current.focus();
    console.log(`Make appointment with patient ${patientId}`);
  }

  showAllPatients(event) {
    this.setState(prevState => ({
      showing: !prevState.showing,
    }));
    this.state.showing
      ? (event.target.innerHTML = "Show Patients List")
      : (event.target.innerHTML = "Hide Patients List");
  }

  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/calendar">Calendar view</Link>
              </li>
              <li>
                <Link to="/day">Day view</Link>
              </li>
            </ul>
          </nav>
          <main>
            <Switch>
              <Route path="/calendar">
                <Calendar appointments={this.state.appointments} />
              </Route>
              <Route path="/day">
                <Day
                  appointments={this.state.appointments.filter(
                    app => app.day === 1
                  )}
                />
              </Route>
              <Route path="/">
                <Home
                  name={this.state.name}
                  surname={this.state.surname}
                  tel={this.state.tel}
                  email={this.state.email}
                  id={this.state.id}
                  year={this.state.year}
                  isPatient={this.state.isPatient}
                  isDentist={this.state.isDentist}
                  isAssistent={this.state.assistent}
                  canFill={this.canFill}
                  canCrown={this.canCrown}
                  canPull={this.canPull}
                  canJaw={this.canJaw}
                  searchId={this.state.searchId}
                  searchSurname={this.state.searchSurname}
                  patients={this.state.patients}
                  dentists={this.state.dentists}
                  assistents={this.state.assistents}
                  foundPatients={this.state.foundPatients}
                  appointId={this.state.appointId}
                  days={this.state.days}
                  time={this.state.time}
                  chooseDate={this.state.chooseDate}
                  chooseHour={this.state.chooseHour}
                  idForAppointment={this.idForAppointment}
                  showing={this.state.showing}
                  clearFoundPatientsList={this.clearFoundPatientsList}
                  deletePatient={this.deletePatient}
                  handleSick={this.handleSick}
                  handleChange={this.handleChange}
                  handleSubmit={this.handleSubmit}
                  handleClickToAdd={this.handleClickToAdd}
                  handleSearchPatient={this.handleSearchPatient}
                  showAllPatients={this.showAllPatients}
                  handleMakeAppointment={this.handleMakeAppointment}
                  handleSubmitAppointment={this.handleSubmitAppointment}
                  updateAppointId={this.updateAppointId}
                />
              </Route>
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}
export default Container;
