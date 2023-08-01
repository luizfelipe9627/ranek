// Importa a biblioteca React.
import React from "react";

// Importa a biblioteca useParams da biblioteca react-router-dom.
import { useParams } from "react-router-dom";

// Importa o CSS Modules.
import styles from "./Produto.module.css";

// Importa o componente.
import Head from "./Head";

// Criado um componente chamado Produto.
const Produto = () => {
  const [produto, setProduto] = React.useState(null); // Está criando um estado chamado produto e o setProduto responsável por atualizar o estado produto. O valor inicial do estado produto é null.
  const [loading, setLoading] = React.useState(false); // Está criando um estado chamado loading e o setLoading responsável por atualizar o estado loading. O valor inicial do estado loading é false.
  const [error, setError] = React.useState(null); // Está criando um estado chamado erro e o setErro responsável por atualizar o estado erro. O valor inicial do estado erro é null.

  const { id } = useParams(); // Está pegando o id da URL, ou seja do produto que foi clicado.

  // O useEffect vai ser executado quando o id do produto que foi clicado mudar.
  React.useEffect(() => {
    // Criado uma função assíncrona(que vai esperar a resposta da API)  chamada fetchProduto que vai receber a URL da API.
    async function fetchProduto(url) {
      // O try vai tentar executar o código abaixo, se der erro em algum momento, vai cair no catch. O finally vai ser executado no final do try ou do catch.
      try {
        setLoading(true); // Está passando o valor true para o estado loading.

        const response = await fetch(url); // Está fazendo a requisição para a API e esperando a resposta.
        const json = await response.json(); // Quando a resposta chegar, vai converter a resposta para o formato JSON.
        setProduto(json); // Está passando os dados da resposta para o estado produto.
      } catch (error) {
        setError("Um erro ocorreu"); // Está passando a mensagem de erro para o estado error.
      } finally {
        setLoading(false); // Está passando o valor false para o estado loading.
      }
    }

    // Está chamando a função fetchProduto passando a URL da API e o id do produto que foi clicado.
    fetchProduto(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
  }, [id]);

  if (loading) return <div className="loading"></div>; // Se o estado loading for true retorna a div com a classe loading.
  if (error) return <p>{error}</p>; // Se o estado error for true retorna a mensagem de erro.
  if (produto === null) return null; // Se o estado produto for null, retorna null ou seja, não retorna nada.

  // Se produto for true, retorna o código abaixo. Retorna um section com um div e um h1, um span e um p.
  return (
    <section className={`${styles.produto} animeLeft`}>
      {/* Está importando o componente Head e passando os valores para os parâmetros props title e description */}
      <Head title={`Ranek | ${produto.nome}`} description={produto.descricao} />

      <div>
        {/* O map está passando por cada item do array fotos e retornando um elemento do tipo img para cada item do array fotos. */}
        {produto.fotos.map((foto) => {
          return <img key={foto.src} src={foto.src} alt={foto.alt} />;
        })}
      </div>

      <div>
        <h1>{produto.nome}</h1>
        <span className={styles.preco}>R$ {produto.preco}</span>
        <p className={styles.descricao}>{produto.descricao}</p>
      </div>
    </section>
  );
};

export default Produto; // Está exportando o componente Produto.
