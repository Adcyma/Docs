---
sidebar_position: 4
title: Delete User
---

**Endpoint**: `/users/{id}`  
**Method**: `DELETE`  
**Description**: Deletes a specific user from the system. To delete a user, you need to provide the `id` of the user you want to remove.

### Request Parameters:
- **id**: The unique identifier (user ID) of the user you want to delete. This must be included in the URL.

### Example Request:
```json
{
  "id": 1
}
```

### Response:
The response will be a JSON array containing user objects.

#### Success Response (`200 OK`):
```json
{
  "status": "success",
  "message": "User successfully deleted"
}
```

#### Error Response (`400 Bad Request`):

```json
{
  "status": "error",
  "code": 400,
  "message": "Invalid request",
  "details": {
    "error": "Missing or invalid user ID"
  }
}
```
#### Error Response (`404 Not Found`):

```json
{
  "status": "error",
  "code": 404,
  "message": "User not found",
  "details": {
    "error": "The user with the provided ID does not exist"
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
