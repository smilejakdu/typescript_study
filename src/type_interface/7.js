"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
const yearMap = {};
yearMap[1998] = 100000;
yearMap[1998] = 'abc'; // 속성에 숫자가 들어가면 값에도 숫자가 들어가야한다.
yearMap['2000'] = 12345;
yearMap['2000'] = 'million';
