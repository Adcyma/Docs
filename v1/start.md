---
sidebar_position: 1
title: Welcome
hide_title: true
---
## Welcome to Adcyma's System Wiki!



This wiki is your guide to everything related to the systems of Adcyma. Here, you'll find detailed information on how to:

* Install and set up your system.
* Configure workflows to meet your needs.
* Guides to help you comfortably operate the Adcyma Portal.
* Learn how our system operates and ensures security.
* If you can’t find the documentation you're looking for, please contact us at support@adcyma.com.

:::tip

Use the navigation links on the left to explore topics.

:::
<br/>
# Key Terminology

The following terms are used throughout this document and the platform:

* **Workflows:** A Workflow in Adcyma is a configurable sequence of logic that automates processes. It consists of three key components: 
   - **Trigger** – Defines when the workflow should start, such as when a user is created or modified.
   - **Condition** – Optional checks based on user attributes. You can, for example, run the workflow only if a user has a certain department, is a manager, or reports to a specific manager.
   - **Action** – The task(s) to perform when the trigger fires and conditions are met — such as assigning an Access Profile, sending a notification, or enabling the user's account.
* **Access Profile:** An Access Profile in Adcyma defines a set of access items—currently limited to Entra ID groups—that are bundled together and treated as a single unit. It simplifies the assignment of multiple group memberships by grouping them under one profile.
<br/>Access Profiles can be assigned through Workflows.<br/>
For example, an Access Profile called “Finance Team Access” might include Entra ID groups for finance tools, reporting dashboards, and department-specific resources.