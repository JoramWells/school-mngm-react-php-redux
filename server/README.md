Download and setup XAMP server
Download and Install mysql CLI

Run the following commandas to create tables

create table users (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                    userName VARCHAR (255),
                    email VARCHAR(255),
                    role VARCHAR(255),
                    createdAt TIMESTAMP,
                    password VARCHAR(255)

                    )

create table programs (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                        courseName VARCHAR(255),
                        description VARCHAR(255),
                        file VARCHAR(255)
                        )

create table studentperformance(id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
                                studentID INT NOT NULL,
                                marks INT NOT NULL,
                                programID INT
                                )

Start the XAMP server.



