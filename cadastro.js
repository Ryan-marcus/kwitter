function cadastrar() {
   var nome = document.getElementById('nome').value;
   var email = document.getElementById('email').value;
   var senha = document.getElementById('senhaCad').value;

   if (email_ck(email)) {
    alert('email já cadastrado por favor utilize outro.')
    return
   }
   var cadastros = JSON.parse(localStorage.getItem('cadastros')) || []
   cadastros.push({nome:nome,email:email,senha:senha})
   localStorage.setItem('cadatros',JSON.stringify(cadastros))
   alert('cadastro realizado com sucesso')
   limparFormulario()
}
function email_ck(email) {
    var cadastros = JSON.parse(localStorage.getItem('cadastros')) || []
    return cadastros.some(cadastro => cadastro.email === email)
}
function limparFormulario() {
    document.getElementById('nome').value = ''
    document.getElementById('email').value = ''
    document.getElementById('senhaCad').value = ''
}