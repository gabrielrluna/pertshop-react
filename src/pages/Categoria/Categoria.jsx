import { useParams } from "react-router-dom";
import estilos from "./Categoria.module.css";
import ListaCategorias from "../../components/ListaCategorias/ListaCategorias";
import ListaPosts from "../../components/ListaPosts/ListaPosts";

// Objetivo deste componente é exibir o ListaPost filtrado pela categoria escolhida no menu ListaCategorias

const Categoria = () => {
  const { nome } = useParams();
  console.log(nome);
  return (
    <section>
      <h2 className={estilos.titulo_secao}>Pet Notícias</h2>

      <ListaCategorias />

      <ListaPosts url={`posts?categoria=${nome}`} />
    </section>
  );
};

export default Categoria;
