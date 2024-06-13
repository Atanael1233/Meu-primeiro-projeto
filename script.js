function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //Substuir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem Light
    img.setAttribute("src", "./assets/profile-black.jpg")

    img.setAttribute(
      "alt",
      "Foto de Atanael Silva, usando óculos e camisa preta e fundo branco"
    )
  } else {
    // se tiver sem a Light mode, manter a imagem normal
    img.setAttribute("src", "./assets/profile-light.jpg")
    
    img.setAttribute(
      "alt",
      "Foto de Atanael Silva, usando óculos e camisa branca, barba e fundo branco"
    )
  }
}
