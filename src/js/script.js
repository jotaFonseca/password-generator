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

const generatePassword = (
  getLetterLowerCase,
  getLetterUpperCase,
  getNumber,
  getSymbols
) => {
  let password = "";

  const passwordLength = 10;

  const generators = [
    getLetterLowerCase,
    getLetterUpperCase,
    getNumber,
    getSymbols,
  ];

  for (i = 0; i < passwordLength; i = i + generators.length) {
    generators.forEach(() => {
      const randomValue =
        generators[Math.floor(Math.random() * generators.length)]();

      password += randomValue;
    });
  }
  password = password.slice(0, passwordLength);

  generatedElement.style.display = "block";
  generatedElement.querySelector("h4").innerText = password;
};

// Eventos
generateButton.addEventListener("click", () => {
  generatePassword(
    getLetterLowerCase,
    getLetterUpperCase,
    getNumber,
    getSymbols
  );
});
