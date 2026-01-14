// reportTextArea.js

function reportTextArea(whichArray)
{
    // create a new window
    let win = window.open('', '', 'width=800,height=600');

    // create a textarea element
    let textArea = ce('textarea');
    textArea.style.width = '98%';
    textArea.style.height = '98%';
    textArea.style.backgroundColor = 'rgb(40, 40, 40)';
    textArea.style.color = 'rgb(255, 255, 255)';
    textArea.style.paddingLeft = '20px';
    textArea.style.paddingRight = '20px';
    textArea.style.paddingTop = '10px';
    textArea.style.paddingBottom = '10px';

    // assign content to the textarea
    textArea.value = JSON.stringify(whichArray);

    // append textarea to the body of the new window
    win.document.body.append(textArea);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

