let obj = {id: 101, name: "akbar", salary: 10000};
let emp = new Object();
emp.id = 1334;
emp.name = "Arzo";
// console.log(emp);
// console.log(obj);

function Emp(i, n, s){
    this.id = i;
    this.name = n;
    this.salary = s;
}
const e = new Emp(108, "akbar", 15239);
// console.log(e);

// console.log(emp.id);
// console.log(emp["name"]);

obj.salary = 800000;
// console.log(obj);

// delete exp.id
// console.log(emp);

// Object methods 
let exp= {
    id: 500,
    name: "Akma", 
    age: 20
};
// For keys return
let keys = Object.keys(exp);
// console.log(keys) 

// For values return
let values = Object.values(exp);
// console.log(values);

// For both return values or keys 
let entries = Object.entries(exp);
// console.log(entries);

// For freeze 
// Object.freeze(exp);  // every thing going freeze 
Object.seal(exp);       // Only update available 
exp.address = "bahdinpur";
exp.id = 800; 
// console.log(exp);

// for assign 
let o = Object.assign({nana: "isha Mohammad"}, exp);
console.log(o);