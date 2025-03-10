"use strict";(self.webpackChunkspencer_github_io=self.webpackChunkspencer_github_io||[]).push([[978],{2684:e=>{e.exports=JSON.parse('{"permalink":"/blog/AdminLock-Script","source":"@site/blog/2025-03-09-NinjaOne-Admin-Lock.md","title":"Locking NinjaOne Systray scripts from users","description":"This guide explains how to create scripts for the NinjaOne system tray and configure some to run exclusively for administrators, using a checkbox within NinjaOne to control access. This approach enhances security and oversight for script execution. However, this method is best suited for restricting scripts that you\u2019d prefer end users not interact with, rather than for critical security measures. It\u2019s ideal for minor administrative tasks where accidental access wouldn\u2019t pose a significant security risk, not for safeguarding highly sensitive operations.","date":"2025-03-09T00:00:00.000Z","tags":[{"inline":false,"label":"Powershell","permalink":"/blog/tags/Powershell","description":"All about powershell"}],"readingTime":3.615,"hasTruncateMarker":false,"authors":[{"name":"Spencer Heath","title":"Technical Security Engineer","url":"https://github.com/Sp-e-n-c-er","page":{"permalink":"/blog/authors/sheath"},"socials":{"github":"https://github.com/Sp-e-n-c-er"},"key":"sheath"}],"frontMatter":{"slug":"AdminLock-Script","title":"Locking NinjaOne Systray scripts from users","authors":"sheath","tags":["powershell"]},"unlisted":false}')},6748:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var i=t(2684),n=t(4848),r=t(8453);const a={slug:"AdminLock-Script",title:"Locking NinjaOne Systray scripts from users",authors:"sheath",tags:["powershell"]},o="Restricting NinjaOne System Tray Scripts to 'Admin-Only' Access",l={authorsImageUrls:[void 0]},c=[{value:"Step 1: Access Global Custom Fields",id:"step-1-access-global-custom-fields",level:2},{value:"Step 2: Define a New Global Custom Field",id:"step-2-define-a-new-global-custom-field",level:2},{value:"Configure Permissions",id:"configure-permissions",level:3},{value:"Restricting System Tray Scripts",id:"restricting-system-tray-scripts",level:2},{value:"Safeguarding the Admin Restriction",id:"safeguarding-the-admin-restriction",level:2},{value:"Configuring the System Tray for Admin-Only Scripts",id:"configuring-the-system-tray-for-admin-only-scripts",level:2},{value:"Steps:",id:"steps",level:3},{value:"Explanation:",id:"explanation",level:3}];function d(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:"This guide explains how to create scripts for the NinjaOne system tray and configure some to run exclusively for administrators, using a checkbox within NinjaOne to control access. This approach enhances security and oversight for script execution. However, this method is best suited for restricting scripts that you\u2019d prefer end users not interact with, rather than for critical security measures. It\u2019s ideal for minor administrative tasks where accidental access wouldn\u2019t pose a significant security risk, not for safeguarding highly sensitive operations."}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Disclaimer"}),": I am not responsible for any actions you take based on this guide or the outcomes that result from implementing these configurations. Use at your own discretion and ensure they align with your organization\u2019s security policies."]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Resources and Credits"}),":"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["All icons and fonts referenced in this guide can be found at ",(0,n.jsx)(s.a,{href:"https://fonts.google.com/icons?icon.size=24&icon.color=%23e3e3e3",children:"Google Fonts - Symbols & Icons"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:["Special thanks to the ",(0,n.jsx)(s.a,{href:"https://www.youtube.com/watch?v=qBhk0awc3-c",children:"NinjaOne Stream"})," for inspiration and insights."]}),"\n",(0,n.jsx)(s.li,{children:"Shoutout to JT (MrDrProfessorJT) and Trevor (StrikerTS) for sharing that resource, and to Joseph for the inspiration!"}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"step-1-access-global-custom-fields",children:"Step 1: Access Global Custom Fields"}),"\n",(0,n.jsxs)(s.p,{children:["Navigate to ",(0,n.jsx)(s.strong,{children:"Settings > Administration > Global Custom Fields"})," in the NinjaOne interface to begin setting up the necessary configurations."]}),"\n",(0,n.jsx)(s.h2,{id:"step-2-define-a-new-global-custom-field",children:"Step 2: Define a New Global Custom Field"}),"\n",(0,n.jsx)(s.p,{children:"Set up a global custom field with the following details to track admin status:"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Field"}),(0,n.jsx)(s.th,{children:"Value"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Custom Field Type"}),(0,n.jsx)(s.td,{children:"Check box"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Label"}),(0,n.jsx)(s.td,{children:"AdminStatus"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Definition Scope"}),(0,n.jsx)(s.td,{children:"Device"})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"configure-permissions",children:"Configure Permissions"}),"\n",(0,n.jsx)(s.p,{children:"Assign the appropriate permissions to control access to this field:"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Role"}),(0,n.jsx)(s.th,{children:"Permission"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Technician"}),(0,n.jsx)(s.td,{children:"Editable"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Automation"}),(0,n.jsx)(s.td,{children:"Read/Write"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"API"}),(0,n.jsx)(s.td,{children:"None"})]})]})]}),"\n",(0,n.jsx)(s.h2,{id:"restricting-system-tray-scripts",children:"Restricting System Tray Scripts"}),"\n",(0,n.jsx)(s.p,{children:"Incorporate the following PowerShell code into any system tray script you want to limit to admin users only:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-powershell",children:'$AdminStatusFieldName = "AdminStatus"\r\n$MessageTitle = "Access Denied"\r\n$MessageBody = "This script requires administrative privileges. Contact your admin for assistance."\r\n\r\n$AdminStatus = Ninja-Property-Get $AdminStatusFieldName\r\nif ($AdminStatus -ne 1) {\r\n    $Session = Get-CimInstance -ClassName Win32_ComputerSystem | Select-Object -ExpandProperty UserName\r\n    if ($Session) {\r\n        $Username = $Session.Split(\'\\\')[1]\r\n        Invoke-Expression "msg $($Username) /TIME:30 \'$MessageTitle - $MessageBody\'"\r\n        Write-Output "Message sent to $($Username): Admin access required."\r\n    } else {\r\n        Write-Output "No active user session detected to notify."\r\n    }\r\n} else {\r\n    ## Insert Script to run here!\r\n    Write-Output "Admin access granted. Running admin script."\r\n}\n'})}),"\n",(0,n.jsx)(s.h2,{id:"safeguarding-the-admin-restriction",children:"Safeguarding the Admin Restriction"}),"\n",(0,n.jsxs)(s.p,{children:["To prevent the ",(0,n.jsx)(s.code,{children:"AdminStatus"})," field from being left enabled accidentally, set up an automated process to enforce its restricted state.\r\nDepending on your preferences, configure this as an automation policy or a scheduled task.\r\nExecute the following script hourly to automatically disable the field if it\u2019s been overlooked:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-powershell",children:'$AdminStatusFieldName = "AdminStatus"\r\n$AdminStatus = Ninja-Property-Get $AdminStatusFieldName\r\nif ($AdminStatus -ne 0) {\r\n    Ninja-Property-Set $AdminStatusFieldName 0\r\n    Write-Output "AdminStatus has been successfully disabled."\r\n}\r\nelse {\r\n    Write-Output "AdminStatus is already in a disabled state."\r\n}\n'})}),"\n",(0,n.jsx)(s.h2,{id:"configuring-the-system-tray-for-admin-only-scripts",children:"Configuring the System Tray for Admin-Only Scripts"}),"\n",(0,n.jsx)(s.p,{children:"Next, let\u2019s configure the NinjaOne system tray to clearly distinguish and organize scripts reserved for admin use. This setup ensures they\u2019re both easily recognizable and securely managed."}),"\n",(0,n.jsx)(s.h3,{id:"steps",children:"Steps:"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["Go to ",(0,n.jsx)(s.strong,{children:"Administration > Branding > Systray"})," in the NinjaOne interface."]}),"\n",(0,n.jsx)(s.li,{children:"Either create a new system tray configuration or edit an existing one."}),"\n",(0,n.jsx)(s.li,{children:"Add the following elements to structure your admin-only scripts:"}),"\n"]}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Menu Item Type"}),(0,n.jsx)(s.th,{children:"Details"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Separator"}),(0,n.jsx)(s.td,{children:"(Creates a visual break)"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Group"}),(0,n.jsx)(s.td,{children:'Label: "Admin Only Scripts"'})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Automation"}),(0,n.jsx)(s.td,{children:"Your admin-specific scripts"})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"explanation",children:"Explanation:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Separator"}),": Inserts a dividing line in the tray menu to enhance visual separation."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Group"}),': Establishes a labeled section titled "Admin Only Scripts" to categorize restricted scripts.']}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Automation"}),": Nest your admin-only automations (e.g., scripts with the ",(0,n.jsx)(s.code,{children:"AdminStatus"}),' check) under the "Admin Only Scripts" group. This nesting ensures these scripts appear as submenu items beneath the group label, keeping them organized and clearly tied to their admin-only purpose.']}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["This configuration not only isolates admin scripts visually in the system tray but also reinforces their restricted access through the ",(0,n.jsx)(s.code,{children:"AdminStatus"})," check, providing a seamless experience for technicians."]}),"\n",(0,n.jsx)(s.p,{children:"See below for a visual guide on the systray setup, and the message a user will see if they dont have the permissions to run this."}),"\n",(0,n.jsx)("img",{src:"https://github.com/user-attachments/assets/6fa5af98-e91d-49a6-b1e8-24e474745bb1",alt:"Admin Only Scripts System Tray Example",width:"300"}),"\n",(0,n.jsx)("img",{src:"https://github.com/user-attachments/assets/3e9481d7-bfbc-4106-90d4-dc4b03d5a6c7",alt:"Invalid rights message",width:"300"})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}}}]);