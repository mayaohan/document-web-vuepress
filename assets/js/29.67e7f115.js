(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{346:function(v,_,e){"use strict";e.r(_);var p=e(1),s=Object(p.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h2",{attrs:{id:"一、背景"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#一、背景"}},[v._v("#")]),v._v(" 一、背景")]),v._v(" "),_("p",[v._v("在"),_("code",[v._v("css")]),v._v("中我们通常使用px作为单位，在PC浏览器中"),_("code",[v._v("css")]),v._v("的1个像素都是对应着电脑屏幕的1个物理像素，这会造成一种错觉，我们会认为"),_("code",[v._v("css")]),v._v("中的像素就是设备的物理像素\n，但实际情况却并非如此，"),_("code",[v._v("css")]),v._v("中的像素只是一个抽象的单位，在不同的设备或不同的环境中，"),_("code",[v._v("css")]),v._v("中的1px所代表的设备物理像素是不同的，当我们做移动端开发时，同为1px的设置，在不同分辨率的移动设备上显示效果却有很大差异，这背后就涉及了css像素、设备像素、设备独立像素、dpr、ppi的概念")]),v._v(" "),_("h2",{attrs:{id:"二、介绍"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#二、介绍"}},[v._v("#")]),v._v(" 二、介绍")]),v._v(" "),_("h3",{attrs:{id:"css像素"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#css像素"}},[v._v("#")]),v._v(" CSS像素")]),v._v(" "),_("p",[v._v("CSS像素（css pixel, px）: 适用于web编程，在 CSS 中以 px 为后缀，是一个长度单位")]),v._v(" "),_("p",[v._v("在 CSS 规范中，长度单位可以分为两类，绝对单位以及相对单位")]),v._v(" "),_("p",[v._v("px是一个相对单位，相对的是设备像素（device pixel）")]),v._v(" "),_("p",[v._v("一般情况，页面缩放比为1，1个CSS像素等于1个设备独立像素")]),v._v(" "),_("p",[_("code",[v._v("CSS")]),v._v("像素又具有两个方面的相对性：")]),v._v(" "),_("ul",[_("li",[v._v("在同一个设备上，每1个 CSS 像素所代表的设备像素是可以变化的（比如调整屏幕的分辨率）")]),v._v(" "),_("li",[v._v("在不同的设备之间，每1个 CSS 像素所代表的设备像素是可以变化的（比如两个不同型号的手机）")])]),v._v(" "),_("p",[v._v("在页面进行缩放操作也会 引起"),_("code",[v._v("css")]),v._v("中"),_("code",[v._v("px")]),v._v("的变化，假设页面放大一倍，原来的 1px 的东西变成 2px，在实际宽度不变的情况下1px 变得跟原来的 2px 的长度（长宽）一样了（元素会占据更多的设备像素）")]),v._v(" "),_("p",[v._v("假设原来需要 320px 才能填满的宽度现在只需要 160px")]),v._v(" "),_("p",[v._v("px会受到下面的因素的影响而变化：")]),v._v(" "),_("ul",[_("li",[v._v("每英寸像素（PPI）")]),v._v(" "),_("li",[v._v("设备像素比（DPR）")])]),v._v(" "),_("h3",{attrs:{id:"设备像素"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#设备像素"}},[v._v("#")]),v._v(" 设备像素")]),v._v(" "),_("p",[v._v("设备像素（device pixels），又称为物理像素")]),v._v(" "),_("p",[v._v("指设备能控制显示的最小物理单位，不一定是一个小正方形区块，也没有标准的宽高，只是用于显示丰富色彩的一个“点”而已")]),v._v(" "),_("p",[v._v("可以参考公园里的景观变色彩灯，一个彩灯(物理像素)由红、蓝、绿小灯组成，三盏小灯不同的亮度混合出各种色彩")]),v._v(" "),_("p",[_("img",{attrs:{src:"/learing_record/images/px01.avif",alt:"lerna"}})]),v._v(" "),_("p",[v._v("从屏幕在工厂生产出的那天起，它上面设备像素点就固定不变了，单位为"),_("code",[v._v("pt")])]),v._v(" "),_("h3",{attrs:{id:"设备独立像素"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#设备独立像素"}},[v._v("#")]),v._v(" 设备独立像素")]),v._v(" "),_("p",[v._v("设备独立像素（Device Independent Pixel）：与设备无关的逻辑像素，代表可以通过程序控制使用的虚拟像素，是一个总体概念，包括了CSS像素")]),v._v(" "),_("p",[v._v("在"),_("code",[v._v("javaScript")]),v._v("中可以通过"),_("code",[v._v("window.screen.width/ window.screen.height")]),v._v(" 查看")]),v._v(" "),_("p",[v._v("比如我们会说“电脑屏幕在 2560x1600分辨率下不适合玩游戏，我们把它调为 1440x900”，这里的“分辨率”（非严谨说法）指的就是设备独立像素")]),v._v(" "),_("p",[v._v("一个设备独立像素里可能包含1个或者多个物理像素点，包含的越多则屏幕看起来越清晰")]),v._v(" "),_("p",[v._v("至于为什么出现设备独立像素这种虚拟像素单位概念，下面举个例子：")]),v._v(" "),_("p",[v._v("iPhone 3GS 和 iPhone 4/4s 的尺寸都是 3.5 寸，但 iPhone 3GS 的分辨率是 320x480，iPhone 4/4s 的分辨率是 640x960")]),v._v(" "),_("p",[v._v("这意味着，iPhone 3GS 有 320 个物理像素，iPhone 4/4s 有 640 个物理像素")]),v._v(" "),_("p",[v._v("如果我们按照真实的物理像素进行布局，比如说我们按照 320 物理像素进行布局，到了 640 物理像素的手机上就会有一半的空白，为了避免这种问题，就产生了虚拟像素单位")]),v._v(" "),_("p",[v._v("我们统一 iPhone 3GS 和 iPhone 4/4s 都是 320 个虚拟像素，只是在 iPhone 3GS 上，最终 1 个虚拟像素换算成 1 个物理像素，在 iphone 4s 中，1 个虚拟像素最终换算成 2 个物理像素")]),v._v(" "),_("p",[v._v("至于 1 个虚拟像素被换算成几个物理像素，这个数值我们称之为设备像素比，也就是下面介绍的"),_("code",[v._v("dpr")])]),v._v(" "),_("h3",{attrs:{id:"dpr"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#dpr"}},[v._v("#")]),v._v(" dpr")]),v._v(" "),_("p",[v._v("dpr（device pixel ratio），设备像素比，代表设备独立像素到设备像素的转换关系，在"),_("code",[v._v("JavaScript")]),v._v("中可以通过 "),_("code",[v._v("window.devicePixelRatio")]),v._v(" 获取")]),v._v(" "),_("p",[v._v("计算公式如下：")]),v._v(" "),_("p",[_("strong",[v._v("DPR = 设备像素 / 设备独立像素")])]),v._v(" "),_("p",[v._v("当设备像素比为1:1时，使用1（1×1）个设备像素显示1个CSS像素")]),v._v(" "),_("p",[v._v("当设备像素比为2:1时，使用4（2×2）个设备像素显示1个CSS像素")]),v._v(" "),_("p",[v._v("当设备像素比为3:1时，使用9（3×3）个设备像素显示1个CSS像素")]),v._v(" "),_("p",[v._v("如下图所示：")]),v._v(" "),_("p",[_("img",{attrs:{src:"/learing_record/images/px02.avif",alt:"lerna"}})]),v._v(" "),_("p",[v._v("当"),_("code",[v._v("dpr")]),v._v("为3，那么"),_("code",[v._v("1px")]),v._v("的"),_("code",[v._v("CSS")]),v._v("像素宽度对应"),_("code",[v._v("3px")]),v._v("的物理像素的宽度，1px的"),_("code",[v._v("CSS")]),v._v("像素高度对应"),_("code",[v._v("3px")]),v._v("的物理像素高度")]),v._v(" "),_("h3",{attrs:{id:"ppi"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#ppi"}},[v._v("#")]),v._v(" ppi")]),v._v(" "),_("p",[v._v("ppi （pixel per inch），每英寸像素，表示每英寸所包含的像素点数目，更确切的说法应该是像素密度。数值越高，说明屏幕能以更高密度显示图像")]),v._v(" "),_("p",[v._v("计算公式如下：")]),v._v(" "),_("p",[_("img",{attrs:{src:"/learing_record/images/px03.avif",alt:"lerna"}})]),v._v(" "),_("h2",{attrs:{id:"三、总结"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#三、总结"}},[v._v("#")]),v._v(" 三、总结")]),v._v(" "),_("p",[v._v("无缩放情况下，1个CSS像素等于1个设备独立像素")]),v._v(" "),_("p",[v._v("设备像素由屏幕生产之后就不发生改变，而设备独立像素是一个虚拟单位会发生改变")]),v._v(" "),_("p",[v._v("PC端中，1个设备独立像素 = 1个设备像素 （在100%，未缩放的情况下）")]),v._v(" "),_("p",[v._v("在移动端中，标准屏幕（160ppi）下 1个设备独立像素 = 1个设备像素")]),v._v(" "),_("p",[v._v("设备像素比（dpr） = 设备像素 / 设备独立像素")]),v._v(" "),_("p",[v._v("每英寸像素（ppi），值越大，图像越清晰")])])}),[],!1,null,null,null);_.default=s.exports}}]);