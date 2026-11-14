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

// Estilização da mensagem na página princiapl
document.getElementById("nomeUsuario").innerHTML = `
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

document.getElementById("nomeUsuario").style.margin = "0";
document.getElementById("nomeUsuario").style.fontSize = "34px";
document.getElementById("nomeUsuario").style.fontWeight = "700";