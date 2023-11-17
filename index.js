//function greeting(greet){
   // return function (name){
       // console.log(`${greet} ${name}`)
   // }
//}
//let greetingSon = greeting('Hi')
  //  greetingSon('Alison')


 /* const countNumber = function(){
    let count =o;

    return function(){
        count ++
        console.log(`${count} number`)
    }
  }
  let counter = countNumber();
  counter();
  counter();
  counter();*/

  var createFunction = function(){
    var array = []

    for (let i = 0; i < 5; i++ ){
        array.push(() =>console.log(i))
        }
        return array;
    }
    
    let arr = createFunction()
    arr[0]();
    arr[1]();
    arr[2]();
    arr[3]();
    arr[4]();