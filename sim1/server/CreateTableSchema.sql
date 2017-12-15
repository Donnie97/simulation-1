CREATE TABLE Bins (
  ShelfID SERIAL PRIMARY KEY NOT NULL, --auto incrementing id
  Name varchar(40) NOT NULL, --Only want it to be 40 characters cause it just a string of someones name 
  Price integer NOT NULL, --Just Price so needs to be number 
  ImageURL text NOT NULL --I assume this one would be text cause you just want the image url and that is text
);
--all not null cause we don't want any empty boxes