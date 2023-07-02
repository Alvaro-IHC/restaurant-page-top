import icon from "../icon/icon";
import "./styles.css";

const footer = () => {
  const footerElement = document.createElement("footer");
  const p = document.createElement("p");
  const a = document.createElement("a");
  const span = document.createElement("span");
  const iconGH = icon({ iconName: "fa-brands fa-github" });

  footerElement.classList.add("app-footer");
  a.classList.add("gh-link");
  p.classList.add("footer-text");
  span.classList.add("footer-developer");

  a.href = "https://github.com/Alvaro-IHC/restaurant-page-top";
  a.target = "_blank";
  p.textContent = "Developed by ";
  span.textContent = " Alvaro-IHC";

  a.append(iconGH, span);
  p.appendChild(a);
  footerElement.appendChild(p);

  return footerElement;
};

export default footer;
