const nome = document.querySelector("#nome")
const idade = document.querySelector("#idade")
const raca = document.querySelector("#raca")

const formulario = document.querySelector("#formulario")

const resultado = document.querySelector("#resultado")

formulario.addEventListener("submit", (e)=>{
    e.preventDefault()
    const racaSelecionada = document.querySelector('input[name="raca"]:checked')
    const formulario = {
        nome: nome.value,
        idade: idade.value,
        raca: raca.value || "Raça não informada"
}

localStorage.setItem("informacoes", JSON.stringify(formulario))

resultado.innerHTML = `
<h2>Nome: ${formulario.nome}</h2>
<p>Idade: ${formulario.idade}</p>
<p>Raca: ${formulario.raca}</p>
`
})

function carregarPagina(){
    const lista_do_localStorage = JSON.parse(localStorage.getItem("informacoes")) 
    resultado.innerHTML = `
    <h2>Nome: ${formulario.nome}</h2>
<p>Idade: ${formulario.idade}</p>
<p>Raca: ${formulario.raca}</p>
`
}
