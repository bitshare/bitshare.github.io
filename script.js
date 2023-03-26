'use strict'
// 1行目に記載している 'use strict' は削除しないでください

// FileReaderのインスタンスを作成する(グラフ化のためグローバル宣言)
const reader = new FileReader();

// ファイルが選択されたとき
const fileSelect = document.getElementById('select')
fileSelect.addEventListener('change', function (e) {
    // ファイルの情報を取得
    const fileData = e.target.files[0];
    // ファイルを読み込む
    reader.readAsText(fileData, 'Shift_JIS');
    // ファイル読み込み完了時、consoleに出力(デバッグ用)
    reader.onload = function () {
        console.log(reader.result);
    }
});

// グラフ表示ボタンがクリックされた時
const button1 = document.getElementById('button1');
button1.addEventListener('click', draw1);

function draw1() {
    const graph1 = document.getElementById('graph1');
    // ユニコーンを表示する(本当はファイルをグラフ化して表示したい)
    graph1.innerHTML = '<img src="https://cdn.dribbble.com/users/1281272/screenshots/4515441/unicorn.gif"></img>';
}
