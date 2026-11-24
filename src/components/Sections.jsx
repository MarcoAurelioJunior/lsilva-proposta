import { empresa, imagens, sobre, valores, servicos } from "../data/config";
import Img from "./Img";

// Seções simples e estáticas, juntas em um arquivo só para facilitar a leitura.

export function Servicos({ onAbrirForm }) {
  return (
    <section id="servicos" className="section section-clara">
      <div className="container">
        <p className="eyebrow">Serviços</p>
        <h2>Como podemos ajudar</h2>
        <div className="servicos-grid">
          {servicos.map((s) => (
            <article key={s.titulo} className="servico">
              <span className="servico-icone">{s.icone}</span>
              <h3>{s.titulo}</h3>
              <p>{s.texto}</p>
            </article>
          ))}
        </div>
        <div className="encontre">
          <div>
            <h3>Não achou o que procurava?</h3>
            <p>Conte o que você precisa e encontramos o imóvel para você.</p>
          </div>
          <button className="btn btn-ouro" onClick={() => onAbrirForm("encontre")}>Encontramos para você</button>
        </div>
      </div>
    </section>
  );
}

export function Empresa() {
  return (
    <section id="empresa" className="section">
      <div className="container sobre-grid">
        <div className="sobre-foto">
          <Img src={imagens.empresa} alt={empresa.nome} />
        </div>
        <div>
          <p className="eyebrow">A empresa</p>
          <h2>{empresa.nome}</h2>
          {sobre.map((p) => <p key={p} className="texto-sobre">{p}</p>)}
          <ul className="valores">
            {valores.map((v) => <li key={v}>{v}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function Contato({ onAbrirForm }) {
  return (
    <section id="contato" className="section section-clara">
      <div className="container">
        <div className="contato-caixa">
          <p className="eyebrow">Contato</p>
          <h2>Fale com a L Silva</h2>
          <ul className="contatos">
            {empresa.telefones.map((t) => <li key={t}>📞 {t}</li>)}
            <li>✉️ {empresa.email}</li>
            <li>📍 {empresa.endereco}</li>
          </ul>
          <div className="botoes">
            <a className="btn btn-ouro" href={`https://wa.me/${empresa.whatsapp}`} target="_blank" rel="noreferrer">
              Chamar no WhatsApp
            </a>
            <button className="btn btn-contorno" onClick={() => onAbrirForm("contato")}>
              Enviar mensagem
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <strong>{empresa.nome}</strong>
      <p>{empresa.creci} · {empresa.endereco}</p>
      <p>© {new Date().getFullYear()} · Site de demonstração</p>
    </footer>
  );
}

export function WhatsAppFlutuante() {
  const msg = encodeURIComponent("Olá! Vim pelo site e gostaria de mais informações.");
  return (
    <a className="whats-flutuante" href={`https://wa.me/${empresa.whatsapp}?text=${msg}`} target="_blank" rel="noreferrer" aria-label="WhatsApp">
      💬
    </a>
  );
}
