import { negocios, tipos, faixasPreco } from "../data/config";

// Painel de busca. Recebe os filtros e a função que atualiza um por vez.
export default function Busca({ filtros, cidades, bairros, onMudar, onLimpar }) {
  const Campo = ({ rotulo, nome, vazio, children }) => (
    <label className="campo">
      <span>{rotulo}</span>
      <select value={filtros[nome]} onChange={(e) => onMudar(nome, e.target.value)}>
        <option value="">{vazio}</option>
        {children}
      </select>
    </label>
  );

  return (
    <form className="busca" onSubmit={(e) => e.preventDefault()}>
      <Campo rotulo="Negociação" nome="negocio" vazio="Todas">
        {negocios.map((n) => <option key={n}>{n}</option>)}
      </Campo>
      <Campo rotulo="Tipo" nome="tipo" vazio="Todos">
        {tipos.map((t) => <option key={t}>{t}</option>)}
      </Campo>
      <Campo rotulo="Cidade" nome="cidade" vazio="Todas">
        {cidades.map((c) => <option key={c}>{c}</option>)}
      </Campo>
      <Campo rotulo="Bairro" nome="bairro" vazio={filtros.cidade ? "Todos" : "Escolha a cidade"}>
        {bairros.map((b) => <option key={b}>{b}</option>)}
      </Campo>
      <Campo rotulo="Valor até" nome="precoMax" vazio="Sem limite">
        {faixasPreco.map((f) => <option key={f.valor} value={f.valor}>{f.label}</option>)}
      </Campo>
      <label className="campo">
        <span>Referência</span>
        <input
          type="text"
          placeholder="Ex.: LS0955"
          value={filtros.codigo}
          onChange={(e) => onMudar("codigo", e.target.value)}
        />
      </label>
      <div className="busca-botoes">
        <button type="button" className="btn btn-ghost" onClick={onLimpar}>Limpar</button>
      </div>
    </form>
  );
}
