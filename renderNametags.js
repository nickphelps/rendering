
function renderNametags(nametags) {
    let myNameTag = ''

    for (let i = 0; i < nametags.length; i++) {
myNameTag = myNameTag + `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Hello my name is...</h5>
      <p class="card-text">${nametags[i]}</p>
    </div>
  </div>`
    }

    return myNameTag
}

function nametags() {
    var content = document.getElementById('content');

    var nametagsAbstraction = [
       "Kamilah",
       "Kim",
       "Stuart",
       "Ron",
       "Krissy"
    ]

    content.innerHTML = renderNametags(nametagsAbstraction);

}