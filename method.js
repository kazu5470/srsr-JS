//　メソッドの定義
// const オブジェクト名 = {
//  プロパティ名:値;
//  メソッド名:関数式
// }

// メソッドの呼び出し
// オブジェクト名.メソッド名(実引数)

const person = {
    name: "アリス",
    greet: function() {
        console.log("こんにちは");
    }
}

person.greet();  // こんにちは


// thisを使用し、オブジェクトを経由してプロパティにアクセスする
const person2 = {
    name:'Alice',
    greet:function(){
        console.log(`こんにちは、私は${this.name}です。`); //意図した動作をする
    }
}

person.greet();


// プロパティに連動してメソッドも変更

const person3 = {
    name:'Alice',
    greet:function() {
        console.log(`こんにちは、私は${this.name}です。`);
    }
}
person.name = 'Bob'; //nameプロパティを上書き
person.greet();
