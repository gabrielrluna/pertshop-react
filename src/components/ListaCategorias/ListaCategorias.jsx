import { useState, useEffect } from "react"; //Hooks do React
import servidorApi from "../../api/server-api";
import LoadingDesenho from "../LoadingDesenho/LoadingDesenho";
import estilos from "./ListaCategorias.module.css";
import { Link } from "react-router-dom";

const ListaCategorias = () => {
  /*Atribuição do useState para manipular os dados do componente
	1º parâmetro: variável que terá os dados
	2º parâmetros: função responsável por atualizar (setter)
	Obs: O que colocamos no useState representa o valor inicial*/
  const [categorias, setCategorias] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getCategorias() {
      try {
        const resposta = await fetch(`${servidorApi}/categorias`);
        const dados = await resposta.json();
        setCategorias(dados);
        setLoading(false);
      } catch (error) {
        console.log("Não deu certo " + error.message);
      }
    }

    getCategorias();
  }, []);

  if (loading) {
    return <LoadingDesenho />;
  }

  return (
    <div className={estilos.lista_categorias}>
      <ul>
        {/* {categorias.map((categoria) => {
          return <li key={categoria.id}>{categoria.nome}</li>;
        })} */}

        {categorias.map(({ id, nome }) => {
          return (
            <li key={id}>
              <Link to="">{nome}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListaCategorias;
