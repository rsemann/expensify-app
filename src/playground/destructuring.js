// console.log("dasda");
// const person = {
// name:'Rafael Semann',
// age:91,
// location: {
//     city:"Cape Town",
//     temp:92
// }
// };

// const {name:firstName="Unknown", age } = person;

// console.log(`${firstName} is ${age}`);

// const {city, temp: temperature} = person.location;
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//     title: "Ego is the enemy",
//     author: 'Ryan Holiday',
//     publisher: {
//         name: "Penguin"
//     }
// };

// const {name: publisherName ="Self-Published"} = book.publisher;


// console.log(publisherName);

//ARRAY DESTRUCTURING

const address = [
    '1299 Bla St', 'Philly', 'Pensi', '21221'
];

const [, city, state='New york'] = address;
console.log(`You are in ${city} ${state}`);

const item = [
    'coffee', '2', '2.50', '2.75'
];

const [itemName, , medium] = item;
console.log(`A medium ${itemName} costs ${medium}`);