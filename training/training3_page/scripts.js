let doGoodButton = document.getElementById('doGood');
let doBadButton = document.getElementById('doBad');
let article = document.getElementById('article');

// Handler for 'Do something good' button
doGoodButton.addEventListener('click', function () {
    article.innerText = 'Something good happened';
})

// Handler for 'Do something bad' button
// Arrow functions format 
doBadButton.addEventListener('click', () => article.innerText = 'Something bad happened')
