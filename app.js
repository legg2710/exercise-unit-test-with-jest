let oneEuroIs = {
    "USD": 1.206,
    "JPY": 127.9,
    "GBP": 0.8,
}


function fromEuroToDollar(a){
  return a * oneEuroIs["USD"]

}


const dollars = fromEuroToDollar(1000)

console.log(dollars)
