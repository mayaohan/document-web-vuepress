(window.webpackJsonp=window.webpackJsonp||[]).push([[205],{522:function(n,e,s){"use strict";s.r(e);var t=s(1),v=Object(t.a)({},(function(){var n=this,e=n._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h2",{attrs:{id:"脚手架的实现原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#脚手架的实现原理"}},[n._v("#")]),n._v(" 脚手架的实现原理")]),n._v(" "),e("p",[n._v("脚手架实现原理\n如果你能回答以下 3 个问题，就掌握了脚手架的实现原理：")]),n._v(" "),e("p",[n._v("为什么全局安装 @vue/cli 后会添加的命令为 vue？\nnpm install -g @vue/cli\n代码块\n全局安装 @vue/cli 时发生了什么？")]),n._v(" "),e("p",[n._v("执行 vue 命令时发生了什么？为什么 vue 指向一个 js 文件，我们却可以直接通过 vue 命令去执行它？")]),n._v(" "),e("p",[n._v("脚手架原理进阶\n我们可以继续尝试回答以下 2 个问题：")]),n._v(" "),e("p",[n._v("为什么说脚手架本质是操作系统的客户端？它和我们在PC上安装的应用/软件有什么区别？\n如何为 node 脚手架命令创建别名？\n描述脚手架命令执行的全过程。")]),n._v(" "),e("ol",[e("li",[n._v("vue  create vue-test-app")]),n._v(" "),e("li",[n._v("通过$PATH 在环境变量中查询vue命令 相当于 执行  which vue")]),n._v(" "),e("li",[n._v("查询实际链接文件")]),n._v(" "),e("li",[n._v("通过/usr/bin/env node 执行文件")])]),n._v(" "),e("p",[n._v("扩展一下 下面两种写法的区别？")]),n._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token shebang important"}},[n._v("#!/usr/bin/env node")]),n._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#!/usr/bin/node")]),n._v("\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br")])]),e("p",[n._v("代码块\n第一种是在环境变量中查找 node\n第二种是直接执行 /usr/bin/ 目录下的 node")])])}),[],!1,null,null,null);e.default=v.exports}}]);