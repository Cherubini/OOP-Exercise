const order1 = new Order('penna', 10, 1);
const order2 = new Order('matita', 100, 0.5);

const client1 = new Client('Pietro', 'Viglino', 1997, 4, 2, 'Via Balbi 10', [order1, order2]);

console.log(client1.toString());

const order3 = new Order('pinzatrici', 10, 10);

client1.addOrder(order3);

console.log(client1.toString());

const employee1 = new Employee('Simone', 'Maccarone', 2001, 4, 30, [client1]);

console.log(employee1.toString());

const order4 = new Order('penna', 1000, 1);
const order5 = new Order('scotch', 200, 2);

const client2 = new Client('Luis Alberto', 'Castro', 1988, 1, 31, 'Via XX settembre 10', [order4, order5]);

employee1.addClient(client2);

console.log(employee1.toString());

const manager1 = new Manager('Valentina', 'Cherubini', 2001, 6, 1, [employee1]);

console.log(manager1.toString());

const order6 = new Order('penna', 10000, 1);

const order7 = new Order('matita', 100000, 0.5);

const client3 = new Client('Jing', 'Wang', 2011, 4, 3, 'Via Albareto 10', [order6, order7]);

const employee2 = new Employee('Davide', 'Consigliere', 1960, 2, 20,  [client3]);

manager1.hire(employee2);

console.log(manager1.toString());

manager1.fire(employee1);

console.log(manager1.toString());

// console.log(client1.getAge());
// console.log(client1.getAge());
// console.log(employee2.getAge());
console.log(client1.isBirthday());
console.log(' ');
console.log(client3.isBirthday());


// let order1 = new Order('cocco', 12, 2)
// //console.log(order1.toString())
// let order2 = new Order('coca cola', 6, 1)
// let order3 = new Order('fanta', 6, 0.5)



// let client1= new Client('Marco', 'Valdo', [order1,order2],'via dodecaneso 3');
// let client2= new Client('Maria', 'Lupini', [order1,order2],'via alessandrini 2');
// let client3= new Client('Carlo', 'Rossi', [order1,order2],'via 12 ottobre');

// console.log('TEST CLIENT\n\n')
// //console.log(client1.toString());

// client1.addOrder(order3);

// //console.log(client1.totalOrdersPrice()+client2.totalOrdersPrice()+client3.totalOrdersPrice());


// console.log('test EMPLOYEE\n\n');

// let employee1= new Employee('marco','Rellis',[client1,client2]);
// let employee2= new Employee('bruno','Corti',[client1,client2]);
// let employee3= new Employee('Barbara','Prali',[client1,client2]);
// let employee4= new Employee('Elisabetta','Linti',[client1,client2]);
// let employee5= new Employee('Gabriele','Brito',[client1,client2,client3]);
// console.log(employee1.toString());
// //employee1.addClient(client3);
// console.log(employee1.toString());
// //employee1.removeClient(client1);

// console.log('test MANAGER\n\n');

// let manager1= new Manager('Luca','Licate',[employee1, employee2]);

// console.log(manager1.toString());
// manager1.hire(employee3);
// manager1.hire(employee4);
// console.log(manager1.toString());
// manager1.fire(employee4);
// console.log(manager1.toString());

// console.log('test sul test \n\n');



// console.log(client1.toString());

const numbers = [3, 4, 5, 9];

console.log(Utility.filter(numbers,(n)=>n>4));