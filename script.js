//!Question No.1
let objA = { name: "person 1", age: 5 };
let objB = { age: 5, name: "person 1" };
let stringA = JSON.stringify(objA);
let stringB = JSON.stringify(objB);
if (stringA === stringB) {
  console.log("Objects are equivalent");
} else {
  console.log("Objects are not equivalent");
}

//!Question No.02
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all","TRUE")
request.send();
request.onload= function(){
     var data= request.response;
     console.log(data);
     var result =JSON.parse(data);
     console.log(result);
     for(var i=0;i<result.length;i++){
        console.log(result[i].flags)
        
     }
}

//!Question No.03
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all","TRUE")
request.send();
request.onload= function(){
     var data= request.response;
     console.log(data);
     var result =JSON.parse(data);
     console.log(result);
     for(var i=0;i<result.length;i++){
        console.log(result[i].name.common)
        console.log(result[i].region)
        console.log(result[i].subregion)
        console.log(result[i].population)
     }
}






