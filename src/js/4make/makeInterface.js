// makeInterface.js

function getUniqueCategories(dataArray)
{
    // create a new Set object to store unique categories
    let categories = new Set();

    // loop through each item in the dataArray
    for (let i = 0; i < dataArray.length; i++)
    {
        // add the category of the current item to the Set
        categories.add(dataArray[i].category);
    }
    // convert the Set of unique categories into an array and return it
    return Array.from(categories);
}

function makeInterface(dataArray)
{
    let hrTop = ce('hr');
    hrTop.style.height = '20px';
    hrTop.style.marginTop = '-8px';
    ba(hrTop);

    //-//

    let showAllBtn = ce('button');
    showAllBtn.textContent = 'Show All';
    showAllBtn.onmouseover = function()
    {
        hoverSound();
    };
    showAllBtn.onclick = function()
    {
        clickSound();
        makeEntriesShowAll(data_001);
    };
    ba(showAllBtn);

    //-//

    // call getUniqueCategories to get an array of all unique categories
    let categories = getUniqueCategories(dataArray);

    // loop through each category in the categories array
    for (let i = 0; i < categories.length; i++)
    {
        // create a new scope to capture the current category value
        (function(cat)
        {
            // create a new button element
            let theButton = document.createElement("button");
            // set the button's text label to the category name
            theButton.textContent = cat;

            theButton.onmouseover = function()
            {
                hoverSound();
            };

            // assign a click event handler to the button
            theButton.onclick = function()
            {
                // play a click sound
                clickSound();
                // call makeEntriesByCategory, passing the full data array and the category name
                makeEntriesByCategory(dataArray, cat);
            };
            ba(theButton);
        })(categories[i]); // pass current category into the IIFE
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

