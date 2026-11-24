// Dados da imobiliária e opções dos filtros.
// Obs.: contatos, endereço, CRECI, logo e texto institucional vêm do site lsilva.com.br.
// Logo e fotos são carregadas direto dos servidores do site original (demonstração).

export const imagens = {
  logo: "https://s3.us-east-1.amazonaws.com/sgipro/600/logo_8139574ff3d36d34cbcca4f252b87e50.png",
  // Foto de fundo do banner (Pexels, uso livre). Troque pela foto que preferir.
  hero: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1920",
  empresa: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1200",
};

export const empresa = {
  nome: "L Silva Negócios Imobiliários",
  nomeCurto: "L Silva",
  creci: "CRECI 25717-J",
  telefones: ["(11) 4719-6462", "(11) 4719-6469", "(11) 9 7299-8439"],
  whatsappExibido: "(11) 9 7299-8439",
  whatsapp: "5511972998439", // só números, com 55 + DDD
  email: "lsilvaimb@gmail.com",
  endereco: "Avenida Tiradentes, 441 – Centro, São Roque – SP",
};

export const sobre = [
  "Atuando no mercado imobiliário há mais de 10 anos, a L Silva Negócios Imobiliários vem crescendo cada vez mais, seguindo valores como transparência, profissionalismo, inovação e responsabilidade com a qualidade dos serviços prestados.",
  "Contamos com equipe especializada para atender as necessidades dos nossos clientes, seja na compra e venda de imóveis, na análise e regularização de documentos, ou na locação e administração.",
];

export const valores = ["Transparência", "Profissionalismo", "Inovação", "Responsabilidade"];

export const servicos = [
  { icone: "🏡", titulo: "Compra e venda", texto: "Encontre o imóvel certo ou anuncie o seu com quem conhece a região." },
  { icone: "📑", titulo: "Documentação", texto: "Análise e regularização de documentos para negociar com segurança." },
  { icone: "🔑", titulo: "Locação e administração", texto: "Cuidamos da locação e da administração do seu imóvel." },
];

export const negocios = ["Venda", "Locação"];
export const tipos = ["Apartamento", "Casa", "Chácara", "Terreno", "Comercial"];

export const faixasPreco = [
  { label: "R$ 3.000", valor: 3000 },
  { label: "R$ 5.000", valor: 5000 },
  { label: "R$ 300 mil", valor: 300000 },
  { label: "R$ 500 mil", valor: 500000 },
  { label: "R$ 1 milhão", valor: 1000000 },
  { label: "R$ 2 milhões", valor: 2000000 },
];
