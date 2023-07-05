(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{450:function(s,t,a){"use strict";a.r(t);var n=a(1),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("blockquote",[t("p",[t("code",[s._v("Webpack")]),s._v(" 最初的目标是实现前端项目的模块化，旨在更高效地管理和维护项目中的每一个资源")])]),s._v(" "),t("h2",{attrs:{id:"模块化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模块化"}},[s._v("#")]),s._v(" 模块化")]),s._v(" "),t("p",[s._v("最早的时候，我们会通过文件划分的形式实现模块化，也就是将每个功能及其相关状态数据各自单独放到不同的 "),t("code",[s._v("JS")]),s._v("文件中")]),s._v(" "),t("p",[s._v("约定每个文件是一个独立的模块，然后再将这些"),t("code",[s._v("js")]),s._v("文件引入到页面，一个script标签对应一个模块，然后调用模块化的成员")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("script src"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"module-a.js"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("script"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("script src"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"module-b.js"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("script"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("但这种模块弊端十分的明显，模块都是在全局中工作，大量模块成员污染了环境，模块与模块之间并没有依赖关系、维护困难、没有私有空间等问题")]),s._v(" "),t("p",[s._v("项目一旦变大，上述问题会尤其明显")]),s._v(" "),t("p",[s._v("随后，就出现了命名空间方式，规定每个模块只暴露一个全局对象，然后模块的内容都挂载到这个对象中")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("window"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("moduleA "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("method1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'moduleA#method1'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("这种方式也并没有解决第一种方式的依赖等问题")]),s._v(" "),t("p",[s._v("再后来，我们使用立即执行函数为模块提供私有空间，通过参数的形式作为依赖声明，如下")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// module-a.js")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("$")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'module-a'")]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("method1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'#method1'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("$")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'body'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("animate")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("margin")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'200px'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    \n  window"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("moduleA "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("method1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" method1\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("jQuery"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("p",[s._v("上述的方式都是早期解决模块的方式，但是仍然存在一些没有解决的问题。例如，我们是用过"),t("code",[s._v("script")]),s._v("标签在页面引入这些模块的，这些模块的加载并不受代码的控制，时间一久维护起来也十分的麻烦")]),s._v(" "),t("p",[s._v("理想的解决方式是，在页面中引入一个"),t("code",[s._v("JS")]),s._v("入口文件，其余用到的模块可以通过代码控制，按需加载进来")]),s._v(" "),t("p",[s._v("除了模块加载的问题以外，还需要规定模块化的规范，如今流行的则是"),t("code",[s._v("CommonJS 、ES Modules")])]),s._v(" "),t("h2",{attrs:{id:"问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[s._v("#")]),s._v(" 问题")]),s._v(" "),t("p",[s._v("从后端渲染的"),t("code",[s._v("JSP、PHP")]),s._v("，到前端原生"),t("code",[s._v("JavaScript")]),s._v("，再到"),t("code",[s._v("jQuery")]),s._v("开发，再到目前的三大框架"),t("code",[s._v("Vue、React、Angular")])]),s._v(" "),t("p",[s._v("开发方式，也从"),t("code",[s._v("javascript")]),s._v("到后面的"),t("code",[s._v("es5、es6、7、8、9、10")]),s._v("，再到"),t("code",[s._v("typescript")]),s._v("，包括编写"),t("code",[s._v("CSS")]),s._v("的预处理器"),t("code",[s._v("less、scss")]),s._v("等")]),s._v(" "),t("p",[s._v("现代前端开发已经变得十分的复杂，所以我们开发过程中会遇到如下的问题：")]),s._v(" "),t("ul",[t("li",[s._v("需要通过模块化的方式来开发")]),s._v(" "),t("li",[s._v("使用一些高级的特性来加快我们的开发效率或者安全性，比如通过ES6+、TypeScript开发脚本逻辑，通过sass、less等方式来编写css样式代码")]),s._v(" "),t("li",[s._v("监听文件的变化来并且反映到浏览器上，提高开发的效率")]),s._v(" "),t("li",[t("code",[s._v("JavaScript")]),s._v(" 代码需要模块化，"),t("code",[s._v("HTML")]),s._v(" 和 "),t("code",[s._v("CSS")]),s._v(" 这些资源文件也会面临需要被模块化的问题")]),s._v(" "),t("li",[s._v("开发完成后我们还需要将代码进行压缩、合并以及其他相关的优化")]),s._v(" "),t("li",[s._v("而"),t("code",[s._v("webpack")]),s._v("恰巧可以解决以上问题")])]),s._v(" "),t("h2",{attrs:{id:"webpack是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webpack是什么"}},[s._v("#")]),s._v(" webpack是什么")]),s._v(" "),t("p",[t("code",[s._v("webpack")]),s._v(" 是一个用于现代"),t("code",[s._v("JavaScript")]),s._v("应用程序的静态模块打包工具")]),s._v(" "),t("ul",[t("li",[s._v("静态模块\n这里的静态模块指的是开发阶段，可以被 "),t("code",[s._v("webpack")]),s._v(" 直接引用的资源（可以直接被获取打包进"),t("code",[s._v("bundle.js")]),s._v("的资源）")])]),s._v(" "),t("p",[s._v("当 "),t("code",[s._v("webpack")]),s._v("处理应用程序时，它会在内部构建一个依赖图，此依赖图对应映射到项目所需的每个模块（不再局限"),t("code",[s._v("js")]),s._v("文件），并生成一个或多个 "),t("code",[s._v("bundle")])]),s._v(" "),t("p",[t("img",{attrs:{src:"/learing_record/images/webpack01.webp",alt:"lerna"}})]),s._v(" "),t("p",[t("strong",[t("code",[s._v("webpack")]),s._v("的能力：")])]),s._v(" "),t("p",[t("img",{attrs:{src:"/learing_record/images/webpack02.webp",alt:"lerna"}})]),s._v(" "),t("p",[t("strong",[s._v("模块整合能力")]),s._v("，提高性能，可维护性，解决浏览器频繁请求文件的问题")]),s._v(" "),t("p",[t("img",{attrs:{src:"/learing_record/images/webpack03.webp",alt:"lerna"}})]),s._v(" "),t("p",[t("strong",[s._v("万物皆可模块能力")]),s._v("，项目维护性增强，支持不同种类的前端模块类型，统一的模块化方案，所有资源文件的加载都可以通过代码控制")]),s._v(" "),t("p",[t("img",{attrs:{src:"/learing_record/images/webpack04.webp",alt:"lerna"}})])])}),[],!1,null,null,null);t.default=e.exports}}]);