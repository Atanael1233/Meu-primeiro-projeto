function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //Substuir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem Light
    img.setAttribute("src", ".assets/avatar-light.png")

    img.setAttribute(
      "alt",
      "Foto do Mayk Brito sorrido, usando óculos escuro e camisa preta e fundo azul claro"
    )
  } else {
    // se tiver sem a Light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
    
    img.setAttribute(
      "alt",
      "Foto do Mayk Brito sorrido, usando óculos e camisa preta, barba e fundo amarelo"
    )
  }
}
