## 何の検証？
最も楽かつ柔軟にWebXRを実装できる技術スタックを固めるための検証


## 環境構築&実行方法
```zsh
#bunのインストール
brew install oven-sh/bun/bun

# Biomeのインストール
brew install biome
# v1.9.1のところは最新のバージョンを確認すること
# →https://github.com/biomejs/biome/releases
curl -L https://github.com/biomejs/biome/releases/download/cli%2Fv1.9.1/biome-darwin-arm64 -o biome
chmod +x biome

# 開発環境で実行
bun dev
```
→[https://localhost:3000](https://localhost:3000)で起動
※BiomeのLinterをファイル保存時に適用するには、[BiomeのVSCode拡張](https://marketplace.visualstudio.com/items?itemName=biomejs.biome)を入れる必要がある

## 使った技術
### [React Three Fiber (r3f)](https://r3f.docs.pmnd.rs/getting-started/examples)
Three.jsのReactラッパー。
基本何でもできる。
<img width="700" alt="image" src="https://github.com/user-attachments/assets/1476c77f-402e-40b0-939f-89febdd491b4">


### [React Three Drei](https://drei.docs.pmnd.rs/getting-started/introduction)
fiberを抽象化して使いやすくしてくれる。
<img width="700" alt="image" src="https://github.com/user-attachments/assets/864c08a2-4f3b-4b73-a099-fe948e1f6d6e">


### [React Three Rapier](https://pmndrs.github.io/react-three-rapier/)
物理演算をしてくれるパッケージ。
Rustで書かれているので、旧世代のCannonよりも高速。
```tsx
<RigidBody>でMeshやGLBファイルを囲むだけで物理演算対象になる（衝突判定など）</RigidBody>
```
<img width="700" alt="image" src="https://github.com/user-attachments/assets/1bb664c9-3ede-4cfe-ac60-d3acc9a4061f">


### [Bun](https://bun.sh/)
爆速ビルドができるようになる。
脱npm/pnpm/yarn！
※Mac/Linux環境でしか動きません（WindowsはWSLで！）
```sh
brew install oven-sh/bun/bun #bunのインストール
```
<img width="900" alt="image" src="https://github.com/user-attachments/assets/8ab005f9-dd82-475a-ae6e-6796dbd6ecac">


### [Biome](https://biomejs.dev/)
爆速Lint&Format。
最大でPrettierの35倍速い。
```sh
brew install biome
# v1.9.1のところは最新のバージョンを確認すること
# →https://github.com/biomejs/biome/releases
curl -L https://github.com/biomejs/biome/releases/download/cli%2Fv1.9.1/biome-darwin-arm64 -o biome
chmod +x biome
```
<img width="900" alt="image" src="https://github.com/user-attachments/assets/3d753791-ef35-40c3-ae6f-c338b9e8d5d7">

