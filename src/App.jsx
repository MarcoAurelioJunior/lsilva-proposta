import { useEffect, useMemo, useState } from "react";
import { imoveis } from "./data/imoveis";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Busca from "./components/Busca";
import PropertyCard from "./components/PropertyCard";
import PropertyPage from "./components/PropertyPage";
import FormModal from "./components/FormModal";
import Financiamento from "./components/Financiamento";
import { Servicos, Empresa, Contato, Footer, WhatsAppFlutuante } from "./components/Sections";

const filtrosVazios = { negocio: "", tipo: "", cidade: "", bairro: "", precoMax: "", codigo: "" };

// Uma vitrine de imóveis (usada para Venda e para Locação)
function Vitrine({ id, titulo, lista }) {
  if (lista.length === 0) return null;
  return (
    <section id={id} className="section secao-imoveis">
      <div className="container">
        <p className="eyebrow">Imóveis</p>
        <h2>{titulo} <small className="contagem">({lista.length})</small></h2>
        <div className="grid-cards">
          {lista.map((i) => <PropertyCard key={i.id} imovel={i} />)}
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const [filtros, setFiltros] = useState(filtrosVazios);
  const [formAberto, setFormAberto] = useState(null); // "encontre" | "contato"

  // ---- Rota (sem biblioteca): #/imovel/2 abre a página do imóvel 2 ----
  const [hash, setHash] = useState(window.location.hash);
  useEffect(() => {
    const atualizar = () => setHash(window.location.hash);
    window.addEventListener("hashchange", atualizar);
    return () => window.removeEventListener("hashchange", atualizar);
  }, []);

  const idDaRota = hash.match(/^#\/imovel\/(\d+)/)?.[1];
  const imovelAtual = idDaRota ? imoveis.find((i) => i.id === Number(idDaRota)) : null;

  // Ao voltar para a home por um link como "#venda", rola até a seção
  useEffect(() => {
    if (imovelAtual) return;
    const id = hash.replace("#", "");
    if (id && !id.startsWith("/")) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  }, [imovelAtual, hash]);

  const mudarFiltro = (nome, valor) => {
    setFiltros((atual) => {
      const novo = { ...atual, [nome]: valor };
      if (nome === "cidade") novo.bairro = "";
      return novo;
    });
  };

  const cidades = useMemo(() => [...new Set(imoveis.map((i) => i.cidade))].sort(), []);
  const bairros = useMemo(
    () => filtros.cidade
      ? [...new Set(imoveis.filter((i) => i.cidade === filtros.cidade).map((i) => i.bairro))].sort()
      : [],
    [filtros.cidade]
  );

  const resultado = imoveis.filter((i) => {
    if (filtros.negocio && i.negocio !== filtros.negocio) return false;
    if (filtros.tipo && i.tipo !== filtros.tipo) return false;
    if (filtros.cidade && i.cidade !== filtros.cidade) return false;
    if (filtros.bairro && i.bairro !== filtros.bairro) return false;
    if (filtros.precoMax && i.preco > Number(filtros.precoMax)) return false;
    if (filtros.codigo && !i.ref.toLowerCase().includes(filtros.codigo.toLowerCase())) return false;
    return true;
  });

  return (
    <>
      <Header />

      {imovelAtual ? (
        <PropertyPage imovel={imovelAtual} />
      ) : (
        <>
          <Hero />

          <div className="container busca-flutuante">
            <Busca
              filtros={filtros}
              cidades={cidades}
              bairros={bairros}
              onMudar={mudarFiltro}
              onLimpar={() => setFiltros(filtrosVazios)}
            />
          </div>

          {resultado.length === 0 && (
            <p className="vazio secao-imoveis">Nenhum imóvel encontrado com esses filtros.</p>
          )}
          <Vitrine id="venda" titulo="Imóveis à venda" lista={resultado.filter((i) => i.negocio === "Venda")} />
          <Vitrine id="locacao" titulo="Imóveis para locação" lista={resultado.filter((i) => i.negocio === "Locação")} />

          <Servicos onAbrirForm={setFormAberto} />
          <Financiamento />
          <Empresa />
          <Contato onAbrirForm={setFormAberto} />
        </>
      )}

      <Footer />
      <WhatsAppFlutuante />
      {formAberto && <FormModal tipo={formAberto} onFechar={() => setFormAberto(null)} />}
    </>
  );
}
