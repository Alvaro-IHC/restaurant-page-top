import "./styles.css";

const icon = ({ iconName, className, onClick = () => {} }) => {
  const icon = document.createElement("i");
  className && icon.classList.add(className);
  icon.classList.add(...iconName.split(" "));
  icon.onclick = onClick;
  return icon;
};

export default icon;
