create table user (
  id int unsigned primary key auto_increment not null,
  firstname  VARCHAR(45) NOT NULL,
  lastname  VARCHAR(45) NOT NULL,
  email varchar(255) not null unique,
  password varchar(255) not null,
  is_admin BOOLEAN NOT NULL DEFAULT FALSE,
);

create table background (
  id int unsigned primary key auto_increment not null,
  name  VARCHAR(45) NOT NULL,
  file VARCHAR(200) NOT NULL,
  season_id  INT NOT NULL,
  source VARCHAR(200) NOT NULL,
  FOREIGN KEY (season_id) REFERENCES season(id)
);

create table season (
  id int unsigned primary key auto_increment not null,
  name  VARCHAR(45) NOT NULL,
);

create table favorite (
  id int unsigned primary key auto_increment not null,
  user_id INT NOT NULL,
  background_id INT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES user(id),
  FOREIGN KEY (background_id) REFERENCES background(id)
);

insert into user(id, email, password)
values
  (1, "jdoe@mail.com", "123456");

insert into item(id, title, user_id)
values
  (1, "Stuff", 1),
  (2, "Doodads", 1);
