// makeEntriesByCategory.js

function makeEntriesByCategory(whichArray, category)
{
    eraseDivs();

    //sortByCategoryAndName(data, "up");
    sortByCategoryAndName(whichArray, "up");

    sortByName(whichArray, "up");

    //-//

    for (let x = 0; x < whichArray.length; x++)
    {
        if (whichArray[x].category == category)
        {
            let mainDiv = ce("div");
            mainDiv.className = 'mainDiv';
            mainDiv.style.display = 'flex';
            mainDiv.style.flexDirection = 'row';
            ba(mainDiv);

            //-//

            let hrDivider = ce('hr');
            hrDivider.className = 'mainDiv';
            ba(hrDivider);

            //-//

            let leftContainer = ce('div');
            leftContainer.style.width = '50%';
            leftContainer.style.border = 'solid 1px rgba(255, 255, 0, 1)';
            leftContainer.style.borderRadius = '8px';
            leftContainer.style.margin = '2px';
            leftContainer.style.padding = '4px 8px';
            // leftContainer.style.height = '100px';
            // leftContainer.style.overflowY = 'scroll';
            mainDiv.append(leftContainer);

            //-//

            let rightContainer = ce('div');
            rightContainer.style.width = '50%';
            rightContainer.style.margin = '2px';
            mainDiv.append(rightContainer);

            //-//

            let categoryButton = ce("button");
            categoryButton.onmouseover = function()
            {
                hoverSound();
            }
            categoryButton.onclick = function()
            {
                clickSound();

                window.open(whichArray[x].url_001, "", "width = 1000, height = 800");
            };
            categoryButton.textContent = whichArray[x].name;
            leftContainer.append(categoryButton);

            //-//

            // description text
            let descriptionText = ce('div');
            descriptionText.style.backgroundColor = 'rgb(0, 0,  0)';
            descriptionText.textContent = whichArray[x].description;
            descriptionText.style.color = 'rgb(175, 175, 175)';
            descriptionText.style.padding = '8px 8px';
            descriptionText.style.fontWeight = 'bold';
            descriptionText.style.borderRadius = '8px';
            descriptionText.style.fontFamily = 'Arial';
            descriptionText.style.height = '100px';
            descriptionText.style.overflowY = 'scroll';
            leftContainer.append(descriptionText);

            //-//

            // line break
            leftContainer.append(ce("br"));

            //-//

            // urlTwoLink
            let urlTwoLink = ce("a");
            urlTwoLink.href = whichArray[x].url_002;
            urlTwoLink.target = "_blank";
            urlTwoLink.textContent = whichArray[x].url_002;
            leftContainer.append(urlTwoLink);

            //-//

            // notes text - textContent method
            let notesText = ce('div');
            notesText.textContent = whichArray[x].notes;
            notesText.style.marginTop = '26px';
            notesText.style.backgroundColor = 'rgb(0, 0, 0)';
            notesText.style.border = 'solid 1px rgb(255, 255, 255)';
            notesText.style.borderRadius = '8px';
            notesText.style.padding = '4px 8px';
            notesText.style.fontFamily = 'Cambria';
            notesText.style.fontWeight = 'bold';
            notesText.style.color = 'rgba(0, 208, 255, 1)';
            rightContainer.append(notesText);

            //-//

            if (whichArray[x].evidence001URL)
            {
                let evidence001Btn = ce('button');
                evidence001Btn.textContent = whichArray[x].evidence001Name;
                evidence001Btn.style.backgroundColor = 'rgb(0, 0, 0)';
                evidence001Btn.onmouseover = function()
                {
                    hoverSound();
                };
                evidence001Btn.onclick = function()
                {
                    clickSound();
                    window.open(whichArray[x].evidence001URL, "", "width = 400, height = 400");
                }
                rightContainer.append(evidence001Btn);

                //-//

                let details001 = ce('details');
                details001.onclick = function()
                {
                    clickSound();
                };
                rightContainer.append(details001);

                //-//

                let summary001 = ce('summary');
                summary001.textContent = whichArray[x].evidence001Name;
                summary001.onmouseover = function()
                {
                    hoverSound();
                };
                details001.append(summary001);

                let details001Text = ce('div'); // create container for text
                details001Text.textContent = whichArray[x].evidence001Words;
                details001.append(details001Text);
            }

            //-//

            if (whichArray[x].evidence002URL)
            {
                let evidence002Btn = ce('button');
                evidence002Btn.textContent = whichArray[x].evidence002Name;
                evidence002Btn.style.backgroundColor = 'rgb(0, 0, 0)';
                evidence002Btn.onmouseover = function()
                {
                    hoverSound();
                };
                evidence002Btn.onclick = function()
                {
                    clickSound();
                    window.open(whichArray[x].evidence002URL, "", "width = 400, height = 400");
                }
                rightContainer.append(evidence002Btn);

                //-//

                let details002 = ce('details');
                details002.onclick = function()
                {
                    clickSound();
                };
                rightContainer.append(details002);

                //-//

                let summary002 = ce('summary');
                summary002.textContent = whichArray[x].evidence002Name;
                summary002.onmouseover = function()
                {
                    hoverSound();
                };
                details002.append(summary002);

                //-//

                let details002Text = ce('div'); // create container for text
                details002Text.textContent = whichArray[x].evidence002Words;
                details002.append(details002Text);
            }
        }
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

