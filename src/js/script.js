//  JAVASCRIPT

// Exibição de entrada ==========================
alert("-+-+-+-+- Bem-vindo(a) ao projeto Fluxo Seguro! -+-+-+-"); // Exibe a mensagem de boas-vindas

// Perguntar o nome do usuário e adicionar na página principal
let nome = prompt("Olá! Qual o seu nome?");

// Verifica se o usuário digitou o nome
if (nome === "" || nome === null) {
  alert("Por favor, digite o seu nome!");

  // Pede o nome novamente, caso o usuário não tenha digitado nada
  nome = prompt("Qual o seu nome?");
}

// Estilização da mensagem na página principal
let textoHome = document.getElementById("nomeUsuario");

textoHome.innerHTML = `
  <span style="color: white;">
    Bem-vindo(a), 
  </span>
  <span style="color: #06dffb;">
    ${nome}
  </span>
  <span style="color: white;">
    ao
  </span>
  `;

textoHome.style.margin = "0";
textoHome.style.fontSize = "34px";
textoHome.style.fontWeight = "700";
textoHome.style.animation = "aparecer 0.8s ease forwards";




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

  // Verifica se a pessoa digitou nos campos do formulário
  if (nome === "" || email === "" || assunto === "" || mensagem === "") {
    alert(`${nome}, alguns dados estão faltando. Por favor, preencha todos os dados!`);
    enviar.preventDefault(); // Impede de enviar / Cancela

  // Caso esteja tudo preenchido envia a mensagem de confirmação
  } else {
    alert(`Obrigado(a), ${nome}! A equipe Core recebeu sua mensagem. Entraremos em contato em breve.`)
  }
});

// =======================================================================

// Formulário Sugestão
let formularioSugestao = document.getElementById("formularioSugestao");

formularioSugestao.addEventListener("submit", function (enviar) {
  let nome = document.getElementById("sugestao-nome").value;
  let email = document.getElementById("sugestao-email").value;
  let melhoria = document.getElementById("tipo-melhoria").checked;
  let problema = document.getElementById("tipo-problema").checked;
  let mensagem = document.getElementById("sugestao-mensagem").value;

  if (nome === "" || email === "" || mensagem === "" || (melhoria === false && problema === false)) { // Melhoria e problema verifica se um ou outro está marcado
    alert(`${nome}, alguns dados estão faltando. Por favor, preencha todos os dados!`);
    enviar.preventDefault();

  } else {
    alert(`Obrigado(a), ${nome}! A equipe Core recebeu sua mensagem. Agradecemos a sua sugestão!`)
  }
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
        "./src/assets/img/secao_prototipo/imagem3.png"
    ];

    const legendas = [
        "Alagamentos urbanos",
        "Tecnologia de monitoramento",
        "Prevenção e segurança"
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