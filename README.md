# Ryan's Nestjs Fast Starter


![Author](https://img.shields.io/badge/Author-ryan-orange.svg)
![License](https://img.shields.io/badge/License-MIT-blue.svg)
![Last Commit](https://img.shields.io/github/last-commit/ryan-ahn/npm-nestjs-starter)


## Setting Stack
- Environment : node
- Framework : Nestjs
- Database : MySQL, MongoDB
- ORM, ODM : TypeORM, Mongoose
- Type : Typescript
- Lint : ESLint(airbnb)


## Project Start
1. Install Nestjs
```
$ npm install -g @nestjs/cli
```
2. Install Project
```
$ npx type-nestjs-starter my-project
$ cd my-project
```
3. Server Start
```
$ npm run start:dev
```


## Code Structure
- Root(src)
- &nbsp;⎣&nbsp;**config** - configuration <br/>
- &nbsp;⎣&nbsp;**constants** - static resource <br/>
- &nbsp;⎣&nbsp;**modules** - api controllers, services <br/>
- &nbsp;⎣&nbsp;**providers** - storage, cache, database <br/>
- &nbsp;⎣&nbsp;**utils** - connector, handler <br/>
