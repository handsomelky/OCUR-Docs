<template><div><div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>我们会在合适的时候开源OCUR软件的服务端代码，届时您可以通过下面的步骤来部署服务端。</p>
</div>
<p>请确保已经安装了以下依赖软件：</p>
<ul>
<li>Anaconda 或 Miniconda</li>
<li>CUDA、CuDNN</li>
<li>screen（可选）</li>
</ul>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>若想在后台运行两个以上服务端，可以使用 screen 命令</p>
</div>
<p>进入 OCUR 目录</p>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> OCUR</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>运行以下命令建立 OCUR 系统服务端虚拟环境：</p>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">bash</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> setup_env.sh</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>运行完成后，激活虚拟环境：</p>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">conda</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> activate</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> ocur</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>运行 OCUR 服务端</p>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">python3</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> web_server.py</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>若想使用 PadddleOCR 作为 OCR 引擎，请在 PaddleOCR 服务端目录中运行脚本</p>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">bash</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> setup_env.sh</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>打开一个新的终端，激活虚拟环境</p>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">conda</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> activate</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> paddle_ocr</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>运行 PaddleOCR 服务</p>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> deploy/pdserving</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">python3</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> web_service.py</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66"> --config=config.yml</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


