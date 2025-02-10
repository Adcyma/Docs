"use strict";(self.webpackChunkadcymadocs=self.webpackChunkadcymadocs||[]).push([[623],{5978:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>g,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var n=i(4848),r=i(8453);const s={sidebar_position:2,title:"Creating an App Registration in Entra ID"},a="Creating an App Registration in Entra ID",o={id:"userguides/setupentraappregistration",title:"Creating an App Registration in Entra ID",description:"This guide explains how to create an App Registration in Entra ID, a necessary step for enabling Adcyma to communicate with Entra ID (and optionally Exchange).",source:"@site/v1/userguides/setupentraappregistration.md",sourceDirName:"userguides",slug:"/userguides/setupentraappregistration",permalink:"/v1/userguides/setupentraappregistration",draft:!1,unlisted:!1,editUrl:"https://github.com/adcyma/docs/tree/main/v1/userguides/setupentraappregistration.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Creating an App Registration in Entra ID"},sidebar:"tutorialSidebar",previous:{title:"Adcyma Sign-Up Guide",permalink:"/v1/userguides/signupadcyma"}},p={},d=[];function c(e){const t={admonition:"admonition",em:"em",h1:"h1",header:"header",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"creating-an-app-registration-in-entra-id",children:"Creating an App Registration in Entra ID"})}),"\n",(0,n.jsx)(t.p,{children:"This guide explains how to create an App Registration in Entra ID, a necessary step for enabling Adcyma to communicate with Entra ID (and optionally Exchange)."}),"\n",(0,n.jsx)(t.admonition,{title:"Please note",type:"warning",children:(0,n.jsx)(t.p,{children:(0,n.jsxs)(t.em,{children:[(0,n.jsx)(t.strong,{children:"Application Administrator"})," role is required to complete this task."]})})}),"\n",(0,n.jsxs)(t.p,{children:["Log in to your Entra ID tenant and navigate to ",(0,n.jsx)(t.strong,{children:"Microsoft Entra ID"}),"."]}),"\n",(0,n.jsx)("img",{src:"/img/CreateAppRegistration1.png",style:{maxWidth:"1400px",height:"auto",border:"2px solid black",borderRadius:"5px"}}),"\n",(0,n.jsx)(t.p,{children:'Expand Manage in the left menu and click on "App Registration," followed by "New Registration," as shown in the image below.'}),"\n",(0,n.jsx)("img",{src:"/img/CreateAppRegistration2.png",style:{maxWidth:"1400px",height:"auto",border:"2px solid black",borderRadius:"5px"}}),"\n",(0,n.jsx)(t.p,{children:'Next, choose a suitable name for the App Registration, such as "Adcyma" and then click "Register".'}),"\n",(0,n.jsx)("img",{src:"/img/CreateAppRegistration3.png",style:{maxWidth:"1400px",height:"auto",border:"2px solid black",borderRadius:"5px"}}),"\n",(0,n.jsx)(t.p,{children:"Navigate to Certificates & secrets, choose Client secrets, and click New client secret."}),"\n",(0,n.jsx)(t.p,{children:'Give the Client secret a suiting description, and an expiration of your liking (remember to keep track of the expiration). Next click "Add".'}),"\n",(0,n.jsx)(t.p,{children:"Afterward, make note of the Client secret and the Secret ID. Adcyma requires this information, along with the Tenant ID, to communicate with your Tenant."}),"\n",(0,n.jsx)(t.admonition,{type:"warning",children:(0,n.jsx)(t.p,{children:"This is your only chance to see the Client Secret, so be sure to save it now."})}),"\n",(0,n.jsx)("img",{src:"/img/CreateAppRegistration4.png",style:{maxWidth:"1400px",height:"auto",border:"2px solid black",borderRadius:"5px"}}),"\n",(0,n.jsx)(t.p,{children:"Next, we need to give the correct API permissions, this is done by navigating to API permissions, clicking on Add a permission and then choosing Microsoft Graph."}),"\n",(0,n.jsx)("img",{src:"/img/CreateAppRegistration5.png",style:{maxWidth:"1400px",height:"auto",border:"2px solid black",borderRadius:"5px"}}),"\n",(0,n.jsx)(t.p,{children:"Then, select Application Permission."}),"\n",(0,n.jsx)("img",{src:"/img/CreateAppRegistration6.png",style:{maxWidth:"1400px",height:"auto",border:"2px solid black",borderRadius:"5px"}}),"\n",(0,n.jsx)(t.p,{children:"Now, locate User.ReadWrite.All (this permission is required for Adcyma to manage your Entra ID users)."}),"\n",(0,n.jsx)("img",{src:"/img/CreateAppRegistration7.png",style:{maxWidth:"1400px",height:"auto",border:"2px solid black",borderRadius:"5px"}}),"\n",(0,n.jsx)(t.p,{children:"Another required permission is Group.ReadWrite.All for managing your groups. Be sure to add this as well."}),"\n",(0,n.jsx)("img",{src:"/img/CreateAppRegistration8.png",style:{maxWidth:"1400px",height:"auto",border:"2px solid black",borderRadius:"5px"}}),"\n",(0,n.jsx)(t.p,{children:"As an optional step, only needed if you want Adcyma to manage Exchange tasks such as converting user mailboxes to shared mailboxes, you can add permissions for Exchange management. To do this, go to APIs my organization uses and select Office 365 Exchange Online from the list."}),"\n",(0,n.jsx)("img",{src:"/img/CreateAppRegistration9.png",style:{maxWidth:"1400px",height:"auto",border:"2px solid black",borderRadius:"5px"}}),"\n",(0,n.jsx)(t.p,{children:"Select Application permissions and choose Exchange.ManageAsApp in the list."}),"\n",(0,n.jsx)("img",{src:"/img/CreateAppRegistration10.png",style:{maxWidth:"1400px",height:"auto",border:"2px solid black",borderRadius:"5px"}}),"\n",(0,n.jsx)(t.p,{children:"The App Registration is now complete, with the necessary permissions and Client Secret configured."})]})}function g(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>o});var n=i(6540);const r={},s=n.createContext(r);function a(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);