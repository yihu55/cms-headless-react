### install husky
```
npm install husky --save-dev
```

### enable git hooks
```
npx husky install
```
### to automatically have Git hooks enabled after install, edit package.json
```
{
  "scripts": {
    "prepare": "husky install"
  }
}
```

### install lint-staged for only lint the file been changed
```
npm install lint-staged --save-dev
```