(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{498:function(e,t,r){"use strict";r.r(t);var a=r(9),l=Object(a.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"puppeteer翻页爬虫"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#puppeteer翻页爬虫","aria-hidden":"true"}},[e._v("#")]),e._v(" Puppeteer翻页爬虫")]),e._v(" "),r("blockquote",[r("p",[e._v("Puppeteer(中文翻译”木偶”) 是 Google Chrome 团队官方的无界面Chrome 工具。")])]),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/lq782655835/crawler/blob/master/pagination-crawler.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("pagination-crawler"),r("OutboundLink")],1),e._v(" 是一个使用puppeteer操控搜狗输入法页面翻页，爬取每个页面数据的小爬虫。")]),e._v(" "),r("h2",{attrs:{id:"常用api"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#常用api","aria-hidden":"true"}},[e._v("#")]),e._v(" 常用API")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("开始")]),e._v(" "),r("ul",[r("li",[e._v("browers = await puppeteer.launch({headless:bool})")]),e._v(" "),r("li",[e._v("page = await browers.newPage()")]),e._v(" "),r("li",[e._v("page.goto(url)")]),e._v(" "),r("li",[e._v("browers.close()")])])]),e._v(" "),r("li",[r("p",[e._v("page")]),e._v(" "),r("ul",[r("li",[e._v("page.waitFor(2000 or '.selector') 等待时间或某个元素出现")]),e._v(" "),r("li",[e._v("page.waitForSelector('.selector').then(() => todo) 等待元素出现后执行todo")]),e._v(" "),r("li",[e._v("page.click('.selector')")])])]),e._v(" "),r("li",[r("p",[e._v("获取/操作页面元素")]),e._v(" "),r("ul",[r("li",[e._v("page.$('#el') 被包装成elementHandle的document.querySelector值")]),e._v(" "),r("li",[e._v("page.$('.el') 被包装成elementHandle的document.querySelectorAll值")]),e._v(" "),r("li",[e._v("page.$eval('#el', dom => dom) 获取document.querySelector值后，在浏览器环境处理")]),e._v(" "),r("li",[e._v("await page.$$eval('.el', doms => doms) 获取document.querySelectorAll值后，在浏览器环境处理")]),e._v(" "),r("li",[e._v("await page.evaluate(body => body.innerHTML, await page.$('body')); 浏览器环境下执行的代码")])])]),e._v(" "),r("li",[r("p",[e._v("拦截请求")]),e._v(" "),r("ul",[r("li",[e._v("page.setRequestInterception(true) 开启拦截请求")]),e._v(" "),r("li",[e._v("page.on('request',interceptedRequest => interceptedRequest.abort()) 拦截逻辑")])])])])])},[],!1,null,null,null);l.options.__file="puppeteer.md";t.default=l.exports}}]);