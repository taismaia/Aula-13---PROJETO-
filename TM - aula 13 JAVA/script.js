// const pessoa = {
//     nome: "Taís",
//     idade: 32, 
//     sexo: "feminino",
//     profissão: "programadora"
// }

// console.log(pessoa);
// console.log(pessoa.profissão);
// console.log(pessoa.nome)






// const nome = document.querySelector("#nome")
// const idade = document.querySelector("#idade")
// const profissao = document.querySelector("#profissao")

// const formulario = document.querySelector("#formulario")

// const resultado = document.querySelector("#resultado")

// formulario.addEventListener("submit", (e)=>{
//     e.preventDefault()
//     const sexoSelecionado = document.querySelector('input[name="sexo"]: checked')
    
//     const obj = {
//         nome: nome.value,
//         idade: idade.value,
//         sexo: sexoSelecionado.value,
//         profissao: profissao.value || "Profissão não informada"
        
//     }
//     localStorage.setItem("informacoes", JSON.stringify(obj))

//     resultado.innerHTML = `
//     <h2>Nome: ${obj.nome}</h2>
//     <p>Idade: ${obj.idade}</p>
//     <p>Sexo: ${obj.sexo}</p>
//     <p>Profissão: ${obj.profissao}</p>
//     `
// })

// function carregarPagina(){
//     const obj_do_localStorage = JSON.parse(localStorage.getItem("informacoes")) 
//     resultado.innerHTML = `
//     <h2>Nome: ${obj_do_localStorage.nome}</h2>
//     <p>Idade: ${obj_do_localStorage.idade}</p>
//     <p>Sexo: ${obj_do_localStorage.sexo}</p>
//     <p>Profissão: ${obj_do_localStorage.profissao}</p>
// //     `
// }