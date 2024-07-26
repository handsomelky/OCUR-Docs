---
title: Server Deployment
index: true
icon: server
order: 3
category:
  - Get Started
---

> [!warning]
> We will open source the OCUR software server-side code when appropriate. At that time, you can follow the steps below to deploy the server.

Please ensure the following dependencies are installed:

- gcc, make
- Anaconda or Miniconda
- CUDA, CuDNN
- screen (optional)

> [!tip]
> If you want to run more than two servers in the background, you can use the `screen` command.

Navigate to the OCUR directory:

```shell
cd OCUR
```

Run the following command to create the OCUR server-side virtual environment:

```shell
conda create -n ocur python=3.8
```
After completion, activate the virtual environment:

```shell
conda activate ocur
```
Install the dependencies:

```shell
pip install -r requirements_new.txt
```
Run the OCUR server:
```shell
python3 webserver.py
```
If you want to use PaddleOCR as the OCR engine, open a new terminal, and enter the separate PaddleOCR server directory:

```shell
cd PaddleOCR
```
Create and activate the virtual environment:

```shell
conda create -n paddle_ocr python=3.8
conda activate paddle_ocr
```
Install the dependencies:

```shell
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
Run the PaddleOCR service:

```shell
cd deploy/pdserving
python3 web_service.py --config=config.yml
```
