# コードレビュー

## 概要

[レビューイが記載]

## 特にレビューして欲しい部分

- [レビューイが記載]

## 体制

- レビューイ（レビューしてもらう人）：
- レビュアー（レビューする人）：参加者全員

## テンプレートの使い方

### Node.js バージョン管理 Volta のセットアップ

- https://zenn.dev/aiueda/articles/7dcecaa05d4f24
- https://docs.volta.sh/guide/getting-started

- Volta をインストール

```
curl https://get.volta.sh | bash
```

- .zshrc ファイルにパス設定を追記

```
open ~/.zshrc
```

```
# volta
#export VOLTA_HOME="$HOME/.volta"
#export PATH="$VOLTA_HOME/bin:$PATH"
```

- インストールを確認

```
volta -v
```

### Node.js セットアップ

- https://zenn.dev/aiueda/articles/7dcecaa05d4f24

- Node/npm をインストール

```
volta install node
volta install npm
```

- インストールを確認

```
node -v
npm -v
```

### Node.js プロジェクトをセットアップ

- https://zenn.dev/ikuraikura/articles/71b917ab11ae690e3cd7

- パッケージをインストール（プロジェクトに package.json がある場合）

```
npm install
```

- 特定のパッケージをローカルインストール

```
npm install --save-dev [package]
```

### Gulp のセットアップ

- gulpfile.js の export default を実行

```
npx gulp
```

- gulpfile.js の export モジュールを実行

```
npx gulp [module]
```
