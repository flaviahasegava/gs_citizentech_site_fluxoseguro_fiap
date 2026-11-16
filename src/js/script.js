//  JAVASCRIPT

// Exibição de entrada ==========================
// Mensagem de boas-vindas (Entrada)
async function boasVindas() {
  await Swal.fire({
    // await espera o usuário clicar em "Conhecer"
    theme: "dark",
    title:
      'Bem-vindo(a) ao FLUXO<br><span style="color: #06dffb;"> SEGURO</span>!',
    text: "Conheça como funciona o projeto feito para a Global Solution (CitizenTech) da FIAP.",
    confirmButtonColor: "#06335f",
    confirmButtonText: "Conhecer",
  });

  // Pergunta o nome do usuário e adiciona o nome em cima de "FLUXO SEGURO"
  const { value: nome } = await Swal.fire({
    theme: "dark",
    input: "text",
    inputLabel: "Olá! Qual o seu nome?",
    inputPlaceholder: "Digite o seu nome...",
    allowOutsideClick: false, // Não fecha clicando fora
    allowEscapeKey: false, // Não fecha com esc
    confirmButtonColor: "#06335f",
    inputValidator: (valor) => {
      if (valor.trim() === "") {
        // Se o valor estiver vazio é pedido o nome novamente / trim tira os espaços colocado no começo e final do nome
        return "Por favor, digite o seu nome!";
      }
    },
  });

  // Estilização do nome do usuário na página principal
  let textoHome = document.getElementById("nomeUsuario");

  textoHome.innerHTML = `
    <span style="color: white;">Bem-vindo(a), </span>
    <span style="color: #06dffb;">${nome}</span>
    <span style="color: #fff;"> ao</span>
  `;

  textoHome.style.margin = "0";
  textoHome.style.fontSize = "34px";
  textoHome.style.fontWeight = "700";
  textoHome.style.animation = "aparecer 0.8s ease forwards";
}

boasVindas();

// Formulários ==========================

// Formulário Contato
// A variável formularioContato recebe o elemento HTML que tem o id formularioContato
let formularioContato = document.getElementById("formularioContato");

// Verifica se o usuário clicou no botão enviar sem preencher tudo e mostra um alerta
formularioContato.addEventListener("submit", function (enviar) {
  // Cria as variáveis para receber os IDs e o valor de cada campo do formulário
  let nome = document.getElementById("contato-nome").value.trim(); // Nome
  let email = document.getElementById("contato-email").value.trim(); // E-mail
  let assunto = document.getElementById("contato-assunto").value.trim(); // Assunto
  let mensagem = document.getElementById("contato-mensagem").value.trim(); // Mensagem

  // Verifica se o usuário deixou algum campo vazio
  if (nome !== "" && email !== "" && assunto !== "" && mensagem !== "") {
    // Usuário preencheu tudo corretamente
    Swal.fire({
      theme: "dark",
      icon: "success",
      title: `Obrigado(a), ${nome}!`,
      text: "A equipe Core recebeu sua mensagem. Entraremos em contato em breve.",
    });

    formularioContato.reset(); // Limpa os campos

    // Campo vazio / Alerta de dados faltando
  } else {
    Swal.fire({
      theme: "dark",
      icon: "error",
      title: "Dados faltando",
      text: `${nome}, por favor, preencha todos os dados!`,
    });
  }

  enviar.preventDefault(); // preventDefault -> Não envia o formulário e não recarrega a página
});

// =======================================================================

// Formulário Sugestão
let formularioSugestao = document.getElementById("formularioSugestao");

formularioSugestao.addEventListener("submit", function (enviar) {
  let nome = document.getElementById("sugestao-nome").value.trim();
  let email = document.getElementById("sugestao-email").value.trim();
  let melhoria = document.getElementById("tipo-melhoria").checked;
  let problema = document.getElementById("tipo-problema").checked;
  let mensagem = document.getElementById("sugestao-mensagem").value.trim();

  // Verifica se o usuário deixou algum campo vazio
  if (nome !== "" && email !== "" && mensagem !== "" && (melhoria || problema)) {
    // Usuário preencheu tudo corretamente
    Swal.fire({
      theme: "dark",
      icon: "success",
      title: `Obrigado(a), ${nome}!`,
      text: "A equipe Core recebeu sua mensagem. Entraremos em contato em breve.",
    });

    formularioContato.reset(); // Limpa os campos

    // Campo vazio / Alerta de dados faltando
  } else {
    Swal.fire({
      theme: "dark",
      icon: "error",
      title: "Dados faltando",
      text: `${nome}, por favor, preencha todos os dados!`,
    });
  }

  enviar.preventDefault();
});

// Footer ==========================

// Ano automático no footer
// Variável para receber o ano atual
let ano = document.getElementById("ano");
ano.innerText = new Date().getFullYear(); // Adiciona o ano atual na variável ano / Date() pega os dados atuais do relógio do computador e getFullYear() serve pra mostrar apenas o ano

// SLIDESHOW

(function () {
  const imagens = [
    "./src/assets/img/secao_prototipo/imagem1.png",
    "./src/assets/img/secao_prototipo/imagem2.png",
    "./src/assets/img/secao_prototipo/imagem3.png",
  ];

  const legendas = [
    "Alagamentos urbanos",
    "Tecnologia de monitoramento",
    "Prevenção e segurança",
  ];

  let indice = 0;

  const imagemSlide = document.getElementById("imagem-slideshow");
  const legendaSlide = document.getElementById("legenda-slideshow");

  function mostrarSlide() {
    imagemSlide.src = imagens[indice];
    legendaSlide.textContent = legendas[indice];
  }

  function proximoSlide() {
    indice++;
    if (indice >= imagens.length) {
      indice = 0;
    }
    mostrarSlide();
  }

  function anteriorSlide() {
    indice--;
    if (indice < 0) {
      indice = imagens.length - 1;
    }
    mostrarSlide();
  }

  document.getElementById("proximo").addEventListener("click", proximoSlide);
  document.getElementById("anterior").addEventListener("click", anteriorSlide);

  mostrarSlide();
})();
