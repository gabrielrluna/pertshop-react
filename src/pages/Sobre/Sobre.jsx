import Caixa from "../../components/Caixa/Caixa";
import estilos from "./Sobre.module.css";

const Sobre = () => {
  return (
    <section>
      <h2 className={estilos.titulo_secao}>Sobre nosso PetShop</h2>
      <Caixa id="sobre">
        <h3>Missão</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, sint
          quis est blanditiis voluptas dolorum et odit illum deleniti veritatis!
        </p>
        <h3>Visão</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, sint
          quis est blanditiis voluptas dolorum et odit illum deleniti veritatis!
        </p>
        <h3>Valores</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, sint
          quis est blanditiis voluptas dolorum et odit illum deleniti veritatis!
        </p>
      </Caixa>
    </section>
  );
};

export default Sobre;
