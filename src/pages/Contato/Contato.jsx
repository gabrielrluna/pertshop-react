import estilos from "./Contato.module.css";
import Caixa from "../../components/Caixa/Caixa";
import { TextField, Button } from "@mui/material";
import { useState } from "react";
import servidorApi from "../../api/server-api";

const Contato = () => {
  // Eventos/Funções para captura da digitação nos campos
  const inputNome = (event) => setNome(event.target.value);
  const inputEmail = (event) => setEmail(event.target.value);
  const inputMensagem = (event) => setMensagem(event.target.value);

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  const enviarContato = async (event) => {
    event.preventDefault();

    const opcoes = {
      method: "POST",
      body: JSON.stringify({ nome, email, mensagem }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };
    try {
      await fetch(`${servidorApi}/contatos`, opcoes);
      alert("Dados enviados!");
    } catch (error) {
      console.log("Deu ruim: " + error.message);
    }
  };

  let desabilitado = !nome || !mensagem || !email;

  return (
    <section>
      <h2 className={estilos.titulo_secao}>Contato</h2>

      <Caixa>
        <form
          onSubmit={enviarContato}
          className={estilos.formulario}
          method="post"
        >
          <div>
            <TextField
              onChange={inputNome}
              label="Nome"
              variant="outlined"
              fullWidth
              required
              helperText="Coloque seu nome completo, sem abreviações"
            />
          </div>
          <div>
            <TextField
              onChange={inputEmail}
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
              onChange={inputMensagem}
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
            <Button type="submit" variant="contained" disabled={desabilitado}>
              Enviar Mensagem
            </Button>
          </div>
        </form>
      </Caixa>
    </section>
  );
};

export default Contato;
