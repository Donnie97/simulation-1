update Bins
set Name = $3, Price = $4, ImageURL = $5
where ShelfID = $1 and ID = $2;

