(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{441:function(s,t,a){"use strict";a.r(t);var n=a(1),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"一、什么是首屏加载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、什么是首屏加载"}},[s._v("#")]),s._v(" 一、什么是首屏加载")]),s._v(" "),t("p",[s._v("首屏时间（First Contentful Paint），指的是浏览器从响应用户输入网址地址，到首屏内容渲染完成的时间，此时整个网页不一定要全部渲染完成，但需要展示当前视窗需要的内容")]),s._v(" "),t("p",[s._v("首屏加载可以说是用户体验中"),t("strong",[s._v("最重要")]),s._v("的环节")]),s._v(" "),t("h3",{attrs:{id:"关于计算首屏时间"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#关于计算首屏时间"}},[s._v("#")]),s._v(" 关于计算首屏时间")]),s._v(" "),t("p",[s._v("利用"),t("code",[s._v("performance.timing")]),s._v("提供的数据：")]),s._v(" "),t("p",[t("img",{attrs:{src:"/learing_record/images/vueperformance01.avif",alt:"lerna"}})]),s._v(" "),t("p",[s._v("通过"),t("code",[s._v("DOMContentLoad")]),s._v("或者"),t("code",[s._v("performance")]),s._v("来计算出首屏时间")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 方案一：")]),s._v("\ndocument"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("addEventListener")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'DOMContentLoaded'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("event")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'first contentful painting'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 方案二：")]),s._v("\nperformance"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getEntriesByName")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"first-contentful-paint"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("startTime\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// performance.getEntriesByName("first-contentful-paint")[0]')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 会返回一个 PerformancePaintTiming的实例，结构如下：")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"first-contentful-paint"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("entryType")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"paint"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("startTime")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("507.80000002123415")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("duration")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br")])]),t("h2",{attrs:{id:"二、加载慢的原因"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、加载慢的原因"}},[s._v("#")]),s._v(" 二、加载慢的原因")]),s._v(" "),t("p",[s._v("在页面渲染的过程，导致加载速度慢的因素可能如下：")]),s._v(" "),t("ul",[t("li",[s._v("网络延时问题")]),s._v(" "),t("li",[s._v("资源文件体积是否过大")]),s._v(" "),t("li",[s._v("资源是否重复发送请求去加载了")]),s._v(" "),t("li",[s._v("加载脚本的时候，渲染内容堵塞了")])]),s._v(" "),t("h2",{attrs:{id:"三、解决方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、解决方案"}},[s._v("#")]),s._v(" 三、解决方案")]),s._v(" "),t("p",[s._v("常见的几种SPA首屏优化方式")]),s._v(" "),t("ul",[t("li",[s._v("减小入口文件积")]),s._v(" "),t("li",[s._v("静态资源本地缓存")]),s._v(" "),t("li",[s._v("UI框架按需加载")]),s._v(" "),t("li",[s._v("图片资源的压缩")]),s._v(" "),t("li",[s._v("组件重复打包")]),s._v(" "),t("li",[s._v("开启GZip压缩")]),s._v(" "),t("li",[s._v("使用SSR")])]),s._v(" "),t("h3",{attrs:{id:"减小入口文件体积"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#减小入口文件体积"}},[s._v("#")]),s._v(" 减小入口文件体积")]),s._v(" "),t("p",[s._v("常用的手段是路由懒加载，把不同路由对应的组件分割成不同的代码块，待路由被请求的时候会单独打包路由，使得入口文件变小，加载速度大大增加")]),s._v(" "),t("p",[s._v("在"),t("code",[s._v("vue-router")]),s._v("配置路由的时候，采用动态加载路由的形式")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("routes")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" \n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("path")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Blogs'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ShowBlogs'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("component")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./components/ShowBlogs.vue'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("以函数的形式加载路由，这样就可以把各自的路由文件分别打包，只有在解析给定的路由时，才会加载路由组件")]),s._v(" "),t("h3",{attrs:{id:"静态资源本地缓存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#静态资源本地缓存"}},[s._v("#")]),s._v(" 静态资源本地缓存")]),s._v(" "),t("p",[s._v("后端返回资源问题：")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("采用"),t("code",[s._v("HTTP")]),s._v("缓存，设置"),t("code",[s._v("Cache-Control")]),s._v("，"),t("code",[s._v("Last-Modified")]),s._v("，"),t("code",[s._v("Etag")]),s._v("等响应头")])]),s._v(" "),t("li",[t("p",[s._v("采用"),t("code",[s._v("Service Worker")]),s._v("离线缓存")])])]),s._v(" "),t("p",[s._v("前端合理利用"),t("code",[s._v("localStorage")])]),s._v(" "),t("h3",{attrs:{id:"ui框架按需加载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ui框架按需加载"}},[s._v("#")]),s._v(" UI框架按需加载")]),s._v(" "),t("p",[s._v("在日常使用"),t("code",[s._v("UI")]),s._v("框架，例如"),t("code",[s._v("element-UI")]),s._v("、或者"),t("code",[s._v("antd")]),s._v("，我们经常性直接引用整个"),t("code",[s._v("UI")]),s._v("库")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" ElementUI "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'element-ui'")]),s._v("\nVue"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("use")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ElementUI"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("但实际上我用到的组件只有按钮，分页，表格，输入与警告 所以我们要按需引用")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" Button"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Input"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Pagination"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Table"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" TableColumn"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" MessageBox "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'element-ui'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nVue"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("use")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Button"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nVue"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("use")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Input"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nVue"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("use")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Pagination"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h3",{attrs:{id:"组件重复打包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#组件重复打包"}},[s._v("#")]),s._v(" 组件重复打包")]),s._v(" "),t("p",[s._v("假设"),t("code",[s._v("A.js")]),s._v("文件是一个常用的库，现在有多个路由使用了"),t("code",[s._v("A.js")]),s._v("文件，这就造成了重复下载")]),s._v(" "),t("p",[s._v("解决方案：在"),t("code",[s._v("webpack")]),s._v("的"),t("code",[s._v("config")]),s._v("文件中，修改"),t("code",[s._v("CommonsChunkPlugin")]),s._v("的配置")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("minChunks")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("code",[s._v("minChunks")]),s._v("为3表示会把使用3次及以上的包抽离出来，放进公共依赖文件，避免了重复加载组件")]),s._v(" "),t("h3",{attrs:{id:"图片资源的压缩"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#图片资源的压缩"}},[s._v("#")]),s._v(" 图片资源的压缩")]),s._v(" "),t("p",[s._v("图片资源虽然不在编码过程中，但它却是对页面性能影响最大的因素")]),s._v(" "),t("p",[s._v("对于所有的图片资源，我们可以进行适当的压缩")]),s._v(" "),t("p",[s._v("对页面上使用到的"),t("code",[s._v("icon")]),s._v("，可以使用在线字体图标，或者雪碧图，将众多小图标合并到同一张图上，用以减轻"),t("code",[s._v("http")]),s._v("请求压力。")]),s._v(" "),t("h3",{attrs:{id:"开启gzip压缩"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开启gzip压缩"}},[s._v("#")]),s._v(" 开启GZip压缩")]),s._v(" "),t("p",[s._v("拆完包之后，我们再用"),t("code",[s._v("gzip")]),s._v("做一下压缩 安装"),t("code",[s._v("compression-webpack-plugin")])]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("cnmp i compression"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("webpack"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("plugin "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("D")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("在"),t("code",[s._v("vue.congig.js")]),s._v("中引入并修改"),t("code",[s._v("webpack")]),s._v("配置")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" CompressionPlugin "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'compression-webpack-plugin'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("configureWebpack")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("config")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("process"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("env"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("NODE_ENV")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'production'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 为生产环境修改配置...")]),s._v("\n            config"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("mode "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'production'")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("plugins")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("CompressionPlugin")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("test")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("\\.js$|\\.html$|\\.css")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//匹配文件名")]),s._v("\n                    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("threshold")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10240")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//对超过10k的数据进行压缩")]),s._v("\n                    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("deleteOriginalAssets")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//是否删除原文件")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("p",[s._v("在服务器我们也要做相应的配置 如果发送请求的浏览器支持"),t("code",[s._v("gzip")]),s._v("，就发送给它"),t("code",[s._v("gzip")]),s._v("格式的文件 我的服务器是用"),t("code",[s._v("express")]),s._v("框架搭建的 只要安装一下"),t("code",[s._v("compression")]),s._v("就能使用")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("const compression = require('compression')\napp.use(compression())  // 在其他中间件使用之前调用\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"使用ssr"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用ssr"}},[s._v("#")]),s._v(" 使用SSR")]),s._v(" "),t("p",[s._v("SSR（Server side ），也就是服务端渲染，组件或页面通过服务器生成html字符串，再发送到浏览器")]),s._v(" "),t("p",[s._v("从头搭建一个服务端渲染是很复杂的，"),t("code",[s._v("vue")]),s._v("应用建议使用"),t("code",[s._v("Nuxt.js")]),s._v("实现服务端渲染")]),s._v(" "),t("h3",{attrs:{id:"小结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[s._v("#")]),s._v(" 小结：")]),s._v(" "),t("p",[s._v("减少首屏渲染时间的方法有很多，总的来讲可以分成两大部分 ：资源加载优化 和 页面渲染优化")]),s._v(" "),t("p",[s._v("下图是更为全面的首屏优化的方案")]),s._v(" "),t("p",[t("img",{attrs:{src:"/learing_record/images/vueperformance02.avif",alt:"lerna"}})]),s._v(" "),t("p",[s._v("大家可以根据自己项目的情况选择各种方式进行首屏渲染的优化")])])}),[],!1,null,null,null);t.default=e.exports}}]);