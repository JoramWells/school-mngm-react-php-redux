### Download and setup XAMP server (v3.3.0)

### Download and Install mysql CLI (mysql  Ver 8.0.35 for Win64 on x86_64 (MySQL Community Server - GPL))

### Place the project in xamp/htdocs folder on windows (C:\xampp\htdocs\reportcard)

### Run the following commandas to create tables

- create table users (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                    userName VARCHAR (255),
                    email VARCHAR(255),
                    role VARCHAR(255),
                    createdAt TIMESTAMP,
                    password VARCHAR(255),
                    logged INT  DEFAULT 0

                    )

- create table programs (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                        courseName VARCHAR(255),
                        description VARCHAR(255),
                        file VARCHAR(255)
                        )

- CREATE TABLE studentperformance
            (id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
            courseName VARCHAR(255),
            marks VARCHAR(255),
            createdAt TIMESTAMP,
            studentID INT,
            file VARCHAR(255),
            FOREIGN KEY (studentID) REFERENCES users(id)
)

### Start the XAMP server.

### Run npm start on client


