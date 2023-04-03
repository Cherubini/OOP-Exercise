class Order {
    constructor(prodoct, quantity, uprice) {
        this.prodoct = prodoct;
        this.quantity = quantity;
        this.uprice = uprice;
    }

    toString() {
        return `Prodotto: ${this.prodoct}\nQuantità:${this.quantity}\nCosto unitario:${this.uprice.toFixed(2)}€\nCosto totale:${this.totalPrice().toFixed(2)}€`
    }

    totalPrice() {
        return this.quantity * this.uprice
    }
}