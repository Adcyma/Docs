# Identity Provider


The Identity Provider Settings page is where you configure the connection between Adcyma and your external identity provider, such as Entra ID. This setup is essential for enabling Adcyma to communicate with your tenant.


* Identity Provider: Choose the identity provider you want to connect with. For example, Entra ID.
* Client ID: This is the unique ID assigned to your application by the identity provider. It's used to identify your app.
* Tenant ID: The unique ID for your organization in the identity provider's system.
* Client Secret: A secure key provided by the identity provider to authenticate your application. Keep this private.
* SSO (Single Sign-On): You can enable SSO by toggling the Enable SSO option. When enabled, all users will log in through the configured identity provider.
<br/>
<img src="/img/IdentityProvider.png" style={{ maxWidth: '1400px', height: 'auto', border: '2px solid black', borderRadius: '5px' }} />
<br/><br/>
After filling in the fields, click Save to apply the settings or enable SSO.


<h2>Exchange Authentication</h2>

This is also where you can download a certificate to upload to your Entra ID application, enabling Adcyma to communicate with your Exchange Online environment.


:::info  
This is optional and only required if you want Adcyma to perform Exchange Online-related tasks, such as converting a User mailbox to a Shared mailbox. 
:::

<br/>
<img src="/img/IdentityProviderCertificateManagement.png" style={{ maxWidth: '1400px', height: 'auto', border: '2px solid black', borderRadius: '5px' }} />
<br/><br/>