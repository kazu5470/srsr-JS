// オブジェクトの書き方
// {
//   キー1:値1,
//   キー2:値2,
//   キー3:値3
// }
const book = {
    title: "我輩は猫である",
    author: "夏目漱石",
    pages: 620
}

console.log(book);  // {title: "我輩は猫である",author: "夏目漱石",pages: 620}

// const emptyObject = {}とすると中身が空のオブジェクトを作成できる


// オブジェクトのデータ型を調べる
const obj2 = {a:1}
console.log(typeof obj2);  // typeof オブジェクト名　とするとデータ型が調べられる
// 結果
// object

// オブジェクトのプロパティにアクセスする
const book2 = {title: "我輩は猫である"}
console.log(book2.title);  // ドット表記法
console.log(book2["title"]);  // ブラケット表記法

console.log(book2.author); // undefind  存在しないプロパティにアクセスしようとするとundefindとなる

// プロパティの追加と上書き
const book3 = {title: "我輩は猫である"}
book3.author = "夏目漱石";
book3["pages"] = 620;
console.log(book3);  // {title:'吾輩は猫である',author:'夏目漱石',pages:620}

const person = {name: "Alice", age: 20}
person.name = "Bob";
person["age"] = 25;
console.log(person); // {name: "Bob", age: 25}
