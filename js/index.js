// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");
  const $price = product.querySelector(".price span").innerText;
  const $quantity = product.querySelector(".quantity input").value;
  const total = $price * $quantity;

  const $subtotal = product.querySelector(".subtotal span");
  $subtotal.innerText = total;
  return total;

  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = product.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test
  const $total = document.getElementById("total-value");
  let total = 0;

  // ITERATION 2
  const $products = document.getElementsByClassName("product");
  for (let product of $products) {
    total += updateSubtotal(product);
  }
  //... your code goes here

  // ITERATION 3
  //... your code goes here
  $total.innerText = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const item = target.parentNode.parentNode;

  console.log("The target in remove is:", item);
  //... your code goes here
  item.remove();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  const $removeBtn = document.getElementsByClassName("btn-remove");
  const $addProduct = document.getElementById("create");

  for (let btn of $removeBtn) {
    btn.addEventListener("click", removeProduct);
  }

  calculatePricesBtn.addEventListener("click", calculateAll);

  //... your code goes here
});
