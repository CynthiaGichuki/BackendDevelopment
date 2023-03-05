CREATE TABLE UserTable (
    Id VARCHAR(100),
    Name VARCHAR(200),
    Email VARCHAR(300) UNIQUE,
    Role VARCHAR(100) DEFAULT 'user',
    Password VARCHAR(150),
    isSent VARCHAR(150) DEFAULT '0'
) USE Airport DROP TABLE UserTable