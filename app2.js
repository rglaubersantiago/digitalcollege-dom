// Seletor de id.
// let nome = document.querySelector("#teste")

// Seletor de tag.
// let nome2 = document.querySelector("h1")

// Inserir HTML utilizando javascript.
// nome.innerHTML = `
//     <h1>Olá Mundo!</h1>
// `

// Inserir texto utilizando javascript.
// nome2.innerText = "O marcão é o brabo que vai pagar uma pizza pra todo mundo."

// nome2.classList.remove("oiSom")

// function changeColorToRed() {
//     let classe = nome2.className // função que pega o que tá na classe.
//     if(classe === "teste2") {
//         //Inserir estilo utilizando javascript.
//         nome2.classList.remove("teste2")
//     } else {
//         // Inserir estilo utilizando javascript.
//         nome2.classList.add("teste2")
//     }
// }

// *** Tela de Login ***

const usuarios = [
    {
        id: 1,
        name: "Alice Smith",
        email: "alice.smith@example.com",
        password: "teste",
        age: 25,
        isActive: true,
    },
    {
        id: 2,
        name: "Bob Johnson",
        email: "bob.johnson@example.com",
        password: "teste2",
        age: 32,
        isActive: false,
    },
    {
        id: 3,
        name: "Charlie Brown",
        email: "charlie.brown@example.com",
        password: "teste3",
        age: 28,
        isActive: true,
    },
    {
        id: 4,
        name: "Diana Ross",
        email: "diana.ross@example.com",
        password: "teste4",
        age: 30,
        isActive: true,
    },
    {
        id: 5,
        name: "Ethan Hunt",
        email: "ethan.hunt@example.com",
        password: "teste5",
        age: 35,
        isActive: false,
    },
    {
        id: 6,
        name: "Fiona Gallagher",
        email: "fiona.gallagher@example.com",
        password: "teste6",
        age: 29,
        isActive: true,
    },
    {
        id: 7,
        name: "George Michael",
        email: "george.michael@example.com",
        password: "teste7",
        age: 31,
        isActive: false,
    },
    {
        id: 8,
        name: "Hannah Baker",
        email: "hannah.baker@example.com",
        password: "teste8",
        age: 27,
        isActive: true,
    },
    {
        id: 9,
        name: "Ian Somerhalder",
        email: "a",
        password: "teste9",
        age: 33,
        isActive: true,
    },
    {
        id: 10,
        name: "Jane Doe",
        email: "jane.doe@example.com",
        password: "123bolinha4",
        age: 26,
        isActive: false,
    },
];

// Captura o texto que está no campo do input


function validarLogin(usuarios) {
    let email = document.querySelector("#email").value
    let senha = document.querySelector("#senha").value
    for (let index = 0; index < usuarios.length; index++) {
        if (usuarios[index].email === email && usuarios[index].password === senha && usuarios[index].isActive) {
            window.location = "dashboard.html"
            return
        }
    }
}
