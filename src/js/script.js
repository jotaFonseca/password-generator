// Seleção de Elementos
const generateButton = document.querySelector("#generate-password");
const generatedElement = document.querySelector("#generated-password");
const openCloseGeneratorButton = document.querySelector(
  "#open-generate-password"
);
const generatePasswordContainer = document.querySelector("#generate-options");
const lengthInput = document.querySelector("#length");
const lettersInput = document.querySelector("#letters");
const numbersInput = document.querySelector("#numbers");
const symbolsInput = document.querySelector("#symbols");
const copyPasswordButton = document.querySelector("#copy-password");

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

  const passwordLength = +lengthInput.value;

  const generators = [];

  if (lettersInput.checked) {
    generators.push(getLetterLowerCase, getLetterUpperCase);
  }

  if (numbersInput.checked) {
    generators.push(getNumber);
  }

  if (symbolsInput.checked) {
    generators.push(getSymbols);
  }

  if (generators.length === 0) {
    return;
  }

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

openCloseGeneratorButton.addEventListener("click", () => {
  generatePasswordContainer.classList.toggle("hide");
});

copyPasswordButton.addEventListener('click', (e) => {
  e.preventDefault()

  const password = generatedElement.querySelector('h4').innerText

  navigator.clipboard.writeText(password).then(() => {
    copyPasswordButton.innerText = 'Senha copiada com sucesso!'

    setTimeout(() => {
      copyPasswordButton.innerText = 'Copiar'
    }, 3000)
  })
})
