(window.webpackJsonp=window.webpackJsonp||[]).push([[198],{515:function(v,_,t){"use strict";t.r(_);var e=t(1),a=Object(e.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h2",{attrs:{id:"一、head"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#一、head"}},[v._v("#")]),v._v(" 一、HEAD")]),v._v(" "),_("p",[v._v("在"),_("code",[v._v("git")]),v._v("中，可以存在很多分支，其本质上是一个指向"),_("code",[v._v("commit")]),v._v("对象的可变指针，而"),_("code",[v._v("Head")]),v._v("是一个特别的指针，是一个指向你正在工作中的本地分支的指针")]),v._v(" "),_("p",[v._v("简单来讲，就是你现在在哪儿，HEAD 就指向哪儿")]),v._v(" "),_("p",[v._v("例如当前我们处于"),_("code",[v._v("master")]),v._v("分支，所以"),_("code",[v._v("HEAD")]),v._v("这个指针指向了"),_("code",[v._v("master")]),v._v("分支指针")]),v._v(" "),_("p",[v._v("然后通过调用"),_("code",[v._v("git checkout test")]),v._v("切换到"),_("code",[v._v("test")]),v._v("分支，那么"),_("code",[v._v("HEAD")]),v._v("则指向"),_("code",[v._v("test")]),v._v("分支，如下图：")]),v._v(" "),_("p",[v._v("但我们在"),_("code",[v._v("test")]),v._v("分支再一次"),_("code",[v._v("commit")]),v._v("信息的时候，"),_("code",[v._v("HEAD")]),v._v("指针仍然指向了"),_("code",[v._v("test")]),v._v("分支指针，而"),_("code",[v._v("test")]),v._v("分支指针已经指向了最新创建的提交，")]),v._v(" "),_("p",[v._v("这个"),_("code",[v._v("HEAD")]),v._v("存储的位置就在"),_("code",[v._v(".git/HEAD")]),v._v("目录中，查看信息可以看到"),_("code",[v._v("HEAD")]),v._v("指向了另一个文件")]),v._v(" "),_("div",{staticClass:"language-cmd line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v("$ cat .git/HEAD\nref: refs/heads/master\n\n$ cat .git/refs/heads/master\n7406a10efcc169bbab17827aeda189aa20376f7f\n")])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br"),_("span",{staticClass:"line-number"},[v._v("2")]),_("br"),_("span",{staticClass:"line-number"},[v._v("3")]),_("br"),_("span",{staticClass:"line-number"},[v._v("4")]),_("br"),_("span",{staticClass:"line-number"},[v._v("5")]),_("br")])]),_("p",[v._v("这个文件的内容是一串哈希码，而这个哈希码正是"),_("code",[v._v("master")]),v._v("分支上最新的提交所对应的哈希码")]),v._v(" "),_("p",[v._v("所以，当我们切换分支的时候，"),_("code",[v._v("HEAD")]),v._v("指针通常指向我们所在的分支，当我们在某个分支上创建新的提交时，分支指针总是会指向当前分支的最新提交")]),v._v(" "),_("p",[v._v("所以，HEAD指针 ——–> 分支指针 ——–> 最新提交")]),v._v(" "),_("h2",{attrs:{id:"二、工作树和索引"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#二、工作树和索引"}},[v._v("#")]),v._v(" 二、工作树和索引")]),v._v(" "),_("p",[v._v("在"),_("code",[v._v("Git")]),v._v("管理下，大家实际操作的目录被称为工作树，也就是工作区域")]),v._v(" "),_("p",[v._v("在数据库和工作树之间有索引，索引是为了向数据库提交作准备的区域，也被称为暂存区域")]),v._v(" "),_("p",[_("code",[v._v("Git")]),v._v("在执行提交的时候，不是直接将工作树的状态保存到数据库，而是将设置在中间索引区域的状态保存到数据库")]),v._v(" "),_("p",[v._v("因此，要提交文件，首先需要把文件加入到索引区域中。")]),v._v(" "),_("p",[v._v("所以，凭借中间的索引，可以避免工作树中不必要的文件提交，还可以将文件修改内容的一部分加入索引区域并提交")]),v._v(" "),_("h2",{attrs:{id:"三、区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#三、区别"}},[v._v("#")]),v._v(" 三、区别")]),v._v(" "),_("p",[v._v("从所在的位置来看：")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("HEAD 指针通常指向我们所在的分支，当我们在某个分支上创建新的提交时，分支指针总是会指向当前分支的最新提交")])]),v._v(" "),_("li",[_("p",[v._v("工作树是查看和编辑的（源）文件的实际内容")])]),v._v(" "),_("li",[_("p",[v._v("索引是放置你想要提交给 git仓库文件的地方，如工作树的代码通过 git add 则添加到 git 索引中，通过git commit 则将索引区域的文件提交到 git 仓库中")])])])])}),[],!1,null,null,null);_.default=a.exports}}]);