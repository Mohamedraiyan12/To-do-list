
let items = document.getElementById("input")
let additems = document.getElementById("addlist")
function addingsItem() {
    let li = document.createElement("li")
    li.innerHTML = `${items.value}
    <button onclick = "deleteitem(event)">X</button>`
    additems.append(li)
}

function deleteitem(event) {
event.target.parentElement.remove()
}