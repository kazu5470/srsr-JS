// 円周率の表示
console.log(Math.PI); //3.141592653589793

// 絶対値の表示
console.log(Math.abs(-10));  // 10
console.log(Math.abs(10));  // 10

// 小数点の処理
console.log(Math.round(1.4)); // 四捨五入
console.log(Math.round(1.5)); // 四捨五入
console.log(Math.floor(10.3));  // 切り下げ
console.log(Math.ceil(10.3));  //切り上げ

// ランダムの数を生成
console.log(Math.random()); // randomメソッドは０以上１未満の数字をランダムに生成する

// サイコロを作成
console.log(Math.floor(Math.random() * 6) + 1);
// Math.floorで小数点以下を切り捨て、Math.randomでランダムの数を生成し*6とすることで０以上６未満の数を出す
// 最後に+1することで０以上６以下の数字を出す
