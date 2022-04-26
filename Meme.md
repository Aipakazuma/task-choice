# 作るもの

https://yoshikiito.net/blog/archives/1909/

この記事のやつ（作ったあとで公開シていいですか？を投げたい（パクって良いか不明なため））

# component

- App: RootNode(やりたいこと)
  - InnerNode: [基礎, すぐに役立つ, 未来への投資]
    - LeafNodeWrapper: LeafNode の表示領域いっぱいある場合はスクロールできる(最大 25 個表示できるとする)
      - Add Button: Wrapper の上部に+ボタンを用意し、押下されるとフォームが表示され入力すると、LeafNode が追加される
      - LeafNode: 各自入力する InputForm を用意
        - SelectLabel: LeafNode を click するとモーダルが表示されてラベルを選択することができる「人のマーク、ハートのマーク、一時停止」
        - Delete: LeafNode で数秒 Hover すると右上に × ボタンが表示されて、押下すると削除される
  - Import Button: 押下するとフォームが表示され、ファイルを選択して import する
  - Export Button: 押下すると json フォーマットでツリーの内容が export される
