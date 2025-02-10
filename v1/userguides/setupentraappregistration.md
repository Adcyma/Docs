---
sidebar_position: 2
title: Creating an App Registration in Entra ID
---

# Creating an App Registration in Entra ID

This guide explains how to create an App Registration in Entra ID, a necessary step for enabling Adcyma to communicate with Entra ID (and optionally Exchange).

:::warning[Please note]

***Application Administrator** role is required to complete this task.*

:::
<br/>
Log in to your Entra ID tenant and navigate to **Microsoft Entra ID**.
<br/>
<img src="/img/CreateAppRegistration1.png" style={{ maxWidth: '1400px', height: 'auto', border: '2px solid black', borderRadius: '5px' }} />
<br/><br/>
Expand Manage in the left menu and click on "App Registration," followed by "New Registration," as shown in the image below.
<br/>
<img src="/img/CreateAppRegistration2.png" style={{ maxWidth: '1400px', height: 'auto', border: '2px solid black', borderRadius: '5px' }} />
<br/><br/>
Next, choose a suitable name for the App Registration, such as "Adcyma" and then click "Register".
<br/>
<img src="/img/CreateAppRegistration3.png" style={{ maxWidth: '1400px', height: 'auto', border: '2px solid black', borderRadius: '5px' }} />
<br/><br/>
Navigate to Certificates & secrets, choose Client secrets, and click New client secret.

Give the Client secret a suiting description, and an expiration of your liking (remember to keep track of the expiration). Next click "Add".

Afterward, make note of the Client secret and the Secret ID. Adcyma requires this information, along with the Tenant ID, to communicate with your Tenant.

:::warning

This is your only chance to see the Client Secret, so be sure to save it now.

:::
<br/>
<img src="/img/CreateAppRegistration4.png" style={{ maxWidth: '1400px', height: 'auto', border: '2px solid black', borderRadius: '5px' }} />
<br/><br/>
Next, we need to give the correct API permissions, this is done by navigating to API permissions, clicking on Add a permission and then choosing Microsoft Graph.
<br/>
<img src="/img/CreateAppRegistration5.png" style={{ maxWidth: '1400px', height: 'auto', border: '2px solid black', borderRadius: '5px' }} />
<br/><br/>
Then, select Application Permission.
<br/>
<img src="/img/CreateAppRegistration6.png" style={{ maxWidth: '1400px', height: 'auto', border: '2px solid black', borderRadius: '5px' }} />
<br/><br/>
Now, locate User.ReadWrite.All (this permission is required for Adcyma to manage your Entra ID users).
<br/>
<img src="/img/CreateAppRegistration7.png" style={{ maxWidth: '1400px', height: 'auto', border: '2px solid black', borderRadius: '5px' }} />
<br/><br/>
Another required permission is Group.ReadWrite.All for managing your groups. Be sure to add this as well.
<br/>
<img src="/img/CreateAppRegistration8.png" style={{ maxWidth: '1400px', height: 'auto', border: '2px solid black', borderRadius: '5px' }} />
<br/><br/>
As an optional step, only needed if you want Adcyma to manage Exchange tasks such as converting user mailboxes to shared mailboxes, you can add permissions for Exchange management. To do this, go to APIs my organization uses and select Office 365 Exchange Online from the list.
<br/>
<img src="/img/CreateAppRegistration9.png" style={{ maxWidth: '1400px', height: 'auto', border: '2px solid black', borderRadius: '5px' }} />
<br/><br/>
Select Application permissions and choose Exchange.ManageAsApp in the list.
<br/>
<img src="/img/CreateAppRegistration10.png" style={{ maxWidth: '1400px', height: 'auto', border: '2px solid black', borderRadius: '5px' }} />
<br/><br/>
The App Registration is now complete, with the necessary permissions and Client Secret configured.