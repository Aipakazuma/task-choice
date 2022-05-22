# task-choice

取捨選択ツール

Demo: https://task-choice.it-playground.link/

# install

```bash
$ docker compose up
root@5694494a012d:/app# npm init vue@latest

Vue.js - The Progressive JavaScript Framework

✔ Project name: … task-choice
✔ Add TypeScript? … No / Yes
✔ Add JSX Support? … No / Yes
✔ Add Vue Router for Single Page Application development? … No / Yes
✔ Add Pinia for state management? … No / Yes
✔ Add Vitest for Unit Testing? … No / Yes
✔ Add Cypress for End-to-End testing? … No / Yes
✔ Add ESLint for code quality? … No / Yes
✔ Add Prettier for code formatting? … No / Yes

Scaffolding project in /app/task-choice...

Done. Now run:

  cd task-choice
  npm install
  npm run lint
  npm run dev

root@5694494a012d:/app# cd task-choice
root@5694494a012d:/app# npm install
root@5694494a012d:/app# npm lint
root@5694494a012d:/app# npm run dev -- --host 0.0.0.0 --port 80
```


# typecheck

`docker compose up` 後.

```bash
$ docker compose exec frontend /bin/bash -c "cd /app/task-choice && npm run typecheck -- -w"
```

# deploy

いつか自動化したい

```
$ docker compose exec frontend /bin/bash -c "cd /app/task-choice && npm run build"
```

`~/frontend/task-choice/dist` ディレクトリが作成されるので、生成されたディレクトリ以下をサーバへアップロードする.