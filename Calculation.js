//もちろん()内は掛け算割り算が先に、()内に更に()があれば中の()を先に計算
// 足し算
console.log(1 + 2); // 3

const total = 1 + 2;
console.log(total); // 3

// 引き算
console.log(2 - 1);

// 掛け算
console.log(5 * 5);

// 割り算
console.log(10 / 2);

// 余り
console.log(17 % 5);

// 累乗
console.log(2 ** 4); // 2 * 2 * 2 * 2

// 3 / 0　や　0 / 0などは
// 3 / 0 => Infinity
// 0 / 0 => NaN ... Not a Number
// が返される

//　比較演算
console.log(1 < 2); // true

console.log(1 > 2); // false

// === ... 厳密に等しい場合
// データ型も比較する

// == ...データ型は比較しない
console.log(1 == "1"); // true

console.log(1 === "1"); // false

