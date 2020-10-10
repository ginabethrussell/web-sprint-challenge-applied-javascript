// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    // Create HTML elements 
    const headerDiv = document.createElement('div');
    headerDiv.classList.add('header');
    const dateSpan = document.createElement('span');
    dateSpan.textContent = 'MARCH 28, 2020';
    dateSpan.classList.add('date');
    const h1Title = document.createElement('h1');
    h1Title.textContent = 'Lambda Times';
    const tempSpan = document.createElement('span');
    tempSpan.textContent = '98°';
    tempSpan.classList.add('temp');
    // Add elements to the header div
    headerDiv.appendChild(dateSpan);
    headerDiv.appendChild(h1Title);
    headerDiv.appendChild(tempSpan);
    // Return header component
    // console.log(headerDiv);
    return headerDiv;
}

// Use function to create page header component
const pageHeader = Header();
// Grab DOM div.header-container to append headerDiv
const headerContainer = document.querySelector('.header-container');
headerContainer.appendChild(pageHeader);