import { addOrder } from "./api.js";

// We need to do these things
function initializeOrderListener() {
  let orderBtn = document.querySelector("#order-btn");
  // Attach event listeners to the form elements
  orderBtn.addEventListener("click", () => {
    console.log("button clicked");
    // Grab the values from the form inputs
    let userName = document.querySelector("#name-input").value;
    let selectedMenuItemId = null;
    let selectedHeatLevelId = null;

    let menuBtns = document.getElementsByName("menu-item");
    console.log(menuBtns);
    // Loop through buttons to find the checked on
    for (let i = 0; i < menuBtns.length; i++) {
      if (menuBtns[i].checked) {
        console.log(menuBtns[i].value);
        selectedMenuItemId = parseInt(menuBtns[i].value);
      }
    }
    // POST form data to database
    let heatBtns = document.getElementsByName("heat-level");
    console.log(heatBtns);
    // Loop through buttons to find the checked on
    for (let i = 0; i < heatBtns.length; i++) {
      if (heatBtns[i].checked) {
        console.log(heatBtns[i].value);
        selectedHeatLevelId = parseInt(heatBtns[i].value);
      }

}


// POST form data to database
let newOrder = orderFactory(userName, selectedMenuItemId,selectedHeatLevelId)
addOrder(newOrder)

  })
}


function orderFactory(user, menuId, heatId) {
  return {
    menu_itemId: menuId,
    heat_levelId: heatId,
    user: user
  }
}

export {initializeOrderListener}

