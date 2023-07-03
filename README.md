Setup para apps Node.js (TypeScript, ESLint, Jest, Babel) | Code/Drops #33
https://www.youtube.com/watch?v=rCeGfFk-uCk

yarn init -y
yarn add typescript -D
yarn tsc --init
yarn add express
yarn add @types/express -D
yarn add ts-node-dev -D
yarn add tsconfig-paths -D
yarn ts-node-dev src/server.ts
yarn add jest -D
yarn jest --init
yarn add ts-jest -D
yarn add @types/jest
yarn add -D @babel/cli @babel/core @babel/node @babel/preset-env @babel/preset-typescript babel-plugin-module-resolver