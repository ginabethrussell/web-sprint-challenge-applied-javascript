// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.
axios.get('https://lambda-times-api.herokuapp.com/articles')
    .then(({data}) => {
        console.log(data);
        const entryPoint = document.querySelector('.cards-container');
        for ( const topic in data.articles) {
            topicName = topic;
            console.log(topicName);
            const articles = data.articles[topic]
            //console.log(articles);
            articles.forEach((article) =>{
               // console.log(article);
                const newCard = createCard(article, topicName);
                entryPoint.appendChild(newCard);
            })

        }
    })
    .catch(err => {
        const entryPoint = document.querySelector('.cards-container');
        const errMess = `Check Back Later:  ${err}`;
        messContainer = document.createElement('div');
        messContainer.classList.add('card');
        messContainer.textContent = errMess;
        entryPoint.appendChild(messContainer);
    });

function createCard(articleObj, topic){
    // Create card html elements from article object
    const card = document.createElement('div');
    card.classList.add('card');
    card.classList.add(topic)
    const headline = document.createElement('div');
    headline.classList.add('headline');
    headline.textContent = articleObj.headline;
    const authorDiv = document.createElement('div');
    authorDiv.classList.add('author');
    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');
    const image = document.createElement('img');
    image.src = articleObj.authorPhoto;
    const authorNameSpan = document.createElement('span');
    authorNameSpan.textContent = `By ${articleObj.authorName}`;
    // Assemble card components
    imgContainer.appendChild(image);
    authorDiv.appendChild(imgContainer);
    authorDiv.appendChild(authorNameSpan);
    card.appendChild(headline);
    card.appendChild(authorDiv);
    // Add event listener to card to console.log headline when card is clicked
    card.addEventListener('click', (e) => {
        console.log(e.currentTarget.childNodes[0].textContent); 
    })
    //console.log(card);
    return card;
}