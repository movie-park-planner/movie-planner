
CREATE DATABASE movie_planner_db;

USE movie_planner_db;

CREATE TABLE movie_showings
(
	id int NOT NULL AUTO_INCREMENT,
	day varchar(10) NOT NULL,
	date varchar (20) NOT NULL,
    park varchar (255) NOT NULL,
	park_phone varchar(15) NOT NULL,
    title varchar (255) NOT NULL,
    close_caption varchar (5),
    rating varchar (10),
    underwriter varchar (255),
    park_address varchar (255) NOT NULL,
    location varchar (255) NOT NULL,
	PRIMARY KEY (id)
);



