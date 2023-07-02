import logo from "../../assets/images/minimalistic-kitchen.svg";

const appLogo = ({ className = "" }) => {
  const appLogo = new Image();
  className && appLogo.classList.add(className);
  appLogo.src = logo;

  return appLogo;
};

export default appLogo;
