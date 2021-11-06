// Create an event listenter for the 'submit' button that calls the combineLists() function
document.getElementById('submit').addEventListener('click', combineLists)


// Modify the combineLists() function to create arrays from each scavenger hunt element in the scavenger.html document. 
// Then use the spread operator to combine these arrays into a single array. 
// Sort that array and display it in the 'AllItems' element on the scavenger.html document.

function combineLists() {
    var lstItems = document.querySelectorAll('textarea')
    var scav = [...lstItems]
    console.log(lstItems)
    console.log(scav)
    var allItems = []

    for (let i = 0; i < scav.length; i++) {
        let item = scav[i].value
        console.log(item, typeof item)
        const ary = item.split(',')
        console.log(ary)
        allItems = [...allItems, ...ary]
        // if (item = scav){
        //use a spread operator to add everything. Use a spread operator to add allItems

        // }
    };
    
    allItems.sort()
    console.log(allItems)

}

// The following code is a bonus addition that facilitates data entry on the scavenger.html document.
// If you first click in one of the textareas, you can then click scavenger hunt items in the unordered
// list. The value of that will be added to the appropriate textarea along with any necessary commas.

let objTargetText 
const objUL = document.querySelector('#lstItems')

objUL.onclick = function(event) {
    var source = getEventTarget(event)
    if (!objTargetText.innerHTML)
        objTargetText.innerHTML = source.innerHTML
    else
        objTargetText.innerHTML += ',' + source.innerHTML
}

function getEventTarget(e) {
    e = e || window.event
    return e.target || e.srcElement
}

function setTarget(obj) {
    objTargetText = obj
}