// Importa a biblioteca React.
import React from "react";

// Importa os componentes da biblioteca react-router-dom.
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importa os componentes.
import Produtos from "./components/Produtos";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contato from "./components/Contato";
import Produto from "./components/Produto";

// Importa o CSS.
import "./App.css";

// Criado um componente chamado App.
const App = () => {
  // Retorna um div com o componente Header, Routes e Footer dentro do browserRouter que encapsula toda a aplicação.
  return (
    <div className="App">
      {/* O BrowserRouter é o componente que vai encapsular toda a aplicação. */}
      <BrowserRouter>
        {/* O Header é o componente que vai estár presente em todas as rotas, pois está fora do Routes. */}
        <Header />

        <div className="content">
          {/* O Routes é o componente que vai conter todas as rotas da aplicação. */}
          <Routes>
            {/* O Route é o componente que vai conter cada rota da aplicação. */}
            {/* O path é o caminho da rota. */}
            {/* O element é o componente que vai ser renderizado quando a rota for acessada. */}

            {/* Renderiza o componente Produtos quando a rota: / for acessada, ou seja, a rota raiz. */}
            <Route path="/" element={<Produtos />} />

            {/* Renderiza o componente Produto quando a rota: /produto/:id for acessada, sendo o id a rotas dinâmica feita no componente Produtos. */}
            <Route path="produto/:id" element={<Produto />} />

            {/* Renderiza o componente Contato quando a rota: /contato for acessada. */}
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </div>

        {/* O Footer é o componente que vai estár presente em todas as rotas, pois está fora do Routes. */}
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App; // Está exportando o componente App.
