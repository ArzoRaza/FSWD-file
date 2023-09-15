function firstprm() {
    console.log("Arzoo raza");
    console.log("Nagma Khatoon");
}
function sqr(x){
    // console.log(x*x);  // parameters
    // return x*x;
}
// firstprm();

// let a = sqr(8);  // 8 arguments
// console.log(a);
// sqr(4);

// default parameters
function add(x = 13, y = 88) {
    return x + y;
}
// console.log(add());


// anonymouse functions 
let x = function(){
    console.log("Arzo")
}
// x();
  

// (function abc() {
//     console.log("ArzooNagma");
// // })();

(function(x) {
    console.log(x*x); 
})
// (5);


