# ๐ ์ ์ด๋ฌธ

## ๐ if ๋ฌธ 

```ts
let able : boolean = true;

if(able){
	console.log("test");
}
```

## ๐ switch ๋ฌธ

```ts
let value: number = 1;

switch (value) { // ์ซ์ํ ์กฐ๊ฑด๋ฌธ
    case 1:
        console.log("1");
        break;
    case 2:
        console.log("2");
        break;
    default:
        console.log("default");
        break;
}

let str: any ="hi"

switch(str:string | number) {
    case "hi":
        console.log("hi, doitnow-man");
        break;
    case 1:
        console.log("1");
        break;
    default:
        console.log("who are you?");
        break;
}
```

