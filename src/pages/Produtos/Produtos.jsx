import estilos from "./Produtos.module.css";

const Produtos = () => {
  return (
    <section>
      <h2 className={estilos.titulo_secao}>Produtos</h2>
      <div id="produtos" className={estilos.produtos}>
        <article>
          <h3>Produto 1</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            sapiente vero laudantium aut! Exercitationem reprehenderit est
            veritatis alias explicabo porro voluptates non vitae! Aliquam
            placeat voluptatibus quasi, aperiam repellat laborum praesentium
            inventore?
          </p>
        </article>
        <article>
          <h3>Produto 2</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            sapiente vero laudantium aut! Exercitationem reprehenderit est
            veritatis alias explicabo porro voluptates non vitae! Aliquam
            placeat voluptatibus quasi, aperiam repellat laborum praesentium
            inventore?
          </p>
        </article>
        <article>
          <h3>Produto 3</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            sapiente vero laudantium aut! Exercitationem reprehenderit est
            veritatis alias explicabo porro voluptates non vitae! Aliquam
            placeat voluptatibus quasi, aperiam repellat laborum praesentium
            inventore?
          </p>
        </article>
      </div>
    </section>
  );
};

export default Produtos;
