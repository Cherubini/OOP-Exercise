class Client extends Person {
    constructor(name, surname, year, month, day, address, orders = []) {
        super(name, surname, year, month, day);
        this.orders = orders;
        this.address = address;
    }
    toString() {
        let str=`Nome:${super.toString()}\nIndirizzo:${this.address}\nOrdini: ${this.orders.length} \nSpesa totale:${this.totalOrdersPrice()}€\n${this.ordersToString()}\n`
        if(this.isBirthday())
            str+='Oggi è il suo compleanno!'
        return str;
    }
    ordersToString() {
        let str = ''
        for (let i=0; i<this.orders.length; i++) {
            str+=this.orders[i].toString()+'\n-------------------\n';
        }
        return str;
    }

    totalOrdersPrice() {
        // let totalOrdersPrice = 0;
        // for (let i=0; i<this.orders.length; i++) {
        //     totalOrdersPrice+=this.orders[i].totalPrice();
        // }
        // return totalOrdersPrice;
        
        let totalPrice=this.orders.reduce((previousElement,currentElement)=> {
            previousElement+=currentElement.totalPrice();
            return previousElement;
        }, 0)
        return totalPrice;
    }

    addOrder(order){
        this.orders.push(order);
    }

}

