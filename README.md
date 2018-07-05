mina-oauth
===============

微信小程序OAuth接口

## 功能列表
- OAuth授权
- 获取基本信息


## Installation

```sh
$ npm install mina-oauth (yarn add mina-oauth)
```

## Usage

### 初始化
引入OAuth并实例化

```js
const OAuth = require('mina-oauth');
const client = new OAuth('your appid', 'your secret');
```