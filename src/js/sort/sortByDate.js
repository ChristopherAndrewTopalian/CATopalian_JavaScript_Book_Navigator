// sortByDate.js

function sortByDate(whichArray, direction)
{
    // ASCENDING is a.date - b.date
    if (direction == "up")
    {
        whichArray.sort(function(a,b){return new Date(a.date) - new Date(b.date);});
    }
    // DESCENDING is b.date - a.date
    else if (direction == "down")
    {
        whichArray.sort(function(a,b){return new Date(b.date) - new Date(a.date);});
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

