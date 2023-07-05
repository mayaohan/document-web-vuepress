(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{416:function(t,s,a){"use strict";a.r(s);var e=a(1),r=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"全局概览"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#全局概览"}},[t._v("#")]),t._v(" 全局概览")]),t._v(" "),s("blockquote",[s("p",[t._v("Vue.js（2.0） 内部的整个流程，通过整个流程对全局有一个整体的印象，再来逐个模块进行理解。")])]),t._v(" "),s("p",[t._v("内部流程图:\n"),s("img",{attrs:{src:"/learing_record/images/vue2.01.webp",alt:"lerna"}})]),t._v(" "),s("h2",{attrs:{id:"初始化及挂载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#初始化及挂载"}},[t._v("#")]),t._v(" 初始化及挂载")]),t._v(" "),s("p",[s("img",{attrs:{src:"/learing_record/images/vue2.02.webp",alt:"lerna"}})]),t._v(" "),s("p",[t._v("在 "),s("strong",[t._v("new Vue()")]),t._v(" 之后。 Vue 会调用 "),s("strong",[t._v("_init")]),t._v(" 函数进行初始化，也就是这里的 "),s("strong",[t._v("init")]),t._v(" 过程，它会"),s("strong",[t._v("初始化生命周期")]),t._v("、"),s("strong",[t._v("事件")]),t._v("、 "),s("strong",[t._v("props")]),t._v("、 "),s("strong",[t._v("method")]),t._v("s、 "),s("strong",[t._v("data")]),t._v("、 "),s("strong",[t._v("computed")]),t._v(" 与 "),s("strong",[t._v("watch")]),t._v(" 等。其中最重要的是通过 "),s("strong",[t._v("Object.defineProperty")]),t._v(" 设置 "),s("strong",[t._v("setter")]),t._v(" 与 "),s("strong",[t._v("getter")]),t._v(" 函数，用来实现 "),s("strong",[t._v("「响应式」")]),t._v(" 以及 "),s("strong",[t._v("「依赖收集」")]),t._v("，后面会详细讲到，这里只要有一个印象即可。")]),t._v(" "),s("p",[t._v("初始化之后调用 "),s("strong",[t._v("$mount")]),t._v(" 会挂载组件，如果是运行时编译，即不存在 "),s("strong",[t._v("render function")]),t._v(" 但是存在 "),s("strong",[t._v("template")]),t._v(" 的情况，需要进行「编译」步骤。")]),t._v(" "),s("h2",{attrs:{id:"编译"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编译"}},[t._v("#")]),t._v(" 编译")]),t._v(" "),s("p",[s("strong",[t._v("compile")]),t._v("编译可以分成 "),s("strong",[t._v("parse")]),t._v("、"),s("strong",[t._v("optimize")]),t._v(" 与 "),s("strong",[t._v("generate")]),t._v(" 三个阶段，最终需要得到 "),s("strong",[t._v("render function")]),t._v("。\n"),s("img",{attrs:{src:"/learing_record/images/vue2.03.webp",alt:"lerna"}})]),t._v(" "),s("p",[s("strong",[t._v("parse")]),t._v("\nparse 会用正则等方式解析 template 模板中的指令、class、style等数据，形成AST。")]),t._v(" "),s("p",[s("strong",[t._v("optimize")]),t._v("\noptimize 的主要作用是标记 static 静态节点，这是 Vue 在编译过程中的一处优化，后面当 update 更新界面时，会有一个 patch 的过程， diff 算法会直接跳过静态节点，从而减少了比较的过程，优化了 patch 的性能。")]),t._v(" "),s("p",[s("strong",[t._v("generate")]),t._v("\ngenerate 是将 AST 转化成 render function 字符串的过程，得到结果是 render 的字符串以及 staticRenderFns 字符串。")]),t._v(" "),s("p",[t._v("在经历过 parse、optimize 与 generate 这三个阶段以后，组件中就会存在渲染 VNode 所需的 render function 了。")]),t._v(" "),s("h2",{attrs:{id:"响应式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#响应式"}},[t._v("#")]),t._v(" 响应式")]),t._v(" "),s("p",[t._v("接下来也就是 Vue.js 响应式核心部分。\n"),s("img",{attrs:{src:"/learing_record/images/vue2.04.webp",alt:"lerna"}})]),t._v(" "),s("p",[t._v("这里的 getter 跟 setter 已经在之前介绍过了，在 init 的时候通过 Object.defineProperty 进行了绑定，它使得当被设置的对象被读取的时候会执行 getter 函数，而在当被赋值的时候会执行 setter 函数。")]),t._v(" "),s("p",[t._v("当 render function 被渲染的时候，因为会读取所需对象的值，所以会触发 getter 函数进行「依赖收集」，「依赖收集」的目的是将观察者 Watcher 对象存放到当前闭包中的订阅者 Dep 的 subs 中。形成如下所示的这样一个关系。")]),t._v(" "),s("p",[s("img",{attrs:{src:"/learing_record/images/vue2.05.webp",alt:"lerna"}})]),t._v(" "),s("p",[t._v("在修改对象的值的时候，会触发对应的 setter， setter 通知之前「依赖收集」得到的 Dep 中的每一个 Watcher，告诉它们自己的值改变了，需要重新渲染视图。这时候这些 Watcher 就会开始调用 update 来更新视图，当然这中间还有一个 patch 的过程以及使用队列来异步更新的策略。")]),t._v(" "),s("h2",{attrs:{id:"virtual-dom"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#virtual-dom"}},[t._v("#")]),t._v(" Virtual DOM")]),t._v(" "),s("p",[t._v("我们知道，render function 会被转化成 VNode 节点。Virtual DOM 其实就是一棵以 JavaScript 对象（ VNode 节点）作为基础的树，用对象属性来描述节点，实际上它只是一层对真实 DOM 的抽象。最终可以通过一系列操作使这棵树映射到真实环境上。由于 Virtual DOM 是以 JavaScript 对象为基础而不依赖真实平台环境，所以使它具有了跨平台的能力，比如说浏览器平台、Weex、Node 等。")]),t._v(" "),s("p",[t._v("比如说下面这样一个例子：")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("tag")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'div'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                 "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*说明这是一个div标签*/")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("children")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("                 "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*存放该标签的子节点*/")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("tag")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("           "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*说明这是一个a标签*/")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("text")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'click me'")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*标签的内容*/")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])]),s("p",[t._v("渲染后可以得到")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("click me"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("这只是一个简单的例子，实际上的节点有更多的属性来标志节点，比如 isStatic （代表是否为静态节点）、 isComment （代表是否为注释节点）等")]),t._v(" "),s("h2",{attrs:{id:"更新视图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更新视图"}},[t._v("#")]),t._v(" 更新视图")]),t._v(" "),s("p",[s("img",{attrs:{src:"/learing_record/images/vue2.06.webp",alt:"lerna"}})]),t._v(" "),s("p",[t._v("前面我们说到，在修改一个对象值的时候，会通过 setter -> Watcher -> update 的流程来修改对应的视图，那么最终是如何更新视图的呢？")]),t._v(" "),s("p",[t._v("当数据变化后，执行 render function 就可以得到一个新的 VNode 节点，我们如果想要得到新的视图，最简单粗暴的方法就是直接解析这个新的 VNode 节点，然后用 innerHTML 直接全部渲染到真实 DOM 中。但是其实我们只对其中的一小块内容进行了修改，这样做似乎有些「浪费」。")]),t._v(" "),s("p",[t._v("那么我们为什么不能只修改那些「改变了的地方」呢？这个时候就要介绍我们的「patch」了。我们会将新的 VNode 与旧的 VNode 一起传入 patch 进行比较，经过 diff 算法得出它们的「差异」。最后我们只需要将这些「差异」的对应 DOM 进行修改即可。")]),t._v(" "),s("h2",{attrs:{id:"再看全局"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#再看全局"}},[t._v("#")]),t._v(" 再看全局")]),t._v(" "),s("p",[s("img",{attrs:{src:"/learing_record/images/vue2.07.webp",alt:"lerna"}})]),t._v(" "),s("p",[t._v("回过头再来看看这张图，是不是大脑中已经有一个大概的脉络了呢？")])])}),[],!1,null,null,null);s.default=r.exports}}]);