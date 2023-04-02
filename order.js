class Order {
    constructor(prodoct, quantity, uprice) {
        this.prodoct = prodoct;
        this.quantity = quantity;
        this.uprice = uprice;
    }

    toString() {
        return `Prodotto: ${this.prodoct}\nQuantità:${this.quantity}\nCosto unitario:${this.uprice}€\nCosto totale:${this.totalPrice()}€`
    }

    totalPrice() {
        return this.quantity * this.uprice
    }
}