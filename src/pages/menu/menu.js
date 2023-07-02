import foodCard from "../../components/foodCard/foodCard";
import products from "./data.json";
import "./styles.css";

const menu = () => {
  const menuElement = document.createElement("div");
  const foods = document.createElement("div");
  const title = document.createElement("h1");

  menuElement.classList.add("menu");
  foods.classList.add("foods-container");
  title.classList.add("menu-title");

  title.textContent = "Menu";
  products.forEach((product) => foods.appendChild(foodCard({ food: product })));

  menuElement.append(title, foods);
  return menuElement;
};

export default menu;
