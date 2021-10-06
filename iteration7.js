const popularToys = [];
const toys = [
	{id: 5, name: 'Buzz MyYear', sellCount: 10}, 
	{id: 11, name: 'Action Woman', sellCount: 24}, 
	{id: 23, name: 'Barbie Man', sellCount: 15}, 
	{id: 40, name: 'El gato con Guantes', sellCount: 8},
	{id: 40, name: 'El gato felix', sellCount: 35}
]

for (const iterator of toys) {
    if (iterator.sellCount>15) {
        popularToys.push(iterator.sellCount);
    }
}
let mayor=0;
for (let i = 0; i < popularToys.length; i++) {
    if (popularToys[i]>mayor) {
        mayor=i;
    }
    
}
console.log(popularToys[mayor]);