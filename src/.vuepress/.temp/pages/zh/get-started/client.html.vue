<template><div><p>欢迎来到我们软件的客户端部署教程。按照以下步骤在您的设备上安装并设置客户端应用程序。</p>
<h2 id="前提条件" tabindex="-1"><a class="header-anchor" href="#前提条件"><span>前提条件</span></a></h2>
<p>在继续安装之前，请确保您的系统符合以下要求：</p>
<ul>
<li>操作系统：Windows 7或更高版本</li>
<li>至少4GB的 RAM</li>
<li>至少1GB的可用磁盘空间</li>
<li>使用 OCUR 的在线服务和更新软件时需要网络连接</li>
</ul>
<h2 id="安装包部署" tabindex="-1"><a class="header-anchor" href="#安装包部署"><span>安装包部署</span></a></h2>
<ol>
<li>
<p><strong>下载安装程序：</strong></p>
<ul>
<li>访问我们的<a href="https://github.com/handsomelky/OCUR/releases/latest" target="_blank" rel="noopener noreferrer">发布页面</a>并选择适合您操作系统的安装包版本。</li>
</ul>
</li>
<li>
<p><strong>运行安装程序：</strong></p>
<ul>
<li>在 Windows 上，双击下载的 <code v-pre>.exe</code>文件。</li>
</ul>
</li>
<li>
<p><strong>按照安装向导操作：</strong></p>
<ul>
<li>安装向导将引导您完成安装过程。接受许可协议并选择您喜欢的安装目录。</li>
</ul>
</li>
<li>
<p><strong>完成安装：</strong></p>
<ul>
<li>完成安装并使用桌面快捷方式或从图片的右键菜单启动应用程序。</li>
</ul>
</li>
</ol>
<h2 id="源码部署" tabindex="-1"><a class="header-anchor" href="#源码部署"><span>源码部署</span></a></h2>
<ol>
<li>
<p><strong>克隆源代码仓库：</strong></p>
<ul>
<li>使用 Git 克隆命令或直接下载源代码。</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> https://github.com/handsomelky/OCUR.git</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p><strong>安装 Python 依赖：</strong></p>
<ul>
<li>进入项目目录并使用pip安装依赖库。</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> OCUR</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">pip</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66"> -r</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> requirements.txt</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>启动客户端程序：</strong></p>
<ul>
<li>使用 Python 运行客户端代码。</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">python</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> OCUR.py</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
</ol>
<h2 id="配置应用程序" tabindex="-1"><a class="header-anchor" href="#配置应用程序"><span>配置应用程序</span></a></h2>
<p>安装后，配置应用程序设置以优化性能和功能：</p>
<ul>
<li>
<p><strong>连接到服务器：</strong></p>
<ul>
<li>打开应用程序设置，导航到'网络'部分。</li>
<li>输入可用的服务端 IP 地址和端口号。默认：<code v-pre>119.91.40.61:8030</code>。</li>
</ul>
</li>
<li>
<p><strong>自定义首选项：</strong></p>
<ul>
<li>根据您的需要调整主题（浅色或深色模式）、语言和缓存目录等首选项。</li>
</ul>
</li>
</ul>
<h2 id="故障排除" tabindex="-1"><a class="header-anchor" href="#故障排除"><span>故障排除</span></a></h2>
<p>如果在安装或操作应用程序时遇到任何问题，请参考我们的 <a href="https://github.com/handsomelky/OCUR/issues" target="_blank" rel="noopener noreferrer">Issues 界面</a>或联系我们的开发团队寻求帮助。</p>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>恭喜您！您已成功部署客户端应用程序。享受使用我们的软件来全方位保护您的隐私信息吧。</p>
</div>
</div></template>


