
import { useState } from "react";
import { db } from "./db/database";

function App() {
  const [mensagem, setMensagem] = useState("");

  async function testarBanco() {
    try {
      const id = await db.transacoes.add({
        descricao: "Teste de banco de dados",
        valor: 10,
        tipo: "despesa",
        categoria: "Teste",
        data: new Date().toISOString().slice(0, 10),
      });

      const transacao = await db.transacoes.get(id);

      setMensagem(
        transacao
          ? `Sucesso! Registro salvo: ${transacao.descricao}`
          : "Registro não encontrado."
      );
    } catch (erro) {
      console.error(erro);
      setMensagem("Erro ao acessar o banco de dados.");
    }
  }

  return (
    <main style={{ padding: "24px", fontFamily: "Arial" }}>
      <h1>Gerenciador Financeiro</h1>
      <p>Teste do banco de dados local</p>

      <button onClick={testarBanco}>
        Testar banco de dados
      </button>

      <p>{mensagem}</p>
    </main>
  );
}

export default App;
