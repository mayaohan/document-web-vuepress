(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{443:function(s,e,a){"use strict";a.r(e);var n=a(1),t=Object(n.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"vue中的过滤器是什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue中的过滤器是什么"}},[s._v("#")]),s._v(" Vue中的过滤器是什么")]),s._v(" "),e("p",[s._v("过滤器"),e("code",[s._v("（filter）")]),s._v("是输送介质管道上不可缺少的一种装置，大白话，就是把一些不必要的东西过滤掉")]),s._v(" "),e("p",[s._v("过滤器实质不改变原始数据，只是对数据进行加工处理后返回过滤后的数据再进行调用处理，我们也可以理解其为一个纯函数")]),s._v(" "),e("p",[e("code",[s._v("Vue")]),s._v(" 允许你自定义过滤器，可被用于一些常见的文本格式化")]),s._v(" "),e("p",[e("strong",[s._v("ps: Vue3中已废弃filter")])]),s._v(" "),e("h2",{attrs:{id:"如何用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何用"}},[s._v("#")]),s._v(" 如何用")]),s._v(" "),e("p",[s._v("vue中的过滤器可以用在两个地方：双花括号插值和 v-bind 表达式，过滤器应该被添加在 JavaScript 表达式的尾部，由“管道”符号指示：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('\x3c!-- 在双花括号中 --\x3e\n{{ message | capitalize }}\n\n\x3c!-- 在 `v-bind` 中 --\x3e\n<div v-bind:id="rawId | formatId"></div>\n\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("h2",{attrs:{id:"定义filter"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#定义filter"}},[s._v("#")]),s._v(" 定义filter")]),s._v(" "),e("p",[s._v("在组件的选项中定义本地的过滤器")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("filters: {\n  capitalize: function (value) {\n    if (!value) return ''\n    value = value.toString()\n    return value.charAt(0).toUpperCase() + value.slice(1)\n  }\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("p",[s._v("定义全局过滤器：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("Vue.filter('capitalize', function (value) {\n  if (!value) return ''\n  value = value.toString()\n  return value.charAt(0).toUpperCase() + value.slice(1)\n})\n\nnew Vue({\n  // ...\n})\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("p",[s._v("注意：当全局过滤器和局部过滤器重名时，会采用局部过滤器")]),s._v(" "),e("p",[s._v("过滤器函数总接收表达式的值 (之前的操作链的结果) 作为第一个参数。在上述例子中，"),e("code",[s._v("capitalize")]),s._v("过滤器函数将会收到 "),e("code",[s._v("message")]),s._v(" 的值作为第一个参数")]),s._v(" "),e("p",[s._v("过滤器可以串联：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("{{ message | filterA | filterB }}\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("在这个例子中，filterA 被定义为接收单个参数的过滤器函数，表达式 message 的值将作为参数传入到函数中。然后继续调用同样被定义为接收单个参数的过滤器函数 filterB，将 filterA 的结果传递到 filterB 中。")]),s._v(" "),e("p",[s._v("过滤器是 JavaScript 函数，因此可以接收参数：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("{{ message | filterA('arg1', arg2) }}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("这里，"),e("code",[s._v("filterA")]),s._v("被定义为接收三个参数的过滤器函数。")]),s._v(" "),e("p",[s._v("其中 message 的值作为第一个参数，普通字符串 'arg1' 作为第二个参数，表达式 arg2 的值作为第三个参数")]),s._v(" "),e("p",[s._v("举个例子：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("<div id=\"app\">\n    <p>{{ msg | msgFormat('疯狂','--')}}</p>\n</div>\n\n<script>\n    // 定义一个 Vue 全局的过滤器，名字叫做  msgFormat\n    Vue.filter('msgFormat', function(msg, arg, arg2) {\n        // 字符串的  replace 方法，第一个参数，除了可写一个 字符串之外，还可以定义一个正则\n        return msg.replace(/单纯/g, arg+arg2)\n    })\n<\/script>\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("p",[e("strong",[s._v("小结：")])]),s._v(" "),e("ul",[e("li",[s._v("部过滤器优先于全局过滤器被调用")]),s._v(" "),e("li",[s._v("一个表达式可以使用多个过滤器。过滤器之间需要用管道符“|”隔开。其执行顺序从左往右")])]),s._v(" "),e("h2",{attrs:{id:"应用场景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#应用场景"}},[s._v("#")]),s._v(" 应用场景")]),s._v(" "),e("p",[s._v("平时开发中，需要用到过滤器的地方有很多，比如单位转换、数字打点、文本格式化、时间格式化之类的等")]),s._v(" "),e("p",[s._v("比如我们要实现将30000 => 30,000，这时候我们就需要使用过滤器")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("Vue.filter('toThousandFilter', function (value) {\n     if (!value) return ''\n     value = value.toString()\n     return .replace(str.indexOf('.') > -1 ? /(\\d)(?=(\\d{3})+\\.)/g : /(\\d)(?=(?:\\d{3})+$)/g, '$1,')\n})\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("h2",{attrs:{id:"原理分析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#原理分析"}},[s._v("#")]),s._v(" 原理分析")]),s._v(" "),e("p",[s._v("使用过滤器")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("{{ message | capitalize }}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("在模板编译阶段过滤器表达式将会被编译为过滤器函数，主要是用过"),e("code",[s._v("parseFilters")]),s._v("，我们放到最后讲")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("_s(_f('filterFormat')(message))\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("首先分析一下"),e("code",[s._v("_f")]),s._v("：")]),s._v(" "),e("p",[e("code",[s._v("_f")]),s._v(" 函数全名是："),e("code",[s._v("resolveFilter")]),s._v("，这个函数的作用是从"),e("code",[s._v("this.$options.filters")]),s._v("中找出注册的过滤器并返回")]),s._v(" "),e("p",[s._v("// 变为")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("this.$options.filters['filterFormat'](message) // message为参数\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("关于"),e("code",[s._v("resolveFilter")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("import { indentity,resolveAsset } from 'core/util/index' \n\nexport function resolveFilter(id){\n    return resolveAsset(this.$options,'filters',id,true) || identity\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("内部直接调用"),e("code",[s._v("resolveAsset")]),s._v("，将"),e("code",[s._v("option")]),s._v("对象，类型，过滤器"),e("code",[s._v("id")]),s._v("，以及一个触发警告的标志作为参数传递，如果找到，则返回过滤器；")]),s._v(" "),e("p",[e("code",[s._v("resolveAsset")]),s._v("的代码如下：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("export function resolveAsset(options,type,id,warnMissing){ // 因为我们找的是过滤器，所以在 resolveFilter函数中调用时 type 的值直接给的 'filters',实际这个函数还可以拿到其他很多东西\n    if(typeof id !== 'string'){ // 判断传递的过滤器id 是不是字符串，不是则直接返回\n        return \n    }\n    const assets = options[type]  // 将我们注册的所有过滤器保存在变量中\n    // 接下来的逻辑便是判断id是否在assets中存在，即进行匹配\n    if(hasOwn(assets,id)) return assets[id] // 如找到，直接返回过滤器\n    // 没有找到，代码继续执行\n    const camelizedId  = camelize(id) // 万一你是驼峰的呢\n    if(hasOwn(assets,camelizedId)) return assets[camelizedId]\n    // 没找到，继续执行\n    const PascalCaseId = capitalize(camelizedId) // 万一你是首字母大写的驼峰呢\n    if(hasOwn(assets,PascalCaseId)) return assets[PascalCaseId]\n    // 如果还是没找到，则检查原型链(即访问属性)\n    const result = assets[id] || assets[camelizedId] || assets[PascalCaseId]\n    // 如果依然没找到，则在非生产环境的控制台打印警告\n    if(process.env.NODE_ENV !== 'production' && warnMissing && !result){\n        warn('Failed to resolve ' + type.slice(0,-1) + ': ' + id, options)\n    }\n    // 无论是否找到，都返回查找结果\n    return result\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br")])]),e("p",[s._v("下面再来分析一下"),e("code",[s._v("_s")]),s._v("：")]),s._v(" "),e("p",[e("code",[s._v("_s")]),s._v(" 函数的全称是 "),e("code",[s._v("toString")]),s._v(",过滤器处理后的结果会当作参数传递给 "),e("code",[s._v("toString")]),s._v("函数，最终 toString函数执行后的结果会保存到"),e("code",[s._v("Vnode")]),s._v("中的"),e("code",[s._v("text")]),s._v("属性中，渲染到视图中")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("function toString(value){\n    return value == null\n    ? ''\n    : typeof value === 'object'\n      ? JSON.stringify(value,null,2)// JSON.stringify()第三个参数可用来控制字符串里面的间距\n      : String(value)\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("p",[s._v("最后，在分析下"),e("code",[s._v("parseFilters")]),s._v("，在模板编译阶段使用该函数阶段将模板过滤器解析为过滤器函数调用表达式")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("function parseFilters (filter) {\n    let filters = filter.split('|')\n    let expression = filters.shift().trim() // shift()删除数组第一个元素并将其返回，该方法会更改原数组\n    let i\n    if (filters) {\n        for(i = 0;i < filters.length;i++){\n            experssion = warpFilter(expression,filters[i].trim()) // 这里传进去的expression实际上是管道符号前面的字符串，即过滤器的第一个参数\n        }\n    }\n    return expression\n}\n// warpFilter函数实现\nfunction warpFilter(exp,filter){\n    // 首先判断过滤器是否有其他参数\n    const i = filter.indexof('(')\n    if(i<0){ // 不含其他参数，直接进行过滤器表达式字符串的拼接\n        return `_f(\"${filter}\")(${exp})`\n    }else{\n        const name = filter.slice(0,i) // 过滤器名称\n        const args = filter.slice(i+1) // 参数，但还多了 ‘)’\n        return `_f('${name}')(${exp},${args}` // 注意这一步少给了一个 ')'\n    }\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br")])]),e("h2",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),e("p",[s._v("在编译阶段通过"),e("code",[s._v("parseFilters")]),s._v("将过滤器编译成函数调用（串联过滤器则是一个嵌套的函数调用，前一个过滤器执行的结果是后一个过滤器函数的参数）\n编译后通过调用"),e("code",[s._v("resolveFilter")]),s._v("函数找到对应过滤器并返回结果\n执行结果作为参数传递给"),e("code",[s._v("toString")]),s._v("函数，而"),e("code",[s._v("toString")]),s._v("执行后，其结果会保存在"),e("code",[s._v("Vnode")]),s._v("的"),e("code",[s._v("text")]),s._v("属性中，渲染到视图")])])}),[],!1,null,null,null);e.default=t.exports}}]);