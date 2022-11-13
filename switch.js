// switchを使えば変数の値を指定して、指定した値ごとにそれに当てはまる場合の処理を返すことができる

const ranking = 2;
switch (ranking) {
    case 1:
        console.log("金メダル");
        break;
    case 2:
        console.log("銀メダル");
        break;
    case 3:
        console.log("銅メダル");
        break;
    default:
        console.log("メダルなし");
}
// 必ずbreakを書くこと　breakがないと処理が終了しない