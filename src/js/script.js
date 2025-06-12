// Seleção de Elementos
const generateButton = document.querySelector("#generate-password");
const generatedElement = document.querySelector("#generated-password");
// Funções
const getLetterLowerCase = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

const getLetterUpperCase = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

getNumber = () => {
  return Math.floor(Math.random() * 10).toString();
};

getSymbols = () => {
  const symbols = "[]{}/;:,.`~!@#$%^&*()-+=_";
  return symbols[Math.floor(Math.random() * symbols.length)];
};

// Eventos
generateButton.addEventListener("click", () => {
  console.log("teste");
});
