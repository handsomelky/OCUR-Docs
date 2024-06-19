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

- Anaconda or Miniconda
- CUDA, CuDNN
- screen (optional)

> [!tip]
> If you want to run more than two servers in the background, you can use the `screen` command.

Navigate to the OCUR directory:

```shell
cd OCUR
```

Run the following command to establish the OCUR system server environment:

```shell
bash setup_env.sh
```
After completion, activate the virtual environment:

```shell
conda activate ocur
```

Run the OCUR server:
```shell
python3 web_server.py
```
If you want to use PaddleOCR as the OCR engine, run the script in the PaddleOCR server directory:
```shell
bash setup_env.sh
```
Open a new terminal, activate the virtual environment:
```shell
conda activate paddle_ocr
```
Run the PaddleOCR service:

```shell
cd deploy/pdserving
python3 web_service.py --config=config.yml
```
