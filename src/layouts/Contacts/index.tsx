import React from "react";
import styles from "./index.module.css";
import { ReactComponent as GitHub } from '../../assets/contact/github.svg';
import { ReactComponent as LinkedIn } from '../../assets/contact/linkedin.svg';
import { ReactComponent as Correo } from '../../assets/contact/email.svg';
import { ReactComponent as Whatsapp } from '../../assets/contact/whatsapp.svg';
import { ReactComponent as Phone } from '../../assets/contact/phone.svg';

const CONTACTS = [
  {
    name: "Whatsapp",
    url: "https://wa.me/51902386977",
    icon: <Whatsapp className={styles.icon}/>,
  },
  {
    name: "Teléfono",
    url: "tel:+51902386977",
    icon: <Phone className={styles.icon}/>,
  },
  {
    name: "GitHub",
    url: "https://github.com/Fechoritas",
    icon: <GitHub className={styles.icon}/>,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/anthony789",
    icon: <LinkedIn className={styles.icon}/>,
  },
  {
    name: "Correo",
    url: "mailto:anthonytorresbarboza@gmail.com",
    icon: <Correo className={styles.icon}/>,
  },
  // {
  //   name: "Portafolio",
  //   url: "#",
  //   icon: <Internet className={styles.icon}/>,
  // },
];

const Contacts: React.FC = () => {
  return (
    <section className={styles.container} id="contacts">
      <h1>Contacto</h1>
      <div className={styles.contactList}>
        {CONTACTS.map((contact, index) => (
          <a key={index} href={contact.url} target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
            {contact.icon}
            <span>{contact.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contacts;
