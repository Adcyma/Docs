---
sidebar_position: 1
title: Get All Users
---

**Endpoint**: `/users`  
**Method**: `GET`  
**Description**: Retrieves a list of all users in the system.

### Request Parameters:
- This endpoint does not require any query parameters.

### Response:
The response will be a JSON array containing user objects.

#### Success Response (`200 OK`):
```json
[
  {
    "id": 1,
    "username": "john_doe",
    "email": "john.doe@example.com",
    "createdAt": "2024-01-01T12:00:00Z"
  },
  {
    "id": 2,
    "username": "jane_smith",
    "email": "jane.smith@example.com",
    "createdAt": "2024-01-02T12:00:00Z"
  }
]
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