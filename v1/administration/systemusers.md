# System Users

The System Users page is where administrators can manage the internal user accounts within Adcyma. This page provides the functionality to create, edit, and delete system users, as well as assign roles to define their permissions and access levels.

:::info

*These users does not get automatically provisioned to your tenant.*

:::

<img src="/img/SystemUsers.png" style={{ maxWidth: '1400px', height: 'auto', border: '2px solid black', borderRadius: '5px' }} />

Administrators can:

* Create System Users: Add new users by entering their details and selecting an appropriate role.
* Edit System Users: Update user details and assigned roles.
* Delete System Users: Permanently remove users when they are no longer needed.
* Assign Roles: Choose a role for each user to determine their permissions within the Adcyma Portal.
  * User: This role provides the system user with basic privileges to use the Dashboard, which includes:
    * New employee
    * Edit employee
    * Employee leaving
    * View Queued Tasks
    * View History
  * API: This role includes all the privileges of the User role, with the added ability to collect and use the API key required for accessing Adcyma's API.
  * Admin: This is the highest level user role, granting full permissions to view and manage all administrative tasks, including user and role management, and system configuration.