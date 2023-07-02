import contactCard from "../../components/contactCard/contactCard";
import data from "./data.json";
import "./styles.css";

const contact = () => {
  const contactElement = document.createElement("div");
  const contacts = document.createElement("div");
  const title = document.createElement("h1");

  contactElement.classList.add("contact-page");
  contacts.classList.add("contacts-container");
  title.classList.add("contact-title");

  title.textContent = "Contact";
  data.forEach((item) => contacts.appendChild(contactCard({ contact: item })));

  contactElement.append(title, contacts);
  return contactElement;
};

export default contact;
