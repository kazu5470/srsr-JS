// weightを宣言
const weight = 300;

// もしweightが２５０以上であれば
if ( weight < 250) {
    console.log("配送料２００円");
// else if ...条件分岐を増やす
} else if ( weight < 500) {
    console.log("配送料４００円");
} else if ( weight < 1000) {
    console.log("配送料６００円");
} else {
    console.log("取り扱いできません");
}
// この場合配送料４００円となる
// 条件式を書く場合、ロジックを謝ると返す値が変わるため、条件式を書く順番を意識することが重要

