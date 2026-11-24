import { useState } from "react";
import { empresa, imagens } from "../data/config";
import Img from "./Img";

// Barra superior fixa: logo à esquerda, menu à direita.
export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);
  const fechar = () => setMenuAberto(false);

  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#inicio" className="logo" onClick={fechar}>
          <Img
            src={imagens.logo}
            alt={empresa.nome}
            className="logo-img"
            fallback={<strong className="logo-texto">{empresa.nomeCurto}</strong>}
          />
        </a>

        <button className="menu-toggle" onClick={() => setMenuAberto(!menuAberto)} aria-label="Abrir menu">
          ☰
        </button>

        <nav className={menuAberto ? "menu aberto" : "menu"}>
          <a href="#inicio" onClick={fechar}>Início</a>
          <a href="#venda" onClick={fechar}>Venda</a>
          <a href="#locacao" onClick={fechar}>Locação</a>
          <a href="#servicos" onClick={fechar}>Serviços</a>
          <a href="#empresa" onClick={fechar}>Empresa</a>
          <a href="#contato" className="menu-cta" onClick={fechar}>Contato</a>
        </nav>
      </div>
    </header>
  );
}
