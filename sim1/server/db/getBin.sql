select Name, Price, ImageURL
from Bins
where ShelfID = $1 and ID = $2;