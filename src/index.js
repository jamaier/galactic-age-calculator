import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import { GalacticAge } from "./../src/js/main";

const handleForm = () => {
  const currentAge = document.getElementById("current-age").value;
  const pastAge = document.getElementById("past-age").value;
  const futureAge = document.getElementById("future-age").value;
  const newAge = new GalacticAge(pastAge, currentAge, futureAge);
  newAge.mercury();
  newAge.venus();
  newAge.mars();
  newAge.jupiter();
  newAge.yearsSince();
  newAge.yearsUntil();
  document.getElementById("mercury").innerHTML = `${newAge.mercurianAge}`;
  document.getElementById("venus").innerHTML = `${newAge.venusianAge}`;
  document.getElementById("mars").innerHTML = `${newAge.martianAge}`;
  document.getElementById("jupiter").innerHTML = `${newAge.jupiterianAge}`;
};



window.addEventListener("load", () => {
  const age = new GalacticAge();
  const form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    handleForm();
  });
});
