const names = [
  { name: "Aad", surname: "Groen", gender: "male", region: "Netherlands" },
  {
    name: "Harm van der",
    surname: "Pol",
    gender: "male",
    region: "Netherlands",
  },
  { name: "Pieter", surname: "Meijer", gender: "male", region: "Netherlands" },
  {
    name: "Michiel",
    surname: "Gerritsen",
    gender: "male",
    region: "Netherlands",
  },
  {
    name: "Sander van",
    surname: "Wijk",
    gender: "male",
    region: "Netherlands",
  },
  { name: "Olaf de", surname: "Ruiter", gender: "male", region: "Netherlands" },
  { name: "Teun de", surname: "Wit", gender: "male", region: "Netherlands" },
  { name: "Tom", surname: "Schouten", gender: "male", region: "Netherlands" },
  {
    name: "Mirthe",
    surname: "Meijer",
    gender: "female",
    region: "Netherlands",
  },
  { name: "Lisa", surname: "Kok", gender: "female", region: "Netherlands" },
  { name: "Emiel de", surname: "Vos", gender: "male", region: "Netherlands" },
  {
    name: "Diewertje van",
    surname: "Loon",
    gender: "female",
    region: "Netherlands",
  },
  {
    name: "Arjan van",
    surname: "Vliet",
    gender: "male",
    region: "Netherlands",
  },
  { name: "Femke", surname: "Meijer", gender: "female", region: "Netherlands" },
  {
    name: "Lonneke",
    surname: "Sanders",
    gender: "female",
    region: "Netherlands",
  },
  {
    name: "Christien",
    surname: "Prins",
    gender: "female",
    region: "Netherlands",
  },
  { name: "Mathijs", surname: "Mol", gender: "male", region: "Netherlands" },
  { name: "Carlijn", surname: "Bos", gender: "female", region: "Netherlands" },
  {
    name: "Eelco van der",
    surname: "Meer",
    gender: "male",
    region: "Netherlands",
  },
  {
    name: "Willemijn",
    surname: "Hofman",
    gender: "female",
    region: "Netherlands",
  },
  {
    name: "Reinout van der",
    surname: "Veen",
    gender: "male",
    region: "Netherlands",
  },
  {
    name: "Lotte",
    surname: "Hoekstra",
    gender: "female",
    region: "Netherlands",
  },
  { name: "Aart", surname: "Willems", gender: "male", region: "Netherlands" },
  { name: "Florus", surname: "Prins", gender: "male", region: "Netherlands" },
  {
    name: "Valentijn",
    surname: "Gerritsen",
    gender: "male",
    region: "Netherlands",
  },
  { name: "Paul de", surname: "Vos", gender: "male", region: "Netherlands" },
  { name: "Henk", surname: "Postma", gender: "male", region: "Netherlands" },
  {
    name: "Willemijn van",
    surname: "Dijk",
    gender: "female",
    region: "Netherlands",
  },
  {
    name: "Boudewijn van",
    surname: "Dijk",
    gender: "male",
    region: "Netherlands",
  },
  { name: "Jaap de", surname: "Ruiter", gender: "male", region: "Netherlands" },
  {
    name: "Floor van",
    surname: "Veen",
    gender: "female",
    region: "Netherlands",
  },
  { name: "Tom de", surname: "Leeuw", gender: "male", region: "Netherlands" },
  {
    name: "Heleen van",
    surname: "Loon",
    gender: "female",
    region: "Netherlands",
  },
  { name: "Luuk", surname: "Hermans", gender: "male", region: "Netherlands" },
  {
    name: "Huib van der",
    surname: "Veen",
    gender: "male",
    region: "Netherlands",
  },
  { name: "Jaap", surname: "Hoekstra", gender: "male", region: "Netherlands" },
  {
    name: "Mathijs van",
    surname: "Dijk",
    gender: "male",
    region: "Netherlands",
  },
  {
    name: "Peter de",
    surname: "Koning",
    gender: "male",
    region: "Netherlands",
  },
  {
    name: "Maartje",
    surname: "Schouten",
    gender: "female",
    region: "Netherlands",
  },
  { name: "Thomas van", surname: "Dam", gender: "male", region: "Netherlands" },
  { name: "Huib", surname: "Verhoeven", gender: "male", region: "Netherlands" },
  {
    name: "Imke van",
    surname: "Dongen",
    gender: "female",
    region: "Netherlands",
  },
  {
    name: "Maartje",
    surname: "Kramer",
    gender: "female",
    region: "Netherlands",
  },
  {
    name: "Willemijn van",
    surname: "Dongen",
    gender: "female",
    region: "Netherlands",
  },
  {
    name: "Daan",
    surname: "Timmermans",
    gender: "male",
    region: "Netherlands",
  },
  { name: "Tom", surname: "Huisman", gender: "male", region: "Netherlands" },
  {
    name: "Doortje de",
    surname: "Bruijn",
    gender: "female",
    region: "Netherlands",
  },
  {
    name: "Reinout",
    surname: "Hoekstra",
    gender: "male",
    region: "Netherlands",
  },
  {
    name: "Victor de",
    surname: "Graaf",
    gender: "male",
    region: "Netherlands",
  },
  { name: "Ivo van", surname: "Vliet", gender: "male", region: "Netherlands" },
];
let id = 1;
names.forEach(name => (name.id = id++));
names.forEach(name => (name.year = Math.round(getRandomNumber(1940, 2017))));
names.forEach(name => (name.email = name.surname + "@wincmail.com"));
names.forEach(
  name => (name.tel = "06-" + Math.round(getRandomNumber(10000000, 99999999)))
);
let patients = names;

function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

export default patients;
