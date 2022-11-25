// Dateオブジェクトの作成
// new Date()

const now = new Date();
console.log(now); // 現在の日付、時刻が表示される

// 特定日時のDateオブジェクト作成
const theDay = new Date(2030, 3, 1, 5, 20, 0);
console.log(theDay); // Mon Apr 01 2030 05:20:00 GMT+0900(日本標準時)
                     // 引数を３にしたのにApr(4月)となっている点については言語仕様上のルールのため、注意する

// Dateオブジェクトのメソッド
const theDay2 = new Date(2030, 3, 9, 5, 20, 0);
console.log(theDay2.getFullYear());
console.log(theDay2.getMonth());
console.log(theDay2.getDate());


