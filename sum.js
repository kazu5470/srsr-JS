// 引数は複数設定できる
// function 関数名(仮引数１、仮引数２、仮引数３、仮引数４){
//  処理;
// }

// 複数の引数を持つ関数の呼び出し
// 関数名(実引数１、実引数２、実引数３、実引数４);

function sum(a,b) {
    const result = a + b;
    return result;
}

const x = sum(3,5);
console.log(x);

const y = sum(10,20);
console.log(y);

