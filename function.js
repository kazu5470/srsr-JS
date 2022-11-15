// 関数宣言による関数の定義
// function 関数名() {
// 処理;    
// }

// 関数の呼び出し
// 関数名();

// 関数の定義
function hello() {
    console.log("こんにちは");
}

// 関数の呼び出し
hello();

// 引数のある関数定義
// function 関数名(仮引数) {
//  処理;  
// }

// 引数のある関数の呼び出し
// 関数名(実引数)

function hello(name) {
    console.log(`こんにちは${name}さん`);
}

hello("Alice");
//　こんにちはAliceさん
hello("Bob");
//　こんにちはBobさん

// 戻り値のある関数の定義
// function 関数名() {
//  処理;
//  return 戻り値;
// }