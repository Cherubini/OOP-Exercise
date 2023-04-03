class Employee extends Person 
    {
    constructor(name, surname, year, month, day, clients) 
        {
        super(name, surname, year, month, day);
        this.clients = clients;
        }
    toString() 
        {
        return `Nome:${super.toString()}\nNumero di clienti:${this.clients.length}\nGuadagno totale:${this.totalEarnings().toFixed(2)}€ \nMiglior cliente:\n\t ${this.bestClient().toString()}`
        }


    totalEarnings()
        {
        // let tot=0;
        // for (const n in this.clients) {
        //     const element = this.clients[n];
        //     tot+= element.totalOrdersPrice();
        //     }
        // return tot;
        let tempTot  = this.clients.reduce((previous, current) => {
            previous+=current.totalOrdersPrice();
            return previous;
        },0)
        return tempTot;
            
        }
    bestClient()
         {
        // let bestClient=this.clients[0];
        // for (let i=1; i< this.clients.length;i++)
        //     {
        //     let element=this.clients[i];
        //     if(element.totalOrdersPrice()>bestClient.totalOrdersPrice())
        //         bestClient=element;
        //     }
        // return bestClient;
        let bestClient = this.clients.reduce((previous, current) => {
            if(previous.totalOrdersPrice()<current.totalOrdersPrice())
                previous=current;
            return previous;
        }, this.clients[0])
        return bestClient;
        }

    addClient(client)
        {
        this.clients.push(client);
        }
        
    removeClient(client)
        {
        this.clients=this.clients.filter(n => n!=client);
        }
    }