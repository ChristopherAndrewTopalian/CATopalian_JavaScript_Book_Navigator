// downloadFile.js

function downloadFile()
{
    let object = data_001;

    let dataStr = "data:text/json;charset=utf-8," + encodeURIComponent('data_001 = ' + JSON.stringify(object) + ';');

    let dlAnchorElem = document.getElementById("downloadAnchorElem");

    dlAnchorElem.setAttribute("href", dataStr);

    dlAnchorElem.setAttribute("download", "record.js");

    dlAnchorElem.click();
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

