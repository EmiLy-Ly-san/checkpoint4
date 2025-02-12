-- create DATABASE anime_art;
USE anime_art;

create table user (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  firstname  VARCHAR(45) NOT NULL,
  lastname  VARCHAR(45) NOT NULL,
  email varchar(255) not null unique,
  password varchar(255) not null,
  is_admin BOOLEAN NOT NULL DEFAULT FALSE
);


create table season (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  name VARCHAR(45) NOT NULL
);

create table background (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  name  VARCHAR(45) NOT NULL,
  file VARCHAR(200) NOT NULL,
  season_id  INT NOT NULL,
  FOREIGN KEY (season_id) REFERENCES season(id)
);

create table favorite (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  user_id INT NOT NULL,
  background_id INT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES user(id),
  FOREIGN KEY (background_id) REFERENCES background(id)
);

insert into user(firstname, lastname, email, password, is_admin)
values
  ("Emilie", "De Duyver", "emilie.deduyver@gmail.com", "123456", 1 );

insert into season (name)
values
  ("Winter"),
  ("Spring"),
  ("Summer"),
  ("Autumn");


insert into background(name, file, season_id)
values
  ("Walking under rain", "/assets/images/autumn1.jpg", 4);
