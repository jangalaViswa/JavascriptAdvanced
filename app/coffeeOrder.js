class Order {
    constructor(customerName, coffeeType) {
      this.customerName = customerName;
      this.coffeeType = coffeeType;
    }
  }
  
  class CoffeeShop {
    constructor() {
      this.orders = [];
    }
  
    addOrder(order) {
      this.orders.push(order);
    }
  
    fulfillOrder() {
      const orderToBeFulfilled = this.orders.shift();
      if (orderToBeFulfilled) {
        console.log(`The ${orderToBeFulfilled.coffeeType} for ${orderToBeFulfilled.customerName} is ready!`);
      } else {
        console.log("No orders to fulfill.");
      }
    }
  
    listOrders() {
      this.orders.forEach(order => {
        console.log(`${order.customerName}'s ${order.coffeeType}`);
      });
    }
  }
  
  // Usage
  const myCoffeeShop = new CoffeeShop();
  myCoffeeShop.addOrder(new Order('John', 'Latte'));
  myCoffeeShop.addOrder(new Order('Sarah', 'Cappuccino'));
  
  myCoffeeShop.listOrders(); // Lists all orders
  myCoffeeShop.fulfillOrder(); // Fulfills the first order
  myCoffeeShop.listOrders(); // Lists remaining orders
  myCoffeeShop.fulfillOrder();
  myCoffeeShop.fulfillOrder();