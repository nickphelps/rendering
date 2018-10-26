
function renderRectangle(rectangle) {
    return `
            <div style="width:${rectangle.width}px; height:${rectangle.height}px; background-color: ${rectangle.color};"></div>
            `    
}

function rectangle() {
    var content = document.getElementById('content');

    var rectangleAbstraction = {
        width: 100,
        height: 200,
        color: "#FF00FF"
    }

    content.innerHTML = renderRectangle(rectangleAbstraction);

}



// function renderTransactions (transactions) {
//     var finalHTML = '<div class="buffer">TRANSACTIONS</div>'
  
//     var transactionsHTML = transactions.map(function (transaction) {
//       var transactionHTML = `
//           <div class="transaction">
//               <div class="name">${transaction.name}</div>
//               <div class="for">${transaction.for}</div>
//               <div class="date">${transaction.date}</div>
//               <div class="amount">${transaction.amount}</div>
//           </div>
//           `
//       return transactionHTML
//     })
  
//     finalHTML += transactionsHTML.join('')
  
//     return finalHTML