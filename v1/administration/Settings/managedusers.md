# Managed Users

The Managed Users page provides a comprehensive view of all users currently under Adcyma's management. This centralized interface allows administrators to monitor user information, control the scope of managed users, and ensure user data remains synchronized with your identity provider.

## User Information Display

For each managed user, administrators can review essential details including:

- **Display Name** - The user's full name as it appears in the system
- **Username** - The user's login identifier
- **Job Title** - Current role or position within the organization
- **Department** - Organizational unit or division assignment
- **Additional Attributes** - Other relevant user properties from your identity provider

## Managing User Scope

**Group Selection**  
Control which users Adcyma manages by selecting the appropriate Entra ID group from the dropdown menu. This group determines the complete scope of users that will be included in Adcyma's management processes. After selecting your desired group, click **Save Group** to apply the configuration.

:::warning Important Group Type Requirement
The selected Entra ID group **must be a standard security group** and **cannot be a dynamic group**. Dynamic groups will prevent Adcyma from properly updating group membership, which is essential for the system to function correctly. Always use manually managed or rule-based static groups for Adcyma management.
:::

## User Data Synchronization

**Automatic Updates**  
Adcyma automatically synchronizes user information from your identity provider every hour, ensuring that user details, group memberships, and organizational changes are consistently reflected in the system.

**Manual Refresh**  
When immediate synchronization is needed, use the **Refresh** button to manually trigger a complete user data update. This is particularly useful when:
- New users have been added to your managed group
- User information has been updated in your identity provider
- You need to verify recent changes immediately
- Troubleshooting user-related issues

<br/>
<img src="/img/ManagedUsers.webp" style={{ maxWidth: '1400px', height: 'auto', border: '2px solid black', borderRadius: '5px' }} />

## Best Practices

**Group Management**  
- Choose standard Entra ID security groups that accurately reflect the users you want Adcyma to manage
- **Avoid dynamic groups** - Use only static security groups to ensure Adcyma can properly update group membership
- Regularly review group membership to ensure it aligns with your management requirements
- Manually manage group membership or use rule-based static groups for automatic user inclusion

**Data Currency**  
- Use manual refresh when immediate updates are critical for operations
- Allow automatic hourly synchronization to handle routine updates

This page serves as your primary interface for understanding and controlling the user population that Adcyma manages within your organization.