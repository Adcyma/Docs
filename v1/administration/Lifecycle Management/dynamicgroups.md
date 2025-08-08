---
sidebar_position: 4
title: Dynamic Groups
---

# Dynamic Groups

**Dynamic Groups** allow you to automatically manage group membership based on user attributes and rules. You can use them to populate **Microsoft Entra Security Groups** or **Exchange Distribution Lists** with users who match defined conditions — while also manually including or excluding specific users when needed.

<img src="/img/DynamicGroups.webp" style={{ maxWidth: '1400px', height: 'auto', border: '2px solid black', borderRadius: '5px' }} />
<br/>

### Group Settings

- **Name**  
  The name of the dynamic group. This does not need to be unique but should be descriptive enough to identify its purpose.

- **Description**  
  An optional field where you can provide additional context or notes about the group.

- **Target Group Type**  
  Choose whether this dynamic group manages a:
  - **Microsoft Entra Security Group**, or
  - **Exchange Distribution List**

- **Target Group**  
  Select the actual group (from Entra) that will be updated by this dynamic group configuration.

---

### Membership Logic

- **Evaluation Mode**  
  Determines how group membership is handled when the dynamic rules are evaluated:
  - **Relaxed Mode**: Keeps existing members and adds new ones who match the conditions.
  - **Strict Mode**: Will replace the entire group membership based on the evaluated conditions.

- **Always Include Users**  
  A list of users who should always be included in the group — even if they don’t match any conditions.

- **Always Exclude Users**  
  A list of users who should never be part of the group — even if they match the defined conditions.

- **Conditional Blocks**  
  Define the logic for which users should be automatically included based on their attributes. For example:
  - Include all users in the "Marketing" department
  - Include users with a title of "Manager" or "Director"
  - Combine multiple conditions using **AND** logic

Once your group configuration is complete, click **Save Group** to apply your settings. Membership updates will be automatically synchronized with the target group in Entra based on your defined logic.