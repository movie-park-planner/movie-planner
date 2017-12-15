CREATE DATABASE movie_planner_db;

USE movie_planner_db;

CREATE TABLE movie_showings
(
	id int NOT NULL AUTO_INCREMENT,
	day varchar(10) NOT NULL,
	date date NOT NULL,
    park varchar (255) NOT NULL,
	park_phone varchar(15) NOT NULL,
    title varchar (255) NOT NULL,
    close_caption varchar (5),
    rating varchar (10),
    underwriter varchar (255),
    park_address varchar (255) NOT NULL,
    location varchar (255) NOT NULL,
    selected BOOLEAN NOT NULL default false,
	PRIMARY KEY (id)
);


CREATE TABLE comments
(
    id int NOT NULL AUTO_INCREMENT,
    name varchar(55) NOT NULL,
    comment varchar(500) NOT NULL,
    PRIMARY KEY (id)
);

