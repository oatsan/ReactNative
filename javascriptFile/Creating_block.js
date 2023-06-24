let a =1;
/* console.log("Top level");
console.log("a = " + a); */

//Create new block
{
    let b = 2;
    console.group("Inside block");
    console.log("a = " + a);
    console.log("b = " + b);
}