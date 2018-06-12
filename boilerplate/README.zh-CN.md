# {{name}}

{{description}}

## 说明
nuxt 配置文件
```bash
{{proDir}}/nuxt.config.json
```
添加了pretty的extend
```javascript
    // app/controller/home.js
    ...
    return this.success(data, message = '')
    ...
    // 前端
    {
        "data": data,
        "errno": 0,
        "errmsg": ""
    }
-------------or----------------
    // app/controller/home.js
    ...
    // return this.fail(errno, errmsg = '', data)
    // 或者直接传msg
    return this.fail(errmsg = '', data)
    ...
    // 前端
    {
        "data": data,
        "errno": errno || 1000,
        "errmsg": ""
    }
```

`注意`：上线部署之前需要先运行一次`nuxt-build`，之后`npm start`才能正常部署，否则会渲染失败

## 快速入门

<!-- 在此次添加使用文档 -->

如需进一步了解，参见 [egg 文档][egg]  [nuxt 文档][nuxt]。

### 本地开发

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### 部署

```bash
$ npm start
$ npm stop
```

### 单元测试

- [egg-bin] 内置了 [mocha], [thunk-mocha], [power-assert], [istanbul] 等框架，让你可以专注于写单元测试，无需理会配套工具。
- 断言库非常推荐使用 [power-assert]。
- 具体参见 [egg 文档 - 单元测试](https://eggjs.org/zh-cn/core/unittest)。

### 内置指令

- 使用 `npm run lint` 来做代码风格检查。
- 使用 `npm test` 来执行单元测试。
- 使用 `npm run autod` 来自动检测依赖更新，详细参见 [autod](https://www.npmjs.com/package/autod) 。


[egg]: https://eggjs.org
[nuxt]: https://nuxtjs.org