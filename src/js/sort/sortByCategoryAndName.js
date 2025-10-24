// sortByCategoryAndName.js

function sortByCategoryAndName(whichArray, direction)
{
    // Ascending
    if (direction == "up")
    {
        // sort by multiple criteria, category and name
        whichArray.sort(function(a, b)
        {
            return a.category.localeCompare(b.category) || b.name - a.name;
        });
    }
    // Descending
    else if (direction == "down")
    {
        whichArray.sort(function(b, a)
        {
            return a.category.localeCompare(b.category) || b.name - a.name;
        });
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

