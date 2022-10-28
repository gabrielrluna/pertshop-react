import estilos from "./Contato.module.css";
import Caixa from "../../components/Caixa/Caixa";
import { TextField, Button } from "@mui/material";

const Contato = () => {
  return (
    <section>
      <h2 className={estilos.titulo_secao}>Contato</h2>

      <Caixa>
        <form className={estilos.formulario} method="post">
          <div>
            <TextField
              label="Nome"
              variant="outlined"
              fullWidth
              required
              helperText="Coloque seu nome completo, sem abreviações"
            />
          </div>
          <div>
            <TextField
              type="email"
              label="email"
              variant="outlined"
              fullWidth
              required
              helperText="Digite um e-mail válido"
            />
          </div>
          <div>
            <TextField
              type="text"
              label="Mensagem"
              variant="outlined"
              fullWidth
              required
              helperText="Coloque sua mensagem com todos os detalhes que precisa"
              multiline
              rows={6}
            />
          </div>
          <div>
            <Button type="submit" variant="contained">
              Enviar Mensagem
            </Button>
          </div>
        </form>
      </Caixa>
    </section>
  );
};

export default Contato;
