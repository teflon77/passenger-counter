// document.getElementById("count-el").innerText=5

/// intialize the count as 0
let count = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let countText
let originText = saveEl.textContent

console.log(countEl)

function increment() {

    console.log("The button was clicked")
    count += 1
    refreshView()
}

function refreshView() {
    countEl.textContent = count;
}

function save() {
    countText = count + " - "
    saveEl.textContent += countText
    countEl.textContent = 0
    count = 0;
    console.log(count)
}