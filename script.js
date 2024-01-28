let arr = [
	{ name: 'Ivan', country: 'Ukraine' },
	{ name: 'Petro', country: 'Ukraine' },
	{ name: 'Miguel', country: 'Cuba' }
];

const allInUkraine = arr.every(({ country }) => country === 'Ukraine');

console.log('Do all country keys have the value "Ukraine"?', allInUkraine);