// ITERATION 1

function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  const result = price * quantity;
  
  const subTotalField = product.querySelector('.subtotal span')
  subTotalField.innerText = result;
  
  console.log(subTotalField)
  return result;
}

  // ITERATION 2
  function calculateAll() {
    const allProducts = document.querySelectorAll('.product');
    let grandTotal = 0;
    allProducts.forEach(oneProduct => {
      //granTotal += updateSubtotal(oneProduct)
      grandTotal = granTotal + updateSubtotal(oneProduct)
    })

    const totalValue = document.querySelector('#total-value span');
    totalValue.innerText = granTotal
    return grandTotal
    }


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
