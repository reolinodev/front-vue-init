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
