# Snov.io Addon: Click-to-Compose

A productivity-focused Chrome Extension designed for AdTech professionals using the Snov.io platform. This tool enhances the user interface by transforming static email elements into interactive `mailto:` links, significantly reducing the time required to initiate outreach.

## 🔗 Related Projects

This tool is part of the **AdTech Automation Suite**. Check out the companion extension:

| Project | Type | Description |
| :--- | :--- | :--- |
| **[Snov.io Addon: Blocklist Highlighter](https://github.com/OstinUA/Snov.io-addon_1)** | Chrome Extension | Real-time visual flagging of blacklisted or bounced emails |
| **[Snov.io Addon: Click-to-Compose](https://github.com/OstinUA/Snov.io-addon_2)** | Chrome Extension | Instantly converts static email text into clickable `mailto:` links |

## Overview

The standard Snov.io interface presents email addresses as static text elements, requiring users to manually copy and paste addresses into their email clients. This addon eliminates that friction by injecting interaction logic directly into the DOM. It automatically detects email fields and wraps them in a `mailto` protocol handler, allowing for instant email composition with a single click.

## Key Features

* **Interactive Email Fields**: Scans the DOM for specific email containers and converts them into clickable triggers.
* **Workflow Automation**: Clicking an email instantly opens the user's default email client (e.g., Outlook, Gmail) via the `mailto:` protocol.
* **Visual Cues**: Changes the cursor to a pointer and applies a distinct color (`#6d53de`) to indicate interactivity.
* **SPA Support**: Utilizes a `MutationObserver` to monitor DOM changes, ensuring that emails loaded dynamically (via AJAX or infinite scroll) are immediately processed.

## Technical Details

* **Manifest V3**: Compliant with the latest Chrome Extension security standards.
* **Scope**: Strictly limited to `https://app.snov.io/*` to ensure performance and security.
* **Event Handling**: The script intercepts user interaction to trigger the operating system's default mail handler without disrupting the Snov.io interface.

## Installation

This extension is intended for internal usage and is installed via Chrome Developer Mode:

1.  **Clone the Repository**:
    ```bash
    git clone [https://github.com/OstinUA/Snov.io-addon_2.git](https://github.com/OstinUA/Snov.io-addon_2.git)
    ```
2.  **Load into Chrome**:
    * Navigate to `chrome://extensions/`.
    * Enable **Developer mode** in the top right corner.
    * Click **Load unpacked**.
    * Select the directory containing `manifest.json`.
