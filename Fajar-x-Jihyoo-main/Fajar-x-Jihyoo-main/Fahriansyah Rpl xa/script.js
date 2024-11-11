document.getElementById("orderButton").onclick = function (event) {
    let foodPrice = parseInt(document.getElementById("food").value);
    let drinkPrice = parseInt(document.getElementById("drink").value);
    event.preventDefault()

  let totalPrice = foodPrice + drinkPrice;

  let discount = 0;

  if (totalPrice > 100) {
      // alert('MAAP');
      discount = totalPrice * 0.1
      totalPrice -= discount;
    
  }

   const resultDiv = document.getElementById("result");
   if (totalPrice  > 0) {
       resultDiv.innerHTML = `
          Total : $${foodPrice + drinkPrice}<br>
          Discount : $${discount.toFixed(2)}<br>
          Final Price : $${totalPrice.toFixed(2)}
          ` ;
   } else{
       resultDiv.innerHTML = "pilih la bodo"
   }

}