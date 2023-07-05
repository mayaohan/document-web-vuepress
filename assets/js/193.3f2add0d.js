(window.webpackJsonp=window.webpackJsonp||[]).push([[193],{507:function(v,_,e){"use strict";e.r(_);var s=e(1),a=Object(s.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h2",{attrs:{id:"web常见的攻击方式有哪些"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#web常见的攻击方式有哪些"}},[v._v("#")]),v._v(" web常见的攻击方式有哪些")]),v._v(" "),_("blockquote",[_("p",[_("code",[v._v("Web攻击（WebAttack）")]),v._v("是针对用户上网行为或网站服务器等设备进行攻击的行为,如植入恶意代码，修改网站权限，获取网站用户隐私信息等等,Web应用程序的安全性是任何基于Web业务的重要组成部分,确保Web应用程序安全十分重要，即使是代码中很小的 bug 也有可能导致隐私信息被泄露,站点安全就是为保护站点不受未授权的访问、使用、修改和破坏而采取的行为或实践")])]),v._v(" "),_("p",[v._v("我们常见的Web攻击方式有")]),v._v(" "),_("ul",[_("li",[v._v("XSS (Cross Site Scripting) 跨站脚本攻击")]),v._v(" "),_("li",[v._v("CSRF（Cross-site request forgery）跨站请求伪造")]),v._v(" "),_("li",[v._v("SQL注入攻击")])]),v._v(" "),_("h2",{attrs:{id:"xss"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#xss"}},[v._v("#")]),v._v(" XSS")]),v._v(" "),_("p",[_("code",[v._v("XSS")]),v._v("， "),_("strong",[v._v("跨站脚本攻击")]),v._v("，允许攻击者将恶意代码植入到提供给其它用户使用的页面中")]),v._v(" "),_("p",[_("code",[v._v("XSS")]),v._v("涉及到三方，即攻击者、客户端与"),_("code",[v._v("Web")]),v._v("应用")]),v._v(" "),_("p",[v._v("XSS的攻击目标是为了盗取存储在客户端的cookie或者其他网站用于识别客户端身份的敏感信息。一旦获取到合法用户的信息后，攻击者甚至可以假冒合法用户与网站进行交互")]),v._v(" "),_("p",[v._v("举个例子：")]),v._v(" "),_("p",[v._v("一个搜索页面，根据"),_("code",[v._v("url")]),v._v("参数决定关键词的内容")]),v._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v('<input type="text" value="<%= getParameter("keyword") %>">\n<button>搜索</button>\n<div>\n  您搜索的关键词是：<%= getParameter("keyword") %>\n</div>\n')])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br"),_("span",{staticClass:"line-number"},[v._v("2")]),_("br"),_("span",{staticClass:"line-number"},[v._v("3")]),_("br"),_("span",{staticClass:"line-number"},[v._v("4")]),_("br"),_("span",{staticClass:"line-number"},[v._v("5")]),_("br")])]),_("p",[v._v("这里看似并没有问题，但是如果不按套路出牌呢？")]),v._v(" "),_("p",[v._v("用户输入"),_("code",[v._v("\"><script>alert('XSS');<\/script>")]),v._v("，拼接到 HTML 中返回给浏览器。形成了如下的 HTML：")]),v._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v('<input type="text" value=""><script>alert(\'XSS\');<\/script>">\n<button>搜索</button>\n<div>\n  您搜索的关键词是："><script>alert(\'XSS\');<\/script>\n</div>\n')])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br"),_("span",{staticClass:"line-number"},[v._v("2")]),_("br"),_("span",{staticClass:"line-number"},[v._v("3")]),_("br"),_("span",{staticClass:"line-number"},[v._v("4")]),_("br"),_("span",{staticClass:"line-number"},[v._v("5")]),_("br")])]),_("p",[v._v("浏览器无法分辨出 "),_("code",[v._v("<script>alert('XSS');<\/script>")]),v._v("是恶意代码，因而将其执行，试想一下，如果是获取"),_("code",[v._v("cookie")]),v._v("发送对黑客服务器呢？")]),v._v(" "),_("p",[v._v("根据攻击的来源，XSS攻击可以分成：")]),v._v(" "),_("ul",[_("li",[v._v("存储型")]),v._v(" "),_("li",[v._v("反射型")]),v._v(" "),_("li",[v._v("DOM 型")])]),v._v(" "),_("h2",{attrs:{id:"存储型"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#存储型"}},[v._v("#")]),v._v(" 存储型")]),v._v(" "),_("p",[v._v("存储型"),_("code",[v._v("XSS")]),v._v(" 的攻击步骤：")]),v._v(" "),_("ul",[_("li",[v._v("攻击者将恶意代码提交到目标网站的数据库中")]),v._v(" "),_("li",[v._v("用户打开目标网站时，网站服务端将恶意代码从数据库取出，拼接在 HTML 中返回给浏览器")]),v._v(" "),_("li",[v._v("用户浏览器接收到响应后解析执行，混在其中的恶意代码也被执行")]),v._v(" "),_("li",[v._v("恶意代码窃取用户数据并发送到攻击者的网站，或者冒充用户的行为，调用目标网站接口执行攻击者指定的操作")])]),v._v(" "),_("p",[v._v("这种攻击常见于带有用户保存数据的网站功能，如论坛发帖、商品评论、用户私信等")]),v._v(" "),_("p",[v._v("反射型 "),_("code",[v._v("XSS")]),v._v(" 跟存储型 "),_("code",[v._v("XSS")]),v._v(" 的区别是：存储型 "),_("code",[v._v("XSS")]),v._v(" 的恶意代码存在数据库里，反射型 "),_("code",[v._v("XSS")]),v._v(" 的恶意代码存在 "),_("code",[v._v("URL")]),v._v(" 里。")]),v._v(" "),_("p",[v._v("反射型 "),_("code",[v._v("XSS")]),v._v(" 漏洞常见于通过 "),_("code",[v._v("URL")]),v._v(" 传递参数的功能，如网站搜索、跳转等。")]),v._v(" "),_("p",[v._v("由于需要用户主动打开恶意的 "),_("code",[v._v("URL")]),v._v(" 才能生效，攻击者往往会结合多种手段诱导用户点击。")]),v._v(" "),_("p",[_("code",[v._v("POST")]),v._v(" 的内容也可以触发反射型 "),_("code",[v._v("XSS")]),v._v("，只不过其触发条件比较苛刻（需要构造表单提交页面，并引导用户点击），所以非常少见")]),v._v(" "),_("h2",{attrs:{id:"dom-型-xss"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#dom-型-xss"}},[v._v("#")]),v._v(" DOM 型 XSS")]),v._v(" "),_("p",[_("code",[v._v("DOM")]),v._v(" 型 "),_("code",[v._v("XSS")]),v._v(" 的攻击步骤：")]),v._v(" "),_("ul",[_("li",[v._v("攻击者构造出特殊的 "),_("code",[v._v("URL")]),v._v("，其中包含恶意代码")]),v._v(" "),_("li",[v._v("用户打开带有恶意代码的 "),_("code",[v._v("URL")])]),v._v(" "),_("li",[v._v("用户浏览器接收到响应后解析执行，前端 "),_("code",[v._v("JavaScript")]),v._v(" 取出 URL 中的恶意代码并执行")]),v._v(" "),_("li",[v._v("恶意代码窃取用户数据并发送到攻击者的网站，或者冒充用户的行为，调用目标网站接口执行攻击者指定的操作\n"),_("code",[v._v("DOM")]),v._v(" 型"),_("code",[v._v("XSS")]),v._v("跟前两种 "),_("code",[v._v("XSS")]),v._v("的区别："),_("code",[v._v("DOM")]),v._v("型 "),_("code",[v._v("XSS")]),v._v(" 攻击中，取出和执行恶意代码由浏览器端完成，属于前端 "),_("code",[v._v("JavaScript")]),v._v("自身的安全漏洞，而其他两种 "),_("code",[v._v("XSS")]),v._v(" 都属于服务端的安全漏洞")])]),v._v(" "),_("p",[_("code",[v._v("XSS")]),v._v("的预防\n通过前面介绍，看到XSS攻击的两大要素：")]),v._v(" "),_("ul",[_("li",[v._v("攻击者提交而恶意代码")]),v._v(" "),_("li",[v._v("浏览器执行恶意代码")])]),v._v(" "),_("p",[v._v("针对第一个要素，我们在用户输入的过程中，过滤掉用户输入的恶劣代码，然后提交给后端，但是如果攻击者绕开前端请求，直接构造请求就不能预防了")]),v._v(" "),_("p",[v._v("而如果在后端写入数据库前，对输入进行过滤，然后把内容给前端，但是这个内容在不同地方就会有不同显示")]),v._v(" "),_("p",[v._v("例如：")]),v._v(" "),_("p",[v._v("一个正常的用户输入了"),_("code",[v._v("5 < 7")]),v._v("这个内容，在写入数据库前，被转义，变成了 "),_("code",[v._v("5 < 7")])]),v._v(" "),_("p",[v._v("在客户端中，一旦经过了"),_("code",[v._v("escapeHTML()")]),v._v("，客户端显示的内容就变成了乱码"),_("code",[v._v("( 5 < 7 )")])]),v._v(" "),_("p",[v._v("在前端中，不同的位置所需的编码也不同。")]),v._v(" "),_("ul",[_("li",[v._v("当 5 < 7 作为 "),_("code",[v._v("HTML")]),v._v("拼接页面时，可以正常显示：")])]),v._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v('<div title="comment">5 &lt; 7</div>\n')])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br")])]),_("ul",[_("li",[v._v("当 5 < 7 通过 "),_("code",[v._v("Ajax")]),v._v(" 返回，然后赋值给 "),_("code",[v._v("JavaScript")]),v._v(" 的变量时，前端得到的字符串就是转义后的字符。这个内容不能直接用于 "),_("code",[v._v("Vue")]),v._v(" 等模板的展示，也不能直接用于内容长度计算。不能用于标题、"),_("code",[v._v("alert")]),v._v(" 等")])]),v._v(" "),_("p",[v._v("可以看到，过滤并非可靠的，下面就要通过防止浏览器执行恶意代码：")]),v._v(" "),_("p",[v._v("在使用"),_("code",[v._v(".innerHTML、.outerHTML、document.write()")]),v._v(" 时要特别小心，不要把不可信的数据作为 "),_("code",[v._v("HTML")]),v._v("插到页面上，而应尽量使用 "),_("code",[v._v(".textContent、.setAttribute()")]),v._v(" 等")]),v._v(" "),_("p",[v._v("如果用 "),_("code",[v._v("Vue/React")]),v._v("技术栈，并且不使用 "),_("code",[v._v("v-html/dangerouslySetInnerHTML")]),v._v(" 功能，就在前端 "),_("code",[v._v("render")]),v._v("阶段避免 "),_("code",[v._v("innerHTML、outerHTML")]),v._v(" 的 "),_("code",[v._v("XSS")]),v._v("隐患")]),v._v(" "),_("p",[_("code",[v._v("DOM")]),v._v("中的内联事件监听器，如 "),_("code",[v._v("location、onclick、onerror、onload、onmouseover")]),v._v(" 等，"),_("code",[v._v("<a>")]),v._v("标签的 "),_("code",[v._v("href")]),v._v(" 属性，"),_("code",[v._v("JavaScript 的 eval()、setTimeout()、setInterval()")]),v._v("等，都能把字符串作为代码运行。如果不可信的数据拼接到字符串中传递给这些 "),_("code",[v._v("API")]),v._v("，很容易产生安全隐患，请务必避免")]),v._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v('\x3c!-- 链接内包含恶意代码 --\x3e\n< a href=" ">1</ a>\n\n<script>\n// setTimeout()/setInterval() 中调用恶意代码\nsetTimeout("UNTRUSTED")\nsetInterval("UNTRUSTED")\n\n// location 调用恶意代码\nlocation.href = \'UNTRUSTED\'\n\n// eval() 中调用恶意代码\neval("UNTRUSTED")\n')])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br"),_("span",{staticClass:"line-number"},[v._v("2")]),_("br"),_("span",{staticClass:"line-number"},[v._v("3")]),_("br"),_("span",{staticClass:"line-number"},[v._v("4")]),_("br"),_("span",{staticClass:"line-number"},[v._v("5")]),_("br"),_("span",{staticClass:"line-number"},[v._v("6")]),_("br"),_("span",{staticClass:"line-number"},[v._v("7")]),_("br"),_("span",{staticClass:"line-number"},[v._v("8")]),_("br"),_("span",{staticClass:"line-number"},[v._v("9")]),_("br"),_("span",{staticClass:"line-number"},[v._v("10")]),_("br"),_("span",{staticClass:"line-number"},[v._v("11")]),_("br"),_("span",{staticClass:"line-number"},[v._v("12")]),_("br"),_("span",{staticClass:"line-number"},[v._v("13")]),_("br")])]),_("h2",{attrs:{id:"csrf"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#csrf"}},[v._v("#")]),v._v(" CSRF")]),v._v(" "),_("p",[_("code",[v._v("CSRF（Cross-site request forgery）")]),v._v("跨站请求伪造：攻击者诱导受害者进入第三方网站，在第三方网站中，向被攻击网站发送跨站请求")]),v._v(" "),_("p",[v._v("利用受害者在被攻击网站已经获取的注册凭证，绕过后台的用户验证，达到冒充用户对被攻击的网站执行某项操作的目")]),v._v(" "),_("p",[v._v("一个典型的"),_("code",[v._v("CSRF")]),v._v("攻击有着如下的流程：")]),v._v(" "),_("ul",[_("li",[v._v("受害者登录"),_("code",[v._v("a.com")]),v._v("，并保留了登录凭证（"),_("code",[v._v("Cookie")]),v._v("）")]),v._v(" "),_("li",[v._v("攻击者引诱受害者访问了"),_("code",[v._v("b.com")])]),v._v(" "),_("li",[_("code",[v._v("b.com")]),v._v(" 向 "),_("code",[v._v("a.com")]),v._v("发送了一个请求："),_("code",[v._v("a.com/act=xx")]),v._v("。浏览器会默认携带"),_("code",[v._v("a.com")]),v._v("的Cookie")]),v._v(" "),_("li",[_("code",[v._v("a.com")]),v._v("接收到请求后，对请求进行验证，并确认是受害者的凭证，误以为是受害者自己发送的请求")]),v._v(" "),_("li",[_("code",[v._v("a.com")]),v._v("以受害者的名义执行了"),_("code",[v._v("act=xx")])]),v._v(" "),_("li",[v._v("攻击完成，攻击者在受害者不知情的情况下，冒充受害者，让a.com执行了自己定义的操作")]),v._v(" "),_("li",[_("code",[v._v("csrf")]),v._v("可以通过"),_("code",[v._v("get")]),v._v("请求，即通过访问"),_("code",[v._v("img")]),v._v("的页面后，浏览器自动访问目标地址，发送请求")])]),v._v(" "),_("p",[v._v("同样，也可以设置一个自动提交的表单发送"),_("code",[v._v("post")]),v._v("请求，如下：")]),v._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v('<form action="http://bank.example/withdraw" method=POST>\n    <input type="hidden" name="account" value="xiaoming" />\n    <input type="hidden" name="amount" value="10000" />\n    <input type="hidden" name="for" value="hacker" />\n</form>\n<script> document.forms[0].submit(); <\/script> \n')])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br"),_("span",{staticClass:"line-number"},[v._v("2")]),_("br"),_("span",{staticClass:"line-number"},[v._v("3")]),_("br"),_("span",{staticClass:"line-number"},[v._v("4")]),_("br"),_("span",{staticClass:"line-number"},[v._v("5")]),_("br"),_("span",{staticClass:"line-number"},[v._v("6")]),_("br")])]),_("p",[v._v("访问该页面后，表单会自动提交，相当于模拟用户完成了一次POST操作")]),v._v(" "),_("p",[v._v("还有一种为使用"),_("code",[v._v("a")]),v._v("标签的，需要用户点击链接才会触发")]),v._v(" "),_("p",[v._v("访问该页面后，表单会自动提交，相当于模拟用户完成了一次"),_("code",[v._v("POST")]),v._v("操作")]),v._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v('< a href="http://test.com/csrf/withdraw.php?amount=1000&for=hacker" taget="_blank">\n    重磅消息！！\n<a/>\n')])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br"),_("span",{staticClass:"line-number"},[v._v("2")]),_("br"),_("span",{staticClass:"line-number"},[v._v("3")]),_("br")])]),_("h2",{attrs:{id:"csrf的特点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#csrf的特点"}},[v._v("#")]),v._v(" CSRF的特点")]),v._v(" "),_("ul",[_("li",[v._v("攻击一般发起在第三方网站，而不是被攻击的网站。被攻击的网站无法防止攻击发生")]),v._v(" "),_("li",[v._v("攻击利用受害者在被攻击网站的登录凭证，冒充受害者提交操作；而不是直接窃取数据")]),v._v(" "),_("li",[v._v("整个过程攻击者并不能获取到受害者的登录凭证，仅仅是“冒用”")]),v._v(" "),_("li",[v._v("跨站请求可以用各种方式：图片URL、超链接、CORS、Form提交等等。部分请求方式可以直接嵌入在第三方论坛、文章中，难以进行追踪")])]),v._v(" "),_("h2",{attrs:{id:"csrf的预防"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#csrf的预防"}},[v._v("#")]),v._v(" CSRF的预防")]),v._v(" "),_("p",[_("code",[v._v("CSRF")]),v._v("通常从第三方网站发起，被攻击的网站无法防止攻击发生，只能通过增强自己网站针对"),_("code",[v._v("CSRF")]),v._v("的防护能力来提升安全性")]),v._v(" "),_("p",[v._v("防止csrf常用方案如下：")]),v._v(" "),_("ul",[_("li",[v._v("阻止不明外域的访问\n"),_("ul",[_("li",[v._v("同源检测")]),v._v(" "),_("li",[v._v("Samesite Cookie")])])]),v._v(" "),_("li",[v._v("提交时要求附加本域才能获取的信息\n"),_("ul",[_("li",[v._v("CSRF Token")]),v._v(" "),_("li",[v._v("双重Cookie验证")])])])]),v._v(" "),_("p",[v._v("这里主要聊聊"),_("code",[v._v("token")]),v._v("这种形式，流程如下：")]),v._v(" "),_("ul",[_("li",[v._v("用户打开页面的时候，服务器需要给这个用户生成一个Token")]),v._v(" "),_("li",[v._v("对于"),_("code",[v._v("GET")]),v._v("请求，"),_("code",[v._v("Token")]),v._v("将附在请求地址之后。对于 "),_("code",[v._v("POST")]),v._v(" 请求来说，要在 "),_("code",[v._v("form")]),v._v(" 的最后加上\n"),_("code",[v._v("<input type=”hidden” name=”csrftoken” value=”tokenvalue”/>")])]),v._v(" "),_("li",[v._v("当用户从客户端得到了"),_("code",[v._v("Token")]),v._v("，再次提交给服务器的时候，服务器需要判断"),_("code",[v._v("Token")]),v._v("的有效性")])]),v._v(" "),_("h2",{attrs:{id:"sql注入"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#sql注入"}},[v._v("#")]),v._v(" SQL注入")]),v._v(" "),_("p",[_("code",[v._v("Sql")]),v._v(" 注入攻击，是通过将恶意的 "),_("code",[v._v("Sql")]),v._v("查询或添加语句插入到应用的输入参数中，再在后台 "),_("code",[v._v("Sql")]),v._v(" 服务器上解析执行进行的攻击")]),v._v(" "),_("p",[v._v("流程如下所示：")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("找出"),_("code",[v._v("SQL")]),v._v("漏洞的注入点")])]),v._v(" "),_("li",[_("p",[v._v("判断数据库的类型以及版本")])]),v._v(" "),_("li",[_("p",[v._v("猜解用户名和密码")])]),v._v(" "),_("li",[_("p",[v._v("利用工具查找"),_("code",[v._v("Web")]),v._v("后台管理入口")])]),v._v(" "),_("li",[_("p",[v._v("入侵和破坏")])])]),v._v(" "),_("p",[v._v("预防方式如下：")]),v._v(" "),_("ul",[_("li",[v._v("严格检查输入变量的类型和格式")]),v._v(" "),_("li",[v._v("过滤和转义特殊字符")]),v._v(" "),_("li",[v._v("对访问数据库的"),_("code",[v._v("Web")]),v._v("应用程序采用Web应用防火墙")])]),v._v(" "),_("p",[v._v("上述只是列举了常见的web攻击方式，实际开发过程中还会遇到很多安全问题，对于这些问题， 切记不可忽视")])])}),[],!1,null,null,null);_.default=a.exports}}]);