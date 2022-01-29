// template for sofa objects
function Coolhat(name, price, purchased, available) {
    this.name = name;
    this.price = price;
    this.purchased = purchased;
    this.available = available;
    
    

    this.checkStock = function() {
      return this.available - this.purchased;
    };
  }
  
  
  // two armchair objects
  let woolCoolhat = new Coolhat('wool', 25, 33, 100);
  let truckerCoolhat = new Coolhat('trucker', 15, 54, 150);

  // Update the HTML for the page
  let wool_stock = woolCoolhat.name + ' hats left in stock: ';
      wool_stock += woolCoolhat.checkStock();
  let elCoolhat1 = document.getElementById('coolhat1');
  elCoolhat1.textContent = wool_stock;
  
  let trucker_stock = truckerCoolhat.name + ' hats left in stock: ';
      trucker_stock += truckerCoolhat.checkStock();
  let elCoolhat2 = document.getElementById('coolhat2');
  elCoolhat2.textContent = trucker_stock;