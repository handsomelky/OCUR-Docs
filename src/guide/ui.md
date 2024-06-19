---
title: UI Introduction
icon: object-group
order: 1
category:
  - User Guide
tag:
  - UI Introduction
---

When developing the client interface UI of our system, we adopted modern design principles to provide a clear, intuitive, and visually appealing user experience. The client interface not only emphasizes the practicality and accessibility of functions but also focuses on visual attraction and intuitive operation. The main interfaces include the Home page, Partial Patch, Global Patch, and Patch Library, each carefully designed to meet the operational needs of different users.

## Home Page

The Home page is the first interface users see when entering the system, emphasizing simplicity and functionality in its design.

The layout is clearly divided into upper and lower areas.

The upper link area provides four link cards that lead to the OCUR official website's Quick Start page, GitHub repository, OCUR official user manual page, and user feedback page.

The lower area offers three quick access cards that route to the main functional interfaces.

![Home Interface](img/home_page.jpg =500x)

## Partial Patch

In the "Partial Patch" interface, users can select specific areas and apply different patch effects.

The UI of the Partial Patch is mainly divided into 4 areas: **Image Viewer**, **Text List**, **Patch Selection Area**, and **Model Selection Area**.

![Partial Patch Interface](img/patch_part_page.jpg =500x)

The Image Viewer area uses QGraphicsView combined with a custom GraphScene to display user-uploaded photos. Users can intuitively view and manipulate images, including zooming and dragging to view different parts. Efficient rendering with QPainter.Antialiasing ensures high-quality image display during editing.

The Text List area displays text entries identified in the picture, where users can select specific texts for patch application.

Users can choose from predefined common patch styles or their trained patch styles in the Patch Selection Area. Besides styles, users can also select the intensity of the patch, with four levels available: 25%, 50%, 75%, and 100%. This feature adds flexibility to the software, allowing users to customize the patch effect according to specific needs, thereby enhancing image protection or visual effects.

In the Model Selection Area, users can choose the appropriate model from mainstream OCR services. By comparing the test results of different models, users can identify the most effective patch.

## Global Patch

The "Global Patch" interface allows users to apply a uniform patch effect across the entire image. This is suitable for users who want to quickly complete patch application. The interface design is straightforward and intuitive, supporting a preview function, allowing users to instantly see the effect of the patch application to ensure that the selected patch meets their visual expectations.

Compared to the Partial Patch interface, the Global Patch replaces the text list area with an image list, enabling users to upload and process images in bulk and quickly switch images they wish to preview.

![Global Patch](img/patch_all_page.jpg =500x)

## Patch Library

The "Patch Library" interface is where users manage their collection of patches. Users can browse all available patches, adding, deleting, or editing them. This interface is designed to make patch management as intuitive and efficient as possible, supporting batch operations and allowing users to upload their training images to generate more targeted and effective patches.

![Patch Library](img/patch_manager_page.jpg =500x)

## Navigation Bar

The navigation bar is the core navigation interface of the system, providing users with quick access to all parts of the system.

Using NavigationAvatarWidget and NavigationItemPosition classes, the navigation bar effectively organizes functional modules. Additionally, the system enables the Mica effect based on the user's operating system version to enhance the visual experience. Navigation items are added through the addSubInterface method, each associated with an icon and text label, ensuring users can intuitively identify each function.

The navigation bar can also be expanded by clicking the expand button at the top, displaying the specific name of each function next to its icon, helping users navigate more clearly to the desired functionality.



## Settings Interface

The Settings interface offers users a wealth of customization options to optimize and personalize their software experience. Below are the main settings available in the interface:

| **Setting Item**          | **Function Description**                                                   |
|---------------------------|---------------------------------------------------------------------------|
| **Service IP and Port**   | Allows users to set the server's IP and port to use their server system.   |
| **Mica Effect**           | Enables users to toggle the Mica effect, available only on Windows 11.     |
| **Application Theme**     | Users can choose "Light", "Dark", or "System Setting" to change the app's appearance. |
| **Language**              | Allows users to select the interface language, e.g., Simplified Chinese or English. |
| **Theme Color**           | Provides a color picker for users to customize the interface theme color.  |
| **Interface Zoom**        | Offers various scaling options, such as 100%, 125%, and system settings.  |
| **Acrylic Blur Radius**   | Users can adjust the blur radius, affecting the intensity of transparent effects. |
| **Check for Updates at Startup** | Users can set the software to automatically check for updates at startup. |
