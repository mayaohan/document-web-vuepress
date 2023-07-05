(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{399:function(s,t,a){"use strict";a.r(t);var n=a(1),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"一、单点登录是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、单点登录是什么"}},[s._v("#")]),s._v(" 一、单点登录是什么")]),s._v(" "),t("p",[s._v("单点登录（Single Sign On），简称为 SSO，是目前比较流行的企业业务整合的解决方案之一")]),s._v(" "),t("p",[s._v("SSO的定义是在多个应用系统中，用户只需要登录一次就可以访问所有相互信任的应用系统")]),s._v(" "),t("p",[s._v("SSO 一般都需要一个独立的认证中心（passport），子系统的登录均得通过"),t("code",[s._v("passport")]),s._v("，子系统本身将不参与登录操作")]),s._v(" "),t("p",[s._v("当一个系统成功登录以后，"),t("code",[s._v("passport")]),s._v("将会颁发一个令牌给各个子系统，子系统可以拿着令牌会获取各自的受保护资源，为了减少频繁认证，各个子系统在被"),t("code",[s._v("passport")]),s._v("授权以后，会建立一个局部会话，在一定时间内可以无需再次向"),t("code",[s._v("passport")]),s._v("发起认证")]),s._v(" "),t("h4",{attrs:{id:"举个例子"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#举个例子"}},[s._v("#")]),s._v(" 举个例子")]),s._v(" "),t("p",[s._v("淘宝、天猫都属于阿里旗下，当用户登录淘宝后，再打开天猫，系统便自动帮用户登录了天猫，这种现象就属于单点登录")]),s._v(" "),t("h2",{attrs:{id:"二、如何实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、如何实现"}},[s._v("#")]),s._v(" 二、如何实现")]),s._v(" "),t("h3",{attrs:{id:"同域名下的单点登录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#同域名下的单点登录"}},[s._v("#")]),s._v(" 同域名下的单点登录")]),s._v(" "),t("p",[t("code",[s._v("cookie")]),s._v("的"),t("code",[s._v("domain")]),s._v("属性设置为当前域的父域，并且父域的"),t("code",[s._v("cookie")]),s._v("会被子域所共享。"),t("code",[s._v("path")]),s._v("属性默认为"),t("code",[s._v("web")]),s._v("应用的上下文路径")]),s._v(" "),t("p",[s._v("利用 "),t("code",[s._v("Cookie")]),s._v(" 的这个特点，没错，我们只需要将"),t("code",[s._v("Cookie")]),s._v("的"),t("code",[s._v("domain")]),s._v("属性设置为父域的域名（主域名），同时将 "),t("code",[s._v("Cookie")]),s._v("的"),t("code",[s._v("path")]),s._v("属性设置为根路径，将 "),t("code",[s._v("Session ID")]),s._v("（或 "),t("code",[s._v("Token")]),s._v("）保存到父域中。这样所有的子域应用就都可以访问到这个"),t("code",[s._v("Cookie")])]),s._v(" "),t("p",[s._v("不过这要求应用系统的域名需建立在一个共同的主域名之下，如 "),t("code",[s._v("tieba.baidu.com")]),s._v(" 和 "),t("code",[s._v("map.baidu.com")]),s._v("，它们都建立在 "),t("code",[s._v("baidu.com")]),s._v("这个主域名之下，那么它们就可以通过这种方式来实现单点登录")]),s._v(" "),t("h3",{attrs:{id:"不同域名下的单点登录-一"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#不同域名下的单点登录-一"}},[s._v("#")]),s._v(" 不同域名下的单点登录(一)")]),s._v(" "),t("p",[s._v("如果是不同域的情况下，"),t("code",[s._v("Cookie")]),s._v("是不共享的，这里我们可以部署一个认证中心，用于专门处理登录请求的独立的 "),t("code",[s._v("Web")]),s._v("服务")]),s._v(" "),t("p",[s._v("用户统一在认证中心进行登录，登录成功后，认证中心记录用户的登录状态，并将 "),t("code",[s._v("token")]),s._v(" 写入 "),t("code",[s._v("Cookie")]),s._v("（注意这个 "),t("code",[s._v("Cookie")]),s._v("是认证中心的，应用系统是访问不到的）")]),s._v(" "),t("p",[s._v("应用系统检查当前请求有没有 "),t("code",[s._v("Token")]),s._v("，如果没有，说明用户在当前系统中尚未登录，那么就将页面跳转至认证中心")]),s._v(" "),t("p",[s._v("由于这个操作会将认证中心的 "),t("code",[s._v("Cookie")]),s._v(" 自动带过去，因此，认证中心能够根据 "),t("code",[s._v("Cookie")]),s._v(" 知道用户是否已经登录过了")]),s._v(" "),t("p",[s._v("如果认证中心发现用户尚未登录，则返回登录页面，等待用户登录")]),s._v(" "),t("p",[s._v("如果发现用户已经登录过了，就不会让用户再次登录了，而是会跳转回目标 "),t("code",[s._v("URL")]),s._v("，并在跳转前生成一个 "),t("code",[s._v("Token")]),s._v("，拼接在目标"),t("code",[s._v("URL")]),s._v(" 的后面，回传给目标应用系统")]),s._v(" "),t("p",[s._v("应用系统拿到 "),t("code",[s._v("Token")]),s._v("之后，还需要向认证中心确认下 "),t("code",[s._v("Token")]),s._v(" 的合法性，防止用户伪造。确认无误后，应用系统记录用户的登录状态，并将 "),t("code",[s._v("Token")]),s._v("写入"),t("code",[s._v("Cookie")]),s._v("，然后给本次访问放行。（注意这个 "),t("code",[s._v("Cookie")]),s._v(" 是当前应用系统的）当用户再次访问当前应用系统时，就会自动带上这个 "),t("code",[s._v("Token")]),s._v("，应用系统验证 Token 发现用户已登录，于是就不会有认证中心什么事了")]),s._v(" "),t("p",[s._v("此种实现方式相对复杂，支持跨域，扩展性好，是单点登录的标准做法")]),s._v(" "),t("h3",{attrs:{id:"不同域名下的单点登录-二"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#不同域名下的单点登录-二"}},[s._v("#")]),s._v(" 不同域名下的单点登录(二)")]),s._v(" "),t("p",[s._v("可以选择将 "),t("code",[s._v("Session ID")]),s._v(" （或 "),t("code",[s._v("Token")]),s._v(" ）保存到浏览器的 "),t("code",[s._v("LocalStorage")]),s._v(" 中，让前端在每次向后端发送请求时，主动将"),t("code",[s._v("LocalStorage")]),s._v("的数据传递给服务端")]),s._v(" "),t("p",[s._v("这些都是由前端来控制的，后端需要做的仅仅是在用户登录成功后，将 "),t("code",[s._v("Session ID")]),s._v("（或 "),t("code",[s._v("Token")]),s._v("）放在响应体中传递给前端")]),s._v(" "),t("p",[s._v("单点登录完全可以在前端实现。前端拿到 "),t("code",[s._v("Session ID")]),s._v("（或 "),t("code",[s._v("Token")]),s._v(" ）后，除了将它写入自己的 "),t("code",[s._v("LocalStorage")]),s._v(" 中之外，还可以通过特殊手段将它写入多个其他域下的 "),t("code",[s._v("LocalStorage")]),s._v(" 中")]),s._v(" "),t("p",[s._v("关键代码如下：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 获取 token")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" token "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" result"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("token"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 动态创建一个不可见的iframe，在iframe中加载一个跨域HTML")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" iframe "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" document"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("createElement")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"iframe"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\niframe"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("src "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://app1.com/localstorage.html"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\ndocument"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("body"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("append")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("iframe"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 使用postMessage()方法将token传递给iframe")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("setTimeout")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    iframe"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("contentWindow"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("postMessage")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("token"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://app1.com"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4000")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("setTimeout")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    iframe"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("remove")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6000")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 在这个iframe所加载的HTML中绑定一个事件监听器，当事件被触发时，把接收到的token数据写入localStorage")]),s._v("\nwindow"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("addEventListener")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'message'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("event")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    localStorage"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("setItem")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'token'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" event"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br")])]),t("p",[s._v("前端通过 "),t("code",[s._v("iframe")]),s._v("+"),t("code",[s._v("postMessage()")]),s._v(" 方式，将同一份 "),t("code",[s._v("Token")]),s._v(" 写入到了多个域下的 "),t("code",[s._v("LocalStorage")]),s._v(" 中，前端每次在向后端发送请求之前，都会主动从 "),t("code",[s._v("LocalStorage")]),s._v(" 中读取"),t("code",[s._v("Token")]),s._v("并在请求中携带，这样就实现了同一份"),t("code",[s._v("Token")]),s._v(" 被多个域所共享")]),s._v(" "),t("p",[s._v("此种实现方式完全由前端控制，几乎不需要后端参与，同样支持跨域")]),s._v(" "),t("h2",{attrs:{id:"三、流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、流程"}},[s._v("#")]),s._v(" 三、流程")]),s._v(" "),t("p",[s._v("单点登录的流程如下所示：")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("用户访问系统1的受保护资源，系统1发现用户未登录，跳转至sso认证中心，并将自己的地址作为参数")])]),s._v(" "),t("li",[t("p",[s._v("sso认证中心发现用户未登录，将用户引导至登录页面")])]),s._v(" "),t("li",[t("p",[s._v("用户输入用户名密码提交登录申请")])]),s._v(" "),t("li",[t("p",[s._v("sso认证中心校验用户信息，创建用户与sso认证中心之间的会话，称为全局会话，同时创建授权令牌")])]),s._v(" "),t("li",[t("p",[s._v("sso认证中心带着令牌跳转会最初的请求地址（系统1）")])]),s._v(" "),t("li",[t("p",[s._v("系统1拿到令牌，去sso认证中心校验令牌是否有效")])]),s._v(" "),t("li",[t("p",[s._v("sso认证中心校验令牌，返回有效，注册系统1")])]),s._v(" "),t("li",[t("p",[s._v("系统1使用该令牌创建与用户的会话，称为局部会话，返回受保护资源")])]),s._v(" "),t("li",[t("p",[s._v("用户访问系统2的受保护资源")])]),s._v(" "),t("li",[t("p",[s._v("系统2发现用户未登录，跳转至sso认证中心，并将自己的地址作为参数")])]),s._v(" "),t("li",[t("p",[s._v("sso认证中心发现用户已登录，跳转回系统2的地址，并附上令牌")])]),s._v(" "),t("li",[t("p",[s._v("系统2拿到令牌，去sso认证中心校验令牌是否有效")])]),s._v(" "),t("li",[t("p",[s._v("sso认证中心校验令牌，返回有效，注册系统2")])]),s._v(" "),t("li",[t("p",[s._v("系统2使用该令牌创建与用户的局部会话，返回受保护资源")])])]),s._v(" "),t("p",[s._v("用户登录成功之后，会与"),t("code",[s._v("sso")]),s._v("认证中心及各个子系统建立会话，用户与"),t("code",[s._v("sso")]),s._v("认证中心建立的会话称为全局会话")]),s._v(" "),t("p",[s._v("用户与各个子系统建立的会话称为局部会话，局部会话建立之后，用户访问子系统受保护资源将不再通过"),t("code",[s._v("sso")]),s._v("认证中心")]),s._v(" "),t("p",[s._v("全局会话与局部会话有如下约束关系：")]),s._v(" "),t("ul",[t("li",[s._v("局部会话存在，全局会话一定存在")]),s._v(" "),t("li",[s._v("全局会话存在，局部会话不一定存在")]),s._v(" "),t("li",[s._v("全局会话销毁，局部会话必须销毁")])])])}),[],!1,null,null,null);t.default=e.exports}}]);