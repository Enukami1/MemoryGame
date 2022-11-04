const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.jpg'
    },

    {
        name: 'hot dog',
        img: 'images/hot dog.jpg'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.jpg'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.jpg'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.jpg'
    },
    {name: 'pizza',
    img: 'images/pizza.jpg'
    },
    {
        name: 'fries',
        img: 'images/fries.jpg'
    },

    {
        name: 'hot dog',
        img: 'images/hot dog.jpg'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.jpg'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.jpg'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.jpg'
    },
    {   name: 'pizza',
        img: 'images/pizza.jpg'
    },
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenId = []
const cardsWon = []

function createBoard() {
    for(let i = 0; i < cardArray.length; i++){
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)


    }
    
}
createBoard()

function checkMatch() {
        const cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
         const optionTwoId = cardsChosenId[1]
        console.log(cards)
        console.log('check for match!') 
        if (optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src','images/ blank.png')
        cards[optionTwoId].setAttribute('src','images/blank.png')
        alert('you have clicked same image!')
    }
        if (cardsChosen[0] == cardsChosen[1]) {
            alert('you found a match!')
            cards[optionOneId].setAttribute('src','images/white.jpg')
            cards[optionTwoId].setAttribute('src','images/white.jpg')  
            cards[optionOneId].removeEventListener('click',flipCard)  
            cards[optionTwoId].removeEventListener('click',flipCard) 
        
            cardsWon.push(cardsChosen)    
    } else {
        cards[optionOneId].setAttribute('src','images/blank.png')
        cards[optionTwoId].setAttribute('src','images/blank.png')
        alert('sorry try again!')
    }
    resultDisplay.textContent = cardsWon.length
    cardsChosen = []
    cardsChosenId = []

    if (cardsWon == cardArray.length/2) {
        resultDisplay.textContent = 'congratulations you found them all!'
    }
}

function flipCard() {
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    console.log(cardsChosen)
    console.log(cardsChosenId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout( checkMatch, 500)
    }
}