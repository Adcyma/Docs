# Workflows

Workflows automate critical tasks by connecting triggers to actions, with optional conditions to control when automation occurs. They form the backbone of Adcyma's automation capabilities, enabling seamless user lifecycle management from onboarding to offboarding.

:::info
**Important:** Workflows are only triggered by Adcyma's user management actions: creating new users, editing existing users, or removing users (including via API). If no conditions are specified, the workflow will run for all users matching the trigger.
:::

<img src="/img/Workflows1.webp" style={{ maxWidth: '1400px', height: 'auto', border: '2px solid black', borderRadius: '5px' }} />

## Workflow Components

Every workflow consists of several key elements that work together to automate your processes:

### Basic Settings

**Workflow Name**
* Descriptive identifier for your workflow
* Does not need to be unique, but should clearly indicate the workflow's purpose

**Priority** 
* Determines execution order when multiple workflows match the same trigger and conditions
* Lower numbers = higher priority (1 is highest priority)
* Controls which workflow runs first in overlapping scenarios

**Description**
* Optional field for detailed workflow documentation
* Helps team members understand the workflow's purpose and logic

## Workflow Management

**Enable/Disable Workflows**
* Workflows can be temporarily disabled without deletion
* Useful for testing, maintenance, or seasonal processes
* Disabled workflows retain all configuration but won't execute

**Copy Workflows**
* Duplicate existing workflows to create similar automation with modifications
* Saves time when building workflows with similar logic
* Ideal for creating department-specific variations of common processes

### Automation Logic

**Trigger** – When the workflow activates
* Defines the specific user management event that starts the workflow
* Examples: User created, user modified, user removed

<img src="/img/WorkflowsTriggers.webp" style={{ maxWidth: '1400px', height: 'auto', border: '2px solid black', borderRadius: '5px' }} />

**Condition** – Who the workflow affects (optional)
* Optional filters based on user attributes
* If no conditions are set, the workflow applies to **all users** matching the trigger
* Examples: Users in specific departments, managers only, users reporting to certain supervisors

<img src="/img/WorkflowsConditions.webp" style={{ maxWidth: '1400px', height: 'auto', border: '2px solid black', borderRadius: '5px' }} />

**Action** – What the workflow does
* The automated tasks performed when trigger and conditions are met
* Can include multiple actions in sequence
* Examples: Assign access profiles, send emails, enable accounts, update user attributes

<img src="/img/WorkflowsActions.webp" style={{ maxWidth: '1400px', height: 'auto', border: '2px solid black', borderRadius: '5px' }} />

## Example Workflow Scenarios

**New Employee Onboarding**
* **Trigger:** User Created
* **Condition:** Department = "Sales"
* **Actions:** Assign sales role template, send welcome email, enable account

**Manager Promotion**
* **Trigger:** User Modified  
* **Condition:** Job Title contains "Manager"
* **Actions:** Add to management groups, send notification to IT, update permissions

**Department Transfer**
* **Trigger:** User Modified
* **Condition:** Department changed
* **Actions:** Remove old department access, assign new department role, notify managers

## How Workflows Execute

1. **User Event Occurs** – Someone creates, edits, or removes a user in Adcyma (or via API)
2. **Trigger Evaluation** – System checks which workflows match the event type
3. **Condition Check** – If conditions exist, system verifies user meets criteria
4. **Priority Ordering** – Multiple matching workflows execute in priority order (lowest number first)
5. **Action Execution** – Workflow performs its defined actions automatically

## Best Practices

* **Use Clear Names** – Make workflow purposes obvious to your team
* **Set Appropriate Priorities** – Ensure critical workflows run before optional ones
* **Test Conditions Carefully** – Remember that no conditions means "all users"
* **Document Complex Logic** – Use the description field for workflows with multiple conditions
* **Monitor Execution** – Review workflow results to ensure they're working as expected

---

*Workflows transform manual processes into automated, consistent operations that scale with your organization while reducing errors and saving time.*