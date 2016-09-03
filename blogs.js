//majituka3226ブログ用js  googledriveウェブホスティングサービス終了8/31以降移転
//動画ランダム再生


//動画固有コードとタイトル宣言
var l0 = '5cpzXB7qoDg';
var s0 = "僕だけがいない街OP";
var l1 = 'e_xb26g5frM';
var s1 = "パルナスピロシキの歌";
var l2 = 'dnwXTAL3fp0';
var s2 = "行け！稲中卓球部！１話";
var l3 = 'FqkLjGS1IXE';
var s3 = "ふわふわ時間";
var l4 = 'sdPwvBJiQJY';
var s4 = "Crow Song";
var l5 = 'PJidGp6Dxkw';
var s5 = "My Soul,Your Beats";
var l6 = '-lkH-uMZVY4';
var s6 = "Steins;Gate OP　Hacking to the Gate ";
var l7 = 'f71c-L4k0Qg';
var s7 = "ホモ弟！あな○ちゃんOP!";
var l8 = '1jcpvxKwD0g';
var s8 = "シコシコ動画流星群";
var l9 = 'Av9d2NB_5Mk';
var s9 = "ニコってる？";
var l10 = 'uRyj5mX_QAg';
var s10 = "Brave Song";
var l11 = 'lF9E_zLoq6w';
var s11 = "ひろゆきとホリエモンが論破祭り";
var l12 = '4hzOOTDbMU8';
var s12 = "ニコニコ動画CMY";
var l13 = 'rcnQ2u2NO_g';
var s13 = "七色のニコニコ動画流星群";
var l14 = 'HzFRMRagXlg';
var s14 = "ニコニコ動画摩天楼";
var l15 = 'OAmdQbW6t-w';
var s15 = "組曲「シコシコ動画」";
var l16 = 'F9wmte4t7Yo';
var s16 = "ドラえもん のび太の宇宙小戦争　少年期";
var l17 = 'hiETn2dC8d8';
var s17 = "ノコギリガール〜ひとりでトイレにいけるもん～";
var l18 = '1Uk1MFNl-Vc';
var s18 = "SHIROBAKO 全OP EDメドレー";
var l19 = 'Wid6rfkx2gk';
var s19 = "Gachimuchi! Boys";
var l20 = 'DiYxzyqJmDo';
var s20 = "迎愛サーキュレーション";
var l21 = 'ti4Z0VsmoEM';
var s21 = "【作業用BGM】Angel Beats!13曲";
var l22 = 'DlNuIaTCggw';
var s22 = "Hello,shooting-star";
var l23 = 'JwPDHobfrAA';
var s23 = "Don't say lazy";
var l24 = 'M2mZ-K7h0UM';
var s24 = "Cagayake Girls";
var l25 = 'f8d3bW42aFY';
var s25 = "坂本ですが？　OP";
var l26 = 'i6cXWUYPI58';
var s26 = "僕らは今の中で";
var l27 = 'Zv-bfZSt6QQ';
var s27 = "行け！稲中卓球部　OP";
var l28 = 'TC2PYNo9IVQ';
var s28 = "行け！稲中卓球部　ED";
var l29 = 'UNjHxhljAck';
var s29 = "がっこうぐらし！　OP";
var l30 = 'b6-2P8RgT0A';
var s30 = "かくしん的 めたまるふぉ～ぜっ！";
var l31 = 'wS8yk2dQBN4';
var s31 = "you";
var l32 = 'c2dwus-YQPg';
var s32 = "Day　dream café";
var l33 = 'C5r7uASz494';
var s33 = "ごちうさ二期ed【ときめきポポロン】";
var l34 = 'wfkgRfBUWLo';
var s34 = "化物語 ED - 君の知らない物語";
var l35 = 'OoKIJ8LRkDY';
var s35 = "のんのんびよりOP　なないろびより";
var l36 = 'oDbUVFnLRs0';
var s36 = "のんのんびよりED　おかえり";
var l37 = 'qUMT39Pdn5o';
var s37 = "のんのん日和";
var l38 = 'SIKc7j-9wx8';
var s38 = "らき☆すた　OP";
var l39 = 'HKKUGQrVwuQ';
var s39 = "みなみけただいまOP　シアワセ ハイテンション↑↑";
var l40 = 'V56MeC_PNKg';
var s40 = "みなみけ - 経験値上昇中 ";
var l41 = 'p1Huxc3jqZQ';
var s41 = "白金ディスコ";
var l42 = 'M-m0Gu6BYp8';
var s42 = "バカとテストと召喚獣「Perfect-area complete!」";
var l43 = 'QY29T1p0OdY';
var s43 = "Baka Go Home.";
var l44 = 'pq7XWSZzDbM';
var s44 = "僕だけがいない街ED　それは小さな光のような";
var l45 = 'Om-I7bG2BPo';
var s45 = "Re:Re:";
var l46 = 'MBepeaANdks';
var s46 = "くまみこ ED に中毒になる動画";
var l47 = '2Eer5KHS0-g';
var s47 = "くまみこ OP";
var l48 = 'tSQjSZFLi7M';
var s48 = "くまみこ　第一話";
var l49 = 'sg4K9OukNUs';
var s49 = "田中くんはいつもけだるげ OP ";
var l50 = 'D-Lvsw0ABJY';
var s50 = "少年メイド OP";
var l51 = 'yiGWj_0aiTk';
var s51 = "迷家　OP";
var l52 = 'NcTu8_t-ivc';
var s52 = "くまみこ　第三話";
var l53 = 'CiqZUdyrwBk';
var s53 = "【PV】TVアニメ「くまみこ」PV";
var l54 = 'hgNst768A8c';
var s54 = "【くまみこ】トランス状態まち【じゃにーぱみゅぱみゅ】";
var l55 = 'Zj9npWFop20';
var s55 = "くまみこ　第二話";
var l56 = 'zIgjWJSLOh0';
var s56 = "くまみこ　第四話";
var l57 = 'lntsytnzlr0';
var s57 = "12歳。～ちっちゃなムネのトキメキ～　第一話";
var l58 = 'R9No2QT8XUo';
var s58 = "少年メイド　第一話";
var l59 = '2ZdoG3fz41M';
var s59 = "うる星やつら ラムのラブソング 宇宙は大ヘンだ!";
var l60 = 'LNjkN4eEDdo';
var s60 = "未来少年コナン　第一話";
var l61 = 'OnmVaR4ReQw';
var s61 = "片平里菜「結露」(TVアニメ「迷家-マヨイガ-」ED曲)";
var l62 = 'LY0HMjv1sKU';
var s62 = "来て来てあたしンち」";
var l63 = 'agX0qoks-qI';
var s63 = "おジャ魔女どれみOP「おジャ魔女カーニバル!!」";
var l64 = 'hkWkn6TDsEU';
var s64 = "とっとこハム太郎 OP";
var l65 = '1ot99VU4kzY';
var s65 = "God Knows";
var l66 = 'ci2Q5BTnvGw';
var s66 = "ハレ晴レユカイ";
var l67 = 'iC4gqelp1UM';
var s67 = "はじめてのチュウ";
var l68 = '_jSGyj2kvi4';
var s68 = "ちびまる子ちゃん ゆめいっぱい";
var l69 = 'VgfT3kqo8Vg';
var s69 = "ダメダメのうた";
var l70 = 'zjxCa4k_gmg';
var s70 = "オラはにんきもの";
var l71 = 'aGcN8w-nMak';
var s71 = "クレヨンしんちゃん不朽の名曲メドレー";
var l72 = 'YlUKcNNmywk';
var s72 = " Californication ";
var l73 = 'rn_YodiJO6k';
var s73 = " Otherside ";
var l74 = 'Sb5aq5HcS1A';
var s74 = " Dani California";
var l75 = 'oDNcL1VP3rY';
var s75 = " Tell Me Baby";
var l76 = 'JnfyjwChuNU';
var s76 = "By The Way";
var l77 = '8DyziWtkfBw';
var s77 = " Can't Stop ";
var l78 = 'NUTGr5t3MoY';
var s78 = " Basket Case";
var l79 = 'VrZ4sMRYimw';
var s79 = "The Kids Aren't Alright ";
var l80 = 'us8OhI-OTHg';
var s80 = "All I Want";
var l81 = 'Qp6Qn8IwPf8';
var s81 = " Original Prankster";
var l82 = '5_LxyhCJpsM';
var s82 = " You're Gonna Go Far, Kid ";
var l83 = 'IzqLX_KVK0Q';
var s83 = "Winter, again";
var l84 = '2RY39bE8X78';
var s84 = "BELOVED ";
var l85 = 'IXvreqrrh3o';
var s85 = " Rusty Nail";
var l86 = 'WzHbHxSEtVQ';
var s86 = "Silent Jealousy";
var l87 = 'qJ_Tw0w3lLA';
var s87 = " Dark Necessities";
var l88 = 'Dl4L9miaZKs';
var s88 = "くまみこ　第７話";
var l89 = 'IyAKUWK1Utg';
var s89 = "くまみこ　第６話";
var l90 = 'fmXLzY8kbYA';
var s90 = "Snow (Hey Oh)";
var l91 = 'AsVCIF7o_go';
var s91 = "ゆりゆららららゆるゆり大事";
var l92 = 'MYP8LHMBIS8';
var s92 = "マイペースでいきましょう";
var l93 = 'Wu99dGviVN8';
var s93 = 'ヨスガノソラ　OP';
var l94 = 'jsta3tEY43s';
var s94 = '世にも奇妙な物語テーマ';
var l95 = 'k7V7KayV2Qg';
var s95 = '懐かしの金曜ロードショー';
var l96 = 'iyw6-KVmgow';
var s96 = '月光';
var l97 = '6ewGwJ63Nr4';
var s97 = 'グロリアス';
var l98 = 'v5boRsZaSbE';
var s98 = '家族の風景';
var l99 = 'qOgFHMEJMeY';
var s99 = 'Monarchy of Roses ';
var l100 = 'daufgidRDS4';
var s100 = 'ハイポーション作ってみた。';
var l101 = 'USUu40edeQ8';
var s101 = 'キーボードクラッシャー（真面目に和訳）';
var l102 = 'MhqrrdVo9Uc';
var s102 = 'わいせつの魔法。 フル(コメ付)';
var l103 = 'aKcwZEOPmFE';
var s103 = 'アベパンマン';
var l104 = 'PiImzKEYiho';
var s104 = '危険なぽぽぽぽーん';
var l105 = '0ZBamCxWEvc';
var s105 = '16歳メンヘラ女子に放屁したら発狂された';
var l106 = 'zALoANu4NHM';
var s106 = '【ミート源五郎】ミートミート【マイムマイムＭＡＤ】　';
var l107 = '7ppTFS_i71o';
var s107 = 'ミート源五郎の神誘い笑いスキル';
var l108 = 'mzJj5-lubeM';
var s108 = ' Scar Tissue';
var l109 = 'CoOibAstPJ4';
var s109 = ' Universally Speaking';
var l110 = 'cHBh_ltrIWY';
var s110 = 'キッチンはマイステージ';
var l111 = 'Wqd5PupOB6s';
var s111 = '誘惑';
var l112 = 'dQWQZT0DWWc';
var s112 = 'hyde * GLAY';
var l113 = 'lTiScsOixso';
var s113 = 'earthshaker - more';
var l114 = '3cupbrwhNp0';
var s114 = '夜明けのBEAT';
var l115 = '3121vHr6tIQ';
var s115 = '浦安鉄筋家族OP　「ナツノマボロシ」';
var l116 = 'Cbo2n2MzxxE';
var s116 = 'Michelle Branch - All You Wanted ';
var l117 = 'HLCasyAh7ic';
var s117 = 'Everywhere';
var l118 = 'bwXfRjePNrE';
var s118 = 'love like woe';
var l119 = 'vy7sXRCidX4';
var s119 = 'SOUL LOVE ';
var l120 = 'gPcPseeICjs';
var s120 = ' HOWEVER ';
var l121 = 'if0KXNEx_WQ';
var s121 = 'ダンガンロンパOP　FULL';
var l122 = 'I3rbYTrebf4';
var s122 = 'Utauyo MIRACLE!!';
var l123 = 'QfZFqPx6XOU';
var s123 = 'ヨスガノソラOP';
var l124 = 'bxDlC7YV5is';
var s124 = 'Greyson Chance Singing Paparazzi ';
var l125 = 'jeiC2sH-2xI';
var s125 = 'おもいではおっくせんまん';
var l126 = 'L2tDWgs2wyA';
var s126 = '鳥の詩';
var l127 = 'wwAG-eARInc';
var s127 = 'ニコニコ動画流星群';
var l128 = 'GlZ3E237zu0';
var s128 = 'Nico Start!';
var l129 = 'e-cQ2rrUPGM';
var s129 = '『ニコニコ動画旅絵巻』を元の曲で再現してみた';
var l130 = 'Y9G20wV0KHE';
var s130 = 'Boku Dake ga Inai Machi OP';
var l131 = 'QA5BYrU_MLs';
var s131 = 'Tear';
var l132 = 'Z0AXjUy1_gY';
var s132 = 'Californication - Live at Slane Castle ';
var l133 = 'utFBZ6FCMv4';
var s133 = 'Red Hot Chili peppers Live Rock Am Ring 2016 | FULL SHOW';
var l134 = 'gVfcuU4JipQ';
var s134 = '毎度浦安鉄筋家族6-10';
var l135 = 'kVLMbsRrzEM';
var s135 = '毎度浦安鉄筋家族11-15';
var l136 = '9gk4W6KYImE';
var s136 = '毎度浦安鉄筋家族21-25';
var l137 = 'u5EArZEH9F0';
var s137 = '稲中卓球部1-2-3-4';
var l138 = 'uhF9w8-Kt40';
var s138 = '稲中卓球部5-6-7-8';
var l139 = 'HNyrNHXy9aM';
var s139 = '稲中卓球部9-10-11-12';
var l140 = 'aEd1oE02B4o';
var s140 = '稲中卓球部13-14-15-16';
var l141 = 'LNadhbbFmkg';
var s141 = '稲中卓球部17-18-19-20';
var l142 = 'nOo8T542eV0';
var s142 = '稲中卓球部 21-22-23-24';
var l143 = 'zu13KJe-ZtM';
var s143 = '行け!稲中卓球部  26-27-28-29 ';
var l144 = '1ZtalENfHu4';
var s144 = '行け!稲中卓球部 29-30-31-32 ';
var l145 = '3MoXYBvHbME';
var s145 = '行け!稲中卓球部33-34-35-36';
var l146 = 'lfCuVqopXqk';
var s146 = '行け!稲中卓球部37-38-39-40';
var l147 = '6-G5wChhb00';
var s147 = '行け!稲中卓球部41 - 42 - 43 -44';
var l148 = 'yO9eXK7CTwk';
var s148 = '行け!稲中卓球部45-46-47';
var l149 = '0D5JJZl6MB0';
var s149 = 'The Beatles - Let it be';
var l150 = '9pAHsMkFlvs';
var s150 = '寝・逃・げでリセット！';
var l151='DxGbggj5xso';
var s151='走れ正直者';
var l152='XbZ2NTK_Zqw';
var s152='こち亀ラプソディー';
var l153='jeFNVsaYFzU';
var s153='だまって俺についてこい';
var l154='6P28kRiMFvw';
var s154='すいみん不足';
var l155='U8Ul0eTS4Yg';
var s155='真っ赤な誓い';
var l156='ps0_QRzlp9k';
var s156='アンインストール';
var l157='kexAkVkwYs0';
var s157='マクロスF OP　（ライオン）';
var l158='t-QSmNReDyI';
var s158='Evangelion Opening';
var l159='Zc1BE5zeCTU';
var s159='ラピュタ';
var l160='ndH6UqA0QSo';
var s160='[ENG SUB] Secret Base - 10 Years After Ver.';
var l161='-7hYWHDdbJk';
var s161='コネクト';
var l162='E3wWC6Cfikg';
var s162='CLANNAD　AFTER STORY　OP 『時を刻む唄』FULL 歌詞付き';
var l163='CCR-UI3GafU';
var s163='AIR_夏影';
var l164='uMeR2W19wT0';
var s164='「東京喰種トーキョーグール」オープニング映像 TK from 凛として時雨/unravel';
var l165='Ze8xBUk-2qU';
var s165='這いよれ！ニャル子さんW OP 「恋は渾沌の隷也」';
var l166='BGiE6xFBlR4';
var s166='氷菓 優しさの理由 ';
var l167='_xAueTwJFV4';
var s167='Butter-Fly Perfect Final Version';
var l168='3yn_c1cNmyE';
var s168='俺妹 op ';
var l169='Q0oIoR9mLwc';
var s169='Red Hot Chili Peppers - Dark Necessities [OFFICIAL VIDEO]';
var l170 = 'fWNaR-rxAic';
var s170 = 'Carly Rae Jepsen - Call Me Maybe';
var l171 = 'zKx2B8WCQuw';
var s171 = 'ouTube Rewind: Turn Down for 2014';
var l172 = 'zREoHN2DTng';
var s172 = '【謝罪】コメント欄でもよく言われるたれぞうさんの件について';
var l173 = '_3sM4cWLQ7s';
var s173 = 'つる兄とカネマンでシコってるかもしれないたれぞう aoc';
var l174 = 'AltMeuPkWRs';
var s174 = 'Pretty Fly (For a White Guy)';
var l175 = 'sxSEW3sUitA';
var s175 = 'The Offspring - Why Dont You Get A Job';
var l176 = 'RtBbinpK5XI';
var s176 = 'The Adventures of Rain Dance Maggie ';
var l177 = 'WnisBb2rVOg';
var s177 = 'Look Around ';
var l178 = 'GLvohMXgcBo';
var s178 = 'Under The Bridge';
var l179='2rEP4Q6vKrU';
var s179='Red Hot Chili Peppers - Live at Rio de Janeiro, Brazil';
var l180='XhrCbZBAC7M';
var s180='Red Hot Chili Peppers - Stadion Slaski, Chorzów, ';
var l181='t5ht7o5r4iQ';
var s181='Red Hot Chili Peppers - Live Earth, London, 2007 ';

var l182='JibUDCzkKis';
var s182='たすけてどらえもん';
var l183='8Gj2g_k3n8U';
var s183='【アイのシナリオ】歌ってみた ver.Gero';

/*
var l='';
var s='';
var l='';
var s='';
var l='';
var s='';
var l='';
var s='';
var l='';
var s='';
var l='';
var s='';


*/

//再生される動画固有コードと動画タイトル
var link1 = '0';
var title1 = "test";

//動画のリンク数
var num =184;

//動画のリンク数の中から乱数を１つ抽出しrandに代入
var rand = Math.floor(Math.random() * num);



// 入力ダイアログを表示 ＋ 入力内容を user に代入
user = window.prompt("【このままOKを押してください】\n***selectで動画を選択画面に移動します***\n***キャンセルするとランダム再生を開始***\n　***僕のユーザID入力で説明表示***\n", "select");



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

  pop2("なまこすり", 57);

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
