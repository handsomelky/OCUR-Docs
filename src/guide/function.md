---
title: Feature Implementation
icon: splotch
order: 2
category:
  - User Guide
tag:
  - Feature Implementation
---

## Responsive UI Implementation

To enhance code maintainability and reusability, we have broken down the functionalities of each page into individual components. These components inherit from the original PySide6 components, with appropriate extensions to meet the specific needs of the system.

We designed the InteractiveDropCover class, an innovative interactive drag-and-drop cover component that significantly simplifies the file upload process by providing highly interactive image upload capabilities. This component supports two main file upload methods: dragging files directly to a designated area and selecting files via a file selector triggered by a click. When users successfully drag and drop files to the target location, the component provides responsive styling to deliver real-time visual feedback, ensuring an excellent interactive experience.

To further enhance user experience, we designed dropdown menus with various background intensity and styles, as well as multiple OCR evaluation models. The real-time preview function and text descriptions help users form clear visual expectations before uploading, while the intuitive interface design reduces the complexity of parameter configuration. These optimizations not only improve file upload efficiency but also ensure user comfort and satisfaction during the operation.

![Responsive UI Example](img/interactive_ui.png =500x)

## Visualization Implementation

After users upload images, the InteractiveDropCover transitions to the ImageViewer, which is the core area of the functional interface. It allows users to visually see the effect of the applied background patterns on the uploaded images and the visualization of the images after model testing.

We integrated drag buttons, zoom in/out buttons, previous/next buttons, manual pattern area drawing buttons, and area removal buttons into the image editing menu. In the manual pattern area drawing function, the image preview window serves as the "control center," listening to mousePressEvent and mouseMoveEvent to transmit the child components' listening signals in real-time, achieving precise drawing effects. Additionally, by overriding mousePressEvent and mouseMoveEvent, users can freely move images with the mouse to view different parts of large images.

We extended the QGraphicsView class in PySide6 to achieve a more customized display effect in the central image area. In the global pattern interface, when users select different items from the image list, the central image area switches to the corresponding image. In the local pattern interface, when users hover the mouse over the recognition box in the central area, the box highlights, and the text list automatically scrolls to the corresponding recognition text line. This design greatly optimizes user operation logic.

![ImageViewer Area (Left) and Recognition Text Box (Right)](img/visualization_area.png =500x)

In the multi-dimensional evaluation of pattern effects, we used the Pyecharts library to create dynamic charts such as radar charts and pie charts, embedding them into the results page to visually present various OCR evaluation metrics. The radar chart displays multiple evaluation data, including accuracy, recall rate, balanced F-score, recognition rate, and attack success rate, while the pie chart shows the proportion of images with different pattern effect levels.

![Multi-Dimensional Evaluation Radar Chart](img/radar.png =350x) ![Pattern Effect Levels Pie Chart](img/piechart.png =300x)

## Multithreading Asynchronous and User Prompting

To improve user experience and operation intuitiveness, we extensively used information and status prompts in the application. These prompts not only provide operational feedback but also guide users through the correct steps.

During batch pattern addition and evaluation operations, to avoid blocking the client, we adopted a multithreading asynchronous approach, separating server requests and client interface into two threads. This implementation prevents network requests from blocking the UI. We also implemented a progress ring to display the current operation progress in real-time, providing users with clear waiting prompts. Utilizing PySide6's unique signal and slot communication mechanism, we implemented floating tooltips to indicate ongoing operations. These tooltips remain visible when users switch to other interfaces until the operation is complete.

![Progress Prompt](img/progress_ring.png =500x)

Additionally, to ensure software robustness and correct user operations, we designed a comprehensive error handling mechanism. When user operations do not meet requirements or trigger boundary conditions, the system displays corresponding error prompts, including but not limited to unsupported file formats, oversized files, or network issues.

![Error Prompt Example](img/error_tips.png =500x)

## Other Feature Implementations

Our system offers flexible theme switching functionality to meet user preferences and environmental needs, allowing users to switch between light and dark themes freely. We provide two different QSS stylesheets for each component to ensure perfect integration under different themes. Users can also customize theme colors, applying favorite colors to highlighted elements such as buttons, progress bars, and link text, further personalizing the experience. The system uses QM files in the i18 folder for real-time multi-language switching, ensuring a consistent experience for users in different language regions without language barriers.

For client installation and deployment, we used Advanced Installer to package the software into an installer, including all necessary dependencies and components. This packaging allows users to easily complete the installation, uninstallation, and update processes, avoiding leftover files or configurations. Additionally, by modifying the Windows registry, the system integrates right-click menu functionality in the Windows environment. Users can directly invoke the software through the right-click menu to process selected images without first opening the software interface, significantly enhancing usability.