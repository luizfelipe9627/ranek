// Importa a biblioteca React.
import React from "react";

// Importa o CSS Modules.
import styles from "./Header.module.css";

// Importa os componentes da biblioteca react-router-dom.
import { NavLink } from "react-router-dom";

// Criado um componente chamado Header.
const Header = () => {
  // Retorna um header uma lista não ordenada com dois itens que são links.
  return (
    <nav className={styles.header}>
      <ul>
        <li>
          {/* O NavLink é o componente que vai ser renderizado como um link na página. */}
          {/* O to é o caminho da rota que vai ser acessada. */}
          {/* O end é uma propriedade que indica que o link só vai ser ativo quando o caminho for exatamente o mesmo. */}
          <NavLink className={styles.link} to="/" end>
            Produtos
          </NavLink>
        </li>

        <li>
          {/* O NavLink é o componente que vai ser renderizado como um link na página. */}
          {/* O to é o caminho da rota que vai ser acessada. */}
          <NavLink className={styles.link} to="/contato">
            Contato
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header; // Está exportando o componente Header.
