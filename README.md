

<h1> 개요 </h1>

> 고객관리 시스템  
> react material-ui  
> express   

<h2> How to run </h2>

### Installation  
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
> module.exports를 사용하기  

### components : Customer
>
/api/login
```
ex) 
router.	get	("/api/login", async (ctx) => { 
  await Member.findOne({
    where: {
      id: ctx.params.id,
    },
  })
    .then((task) => {
      if (task) {
        ctx.body = task;
      } else {
        ctx.body = "Task does not exist";
      }
    })
    .catch((err) => {
      ctx.body = "error" + err;
    }); 
});
```

-------------------------------------------------------
## 
-------------------------------------------------------

## 버그들
Chat 기능에서 보내는 내용이 몇개씩 보내진다.  
로그인이 아닌 랜덤유저를 생성해서 Chat한다.  
로그인 컴포넌트는 아직 완성되지 않았다.  

## 참고 자료
https://www.youtube.com/watch?v=s2knmog2j1U&list=PLRx0vPvlEmdCED62ZIWCbI-6G_jcwmuFB 1~25강
