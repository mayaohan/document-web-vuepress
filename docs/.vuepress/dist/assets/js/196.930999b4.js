(window.webpackJsonp=window.webpackJsonp||[]).push([[196],{513:function(s,t,v){"use strict";v.r(t);var _=v(1),a=Object(_.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"stash是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#stash是什么"}},[s._v("#")]),s._v(" stash是什么")]),s._v(" "),t("h2",{attrs:{id:"概述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[s._v("#")]),s._v(" 概述")]),s._v(" "),t("p",[s._v("stash，译为存放，在 git 中，可以理解为保存当前工作进度，会把暂存区和工作区的改动进行保存，这些修改会保存在一个栈上后续你可以在任何时候任何分支重新将某次的修改推出来，重新应用这些更改的代码")]),s._v(" "),t("p",[s._v("默认情况下，"),t("code",[s._v("git stash")]),s._v("会缓存下列状态的文件：")]),s._v(" "),t("ul",[t("li",[s._v("添加到暂存区的修改（staged changes）")]),s._v(" "),t("li",[s._v("Git跟踪的但并未添加到暂存区的修改（unstaged changes）")])]),s._v(" "),t("p",[s._v("但以下状态的文件不会缓存：")]),s._v(" "),t("ul",[t("li",[s._v("在工作目录中新的文件（untracked files）")]),s._v(" "),t("li",[s._v("被忽略的文件（ignored files）")])]),s._v(" "),t("p",[s._v("如果想要上述的文件都被缓存，可以使用"),t("code",[s._v("-u")]),s._v("或者"),t("code",[s._v("--include-untracked")]),s._v("可以工作目录新的文件，使用"),t("code",[s._v("-a")]),s._v("或者"),t("code",[s._v("--all")]),s._v("命令可以当前目录下的所有修改")]),s._v(" "),t("h2",{attrs:{id:"如何使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何使用"}},[s._v("#")]),s._v(" 如何使用")]),s._v(" "),t("p",[s._v("关于"),t("code",[s._v("git stash")]),s._v("常见的命令如下：")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("git stash")])]),s._v(" "),t("li",[t("p",[s._v("git stash save")])]),s._v(" "),t("li",[t("p",[s._v("git stash list")])]),s._v(" "),t("li",[t("p",[s._v("git stash pop")])]),s._v(" "),t("li",[t("p",[s._v("git stash apply")])]),s._v(" "),t("li",[t("p",[s._v("git stash show")])]),s._v(" "),t("li",[t("p",[s._v("git stash drop")])]),s._v(" "),t("li",[t("p",[s._v("git stash clear")])])]),s._v(" "),t("h3",{attrs:{id:"git-stash"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git-stash"}},[s._v("#")]),s._v(" git stash")]),s._v(" "),t("p",[s._v("保存当前工作进度，会把暂存区和工作区的改动保存起来")]),s._v(" "),t("h3",{attrs:{id:"git-stash-save"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git-stash-save"}},[s._v("#")]),s._v(" git stash save")]),s._v(" "),t("p",[t("code",[s._v("git stash save")]),s._v("可以用于存储修改.并且将"),t("code",[s._v("git")]),s._v("的工作状态切回到"),t("code",[s._v("HEAD")]),s._v("也就是上一次合法提交上")]),s._v(" "),t("p",[s._v("如果给定具体的文件路径,"),t("code",[s._v("git stash")]),s._v("只会处理路径下的文件.其他的文件不会被存储，其存在一些参数：")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("--keep-index 或者 -k 只会存储为加入 git 管理的文件")])]),s._v(" "),t("li",[t("p",[s._v("--include-untracked 为追踪的文件也会被缓存,当前的工作空间会被恢复为完全清空的状态")])]),s._v(" "),t("li",[t("p",[s._v("-a 或者 --all 命令可以当前目录下的所有修改，包括被 git 忽略的文件")])])]),s._v(" "),t("h3",{attrs:{id:"git-stash-list"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git-stash-list"}},[s._v("#")]),s._v(" git stash list")]),s._v(" "),t("p",[s._v("显示保存进度的列表。也就意味着，"),t("code",[s._v("git stash")]),s._v("命令可以多次执行，当多次使用"),t("code",[s._v("git stash")]),s._v("命令后，栈里会充满未提交的代码，如下：")]),s._v(" "),t("p",[t("img",{attrs:{src:"/learing_record/images/gitstash01.webp",alt:""}})]),s._v(" "),t("p",[s._v("其中，"),t("code",[s._v("stash@{0}")]),s._v("、"),t("code",[s._v("stash@{1}")]),s._v("就是当前"),t("code",[s._v("stash")]),s._v("的名称")]),s._v(" "),t("h3",{attrs:{id:"git-stash-pop"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git-stash-pop"}},[s._v("#")]),s._v(" git stash pop")]),s._v(" "),t("p",[t("code",[s._v("git stash pop")]),s._v(" 从栈中读取最近一次保存的内容，也就是栈顶的"),t("code",[s._v("stash")]),s._v("会恢复到工作区")]),s._v(" "),t("p",[s._v("也可以通过 "),t("code",[s._v("git stash pop")]),s._v(" + "),t("code",[s._v("stash")]),s._v("名字执行恢复哪个"),t("code",[s._v("stash")]),s._v("恢复到当前目录")]),s._v(" "),t("p",[s._v("如果从"),t("code",[s._v("stash")]),s._v("中恢复的内容和当前目录中的内容发生了冲突，则需要手动修复冲突或者创建新的分支来解决冲突")]),s._v(" "),t("h3",{attrs:{id:"git-stash-apply"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git-stash-apply"}},[s._v("#")]),s._v(" git stash apply")]),s._v(" "),t("p",[s._v("将堆栈中的内容应用到当前目录，不同于"),t("code",[s._v("git stash pop")]),s._v("，该命令不会将内容从堆栈中删除")]),s._v(" "),t("p",[s._v("也就说该命令能够将堆栈的内容多次应用到工作目录中，适应于多个分支的情况")]),s._v(" "),t("p",[s._v("同样，可以通过"),t("code",[s._v("git stash apply")]),s._v(" + "),t("code",[s._v("stash")]),s._v("名字执行恢复哪个"),t("code",[s._v("stash")]),s._v("恢复到当前目录")]),s._v(" "),t("h3",{attrs:{id:"git-stash-show"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git-stash-show"}},[s._v("#")]),s._v(" git stash show")]),s._v(" "),t("p",[s._v("查看堆栈中最新保存的"),t("code",[s._v("stash")]),s._v("和当前目录的差异")]),s._v(" "),t("p",[s._v("通过使用"),t("code",[s._v("git stash show -p")]),s._v("查看详细的不同")]),s._v(" "),t("p",[s._v("通过使用"),t("code",[s._v("git stash show stash@{1}")]),s._v("查看指定的"),t("code",[s._v("stash")]),s._v("和当前目录差异")]),s._v(" "),t("p",[t("img",{attrs:{src:"/learing_record/images/gitstash.webp",alt:""}})]),s._v(" "),t("h3",{attrs:{id:"git-stash-drop"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git-stash-drop"}},[s._v("#")]),s._v(" git stash drop")]),s._v(" "),t("p",[t("code",[s._v("git stash drop")]),s._v(" + "),t("code",[s._v("stash")]),s._v("名称表示从堆栈中移除某个指定的stash")]),s._v(" "),t("h3",{attrs:{id:"git-stash-clear"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git-stash-clear"}},[s._v("#")]),s._v(" git stash clear")]),s._v(" "),t("p",[s._v("删除所有存储的进度")]),s._v(" "),t("h3",{attrs:{id:"应用场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#应用场景"}},[s._v("#")]),s._v(" 应用场景")]),s._v(" "),t("p",[s._v("当你在项目的一部分上已经工作一段时间后，所有东西都进入了混乱的状态， 而这时你想要切换到另一个分支或者拉下远端的代码去做一点别的事情")]),s._v(" "),t("p",[s._v("但是你创建一次未完成的代码的"),t("code",[s._v("commit")]),s._v("提交，这时候就可以使用"),t("code",[s._v("git stash")])]),s._v(" "),t("p",[s._v("例如以下场景：")]),s._v(" "),t("p",[s._v("当你的开发进行到一半,但是代码还不想进行提交 ,然后需要同步去关联远端代码时.如果你本地的代码和远端代码没有冲突时,可以直接通过"),t("code",[s._v("git pull")]),s._v("解决")]),s._v(" "),t("p",[s._v("但是如果可能发生冲突怎么办.直接"),t("code",[s._v("git pull")]),s._v("会拒绝覆盖当前的修改，这时候就可以依次使用下述的命令：")]),s._v(" "),t("ul",[t("li",[s._v("git stash")]),s._v(" "),t("li",[s._v("git pull")]),s._v(" "),t("li",[s._v("git stash pop")])]),s._v(" "),t("p",[s._v("或者当你开发到一半，现在要修改别的分支问题的时候，你也可以使用"),t("code",[s._v("git stash")]),s._v("缓存当前区域的代码")]),s._v(" "),t("ul",[t("li",[s._v("git stash：保存开发到一半的代码")]),s._v(" "),t("li",[s._v("git commit -m '修改问题'")]),s._v(" "),t("li",[s._v("git stash pop：将代码追加到最新的提交之后")])])])}),[],!1,null,null,null);t.default=a.exports}}]);