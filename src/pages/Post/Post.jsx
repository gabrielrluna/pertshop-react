import estilos from "./Post.module.css";
import Caixa from "../../components/Caixa/Caixa";

const Post = () => {
  return (
    <section>
      <h2 className={estilos.titulo_secao}>Titulo do Post</h2>

      <Caixa>
        <h3>Categoria do Post</h3>
        <p>Descrição do Post</p>
      </Caixa>
    </section>
  );
};

export default Post;
