# Identity Provider Settings

The Identity Provider Settings page allows you to modify the existing connection between Adcyma and your organization's external identity provider, such as Microsoft Entra ID. Since these settings were configured during your initial Adcyma setup, this page is typically used when you need to update credentials, change configurations, or troubleshoot connectivity issues.

## Current Settings Overview

You can review and update the following connection parameters as needed:

**Identity Provider**  
Select your organization's identity provider from the available options (e.g., Microsoft Entra ID).

**Client ID**  
The unique application identifier assigned by your identity provider. This ID allows the system to recognize and authenticate your specific application instance.

**Tenant ID**  
Your organization's unique identifier within the identity provider's directory system, ensuring connections are routed to the correct organizational tenant.

**Client Secret**  
A confidential authentication key provided by your identity provider. This secret must be kept secure and should never be shared or exposed publicly.

<br/>
<img src="/img/IdentityProvider1.webp" style={{ maxWidth: '1400px', height: 'auto', border: '2px solid black', borderRadius: '5px' }} />
<br/><br/>

After making any necessary changes, click **Save** to update your configuration settings.

## Exchange Authentication

This section provides additional integration capabilities for Microsoft Exchange Online environments. Here you can download the necessary certificate to upload to your Entra ID application, establishing secure communication between Adcyma and your Exchange Online services.

:::info
Exchange authentication is optional and only required if you want Adcyma to perform Exchange Online-related operations, such as converting User mailboxes to Shared mailboxes or other Exchange management tasks.
:::

<br/>
<img src="/img/IdentityProvider2.webp" style={{ maxWidth: '1400px', height: 'auto', border: '2px solid black', borderRadius: '5px' }} />
<br/><br/>

## Single Sign-On (SSO)

Control user authentication by toggling the **Enable SSO** option. When enabled, this feature directs all user logins through your configured identity provider. When disabled, users will need to authenticate directly with Adcyma using their individual credentials.

<br/>
<img src="/img/IdentityProvider3.webp" style={{ maxWidth: '1400px', height: 'auto', border: '2px solid black', borderRadius: '5px' }} />
<br/><br/>

## Managing Your Settings

- Update your Client Secret when it expires or as part of regular security rotations
- Coordinate SSO changes with your IT team to minimize user disruption  
- Test configuration changes in a non-production environment when possible
- Keep your identity provider application permissions aligned with current Adcyma requirements
- Review and update authentication certificates before they expire