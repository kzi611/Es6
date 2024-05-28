//1 let const
function isPrime(number) {
  const isNotPrime = number <= 1;
  if (isNotPrime) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

//2 Arrow Function 
function sumNum(n){
  let sum = 0;
  n.forEach((n) => sum += n)
  return sum;
}

//3 TemplateLiteral
function text(firstName, lastName){
  return `Chào mừng ${firstName} ${lastName}!`;
}

//4 Destructuring
function destructuring({firstName, position, company}){
  return `My name is ${firstName}. I am a ${position} in ${company}`;
}

//5 Optional Chaining
function optionalChaining({firstName, company}) {
  return company?.department?.position || 'Position not available';
}

//6 nullish coalescing operator
function nullishCoalescingOperator(name) {
  return `${name}` ?? "Người dùng ẩn danh";
}

//7 spread operator
function spreadOperator(array1, array2) {
  return [...array1,...array2];
}

//8 rest parameters
function restParameters(...array) {
  let sum = 0;
  array.forEach((array) => sum += array)
  return sum;
}

//9 map
function mapParameters(...array){
  return array.map((array) => array * 2);
}

//10 filter
function filterParameters(...array){
  return array.filter(array => array % 2 == 0);
}

//11 fetch API
function fetchAPI(link) {
    import('node-fetch').then((nodeFetch) => {
        const fetch = nodeFetch.default;
      
        const fetchData = async () => {
          try {
              const response = await fetch(link);
              const data = await response.json();
              console.log(data);
          } catch (error) {
              console.error('Error:', error);
          }
        };
      
        fetchData();
      }).catch((error) => {
        console.error('Error:', error);
      });
}

//12 shallow copy
function shallowCopy(object){
  return Array.from(object);
}

//13 deep copy
function deepCopy(object){
  return JSON.parse(JSON.stringify(object));
}

//14 array destructuring
function arrayDestructuring(array){
  const [a, b] = array;
  return [a, b];
}

//15 array destructuring swap
function arrayDestructuringSwap(a,b){
  [a, b] = [b, a]
  return [a, b];
}

//16 check object is array
function checkArray(object){
  return Array.isArray(object);
}

//17 last element array destructuring
function lastElement(array){
  const [a] = array.reverse();
  return a;
}

//18 odd time appear
function oddTimeAppear(array){
  const count = new Map();
  array.forEach(element => {
    count.set(element, (count.get(element) || 0) + 1);
  });
    const oddAppear = Array.from(count.entries())
                            .filter(([key, value]) => value % 2 !== 0)
                            .map(([key]) => key);
  
  return oddAppear;
}

//19 array method
function arrayMethod(array){
  return array.sort((a,b)=>a-b);
}

console.log(isPrime(2));
console.log(sumNum([1,2,3]));
console.log(text("Kha", "Vy")); 
const person = {
  firstName: 'Vivian',
  position: 'intern',
  company: 'BAP'
};
console.log(destructuring(person));
const person1 = {
  firstName: 'John',
  company: {
    department: {
      position: 'intern'
    }
  }
};
console.log(optionalChaining(person1));
console.log(nullishCoalescingOperator());
console.log(spreadOperator([1, 2, 3], [4, 5, 6]));
console.log(restParameters(1,2,3));
console.log(mapParameters(1,2,3));
console.log(filterParameters(1,2,3,4,5,6,7,8,9,10));
fetchAPI('https://jsonplaceholder.typicode.com/photos');
const ingredientsList = ["noodles", { list: ["eggs", "flour", "water"] }];
console.log(shallowCopy(ingredientsList));
console.log(deepCopy(ingredientsList));
console.log(arrayDestructuring([1,2,3,4,5,6,7]));
console.log(arrayDestructuringSwap(3,5));
console.log(checkArray("hello"));
console.log(lastElement([1,2,3,4,5,6,7]));
console.log(oddTimeAppear([1,2,3,4,5,6,7,1,324,141,5256,735251,1,24,5,3,4,2,2]));
console.log(arrayMethod([9,3,6,24,6,8,58,3,1,3]));