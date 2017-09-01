var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];
var all = boys.concat(girls);
all.join('-');
all.push("Lone","Gitte");
all.unshift("Hans","Kurt");
var remove = all.shift();
all.pop();
all.splice (3,2);
all.reverse();
all.sort();
var Uppercase = all.map(function (x){
   x.toLocaleUpperCase();
   return x.toUpperCase();
})

var namesWhitI = all.filter(function(word){
    return word;
})

console.log(all);
console.log(Uppercase);
console.log(namesWhitI);