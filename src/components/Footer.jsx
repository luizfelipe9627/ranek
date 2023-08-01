// Importa a biblioteca React.
import React from "react";

// Importa o CSS Modules.
import styles from "./Footer.module.css";

// Criado um componente chamado Footer.
const Footer = () => {
  // Retorna um footer com um parágrafo.
  return (
    <footer className={styles.footer}>
      <p>Alguns direitos reservados.</p>
    </footer>
  );
};

export default Footer; // Está exportando o componente Footer.
