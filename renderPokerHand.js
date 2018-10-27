
function renderPokerHand(pokerHand) {
    // HINT: You can use <img /> tags that point to these playing card images: 
    // https://commons.wikimedia.org/wiki/Category:SVG_playing_cards

    let myPokerHandHTMLString = ''
   // for (let i = 0; i < pokerHand.length; i++) {
       myPokerHandHTMLString = `
        <div class="row">
        <div class="col"><img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/${pokerHand[0].value}${pokerHand[0].suit}.svg"></div>
        <div class="col"><img src="https://upload.wikimedia.org/wikipedia/commons/0/06/${pokerHand[1].value}${pokerHand[1].suit}.svg"></div>
        <div class="col"><img src="https://upload.wikimedia.org/wikipedia/commons/3/31/${pokerHand[2].value}${pokerHand[2].suit}.svg"></div>
        <div class="col"><img src="https://upload.wikimedia.org/wikipedia/commons/9/9d/${pokerHand[3].value}${pokerHand[3].suit}.svg"></div>
        <div class="col"><img src="https://upload.wikimedia.org/wikipedia/commons/e/e0/${pokerHand[4].value}${pokerHand[4].suit}.svg"></div>
      </div>`
    //}

    return myPokerHandHTMLString
        
    
}

function pokerHand() {
    var content = document.getElementById('content');

    var pokerHandAbstraction = [
        {
            value: "K",
            suit: "C"
        },
        {
            value: "K",
            suit: "D"
        },
        {
            value: "9",
            suit: "S"
        },
        {
            value: "2",
            suit: "H"
        },
        {
            value: "9",
            suit: "H"
        }
    ];

    content.innerHTML = renderPokerHand(pokerHandAbstraction);

}