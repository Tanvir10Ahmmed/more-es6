/* 
// ১. কখন const আর কখন let দিয়ে ভেরিয়েবল ডিক্লেয়ার করতে হয় সেটা তোমাকে জানতেই হবে। তুমি নিজে নিজে একটা const দিয়ে আরেকটা let দিয়ে ভেরিয়েবল ডিক্লেয়ার করে ফেলো।
const amarBou = 'Samiya Satu'
let amarSele = 'Abdullah'
amarSele = "Abdur Rahman"
// ২. টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং তৈরি করো। সেটার মধ্যে উপরে ডিক্লেয়ার করা ভেরিয়েবল এর মান ডাইনামিক ভাবে বসাও। একইভাবে উপরে একটা অবজেক্ট ডিক্লেয়ার করো। এবং ডাইনামিকভাবে উপরের অবজেক্ট এর দুইটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও। 
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
}
];
console.log(`amar bou ${amarBou} amar sele ${amarSele} tar ekta ${products[2].name} ase dam ${products[2].price}`);
// ৩.১ একটা প্যারামিটার ওয়ালা arrow ফাংশন ডিক্লেয়ার করো। এবং সেই ফাংশনের কাজ হবে তুমি কোন ইনপুট দিলে সেই ইনপুট সংখ্যাকে ৫ দিয়ে ভাগ করে আউটপুট দিবে।
const singleParam = param => param * 5;
console.log(`five times of 10 is ${singleParam(10)}`);
// ৩.২ তুমি দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। সেই ফাংশনের ভিতরে কাজ হবে। প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো 
const dblParam = (param1,param2) => (param1+2) * (param2+2)
console.log(`the result is ${dblParam(1,1)}`);
// ৩.৩ এইবার তিনটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করো। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটারকে গুণ করে সেই রেজাল্ট রিটার্ন করবে। 
const tripleParam = (param1,param2,param3) => param1 * param2 * param3
console.log(`the result is ${tripleParam(2,2,2)}`);
// ৩.৪ এইবার দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন নিবে। ওই arrow ফাংশনটা হবে অনেকগুলা লাইনের। সেখানে প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো। 
const getResult = (param1,param2) => {
    let x = param1 + 2;
    let y = param2 + 2;
    return  x * y;
}
console.log(`the result is ${getResult(1,1)}`);
// ৫. অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৫ দিয়ে গুন্ করে গুনফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে। 
const numbers = [5, 13, 7, 41, 30, 5, 2, 19];
const arrayMulti5 = numbers.map(element => element * 5)
console.log(arrayMulti5);
// ৬. [ চ্যালেঞ্জিং। গুগলে সার্চ দিয়ে বের করো ] অনেকগুলা সংখ্যার একটা array থেকে শুধু বিজোড় সংখ্যা বের করে নিয়ে আসার জন্য filter ইউজ করো 
const numbers2 = [50, 103, 70, 401, 300, 50, 25, 195];
const oddNums = numbers2.filter(element => element % 2 != 0)
console.log(oddNums);
// ৭. একটা array এর মধ্যে অনেকগুলা অবজেক্ট আছে। সেখানে যেই অবজেক্ট এর price আছে ৫০০০ টেক্কা সেই অবজেক্টকে find দিয়ে বের করো। 
const products2 = [{
    name: 'water bottle',
    price: 50,
    color: 'yellow'
},
{
    name: 'mobile phone',
    price: 5000,
    color: 'black'
},
{
    name: 'smart watch',
    price: 3000,
    color: 'black'
}
];
const price5000 = products2.find(element => element.price == 5000)
console.log(price5000);
// ৭.৫ [এক্সট্রা] জাভাস্ক্রিপ্ট এ array এর map, forEach, filter, find কোনটা দিয়ে কি হয়। সেটার একটা সামারি লিখে ফেলো। 
        // MAP এর বাংলা তর্জমাঃ console তুমি output রে পাইতে চাও? তাইলে এক কাজ কর variable এর তল্লাশি চালাও তার map দেখ তার element রে ধর তাদের কে ধইরা ধইরা operation কর ,  তারপর তাদের কে নিজের array এর ভিতরে return নাও অর্থাৎ output হবে array 
        // forEach এর বাংলা তর্জমাঃ console তুমি output রে পাইতে চাও? তাইলে এক কাজ কর variable এর তল্লাশি চালাও তার forEach and every element দেখ তার element রে ধর তাদের কে ধইরা ধইরা operation কর ,  তারপর তাদের কে return না করিয়ে console.log / অন্য কিছু কর
        // বাংলা তর্জমাঃ console তুমি output রে পাইতে চাও? তাইলে এক কাজ কর variable এর তল্লাশি চালাও তারে filter কইরা দেখ তার element রে ধর তাদের কে ধইরা ধইরা চেক কর শর্ত মানলে নিজের array এর  মধ্যে ঢুকায়া নাও নইলে ignore  কর অর্থাৎ output হবে array
        // বাংলা তর্জমাঃ console তুমি output রে পাইতে চাও? তাইলে এক কাজ কর variable এর তল্লাশি চালাও তারে find কইরা দেখ তার element রে ধর তাদের কে ধইরা ধইরা চেক কর শর্ত মানলে নগদে নেক্সট স্টেপে প্রসেসিং কর অর্থাৎ output array হবে না
// ৮. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো। 
const gadgets = {
    name: 'smart watch',
    price: 3000,
    color: 'black'
}
const {name} = gadgets
console.log(name);
// ৯. [চ্যালেঞ্জিং] array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর থার্ড পজিশন এর উপাদান কে destructuring করে 'three' নামক একটা ভেরিয়েবল এ রাখবে। 
const products3 = [{
    name: 'water bottle',
    price: 50,
    color: 'yellow'
},
{
    name: 'mobile phone',
    price: 5000,
    color: 'black'
},
{
    name: 'smart watch',
    price: 3000,
    color: 'black'
}
];
const [one,two,three] = products3
console.log(three);
// ১০. তিনটা প্যারামিটার ওয়ালা একটা ফাংশন লিখবে। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটার এর যোগ করে যোগফল রিটার্ন করবে। আর থার্ড প্যারামিটার এর একটা ডিফল্ট ভ্যালু থাকবে। সেটা হবে ৭। 
// conventional function
function doSolve(params1,params2,params3 = 7) {
    return params1 + params2 + params3;
}
console.log(`conventional function ${doSolve(1,2,3)}`);
console.log(`conventional function one argument missed ${doSolve(4,5)}`);
// arrow function
const doSolv = (params1,params2,params3 = 7) => params1 + params2 + params3
console.log(`arrow function ${doSolv(10,20,30)}`);
console.log(`arrow function one argument missed ${doSolv(40,50)}`);
// ১১. একটা nested অবজেক্ট ডিক্লেয়ার করো (অর্থাৎ একটা অবজেক্ট এর প্রপার্টি এর মধ্যেও যে অবজেক্ট থাকতে পারে। আবার সেই অবজেক্ট এর প্রপার্টি এর মধ্যেও সে অবজেক্ট থাকতে পারে। সেই রকম একটা অবজেক্ট ডিক্লেয়ার করো। এবং যেকোন একটা প্রপার্টি এর মান একটা array হবে। জাস্ট এমন একটা অবজেক্ট )
var data = {
    code: 42,
    items: [{
        id: 1,
        name: 'foo'
    }, {
        id: 2,
        name: 'bar'
    }]
};
const {code,items} = data;
console.log(code,items);
const [id,names] = data.items
console.log(id,names);
 */
// ১২. উপরের অবজেক্ট এ ডট এর আগে যে প্রশ্নবোধক চিহ্ন দিয়ে যে অপশনাল চেইনিং করা যায়। সেটা একটু প্রাকটিস করো। 


