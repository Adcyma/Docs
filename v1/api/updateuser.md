---
sidebar_position: 2
title: Update User
---

**Endpoint**: `/users/{id}`  
**Method**: `PATCH`  
**Description**: Updates the details of a specific user in the system. To update a user, you must provide the unique `id` of the user and specify the attribute(s) you want to update, such as `department` or other user details.

### Request Parameters:
- **id**: The unique identifier (user ID) of the user whose details you want to update. This must be included in the URL.
- **department**: The new value for the user's department. This is one example of the user attribute you can update. This must be included in the request body.


### Example Request:
```json
{
  "department": "new_department"
}
```

### Response:
The response will be a JSON array containing user objects.

#### Success Response (`200 OK`):
```json
{
  "id": 1,
  "accountName": "john_doe",
  "email": "john.doe@example.com",
  "department": "new_department",  
  "createdAt": "2024-01-01T12:00:00Z"
}
```

#### Error Response (`400 Bad Request`):

```json
{
  "status": "error",
  "code": 400,
  "message": "Authentication failed",
  "details": {
    "error": "Invalid or expired authentication token"
  }
}
```
#### Error Response (`503 Service Unavailable`):

```json
{
  "status": "error",
  "code": 503,
  "message": "Tenant Unavailable",
  "details": {
    "error": "The requested tenant is currently offline"
  }
}
```
#### Error Response (`502 User not found`):

```json
{
  "status": "error",
  "code": 404,
  "message": "User not found",
  "details": {
    "error": "The requested user does not exist"
  }
}