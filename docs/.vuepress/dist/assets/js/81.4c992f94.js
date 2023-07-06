(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{398:function(s,a,t){"use strict";t.r(a);var r=t(1),e=Object(r.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[a("strong",[a("code",[s._v("<script>")]),s._v("元素")])]),s._v(" "),a("blockquote",[a("p",[s._v("向HTML页面中插入JavaScript的主要方法，就是使用")])]),s._v(" "),a("p",[a("strong",[a("code",[s._v("script")]),s._v("中定义了下列6个属性")])]),s._v(" "),a("ul",[a("li",[a("p",[s._v("async ：可选，表示应该立即下载脚本，但不应妨碍页面中的其他操作。只对外部脚本文件有效")])]),s._v(" "),a("li",[a("p",[s._v("charset ：可选，表示通过src属性指定的代码的字符集，比较少用。")])]),s._v(" "),a("li",[a("p",[s._v("defer ：可选，表示脚本可以延迟到文档完全被解析和显示之后再执行。只对外部脚本文件有效。")])]),s._v(" "),a("li",[a("p",[s._v("language ：已废弃")])]),s._v(" "),a("li",[a("p",[s._v("src ：可选，表示包含要执行代码的外部文件")])]),s._v(" "),a("li",[a("p",[s._v("type ：可选，表示编写代码使用的脚本语言的内容类型（也称为MIME类型）。在HTML5中，默认是text/javascript，所以不需要设置。\n"),a("strong",[s._v("使用script元素嵌入JavaScript代码，有两种方式")])])]),s._v(" "),a("li",[a("p",[s._v("第一种：直接在页面中嵌入JavaScript代码，包裹在")])])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 元素之间："),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Hello World'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[a("strong",[s._v("注意：在使用 script嵌入JavaScript代码时，切记不要在代码中的任何地方出现 script")])]),s._v(" "),a("p",[a("strong",[s._v("JavaScript代码的执行顺序：只要不存在defer和async属性，JavaScript代码就会从上至下依次解析")])]),s._v(" "),a("ul",[a("li",[s._v("第二种：使用外链脚本形式，必须有src属性，而且指定一个外部JavaScript文件的链接。")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("script src"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"example.js"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("注意：带有src属性的标签之间再包含额外的JavaScript代码，嵌入代码会被忽略")])]),s._v(" "),a("ul",[a("li",[s._v("只要不存在defer和async属性，浏览器都会按照 script出现的先后顺序对它们依次进行解析。")]),s._v(" "),a("li",[s._v("一般将全部JavaScript引用放在元素中页面的内容后面。")])]),s._v(" "),a("p",[a("strong",[s._v("延迟脚本")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("script defer"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"defer"')]),s._v(" src"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"example.js"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("script "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("async")]),s._v(" src"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"example2.js"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("会先执行example.js，然后执行example2.js\n注意：defer只适合外部脚本文件。")]),s._v(" "),a("p",[a("strong",[s._v("异步脚本")])]),s._v(" "),a("p",[s._v("async 与 defer 属性类似，都用于改变处理脚本的行为，适用于外部脚本文件，并告诉浏览器立即下载，但标记为\nasync 的脚本并不保证按照指定它们的先后顺序执行。")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("script "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("async")]),s._v(" src"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"example.js"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("script "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("async")]),s._v(" src"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"example2.js"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("两个执行顺序不定。\n指定 async 属性的目的是不让页面等待两个脚本下载和执行，从而异步加载页面其他内容。\n注意：异步脚本不要在加载期间修改DOM。\n异步脚本一定会在页面的load事件前执行，但可能会在DOMContentLoaded事件触发之前或之后执行。")]),s._v(" "),a("p",[a("strong",[s._v("使用外部文件的好处")])]),s._v(" "),a("p",[s._v("可维护性：将JavaScript文件都放在一个文件夹中，比每次都需要到不同的HTML页面修改JavaScript方便维护。\n可缓存：浏览器会缓存所有外部JavaScript文件，所以当你有多个页面使用同一个JavaScript脚本时，这个脚本只需下载一次。")]),s._v(" "),a("p",[a("strong",[a("code",[s._v("<noscript>")]),s._v("元素")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("当浏览器不支持avaScript或被禁用时，显示里面的内容。\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("noscript"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n 本页面需要浏览器支持（启用）JavaScript\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("noscript"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[a("strong",[s._v("async")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("script "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("async")]),s._v(" src"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"index.js"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("async 模式下，它的加载是异步的，JS 不会阻塞 DOM 的渲染，async 加载是无顺序的，当它加载结束，JS 会立即执行 使用场景：若该 JS 资源与 DOM 元素没有依赖关系，也不会产生其他资源所需要的数据时，可以使用async 模式，比如埋点统计")]),s._v(" "),a("p",[a("strong",[s._v("defer 模式")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("script defer src"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"index.js"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("defer 模式下，JS 的加载也是异步的，defer 资源会在 DOMContentLoaded 执行之前，并且 defer 是有顺序的加载\n如果有多个设置了 defer 的 script 标签存在，则会按照引入的前后顺序执行，即便是后面的 script 资源先返回 所以 defer 可以用来控制 JS 文件的执行顺序，比如 element-ui.js 和 vue.js，因为 element-ui.js 依赖于 vue，所以必须先引入 vue.js，再引入 element-ui.js")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("script defer src"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vue.js"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("script defer src"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"element-ui.js"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("defer 使用场景：一般情况下都可以使用 defer，特别是需要控制资源加载顺序时")]),s._v(" "),a("p",[a("strong",[s._v("module 模式")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("script type"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"module"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" a "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./a.js'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v('在主流的现代浏览器中，script 标签的属性可以加上 type="module"，浏览器会对其内部的 import 引用发起 HTTP 请求，获取模块内容。这时 script 的行为会像是 defer 一样，在后台下载，并且等待 DOM 解析 Vite 就是利用浏览器支持原生的 es module 模块，开发时跳过打包的过程，提升编译效率')]),s._v(" "),a("p",[a("strong",[s._v("preload")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("link rel"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"preload"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"script"')]),s._v(" href"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"index.js"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("link 标签的 preload 属性：用于提前加载一些需要的依赖，这些资源会优先加载\nvue2 项目打包生成的 index.html 文件，会自动给首页所需要的资源，全部添加 preload，实现关键资源的提前加载")]),s._v(" "),a("p",[a("strong",[s._v("preload")]),s._v(" 特点：")]),s._v(" "),a("ul",[a("li",[s._v("preload 加载的资源是在浏览器渲染机制之前进行处理的，并且不会阻塞 onload 事件；")]),s._v(" "),a("li",[s._v("preload 加载的 JS 脚本其加载和执行的过程是分离的，即 preload 会预加载相应的脚本代码，待到需要时自行调用；")])]),s._v(" "),a("p",[a("strong",[s._v("prefetch")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("link rel"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"prefetch"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"script"')]),s._v(" href"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"index.js"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("prefetch 是利用浏览器的空闲时间，加载页面将来可能用到的资源的一种机制；通常可以用于加载其他页面（非首页）所需要的资源，以便加快后续页面的打开速度")]),s._v(" "),a("p",[a("strong",[s._v("prefetch")]),s._v(" 特点：")]),s._v(" "),a("p",[s._v("prefetch 加载的资源可以获取非当前页面所需要的资源，并且将其放入缓存至少5分钟（无论资源是否可以缓存）\n当页面跳转时，未完成的 prefetch 请求不会被中断")]),s._v(" "),a("p",[a("strong",[s._v("总结")])]),s._v(" "),a("ul",[a("li",[s._v("把JavaScript插入到HTML页面中要使用 "),a("code",[s._v("<script>")]),s._v(" 元素，可以内嵌，也可以外链文件；")]),s._v(" "),a("li",[s._v("使用 defer 属性可以让脚本在文档完全呈现之后再执行，延迟脚本总是按照它们的顺序执行；")]),s._v(" "),a("li",[s._v("使用 async 属性表示当前脚本不必等待其他脚本，也不必阻塞文档呈现，不能保证按照它们在页面中出现的顺序执行。")]),s._v(" "),a("li",[s._v("使用 "),a("code",[s._v("<noscript>")]),s._v(" 元素可以指定在不支持脚本的浏览器中显示的提示内容。")])]),s._v(" "),a("ul",[a("li",[s._v("async、defer 是 script 标签的专属属性，对于网页中的其他资源，可以通过 link 的 preload、prefetch 属性来预加载")]),s._v(" "),a("li",[s._v("如今现代框架已经将 preload、prefetch 添加到打包流程中了，通过灵活的配置，去使用这些预加载功能，同时我们也可以审时度势地向 script 标签添加 async、defer 属性去处理资源，这样可以显著提升性能")])])])}),[],!1,null,null,null);a.default=e.exports}}]);