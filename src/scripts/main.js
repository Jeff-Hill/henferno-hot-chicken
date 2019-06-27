import {getData} from "./api.js"
import {makeMenuItemComponent, listMenuItems, makeHeatLevelsComponent, listHeatItems, buildForm, addFormToDom} from "./domstuff.js"
import {initializeOrderListener} from "./form.js"
import "./order_list.js"
// console.log("This is main.js")

// console.log(getMenuItems())

addFormToDom(buildForm())
initializeOrderListener()

getData("menu_items")
.then (menuItems => {
    console.log(menuItems)
    // loop through menuItems and turn them into HTML components
    let componentArray = menuItems.map( (oneMenuItemObj) => makeMenuItemComponent(oneMenuItemObj))
    // add the menu item components to the DOM
    listMenuItems(componentArray)
})

getData("heat_levels")
.then( heatLevels => {
    console.log(heatLevels)
    let heatArray = heatLevels.map( (oneHeatObj) => makeHeatLevelsComponent(oneHeatObj))
    listHeatItems(heatArray)
})

document.querySelector("#order-form-btn").addEventListener("click", () => {
    addFormToDom(buildForm())
    initializeOrderListener()

    getData("menu_items")
    .then (menuItems => {
    console.log(menuItems)
    // loop through menuItems and turn them into HTML components
    let componentArray = menuItems.map( (oneMenuItemObj) => makeMenuItemComponent(oneMenuItemObj))
    // add the menu item components to the DOM
    listMenuItems(componentArray)
})

    getData("heat_levels")
    .then(heatLevels => {
        let heatArray = heatLevels.map( (oneHeatObj) => makeHeatLevelsComponent(oneHeatObj) )
        console.log(heatLevels)
        listHeatItems(heatArray)
    })
})


