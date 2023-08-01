// Importa a biblioteca React.
import React from "react";

// Importa o componente.
import Head from "./Head";

// Importa o componente Link da biblioteca react-router-dom.
import { Link } from "react-router-dom";

// Importa o CSS Modules.
import styles from "./Produtos.module.css";

// Criado um componente chamado Produtos.
const Produtos = () => {
  const [produtos, setProdutos] = React.useState(null); // Está criando um estado chamado produtos e setProdutos responsável por atualizar o estado produtos. O valor inicial do estado produtos é null.

  // O React.useEffect é executado quando o componente é renderizado pois o array de dependências está vazio.
  React.useEffect(() => {
    // Está fazendo uma requisição para a API.
    fetch("https://ranekapi.origamid.dev/json/api/produto")
      // Está convertendo a resposta para o formato JSON.
      .then((response) => response.json())
      // Está pegando os dados da resposta em JSON e passando para o estado produtos.
      .then((json) => setProdutos(json));
  }, []);

  // Se o estado produtos for null, retorna null.
  if (produtos === null) return null;
  
  // Se não, retorna o código abaixo. Retorna um section com um link para cada item do estado produtos.
  return (
    <section className={`${styles.produtos} animeLeft`}>
      {/* Está importando o componente Head e passando os valores para os parâmetros props title e description */}
      <Head title="Ranek" description="Descrição do site Ranek" />

      {/* Está mapeando o estado produtos e retornando um elemento para cada item do estado produtos. */}
      {produtos.map((produto) => {
        return (
          // Está criando um link para cada item do estado produtos, que redireciona para a página do produto clicado.
          <Link to={`produto/${produto.id}`} key={produto.id}>
            {/* Está acessando o primeiro item do array fotos e acessando a propriedade src e titulo. */}
            <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo} />
            <h1 className={styles.nome}>{produto.nome}</h1>
          </Link>
        );
      })}
    </section>
  );
};

export default Produtos; // Está exportando o componente Produtos.
