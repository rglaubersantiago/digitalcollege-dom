// Seletor de id.
// let nome = document.querySelector("#teste")

// Seletor de tag.
let nome2 = document.querySelector("h1")

// Inserir HTML utilizando javascript.
// nome.innerHTML = `
//     <h1>Olá Mundo!</h1>
// `

// Inserir texto utilizando javascript.
nome2.innerText = "O marcão é o brabo que vai pagar uma pizza pra todo mundo."

// nome2.classList.remove("oiSom")

function changeColorToRed() {
    let classe = nome2.className // função que pega o que tá na classe.
    if(classe === "teste2") {
        //Inserir estilo utilizando javascript.
        nome2.classList.remove("teste2")
    } else {
        // Inserir estilo utilizando javascript.
        nome2.classList.add("teste2")
    }
}
