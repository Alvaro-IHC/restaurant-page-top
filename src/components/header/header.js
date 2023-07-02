import menuBar from "../menubar/menuBar";
import appLogo from "../appLogo/appLogo";
import "./styles.css";

const header = ({ onTabChange }) => {
  const header = document.createElement("header");
  header.classList.add("app-header");

  header.appendChild(appLogo({ className: "app-logo" }));
  header.appendChild(menuBar({ onTabChange }));

  return header;
};

export default header;
