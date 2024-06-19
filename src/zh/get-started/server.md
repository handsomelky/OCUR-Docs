---
title: 服务端部署
index: true
icon: server
order: 3
category:
  - 快速上手
---

> [!warning]
> 我们会在合适的时候开源OCUR软件的服务端代码，届时您可以通过下面的步骤来部署服务端。

请确保已经安装了以下依赖软件：

- Anaconda 或 Miniconda
- CUDA、CuDNN
- screen（可选）

> [!tip]
> 若想在后台运行两个以上服务端，可以使用 screen 命令

进入 OCUR 目录

```shell
cd OCUR
```

运行以下命令建立 OCUR 系统服务端虚拟环境：

```shell
bash setup_env.sh
```

运行完成后，激活虚拟环境：

```shell
conda activate ocur
```

运行 OCUR 服务端

```shell
python3 web_server.py
```

若想使用 PadddleOCR 作为 OCR 引擎，请在 PaddleOCR 服务端目录中运行脚本

```shell
bash setup_env.sh
```

打开一个新的终端，激活虚拟环境

```shell
conda activate paddle_ocr
```

运行 PaddleOCR 服务

```shell
cd deploy/pdserving
python3 web_service.py --config=config.yml
```
