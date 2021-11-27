const person = {
    name: 'Herman',
    age: 54,
    evaluations: [7, 10, 9]
};

// Dot notation
person.name = 'Paméla';

// Bracket notation
person['name'] = 'Timmo';

console.log(person.evaluations);
