import estilos from "./ListaPosts.module.css";

const ListaPosts = () => {
  return (
    <div className={estilos.lista_posts}>
      <article className={estilos.post}>
        <h3>Titulos</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          aliquid officia voluptas obcaecati error officiis hic tenetur,
          incidunt ea, minus ipsum ab nostrum? Vero nam autem, beatae iure
          labore voluptates?
        </p>
      </article>

      <article className={estilos.post}>
        <h3>Titulos</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          aliquid officia voluptas obcaecati error officiis hic tenetur,
          incidunt ea, minus ipsum ab nostrum? Vero nam autem, beatae iure
          labore voluptates?
        </p>
      </article>

      <article className={estilos.post}>
        <h3>Titulos</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          aliquid officia voluptas obcaecati error officiis hic tenetur,
          incidunt ea, minus ipsum ab nostrum? Vero nam autem, beatae iure
          labore voluptates?
        </p>
      </article>

      <article className={estilos.post}>
        <h3>Titulos</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          aliquid officia voluptas obcaecati error officiis hic tenetur,
          incidunt ea, minus ipsum ab nostrum? Vero nam autem, beatae iure
          labore voluptates?
        </p>
      </article>
    </div>
  );
};

export default ListaPosts;
