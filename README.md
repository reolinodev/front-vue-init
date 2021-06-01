## Technology stack

- Vue.js 2.6.10
- Vue Router
- Vuex
- Axios
- Vuex-persistedstat
- Etc
  - [BootstrapVue](https://bootstrap-vue.org/)


## Development environment

- [Chrome](https://www.google.com/intl/ko/chrome/)
- [Git](https://git-scm.com/downloads)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Node.js LTS 버전(v10.x 이상)](https://nodejs.org/ko/)
- [Vue.js Dev Tools](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)


I used vue 2 and set up eslint and prettier.
Also Made on a mobile screen basis.

## How to use
1. Download the source and open the folder with the IDE (I used vscode)
2. Open a terminal and enter the command below. The module will be installed
<pre><code>npm install --save</code></pre>
3. After installation is complete, run the server.
<pre><code>npm run serve</code></pre>

# Issue
1. Setting up eslint and prettier is not easy. For vscode, add the following syntax to setting.json
<pre><code>
 "eslint.validate": [
   "vue", "javascript", "javascriptreact", "typescript", "typescriptreact"
  ],
  "eslint.workingDirectories": [
    {"mode": "auto"}
  ],
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "editor.formatOnSave": false
  </code></pre>
