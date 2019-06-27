import {getData} from "./api.js"

document.querySelector("#order-list-btn").addEventListener("click", () => {
    console.log("order list clicked")
    getAllOrders()
    .then( orders => listOrders(orders))
})

function listOrders(orderList) {
    // show all the orders in the DOM
    console.log(orderList)
    let orderListArray = orderList.map( order => buildOrderComponent(order))
    let container = document.querySelector("#container")
    container.innerHTML = ""
    orderListArray.forEach( orderComponent => container.innerHTML += orderComponent )

    }



function getAllOrders() {
 return getData("orders", "_expand=menu_item&_expand=heat_level")
}


function buildOrderComponent(orderObj) {
    return `
        <h3>Order #${orderObj.id}</h3>
        <p>${orderObj.user} ordered ${orderObj.heat_level.name} ${orderObj.menu_item.name}
    `
}
// export {getAllOrders}