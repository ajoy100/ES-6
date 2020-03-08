const ages=[12,15,23,18];
const ages1=[10,11,33,17];
const ages3=[31,35,43,78];
//const allAges= ages.concat(ages1).concat([88]).concat(ages3);
const allAges=[...ages , ...ages1 ,...ages3];

console.log(allAges);
// Another Place
const business=1000;
const minister=500;
const sochib=150;
//const maximum=Math.max(business , minister, sochib);
const takaPoisa=[100 , 500 , 1500, 1050];
const maximum=Math.max(...takaPoisa);

console.log(maximum);