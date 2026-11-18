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
    confirmButtonColor: "#1f5d9b",
    confirmButtonText: "Conhecer",
  });

  // Pergunta o nome do usuário e adiciona o nome em cima de "FLUXO SEGURO"
  const { value: nome } = await Swal.fire({
    theme: "dark",
    input: "text",
    title: "Olá!",
    text: "Qual o seu nome?",
    inputPlaceholder: "Digite o seu nome...",
    allowOutsideClick: false, // Não fecha clicando fora
    allowEscapeKey: false, // Não fecha com esc
    confirmButtonColor: "#1f5d9b",
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



// SLIDESHOW ==========================
(function () {
  const imagens = [
    "./src/assets/img/secao_prototipo/imagem1.png",
    "./src/assets/img/secao_prototipo/imagem2.png",
    "./src/assets/img/secao_prototipo/imagem3.png",
  ];

  const titulos = [
    "ALAGAMENTOS URBANOS",
    "TECNOLOGIA QUE MONITORA",
    "PREVENÇÃO QUE SALVA VIDAS",
  ];

  let indice = 0;

  const imagemSlide = document.getElementById("imagem-slideshow");
  const tituloSlide = document.getElementById("titulo-slideshow");
  const indicadores = document.getElementById("indicadores");
  const botaoProximo = document.getElementById("proximo");
  const botaoAnterior = document.getElementById("anterior");

  // Se faltar algum elemento no HTML, sai do slideshow sem quebrar o resto do script
  if (
    !imagemSlide ||
    !tituloSlide ||
    !indicadores ||
    !botaoProximo ||
    !botaoAnterior
  ) {
    console.warn("Slideshow: algum elemento não foi encontrado no HTML.");
    return;
  }

  // Criar as bolinhas automaticamente
  imagens.forEach(function (imagem, i) {
    const bolinha = document.createElement("span");

    bolinha.addEventListener("click", function () {
      indice = i;
      mostrarSlide();
    });

    indicadores.appendChild(bolinha);
  });

  // Atualizar imagem, título e bolinhas
  function mostrarSlide() {
    imagemSlide.src = imagens[indice];
    tituloSlide.textContent = titulos[indice];

    const bolinhas = indicadores.querySelectorAll("span");

    bolinhas.forEach(function (bolinha, i) {
      bolinha.classList.toggle("ativo", i === indice);
    });
  }

  // Próxima imagem
  function proximoSlide() {
    indice++;

    if (indice >= imagens.length) {
      indice = 0;
    }

    mostrarSlide();
  }

  // Imagem anterior
  function anteriorSlide() {
    indice--;

    if (indice < 0) {
      indice = imagens.length - 1;
    }

    mostrarSlide();
  }

  // Eventos das setinhas
  botaoProximo.addEventListener("click", proximoSlide);
  botaoAnterior.addEventListener("click", anteriorSlide);

  // Exibir primeira imagem
  mostrarSlide();
})();



// SLIDESHOW Tecnologia e Protótipo ==========================
function iniciarCarrossel(secao, tempo) {
  const carrossel = document.querySelector(".carrossel-" + secao);
  if (!carrossel) return;

  const faixa = carrossel.querySelector(".imagens-" + secao);
  const imagens = faixa.querySelectorAll("img");
  let atual = 0;

  // O JavaScript passa a controlar a troca das imagens.
  faixa.style.animation = "none";

  // Coloca as bolinhas abaixo do carrossel.
  const pontos = document.createElement("div");
  pontos.className = "pontos-carrossel";
  carrossel.after(pontos);

  function mostrar(numero) {
    if (numero < 0) numero = imagens.length - 1;
    if (numero >= imagens.length) numero = 0;
    atual = numero;

    faixa.style.transform = "translateX(-" + atual * 100 + "%)";

    for (let i = 0; i < imagens.length; i++) {
      pontos.children[i].setAttribute("aria-current", i === atual);
    }
  }

  // As imagens passam sozinhas até a pessoa escolher uma delas.
  const relogio = setInterval(function () {
    if (!carrossel.matches(":hover")) mostrar(atual + 1);
  }, tempo);

  function escolher(numero) {
    clearInterval(relogio);
    mostrar(numero);
  }

  function criarSeta(classe, simbolo, descricao, passo) {
    const seta = document.createElement("button");
    seta.type = "button";
    seta.className = "seta-carrossel " + classe;
    seta.textContent = simbolo;
    seta.setAttribute("aria-label", descricao);

    seta.addEventListener("click", function () {
      escolher(atual + passo);
    });

    carrossel.appendChild(seta);
  }

  criarSeta("voltar", "‹", "Imagem anterior", -1);
  criarSeta("avancar", "›", "Próxima imagem", 1);

  imagens.forEach(function (imagem, i) {
    const ponto = document.createElement("button");
    ponto.type = "button";
    ponto.setAttribute("aria-label", "Mostrar imagem " + (i + 1) + ": " + imagem.alt);

    ponto.addEventListener("click", function () {
      escolher(i);
    });

    pontos.appendChild(ponto);
  });

  mostrar(0);
}

// Ativa as setas e as 3 bolinhas do protótipo.
iniciarCarrossel("prototipo", 5000);
iniciarCarrossel("tecnologia", 4000);



// Formulários ==========================

// Formulário Contato
// A variável formularioContato recebe o elemento HTML que tem o id formularioContato
let formularioContato = document.getElementById("formularioContato");

// Verifica se o usuário clicou no botão enviar sem preencher tudo e mostra um alerta
formularioContato.addEventListener("submit", function (enviar) {
  enviar.preventDefault(); // preventDefault -> Não envia o formulário e não recarrega a página

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
      confirmButtonColor: "#1f5d9b",
    });

    formularioContato.reset(); // Limpa os campos

    // Campo vazio / Alerta de dados faltando
  } else {
    Swal.fire({
      theme: "dark",
      icon: "error",
      title: "Dados faltando",
      text: `${nome}, por favor, preencha todos os dados!`,
      confirmButtonColor: "#1f5d9b",
    });
  }
});

// =======================================================================

// Formulário Sugestão
let formularioSugestao = document.getElementById("formularioSugestao");

formularioSugestao.addEventListener("submit", function (enviar) {
  enviar.preventDefault();

  let nome = document.getElementById("sugestao-nome").value.trim();
  let email = document.getElementById("sugestao-email").value.trim();
  let melhoria = document.getElementById("tipo-melhoria").checked;
  let problema = document.getElementById("tipo-problema").checked;
  let mensagem = document.getElementById("sugestao-mensagem").value.trim();

  // Verifica se o usuário deixou algum campo vazio
  if (
    nome !== "" &&
    email !== "" &&
    mensagem !== "" &&
    (melhoria || problema)
  ) {
    // Usuário preencheu tudo corretamente
    Swal.fire({
      theme: "dark",
      icon: "success",
      title: `Obrigado(a), ${nome}!`,
      text: "A equipe Core recebeu sua mensagem. Entraremos em contato em breve.",
      confirmButtonColor: "#1f5d9b",
    });

    formularioSugestao.reset(); // Limpa os campos

    // Campo vazio / Alerta de dados faltando
  } else {
    Swal.fire({
      theme: "dark",
      icon: "error",
      title: "Dados faltando",
      text: `${nome}, por favor, preencha todos os dados!`,
      confirmButtonColor: "#1f5d9b",
    });
  }
});

// ---------------------------------------------------

// Limpar formulário (Evitar que o usuário clique sem querer no limpar)
function confirmarLimpeza(formulario) {
  // Pega o botão de limpar que está dentro do formulário
  const botaoLimpar = formulario.querySelector('button[type="reset"]');

  // Agora escuta o clique do mouse no botão, e não o evento "reset" do formulário
  botaoLimpar.addEventListener("click", function (evento) {
    evento.preventDefault(); // Cancela a limpeza automática do botão

    Swal.fire({
      title: "Tem certeza?",
      text: "Todos os dados digitados serão apagados.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#1f5d9b",
      confirmButtonText: "Sim, quero limpar",
      cancelButtonText: "Não",
    }).then((resultado) => {
      if (resultado.isConfirmed) {
        formulario.reset(); // Só limpa se o usuário clicar em "Sim"
      }
    });
  });
}

confirmarLimpeza(formularioContato);
confirmarLimpeza(formularioSugestao);

// Footer ==========================

// Ano automático no footer
// Variável para receber o ano atual
let ano = document.getElementById("ano");
ano.innerText = new Date().getFullYear(); // Adiciona o ano atual na variável ano / Date() pega os dados atuais do relógio do computador e getFullYear() serve pra mostrar apenas o ano