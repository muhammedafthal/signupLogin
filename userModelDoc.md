# MongoDB User Schema Documentation

## Model Name: `userDetails`
The `userDetails` model represents a user in the system and contains basic authentication and identification information, such as username, email, and password.

---

## Fields:

### `username`
- **Type**: `String`
- **Required**: `true`
- **Description**: The unique username of the user. It serves as the display name or identifier for the user.

### `email`
- **Type**: `String`
- **Required**: `true`
- **Description**: The user's email address, which may be used for communication or authentication purposes.

### `password`
- **Type**: `String`
- **Required**: `true`
- **Description**: The user's password (hashed in practice), used for authentication. This value should not be exposed to the client in its raw form for security reasons.

---

## Timestamps:
- **Enabled**: `true`
- **Description**:
  - The schema uses Mongoose's `Timestamp` option, which automatically adds `createdAt` and `updatedAt` fields to the document.
  - **`createdAt`**: Records the time when the user was created.
  - **`updatedAt`**: Automatically updated whenever the user details are modified.

---

## Sample Data Example:

```json
{
  "username": "john_doe",
  "email": "john.doe@example.com",
  "password": "hashed_password",
  "createdAt": "2024-10-23T12:34:56.789Z",
  "updatedAt": "2024-10-23T12:34:56.789Z"
}
