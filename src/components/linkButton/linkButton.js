import "./styles.css";

const linkButton = ({ label = "test", onClick }) => {
  const li = document.createElement("li");
  const btn = document.createElement("button");

  li.classList.add("nav-bar-link");
  btn.classList.add("nav-bar-btn");

  btn.textContent = label;
  btn.onclick = () => {
    onClick(label.replace(" ", "-"));
  };

  li.appendChild(btn);

  return li;
};

export default linkButton;
