// if文の中にif文追加で複数条件とする
const a = 5;
if (a > 3) {
    if (a < 10)
    console.log("aは3以上10以下です");
}

// 上記の複数条件式をより簡単に書く
// AND条件 論理積
const b = 5;
if (b > 3 && b < 10) {
    console.log("bは3以上10以下です");
}

// どちらか一つの条件を満たす
// OR条件　論理和
const c = 5;
if (c > 3 || c < 10) {
    console.log("cは３以上、または１０以下です");
}