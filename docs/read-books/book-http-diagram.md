# 《HTTP图解》

## Web及网络基础

### TCP/IP的分层管理
1. 应用层 - HTTP、FTP、DNS等
    * HTTP。
    * DNS协议。通过域名查找IP地址，或逆向从IP地址反查域名的服务。
2. 传输层。提供两台计算机之间的数据传输。
    * TCP协议。把HTTP请求报文进行**分割**（为了更容易传送大数据），并在报文上打上标记序号及端口号，发送给网络层。提供三次握手（TCP过程标志：SYN和ACK），确认数据最终送达到对方。
1. 网络层。处理网络上流动的数据包，规定了通过怎样的路径到达对方计算机，并把数据包传送给对方。
    * IP协议。增加作为通信目的地的MAC地址后，转发给链路层。
    * 使用ARP协议，反查出对应的MAC地址。（IP地址可变换，MAC地址基本不会变）
1. 链路层。处理连接网络等硬件部分，包括控制操作系统、硬件的设备驱动、网卡等物理可见部分。

### 各种协议与HTTP协议的关系：
![image](https://user-images.githubusercontent.com/6310131/60406595-3d524d80-9be9-11e9-904a-22495ac30f25.png)

### TCP协议三次握手：
![image](https://user-images.githubusercontent.com/6310131/60406519-d3d23f00-9be8-11e9-8390-38c80bb260c6.png)

## Http协议

请求：请求行 + 首部字段 +（空行）正文

响应： 状态行 + 首部字段 +（空行）正文

![image](https://user-images.githubusercontent.com/6310131/61171226-30e5d180-a5a7-11e9-84b4-b874617105a0.png)

### 响应状态
* 2xx 成功
    * 200 ok
    * 204 没有内容
    * 206 部分内容
* 3xx 重定向
    * 304 没有更新
* 4xx 客户端错误
    * 403 禁止
    * 404 没有找到
* 5xx 服务器错误
    * 500 服务器错误
    * 503 服务不可用，表明服务器正在停机维护

## Cookie

Cookie会根据从服务器发送的响应报文内一个叫`Set-Cookie`的首部字段信息，通知客户端保存Cookie。当下次客户端再往该服务器发送请求时，客户端会自动在请求报文中加入Cookie的值发送出去。

服务器发现客户端发送过来的Cookie后，会去**检查究竟是从哪个客户端发来的连接请求**，然后对比服务器上的记录，最后得到之前的状态信息。

Cookie风险：
* 仅利用cookie中进行身份验证。比如在cookie中存isVip/userID等关键信息字段
* 不设置httponly。如果攻击者拿到用户的cookie值（XSS攻击等手段），那可以通过js修改cookie，伪造用户。
* secure问题。当secure的限制没有开启时,那么在一个https的网站中,一个xss还是能通过http读取到https下的cookie。

Cookie防护：
* 防止在 Cookies 中存放敏感信息
* 关键数据放服务端（session），cookie保存口令值。
* 对重要的值加上httponly标志
* 强制要求开启HTTPS连接

Session安全（防护升级）：
* `口令值通过私钥签名加密`。虽然Session不存敏感信息，找不到xss攻击拿到cookie的情况下，也有可能被伪造出。因为随机算法给出的口令值仍然可能被伪造（特别是用户量大的网站，难免被碰运气）。通过私钥签名可以解决这种情况。
* `客户端独有信息（IP等） + 口令私钥签名`。有可能通过xss攻击，获得用户cookie中保存的口令值，以此伪造用户。通过客户端独有信息以及配合上面的口令私钥签名可以解决这种情况。

## Web安全

常用安全漏洞
1. 输出值转义不完全
    * `跨站脚本攻击XSS`（比如：url地址栏、动态生成HTML）
    * sql注入攻击（属于主动攻击）
    * os命令攻击(比如：发送邮件)
    * Http首部注入攻击，通过在响应字段内**插入换行**，添加任意响应首部的攻击
1. 设计上的缺陷
    * 会话劫持：拿到用户的绘画id（通常是XSS攻击盗取），并伪装成用户
    * `跨站请求伪造CSRF`。对已完成认证的用户进行非预期的信息更新（属于被动攻击）。加入留言板留言是get请求，攻击者可以发布恶意评论\<img src="xxx/msg?q=123">，那所有访问这条评论的用户，都会发布自己都不知道的“123”评论
1. 其他
    * 点击劫持。常说的钓鱼网站，攻击者制作了一张游戏网页，引诱你去点击它的Play按钮，Play按钮下，隐藏的（通过iframe设置透明度即可）是你已经登录的网站（比如qq）。你点击Play有可能点击的是qq的注销功能。
    * Dos攻击。让运行的服务停止服务。比如集中请求资源，让服务器资源耗尽。