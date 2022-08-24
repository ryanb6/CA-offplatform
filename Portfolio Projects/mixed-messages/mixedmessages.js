let quotesBeginning = ['test beg', 'test beg 2', 'test beg 3']
let beginningLength = quotesBeginning.length
let quotesMiddle = ['test mid', 'test mid 2', 'test mid 3']
let middleLength = quotesMiddle.length
let quotesEnd = ['test end', 'test end 2', 'test end 3']
let endLength = quotesEnd.length
let quoteText = document.getElementById('quote-text')
let quoteButton = document.getElementById('quoteButton')



quoteButton.onclick = function(){
    let ret = ''
    let beg = quotesBeginning[Math.floor(Math.random() * beginningLength)]
    let mid = quotesMiddle[Math.floor(Math.random() * middleLength)]
    let end = quotesEnd[Math.floor(Math.random() * endLength)]
    ret = `${beg}, ${mid}, ${end}.`
    quoteText.innerHTML = ret
    quoteButton.innerHTML = `Get another quote`
}

