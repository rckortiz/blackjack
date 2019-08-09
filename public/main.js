document.addEventListener('DOMContentLoaded', main)

const suits = ['hearts', 'diamonds', 'spades', 'clubs']
const ranks = [
  { name: 'ace', value: 11 },
  { name: '2', value: 2 },
  { name: '3', value: 3 },
  { name: '4', value: 4 },
  { name: '5', value: 5 },
  { name: '6', value: 6 },
  { name: '7', value: 7 },
  { name: '8', value: 8 },
  { name: '9', value: 9 },
  { name: '10', value: 10 },
  { name: 'jack', value: 10 },
  { name: 'queen', value: 10 },
  { name: 'king', value: 10 }
]

const deck = []
const playerHand = []
const dealerHand = []

const main = () => {
  createDeck()
  shuffleDeck()
  dealToPlayer()
  console.log(deck)
}

const createDeck = () => {
  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < ranks.length; j++) {
      const newSuit = suits[i]
      const newRank = ranks[j]
      deck.push({
        rank: newRank,
        suit: newSuit
      })
    }
  }
  console.log(deck)
}

const shuffleDeck = () => {
  for (let i = deck.length - 1; i >= 0; i--) {
    j = Math.floor(Math.random() * (i + 1))
    temp = deck[i]
    deck[i] = deck[j]
    deck[j] = temp
  }
  console.log(deck)
}

const dealToPlayer = () => {
  const dealt = deck.pop()
  playerHand.push(dealt)
  console.log(playerHand)
}
