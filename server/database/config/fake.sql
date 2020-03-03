BEGIN;

    DROP TABLE IF EXISTS users,posts
    CASCADE;

CREATE TABLE users
(
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password INTEGER NOT NULL,
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

INSERT INTO users
    (name, email, password, avatar)
VALUES
    ('hassan' , 'ahmed', '123', 'https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'),
    ('mohamed' , 'ali', '123', 'https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'),
    ('ali' , 'akdf', '123', 'https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'),
    ('ahsdf' , 'afews', '123', 'https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500');
INSERT INTO posts
    (post_title,user_id,post_content,post_img)
VALUES
    ( 'hash code in here', 1 ,'where you are now ???','https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' ),
    ( 'f*** you', 3 ,'where you are now ???','https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' ),
    ( 'why me', 4,'where you are now ???','https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' ),
    ( 'hash code in here', 2,'where you are now ???','https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' ),
    ( 'f*** you', 2,'where you are now ???','https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' ),
    ( 'why me', 4,'where you are now ???','https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' ),
    ( 'hash code in here', 3,'where you are now ???','https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' ),
    ( 'f*** you', 1,'where you are now ???','https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' ),
    ( 'why me', 4,'where you are now ???','https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' ),
    ( 'hash code in here', 2,'where you are now ???','https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' ),
    ( 'f*** you', 3,'where you are now ???','https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' ),
    ( 'why me', 2,'where you are now ???','https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' ),
    ( 'no thing in here', 1,'where you are now ???','https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' );

COMMIT;