/ *************************** 32-1 Module Introduction and Basic ES6 Recap





// -reject "var" use "let" and "const"
const hubby = 'Omor Sani';
let phone = 'iphone 15';
phone = 'Samsung Galaxy S17';
// 2. default parameter-VALUE AND SPREAD OPERATOR or three dots (...) 
function maxNumber(array = []) {
    const max = Math.max(...array);
    return max;
}
const biggest = maxNumber();
console.log(biggest);
// 3. template string
const myNotes = `I am mojnu of ${hubby}. I have a ${phone}.`
console.log(myNotes);
// 4. arrow function
const square = x => x * x;
console.log(square(9));
 */




// ***************************** 32-2 Destructuring Object to extract values to variables




 let pc1 = {
    name: "Asus",
    processors: "intel core i3 10 gen",
    ram: "8 gb",
    rom: "120gb ssd + 500 hdd"
}; */

// storing prorperty value of a object in a variable
/* let processors = pc1.processors;
let ram = pc1.ram;
let rom = pc1.rom;
console.log(processors, ram, rom); */


// we can store prorperty value of a object in a variable by using destructuring
/* const {name,processors,ram,rom} = pc1;
console.log(name,processors,ram,rom); */



// console.log("---------------------------special note---------------------------");

// এখানে শর্টকাটে সবগুলা property এর same নামে একসাথে অনেক গুলা variable নেয়া হয়েছে ।

// console.log("---------------------------special note---------------------------");


// example of object inside object 

/* const company = {
    name: 'GP',
    ceo: {
        id: 1,
        name: 'ajmol',
        food: 'fuchka'
    },
    web: {
        work: 'website development',
        employee: 22,
        framework: 'react',
        technology: {
            firstTech: 'html',
            secondTech: 'css',
            thirdTech: 'js'
        }
    },
}; */


// taking employee and framework property of web object and store in a variable
/* const {
    employee,
    framework
} = company.web;
console.log(employee, framework);
const {
    secondTech,
    thirdTech
} = company.web.technology;
console.log(secondTech, thirdTech); */





// ********************************** 32-3 (advanced) Array Destructuring, nested object Optional chaining



//recap object destructuring declare variable based on the name of an object property
/* const myObject = {
    x: 2,
    y: 50,
    z: 600,
    a: 25,
    b: 68
};
const {
    x,
    b
} = myObject;
console.log(x, b); 
// direct object destructuring
const { sky, color, money } = { sky: 'blue', soil: 'matti', color: 'red', money: 500 };
console.log(sky, color, money); */


// destructuring array 
/* const colors = ['red', 'green', 'blue', 'yellow']; // at first arra declacred
const [color1, color2, color3, color4] = colors; // then destructuring array use করে পর্যাক্রমে নতুন কিছু variable declare করা হয়েছে ।
console.log(color1, color2, color3, color4);
// direct array destructuring
const [p, q] = [45, 37, 91, 86];
console.log(p, q); */




//chaining
/* 
const company = {
    name: 'GP',
    ceo: {
        id: 1,
        name: 'ajmol',
        food: 'fuchka'
    },
    web: {
        work: 'website development',
        employee: 22,
        framework: 'react',
        tech: {
            first: 'html',
            second: 'css',
            third: 'js'
        }
    },
};
// printing third tech of company
// console.log(company.web.tech.third);
// error handling "Cannot read properties of undefined"
// console.log(company.backend.tech.third); // এখানে "backend" নামের কোন variable declare করা হয় নি  তাই এরর "Cannot read properties of undefined" দিচ্ছে
// handling "Cannot read properties of undefined" by chaining
console.log(company?.backend?.tech?.third); */





// ************************************ 32-4 Array map to do one line loop magic



/* 
// console.log("---------------------------special note---------------------------");
// map use করা হয় শুধুমাত্র array এর উপরে , ধরুন কোন array এর সবগুলা উপাদান কে কোন নির্দিষ্ট কাজ করবেন হতে পারে সবগুলাকে ২গুন করবেন, সবগুলার length জানবেন ইত্যাদে অতঃপর সেগুলো নিয়ে নতুন একটা array তৈরি করবেন ।
// console.log("---------------------------special note---------------------------");
// কোন array এর সবগুলা উপাদানকে দ্বীগুন করে তাদের নিয়ে নত্যন একটা variable এ ্র রাখব
// style : 1  conventional way "loop+push"
const numbers = [4, 6, 8, 10];
let outPut = []
for (const number of numbers) {
    result = number * 2;
    outPut.push(result);
}
console.log(outPut);
// style : 2  conventional way "arrayFunction+loop+push"
let doubleIt = param => param * 2;
const numbers2 = [40, 60, 80, 100];
let outPut2 = []
for (const number of numbers2) {
    result = doubleIt(number);
    outPut2.push(result);
}
console.log(outPut2);
// style : 3  mdertn way "callingFunction+map"
let numbers3 = [45, 65, 85, 105];
let outPut3 = numbers3.map(doubleIt);
console.log(outPut3);
// style : 4  mdertn way "arrayFunction+map"
// example for doubling value
let numbers4 = [450, 650, 850, 1050];
let outPut4 = numbers4.map(x => x * 2);
console.log(outPut4);
// example for squiring value
let numbers5 = [405, 605, 805, 1005];
let output5 = numbers5.map(x => x * x);
console.log(output5);
 */

// console.log("---------------------------special note---------------------------");


/* let numbers5 = [405, 605, 805, 1005];
let output5 = numbers5.map(element => element * element);
console.log(output5);
বাংলা তর্জমাঃ console তুমি output5 রে পাইতে চাও? তাইলে এক কাজ কর numbers5 এর তল্লাশি চালাও তার map দেখ তার element রে ধর তাদের কে ধইরা ধইরা স্কয়ার কর element * element  তারপর তাদের কে নিজের array এর ভিতরে ভইরা নাও অর্থাৎ output হবে array */

// console.log("---------------------------special note---------------------------");




// ****************************** 32-5 Map string array, array of objects map, foreach



/* 
// project; use map and get an array of lentgh of each string
let anArrayIs = ['a', 'b2', 'c33', 'd444', 'e5555'];
let lengthArray = anArrayIs.map(param => param.length);
console.log(lengthArray);
// map on array of objects
const products = [{
        name: 'water bottle',
        price: 50,
        color: 'yellow'
    },
    {
        name: 'mobile phone',
        price: 15000,
        color: 'black'
    },
    {
        name: 'smart watch',
        price: 3000,
        color: 'black'
    },
    {
        name: 'sticky note',
        price: 30,
        color: 'pink'
    },
    {
        name: 'water glass',
        price: 3,
        color: 'white'
    }
];
// spread method
let newProduct = [...products]
console.log(newProduct);
// destructuring
const [waterBottle, mobilePhone, smartWatch] = products;
console.log(waterBottle, mobilePhone, smartWatch);
// project : get an array of price of each product using map
// conventional
let productsPrice = []
for (const product of products) {
    let price = product.price;
    productsPrice.push(price);
}
console.log(productsPrice);
// using map
let productPrice = products.map(p => p.price);
console.log(productPrice);
let productName = products.map(n => n.name);
console.log(productName);
// project : printing all element of an array using map
let allProducts = products.map(p => console.log(p));
// ************************************** foreach foreach foreach foreach 
// printing all element of an array using foreach
let allProducts2 = products.forEach(p => console.log(p));
// console.log("---------------------------special note---------------------------");
// forEach is used insted of map when no need of return 
// forEach হল map এর আপন ছোট ভাই তাই এটা return করতে পারেনা বাকি সব পারে
// console.log("---------------------------special note---------------------------");
 */





// ********************************* 32-6 (advanced) Implement filter, find on an array of objects




// console.log("---------------------------special note---------------------------");



/* const numbers = [5, 13, 7, 41, 30, 5, 2, 19];
const bigNumbers = numbers.filter(number => number > 20);
console.log(bigNumbers);
const smallNumbers = numbers.filter(number => number < 10);
console.log(smallNumbers);
বাংলা তর্জমাঃ console তুমি bigNumbers রে পাইতে চাও? তাইলে এক কাজ কর numbers5 এর তল্লাশি চালাও তারে filter কইরা দেখ তার element রে ধর তাদের কে ধইরা ধইরা চেক কর শর্ত মানলে নিজের array এর  মধ্যে ঢুকায়া নাও নইলে ignore  কর অর্থাৎ output হবে array*/

// console.log("---------------------------special note---------------------------");

// filter on array of objects
/* const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 15000, color: 'black' },
    { name: 'smart watch', price: 3000, color: 'black' },
    { name: 'sticky note', price: 30, color: 'pink' },
    { name: 'water glass', price: 3, color: 'white' }
];
const expensive = elem.filter(elem => elem.price > 100);
// console.log(expensive);
const blacks = elem.filter(elem => elem.color == 'pink');
// console.log(blacks);
const whiteItem = elem.find(elem => elem.color == 'black');
console.log(whiteItem); */





// ******************************* JavaScript Class Concept by Rokibul Hasan Rokib



/* 
Class: JavaScript Classes are templatesfor JavaScript Objects.ক্ লাস হলো একটা কাঠামো যেমন ভাপা পিঠা বানানো র সেই ছো ট বাটি টার কথা মনে আছে ? অথবা যখন বিল্ ডিং বানায় তার আগে যে নকশা বা ব্ লু প্ রিন্ ট ডিজাইন করা হয় তেমনি ক্ লাস হলো একটা অবজেক্ ট বানানো র জন্ য একটা কাঠামো বা টেমপ্ লেট। তো এই কাঠামো যদি JavaScript দিয়ে লিখতে হয় তাহলে যে সিনট্ যাক্ স লিখতে হবে তাইনা ?
    এখানে প্ রথম ছবিটা হল ক্ লাস এর সিনট্ যাক্ স, ক্ লাস লিখতে হলে অবশ্ যই ছো ট হাতের class ব্ যাবহার করতে হবে এবং তার একটা নাম দিতে হবে, নাম বড় হাতের লেটার দিয়ে শুরু করা ভাল JavaScript শুধু ক্ লাস এর নাম বড় হাতের দিয়ে শুরু করা গুড প্ রাক্ টিস মনে করে। এবং এখানে অবশ্ যই constructor নামের(একদম সেম নামে লিখতে হবে) স্ পেশাল মেথড দিতে হবে, যেহেতু ক্ লাস একটা অবজেক্ ট এর কাঠামো মাত্ র, অবজেক্ ট টা কে তো বানাতে হবে এই বানানো র কাজটাই করে এই constructor মেথড আমরা যে অবজেক্ ট বানাইতে চাইতেছি তার property গুলো initialize করার কাজটা constructor মেথড করে থাকে।
class Car {
    constructor(carName,carPrice){
        this.name = carName
        this.price = carPrice
    }
}
এখানে স্ ক্ রিনশট খেয়াল করেন এইটা কিন্ তু একটা কাঠামো মাত্ র। আমি Car নামে একটা ক্ লাস কাঠামো বানিয়েছি, এখানে constructor স্ পেশাল মেথড এখানে তার name এবং price নামের২ টা initial properties আছে.এবং তার২ টা parameter আছে, এখনে একাধিক প্ যারামিটারএবং নাম যেভাবে ভেরিয়েবলে দিয়ে থাকি সেভাবেই দেয়া যাবে, এখনে this keyword টা আসলে যে অবজেক্ ট আমরা বানাবো সেটাইকেই বুজাইছে। যখন আমরা বাইরে থেকে কিছু ডাটা(argument value) সহ Car কাঠামো কে কল করবো তখন JavaScript constructor function কে automatic ভাবে কল করে দিবে। কাঠামো টা তখন একটা অবজেক্ ট হবে, কল না করলে অনেকটা ফাংশনের মত উপরের ছবিটার কো ড execute হবেনা। পরের স্ ক্ রিণশট এ যাই......
class Car {
    constructor(carName,carPrice){
        this.name = carName
        this.price = carPrice
    }
}
const bmw = new Car('Tesla', '$3000')
এবার দেখেন আমরা কি করছি, আমরা যে ক্ লাস কাঠামো টা বানিয়েছি সেটা কল করে দিছি, নতুন Object create তাই JavaScript এর new keyword ইউজ করছি এবং new keyword user defined object বানানো র জন্ য ব্ যাবহার করা হয়। last লাইন মেইনলি অবজেক্ ট টা বানায়, এর আগে একটা নকশা বা কাঠামো ছিল, এটা কল করার পর যখন নতুন অবজেক্ ট হয়ে গেল constructor method তখন automatically execute হয় এবং "Tesla" and "$3000" ভ্ যালু গুলো রিসিভ করে name এবং price properties এ এসাইন করে দেয়, this keyword এর মাধ্ যমে, এখনে this মেইনলি bmw নামের যে অবজেক্ ট টা হইছে তাকেই বুজায় আমরা যদি এখন console.log(bmw.name) করি তাহলে output আসবে Tesla.এখন চাইলে এই ক্ লাস কাঠামো ব্ যাবহার করে আর ও অনেক Object create করা যায়।
যেহেতু অব্ জেক্ ট create করতেছি আমরা জানি, অবজেক্ ট এর মধ্ যে বিভিন্ ন method থাকে, তাই আমরা চাইলে সেই কাঠামো তে / নকশায় method ও দিয়ে দিতে পারি।এখন পরের স্ কিনশট টা দেখেন....
 */
/* 
class Car {
    constructor(carName, carPrice) {
        this.name = carName
        this.price = carPrice
    }
    run() {
        console.log(`${this.name} is an amazing car and it costs ${this.price}`);
    }
}
const bmw = new Car('BMW', '$3000')
const audi = new Car('Audi', '$35000')
bmw.run()
audi.run()
 */

/* 
এখানে আমরা run() নামের একটা মেথড কাঠামো তে দিয়ে দিছি। আমরা যে নামে অবজেক্ ট টা বানাইছি, সেই নামের সাথে ডট দিয়ে আমরা তার property and method access করতে পারবো তাইনা ? এখানেও তাই করতেছি bmw.run() কল করলে সে এখন নিচের স্ কিনশটের মত আউটপুট দিবে..আপনে চাইলে এই run() মেথড এ প্ যারামিটার পাস করেও সেটা অন্ য কাজে লাগাতে পারেন।।।
এখানে templete string e যে this.name and this.price সেটা আপনে যে Object এর নাম ডট দিয়ে কল করবেন তার যে argument value দিয়েছিলাম সেটা acccess করবে, সেজন্ য আগেই বলেছিলাম যে this কিন্ তু যে object create করতেছি সেটাকেই বুজায়। তো বুজেই গেছেন যে ক্ লাস কিন্ তু Powerfull and Nice একটা জিনিস javaScript এ ঠিক ভাবে বুজতে পারলে... Output  দেখুন নিচে... */


