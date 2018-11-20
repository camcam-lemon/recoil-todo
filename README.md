# 概要

React Hooks 用のテンプレートです。  
HowToRedux を React Hooks で実装しなおしています。

# 開発手順

## node_modules のインストール

yarn をインストールしていない場合、先に`npm install -g yarn`を実行してください。

```
yarn install
```

## 開発サーバの起動

```
yarn start
```

# スクリプト一覧

packsge.json 内に記述してある script の説明は以下の通りです。

| コマンド |          説明          |
| :------: | :--------------------: |
|  start   |    開発サーバの起動    |
| release  | プロダクション用ビルド |
|  reset   |  node_modules の削除   |

## 追記（2018/11/21）

React 16.7.0-alpha.0 の時に実装したものです。  
間違った使い方をしてしまっている部分が若干あります。useCallback とか
