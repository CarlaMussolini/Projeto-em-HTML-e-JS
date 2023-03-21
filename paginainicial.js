const redirencionar = () => {
  window.location.href = "cadastro.html";
};

const tabela = () => {
  window.location.href = "tabela.html";
};

const cadastrar = document.getElementById("enviar");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const data = document.getElementById("data");
const select = document.getElementById("select");
const select_do_cargo = document.getElementById("select_do_cargo");

cadastrar.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("nome", nome.value);
  console.log("email", email.value);
  console.log("data", data.value);
  console.log("cargo", select_do_cargo.value);
});

function executar(nome, email, data, cargo) {
  var tb = document.getElementById("tabela");
  var quantidadelinhas = tb.rows;
  var linha = tb.insertRow(quantidadelinhas);

  var cellcodigo = linha.insertCell(0);
  var cellcodigoNome = linha.insertCell(1);
  var cellcodigoEmail = linha.insertCell(2);
  var cellcodigoData = linha.insertCell(3);
  var cellcodigoCargo = linha.insertCell(4);

  cellcodigo.innerHTML = quantidadelinhas;
  cellcodigoNome.innerHTML = nome;
  cellcodigoEmail.innerHTML = email;
  cellcodigoData.innerHTML = data;
  cellcodigoCargo.innerHTML = cargo;
}

// let select_do_cargo = document.querySelector("#select_do_cargo");
// let cadastrar = document.querySelector("#cadastrar");
// cadastrar.addEventListener("click", () => {
// });

// const select = document.getElementById("select");
// for (var i = 1; i <= 31; i++) {
//   const option = document.createElement("option");
//   option.value = i;
//   option.text = i;
//   select.appendChild(option);
// }
