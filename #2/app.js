const calculator = {
  ver : 1.0,
  add : function(a,b){
    console.log(a+ b)
  },
  minus : function(a,b){
    console.log(a - b)
  },
  multiply : function(a,b){
    console.log(a * b)
  },
  divide : function(a,b){
    console.log(a / b)
  }
}

calculator.add(2,7)
calculator.minus(12,42)
calculator.multiply(3222,47)
calculator.divide(232,37)
console.log(calculator.ver)