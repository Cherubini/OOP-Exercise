class Client extends Person {
    constructor(name, surname, year, month, day, address, orders) {
        super(name, surname, year, month, day);
        this.orders = orders;
        this.address = address;
    }
    toString() {
        return `Nome:${super.toString()}\nIndirizzo:${this.address}\nOrdini: ${this.orders.length} \nSpesa totale:${this.totalOrdersPrice()}€\n${this.ordersToString()}\n`
    }
    ordersToString() {
        let str = ''
        for (let i=0; i<this.orders.length; i++) {
            str+=this.orders[i].toString()+'\n-------------------\n';
        }
        return str;
    }

    totalOrdersPrice() {
        let totalOrdersPrice = 0;
        for (let i=0; i<this.orders.length; i++) {
            totalOrdersPrice+=this.orders[i].totalPrice();
        }
        return totalOrdersPrice;
    }

    addOrder(order){
        this.orders.push(order);
    }

}

