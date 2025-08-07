---
sidebar_position: 3
title: Workflows
---

# Workflows
A Workflow is a way to automate tasks by linking a trigger to one or more actions, optionally filtered by conditions.

<img src="/img/Workflows1.webp" style={{ maxWidth: '1400px', height: 'auto', border: '2px solid black', borderRadius: '5px' }} />
<br/>
* **Workflow Name:** The name of the Workflow - Does not need to be unique.
* **Priority:** Each Workflow in Adcyma has a Priority setting that determines the order in which workflows are evaluated when multiple workflows match the same trigger and condition.
    - Lower numbers indicate higher priority — with 1 being the highest.
    - If two or more workflows are triggered under the same conditions and trigger, the one with the lowest priority number will run first. This allows admins to control which workflow takes precedence in overlapping scenarios.
* **Description:** An optional field where you can add a meaningful description for the Workflow.
* **Trigger:** – Defines when the workflow should start, such as when a user is created or modified.
* **Condition:** – Optional checks based on user information. You can, for example, run the workflow only if a user has a certain department, is a manager, or reports to a specific manager.
* **Action:** – The task(s) to perform when the trigger fires and conditions are met — such as assigning an Access Profile, sending a notification, or enabling the user's account.
