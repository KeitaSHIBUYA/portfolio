# ベースイメージとしてNode.js 20のAlpineを使用
FROM node:20-alpine AS builder

# ビルドに必要な依存関係をインストール
RUN apk add --no-cache libc6-compat

WORKDIR /app

# パッケージマネージャーの設定ファイルをコピー
COPY package.json package-lock.json ./

# ビルドに必要な依存関係をインストール（開発依存関係を含む）
RUN npm pkg delete scripts.postinstall && \
    npm ci

# ソースコードをコピー
COPY . .

# アプリケーションのビルド
ENV NEXT_TELEMETRY_DISABLED 1
RUN npm run build

# 本番環境用の最小イメージ
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

# アプリケーションの実行に必要なユーザーを作成
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# 必要なファイルのみをコピー
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# publicディレクトリの作成（存在しない場合用）
RUN mkdir -p ./public && chown nextjs:nodejs ./public

# 実行ユーザーを変更
USER nextjs

# ポートの設定
EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

# アプリケーションの起動
CMD ["node", "server.js"]