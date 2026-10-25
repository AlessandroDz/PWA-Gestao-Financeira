
import { useEffect, useState } from "react";
import {
  ArrowDownLeft,
  ArrowUpRight,
  Wallet,
  House,
  ReceiptText,
  ChartNoAxesCombined,
  Settings,
  Plus,
  Trash2,
  X,
} from "lucide-react";
import { db, type Transacao } from "./db/database";

type Pagina = "inicio" | "lancamentos" | "relatorios" | "ajustes";

function App() {
  const [transacoes, setTransacoes] = useState<Transacao[]>([]);
  const [pagina, setPagina] = useState<Pagina>("inicio");
  const [formularioAberto, setFormularioAberto] = useState(false);
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [tipo, setTipo] = useState<"receita" | "despesa">("despesa");
  const [categoria, setCategoria] = useState("Alimentação");
  const [data, setData] = useState(new Date().toLocaleDateString("en-CA"));
  const [mensagem, setMensagem] = useState("");

  async function carregarTransacoes() {
    const dados = await db.transacoes.toArray();
    setTransacoes(dados);
  }

  useEffect(() => {
    carregarTransacoes();
  }, []);

  const receitas = transacoes.filter((t) => t.tipo === "receita");
  const despesas = transacoes.filter((t) => t.tipo === "despesa");
  const totalReceitas = receitas.reduce((soma, t) => soma + t.valor, 0);
  const totalDespesas = despesas.reduce((soma, t) => soma + t.valor, 0);
  const saldo = totalReceitas - totalDespesas;

  function moeda(valor: number) {
    return valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  async function salvarTransacao(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const valorNumerico = Number(valor.replace(",", "."));

    if (
      !descricao.trim() ||
      !Number.isFinite(valorNumerico) ||
      valorNumerico <= 0 ||
      !data
    ) {
      setMensagem("Confira a descrição, o valor e a data.");
      return;
    }

    try {
      await db.transacoes.add({
        descricao: descricao.trim(),
        valor: valorNumerico,
        tipo,
        categoria,
        data,
      });

      await carregarTransacoes();
      setDescricao("");
      setValor("");
      setFormularioAberto(false);
      setMensagem("Lançamento salvo com sucesso!");
    } catch (erro) {
      console.error(erro);
      setMensagem("Não foi possível salvar o lançamento.");
    }
  }

  async function excluirTransacao(id?: number) {
    if (id === undefined) return;
    if (!window.confirm("Deseja excluir este lançamento?")) return;

    try {
      await db.transacoes.delete(id);
      await carregarTransacoes();
      setMensagem("Lançamento excluído.");
    } catch (erro) {
      console.error(erro);
      setMensagem("Não foi possível excluir o lançamento.");
    }
  }

  const historico = [...transacoes].sort((a, b) =>
    b.data.localeCompare(a.data)
  );

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand-icon"><Wallet size={23} /></div>
        <div>
          <strong>Meu Financeiro</strong>
          <span>Controle suas finanças</span>
        </div>
        <button
          className="icon-button"
          aria-label="Abrir ajustes"
          onClick={() => setPagina("ajustes")}
        >
          <Settings size={21} />
        </button>
      </header>

      <main className="main-content">
        {pagina === "inicio" && (
          <>
            <p className="eyebrow">VISÃO GERAL</p>
            <h1>Seu dinheiro,<br />sob controle.</h1>

            <section className="balance-card">
              <div className="balance-label">
                <Wallet size={18} />
                <span>Saldo acumulado</span>
              </div>
              <div className="balance-value">{moeda(saldo)}</div>
              <div className="balance-footer">
                <span>{transacoes.length} lançamento(s) registrados</span>
                <span className="balance-symbol">R$</span>
              </div>
            </section>

            <section className="summary-grid">
              <article className="summary-card">
                <div className="summary-icon income-icon">
                  <ArrowDownLeft size={20} />
                </div>
                <span>Receitas</span>
                <strong>{moeda(totalReceitas)}</strong>
              </article>

              <article className="summary-card">
                <div className="summary-icon expense-icon">
                  <ArrowUpRight size={20} />
                </div>
                <span>Despesas</span>
                <strong>{moeda(totalDespesas)}</strong>
              </article>
            </section>

            <div className="section-heading">
              <div>
                <h2>Últimos lançamentos</h2>
                <p>Suas movimentações recentes</p>
              </div>
              <button className="text-button" onClick={() => setPagina("lancamentos")}>
                Ver todos
              </button>
            </div>

            <ListaTransacoes
              transacoes={historico.slice(0, 5)}
              moeda={moeda}
              excluir={excluirTransacao}
            />

            <button
              className="primary-button"
              onClick={() => setFormularioAberto(true)}
            >
              <Plus size={20} /> Novo lançamento
            </button>
          </>
        )}

        {pagina === "lancamentos" && (
          <>
            <p className="eyebrow">MOVIMENTAÇÕES</p>
            <h1>Seus lançamentos</h1>
            <p className="page-description">Consulte receitas e despesas registradas.</p>
            <ListaTransacoes
              transacoes={historico}
              moeda={moeda}
              excluir={excluirTransacao}
            />
            <button className="primary-button" onClick={() => setFormularioAberto(true)}>
              <Plus size={20} /> Novo lançamento
            </button>
          </>
        )}

        {pagina === "relatorios" && (
          <>
            <p className="eyebrow">ANÁLISE FINANCEIRA</p>
            <h1>Relatórios</h1>
            <p className="page-description">Resumo de todas as movimentações registradas.</p>

            <section className="report-card">
              <span>Total de receitas</span>
              <strong className="income-text">{moeda(totalReceitas)}</strong>
            </section>
            <section className="report-card">
              <span>Total de despesas</span>
              <strong className="expense-text">{moeda(totalDespesas)}</strong>
            </section>
            <section className="report-card">
              <span>Saldo acumulado</span>
              <strong>{moeda(saldo)}</strong>
            </section>
            <section className="report-card">
              <span>Quantidade de lançamentos</span>
              <strong>{transacoes.length}</strong>
            </section>
          </>
        )}

        {pagina === "ajustes" && (
          <>
            <p className="eyebrow">PREFERÊNCIAS</p>
            <h1>Ajustes</h1>
            <section className="report-card">
              <strong>Armazenamento local</strong>
              <p>Os lançamentos ficam no banco de dados deste navegador.</p>
            </section>
            <section className="report-card">
              <strong>Dados registrados</strong>
              <p>{transacoes.length} lançamento(s) armazenados.</p>
            </section>
            <p className="privacy-note">
              Evite limpar os dados do navegador sem antes ter uma cópia de segurança.
            </p>
          </>
        )}

        {mensagem && (
          <p className="status-message" role="status">{mensagem}</p>
        )}
      </main>

      <nav className="bottom-nav">
        <NavItem
          ativo={pagina === "inicio"}
          icone={<House size={21} />}
          texto="Início"
          clicar={() => setPagina("inicio")}
        />
        <NavItem
          ativo={pagina === "lancamentos"}
          icone={<ReceiptText size={21} />}
          texto="Lançamentos"
          clicar={() => setPagina("lancamentos")}
        />
        <NavItem
          ativo={pagina === "relatorios"}
          icone={<ChartNoAxesCombined size={21} />}
          texto="Relatórios"
          clicar={() => setPagina("relatorios")}
        />
        <NavItem
          ativo={pagina === "ajustes"}
          icone={<Settings size={21} />}
          texto="Ajustes"
          clicar={() => setPagina("ajustes")}
        />
      </nav>

      {formularioAberto && (
        <div className="modal-backdrop" onClick={() => setFormularioAberto(false)}>
          <section
            className="form-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="form-title"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="modal-heading">
              <div>
                <p className="eyebrow">NOVA MOVIMENTAÇÃO</p>
                <h2 id="form-title">Novo lançamento</h2>
              </div>
              <button
                className="icon-button"
                aria-label="Fechar formulário"
                onClick={() => setFormularioAberto(false)}
              >
                <X size={21} />
              </button>
            </div>

            <form className="transaction-form" onSubmit={salvarTransacao}>
              <label>
                Tipo
                <select
                  value={tipo}
                  onChange={(event) => setTipo(event.target.value as "receita" | "despesa")}
                >
                  <option value="despesa">Despesa</option>
                  <option value="receita">Receita</option>
                </select>
              </label>

              <label>
                Descrição
                <input
                  value={descricao}
                  onChange={(event) => setDescricao(event.target.value)}
                  placeholder="Ex.: Supermercado ou salário"
                  required
                />
              </label>

              <label>
                Valor (R$)
                <input
                  type="text"
                  inputMode="decimal"
                  value={valor}
                  onChange={(event) => setValor(event.target.value)}
                  placeholder="0,00"
                  required
                />
              </label>

              <label>
                Categoria
                <select value={categoria} onChange={(event) => setCategoria(event.target.value)}>
                  <option>Alimentação</option>
                  <option>Transporte</option>
                  <option>Moradia</option>
                  <option>Saúde</option>
                  <option>Educação</option>
                  <option>Lazer</option>
                  <option>Contas</option>
                  <option>Salário</option>
                  <option>Renda extra</option>
                  <option>Compras</option>
                  <option>Outros</option>
                </select>
              </label>

              <label>
                Data
                <input
                  type="date"
                  value={data}
                  onChange={(event) => setData(event.target.value)}
                  required
                />
              </label>

              <button className="primary-button" type="submit">
                Salvar lançamento
              </button>
            </form>
          </section>
        </div>
      )}
    </div>
  );
}

function ListaTransacoes({
  transacoes,
  moeda,
  excluir,
}: {
  transacoes: Transacao[];
  moeda: (valor: number) => string;
  excluir: (id?: number) => Promise<void>;
}) {
  if (transacoes.length === 0) {
    return (
      <div className="empty-state">
        <Wallet size={30} />
        <strong>Nenhum lançamento ainda</strong>
        <p>Seus registros aparecerão aqui.</p>
      </div>
    );
  }

  return (
    <div className="transaction-list">
      {transacoes.map((t) => (
        <article className="transaction-item" key={t.id}>
          <div className={`transaction-icon ${t.tipo === "receita" ? "income-icon" : "expense-icon"}`}>
            {t.tipo === "receita" ? <ArrowDownLeft size={20} /> : <ArrowUpRight size={20} />}
          </div>
          <div className="transaction-info">
            <strong>{t.descricao}</strong>
            <span>{t.categoria} · {t.data.split("-").reverse().join("/")}</span>
          </div>
          <div className="transaction-right">
            <strong className={t.tipo === "receita" ? "income-text" : "expense-text"}>
              {t.tipo === "receita" ? "+" : "−"}{moeda(t.valor)}
            </strong>
            <button
              className="delete-button"
              aria-label={`Excluir ${t.descricao}`}
              onClick={() => excluir(t.id)}
            >
              <Trash2 size={15} />
            </button>
          </div>
        </article>
      ))}
    </div>
  );
}

function NavItem({
  ativo,
  icone,
  texto,
  clicar,
}: {
  ativo: boolean;
  icone: React.ReactNode;
  texto: string;
  clicar: () => void;
}) {
  return (
    <button
      className={`nav-item ${ativo ? "nav-item-active" : ""}`}
      onClick={clicar}
      aria-current={ativo ? "page" : undefined}
    >
      {icone}
      <span>{texto}</span>
    </button>
  );
}

export default App;
