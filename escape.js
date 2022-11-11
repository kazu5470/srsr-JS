// エスケープ表記
// \' ...シングルクォーテーション
// \n ...改行
// \\ ...バックスラッシュ
console.log("私の名前は\'Alice\'です"); // 私の名前は'Alice'です

// `` ...バックティック内では${変数}と書いて変数を使える
const name = "Alice";

console.log("私の名前は" + name + "です"); // 私の名前はAliceです

const name2 = `私の名前は${name}です`;
console.log(name2); // 私の名前はAliceです