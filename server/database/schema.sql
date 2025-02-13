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
  ("Walking under the rain", "/assets/images/autumn1.jpg", 4),
  ("See you from the insine", "/assets/images/autumn2.jpg", 4),
  ("Rain of flowers", "/assets/images/autumn3.jpg", 4),
  ("Thinking on the roof", "/assets/images/autumn4.jpg", 4),
  ("Underwater", "/assets/images/autumn5.jpg", 4),
  ("My umbrella robot", "/assets/images/autumn6.jpg", 4),
  ("Code safe", "/assets/images/autumn7.jpg", 4),
  ("You in the rain", "/assets/images/autumn8.jpg", 4),
  ("Alone under my umbrella", "/assets/images/autumn9.jpg", 4),
  ("In the middle of the street", "/assets/images/autumn10.jpg", 4),
  ("My smile in the rain", "/assets/images/autumn11.jpg", 4),
  ("Thoughtful", "/assets/images/autumn12.jpg", 4),
  ("Dragon mood", "/assets/images/autumn13.jpg", 4),
  ("Pink sword", "/assets/images/autumn14.jpg", 4),
  ("Blue sword", "/assets/images/autumn15.jpg", 4),
  ("Green sword", "/assets/images/autumn16.jpg", 4),
  ("Singing under the sky", "/assets/images/spring1.jpg", 2),
  ("On the balcony", "/assets/images/spring2.jpg", 2),
  ("Breath of cloud", "/assets/images/spring3.jpg", 2),
  ("Sea of clouds", "/assets/images/spring4.jpg", 2),
  ("Pink clouds", "/assets/images/spring5.jpg", 2),
  ("By, you ...", "/assets/images/spring6.jpg", 2),
  ("Wind of cloud", "/assets/images/spring7.jpg", 2),
  ("Dancing in the sky", "/assets/images/spring8.jpg", 2),
  ("Cloud beach", "/assets/images/spring9.jpg", 2),
  ("Me and the cloud", "/assets/images/spring10.jpg", 2),
  ("Spring walk", "/assets/images/spring11.jpg", 2),
  ("Catch me", "/assets/images/spring12.jpg", 2),
  ("Sky train", "/assets/images/summer1.jpg", 3),
  ("Summer walk", "/assets/images/summer2.jpg", 3),
  ("Goldfish dream", "/assets/images/summer3.jpg", 3),
  ("Hiking breack", "/assets/images/summer4.jpg", 3),
  ("Summer nap", "/assets/images/summer5.jpg", 3),
  ("Summer freshness", "/assets/images/summer6.jpg", 3),
  ("Carp koï dream", "/assets/images/summer7.jpg", 3),
  ("Foot bath", "/assets/images/summer8.jpg", 3),
  ("Spiritual mind", "/assets/images/summer9.jpg", 3),
  ("Heat wave", "/assets/images/summer10.jpg", 3),
  ("Holiday spirit", "/assets/images/summer11.jpg", 3),
  ("Me and my cat", "/assets/images/summer12.jpg", 3),
  ("Floating in my mind", "/assets/images/summer13.jpg", 3),
  ("Forever", "/assets/images/summer14.jpg", 3),
  ("Sunny balloon", "/assets/images/summer15.jpg", 3),
  ("Train journey", "/assets/images/summer16.jpg", 3),
  ("Lovers bakery", "/assets/images/winter1.jpg", 1),
  ("Winter beach", "/assets/images/winter2.jpg", 1),
  ("Thoughts under the snow", "/assets/images/winter3.jpg", 1),
  ("Ice heart", "/assets/images/winter4.jpg", 1),
  ("winter postcard", "/assets/images/winter5.jpg", 1),
  ("Waiting for the one", "/assets/images/winter6.jpg", 1),
  ("Train travel", "/assets/images/winter7.jpg", 1),
  ("Warm hug in the cold", "/assets/images/winter8.jpg", 1),
  ("Snowy street", "/assets/images/winter9.jpg", 1),
  ("Wink for you", "/assets/images/winter10.jpg", 1),
  ("Biking in the snow", "/assets/images/winter11.jpg", 1),
  ("Look at me", "/assets/images/winter12.jpg", 1),
  ("Naruto in love !", "/assets/images/winter13.jpg", 1),
  ("Cottony streets", "/assets/images/winter14.jpg", 1),
  ("Snow of mount fuji", "/assets/images/winter15.jpg", 1),
  ("Chritsmas bear", "/assets/images/winter16.jpg", 1);
