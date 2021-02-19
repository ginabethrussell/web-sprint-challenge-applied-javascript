// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element
axios.get('https://lambda-times-api.herokuapp.com/topics')
    .then(({data}) => {
        // console.log(data);
        const allTab = document.createElement('div');
        allTab.classList.add('tab');
        allTab.id = 'all';
        allTab.textContent = 'All';
        allTab.addEventListener('click', (e) => {
            const articles = document.querySelectorAll('.card');
            articles.forEach(article => {
                article.classList.remove('hide');
            });
        })
        const topicsDiv = document.querySelector('.topics');
        topicsDiv.append(allTab);

        data.topics.forEach(topic => {
            const topicTab = document.createElement('div');
            topicTab.classList.add('tab');
            topicTab.textContent = topic;
            const topicsDiv = document.querySelector('.topics');
            
            // add an event listener to filter articles
            topicTab.addEventListener('click', (e) => {
                console.log(e.currentTarget.textContent);
                let topic = e.currentTarget.textContent;
                console.log(topic);
                if (topic == 'node.js'){
                    topic = 'node';
                }
                //grab all article cards
                articles = document.querySelectorAll('.card');
                articles.forEach(article => {
                    article.classList.remove('hide');
                });
                
                articles.forEach(article => {
                    if (!article.classList.contains(topic)){
                        article.classList.add('hide');
                    }
                });

            })
            topicsDiv.appendChild(topicTab);

        
            // console.log(topicTab);

        });

        

    })
    .catch(err => console.log(err))

