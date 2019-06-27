
// console.log("This is api.js")

// function getMenuItems () {
// return fetch("http://localhost:8088/menu_items")
// .then( menuData => menuData.json())
// }

// function getHeatLevels () {
// return fetch("http://localhost:8088/heat_levels")
// .then( heatData => heatData.json())
// }

// function getOrders () {
    // return fetch("http://localhost:8088/orders")
    // .then( orderData => orderData.json())
    // }

function getData(resource, queryParams) {
   let url = `http://localhost:8088/${resource}`
    if(queryParams) {
        url += `?${queryParams}`
    }
    return fetch(url)
    .then( orderData => orderData.json())
}

function addOrder(newOrderObj) {
    return fetch("http://localhost:8088/orders", {
        method: "POST",
        headers: { "Content-Type":"application/json"},
        body: JSON.stringify(newOrderObj)
    })
}



export { addOrder, getData}