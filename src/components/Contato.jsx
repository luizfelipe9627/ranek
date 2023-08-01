// Importa a biblioteca React.
import React from "react";

// Importa o componente.
import Head from "./Head";

// Importa o CSS Modules.
import styles from "./Contato.module.css";

// Importa a imagem.
import foto from "../assets/img/contato.jpg";

// Criado um componente chamado Contato.
const Contato = () => {
  // Retorna um section tendo como conteúdo um componente Head, uma imagem e um div que contém um h1 e uma ul.
  return (
    <section className={`${styles.contato} animeLeft`}>
      {/* Está importando o componente Head e passando os valores para os parâmetros props title e description */}
      <Head title="Ranek | Contato" description="Entre em contato" />

      <img src={foto} alt="Máquina de escrever" />

      <div>
        <h1>Entre em contato.</h1>

        <ul className={styles.dados}>
          <li>luiz@email.com</li>
          <li>+55 (11) 99999-9999</li>
          <li>Rua Ali Longe, 248</li>
        </ul>
      </div>
    </section>
  );
};

export default Contato; // Está exportando o componente Contato.
