import icon from "../icon/icon";
import "./styles.css";

const contactCard = ({ contact, className = "" }) => {
  const card = document.createElement("div");
  const content = document.createElement("div");
  const name = document.createElement("h3");
  const job = document.createElement("p");
  const phone = document.createElement("p");
  const email = document.createElement("p");
  const iconContact = icon({
    iconName: contact.icon,
    className: "contact-icon",
  });

  card.classList.add("contact-card");
  content.classList.add("contact-card-content");
  name.classList.add("contact-card-name");
  job.classList.add("contact-card-job");
  phone.classList.add("contact-card-phone");
  email.classList.add("contact-card-email");

  name.textContent = contact.name;
  job.textContent = contact.job;
  phone.textContent = contact.phone;
  email.textContent = contact.email;

  content.append(name, job, phone, email);
  card.append(content, iconContact);

  return card;
};

export default contactCard;
