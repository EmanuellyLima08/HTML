trocaTema = () => {
  // alert("Mudei o tema e você não viu.")
  // const html = document.documentElement;

  // document.querySelector("body").style.background = "Pink"

  document.documentElement.classList.toggle("light");

  const isLight = document.documentElement.classList.contains("light");

  const imagem = isLight ? "./img/minhaFotoLight.jpeg" : "./img/minhaFoto.png";

  document.querySelector("#perfil img").setAttribute("src", imagem);

  const textDark =
    "Foto de uma menina com cabelos cacheados castanhos, pele clara, usando óculos, num ângulo diagonal, em um fundo neutro.";
  const textLight =
    "Foto de uma menina com cabelos cacheados castanhos, pele clara, usando óculos, dentro de um carro.";

  isLight
    ? document.querySelector("#perfil img").setAttribute("alt", textLight)
    : document.querySelector("#perfil img").setAttribute("alt", textDark);
};
