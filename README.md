# Shopping List
### Built using Angular, .NET, and SQL

Below is documentation for basic project struture. A `docker-compose.yml` was set up to include basic dockerized Postgres
run setup, currently uninitialized. Angular used to create frontend for web app, and .NET used to create API for db calls from frontend.

## Database Key Features
### 1. **User Authentication and Profiles**

- Multiple users can create, manage, and store their shopping lists.
- **SQL**: Store user data (name, email, password) in a `users` table, and associate each shopping list with a specific user.

### 2. **Shopping List Storage and Items**

- Users can create multiple shopping lists with a name, description, and a list of items.
- **SQL**: Create `lists` and `items` tables. The `lists` table might include `list_id`, `user_id`, and `list_name`. The `items` table would have `item_id`, `list_id` (foreign key), `item_name`, `quantity`, and `status`.

### 3. **Categories and Tags for Items**

- Items can be categorized into sections like "Produce," "Dairy," "Bakery," etc., or tagged with custom labels.
- **SQL**: Create a `categories` table and relate it to the `items` table to categorize and filter items.

### 4. **Shopping History and Reusable Lists**

- Users can save previous lists, mark items as bought, track purchases over time, and reuse old lists.
- **SQL**: Use a `history` table to store purchase data with references to items and dates.

### 5. **Shared Lists**

- Users can share shopping lists with others for real-time updates and collaboration.
- **SQL**: Create a `user_lists` table to model many-to-many functionality, each storing a `list_id` and
`user_id`, allowing a user to add other users to edit their list. Only the list owner can add new permissions 
(canShare, canEdit, canDelete)

## Example Database Schema

### **users Table**

| user_id | email | password_hash | created_at |
| --- | --- | --- | --- |
| 1 | [user@mail.com](mailto:user@mail.com) | hash123 | 2025-01-01 |

### **lists Table**

| list_id | user_id | list_name | created_at |
| --- | --- | --- | --- |
| 1 | 1 | Grocery List | 2025-02-01 |

### **user_lists Table** (Many-to-Many)

| list_id | user_id | permissions |
| --- | --- | --- | 
| 1 | 1 | {} |

### **items Table**

| item_id | list_id | item_name | quantity | status |
| --- | --- | --- | --- | --- |
| 1 | 1 | Apples | 5 | false |
| 2 | 1 | Milk | 2 | true |

### **categories Table**

| category_id | category_name |
| --- | --- |
| 1 | Produce |
| 2 | Dairy |

### **item_categories Table** (Many-to-Many)

| item_id | category_id |
| --- | --- |
| 1 | 1 |
| 2 | 2 |