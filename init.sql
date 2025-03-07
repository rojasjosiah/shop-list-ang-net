CREATE TYPE permissions AS ENUM('canEdit', 'canShare', 'canDelete');

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL
);
