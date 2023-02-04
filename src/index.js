import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import { GalacticAge } from "./../src/js/main";

const handleForm = () => {
  const currentAge = document.getElementById("current-age").value;
  const pastAge = document.getElementById("past-age").value;
  const futureAge = document.getElementById("future-age").value;
  const newAge = new GalacticAge(currentAge);
  const mercPast = document.getElementById("mercury-past-age");
  newAge.mercury();

  document.getElementById("mercury-currentAge").innerHTML = `${newAge.mercurianAge}`;

};

window.addEventListener("load", () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    handleForm();
  });
});

