# Email Templates

Email Templates enable administrators to create standardized email messages that integrate seamlessly with Workflows. These templates streamline communication for critical processes such as user onboarding, role changes, and department transfers.

:::info
**Important:** Email Templates provide consistent messaging but are only delivered when activated through a [Workflow](/v1/workflows). Templates alone do not send emails.
:::

<br/>
<img src="/img/EmailTemplates.webp" style={{ maxWidth: '1400px', height: 'auto', border: '2px solid black', borderRadius: '5px' }} />
<br/><br/>

## What You Can Do

As an administrator, you have full control over email templates:

* **Create Templates** – Build new email messages with dynamic content using variables, ready for Workflow integration
* **Edit Templates** – Update existing templates to refine messaging or adjust variable usage  
* **Delete Templates** – Remove outdated or unused templates to keep your library organized

## Example: New Employee Welcome Email

Consider a **"New Employee Welcome Email"** template that includes:

* Personalized greeting: "Welcome, `{{first_name}}`!"
* Essential first-day information and schedule
* Key contact details for IT support and HR assistance

When this template is triggered through a Workflow, it automatically personalizes each email while ensuring consistent, professional communication for every new hire.

## Template Variables

Personalize your email templates using these dynamic variables:

**User Information**
* `{{first_name}}` – User's first name
* `{{last_name}}` – User's last name  
* `{{username}}` – User's system username
* `{{display_name}}` – User's display name
* `{{email_address}}` – User's email address
* `{{password}}` – User's password (*only available for users created via Adcyma; removed after use*)

**Organizational Details**
* `{{manager_name}}` – Direct manager's name
* `{{manager_email}}` – Direct manager's email address
* `{{company_name}}` – User's company
* `{{department}}` – User's department
* `{{job_title}}` – User's job title

## Get More Variables

Need additional user attributes for your templates? We're here to help! Contact our support team at **support@adcyma.com** and we'll work with you to add the variables you need.

---

*By combining Email Templates with Workflows, you can automate communications while maintaining consistent, professional messaging across your organization.*