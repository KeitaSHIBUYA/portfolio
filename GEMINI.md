# GEMINI.md

## プロジェクト概要

このプロジェクトは、SREエンジニアとしての経験やスキルを紹介するポートフォリオサイトです。

## 主要な技術スタック

- **フレームワーク:** Next.js, TypeScript
- **UI/UXライブラリ:** NextUI, Framer Motion
- **スタイリング:** Tailwind CSS
- **メール送信:** Nodemailer
- **テーマ管理:** next-themes

## コーディング規約

- ESLintとPrettierを使用してコードの品質とフォーマットを維持します。
- コミットメッセージは [Conventional Commits](https://www.conventionalcommits.org/) の規約に従います。
- husky と lint-staged を使用して、コミット前のコード品質チェックを自動化します。

## ファイル構成

- `src/`: アプリケーションのソースコード
  - `app/`: Next.js 13のApp Routerベースのページ構成
  - `components/`: 再利用可能なReactコンポーネント
    - `sections/`: 各セクションのコンポーネント
    - `ui/`: 共通UIコンポーネント
  - `lib/`: ユーティリティ関数や共通ロジック
  - `types/`: TypeScript型定義
- `public/`: 静的ファイル（画像など）

## コマンド

- `npm run dev`: 開発サーバーを起動します（Next.js）
- `npm run build`: プロダクション用にビルドします
- `npm run start`: プロダクションサーバーを起動します
- `npm run lint`: ESLintによるコード品質チェックを実行します
- `npm run format`: Prettierによるコードフォーマットを実行します
- `npm run type-check`: TypeScriptの型チェックを実行します
