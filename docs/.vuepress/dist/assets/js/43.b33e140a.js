(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{361:function(t,a,s){"use strict";s.r(a);var r=s(1),e=Object(r.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("blockquote",[a("p",[t._v("事件冒泡（Event Bubbling）和事件捕获（Event Capturing）都是浏览器中处理事件的机制。")])]),t._v(" "),a("h2",{attrs:{id:"事件冒泡"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件冒泡"}},[t._v("#")]),t._v(" 事件冒泡")]),t._v(" "),a("p",[t._v("事件冒泡是指在页面中发生事件时，从最具体的元素开始（例如被单击的按钮），然后逐步向上传播到较为抽象的节点（例如文档）。例如，当你单击一个按钮时，按钮的点击事件会首先在该按钮上触发，然后传递到该按钮的父元素、父元素的父元素，一直传递到文档的根节点。")]),t._v(" "),a("h2",{attrs:{id:"事件捕获"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件捕获"}},[t._v("#")]),t._v(" 事件捕获")]),t._v(" "),a("p",[t._v("与事件冒泡相反，事件捕获是指从最不具体的节点开始（例如文档），然后逐步向下传播到最具体的节点（例如被单击的按钮）。例如，当你单击一个按钮时，点击事件会首先在文档的根节点上触发，然后传递到该按钮的父元素、父元素的父元素，一直传递到该按钮。")]),t._v(" "),a("h2",{attrs:{id:"事件流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件流"}},[t._v("#")]),t._v(" 事件流")]),t._v(" "),a("p",[t._v("事件流包括事件捕获、目标阶段和事件冒泡三个阶段。当事件触发时，首先是事件捕获阶段，然后是目标阶段，最后是事件冒泡阶段。在 DOM 标准中，事件流的默认行为是先进行事件捕获，然后再进行事件冒泡。")]),t._v(" "),a("h2",{attrs:{id:"事件委托"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件委托"}},[t._v("#")]),t._v(" 事件委托")]),t._v(" "),a("p",[t._v("事件委托是利用事件冒泡的机制来实现事件处理的一种方式，它可以将事件处理程序绑定到父元素上，从而避免在每个子元素上都绑定事件处理程序。例如，可以将事件处理程序绑定到文档的根节点上，然后根据事件的目标元素来执行相应的处理逻辑。")]),t._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("p",[t._v("事件冒泡和事件捕获是浏览器中处理事件的机制，事件流包括事件捕获、目标阶段和事件冒泡三个阶段，事件委托是一种利用事件冒泡机制来实现事件处理的方式。")])])}),[],!1,null,null,null);a.default=e.exports}}]);