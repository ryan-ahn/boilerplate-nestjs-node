# Ryan's Nestjs Fast Starter

![Author](https://img.shields.io/badge/Author-ryan-orange.svg)
![License](https://img.shields.io/badge/License-MIT-blue.svg)
![Last Commit](https://img.shields.io/github/last-commit/ryan-ahn/boilerplate-nestjs-server)

## Setting Stack
- Environment : node
- Framework : nestjs
- database : mySQL
- orm : typeORM
- type : typescript

## Project Start
1. nestjs 설치
```
$ npm install -g @nestjs/cli
```
2. clone & dependencies 설치
```
$ git clone ryan-ahn/boilerplate-nestjs-server
$ cd boilerplate-nestjs-server
$ npm install
```
3. server 시작하기
```
$ npm run start:dev
```

## Code Pattern
- Routes + Controllers + Services 패턴을 따름

## Code Structure
- Test(jest)
- Root(src)
- &nbsp;⎣&nbsp;**config** - configuration <br/>
- &nbsp;⎣&nbsp;**providers** - aws, cache, database, elasticsearch 등 <br/>
- &nbsp;⎣&nbsp;**auth** - 인증 관련 <br/>
- &nbsp;⎣&nbsp;**common** - 공통 모듈 등 <br/>
- &nbsp;⎣&nbsp;**modules** - 서비스 모듈 등 <br/>
