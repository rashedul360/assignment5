// picking needed  Id name
const extraMemory = document.getElementById("extra-memory");
const extraStorage = document.getElementById("extra-storage-cost");
const deliveryCharge = document.getElementById("delivery-cost");
const cuponTotal = document.getElementById("promo-total");
// updated common function
function update(idName, productValue) {
  const product = document.getElementById(idName);
  product.innerText = productValue;
  sum();
}
// eventListener common function
function eventCommonFunction(idName, eventType, Id, value) {
  document.getElementById(idName).addEventListener(eventType, function () {
    update(Id, value);
  });
}
// all component price with summation
function sum(productValue) {
  const a = Number(document.getElementById("extra-memory").innerText);
  const b = Number(document.getElementById("extra-storage-cost").innerText);
  const c = Number(document.getElementById("delivery-cost").innerText);
  const totalCost = (document.getElementById("totalCost").innerText =
    1299 + a + b + c);
  cuponTotal.innerText = totalCost;
  return totalCost;
}
//use eventListener common function
eventCommonFunction("configuration-memory", "click", "extra-memory", 0);
eventCommonFunction("16GB-memory", "click", "extra-memory", 180);
eventCommonFunction("configuration-storage", "click", "extra-storage-cost", 0);
eventCommonFunction("storage-512", "click", "extra-storage-cost", 100);
eventCommonFunction("storage-1tb", "click", "extra-storage-cost", 180);
eventCommonFunction("free-delivery", "click", "delivery-cost", 0);
eventCommonFunction("paid-delivery-cost", "click", "delivery-cost", 20);
// cupon code control
document.getElementById("apply").addEventListener("click", function () {
  if (document.getElementById("cupon-field").value === "stevkaku") {
    const totalAmount = totalCost.innerText;
    const discAMount = totalAmount / 20;
    console.log(discAMount);
    cuponTotal.innerText = totalAmount - discAMount;
    //alert
  }
});
