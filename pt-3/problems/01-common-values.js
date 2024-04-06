/*
    Common values in two objects:
        Given two objects, return an array of values that are present in both objects

    const cat = {color: 'white', legs: 4, favoriteFood: 'sushi'};
    const bunny = {color: 'white', favoriteFood: 'carrots'};
    const human = {hobbies: ['running', 'painting'], legs: 4, favoriteFood: 'sushi'};
    const vehicle = { wheels: 4, color: 'red'};

    console.log(commonValues(cat, bunny)); // prints ['white']
    console.log(commonValues(cat, human)); // prints [4, 'sushi']
    console.log(commonValues(human, vehicle)); // prints [4]

*/
// const cat = {color: 'white', legs: 4, favoriteFood: 'sushi'};
// const bunny = {color: 'white', favoriteFood: 'carrots'};
function commonValues(obj1, obj2) {
  // Your code here
  let valuesInCommon = [];

  for (const key in obj1) {
      if (obj2.hasOwnProperty(key) && obj1[key] === obj2[key]) {
          valuesInCommon.push(obj1[key]);
      }
      return valuesInCommon;
  }


}
//console.log(commonValues(cat, bunny)); // prints ['white']
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = commonValues;
} catch (e) {
    module.exports = null;
}
