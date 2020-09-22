function BuildCart() {
  let items = [];
  let totalPrice = 0;

  this.add = function (i, nm, p) {
    try {
      if (items.length === 10) {
        throw new console.Error("cart is full");
      }
    } catch (er) {
      console.log(er);
      return;
    }

    let obj = { id, name, price };
    totalPrice += p;
    items.push(obj);
  };

  this.remove = function (id) {
    try {
      if (items.length === 0) {
        throw new Error("Cart is Empty");
      }
    } catch (er) {
      console.log("cart is Empty");
      return;
    }

    for (let i = 0; i < items.length; i++) {
      if (items[i].id === id) {
        totalPrice -= items[i].price;
        delete items[i];
        console.log(`item of id ${id} is deleted`);
        return;
      }
    }
    console.log(`item ${id} of id is not present`);
  };

  this.checkout = function () {
    try {
      if (items.length === 0) {
        throw new Error("Cart is Empty");
      }
    } catch (er) {
      console.log("cart is Empty");
      return;
    }
    console.log(`Total price ${totalPrice}`);
    console.log("checking out....");
    this.empty();
  };

  this.empty = function () {
    try {
      if (items.length === 0) {
        throw new Error("Cart is Empty");
      }
    } catch (er) {
      console.log("Cart is empty");
      return;
    }
    items = [];
    totalPrice = 0;
    console.log("Done");
  };
}
