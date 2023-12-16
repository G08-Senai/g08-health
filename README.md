# VSConnect Health

Um chatBot para dúvidas e questionamentos do colaborador
Utilize tecnologia de reconhecimento facial para controle de acesso ao aplicativo, garantindo a segurança e a facilidade de uso para os usuários.
Um assistente pessoal por meio de um aplicativo que ajude os usuários a gerenciar tarefas, agendar compromissos e fornecer sugestões proativas com base nos padrões de  trabalho.
Uma seção com  recursos de bem-estar e saúde mental, com meditações guiadas, ferramentas de gerenciamento de estresse, avisos para se hidratar, realizar pausas, dicas de nutrição.
Uma assistência virtual que guie os novos funcionários pelo processo de integração, fornecendo informações importantes e facilitando a adaptação ao novo ambiente de trabalho.
Um sistema de feedback contínuo, permitindo que os funcionários forneçam e recebam feedback de colegas e líderes, promovendo uma cultura de melhoria contínua.
A assistente virtual captura o clima e temperatura e notifica o colaborador sobre altas temperaturas e chuvas fortes em suas épocas

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
