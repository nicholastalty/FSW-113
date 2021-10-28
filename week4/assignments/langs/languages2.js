const lang = 'JavaScript'

// Create an event listener for the submit button that adds all 'input' elements to 
// a single array using the spread operator. Call the chkLang() function, passing in 
// the array as an argument.


function chkLang(langs, ...values) {
    let result = false
    console.log(langs, values);
    for (let i = 0; i < values.length; i++) {
        console.log(values[i])
         let item = values[i]
        // if (item){} = 'JavaScript'
        if (item == "JavaScript"){
            result = true;
        }
    };

    // use an array method to check whether the user included 'JavaScript' in their
    // list of languages

    let obj = document.querySelector('#TestResult')
    if (result) 
        obj.innerText = `Congratulations!\nYou know ${lang}.`
    else
        obj.innerText = `Sorry,\nyou don't know ${lang}.`
}

