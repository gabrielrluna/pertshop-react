import estilos from "./Contato.module.css";
import Caixa from "../../components/Caixa/Caixa";

const Contato = () => {
  return (
    <section>
      <h2 className={estilos.titulo_secao}>Contato</h2>

      <Caixa id="contato">
        <p>
          <i>Em breve teremos um formulário com biblioteca de componentes</i>
        </p>
      </Caixa>
    </section>
  );
};

export default Contato;
