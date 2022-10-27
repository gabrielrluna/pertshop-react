import estilos from "./Categoria.module.css";

// Objetivo deste componente é exibir o ListaPost filtrado pela categoria escolhida no menu ListaCategorias

const Categoria = () => {
  return (
    <section>
      <h2 className={estilos.titulo_secao}>Pet Notícias</h2>
    </section>
  );
};

export default Categoria;
