// eraseDivs.js

function eraseDivs()
{
    // document.querySelectorAll('.mainDivClass').forEach(e => e.remove());

    let theFound = document.querySelectorAll('.mainDiv');

    let theHrs = document.querySelectorAll('.theHrs');

    for (let x = 0; x < theFound.length; x++)
    {
        theFound[x].remove();
    }

    for (let x = 0; x < theHrs.length; x++)
    {
        theHrs[x].remove();
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

