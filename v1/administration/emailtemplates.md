# Email Templates

The Email Templates page lets administrators create email templates that can be used in Workflows. These templates can be used in Workflows for key processes like user onboarding, role transitions, and department reassignments.

:::info

*Email Templates ensure standardized messaging but are only sent when triggered within a Workflow.*

:::
<br/>
<img src="/img/EmailTemplates.png" style={{ maxWidth: '1400px', height: 'auto', border: '2px solid black', borderRadius: '5px' }} />
<br/><br/>

Administrators can:

* **Create Email Templates:** Define email messages with customizable content and variables, making them available for use in Workflows.
* **Edit Email Templates:** Modify existing templates to update content or adjust variables.
* **Delete Email Templates:** Remove templates that are no longer needed.

<h2>Example Use Case</h2>

A **"New Employee Welcome Email"** template might include:

* A personalized greeting using variables like `{{first_name}}`
* Important first-day instructions
* Contact information for IT or HR

By using **Email Templates** in Workflows, administrators can automate and standardize email communication, ensuring users receive the right information at the right time.

<h2>Available Variables</h2>

The following variables can be used in email templates:

* `{{first_name}}` – The user's first name  
* `{{last_name}}` – The user's last name  
* `{{username}}` – The user's username  
* `{{display_name}}` – The user's display name  
* `{{password}}` – The user's password (not recommended for use) 
* `{{email_address}}` – The user's email address  
* `{{manager_name}}` – The name of the user's manager  
* `{{manager_email}}` – The email address of the user's manager  


