import estilos from "./Produtos.module.css";
import Caixa from "../../components/Caixa/Caixa";

const Produtos = () => {
  return (
    <section>
      <h2 className={estilos.titulo_secao}>Conheça nossos produtos!</h2>
      <Caixa id="produtos" listaDeClasses={estilos.produtos}>
        <article>
          <h3>Produto 1</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            aliquid cum aspernatur distinctio veniam iusto iure nam odio,
            dolorem exercitationem eos quaerat.
          </p>
        </article>
        <article>
          <h3>Produto 1</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            aliquid cum aspernatur distinctio veniam iusto iure nam odio,
            dolorem exercitationem eos quaerat.
          </p>
        </article>
        <article>
          <h3>Produto 1</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            aliquid cum aspernatur distinctio veniam iusto iure nam odio,
            dolorem exercitationem eos quaerat.
          </p>
        </article>
      </Caixa>
    </section>
  );
};

export default Produtos;
