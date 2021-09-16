// hoisting is the orders of the code, so, var must be above console.log 

var magicalUnicorns = "Rapidash";



console.log(magicalUnicorns);


var foo;                  
function magic(){        
    var foo;              
    foo = "hello world";  
    console.log(foo);    
}                       
foo = "bar";              
magic();                  
console.log(foo);         