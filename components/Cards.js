// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.

const container = document.querySelector('.cards-container')

axios.get('https://lambda-times-api.herokuapp.com/articles')
.then(res => {
    const articles = res.data.articles
    for(const key in articles) {
        Array.from(articles[key]).forEach(elem => {
            container.appendChild(ArticleMaker(elem))
        })
    }
})
.catch(e => console.log(e))

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

function ArticleMaker(data) {
    const divCard = document.createElement('div')
    divCard.setAttribute('class', 'card')
    divCard.addEventListener('click', () => console.log(data.headline))

    const divHeadline = document.createElement('div')
    divHeadline.setAttribute('class', 'headline')
    divHeadline.textContent = data.headline
    divCard.appendChild(divHeadline)

    const divAuthor = document.createElement('div')
    divAuthor.setAttribute('class', 'author')
    divCard.appendChild(divAuthor)

    const divImg = document.createElement('div')
    divImg.setAttribute('class', 'img-container')
    divAuthor.appendChild(divImg)

    const img = document.createElement('img')
    img.setAttribute('src', data.authorPhoto)
    divImg.appendChild(img)

    const span = document.createElement('span')
    span.textContent = `By ${data.authorName}`

    divAuthor.appendChild(span)

    return divCard
}

//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.
