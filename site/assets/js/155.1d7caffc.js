(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{461:function(t,s,a){"use strict";a.r(s);var n=a(9),r=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"python基础"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#python基础","aria-hidden":"true"}},[t._v("#")]),t._v(" Python基础")]),t._v(" "),a("p",[t._v("Python 与其他语言最大的区别就是，Python 的代码块不使用大括号 {} 来控制类，函数以及其他逻辑判断。python 最具特色的就是用缩进来写模块。")]),t._v(" "),a("h2",{attrs:{id:"数据类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据类型","aria-hidden":"true"}},[t._v("#")]),t._v(" 数据类型")]),t._v(" "),a("p",[t._v("Python 中的变量赋值不需要类型声明。Python有五个标准的数据类型：")]),t._v(" "),a("ul",[a("li",[t._v("Numbers（数字）")]),t._v(" "),a("li",[t._v("String（字符串）")]),t._v(" "),a("li",[t._v("List（列表）")]),t._v(" "),a("li",[t._v("Tuple（元组）。类似于List，但不能二次赋值，相当于只读列表")]),t._v(" "),a("li",[t._v("Dictionary（字典）。类似于javascript的Map类型")])]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("#!/usr/bin/python # 指定用什么解释器运行脚本以及解释器所在的位置。一般入口文件设置，使得可以自执行文件")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("# -*- coding: UTF-8 -*- # 用来指定文件编码为utf-8的。有中文时需要加这个")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("print")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Hello, Python!'")]),t._v("\n\n"),a("span",{attrs:{class:"token builtin"}},[t._v("str")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Hello World!'")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("print")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("str")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token number"}},[t._v("2")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token number"}},[t._v("5")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("      "),a("span",{attrs:{class:"token comment"}},[t._v("# 输出字符串中第三个至第五个之间的字符串")]),t._v("\n\n"),a("span",{attrs:{class:"token builtin"}},[t._v("list")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'runoob'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("786")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2.23")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'john'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("70.2")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("print")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("list")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token number"}},[t._v("3")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("          "),a("span",{attrs:{class:"token comment"}},[t._v("# 输出第二个至第三个元素")]),t._v("\n\n"),a("span",{attrs:{class:"token builtin"}},[t._v("tuple")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'runoob'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("786")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2.23")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'john'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("70.2")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("print")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("tuple")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token number"}},[t._v("3")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("          "),a("span",{attrs:{class:"token comment"}},[t._v("# 输出第二个至第三个的元素")]),t._v("\n\ntinydict "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token string"}},[t._v("'name'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'john'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token string"}},[t._v("'code'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token number"}},[t._v("6734")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'dept'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'sales'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("print")]),t._v(" tinydict"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v("'name'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("              "),a("span",{attrs:{class:"token comment"}},[t._v("# 输出键为 2 的值")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("Python3.X 源码文件默认使用utf-8编码，所以可以正常解析中文，无需指定 UTF-8 编码。")])]),t._v(" "),a("h2",{attrs:{id:"条件语句"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#条件语句","aria-hidden":"true"}},[t._v("#")]),t._v(" 条件语句")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# 当判断条件为1个值时\nif 判断条件：(注意最后的冒号)\n    执行语句……\nelse：(注意最后的冒号)\n    执行语句……\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("if 判断条件1:(注意最后的冒号)\n    执行语句1……\nelif 判断条件2:\n    执行语句2……\nelif 判断条件3:\n    执行语句3……\nelse:(注意最后的冒号)\n    执行语句4……\n")])])]),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("# 当判断条件为1个值时")]),t._v("\nflag "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("False")]),t._v("\nname "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'luren'")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" name "),a("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'python'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("         "),a("span",{attrs:{class:"token comment"}},[t._v("# 判断变量否为'python'")]),t._v("\n    flag "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("True")]),t._v("          "),a("span",{attrs:{class:"token comment"}},[t._v("# 条件成立时设置标志为真")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("print")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'welcome boss'")]),t._v("    "),a("span",{attrs:{class:"token comment"}},[t._v("# 并输出欢迎信息")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("else")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("print")]),t._v(" name              "),a("span",{attrs:{class:"token comment"}},[t._v("# 条件不成立时输出变量名称")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("# 当判断条件为多个值时")]),t._v("\nnum "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("5")]),t._v("     \n"),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" num "),a("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("3")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("            "),a("span",{attrs:{class:"token comment"}},[t._v("# 判断num的值")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("print")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'boss'")]),t._v("        \n"),a("span",{attrs:{class:"token keyword"}},[t._v("elif")]),t._v(" num "),a("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("print")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'user'")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("else")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("print")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'roadman'")]),t._v("     "),a("span",{attrs:{class:"token comment"}},[t._v("# 条件均不成立时输出")]),t._v("\n")])])]),a("h2",{attrs:{id:"循环"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#循环","aria-hidden":"true"}},[t._v("#")]),t._v(" 循环")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("while 判断条件：\n    执行语句……\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("for iterating_var in sequence:\n   statements(s)\n")])])]),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("fruits "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v("'banana'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'apple'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),a("span",{attrs:{class:"token string"}},[t._v("'mango'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" fruit "),a("span",{attrs:{class:"token keyword"}},[t._v("in")]),t._v(" fruits"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("        "),a("span",{attrs:{class:"token comment"}},[t._v("# 第二个实例")]),t._v("\n   "),a("span",{attrs:{class:"token keyword"}},[t._v("print")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'当前水果 :'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fruit\n")])])]),a("h2",{attrs:{id:"函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数","aria-hidden":"true"}},[t._v("#")]),t._v(" 函数")]),t._v(" "),a("h3",{attrs:{id:"函数定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数定义","aria-hidden":"true"}},[t._v("#")]),t._v(" 函数定义")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("printme")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("str")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n   "),a("span",{attrs:{class:"token keyword"}},[t._v("print")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("str")]),t._v("\n   "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("str")]),t._v("\n")])])]),a("h3",{attrs:{id:"内置函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内置函数","aria-hidden":"true"}},[t._v("#")]),t._v(" 内置函数")]),t._v(" "),a("ul",[a("li",[t._v("range(number, number)")]),t._v(" "),a("li",[t._v("len(list)")])]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),a("span",{attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("range")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("5")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("print")]),t._v(" i "),a("span",{attrs:{class:"token comment"}},[t._v("# 0 1 2 3 4")]),t._v("\n"),a("span",{attrs:{class:"token builtin"}},[t._v("list")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("range")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("5")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("print")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("len")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token builtin"}},[t._v("list")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("# 5")]),t._v("\n")])])]),a("h2",{attrs:{id:"module模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#module模块","aria-hidden":"true"}},[t._v("#")]),t._v(" module模块")]),t._v(" "),a("ol",[a("li",[t._v("import [module]")])]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("# 导入整个random模块，可以是内置/当前路径")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" random\n"),a("span",{attrs:{class:"token comment"}},[t._v("# 使用 `random` 模块下的 `randint` 方法")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("print")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("random"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("randint"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("5")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("from [module] import [name1, name2, ...]")])]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("# 从 `random` 模块里导入其中一个方法 `randint`")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" random "),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" randint\n"),a("span",{attrs:{class:"token comment"}},[t._v("# 不一样的是，使用 `randint` 的就不需要先写 `random` 了")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("print")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("randint"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("5")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("import [module] as [new_name]")])]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("# 但这个名字可能跟其他地方有冲突，因此改名成 `rd`")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" random "),a("span",{attrs:{class:"token keyword"}},[t._v("as")]),t._v(" rd\n"),a("span",{attrs:{class:"token comment"}},[t._v("# 使用 `rd` 这个名称取代原本的 `random`")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("print")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rd"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("randint"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("5")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("ol",{attrs:{start:"4"}},[a("li",[t._v("from [module] import *")])]),t._v(" "),a("p",[t._v("不推荐，容易造成名稱衝突，降低可讀性和可維護性。")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("# Import 所有 `random` module 底下的东西")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" random "),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("# 使用 `randint` 的时候也不需要先写 `random`")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("print")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("randint"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("5")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"搜索路径"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#搜索路径","aria-hidden":"true"}},[t._v("#")]),t._v(" 搜索路径")]),t._v(" "),a("p",[t._v("当你导入一个模块，Python 解析器对模块位置的搜索顺序是：")]),t._v(" "),a("ol",[a("li",[t._v("当前目录")]),t._v(" "),a("li",[t._v("如果不在当前目录，Python 则搜索在 shell 变量 PYTHONPATH 下的每个目录。")]),t._v(" "),a("li",[t._v("如果都找不到，Python会察看默认路径。UNIX下，默认路径一般为/usr/local/lib/python/。")])]),t._v(" "),a("h2",{attrs:{id:"package包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#package包","aria-hidden":"true"}},[t._v("#")]),t._v(" package包")]),t._v(" "),a("p",[t._v("把两个module放在一个新的目录 "),a("code",[t._v("sample_package")]),t._v(",再新增"),a("code",[t._v("__init__.py")]),t._v("(可以是空，但不能没有)，宣称自己是一个package。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("package_runoob\n|-- __init__.py\n|-- runoob1.py\n|-- runoob2.py\n")])])]),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("# package_runoob 同级目录下创建 test.py 来调用 package_runoob 包")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("# 导入包")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" package_runoob"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("runoob1 "),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" runoob1\n"),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" package_runoob"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("runoob2 "),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" runoob2\n\nrunoob1"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nrunoob2"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"pip"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pip","aria-hidden":"true"}},[t._v("#")]),t._v(" pip")]),t._v(" "),a("p",[t._v("pip 是 Python 包管理工具，该工具提供了对Python 包的查找、下载、安装、卸载的功能。")]),t._v(" "),a("p",[t._v("安装pip工具")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py   # 下载安装脚本\nsudo python get-pip.py    # 运行安装脚本\npip --version # 查看版本\npip list # 列出已安装的包\npip show -f SomePackage # 查看指定包的详细信息\n")])])]),a("p",[t._v("安装包")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("pip install SomePackage              # 最新版本\npip install SomePackage==1.0.4       # 指定版本\npip install 'SomePackage>=1.0.4'     # 最小版本\n")])])]),a("h2",{attrs:{id:"内置库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内置库","aria-hidden":"true"}},[t._v("#")]),t._v(" 内置库")]),t._v(" "),a("ul",[a("li",[t._v("os")]),t._v(" "),a("li",[t._v("glob")]),t._v(" "),a("li",[t._v("re 字符串匹配")]),t._v(" "),a("li",[t._v("math")]),t._v(" "),a("li",[t._v("random")]),t._v(" "),a("li",[t._v("datetime")]),t._v(" "),a("li",[t._v("unittest")]),t._v(" "),a("li",[t._v("threading、zipfile")]),t._v(" "),a("li",[t._v("logging")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://docs.python.org/2.7/library/index.html#library-index",target:"_blank",rel:"noopener noreferrer"}},[t._v("其他"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://docs.python.org/2/tutorial/modules.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Python2 Module Document"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://medium.com/pyladies-taiwan/python-%E7%9A%84-import-%E9%99%B7%E9%98%B1-3538e74f57e3",target:"_blank",rel:"noopener noreferrer"}},[t._v("Python 的 Import 陷阱"),a("OutboundLink")],1)])])])},[],!1,null,null,null);r.options.__file="python-grammar.md";s.default=r.exports}}]);