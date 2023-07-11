function sortNames(arr){
    arr.sort();
    for (let index = 0; index < arr.length; index++) {
        let num = index + 1;
        console.log(num + "." + arr[index])
    }
}

sortNames(["John", "Bob", "Christina", "Ema"])


function solve(params) {
    params.sort(function (a, b) {
      return a.localeCompare(b, undefined, { sensitivity: "base" });
    });
  
    for (let i = 0; i < params.length; i++) {
      let element = params[i];
      console.log(`${i + 1}.${element}`);
    }
  }