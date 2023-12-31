---
title: 常用shell指令
date: 2023-04-24 18:59:25
permalink: /pages/4d1953/
categories: 
  - 全部分类
  - linux
tags: 
  - linux
author: 
  name: Clare
  link: https://github.com/mayaohan/document-web-vuepress
---

<!-- more -->

1、ls：查看文件
-----------

常用参数：

-l 显示详细的文件信息

-a 显示隐藏文件


2、cd：切换工作目录
-----------

cd ~ 切换到当前用户的home目录

cd - 退回切换前的目录

cd .. 返回上一级目录

cd  不指定目录，切换到当前用户的home目录


3、pwd：显示用户当前目录
-----------

4、mkdir：创建目录
-----------

常用参数：

-p 若指定路径的父目录不存在则一并创建


5、cp：复制
-----------

常用参数：

-r 递归复制，复制的数据会使用新的时间戳等信息

-f 强制复制

-a 递归复制，保留原文件属性的前提下复制文件


6、rm：删除
-----------
常用参数：

-r删除目录及其子目录下的所有内容

-f 强制删除

-i 删除文件前先询问确认



7、mv：移动
-----------
mv 1.txt 2.txt  将1.txt重命名为2.txt



8、du：显示目录所占用的磁盘空间
-----------

常用参数：

-s 只显示当前目录的大小,单位kb

-h 以K M G为单位，提高可读性

--max-depth=1 只查看当前目录下的子目录大小

9、cat：查看文件内容
-----------
cat file1 file2 > file3 将file1和file2的内容结合起来写到file3中，file3以前的内容被清空

cat file1 file2 >> file3 将file1和file2的内容结合起来追加到file3中

10、echo：输出字符串
-----------
常用参数：

-n 显示字符串时在最后自动换行

-e 支持转义字符

和cat一样可以用重定向符“>”和“>>”将输出的内容写到文件

11、more,less：分页查看文件
-----------
常用动作命令：

回车键
向下移动一行

y  向上移动一行

空格键
向下滚动一屏

b  向上滚动一屏

d  向下滚动半屏

u  向上滚动半屏

q  退出

less还可以用方向键控制往上或往下滚动文件，more不行

12、grep：搜索文本
-----------
常用参数：

-i 忽略大小写

-n 显示行号

在shell脚本中使用时，搜索成功返回0，不成功返回1，搜索的文件不存在返回2

13、find：搜索文件
-----------
常用参数：

-name 按照名字查找

-type 按照文件类型查找（f一般文件  d目录  l 链接文件）

-size 按照文件大小查找

 

14、ln：创建链接
-----------
常用参数：

-s 创建软链接（创建链接的时候尽量用绝对路径）

ln -s  /home/nfs/C6DAI  /home/yangqing/C6DAI

15、mount：挂载
-----------
mount -t nfs -o nolock,tcp
192.168.150.21:/home/yangqing/D53.5  
/usr/local

mount 不加任何参数是查看当前挂载状态

umount 
/usr/local 卸载

16、chmod：权限设置
-----------
常用参数：

-R 递归修改权限

u:所有者权限  g:所属组权限  o:其他用户权限   a:全部用户

r: 读权限，数字表示为4   w:写权限，数字表示为2   x:执行权限，数字表示为1

chmod 777 file  等同于 chmod a=rwx file  所有用户有可读可写可执行权限

17、kill：删除执行中的程序
-----------
kill -9 pid 
彻底杀死程序

killall * 杀死当前目录所有程序

18、sed：编辑文本
-----------
常用参数：

-i 直接编辑源文件

-e 执行多个命令   sed ‘/www/d;/fff/d’

指令动作：

a 新增，当前行的后一行新增一行

i 插入，当前行的前一行插入新的一行

d 删除   sed ‘3,$d’ file  删除第3到最后一行

c 替换，以行为单位替换   sed '2,5c No 2-5 number' file  第2-5行整体替换No 2-5
number

s 字符串替换  sed ‘s/home/root/g’ file    将文件中所有home替换为root

19、tar：压缩
-----------
常用参数：

-c 建立压缩文件

-x 解压

-t 查看内容

-v 显示所有过程

-z 用gzip压缩解压

-j 用bzip2压缩解压

-f 使用文件名（必须有的参数且是最后一个参数）

解压：

*.tar      
 tar -xvf

*.tar.gz      tar -xzf

*tar.bz2    
tar -xjf   

20、vi：编辑器
-----------
一般模式：

i 切换到编辑模式

：切换到底线命令模式

Page Down/Page Up 向上/向下移动一页

Home/End 移动到这行的最前面/最后面

G 移动到这个文档的最后一行

gg 移动到这个文档的第一行

数字+Enter  光标向下移动n行

/word 在文档内搜索word字符串

dd  删除光标所在那一整行

yy  复制光标所在的那一行

u 复原前一个动作

ctrl + r 重做一次上一个动作

21、shell脚本内if判断条件
-----------
字符串比较：str1 = str2   str1 != str2

数字比较： -eq 相等      -ne不相等    -gt 大于  

-ge大于等于   -lt 小于      -le小于等于

目录文件：-d 该目录存在  -f  该文件存在

逻辑判断：-a 与      -o 或      ！非

或者使用&& ||逻辑符，但是逻辑符写在中括号之间

22、命令行快捷键
-----------
ctrl + u 删除光标前的所有字符

ctrl + k 
删除光标后的所有字符

ctrl + a 移动光标到行首

ctrl + e 移动光标到行尾

ctrl + insert 复制

shift + insert 粘贴



23、read 
-----------

read是Linux系统中常用的命令之一，可以用于从标准输入中读取用户输入的数据，并将其赋值给一个变量。

read命令的语法如下：

read [-ersp] [-u fd] [-t timeout] [-a aname] [-d delim] [-n nchars] [-N nchars] [name ...]
具体参数说明如下：

-e：启用 Readline 编辑功能，允许使用方向键等进行编辑。
-r：不对反斜杠进行转义处理，类似于原始字符串。
-s：不显示用户在终端输入的字符。
-p：在读取用户输入之前，打印出一个提示信息。
-t：设置用户输入的超时时间，单位为秒。
-n：限制用户输入的字符个数，并且不需要等待 Enter 键的输入。
-N：限制用户输入的字符个数，但需要等待 Enter 键的输入。
-d：指定一个分隔符，以此作为输入的结束标志。
-a：将输入存入一个数组中。
-u：从文件描述符 fd 读取输入。默认从标准输入（stdin）中读取输入。
例子：

- 提示用户输入名字
read -p "What is your name? " name

- 打印出用户名字
echo "Your name is ${name}."

24、条件判断
-----------
在Linux中，判断通常指的是对某个条件的判断。在Shell脚本等编程语言中，可以使用if-else语句、case语句等来进行条件判断。
``` sh
if-else语句

if [ 条件表达式 ]
then
    command1
    command2
else
    command3
    command4
fi
case语句

case 变量名 in
模式1)
    command1
    command2;;
模式2）
    command3
    command4;;
*)
    command5;;
esac
```
另外，在Linux中还有一些常用的测试命令，比如test、[、[[等，也可以用于条件判断。

例如，使用test命令判断文件是否存在：
```sh
if test -e file.txt
then
    echo "File exists."
else
    echo "File does not exist."
fi
```