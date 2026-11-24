import { empresa, imagens } from "../data/config";

// Banner: foto de fundo coberta por uma camada preta translúcida.
export default function Hero() {
  return (
    <section id="inicio" className="hero" style={{ backgroundImage: `url(${imagens.hero})` }}>
      <div className="hero-camada" />
      <div className="container hero-conteudo">
        <p className="eyebrow">{empresa.nome} · {empresa.creci}</p>
        <h1>
          Encontre o imóvel <em>perfeito</em> em São Roque e região
        </h1>
        <p className="hero-sub">
          Compra, venda e locação com transparência, profissionalismo e mais de 10 anos de experiência no mercado.
        </p>
        <div className="hero-botoes">
          <a className="btn btn-ouro" href="#venda">Ver imóveis</a>
          <a className="btn btn-contorno" href="#contato">Fale conosco</a>
        </div>
      </div>
    </section>
  );
}
