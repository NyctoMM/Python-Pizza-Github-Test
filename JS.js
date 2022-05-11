function Ordering() {
    var customerName = document.getElementById("customerName").value;
    var customerAddress = document.getElementById("customerAddress").value;

    var pizzaStyle = document.getElementById("pizzaStyle").value;
    var pizzaSize = document.getElementById("pizzaSize").value;

    var deliveryOpt = document.querySelector('input[name="deliveryOption"]:checked').value;

    var toppingSelection = "";

    var totalPrice = 0.00;

    for (x=1; x<=4; x++) {
        if (document.querySelector('input[name=toppings' + x + ']:checked')) {
            toppingSelection = toppingSelection + document.getElementById("topping"+ x).value + " ";
        }
    }   
    for (x=1; x<=4; x++) {
        if (document.querySelector('input[name=toppings' + x + ']:checked')) {
            totalPrice = totalPrice +  .25;
      }
    }
    if (pizzaSize == "small") {
        totalPrice = totalPrice + 8.50;
    }
    else if(pizzaSize == "medium") {
        totalPrice = totalPrice + 10.00;
    }
    else if(pizzaSize == "large") {
        totalPrice = totalPrice + 12.50;
    }
    else if(pizzaSize == "Extra") {
        totalPrice = totalPrice + 15.00;
    }

    alert("Customer Name:" + customerName +
          "\nCustomer Address: " + customerAddress +
          "\nPizza Style: " + pizzaStyle +
          "\nPizza Size: " + pizzaSize +
          "\nToppings: " + toppingSelection +
          "\nPrice Total: " + totalPrice +
          "\nDelivery Option: $" + deliveryOpt  );
    if (deliveryOpt == "Delivery") {
        alert("Your pizza will be delivered within 45 minutes.");
    }

    document.write("Your order has been placed! If any issues or corrections arise please call: 1-570-383-3848");
}

