import { CARET_UP, ELLIPSIS_VERTICAL } from "../../utils/constants/icons";
import appLogo from "../appLogo/appLogo";
import icon from "../icon/icon";
import linkButton from "../linkButton/linkButton";
import "./styles.css";

const menuBar = ({ onTabChange }) => {
  let displayMenu = false;
  const ul = document.createElement("ul");
  const navBar = document.createElement("div");
  navBar.classList.add("nav-bar");

  ul.classList.add("links-container");

  ul.appendChild(linkButton({ label: "home", onClick: onTabChange }));
  ul.appendChild(linkButton({ label: "menu", onClick: onTabChange }));
  ul.appendChild(linkButton({ label: "contact", onClick: onTabChange }));
  const handleClick = () => {
    console.log("hi", displayMenu);
    if (displayMenu) {
      ul.classList.remove("display");
      iconMenu.classList.remove(...CARET_UP.split(" "));
      iconMenu.classList.add(...ELLIPSIS_VERTICAL.split(" "));
    } else {
      iconMenu.classList.remove(...ELLIPSIS_VERTICAL.split(" "));
      iconMenu.classList.add(...CARET_UP.split(" "));
      ul.classList.add("display");
    }
    displayMenu = !displayMenu;
  };

  const div = document.createElement("div");
  div.classList.add("icons-container");

  const iconMenu = icon({
    iconName: ELLIPSIS_VERTICAL,
    className: "menu-icon",
    onClick: handleClick.bind(this),
  });

  div.appendChild(appLogo({ className: "sm-app-logo" }));
  div.appendChild(iconMenu);

  navBar.appendChild(ul);
  navBar.appendChild(div);

  // return window.innerWidth > 480 ? ul : iconMenu;

  // Actualizar el contenido inicialmente

  // Escuchar el evento resize y actualizar el contenido en consecuencia
  // window.addEventListener("resize", updateContent);

  return navBar;
};

export default menuBar;
