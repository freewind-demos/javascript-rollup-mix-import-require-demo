JavaScript Rollup Mix "import" "require" Demo
=============================

这里有很多坑点需要注意：

rollup的策略是只能支持`esm`与`commonjs`两者之一，不能同时支持，好在rollup-cli提供了`--bundleConfigAsCjs`可以解决这个问题（但是不清楚如果将rollup嵌入到别的工具，如gulp，是否还支持）。但这种支持只是语法层面不报错，require引用的代码并不会被bundle，还需要借助插件。

默认情况下，rollup只支持commonjs，只能使用'require'，不能用'import'。

但如果在package.json里增加了`"type": "module"`，则只能用`import`，不能用`require`。甚至连rollup.config.js本身也只能用`import`，非常不方便。

rollup甚至都不提供类似force的选项（曾经支持，但有人反对后移除）：https://github.com/orgs/nodejs/discussions/37857

好在rollup-cli提供了`--bundleConfigAsCjs`选项，让我们无需在package.json中指定`"type": "module"`可同时支持两种语法。

但对于`require`的内容，如果想bundle过来，需要两个插件：
1. `@rollup/plugin-commonjs`（混合支持还需要设置`transformMixedEsModules:true`），解决自己代码中`import/require`的包含
2. `@rollup/plugin-node-resolve`解决对第三方库的包含

```
npm install
npm run demo
```

将生成`bundle.js`文件