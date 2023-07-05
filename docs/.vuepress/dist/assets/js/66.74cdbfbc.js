(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{383:function(s,n,a){"use strict";a.r(n);var e=a(1),t=Object(e.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("函数缓存，就是将函数运算过的结果进行缓存")]),s._v(" "),n("p",[s._v("本质上就是用空间（缓存存储）换时间（计算过程）")]),s._v(" "),n("p",[s._v("常用于缓存数据计算结果和缓存对象")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("const add = (a,b) => a+b;\nconst calc = memoize(add); // 函数缓存\ncalc(10,20);// 30\ncalc(10,20);// 30 缓存\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("缓存只是一个临时的数据存储，它保存数据，以便将来对该数据的请求能够更快地得到处理")]),s._v(" "),n("h2",{attrs:{id:"如何实现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#如何实现"}},[s._v("#")]),s._v(" 如何实现")]),s._v(" "),n("p",[s._v("实现函数缓存主要依靠闭包、柯里化、高阶函数，这里再简单复习下：")]),s._v(" "),n("p",[n("strong",[s._v("闭包")])]),s._v(" "),n("p",[s._v("闭包可以理解成，函数 + 函数体内可访问的变量总和")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("(function() {\n    var a = 1;\n    function add() {\n        const b = 2\n        let sum = b + a\n        console.log(sum); // 3\n    }\n    add()\n})()\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("p",[n("code",[s._v("add")]),s._v(" 函数本身，以及其内部可访问的变量，即 "),n("code",[s._v("a = 1")]),s._v(" ，这两个组合在⼀起就形成了闭包")]),s._v(" "),n("h2",{attrs:{id:"柯里化"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#柯里化"}},[s._v("#")]),s._v(" 柯里化")]),s._v(" "),n("p",[s._v("把接受多个参数的函数转换成接受一个单一参数的函数")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("// 非函数柯里化\nvar add = function (x,y) {\n    return x+y;\n}\nadd(3,4) //7\n\n// 函数柯里化\nvar add2 = function (x) {\n    //**返回函数**\n    return function (y) {\n        return x+y;\n    }\n}\nadd2(3)(4) //7\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])]),n("p",[s._v("将一个二元函数拆分成两个一元函数")]),s._v(" "),n("h2",{attrs:{id:"高阶函数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#高阶函数"}},[s._v("#")]),s._v(" 高阶函数")]),s._v(" "),n("p",[s._v("通过接收其他函数作为参数或返回其他函数的函数")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("function foo(){\n  var a = 2;\n\n  function bar() {\n    console.log(a);\n  }\n  return bar;\n}\nvar baz = foo();\nbaz();//2\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("p",[s._v("函数 "),n("code",[s._v("foo")]),s._v(" 如何返回另一个函数 "),n("code",[s._v("bar")]),s._v("，"),n("code",[s._v("baz")]),s._v(" 现在持有对 "),n("code",[s._v("foo")]),s._v(" 中定义的"),n("code",[s._v("bar")]),s._v(" 函数的引用。由于闭包特性，"),n("code",[s._v("a")]),s._v("的值能够得到")]),s._v(" "),n("p",[s._v("下面再看看如何实现函数缓存，实现原理也很简单，把参数和对应的结果数据存在一个对象中，调用时判断参数对应的数据是否存在，存在就返回对应的结果数据，否则就返回计算结果")]),s._v(" "),n("p",[s._v("如下所示")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("const memoize = function (func, content) {\n  let cache = Object.create(null)\n  content = content || this\n  return (...key) => {\n    if (!cache[key]) {\n      cache[key] = func.apply(content, key)\n    }\n    return cache[key]\n  }\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("p",[s._v("调用方式也很简单")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("const calc = memoize(add);\nconst num1 = calc(100,200)\nconst num2 = calc(100,200) // 缓存得到的结果\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("过程分析：")]),s._v(" "),n("ul",[n("li",[s._v("在当前函数作用域定义了一个空对象，用于缓存运行结果")]),s._v(" "),n("li",[s._v("运用柯里化返回一个函数，返回的函数由于闭包特性，可以访问到cache")]),s._v(" "),n("li",[s._v("然后判断输入参数是不是在cache的中。如果已经存在，直接返回cache的内容，如果没有存在，使用函数func对输入参数求值，然后把结果存储在cache中")])]),s._v(" "),n("h2",{attrs:{id:"应用场景"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#应用场景"}},[s._v("#")]),s._v(" 应用场景")]),s._v(" "),n("p",[s._v("虽然使用缓存效率是非常高的，但并不是所有场景都适用，因此千万不要极端的将所有函数都添加缓存")]),s._v(" "),n("p",[s._v("以下几种情况下，适合使用缓存：")]),s._v(" "),n("ul",[n("li",[s._v("对于昂贵的函数调用，执行复杂计算的函数")]),s._v(" "),n("li",[s._v("对于具有有限且高度重复输入范围的函数")]),s._v(" "),n("li",[s._v("对于具有重复输入值的递归函数")]),s._v(" "),n("li",[s._v("对于纯函数，即每次使用特定输入调用时返回相同输出的函数")])])])}),[],!1,null,null,null);n.default=t.exports}}]);