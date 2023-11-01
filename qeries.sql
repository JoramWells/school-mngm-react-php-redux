CREATE TABLE studentperformance
            (id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
            courseName VARCHAR(255),
            marks VARCHAR(255),
            createdAt TIMESTAMP,
            studentName VARCHAR(255),
            studentID INT,
            FOREIGN KEY (studentID) REFERENCES users(id)
)