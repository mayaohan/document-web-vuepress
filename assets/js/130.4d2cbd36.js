(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{444:function(e,s,a){"use strict";a.r(s);var n=a(1),t=Object(n.a)({},(function(){var e=this,s=e._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h2",{attrs:{id:"vue中给对象添加新属性视图为什么不刷新"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue中给对象添加新属性视图为什么不刷新"}},[e._v("#")]),e._v(" Vue中给对象添加新属性视图为什么不刷新？")]),e._v(" "),s("h2",{attrs:{id:"直接添加属性的问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#直接添加属性的问题"}},[e._v("#")]),e._v(" 直接添加属性的问题")]),e._v(" "),s("p",[e._v("我们从一个例子开始")]),e._v(" "),s("p",[e._v("定义一个"),s("code",[e._v("p")]),e._v("标签，通过"),s("code",[e._v("v-for")]),e._v("指令进行遍历")]),e._v(" "),s("p",[e._v("然后给"),s("code",[e._v("botton")]),e._v("标签绑定点击事件，我们预期点击按钮时，数据新增一个属性，界面也会新增一行")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('<p v-for="(value,key) in item" :key="key">\n    {{ value }}\n</p>\n<button @click="addProperty">动态添加新属性</button>\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("p",[e._v("实例化一个"),s("code",[e._v("vue")]),e._v("实例，定义data属性和methods方法")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('const app = new Vue({\n    el:"#app",\n   \tdata:()=>{\n       \titem:{\n            oldProperty:"旧属性"\n        }\n    },\n    methods:{\n        addProperty(){\n            this.items.newProperty = "新属性"  // 为items添加新属性\n            console.log(this.items)  // 输出带有newProperty的items\n        }\n    }\n})\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br")])]),s("p",[e._v("点击按钮，发现结果不及预期，数据虽然更新了（"),s("code",[e._v("console")]),e._v("打印出了新属性），但页面并没有更新")]),e._v(" "),s("h2",{attrs:{id:"原理分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原理分析"}},[e._v("#")]),e._v(" 原理分析")]),e._v(" "),s("p",[e._v("为什么产生上面的情况呢？")]),e._v(" "),s("p",[e._v("下面来分析一下")]),e._v(" "),s("p",[s("code",[e._v("vue2")]),e._v("是用过"),s("code",[e._v("Object.defineProperty")]),e._v("实现数据响应式")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("const obj = {}\nObject.defineProperty(obj, 'foo', {\n        get() {\n            console.log(`get foo:${val}`);\n            return val\n        },\n        set(newVal) {\n            if (newVal !== val) {\n                console.log(`set foo:${newVal}`);\n                val = newVal\n            }\n        }\n    })\n}\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br")])]),s("p",[e._v("当我们访问"),s("code",[e._v("foo")]),e._v("属性或者设置"),s("code",[e._v("foo")]),e._v("值的时候都能够触发"),s("code",[e._v("setter与getter")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("obj.foo   \nobj.foo = 'new'\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[e._v("但是我们为"),s("code",[e._v("obj")]),e._v("添加新属性的时候，却无法触发事件属性的拦截")]),e._v(" "),s("p",[e._v("obj.bar  = '新属性'\n原因是一开始obj的foo属性被设成了响应式数据，而bar是后面新增的属性，并没有通过Object.defineProperty设置成响应式数据")]),e._v(" "),s("h2",{attrs:{id:"解决方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[e._v("#")]),e._v(" 解决方案")]),e._v(" "),s("p",[s("code",[e._v("Vue")]),e._v("不允许在已经创建的实例上动态添加新的响应式属性")]),e._v(" "),s("p",[e._v("若想实现数据与视图同步更新，可采取下面三种解决方案：")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("Vue.set()   / this.$set()")])]),e._v(" "),s("li",[s("strong",[e._v("Object.assign()")])]),e._v(" "),s("li",[s("strong",[e._v("$forceUpdated()")])])]),e._v(" "),s("h2",{attrs:{id:"vue-set-this-set"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-set-this-set"}},[e._v("#")]),e._v(" "),s("code",[e._v("Vue.set() / this.$set()")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Vue.set( target, propertyName/index, value )\nthis.set( target, propertyName/index, value )\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[s("strong",[e._v("参数")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("{Object | Array} target\n{string | number} propertyName/index\n{any} value\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("p",[e._v("返回值：设置的值")]),e._v(" "),s("p",[e._v("通过"),s("code",[e._v("Vue.set")]),e._v("向响应式对象中添加一个"),s("code",[e._v("property")]),e._v("，并确保这个新 "),s("code",[e._v("property")]),e._v("同样是响应式的，且触发视图更新")]),e._v(" "),s("p",[e._v("关于"),s("code",[e._v("Vue.set")]),e._v("源码（省略了很多与本节不相关的代码）\n源码位置："),s("code",[e._v("src\\core\\observer\\index.js")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("function set (target: Array<any> | Object, key: any, val: any): any {\n  ...\n  defineReactive(ob.value, key, val)\n  ob.dep.notify()\n  return val\n}\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br")])]),s("p",[e._v("这里无非再次调用"),s("code",[e._v("defineReactive")]),e._v("方法，实现新增属性的响应式")]),e._v(" "),s("p",[e._v("关于"),s("code",[e._v("defineReactive")]),e._v("方法，内部还是通过"),s("code",[e._v("Object.defineProperty")]),e._v("实现属性拦截")]),e._v(" "),s("p",[e._v("大致代码如下：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("function defineReactive(obj, key, val) {\n    Object.defineProperty(obj, key, {\n        get() {\n            console.log(`get ${key}:${val}`);\n            return val\n        },\n        set(newVal) {\n            if (newVal !== val) {\n                console.log(`set ${key}:${newVal}`);\n                val = newVal\n            }\n        }\n    })\n}\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br")])]),s("h2",{attrs:{id:"object-assign"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#object-assign"}},[e._v("#")]),e._v(" Object.assign()")]),e._v(" "),s("p",[e._v("直接使用"),s("code",[e._v("Object.assign()")]),e._v("添加到对象的新属性不会触发更新")]),e._v(" "),s("p",[e._v("应创建一个新的对象，合并原对象和混入对象的属性")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("this.someObject = Object.assign({},this.someObject,{newProperty1:1,newProperty2:2 ...})\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("h2",{attrs:{id:"forceupdate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#forceupdate"}},[e._v("#")]),e._v(" "),s("code",[e._v("$forceUpdate")])]),e._v(" "),s("p",[e._v("如果你发现你自己需要在 "),s("code",[e._v("Vue")]),e._v("中做一次强制更新，99.9% 的情况，是你在某个地方做错了事")]),e._v(" "),s("p",[s("code",[e._v("$forceUpdate")]),e._v("迫使 "),s("code",[e._v("Vue")]),e._v("实例重新渲染")]),e._v(" "),s("blockquote",[s("p",[e._v("注意："),s("code",[e._v("vue")]),e._v("页面中通过"),s("code",[e._v("v-for")]),e._v("进行数据渲染,如果层级过多,有时候数据发生改变但是视图未发生更新,"),s("code",[e._v("render")]),e._v("函数没有自动更新,使用"),s("code",[e._v("this.$forceUpdate()")]),e._v("是重新渲染虚拟"),s("code",[e._v("DOM")]),e._v(",不是重新加载组件,因为"),s("code",[e._v("this.$forceUpdate")]),e._v("执行后,只会触发"),s("code",[e._v("beforeUpdate")]),e._v("和"),s("code",[e._v("updated")]),e._v("这两个钩子函数,并不会触发其他的钩子函数,它仅仅影响实例本身和插入插槽内容的子组件,并不是所有子组件")])]),e._v(" "),s("h2",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[e._v("#")]),e._v(" 总结")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("如果为对象添加少量的新属性，可以直接采用"),s("code",[e._v("Vue.set()")])])]),e._v(" "),s("li",[s("p",[e._v("如果需要为新对象添加大量的新属性，则通过"),s("code",[e._v("Object.assign()")]),e._v("创建新对象")])]),e._v(" "),s("li",[s("p",[e._v("如果你实在不知道怎么操作时，可采取"),s("code",[e._v("$forceUpdate()")]),e._v("进行强制刷新 (不建议)")])])]),e._v(" "),s("p",[s("strong",[e._v("注意：")]),e._v(" "),s("code",[e._v("vue3")]),e._v("是用过"),s("code",[e._v("proxy")]),e._v("实现数据响应式的，直接动态添加新属性仍可以实现数据响应式")])])}),[],!1,null,null,null);s.default=t.exports}}]);