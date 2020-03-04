BEGIN;

    DROP TABLE IF EXISTS users,posts
    CASCADE;

CREATE TABLE users
(
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    avatar text
);

CREATE TABLE posts
(
    id SERIAL PRIMARY KEY NOT NULL,
    user_id INTEGER references users(id) NOT NULL,
    post_title VARCHAR(255) , 
    post_content text ,
    post_img text,
    post_date DATE NOT NULL DEFAULT CURRENT_DATE
);

COMMIT;
