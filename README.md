# Google Cloud SRE エンジニア ポートフォリオ

Next.jsとHeroUIを使用して構築されたモダンなポートフォリオサイトです。Google Cloud Platform専門のSite Reliability Engineerとしての経験、スキル、プロジェクト実績を紹介します。

## 🚀 技術スタック

- **フレームワーク**: Next.js 14 (App Router)
- **UI ライブラリ**: HeroUI
- **スタイリング**: TailwindCSS
- **アニメーション**: Framer Motion
- **アイコン**: Lucide React
- **言語**: TypeScript
- **テーマ管理**: next-themes

## 📦 主な機能

- **レスポンシブデザイン**: あらゆるデバイスサイズに対応
- **ダークモード対応**: ライト/ダークテーマの切り替え
- **アニメーション**: Framer Motionによるスムーズなアニメーション
- **SEO最適化**: メタタグとOpenGraphの設定
- **モダンなUI**: Google CloudのブランドカラーとHeroUIコンポーネント

## 🎨 セクション構成

1. **Hero**: インパクトのあるファーストビュー
2. **About**: 自己紹介と専門分野の紹介
3. **Experience**: 職歴と実績の詳細
4. **Skills**: 技術スキルの視覚化
5. **Projects**: プロジェクト事例の紹介
6. **Contact**: 連絡先とお問い合わせフォーム

## 🛠 開発環境のセットアップ

### 前提条件

- Node.js 18以上
- npm または yarn

### インストール

1. リポジトリをクローン

```bash
git clone https://github.com/username/portfolio.git
cd portfolio
```

2. 依存関係をインストール

```bash
npm install
# または
yarn install
```

3. 開発サーバーを起動

```bash
npm run dev
# または
yarn dev
```

4. ブラウザで <http://localhost:3000> を開く

## 📝 カスタマイズ

### コンテンツの編集

各セクションのコンテンツは以下のファイルで編集できます：

- **Hero**: `src/components/sections/HeroSection.tsx`
- **About**: `src/components/sections/AboutSection.tsx`
- **Experience**: `src/components/sections/ExperienceSection.tsx`
- **Skills**: `src/components/sections/SkillsSection.tsx`
- **Projects**: `src/components/sections/ProjectsSection.tsx`
- **Contact**: `src/components/sections/ContactSection.tsx`

### スタイリング

- **テーマカラー**: `tailwind.config.js`
- **グローバルスタイル**: `src/app/globals.css`

## 🚀 デプロイ

### Vercel（推奨）

1. [Vercel](https://vercel.com) にアカウントを作成
2. GitHubリポジトリを連携
3. 自動デプロイが設定されます

### その他のプラットフォーム

- **Netlify**: `npm run build && npm run export`
- **GitHub Pages**: Next.js Static Exportを使用

## 📄 ライセンス

このプロジェクトはMITライセンスの下で公開されています。

## 🤝 貢献

プルリクエストやIssueは歓迎します。大きな変更を行う場合は、まずIssueを作成してください。

## 📧 お問い合わせ

プロジェクトに関するご質問は、[Issues](https://github.com/username/portfolio/issues) またはメールでお気軽にお問い合わせください。
