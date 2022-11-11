// let ...変数宣言　再代入可能
// 初期値あり、なし関係なく宣言可能 =>  let price;
//                                      price = "Arice";
let price = 100;
console.log(price);

// 文字列も使用できる
let name = "Alice";
console.log(name);

// constは再代入できない上に初期値なしでは変数宣言できない
// よってconstは後々変更の可能性がない変数を代入する場合に多用される
// 極力constを使う方がコードの可読性が上がる
const firstName　= "Arice";
// firstName  ...キャメルケース
// first_name ...アンダーバーが入る => スネークケース　どちらがの方が良いということはないが統一されているのが望ましい
// name ≠ Name ...大文字と小文字は区別される

