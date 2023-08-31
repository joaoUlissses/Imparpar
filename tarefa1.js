const usuario = {

    id: 1,

    nome: 'Marcos',

    email: 'marcos@mail.com'

}
async function obterInformacoes(objeto, callback) {
    await new Promise(resolve => setTimeout(resolve, 1000))
    callback(objeto)
}
function mostrarInformacoes(info) {
    console.log(info.id)
    console.log(info.nome)
    console.log(info.email)
}
obterInformacoes(usuario, mostrarInformacoes);