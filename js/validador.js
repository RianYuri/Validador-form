
/* Função Validar */
function validar() {
  // pegando o valor do nome pelos names
  var nome = document.getElementById("nome");
  var sobrenome = document.getElementById("sobrenome");
  var cpf = document.getElementById("cpf");
  var email = document.getElementById("email");
  var senha = document.getElementById("senha");
  var telefone = document.getElementById("telefone");
  var cep = document.getElementById("cep");
  var sexo = document.getElementById("sexo");
  var newsletter = document.getElementById("newsletter").checked;

  // verificar se o nome está vazio
  if (nome.value == "") {
    alert("Nome não informado");

    // Deixa o input com o focus
    nome.focus();
    // retorna a função e não olha as outras linhas
    return;
  }
  if (sobrenome.value == "") {
    alert("Sobrenome não informado");
    sobrenome.focus();
    return;
  }
  if(cpf.value==""){
    alert("Cpf não informado")
    cpf.focus();
  return;
  }
  else if
  (cpf.value ==""){
    alert("Cpf invalido");
  cpf.focus();
  return;     
} 
else{
alert("Cpf valido");
}




  





  if (email.value == "") {
    alert("E-mail não informado");
    email.focus();
    return;
  }
  else
{

  usuario = email.value.substring(0, email.value.indexOf("@"));
dominio = email.value.substring(email.value.indexOf("@")+ 1, email.value.length);
if ((usuario.length >=1) &&
(dominio.length >=3) &&
(usuario.search("@")==-1) &&
(dominio.search("@")==-1) &&
(usuario.search(" ")==-1) &&
(dominio.search(" ")==-1) &&
(dominio.search(".")!=-1) &&
(dominio.indexOf(".") >=1)&&
(dominio.lastIndexOf(".") < dominio.length - 1)) {
alert("email valido");
}
  if (senha.value == "") {
    alert("Senha não informada");
    senha.focus();
    return;
  }
  if (telefone.value == "") {
    alert("Telefone não informado");
    telefone.focus();
    return;
  }
  if (cep.value == "") {
    alert("CEP não informado");
    cep.focus();
    return;
  }
  if (sexo.value == "") {
    alert("CEP não informado");
    sexo.focus();
    return;
  }
  alert("Formulário enviado!");
  // envia o formulário
  //formulario.submit();
}}
