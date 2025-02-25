---
sidebar_position: 3
title: Create User
---

**Endpoint**: `/users`  
**Method**: `POST`  
**Description**: Creates a new user in the system. To create a user, you need to provide necessary details like `accountName`, `email`, and `department`.

### Request Parameters:
- **accountName**: The unique username for the user.
- **email**: The email address of the user.
- **department**: The department the user belongs to (optional, if applicable).
- **password**: The password for the user (required).

### Example Request:
```json
{
  "accountName": "new_user",
  "email": "new_user@example.com",
  "department": "Sales",
  "password": "user_password_123"
}
```

### Response:
The response will be a JSON array containing user objects.

#### Success Response (`201 Created`):
```json
{
  "id": 1,
  "accountName": "new_user",
  "email": "new_user@example.com",
  "department": "Sales",
  "createdAt": "2024-02-16T12:00:00Z"
}
```

#### Error Response (`400 Bad Request`):

```json
{
  "status": "error",
  "code": 400,
  "message": "Invalid request",
  "details": {
    "error": "Missing required field: accountName"
  }
}
```
#### Error Response (`409 Conflict`):

```json
{
  "status": "error",
  "code": 409,
  "message": "User already exists",
  "details": {
    "error": "The accountName or email is already taken"
  }
}
```
#### Error Response (`503 Service Unavailable`):

```json
{
  "status": "error",
  "code": 503,
  "message": "Service Unavailable",
  "details": {
    "error": "The service is temporarily unavailable"
  }
}