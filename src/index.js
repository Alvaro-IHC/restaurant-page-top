import "@fortawesome/fontawesome-free/css/all.css";

import header from "./components/header/header";
import home from "./pages/home/home";
import contact from "./pages/contact/contact";
import menu from "./pages/menu/menu";
import "./index.css";
import icon from "./components/icon/icon";
import footer from "./components/footer/footer";

const index = () => {
  let darkTheme = false;
  let selectedChild = home();
  const body = document.getElementsByTagName("body")[0];

  const div = document.createElement("div");
  const btn = document.createElement("button");
  const iconTheme = icon({ iconName: "fa-solid fa-circle-half-stroke" });

  body.classList.add(darkTheme ? "dark-theme" : "light-theme");
  btn.classList.add("theme-button");
  btn.title = "Toggle theme";

  btn.appendChild(iconTheme);

  btn.onclick = () => {
    body.classList.remove(darkTheme ? "dark-theme" : "light-theme");
    darkTheme = !darkTheme;
    body.classList.add(darkTheme ? "dark-theme" : "light-theme");
  };

  const mainContent = document.createElement("main");
  mainContent.classList.add("main-content");

  mainContent.appendChild(selectedChild);

  const handleTabChange = (tab) => {
    mainContent.removeChild(selectedChild);
    switch (tab) {
      case "menu":
        selectedChild = menu();
        break;
      case "contact":
        selectedChild = contact();
        break;
      case "home":
        selectedChild = home();
    }
    mainContent.appendChild(selectedChild);
  };

  div.appendChild(header({ onTabChange: handleTabChange }));
  div.appendChild(btn);
  div.appendChild(mainContent);
  div.appendChild(footer());

  return div;
};

document.getElementById("content").appendChild(index());
