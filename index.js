/*function calc() {
    var n1 = parseInt(document.getElementById('n1').value)
    var n1 = parseInt(document.getElementById('n2').value)
    var oper = document.getElementById('operator').value

    if (oper === '+') {
      document.getElementById('result').value = n1 + n2
    }

    if (oper === '-') {
      document.getElementById('result').value = n1 - n2
    }

    if (oper === '/') {
      document.getElementById('result').value = n1 / n2
    }

    if (oper === '*') {
      document.getElementById('result').value = n1 * n2
    }
  }*/

  let result;
let n1= parseInt(prompt("enter first number"))
let n2= parseInt(prompt("enter second number"))
let oper= prompt("operation \n+\n-\n*\n/ ") 

if (oper === "+") {
  result= n1+n2
  
  console.log("ADDITION:",result);
} else if(oper==="-"){
  result= n1-n2
   console.log("SUBTRACTION:",result);

} else if (oper==="/"){
  result= n1/n2
  console.log("DIVISION:",result);

} else if (oper==="*"){
  result= n1*n2
  console.log("MULTIPLICATION:",result);
} else{
  console.log("operation is not available");
}

