import data from "./data.json";
import "./styles.css";

const home = () => {
  const homeElement = document.createElement("div");

  const title = document.createElement("h1");
  const description = document.createElement("div");
  const hoursSubtitle = document.createElement("h2");
  const hours = document.createElement("div");

  homeElement.classList.add("home");
  title.classList.add("home-title");
  description.classList.add("home-description");
  hoursSubtitle.classList.add("home-hours-subtitle");
  hours.classList.add("home-hours");

  title.textContent = data.name;

  data.description.forEach((paragraph) => {
    const p = document.createElement("p");
    p.classList.add("home-paragraph");
    p.textContent = paragraph;
    description.appendChild(p);
  });

  hoursSubtitle.textContent = "Opening Hours";

  Object.keys(data.hours).forEach((day) => {
    const div = document.createElement("div");
    const h4 = document.createElement("h4");
    const p = document.createElement("p");

    div.classList.add("hours-row");
    h4.classList.add("hours-key");
    p.classList.add("hours-value");

    h4.textContent = day;
    p.textContent = data.hours[day];
    div.appendChild(h4);
    div.appendChild(p);

    hours.appendChild(div);
  });

  homeElement.appendChild(title);
  homeElement.appendChild(description);
  homeElement.appendChild(hoursSubtitle);
  homeElement.appendChild(hours);

  return homeElement;
};

export default home;
