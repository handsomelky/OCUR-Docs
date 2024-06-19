<template><div><div class="hint-container warning">
<p class="hint-container-title">Warning</p>
<p>We will open source the OCUR software server-side code when appropriate. At that time, you can follow the steps below to deploy the server.</p>
</div>
<p>Please ensure the following dependencies are installed:</p>
<ul>
<li>Anaconda or Miniconda</li>
<li>CUDA, CuDNN</li>
<li>screen (optional)</li>
</ul>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>If you want to run more than two servers in the background, you can use the <code v-pre>screen</code> command.</p>
</div>
<p>Navigate to the OCUR directory:</p>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> OCUR</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Run the following command to establish the OCUR system server environment:</p>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">bash</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> setup_env.sh</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>After completion, activate the virtual environment:</p>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">conda</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> activate</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> ocur</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Run the OCUR server:</p>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">python3</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> web_server.py</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>If you want to use PaddleOCR as the OCR engine, run the script in the PaddleOCR server directory:</p>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">bash</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> setup_env.sh</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Open a new terminal, activate the virtual environment:</p>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">conda</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> activate</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> paddle_ocr</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Run the PaddleOCR service:</p>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> deploy/pdserving</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">python3</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> web_service.py</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66"> --config=config.yml</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


