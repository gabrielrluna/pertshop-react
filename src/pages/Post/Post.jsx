import estilos from "./Post.module.css";
import Caixa from "../../components/Caixa/Caixa";
import { useHistory, useParams } from "react-router-dom";
import servidorApi from "../../api/server-api";
import { useEffect, useState } from "react";
import LoadingDesenho from "../../components/LoadingDesenho/LoadingDesenho";

const Post = () => {
  // "useParams()" -> Hook do React-Router que permite acesso/manipulação de parâmetros vindos da URL
  const { id } = useParams();
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);

  //   Hook do react-router que permite utilizar recursos de navegação no histórico do navegador
  let history = useHistory();

  useEffect(() => {
    async function getPost() {
      try {
        const resposta = await fetch(`${servidorApi}/posts/${id}`);
        const dados = await resposta.json();
        setPost(dados);
        setLoading(false);
        if (Object.keys(dados).lenght === 0) {
          history.push("/404");
        }
      } catch (error) {
        console.log("Deu ruim na busca do post: " + error.message);
      }
    }
    getPost();
  }, [id]);

  if (loading) {
    return <LoadingDesenho />;
  }

  return (
    <section>
      <h2 className={estilos.titulo_secao}>{post.titulo}</h2>

      <Caixa>
        <h3>{post.categoria}</h3>
        <p>{post.descricao}</p>
      </Caixa>
    </section>
  );
};

export default Post;
