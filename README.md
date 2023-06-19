This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
## 依赖安装
npm install @rainbow-me/rainbowkit wagmi viem

## 配置fs
放入 next.config.js

```
    webpack5: true,
    webpack: (config) => {
        config.resolve.fallback = { fs: false };

        return config;
    },
```
## web3库
```
    npm install --save ethers
    ```
    npm i wagmi viem
    ```
    npm install web3
```

## 样式安装 [UI组件](https://mui.com/material-ui/getting-started/installation/)

npm install @mui/material @emotion/react @emotion/styled


