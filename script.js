function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  // pegar a tag img
  const img = document.querySelector("#profile img")
  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    // set tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/Avatar.png")
  }
  
if (html.classList.contains("light")) {
  img.setAttribute("alt", "Foto de Matheus Albuquerque mostrando somento o olho direto na claridade")
} else {
  img.setAttribute("alt", "Foto de Matheus Albuquerque fazendo cara seria e olhando para o lado direito no quarto")
}
}
