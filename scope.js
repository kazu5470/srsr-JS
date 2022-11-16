// 関数スコープ
function sample() {
    const x = 10;
    console.log(x); // sample関数内部から変数を参照できる
}

sample();
console.log(x); //　関数の外から関数内の変数は参照できないためエラーとなる

if (true) {
    const y = 10;
    console.log(y); // if文のブロック内部から変数を参照できる
}

console.log(y); // ブロックの外からif文内の変数は参照できない。





const z = 10; // グローバルスコープ

function doSomething() {
    console.log(z); // 変数zを参照できる
}

if (true) {
    console.log(z); // 変数zを参照できる
}



// 同一スコープでは同じ名前の変数を宣言できない
// しかしスコープが違えば同じ名前の変数を宣言できる
const v = 1;
function doSomething2() {
    const v = 2; // 35行目でvを宣言しているが、スコープが違うため、再度vを宣言できる
}