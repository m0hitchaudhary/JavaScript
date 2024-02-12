//won't write code for the basic if-else

//Switch - in case of switch statement we write the 'break' keyword to stop the execution and come out of the switch when a certain condition is met, or else all the statements will get executed like waterfall
//Main Point - wdout a break statement all the cases are executed except the 'default' case

//in JS there are certain falsy values, and all the other values remaining are truthy values;
//Falsy -- false, 0, "", '', -0, BigInt 0n, null, undefined, NaN

//Truthy values -- " ", ' ', 'false', '0', [], {}, function (){}


//Nullish Coalescing Operator (??) : special operator for 'null' and 'undefined'

//sometimes a particular variable is assigned a null or undefined value as a result of some function but we don't want the value of the variable to be false as it would affect the control flow of our program. So, to tackle this problem we have Nullish Coalescing Operator, which checks the assigned value and assigns another value if the latter is 'null' or 'undefined'

let var1 = null ?? 10
console.log(var1) //it will skip null and will assign 10 to var1

let var2 = 2 ?? 4
console.log(var2);//will print 2 as the 1st value isn't null or undefined

let var3 = undefined ?? 34
console.log(var3)

let var4 = null ?? undefined ?? 2
console.log(var4);