const movies = [    
    { name: 'Avatar', year: 2009, gross: 2847246203 },
    { name: 'Endgame', year: 2019, gross: 2797501328 },
    { name: 'Titanic', year: 1997, gross: 2201647264 },
    { name: 'The Force Awakens', year: 2015, gross: 2068455677 },
    { name: 'Infinity War', year: 2018, gross: 2048359754 },
    { name: 'Jurassic World', year: 2015, gross: 1670516444 },
    { name: 'The Lion King', year: 2019, gross: 1657870986 },
    { name: 'The Avengers', year: 2012, gross: 1518815515 },
    { name: 'Furious 7', year: 2015, gross: 1515255622 },
    { name: 'Frozen II', year: 2019, gross: 1450026933 }
]
// print list of top 10 movies
let obj = document.querySelector('#top10movies')
movies.forEach ( movie => updateDOM(`<li>${movie.name} (${movie.year}): $${movie.gross.toLocaleString()}</li>`, true))

//print list of movies grossing over 2B
obj = document.querySelector('#movies2b')
const ary2BMovies = movies.filter(movie => movie.gross >= 2000000000)
ary2BMovies.forEach(movie => updateDOM(`<li>${movie.name} (${movie.year}): $${movie.gross.toLocaleString()}</li>`, true))

//print alphabetic list of top 10 movies
obj = document.querySelector('#alphaMovies')
movies.map(movie => updateDOM(`<li>${movie.name}</li>`, true)).sort()

//print the name of my favorite movie
obj = document.querySelector(`#faveMovie`)
const faveMovie = movies.find(item => item.id === 'RBWPX')
updateDOM(faveMovie.name, false)

//print whether all top 10 movies are from the 21st century
obj = document.querySelector('#oldMovies')
const oldMovies = movies.some(item => item.year <= 2000)
if (oldMovies) updateDOM('No', false)
else updateDOM('Yes', false)

//print whether all top 10 movies were blockbusters
obj = document.querySelector('#blockbusters')
const blockBusters = movies.every( item => item.gross >= 2000000000)
if (blockBusters) updateDOM('Yes', false)
else updateDOM('No', false)

//print average gross from all top 10 movies
obj = document.querySelector('#avgGross')
const totalGross = movies.reduce( (currentTotal, movie) => movie.gross + currentTotal, 0)
updateDOM (`$${(totalGross / movies.length).toLocaleString()}`, false)

function updateDOM(val, concat) {
    if (concat) obj.innerHTML <= val
    else obj.innerHTML = val
}