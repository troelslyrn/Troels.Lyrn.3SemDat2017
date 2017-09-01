 //Observe: no return type, no type on parameters
 function add(n1, n2){
    return n1 +n2;
 }
 
 var sub = function(n1,n2){
    return n1 - n2
  } 

  var cb = function(n1,n2, callback){
    return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2);
  };
  //console.log( add(1,2) ) //de 2 tal lægges sammen.
  //console.log( add )  // der sker ikke noget andet ed at den viser at function add virker, men der er intet at adde
  //console.log( add(1,2,3) ) //de 2 foreste tal lægges sammen, da der ujje er en n3 såfremtreder denne ikke i løsningen
//  console.log( add(1) );
 // console.log( cb(3,3,add) );  //her benyttes cd og n1 vil agere 3 og n2 vil gere 3, derfor bliver resultater 6 
  //console.log( cb(4,3,sub) );  // sub fungere som minus på samme måde som add fungere som plus
 //console.log(cb(3,3,add()));   //dette vil ikke copile da den indenholder en syntaxt / logik fejl. () 
  //console.log(cb(3,"hh",add));  // n1 som i dette tifælde er 3 vil blive lagt sammen med "hh" som er en string, hvilket resultere i 3hh

  
  var names = ["Lars", "Jan", "Peter", "Bo", "Frederik", "Lis","Hanne", "Brounhilde"];
  var nameslength6 = names.filter(function(word){
    return word.length > 6;
  })
console.log(nameslength6);

var Uppercase = names.map(function (x){
  x.toLocaleUpperCase();
  return x.toUpperCase();
})
console.log(Uppercase);


var cars = [
  { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
  { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
  { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
  { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
  { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];


 var carnew = cars.filter(function(car1999){
   return car1999.year ===1999;
 }) 
  //console.log(carnew);

  var carVolvo = cars.filter(function(volvooo){
    return volvooo.make === "Volvo";
  })

  //console.log(carVolvo);

  var carprice = cars.filter(function(pricecar){
    return pricecar.price >5000
  })
 // console.log(carprice);
  
  var ultimatecar = cars.filter(function(Ulcar){
    return Ulcar.year===2005 , Ulcar.make ==="Volvo", Ulcar.price >5000
  })
  console.log(ultimatecar);

  INSERT INTO cars (id,year,make,model,price) VALUES ( 1, 1997 'Ford','E350', 3000 );