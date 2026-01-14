// sortByName.js

function sortByName(whichArray, direction)
{
    // ASCENDING
    if (direction == "up")
    {
        whichArray.sort(function(a, b)
        {
            return a.name.localeCompare(b.name);
        });
    }
    // DESCENDING
    else if (direction == "down")
    {
        whichArray.sort(function(b, a)
        {
            return a.name.localeCompare(b.name);
        });
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

