class Manager extends Person{
    constructor(name, surname, year, month, day, employees)
        {
        super(name, surname, year, month, day);
        this.employees=employees;
        }
    
    toString()
        {
        return `Nome: ${super.toString()}
Impiegati: ${this.employees.length}
Clienti: ${this.totalClients()}
Guadagni totali: ${this.totalEarnings().toFixed(2)}€`;
        }

    totalClients()
        {
        let totalClients=0;
        for (const n in this.employees) {
                const element=this.employees[n];
                totalClients+=element.clients.length;
                }
        return totalClients;
        }
    
    totalEarnings()
        {
        let totEarnings=0;
        for (const n in this.employees) {
                const element=this.employees[n];
                totEarnings+=element.totalEarnings();
                }
        return totEarnings;
        }

    hire(employee)
        {
        this.employees.push(employee);
        }

    fire(employee)
        {
        this.employees=this.employees.filter(n => n!=employee);
        }
}