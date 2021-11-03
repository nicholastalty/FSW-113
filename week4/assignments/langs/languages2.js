const lang = 'JavaScript'

// Create an event listener for the submit button that adds all 'input' elements to 
// a single array using the spread operator. Call the chkLang() function, passing in 
// the array as an argument.

document.getElementById('submit').addEventListener('click', function(){
    var inputsAll = document.querySelectorAll('input')
    var ary = [...inputsAll]
    checkLang(ary)
})


function checkLang(langs){
    let result = false
    for (let i = 0; i < langs.length; i++) {
         let item = langs[i].value
        if (item == lang){
            result = true;
        }
    };

    let testRslt = document.querySelector('#TestResult')
    if (result) {
        testRslt.innerText = `Congratulations!\nYou know ${lang}.`
    } else {
        testRslt.innerText = `Sorry,\nyou don't know ${lang}.`
    }
}
