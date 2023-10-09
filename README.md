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
&nbsp;⎣&nbsp;**config** - config 설정 <br/>
&nbsp;⎣&nbsp;**controllers** - 에러 핸들링 <br/>
&nbsp;⎣&nbsp;**interfaces** - database model, schema, request & response type 코드 등 <br/>
&nbsp;⎣&nbsp;**loaders** - database 연결 <br/>
&nbsp;⎣&nbsp;**modules** - utils, handler, hooks 등 <br/>
&nbsp;⎣&nbsp;**services** - 비즈니스 로직 <br/>
