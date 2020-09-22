function BuildCart() {
  let items = [];
  let totalPrice = 0;

  this.add = function (id, name, price) {
    try {
      if (items.length === 10) {
        throw new console.Error("cart is full");
      }
    } catch (er) {
      console.log("cart is full you can't add more items");
      return;
    }

    let obj = { id, name, price };
    totalPrice += price;
    items.push(obj);
  };

  this.remove = function (id) {
    try {
      if (items.length === 0) {
        throw new Error("Cart is Empty");
      }
    } catch (er) {
      console.log("cart is empty");
      return;
    }
    items = items.filter((items) => items.id != id);

    console.log(`item ${id} of id is not present`);
  };

  this.checkout = function () {
    try {
      if (items.length === 0) {
        throw new Error("Cart is Empty");
      }
    } catch (er) {
      console.log(`cart is empty total price is ${totalPrice}`);
      return;
    }
    console.log(totalPrice);
  };

  this.empty = function () {
    try {
      if (items.length === 0) {
        throw new Error("Cart is Empty");
      }
    } catch (er) {
      console.log("cart is empty");
      return;
    }
    items = [];
    totalPrice = 0;
    console.log("All item are removed");
  };
}
