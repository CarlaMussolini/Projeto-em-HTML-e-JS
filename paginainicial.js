const redirencionar = () => {
  window.location.href = "cadastro.html";
};
const tabela = () => {
  // usuario.push({
  //   nome: nome.value,
  //   email: email.value,
  //   data: data.value,
  //   cargo: select_do_cargo.value,
  // });
  window.location.href = "tabela.html";
};

const enviar = document.getElementById("enviar");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const data = document.getElementById("data");
const select = document.getElementById("select");
const select_do_cargo = document.getElementById("select_do_cargo");
let usuario = [];

console.log(usuario);

// enviar.addEventListener("click", function (e) {
//   // e.preventDefault();

// });

// enviar(nome, email, data, cargo) {
//   var tb = document.getElementById("tabela");
//   var quantidadelinhas = tb.rows;
//   var linha = tb.insertRow(quantidadelinhas);

//   var cellcodigo = linha.insertCell(0);
//   var cellcodigoNome = linha.insertCell(1);
//   var cellcodigoEmail = linha.insertCell(2);
//   var cellcodigoData = linha.insertCell(3);
//   var cellcodigoCargo = linha.insertCell(4);

//   cellcodigo.innerHTML = quantidadelinhas;
//   cellcodigoNome.innerHTML = nome;
//   cellcodigoEmail.innerHTML = email;
//   cellcodigoData.innerHTML = data;
//   cellcodigoCargo.innerHTML = cargo;
// }

// const select = document.getElementById("select");
// for (var i = 1; i <= 31; i++) {
//   const option = document.createElement("option");
//   option.value = i;
//   option.text = i;
//   select.appendChild(option);
// }
