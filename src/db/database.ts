
import Dexie, { type Table } from "dexie";

export interface Transacao {
  id?: number;
  descricao: string;
  valor: number;
  tipo: "receita" | "despesa";
  categoria: string;
  data: string;
}

class BancoDeDados extends Dexie {
  transacoes!: Table<Transacao, number>;

  constructor() {
    super("GerenciadorFinanceiro");

    this.version(1).stores({
      transacoes: "++id, descricao, tipo, categoria, data",
    });
  }
}

export const db = new BancoDeDados();
