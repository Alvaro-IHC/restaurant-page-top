import "./styles.css";

const foodCard = ({ food, className = "" }) => {
  const card = document.createElement("div");
  const content = document.createElement("div");
  const title = document.createElement("h3");
  const description = document.createElement("p");
  const price = document.createElement("p");
  const image = new Image();

  card.classList.add("food-card");
  content.classList.add("food-card-content");
  title.classList.add("food-card-title");
  description.classList.add("food-card-description");
  price.classList.add("food-card-price");
  image.classList.add("food-card-image");

  title.textContent = food.name;
  description.textContent = food.description;
  price.textContent = `Price: $${food.price}`;
  image.src = require(`./../../assets/images/foods/${food.image}`);

  content.appendChild(title);
  content.appendChild(description);
  content.appendChild(price);
  card.appendChild(content);
  card.appendChild(image);

  return card;
};

export default foodCard;
