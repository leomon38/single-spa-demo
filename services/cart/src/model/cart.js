
function createCart() {
    class Cart  {    
        cart
        constructor() {                    
            this.cart = {
                products : [],
                total : 0
            }
        } 

        get(){
            return this.cart
        }
    
        set(_cart) {
            this.cart = _cart
        }    

        addToCart(product) {
            let found = false;
            this.cart.products.forEach((prod) => {
              if (product.id == prod.product.id) {
                prod.product.quantity += 1;
                found = true;
                return;
              }
            });
            if (!found) {
                product.quantity = 1
                this.cart.products.push({
                product
              });
            }
            this.cart.total += product.price * product.quantity
        }

        removeItem(id) {
            this.cart.products =  this.cart.products.filter(product => product.id !== id)
        }

        checkout() {
            // TO DO 
            const total = this.cart.total
            this.cart = {
                products : [],
                total : 0
            }
            return total
        }
    }

    const instance = new Cart();
    return instance;
}

const SingletonCart = createCart()
module.exports = SingletonCart
