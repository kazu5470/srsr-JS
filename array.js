// fruitsを配列
const fruits = ["りんご","みかん","バナナ","ブドウ"];

//　配列.lengthを使えば配列の要素数が変わっても要素数分の繰り返し処理をする
// for (let i = 0; i < 4; i++)でも下記の処理と同じになる
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}