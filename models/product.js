const products = [];

module.exports = class Product {
  constructor(title, price, description) {
    this.title = title;
    this.price = price;
    this.description = description;
  }

  saveInMemory(){
    products.push(this)
  }

  static fetchAllInMemory(){
    return products;
  }
}