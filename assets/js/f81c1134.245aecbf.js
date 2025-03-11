"use strict";(self.webpackChunkspencer_github_io=self.webpackChunkspencer_github_io||[]).push([[130],{7735:e=>{e.exports=JSON.parse('{"archive":{"blogPosts":[{"id":"dcu-automation-ninjaone","metadata":{"permalink":"/blog/dcu-automation-ninjaone","source":"@site/blog/2025-03-10-dcu-automation-ninjaone.md","title":"Streamlining Dell Updates with NinjaOne: A PowerShell Solution","description":"Automating Dell System Updates","date":"2025-03-10T00:00:00.000Z","tags":[{"inline":false,"label":"PowerShell","permalink":"/blog/tags/PowerShell","description":"Scripts and tools leveraging PowerShell for automation and system management"},{"inline":false,"label":"NinjaOne","permalink":"/blog/tags/NinjaOne","description":"Solutions integrating with NinjaOne for remote monitoring and management"},{"inline":false,"label":"Dell","permalink":"/blog/tags/Dell","description":"Tools and scripts tailored for Dell hardware and software management"},{"inline":false,"label":"Automation","permalink":"/blog/tags/Automation","description":"Resources focused on automating repetitive IT tasks and workflows"},{"inline":false,"label":"System Management","permalink":"/blog/tags/System_Management","description":"Scripts and utilities for managing and maintaining IT systems"}],"readingTime":3.105,"hasTruncateMarker":false,"authors":[{"name":"Spencer Heath","title":"Technical Security Engineer","url":"https://github.com/Sp-e-n-c-er","page":{"permalink":"/blog/authors/sheath"},"socials":{"github":"https://github.com/Sp-e-n-c-er"},"key":"sheath"}],"frontMatter":{"slug":"dcu-automation-ninjaone","title":"Streamlining Dell Updates with NinjaOne: A PowerShell Solution","authors":"sheath","tags":["powershell","ninjaone","dell","automation","system-management"],"date":"2025-03-10T00:00:00.000Z"},"unlisted":false,"nextItem":{"title":"Locking NinjaOne Systray scripts from users","permalink":"/blog/AdminLock-Script"}},"content":"## Automating Dell System Updates\\r\\n\\r\\nManaging updates for Dell systems can be a time-consuming task, especially across multiple devices. To address this, I\u2019ve developed a PowerShell script that integrates Dell Command Update (DCU) with NinjaOne, automating the process from installation to execution. This post walks through what it does, how it works, and how you can deploy it in your environment.\\r\\n\\r\\n### Purpose and Features\\r\\n\\r\\nDell Command Update is a powerful tool for keeping Dell systems current with the latest BIOS, firmware, drivers, and applications. My script takes it a step further by automating key operations within NinjaOne, an RMM platform I use extensively. Here\u2019s what it offers:\\r\\n\\r\\n- **System Validation**: Confirms the device is a Dell system and removes conflicting \\"Dell Update\\" applications that could interfere with DCU.\\r\\n- **Dynamic Installation**: Downloads and installs the latest DCU version directly from Dell\u2019s support site, ensuring you\u2019re always up to date.\\r\\n- **Customizable Scans**: Supports general scans for all updates or targeted BIOS/firmware scans, with results logged to NinjaOne custom fields (except for general scans, which output to CLI).\\r\\n- **Flexible Updates**: Options to install all updates, exclude BIOS/firmware, or focus solely on BIOS/firmware, all triggered via a single NinjaOne variable.\\r\\n- **NinjaOne Integration**: Updates custom fields (`DCU1` for status, `DCU2` for details) to streamline monitoring and reporting.\\r\\n\\r\\n### Configuration\\r\\n\\r\\nThe script is controlled through a NinjaOne dropdown variable named `pleaseSelectAnOptionToRun`. You\u2019ll need to set this up with the following options:\\r\\n\\r\\n- **Install**: Installs DCU after removing incompatible apps.\\r\\n- **Remove Incompatible Versions**: Cleans up conflicting Dell Update software.\\r\\n- **Run Scan**: Performs a full update scan, outputting results to the CLI.\\r\\n- **Run BIOS and Firmware Scan**: Scans for BIOS/firmware updates, logging to NinjaOne fields.\\r\\n- **Run Scan And Install All**: Scans and applies all available updates.\\r\\n- **Run Scan And Install Excluding BIOS and Firmware**: Applies updates, skipping BIOS/firmware.\\r\\n- **Run Scan And Install BIOS and Firmware ONLY**: Targets only BIOS/firmware updates.\\r\\n### Technical Overview\\r\\n\\r\\nHere\u2019s a breakdown of the script\u2019s core functionality:\\r\\n\\r\\n- **Pre-Installation Checks**: Scans the registry (`HKLM:\\\\SOFTWARE\\\\Microsoft\\\\Windows\\\\CurrentVersion\\\\Uninstall`) to uninstall incompatible Dell Update apps silently, ensuring a clean slate for DCU.\\r\\n- **DCU Download**: Uses `Invoke-RestMethod` to scrape Dell\u2019s support page for the latest DCU `.exe`, then downloads it with `Invoke-WebRequest`\u2014no manual URL hunting required.\\r\\n- **Execution Logic**: Leverages `dcu-cli.exe` with tailored arguments (e.g., `-silent`, `-updateType`) to scan or apply updates. Exit codes are mapped to descriptive statuses in NinjaOne fields:\\r\\n  - `0`: Updates available.\\r\\n  - `500`: No updates found.\\r\\n  - `1, 5`: Reboot required.\\r\\n  - Full mapping in the script\u2019s `Handle-DCUExitCode` function.\\r\\n- **Error Handling**: Wraps operations in try-catch blocks, logging failures to NinjaOne for easy troubleshooting.\\r\\n\\r\\nThe full script is available on my GitHub: [Public-Ninja-One-Scripts](https://github.com/Sp-e-n-c-er/Public-Ninja-One-Scripts/blob/main/Dell%20Command%20Update/Dell%20Command%20Update%20Automation%20Toolkit.ps1).\\r\\n\\r\\n### Benefits\\r\\n\\r\\n- **Efficiency**: Automates repetitive update tasks across Dell fleets.\\r\\n- **Visibility**: Integrates with NinjaOne\u2019s custom fields for real-time status tracking.\\r\\n- **Control**: Offers granular options to suit different update strategies.\\r\\n- **Open Source**: Released under the MIT License\u2014free to use, modify, and distribute.\\r\\n\\r\\n### Deployment Steps\\r\\n\\r\\n1. **Download**: Grab the script from [GitHub](https://github.com/Sp-e-n-c-er/Public-Ninja-One-Scripts/blob/main/Dell%20Command%20Update/Dell%20Command%20Update%20Automation%20Toolkit.ps1).\\r\\n2. **Configure NinjaOne**: Add the `pleaseSelectAnOptionToRun` dropdown with the listed options.\\r\\n3. **Run**: Deploy it via NinjaOne\u2019s script engine and monitor results in your custom fields.\\r\\n\\r\\n### Notes and Disclaimer\\r\\n\\r\\nThis script is provided under the MIT License\u2014use it freely, but at your own risk. I\u2019m not liable for any issues that arise; see the full license at [opensource.org/licenses/MIT](https://opensource.org/licenses/MIT) for details. It\u2019s been tested in my environment, but always validate in yours before going full throttle.\\r\\n\\r\\n### Feedback Welcome\\r\\n\\r\\nHave thoughts or suggestions? Reach out on [GitHub](https://github.com/Sp-e-n-c-er) or [Discord](https://discordapp.com/users/286552274099240960). I\u2019m considering enhancements like automatic version checks or expanded error reporting\u2014let me know what you\u2019d like to see!\\r\\n\\r\\nThanks for reading\u2014happy automating!\\r\\n\\r\\n*Spencer Heath, 10 March 2025*"},{"id":"AdminLock-Script","metadata":{"permalink":"/blog/AdminLock-Script","source":"@site/blog/2025-03-09-NinjaOne-Admin-Lock.md","title":"Locking NinjaOne Systray scripts from users","description":"This guide explains how to create scripts for the NinjaOne system tray and configure some to run exclusively for administrators, using a checkbox within NinjaOne to control access. This approach enhances security and oversight for script execution. However, this method is best suited for restricting scripts that you\u2019d prefer end users not interact with, rather than for critical security measures. It\u2019s ideal for minor administrative tasks where accidental access wouldn\u2019t pose a significant security risk, not for safeguarding highly sensitive operations.","date":"2025-03-09T00:00:00.000Z","tags":[{"inline":false,"label":"PowerShell","permalink":"/blog/tags/PowerShell","description":"Scripts and tools leveraging PowerShell for automation and system management"},{"inline":false,"label":"NinjaOne","permalink":"/blog/tags/NinjaOne","description":"Solutions integrating with NinjaOne for remote monitoring and management"},{"inline":false,"label":"Automation","permalink":"/blog/tags/Automation","description":"Resources focused on automating repetitive IT tasks and workflows"}],"readingTime":3.615,"hasTruncateMarker":false,"authors":[{"name":"Spencer Heath","title":"Technical Security Engineer","url":"https://github.com/Sp-e-n-c-er","page":{"permalink":"/blog/authors/sheath"},"socials":{"github":"https://github.com/Sp-e-n-c-er"},"key":"sheath"}],"frontMatter":{"slug":"AdminLock-Script","title":"Locking NinjaOne Systray scripts from users","authors":"sheath","tags":["powershell","ninjaone","automation"]},"unlisted":false,"prevItem":{"title":"Streamlining Dell Updates with NinjaOne: A PowerShell Solution","permalink":"/blog/dcu-automation-ninjaone"}},"content":"This guide explains how to create scripts for the NinjaOne system tray and configure some to run exclusively for administrators, using a checkbox within NinjaOne to control access. This approach enhances security and oversight for script execution. However, this method is best suited for restricting scripts that you\u2019d prefer end users not interact with, rather than for critical security measures. It\u2019s ideal for minor administrative tasks where accidental access wouldn\u2019t pose a significant security risk, not for safeguarding highly sensitive operations.\\r\\n\\r\\n**Disclaimer**: I am not responsible for any actions you take based on this guide or the outcomes that result from implementing these configurations. Use at your own discretion and ensure they align with your organization\u2019s security policies.\\r\\n\\r\\n**Resources and Credits**:  \\r\\n- All icons and fonts referenced in this guide can be found at [Google Fonts - Symbols & Icons](https://fonts.google.com/icons?icon.size=24&icon.color=%23e3e3e3).  \\r\\n- Special thanks to the [NinjaOne Stream](https://www.youtube.com/watch?v=qBhk0awc3-c) for inspiration and insights.  \\r\\n- Shoutout to JT (MrDrProfessorJT) and Trevor (StrikerTS) for sharing that resource, and to Joseph for the inspiration!\\r\\n\\r\\n## Step 1: Access Global Custom Fields\\r\\nNavigate to **Settings > Administration > Global Custom Fields** in the NinjaOne interface to begin setting up the necessary configurations.\\r\\n\\r\\n## Step 2: Define a New Global Custom Field\\r\\nSet up a global custom field with the following details to track admin status:\\r\\n\\r\\n| Field             | Value        |\\r\\n|-------------------|--------------|\\r\\n| Custom Field Type | Check box    |\\r\\n| Label            | AdminStatus  |\\r\\n| Definition Scope | Device       |\\r\\n\\r\\n### Configure Permissions\\r\\nAssign the appropriate permissions to control access to this field:\\r\\n\\r\\n| Role         | Permission   |\\r\\n|--------------|--------------|\\r\\n| Technician   | Editable     |\\r\\n| Automation   | Read/Write   |\\r\\n| API          | None         |\\r\\n\\r\\n## Restricting System Tray Scripts\\r\\nIncorporate the following PowerShell code into any system tray script you want to limit to admin users only:\\r\\n\\r\\n```powershell\\r\\n$AdminStatusFieldName = \\"AdminStatus\\"\\r\\n$MessageTitle = \\"Access Denied\\"\\r\\n$MessageBody = \\"This script requires administrative privileges. Contact your admin for assistance.\\"\\r\\n\\r\\n$AdminStatus = Ninja-Property-Get $AdminStatusFieldName\\r\\nif ($AdminStatus -ne 1) {\\r\\n    $Session = Get-CimInstance -ClassName Win32_ComputerSystem | Select-Object -ExpandProperty UserName\\r\\n    if ($Session) {\\r\\n        $Username = $Session.Split(\'\\\\\')[1]\\r\\n        Invoke-Expression \\"msg $($Username) /TIME:30 \'$MessageTitle - $MessageBody\'\\"\\r\\n        Write-Output \\"Message sent to $($Username): Admin access required.\\"\\r\\n    } else {\\r\\n        Write-Output \\"No active user session detected to notify.\\"\\r\\n    }\\r\\n} else {\\r\\n    ## Insert Script to run here!\\r\\n    Write-Output \\"Admin access granted. Running admin script.\\"\\r\\n}\\r\\n```\\r\\n\\r\\n## Safeguarding the Admin Restriction\\r\\n\\r\\nTo prevent the `AdminStatus` field from being left enabled accidentally, set up an automated process to enforce its restricted state. \\r\\nDepending on your preferences, configure this as an automation policy or a scheduled task. \\r\\nExecute the following script hourly to automatically disable the field if it\u2019s been overlooked:\\r\\n\\r\\n```powershell\\r\\n$AdminStatusFieldName = \\"AdminStatus\\"\\r\\n$AdminStatus = Ninja-Property-Get $AdminStatusFieldName\\r\\nif ($AdminStatus -ne 0) {\\r\\n    Ninja-Property-Set $AdminStatusFieldName 0\\r\\n    Write-Output \\"AdminStatus has been successfully disabled.\\"\\r\\n}\\r\\nelse {\\r\\n    Write-Output \\"AdminStatus is already in a disabled state.\\"\\r\\n}\\r\\n```\\r\\n## Configuring the System Tray for Admin-Only Scripts\\r\\n\\r\\nNext, let\u2019s configure the NinjaOne system tray to clearly distinguish and organize scripts reserved for admin use. This setup ensures they\u2019re both easily recognizable and securely managed.\\r\\n\\r\\n### Steps:\\r\\n1. Go to **Administration > Branding > Systray** in the NinjaOne interface.\\r\\n2. Either create a new system tray configuration or edit an existing one.\\r\\n3. Add the following elements to structure your admin-only scripts:\\r\\n\\r\\n| Menu Item Type    | Details                     |\\r\\n|-------------------|-----------------------------|\\r\\n| Separator         | (Creates a visual break)   |\\r\\n| Group             | Label: \\"Admin Only Scripts\\" |\\r\\n| Automation        | Your admin-specific scripts |\\r\\n\\r\\n### Explanation:\\r\\n- **Separator**: Inserts a dividing line in the tray menu to enhance visual separation.\\r\\n- **Group**: Establishes a labeled section titled \\"Admin Only Scripts\\" to categorize restricted scripts.\\r\\n- **Automation**: Nest your admin-only automations (e.g., scripts with the `AdminStatus` check) under the \\"Admin Only Scripts\\" group. This nesting ensures these scripts appear as submenu items beneath the group label, keeping them organized and clearly tied to their admin-only purpose.\\r\\n\\r\\nThis configuration not only isolates admin scripts visually in the system tray but also reinforces their restricted access through the `AdminStatus` check, providing a seamless experience for technicians.\\r\\n\\r\\nSee below for a visual guide on the systray setup, and the message a user will see if they dont have the permissions to run this.\\r\\n\\r\\n<img src=\\"https://github.com/user-attachments/assets/6fa5af98-e91d-49a6-b1e8-24e474745bb1\\" alt=\\"Admin Only Scripts System Tray Example\\" width=\\"300\\" /> <img src=\\"https://github.com/user-attachments/assets/3e9481d7-bfbc-4106-90d4-dc4b03d5a6c7\\" alt=\\"Invalid rights message\\" width=\\"300\\" />"}]}}')}}]);