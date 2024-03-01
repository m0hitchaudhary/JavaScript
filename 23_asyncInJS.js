//JS is a sync language(i.e., it works on single thread and the next task is performed if and only is the last one is completed).
//JS is slow bc of being single threaded

//But JS is always used with web APIs(such as node.js etc) which allows multi-threading

//There are two types of codes, (1) Blocking Code - the one which blocks the flow of the program until a task is completed. (2) Non-Blocking Code - the one which allows performing multiple taks at a time

//Both have thier own use cases

//Main JS compiler consists of 'call stack' and 'memory', but Web APIs and task queue are also added to make it multi-threaded. 


//-----------------Flow Of Execution---------------------//


//(1) First the call stack is made, then the functions are called one after the other.
//(2) Then the function is sent to the WEB APIs where it goes into the task queue while the other functions operate at normal pace.
//(3) When the task is completed then it pushed from task queue to the main call stack. Thus making the flow more smoother and multi-threaded.

//NOTE - fetch() have it's own task queue known as high-priority queue because it has promises in it.