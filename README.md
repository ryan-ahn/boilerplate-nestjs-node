# Ryan's Nestjs Fast Starter


![Author](https://img.shields.io/badge/Author-ryan-orange.svg)
![License](https://img.shields.io/badge/License-MIT-blue.svg)
![Last Commit](https://img.shields.io/github/last-commit/ryan-ahn/npm-nestjs-starter)


## Setting Stack
- Environment : node
- Framework : nestjs
- database : mySQL, mongoDB
- orm : typeORM, mongoose
- type : typescript


## Project Start
1. Install nestjs
```
$ npm install -g @nestjs/cli
```
2. Install Project
```
$ npx type-nestjs-starter
```
3. server 시작하기
```
$ npm run start:dev
```


## Code Structure
- Test(jest)
- Root(src)
- &nbsp;⎣&nbsp;**config** - configuration <br/>
- &nbsp;⎣&nbsp;**providers** - aws, cache, database, elasticsearch 등 <br/>
- &nbsp;⎣&nbsp;**auth** - 인증 관련 <br/>
- &nbsp;⎣&nbsp;**common** - 공통 모듈 등 <br/>
- &nbsp;⎣&nbsp;**modules** - 서비스 모듈 등 <br/>
