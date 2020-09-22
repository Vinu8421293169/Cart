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

    let obj = {};
    obj.id = i;
    obj.name = nm;
    obj.price = p;
    totalPrice += p;
    items.push(obj);
  };

  this.remove = function (id) {
    try {
      if (items.length === 0) {
        throw new Error("Cart is Empty");
      }
    } catch (er) {
      console.log(er);
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
      console.log(er);
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
      console.log(er);
      return;
    }
    items = [];
    totalPrice = 0;
    console.log("All item are removed");
  };
}
