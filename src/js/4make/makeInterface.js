// makeInterface.js

function getUniqueCategories(whichArray)
{
    // create a new Set object to store unique categories
    let categories = new Set();

    // loop through each item in the whichArray
    for (let i = 0; i < whichArray.length; i++)
    {
        // add the category of the current item to the Set
        categories.add(whichArray[i].category);
    }
    // convert the Set of unique categories into an array and return it
    return Array.from(categories);
}

function makeInterface(whichArray)
{
    let theTitle = ce('a');
    theTitle.id = 'theTitle';
    theTitle.href = 'https://github.com/ChristopherAndrewTopalian/CATopalian_JavaScript_Book_Navigator';
    theTitle.target = '_blank';
    theTitle.textContent = 'CATopalian JavaScript Book Navigator';
    theTitle.style.marginLeft = '4px';
    theTitle.style.fontSize = '15px';
    theTitle.style.fontWeight = 'bold';
    theTitle.style.textAlign = 'right';
    theTitle.style.lineHeight = 15 + 'px';
    theTitle.style.fontFamily = 'Arial';
    theTitle.style.textDecoration = 'none';
    ba(theTitle);

    //-//

    if (ge('dataContainer'))
    {
        ge('dataContainer').remove();
    }

    let dataContainer = ce('div');
    dataContainer.id = 'dataContainer';
    dataContainer.style.display = 'flex';
    dataContainer.style.flexDirection = 'row';
    ba(dataContainer);

    //-//

    let data_001Btn = ce('button');
    data_001Btn.textContent = 'data_001';
    data_001Btn.style.backgroundColor = 'rgb(0, 0, 0)';
    data_001Btn.onmouseover = function()
    {
        hoverSound();
    };
    data_001Btn.onclick = function()
    {
        clickSound();
        changeDataSource(data_001);
    };
    dataContainer.append(data_001Btn);

    //-//

    let data_002Btn = ce('button');
    data_002Btn.textContent = 'data_002';
    data_002Btn.style.backgroundColor = 'rgb(0, 0, 0)';
    data_002Btn.onmouseover = function()
    {
        hoverSound();
    };
    data_002Btn.onclick = function()
    {
        clickSound();
        changeDataSource(data_002);
    };
    dataContainer.append(data_002Btn);

    //-//

    let data_003Btn = ce('button');
    data_003Btn.textContent = 'data_003';
    data_003Btn.style.backgroundColor = 'rgb(0, 0, 0)';
    data_003Btn.onmouseover = function()
    {
        hoverSound();
    };
    data_003Btn.onclick = function()
    {
        clickSound();
        changeDataSource(data_003);
    };
    dataContainer.append(data_003Btn);

    //-//

    // make hidden file input
    let fileInput = ce("input");
    fileInput.type = "file";
    fileInput.id = "fileInput";
    fileInput.style.display = "none";

    // onchange event
    fileInput.onchange = function(event)
    {
        inputSound();

        let file = event.target.files[0];

        if (file)
        {
            let reader = new FileReader();

            reader.onload = function(event)
            {
                inputSound();

                // get the raw text
                let rawText = event.target.result;

                try 
                {
                    // we need to strip off "let data_001 =" and just get the "[ ... ]" part.

                    // find the first '['
                    let firstBracket = rawText.indexOf('[');

                    // find the last ']'
                    let lastBracket = rawText.lastIndexOf(']');

                    // if we brackets not found, it isn't an array file
                    if (firstBracket === -1 || lastBracket === -1)
                    {
                        throw new Error("No array found in file");
                    }

                    // extract just the array part:
                    // From: data_001 = [ { name... } ];
                    // To:  [ { name... } ]
                    let arrayString = rawText.substring(firstBracket, lastBracket + 1);

                    // execute as JS
                    // "new Function" creates a mini-script that returns the array.

                    // it handles single quotes, comments, and unquoted keys automatically!
                    let importedData = new Function("return " + arrayString)();

                    // update world variable
                    data = importedData;

                    // update Interface
                    changeDataSource(data);

                    cl("Success! Loaded JS Array.");
                } 
                catch (error) 
                {
                    console.error("Error parsing JS file:", error);

                    alert("Could not load data. Ensure the file contains a JavaScript array [ ... ].");
                }
            };
            reader.onerror = function(event)
            {
                console.error("error reading file:", event);
            };
            reader.readAsText(file);
        }
    };
    dataContainer.append(fileInput);

    //-//

    // openButton
    let openButton = ce("button");
    openButton.id = "openButton";
    openButton.textContent = "Open";
    openButton.style.backgroundColor = 'rgb(0, 0, 0)';
    // onmouseover event
    openButton.onmouseover = function()
    {
        hoverSound();
    };

    // onclick event
    openButton.onclick = function()
    {
        clickSound();

        ge("fileInput").click();
    };
    dataContainer.append(openButton);

    // call getUniqueCategories to get an array of all unique categories
    let categories = getUniqueCategories(whichArray);

    //-//

    if (ge('categoryContainer'))
    {
        ge('categoryContainer').remove();
    }

    let categoryContainer = ce('div');
    categoryContainer.id = 'categoryContainer';
    ba(categoryContainer);

    let showAllBtn = ce('button');
    showAllBtn.textContent = 'Show All';
    showAllBtn.onmouseover = function()
    {
        hoverSound();
    };
    showAllBtn.onclick = function()
    {
        clickSound();
        makeEntriesShowAll(data);
    };
    categoryContainer.append(showAllBtn);

    //-//

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
                makeEntriesByCategory(whichArray, cat);
            };
            categoryContainer.append(theButton);
        })(categories[i]); // pass current category into the IIFE
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

