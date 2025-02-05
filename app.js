// let body = document.querySelector("body")

// let div = document.querySelector(".divisoria")

// let div2 = document.querySelector("#divisoria2")

// let titulo1 = document.querySelector(".titulo1")
// let titulo2 = document.querySelector(".titulo2")

// titulo1.innerText = "Ei, ei olha o som"
// titulo2.innerText = "Ei, ei olha o som"

// let body = document.querySelector("body")
// let titulo = document.querySelector("h1")
// titulo.innerText = "Oi pessoas"

// body.innerHTML += `
//     <table class="table table-primary">
//   <thead>
//     <tr>
//       <th scope="col">#</th>
//       <th scope="col">First</th>
//       <th scope="col">Last</th>
//       <th scope="col">Handle</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <th scope="row">1</th>
//       <td>Mark</td>
//       <td>Otto</td>
//       <td>@mdo</td>
//     </tr>
//     <tr>
//       <th scope="row">2</th>
//       <td>Jacob</td>
//       <td>Thornton</td>
//       <td>@fat</td>
//     </tr>
//     <tr>
//       <th scope="row">3</th>
//       <td colspan="2">Larry the Bird</td>
//       <td>@twitter</td>
//     </tr>
//   </tbody>
// </table>
// `

//Gostaria que vossas senhorias criassem uma tap p no html (Hard code) e escrevessem um pequeno texto. E com javascript, modifique o conteudo desse texto.

// let texto = document.querySelector("p")

// texto.innerText = "Mudar"

// document.getElementById("mudar").textContent = "Mudar com textContent"

//Gostaria por obséquio que vossas senhorais criem uma div e escrevam uma tag HTML com uma lista ordenada do conteúdo que vocês mais gostaram do curso até agora.

// let div = document.querySelector("div")

// div.innerHTML = `
//     <ol>
//         <li>HTML & CSS</li>
//         <li>Bootstrap</li>
//         <li>JavaScript</li>
//         <li>DOM</li>
//     </ol>

// `

// let estilo = document.querySelector("p")

// estilo.classList.add("tituloAzul")

let section = document.querySelector("section")
let userButton = document.querySelector("#usuario")
let body = document.querySelector("body")

function gerarModalCriarUsuario() {
    section.classList.add("sumir")
    body.innerHTML = `
     <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Endereço de email</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Seu email">
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Senha</label>
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Senha">
            </div>
            <button type="submit" class="btn btn-primary">Enviar</button>
    </form>
`
}

userButton.addEventListener("click", gerarModalCriarUsuario)

// button.addEventListener("click", fecharModal)
