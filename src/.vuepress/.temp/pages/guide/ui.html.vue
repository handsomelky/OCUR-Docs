<template><div><p>When developing the client interface UI of our system, we adopted modern design principles to provide a clear, intuitive, and visually appealing user experience. The client interface not only emphasizes the practicality and accessibility of functions but also focuses on visual attraction and intuitive operation. The main interfaces include the Home page, Partial Patch, Global Patch, and Patch Library, each carefully designed to meet the operational needs of different users.</p>
<h2 id="home-page" tabindex="-1"><a class="header-anchor" href="#home-page"><span>Home Page</span></a></h2>
<p>The Home page is the first interface users see when entering the system, emphasizing simplicity and functionality in its design.</p>
<p>The layout is clearly divided into upper and lower areas.</p>
<p>The upper link area provides four link cards that lead to the OCUR official website's Quick Start page, GitHub repository, OCUR official user manual page, and user feedback page.</p>
<p>The lower area offers three quick access cards that route to the main functional interfaces.</p>
<figure><img src="@source/guide/img/home_page.jpg" alt="Home Interface" width="500" tabindex="0" loading="lazy"><figcaption>Home Interface</figcaption></figure>
<h2 id="partial-patch" tabindex="-1"><a class="header-anchor" href="#partial-patch"><span>Partial Patch</span></a></h2>
<p>In the &quot;Partial Patch&quot; interface, users can select specific areas and apply different patch effects.</p>
<p>The UI of the Partial Patch is mainly divided into 4 areas: <strong>Image Viewer</strong>, <strong>Text List</strong>, <strong>Patch Selection Area</strong>, and <strong>Model Selection Area</strong>.</p>
<figure><img src="@source/guide/img/patch_part_page.jpg" alt="Partial Patch Interface" width="500" tabindex="0" loading="lazy"><figcaption>Partial Patch Interface</figcaption></figure>
<p>The Image Viewer area uses QGraphicsView combined with a custom GraphScene to display user-uploaded photos. Users can intuitively view and manipulate images, including zooming and dragging to view different parts. Efficient rendering with QPainter.Antialiasing ensures high-quality image display during editing.</p>
<p>The Text List area displays text entries identified in the picture, where users can select specific texts for patch application.</p>
<p>Users can choose from predefined common patch styles or their trained patch styles in the Patch Selection Area. Besides styles, users can also select the intensity of the patch, with four levels available: 25%, 50%, 75%, and 100%. This feature adds flexibility to the software, allowing users to customize the patch effect according to specific needs, thereby enhancing image protection or visual effects.</p>
<p>In the Model Selection Area, users can choose the appropriate model from mainstream OCR services. By comparing the test results of different models, users can identify the most effective patch.</p>
<h2 id="global-patch" tabindex="-1"><a class="header-anchor" href="#global-patch"><span>Global Patch</span></a></h2>
<p>The &quot;Global Patch&quot; interface allows users to apply a uniform patch effect across the entire image. This is suitable for users who want to quickly complete patch application. The interface design is straightforward and intuitive, supporting a preview function, allowing users to instantly see the effect of the patch application to ensure that the selected patch meets their visual expectations.</p>
<p>Compared to the Partial Patch interface, the Global Patch replaces the text list area with an image list, enabling users to upload and process images in bulk and quickly switch images they wish to preview.</p>
<figure><img src="@source/guide/img/patch_all_page.jpg" alt="Global Patch" width="500" tabindex="0" loading="lazy"><figcaption>Global Patch</figcaption></figure>
<h2 id="patch-library" tabindex="-1"><a class="header-anchor" href="#patch-library"><span>Patch Library</span></a></h2>
<p>The &quot;Patch Library&quot; interface is where users manage their collection of patches. Users can browse all available patches, adding, deleting, or editing them. This interface is designed to make patch management as intuitive and efficient as possible, supporting batch operations and allowing users to upload their training images to generate more targeted and effective patches.</p>
<figure><img src="@source/guide/img/patch_manager_page.jpg" alt="Patch Library" width="500" tabindex="0" loading="lazy"><figcaption>Patch Library</figcaption></figure>
<h2 id="navigation-bar" tabindex="-1"><a class="header-anchor" href="#navigation-bar"><span>Navigation Bar</span></a></h2>
<p>The navigation bar is the core navigation interface of the system, providing users with quick access to all parts of the system.</p>
<p>Using NavigationAvatarWidget and NavigationItemPosition classes, the navigation bar effectively organizes functional modules. Additionally, the system enables the Mica effect based on the user's operating system version to enhance the visual experience. Navigation items are added through the addSubInterface method, each associated with an icon and text label, ensuring users can intuitively identify each function.</p>
<p>The navigation bar can also be expanded by clicking the expand button at the top, displaying the specific name of each function next to its icon, helping users navigate more clearly to the desired functionality.</p>
<h2 id="settings-interface" tabindex="-1"><a class="header-anchor" href="#settings-interface"><span>Settings Interface</span></a></h2>
<p>The Settings interface offers users a wealth of customization options to optimize and personalize their software experience. Below are the main settings available in the interface:</p>
<table>
<thead>
<tr>
<th><strong>Setting Item</strong></th>
<th><strong>Function Description</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Service IP and Port</strong></td>
<td>Allows users to set the server's IP and port to use their server system.</td>
</tr>
<tr>
<td><strong>Mica Effect</strong></td>
<td>Enables users to toggle the Mica effect, available only on Windows 11.</td>
</tr>
<tr>
<td><strong>Application Theme</strong></td>
<td>Users can choose &quot;Light&quot;, &quot;Dark&quot;, or &quot;System Setting&quot; to change the app's appearance.</td>
</tr>
<tr>
<td><strong>Language</strong></td>
<td>Allows users to select the interface language, e.g., Simplified Chinese or English.</td>
</tr>
<tr>
<td><strong>Theme Color</strong></td>
<td>Provides a color picker for users to customize the interface theme color.</td>
</tr>
<tr>
<td><strong>Interface Zoom</strong></td>
<td>Offers various scaling options, such as 100%, 125%, and system settings.</td>
</tr>
<tr>
<td><strong>Acrylic Blur Radius</strong></td>
<td>Users can adjust the blur radius, affecting the intensity of transparent effects.</td>
</tr>
<tr>
<td><strong>Check for Updates at Startup</strong></td>
<td>Users can set the software to automatically check for updates at startup.</td>
</tr>
</tbody>
</table>
</div></template>


