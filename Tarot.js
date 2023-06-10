const tarotCardDeck = ['The Fool', 'The Magician', 'The High Priestess', 'The Empress', 'The Emperor', 'The Hierophant',
'The Lovers', 'The Chariot', 'Strength', 'The Hermit', 'Wheel of Fortune', 'Justice', 'The Hanged Man', 'Death', 'Temperance',
'The Devil', 'The Tower', 'The Star', 'The Moon', 'The Sun', 'Judgement', 'The World'];

console.log('Here are the three cards to guide you:');


for (let i=0; i<3; i++){
    let card = Math.floor(Math.random() * (22-i));
    //console.log(card);
    console.log (tarotCardDeck[card]);
    tarotCardDeck.splice(card, 1);
}

console.log('It is to be remembered that these cards are only a guide for your future and not the absolute future.');


