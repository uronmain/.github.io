//majituka3226ブログ用js  googledriveウェブホスティングサービス終了8/31以降移転
//動画ランダム再生


//動画固有コードとタイトル宣言


var l0='5cpzXB7qoDg';
var s0='僕だけがいない街OP';
var l1='NcphTDSdo8Y';
var s1='この美術部には問題がある！」OP';
var l2='VEYd9SlTJ48';
var s2='この美術部には問題がある！」ED';
var l3='TEviDZgKl1w';
var s3='クリープハイプ -「鬼」';
var l4='8H3BXQsudJU';
var s4='バイバイYESTERDAY';
var l5='wHMt0wgdfLY';
var s5='暗殺教室第二季ED2完整版-また君に会える日';
var l6='zyk-Q7gzGqs';
var s6='『Stay Alive』 Full ／エミリア 【リゼロ ED 2】';
var l7='POXKzyjGafc';
var s7='Re:ゼロから始める異世界生活(リゼロ) ED ';
var l8='y3RkRhaJPIc';
var s8='Re：ゼロから始める異世界生活 OP 『Redo』 Full';
var l9='esygfRAVLPo';
var s9='Ψです I LIKE YOU';
var l10='KHHjxCJpeKw';
var s10='青春は残酷じゃない';
var l11='MmCJkdB4k8A';
var s11='NEW GAME! OP FULL「SAKURAスキップ」';
var l12='6kR44t-CLvI';
var s12='NEW GAME! ED FULL「Now Loading!!!!」';
var l13='3yn_c1cNmyE';
var s13='俺妹 op ';
var l14='_xAueTwJFV4';
var s14='Butter-Fly';
var l15='BGiE6xFBlR4';
var s15='氷菓 優しさの理由';
var l16='6P28kRiMFvw';
var s16='すいみん不足';
var l17='9pAHsMkFlvs';
var s17='寝・逃・げでリセット！';
var l18='The Beatles - Let it be';
var s18='9pAHsMkFlvs';
var l19='e-cQ2rrUPGM';
var s19='『ニコニコ動画旅絵巻』を元の曲で再現してみた';
var l20='Y9G20wV0KHE';
var s20='Boku Dake ga Inai Machi OP';
var l21='wwAG-eARInc';
var s21='ニコニコ動画流星群';
var l22='jsta3tEY43s';
var s22='世にも奇妙な物語テーマ';
var l23='AsVCIF7o_go';
var s23='ゆりゆららららゆるゆり大事';
var l24='MYP8LHMBIS8';
var s24='マイペースでいきましょう';
var l25='D-Lvsw0ABJY';
var s25='少年メイド OP';
var l26='yiGWj_0aiTk';
var s26='迷家　OP';
var l27='MBepeaANdks';
var s27='くまみこ ED に中毒になる動画';
var l28='2Eer5KHS0-g';
var s28='くまみこ OP';
var l29='pq7XWSZzDbM';
var s29='僕だけがいない街ED　それは小さな光のような';
var l30='M-m0Gu6BYp8';
var s30='バカとテストと召喚獣「Perfect-area complete!」';
var l31='QY29T1p0OdY';
var s31='Baka Go Home.';
var l32='OoKIJ8LRkDY';
var s32='のんのんびよりOP';
var l33='oDbUVFnLRs0';
var s33='のんのんびよりED';
var l34='C5r7uASz494';
var s34='ごちうさ二期ed【ときめきポポロン】';
var l35='c2dwus-YQPg';
var s35='Day　dream café';
var l36='b6-2P8RgT0A';
var s36='かくしん的 めたまるふぉ～ぜっ！';
var l37='UNjHxhljAck';
var s37='がっこうぐらし！　OP';
var l38='i6cXWUYPI58';
var s38='僕らは今の中で';
var l39='Zv-bfZSt6QQ';
var s39='行け！稲中卓球部　ED';
var l40='f8d3bW42aFY';
var s40='坂本ですが？　OP';
var l41='FqkLjGS1IXE';
var s41='ふわふわ時間';
var l42='PJidGp6Dxkw';
var s42='Crow Song';
var l43='PJidGp6Dxkw';
var s43='My Soul,Your Beats';
var l44='1Uk1MFNl-Vc';
var s44='SHIROBAKO 全OP EDメドレー';


//再生される動画固有コードと動画タイトル
var link1 = '0';
var title1 = "test";

//動画のリンク数
var num =45;

//動画のリンク数の中から乱数を１つ抽出しrandに代入
var rand = Math.floor(Math.random() * num);



// 入力ダイアログを表示 ＋ 入力内容を user に代入
user = window.prompt("【このままOKを押してください】\n***selectで動画を選択画面に移動します***\n***キャンセルするとランダム再生を開始***\n", "select");



if (user == 'select') {

  var alltitle = printn(num);
  num-=1;
  rand = window.prompt("【【動画番号一覧-再生する動画番号入力してね】】\n\n・Chromeの場合一部省略されます\n⇒firefoxでは表示確認済み\n\n" + alltitle + "\n【動画番号を入力してください】\n・0～" + num + "の範囲の半角数字のみ入力可\n", rand);

  if (rand == null || rand == "") {

    window.alert('あんたが空白を入力したか、キャンセル押したため強制的にパルナスピロシキを再生しますね');
    rand = 1;
    setlink();

  } else if (rand >= 0 && rand <= num) {

    setlink();

  } else {

    window.alert('入力された値が正しくないため強制的にパルナスピロシキを再生しますね');
    rand = 1;
    setlink();

  }

  //フレンドのみ特定の動画
} else if (user == 'majituka3226') {
  window.alert("おかえりなさいませご主人様\n\n当サイトのコマンド一覧\n\nID入力画面で以下のコマンドを入力することができます \n\n「select」 ⇒　再生する番号を指定して再生　\n「r」　  ⇒　   余計なアラートを出さずに動画をランダムで再生　\n「actionv」    　⇒アメーバピグのアクションコードを表示");
  rand=149;
  setlink();
} else if (user == 'winter842'　 || user == 'bear843' || user == 'ウーロン茶' || user == 'クマ'||user =='うーろん') {
  window.alert("うーろんさんにゃんぱす～～\nのんのんびより　第一話　kissanimeのサイトに飛びます【OKを押してください】")
  location.href = "https://kissanime.to/Anime/Non-Non-Biyori/Episode-001?id=54032";

} else if (user == 'lala-lalan1'　 || user == 'なまこす') {

  pop2("なまこす", 57);

} else if (user == 'manaya-pigu') {

  pop2("まなや", 34);

}

//何も表示せずにランダム再生コマンド　r
else if (user == 'r') {
  setlink();
} else if (user == 'actionv') {
  codedisp();
  setlink();
}

/*
else if(user == ''){
      pop2("",);
}
*/

// 入力内容が一致しない場合は警告ダイアログを表示
else if (user != "" && user != null) {

  window.alert("ごめんなｻｲｺﾛｽﾃｰｷm(>__<)m  " + user + 'さんはピグ友じゃないのでランダム再生します');
  pop1();

}

// 空の場合やキャンセルした場合は警告ダイアログを表示
else {

  window.alert('あなたが入力を怠ったためランダム再生します');
  pop1();

}


function setlink() {

  eval("link1=" + 'l' + rand);
  eval("title1=" + 's' + rand);

}

function pop1() {

  setlink();
  window.alert("【動画タイトル】\n【『" + title1 + "』】 が選択されました。 \n動画番号:No." + rand + "(No.0～" + num + "中) \n \n\n・他の動画を再生する場合はページを更新してください。 \n・OKで再生開始\n");

}

function pop2(name1, crand) {

  window.alert(name1 + 'にはこの動画をみせてあげる　(*´ε`*)ﾁｭｯﾁｭ');

  eval("link1=" + 'l' + crand);
  eval("title1=" + 's' + crand);

  window.alert("【動画タイトル】\n【『" + title1 + "』】 が選択されました。 \n動画番号:No." + rand + "(No.0～" + num + "中) \n ");

}

function printn(anum) {
  var strallnum = "";
  var temps;
  for (var i = 0; i < anum; i++) {
    eval("temps=" + 's' + i);
    strallnum = strallnum + "No," + i + " " + temps + "\n";

  }
  return strallnum;
}

function codedisp() {
location.href="https://drive.google.com/file/d/0B1tcL1JXF9ipNkZnLTBtVk5vRDA/view?usp=sharing";
}


//動画再生部
//youtube URLにlink1を文字列結合
$(function playtube() {
  $('.skinBody').before('<iframe style="z-index: -1;min-width: 1024px;position: fixed;" width="100%" height="100%" src="https://www.youtube.com/embed/' + link1 + '?rel=0&autoplay=1&loop=1&amp;showinfo=0"&wmode=transparent" frameborder="0" allowfullscreen="true"></iframe>');
});


//<iframe width="560" height="315" src="https://www.youtube.com/embed/snVxK1VCO3I?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>

/*
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
<script src="https://www.googledrive.com/host/0B1tcL1JXF9ipWE0zTVAzSTZ1RjA/blogs.js
"></script>
<script type="text/javascript">
//********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************
</script>
<link rel=stylesheet href="//apn.webcrow.jp/adb.css">
*/

/*<script type="text/javascript">
document.getElementsByTagName("body")[0].innerHTML="<p style='font-size:130px;'>今日はいい天気だなぁ！！！！</p>";
</script>*/
