---
title: Client Deployment
index: true
icon: laptop-code
order: 2
category:
  - Get Started
---

Welcome to our software's client deployment tutorial. Follow these steps to install and set up the client application on your device.

## Prerequisites

Before proceeding with the installation, please ensure your system meets the following requirements:

- Operating System: Windows 7 or higher
- At least 4GB of RAM
- At least 1GB of available disk space
- Internet connection required for using OCUR's online services and software updates

## Package Deployment

1. **Download the Installer:**
   - Visit our [releases page](https://github.com/handsomelky/OCUR/releases/latest) and choose the version suitable for your operating system.

2. **Run the Installer:**
   - On Windows, double-click the downloaded `.exe` file.

3. **Follow the Installation Wizard:**
   - The installation wizard will guide you through the installation process. Accept the license agreement and choose your preferred installation directory.

4. **Complete the Installation:**
   - Finish the installation and launch the application using the desktop shortcut or from the right-click context menu on images.

## Source Code Deployment

1. **Clone the Source Repository:**
   - Use Git to clone the repository or download the source code directly.
   ```bash
   git clone https://github.com/handsomelky/OCUR.git


2. **Install Python Dependencies:**
   - Navigate to the project directory and use pip to install the required libraries.
   ```bash
   cd OCUR
   pip install -r requirements.txt


3. **Launch the Client Program：**
   - Run the client code using Python.
   ```bash
   python OCUR.py

## Configuring the Application

After installation, configure the application settings to optimize performance and functionality:

- **Connect to Server:**

  - Open the application settings and navigate to the 'Network' section.
  - Enter the available server IP address and port number. Default: `119.91.40.61:8030`.
- **Customize Preferences:**

  - Adjust settings such as theme (light or dark mode), language, and cache directory according to your needs.

## Troubleshooting

If you encounter any issues during the installation or operation of the application, please refer to our [Issues page](https://github.com/handsomelky/OCUR/issues) or contact our development team for assistance.


> [!tip]
> Congratulations! You have successfully deployed the client application. Enjoy using our software to fully protect your privacy information.
