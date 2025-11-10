## 開発方針

- 音楽関係の制作チームのシンプルなHP
- 素材関係はpublic
- Vercelのテンプレートcms-wordpress-appを使っている。
- シンプルな1ページのみのサイトをまずは作る
- 将来計画で、WordpressからBlogや制作実績を表示させたい。
- 現状はWPは使わない。ので、デバッグに不要な部分のみコメントアウトしておく。


## 仕様

- Next.js (App Router) で構築されたブログ
- WPGraphQL を使ったWordPressからのデータ取得
- ISR (Incremental Static Regeneration) による高速な表示
- On-Demand Revalidation: WordPressで記事を更新すると、Vercel上のページが即座に再生成（更新）されます。
- ドラフトモード（プレビュー）: WordPressのプレビューがNext.js側で機能します。

## サイト要素

### Top
- お知らせ要素
- comming soonと表示

### Center
- LOGO(wave_logo.svg)
- Link

### Bottom
- ©︎ WA/VE 2025

## デザイン仕様
- ロゴ、フォント含めて白
- DMSansという専用フォントを使うこと。(public/fonts/DMSans-Bold.ttf, DMSans-Regular.ttf)
- 基本ロゴとメニュがブラウザーの真ん中に常に動く感じです。
- COMING SOON
- 背景は正方形なので、常に背景をフィルする形でお願いします。(background.jpg)
- ▼それぞれのリンクはクリックしたら外部に飛ぶ（ホバー時にイエロー beff3c）デスクトップはリンクが横並び
    - HAL ca / Works：https://bio.site/halca_wave
    - Instagram：https://www.instagram.com/wa_ve.jp/
    - Facebook：https://www.facebook.com/wave.halca
    - Contact：info@wa-.jp → メーラーが起動
- モバイル時はリンクが縦並び

## 各種設定情報
▼ ドメイン
wa-ve.jp
