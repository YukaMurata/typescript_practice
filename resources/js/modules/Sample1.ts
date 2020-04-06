export const hello: string = 'hello';

let hasValue: boolean = true;
const count: number = 2;
const single: string = 'single';

//objectに型
const person: {
  name: string; //,ではなく;
  age: number;
} = {
  name: 'murata',
  age: 26
};

//配列に型
const fruits: string[] = ['apple', 'banana', 'grape'];

//tuple型(配列のそれぞれの要素に別の型の物を必ず順序を守って入れたい場合)
const book: [string, number, boolean] = ['business', 1500, false];

//enum(列挙型):特定のまとまったグループのみを受け入れる(enumの中の要素は基本大文字、変数名はキャメルケース)
const coffeeSize = {
  SHORT: 'SHORT',
  TALL: 'TALL',
  GRANDE: 'GRANDE',
  VENTI: 'VENTI'
};
//↓上記をcoffee.sizeに入れてもstringにしかならない
enum CoffeeSize {
  SHORT = 'SHORT',
  TALL = 'TALL',
  GRANDE = 'GRANDE',
  VENTI = 'VENTI'
}
//下記の書き方をするとSHORT=0となる。別に文字列で宣言しておく必要がなければ下記の方がメモリは食わない
// enum CoffeeSize {
//   SHORT,
//   TALL,
//   GRANDE,
//   VENTI
// }

const coffee = {
  hot: true,
  size: CoffeeSize.SHORT
};

//any型(jsの世界に戻る。定義してないのと一緒。)tsだけで作るのであれば、anyはなるべく使わない
let anything: any = true;

//union型(今変数に入っている型に応じてエラーを出し分けてくれる)
let unionType: number | string = 10;
unionType = 'hello';
//配列だと以下のような感じで宣言する
let unionTypes: (number | string)[] = [21, 'hello'];

//リテラル型(決まった値のみを使える)
//下記だと、appleという文字列しか受け入れない
//ちなみに、constで宣言するとリテラル型、letで宣言するとstring型になる
const apple = 'apple';

//union型とくっつけた形で使うと便利
let clothSize: 'small' | 'medium' | 'large' = 'medium';

//上記変数を使ってclothオブジェクトを作るとcloth.sizeの型がmediumという文字列に、、
const clothes = {
  color: 'white',
  size: clothSize
};
//上記をどうやって回避するかというと
const cloth: {
  color: string;
  size: 'small' | 'medium' | 'large';
} = {
  color: 'white',
  size: clothSize
};

//じゃあ上記の形と、enum型はどっちを使ったらいいの？？→2つ3つの選択肢だけなら、リテラル型使うでいいんでない？もっといっぱいあるならenumにした方良い

//typealias(別名)
//'small' | 'medium' | 'large'これ長いから別名つけたいよね〜。ということで下記。
type ClothSize = 'small' | 'medium' | 'large';
//これを使うと
const cloth2: {
  color: string;
  size: ClothSize;
} = {
  color: 'white',
  size: clothSize
};

//関数宣言するときに型をつける(引数と返り値につける)
//戻り値には型推論が効く。パラメータ(引数)には型推論は効かない
//戻り値にもまあ、明示的に型をつけていた方がわかりやすい
function add(num1: number, num2: number): number {
  return num1 + num2;
}

//関数で何も返さない場合は？(何も返さないという意味のvoid型)
function sayHello(): void {
  console.log('Hello');
}

//undefined型(undefinedとnullを持つ)
let tmp: undefined;
//基本的にはundefined型は使わない！voidを使う

//関数を保持する変数に型をつける
const anotherAdd: (num1: number, num2: number) => number = add;
//下記でも良い
// const anotherAdd: (num1: number, num2: number) => number = function(num1, num2) {
//   return num1 + num2;
// };

//アロー関数の時
const doubleNumber = (number: number): number => number * 2;
//上がダサいなあ、、って時は下記も可
const doubleNumber2: (num: number) => number = num => num * 2;

//コールバック関数
function doubleAndHandle(num: number, callback: (num: number) => number): void {
  const doubleNumber = callback(num * 2);
  console.log(num * 2);
}
doubleAndHandle(2, doubleNum => {
  return doubleNum;
});

//unknown型(anyにすごく似ている)
let unknownInput: unknown;
let anyInput: any;
unknownInput = 'hello';

//never型(決して何も返さない)
function error(message: string): never {
  throw new Error(message);
}

//クラス
class Greeter {
  greeting: string;
  age: number;

  constructor() {
    this.greeting = 'hello';
    this.age = 26;
  }
}
