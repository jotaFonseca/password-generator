# 🔐 Gerador de Senhas

## 📝 Sobre o Projeto
Um aplicativo web para gerar senhas seguras e personalizadas, com uma interface de registro integrada. Desenvolvido com tecnologias web modernas e boas práticas de programação.

## ✨ Funcionalidades

- ⚙️ **Personalização de Senha**
  - Escolha o comprimento da senha
  - Inclua letras maiúsculas e minúsculas
  - Adicione números
  - Insira símbolos especiais
- 📋 **Copiar com Um Clique**
- 🎨 **Interface Responsiva**
- 📝 **Formulário de Registro**
- ✅ **Feedback Visual**

## 🛠️ Tecnologias

- ![HTML5](https://img.shields.io/badge/-HTML5-E34F26?style=flat&logo=html5&logoColor=white)
- ![CSS3](https://img.shields.io/badge/-CSS3-1572B6?style=flat&logo=css3&logoColor=white)
- ![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
- ![Google Fonts](https://img.shields.io/badge/-Google%20Fonts-4285F4?style=flat&logo=google&logoColor=white)

## 🚀 Como Usar

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/password-generator.git
```

2. **Abra o projeto**
```bash
cd password-generator
code .  # Para abrir no VS Code
```

3. **Execute o aplicativo**
   - Abra o `index.html` em seu navegador
   - Ou use a extensão Live Server no VS Code

## 💻 Estrutura do Código

```plaintext
password-generator/
│
├── src/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── script.js
│   └── img/
│       └── form-bg.png
│
├── index.html
└── README.md
```

## 🔍 Principais Recursos do Código

```javascript
// Geração de caracteres aleatórios
const getLetterLowerCase = () => String.fromCharCode(Math.floor(Math.random() * 26) + 97);
const getLetterUpperCase = () => String.fromCharCode(Math.floor(Math.random() * 26) + 65);
const getNumber = () => Math.floor(Math.random() * 10).toString();
```

## 🎯 Melhorias Futuras

- [ ] Medidor de força da senha
- [ ] Tema escuro
- [ ] Salvamento de preferências
- [ ] Validação avançada do formulário
- [ ] Exportação de senhas em diferentes formatos

## 📸 Preview

![Preview do Projeto](./src/img/preview-password-generator.jpg)

## 🤝 Contribuindo

1. Faça um Fork do projeto
2. Crie sua Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a Branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

### 📊 Status do Projeto
![Status](https://img.shields.io/badge/Status-Pronto%20para%20Uso-brightgreen)

---

⌨️ Desenvolvido por João Paulo Araújo

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white)](https://linkedin.com/in/joaofonsecaraujo)