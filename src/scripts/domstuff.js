// Putting fetch calls into the DOM
function makeMenuItemComponent(menuItem) {
    return `
    <li><img><label for="menu-item-${menuItem.id}"><input id="menu-item-${menuItem.id}" type="radio" name="menu-item" value=${menuItem.id}><h3>${menuItem.name}: ${menuItem.price}</h3></label></li>
    `
}

function listMenuItems(menuComponents) {
    menuComponents.forEach( component => {
        document.getElementById("menuList").innerHTML += component
        });
}

function makeHeatLevelsComponent(heatObj) {
    return `
    <li><label for="heat-level-${heatObj.id}"><input id="heat-level-${heatObj.id}" type="radio" name="heat-level" value=${heatObj.id}><h3>${heatObj.name}</h3></label></li>
    `
}

function listHeatItems(heatComponents) {
    heatComponents.forEach( component => {
        document.getElementById("heatList").innerHTML += component
        });
}

function buildForm() {
return `
<ul id="menuList">
</ul>
<ul id="heatList">
</ul>
<input type="text" id="name-input" placeholder="your name">
<button id="order-btn">Place Order</button>
`
}

function addFormToDom (form) {
    document.querySelector("#container").innerHTML = form
}

export{makeMenuItemComponent, listMenuItems, makeHeatLevelsComponent, listHeatItems, buildForm, addFormToDom}