// Importa a biblioteca React.
import React from "react";

// Criado um componente chamado Head que recebe os parâmetros props title e description responsável por alterar o título e a descrição da página.
const Head = (props) => {
  // O React.useEffect é executado toda vez que o props.title ou props.description mudar.
  React.useEffect(() => {
    document.title = props.title;
    document
      .querySelector("meta[name='description']")
      .setAttribute("content", props.description);
  }, [props]);

  // Retorna um fragmento vazio.
  return <React.Fragment></React.Fragment>;
};

export default Head; // Está exportando o componente Head.
