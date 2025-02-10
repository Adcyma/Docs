---
sidebar_position: 1
title: Adcyma Sign-Up Guide
---

# Adcyma Sign-Up Guide

This guide will help you navigate the initial sign-up process, making sure you’re set up in no time.


Begin by navigating to the [Adcyma Portal](https://portal.adcyma.com) and clicking the Sign Up button, as shown in the image below.
<br/>
<img src="/img/SignUp1.png" style={{ maxWidth: '1400px', height: 'auto', border: '2px solid black', borderRadius: '5px' }} />
<br/><br/>
Next, enter your details.
<br/>
<img src="/img/SignUp2.png" style={{ maxWidth: '1400px', height: 'auto', border: '2px solid black', borderRadius: '5px' }} />
<br/><br/>
Once you've entered your details and clicked "Create your account," you will receive an email at the provided address to set your initial password.
<br/>
<img src="/img/SignUp3.png" style={{ maxWidth: '1400px', height: 'auto', border: '2px solid black', borderRadius: '5px' }} />
<br/><br/>
Open the email (if you don't see it in your inbox, please check your spam folder) and click "Set Up Your Password".
<br/>
<img src="/img/SignUp4.png" style={{ maxWidth: '1400px', height: 'auto', border: '2px solid black', borderRadius: '5px' }} />
<br/><br/>
Enter your password, which must be at least 12 characters long, include one special character, and contain one number.
<br/>
<img src="/img/SignUp5.png" style={{ maxWidth: '1400px', height: 'auto', border: '2px solid black', borderRadius: '5px' }} />
<br/><br/>
Next, you'll need to configure the settings for your tenant, which is how Adcyma authenticates with your environment. Please follow the guide [Creating an App Registration in Entra ID](https://docs.adcyma.com/v1/userguides/setupentraappregistration) to create a Client ID and Client Secret in Entra ID.
<br/>
<img src="/img/SignUp6.png" style={{ maxWidth: '1400px', height: 'auto', border: '2px solid black', borderRadius: '5px' }} />
<br/><br/>
The next step is to select your User Format Preferences, which includes choosing your Primary Domain, Username, Display Name, and Email format. These settings can easily be changed later in the Admin interface.
<br/>
<img src="/img/SignUp7.png" style={{ maxWidth: '1400px', height: 'auto', border: '2px solid black', borderRadius: '5px' }} />
<br/><br/>
The final step is to choose the static group from which Adcyma should fetch current users and use as the Adcyma-managed group. All future users will automatically be added to this group.
This group will serve as the source for all users managed by Adcyma, enabling current users to be managed within the system. Any future users created by Adcyma will automatically be placed into this group.

:::info

*It is recommended to create a new static group and manually add the existing users that Adcyma should manage. This ensures that only relevant users are included, excluding any unnecessary accounts, such as service accounts.*

**This group must be a static membership-managed group.**

:::

Changing this group later is possible, but the following will occur:

* **Users** who were in the **old group** but not in the **new one** will be **removed** from Adcyma and will no longer be **managed** by the system
* **Users** who were in the **old group** but not in the **new one** will no longer be **available** in Adcyma. For example, you won't be able to **assign** them as **Managers** for other users
* Any active workflows involving users who are no longer **managed** will continue to **execute** as planned
<br/>
<img src="/img/SignUp8.png" style={{ maxWidth: '1400px', height: 'auto', border: '2px solid black', borderRadius: '5px' }} />
<br/><br/>
You're all set! You can now log into your Adcyma tenant.