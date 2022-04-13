// all dom selector
let bestPrice = document.querySelector("#best-price");
let totalMemoryCost = document.querySelector("#memory-cost");
let storageCost = document.querySelector("#storage-cost");
let deliveryCost = document.querySelector("#delivery-cost");
let totalPrice = document.querySelector("#total-price");

function updatePrice(price, bestPrice, memoryCost, delivery) {
  let updateTotal =
    parseInt(price) +
    parseInt(bestPrice.textContent) +
    parseInt(memoryCost.textContent) +
    parseInt(delivery.textContent);
  console.log(updateTotal);
  return (totalPrice.innerText = updateTotal);
}
let str = 0;
function click(id, price, item) {
  let itemId = document.querySelector(id).addEventListener("click", () => {
    item.innerText = price;
    updatePrice(price, bestPrice, totalMemoryCost, deliveryCost);

    // console.log(price);
  });
  return itemId;
}

click("#paid-delivery", 20, deliveryCost);
click("#free-delivery", 0, deliveryCost);
click("#ssd1", 0, storageCost);
click("#ssd2", 200, storageCost);
click("#ssd3", 350, storageCost);
click("#eightGB", 0, totalMemoryCost);
click("#sixteenGB", 500, totalMemoryCost);
/*
// event handler for prices
function ssd2() {
  storageCost.innerText = 200;
  updatePrice(
    200,
    bestPrice.textContent,
    totalMemoryCost.textContent,
    deliveryCost.textContent
  );
}
function ssd1() {
  storageCost.innerText = 0;
  updatePrice(
    0,
    bestPrice.textContent,
    totalMemoryCost.textContent,
    deliveryCost.textContent
  );
}
function ssd3() {
  storageCost.innerText = 350;
  updatePrice(
    350,
    bestPrice.textContent,
    totalMemoryCost.textContent,
    deliveryCost.textContent
  );
}
function eightGBMemory() {
  totalMemoryCost.innerText = 0;
  updatePrice(
    storageCost.textContent,
    bestPrice.textContent,
    0,
    deliveryCost.textContent
  );
}
function sixteenGbMemo() {
  totalMemoryCost.innerText = 500;
  updatePrice(
    storageCost.textContent,
    bestPrice.textContent,
    500,
    deliveryCost.textContent
  );
}
function paidDelivery() {
  deliveryCost.innerText = 20;
  updatePrice(
    storageCost.textContent,
    bestPrice.textContent,
    totalMemoryCost.textContent,
    20
  );
}
function freeDelivery() {
  deliveryCost.innerText = 0;
  updatePrice(
    storageCost.textContent,
    bestPrice.textContent,
    totalMemoryCost.textContent,
    0
  );
}
let promoInput = document.querySelector("#promo-input");
let applyBtn = document
  .querySelector("#apply-btn")
  .addEventListener("click", () => {
    if (promoInput.value == "apple") {
      totalPrice.innerText = parseInt(totalPrice.textContent) - 120;
      promoInput.value = "";
    } else {
      alert("Promo code not valid!");
    }
  });
*/
