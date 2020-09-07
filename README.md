

<h1> 개요 </h1>

> 고객관리 시스템  
> react material-ui  
> express   

<h2> How to run </h2>

### Installation  
material ui  
```
$ npm install @materail-ui/core
```

### multer  
파일 업로드 모듈  
```
$ npm install --save multer  
```

## Getting started
```  
npm i
npm start
```  

# 설명

-------------------------------------------------------
## 구성요소
-------------------------------------------------------

### server.js : express rest api mysql 
> json 파일에 있는 db주소 가져와서 연결  
> rest api를 통해 접근 mysql query문을 통해 조회  
> img 파일은 multer을 통해 upload폴더에 저장

```
ex) const multer = require("multer");  
const upload = multer({ dest: "./upload" });  
```  

### components : Customer
> react 고객 CRUD

-------------------------------------------------------
## 
-------------------------------------------------------

## 버그들
material-ui를 참고해서 만들다 보니 비활성화 되어 있는것 들이 있음  
데이터가 없을 경우 progress바가 잘 작동하지 않음   

## material ui를 쓰면서
> 기존의 디자인 된 것을 가지고 오기 때문에 간단하고 편하게 만들 수 있다.  
>


## 참고 자료
https://www.youtube.com/watch?v=s2knmog2j1U&list=PLRx0vPvlEmdCED62ZIWCbI-6G_jcwmuFB 1~25강
