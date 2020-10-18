const basket = ['apples' , 'oranges' , 'grapes' ];
const detailedBasket = {
    apples : 5,
    oranges: 10,
    grapes: 1000
}
// for of
// Iterating  -- arrays - strings
for ( item of basket){
    console.log(item);
}

//for in   (for objects properities) 
// enumerating : to see properities 

for ( item in detailedBasket){
    console.log(item);
}
