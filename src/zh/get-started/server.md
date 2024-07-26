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

- gcc、make
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
conda create -n ocur python=3.8
```

运行完成后，激活虚拟环境：

```shell
conda activate ocur
```

安装依赖项

``` shell
pip install -r requirements_new.txt
```

运行 OCUR 服务端

```shell
python3 webserver.py
```

随后若想使用 PadddleOCR 作为 OCR 引擎，请打开一个新的终端，并进入另外提供的 PaddleOCR 服务端目录中

```shell
cd PaddleOCR
```

创建并激活虚拟环境

```shell
conda create -n paddle_ocr python=3.8
conda activate paddle_ocr
```

安装依赖项

``` shell
python3 -m pip install paddlepaddle-gpu==2.4.2.post112 -f https://www.paddlepaddle.org.cn/whl/linux/mkl/avx/stable.html
pip install paddleocr==2.7.0.3

cd ./deploy/pdserving/
wget https://paddle-serving.bj.bcebos.com/test-dev/whl/paddle_serving_server_gpu-0.8.3.post112-py3-none-any.whl
pip3 install paddle_serving_server_gpu-0.8.3.post112-py3-none-any.whl
wget https://paddle-serving.bj.bcebos.com/test-dev/whl/paddle_serving_client-0.8.3-cp38-none-any.whl
pip3 install paddle_serving_client-0.8.3-cp38-none-any.whl
wget https://paddle-serving.bj.bcebos.com/test-dev/whl/paddle_serving_app-0.8.3-py3-none-any.whl
pip install paddle_serving_app-0.8.3-py3-none-any.whl
```

运行 PaddleOCR 服务

```shell
cd deploy/pdserving
python3 web_service.py --config=config.yml
```
