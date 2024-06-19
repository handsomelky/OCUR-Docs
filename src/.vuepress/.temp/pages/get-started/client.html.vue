<template><div><p>Welcome to our software's client deployment tutorial. Follow these steps to install and set up the client application on your device.</p>
<h2 id="prerequisites" tabindex="-1"><a class="header-anchor" href="#prerequisites"><span>Prerequisites</span></a></h2>
<p>Before proceeding with the installation, please ensure your system meets the following requirements:</p>
<ul>
<li>Operating System: Windows 7 or higher</li>
<li>At least 4GB of RAM</li>
<li>At least 1GB of available disk space</li>
<li>Internet connection required for using OCUR's online services and software updates</li>
</ul>
<h2 id="package-deployment" tabindex="-1"><a class="header-anchor" href="#package-deployment"><span>Package Deployment</span></a></h2>
<ol>
<li>
<p><strong>Download the Installer:</strong></p>
<ul>
<li>Visit our <a href="https://github.com/handsomelky/OCUR/releases/latest" target="_blank" rel="noopener noreferrer">releases page</a> and choose the version suitable for your operating system.</li>
</ul>
</li>
<li>
<p><strong>Run the Installer:</strong></p>
<ul>
<li>On Windows, double-click the downloaded <code v-pre>.exe</code> file.</li>
</ul>
</li>
<li>
<p><strong>Follow the Installation Wizard:</strong></p>
<ul>
<li>The installation wizard will guide you through the installation process. Accept the license agreement and choose your preferred installation directory.</li>
</ul>
</li>
<li>
<p><strong>Complete the Installation:</strong></p>
<ul>
<li>Finish the installation and launch the application using the desktop shortcut or from the right-click context menu on images.</li>
</ul>
</li>
</ol>
<h2 id="source-code-deployment" tabindex="-1"><a class="header-anchor" href="#source-code-deployment"><span>Source Code Deployment</span></a></h2>
<ol>
<li>
<p><strong>Clone the Source Repository:</strong></p>
<ul>
<li>Use Git to clone the repository or download the source code directly.</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> https://github.com/handsomelky/OCUR.git</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p><strong>Install Python Dependencies:</strong></p>
<ul>
<li>Navigate to the project directory and use pip to install the required libraries.</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> OCUR</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">pip</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66"> -r</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> requirements.txt</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>Launch the Client Program：</strong></p>
<ul>
<li>Run the client code using Python.</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">python</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> OCUR.py</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
</ol>
<h2 id="configuring-the-application" tabindex="-1"><a class="header-anchor" href="#configuring-the-application"><span>Configuring the Application</span></a></h2>
<p>After installation, configure the application settings to optimize performance and functionality:</p>
<ul>
<li>
<p><strong>Connect to Server:</strong></p>
<ul>
<li>Open the application settings and navigate to the 'Network' section.</li>
<li>Enter the available server IP address and port number. Default: <code v-pre>119.91.40.61:8030</code>.</li>
</ul>
</li>
<li>
<p><strong>Customize Preferences:</strong></p>
<ul>
<li>Adjust settings such as theme (light or dark mode), language, and cache directory according to your needs.</li>
</ul>
</li>
</ul>
<h2 id="troubleshooting" tabindex="-1"><a class="header-anchor" href="#troubleshooting"><span>Troubleshooting</span></a></h2>
<p>If you encounter any issues during the installation or operation of the application, please refer to our <a href="https://github.com/handsomelky/OCUR/issues" target="_blank" rel="noopener noreferrer">Issues page</a> or contact our development team for assistance.</p>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Congratulations! You have successfully deployed the client application. Enjoy using our software to fully protect your privacy information.</p>
</div>
</div></template>


