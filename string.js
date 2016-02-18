var a = 'Hello';

/*
node.js 是 javascript 的直譯器
所以執行單機板的 javascript, 就是打 "node javascript 檔名"
所以你會看到 node string.js 就是執行 string.js 的內容

Terminal 是 Linux 的指令視窗
有點像 Dos 時代那種需要打指令的那種

所以我在下面打 node string.js 就是呼叫 node 直譯器執行 string.js 的內容
副檔名是是 .js 代表這是 javascript 的程式
*/

// console物件是用來把字印在螢幕的物件
// console.log 是其中一個函式
// console物件通常用來除錯
// console.log 是最平常的等級
// 其他依序還有 message, warning, error 其他等級

/*
還有個東西叫作註解
就是給設計師看的
javascript 不會執行註解的內容
單行註解是以 // 後面開始算到這行結束
*/

// 多行註解是以 /* 為開頭 */ 為結束
// 所以你可以看到上面有一個註解是以 /* */ 為開頭的

// 只是印出 a 的內容
console.log(a); // Hello

// 第二個就是印出 兩個字串相加的結果
console.log(a + 'world'); // Helloworld

// 印字串就是很忠實的印出結果
// 所以如果希望字與字之間字有空格, 就得要加空格在兩個字中間
console.log(a + ' world'); // Hello world

// 文字加數字
// javascript 會自動把數字轉成文字
// 再把兩段文字變成一個字串
console.log(a + 1); // Hello1

// 字串加所有型態都會被 javascript 強行轉成字串再結合
console.log(a + [1,2,3]); // Hello1,2,3

// 任何物件都可以透過 String() 函式轉型成字串
// 所以在跟字串相加之前
// javascript 都會在背後偷偷呼叫 String() 做轉型
console.log(a + String([1,2,3])); // Hello1,2,3

// 字串長度
// 可以呼叫 字串.length 去取得長度
console.log("a.length = " + a.length); // a 字串長度 = 5

var b = a + 1;

console.log('b.length = ' + b.length); // b 字串長度 = 6
