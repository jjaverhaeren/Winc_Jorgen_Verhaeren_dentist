import patients from "../data/patients";
import dentists from "../data/dentists";
import assistents from "../data/assistents";

const getRandomName = (array, num) => {
  const person = array[Math.floor(Math.random() * num)];
  return `${person.name} ${person.surname}`;
};

const getRandomTime = () => {
  let hour;
  while (true) {
    hour = Math.floor(Math.random() * 24);
    if (hour > 7 && hour < 19) {
      return hour;
    }
  }
};

const getRandomDay = () => Math.floor(Math.random() * 28) + 1;

const generateRandomAppointment = () => ({
  day: getRandomDay(),
  time: getRandomTime(),
  patient: getRandomName(patients, 50),
  dentist: getRandomName(dentists, 4),
  assistant: getRandomName(assistents, 3),
});

const generateRandomAppointments = num =>
  Array(num)
    .fill(0)
    .map(_ => generateRandomAppointment());

export default generateRandomAppointments;
