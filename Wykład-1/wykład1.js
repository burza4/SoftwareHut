const zm1 = "Abc"; // zmienna stała 
var zm2 = "xD"; // zmienna przestarzała 
let zm3 = "hello"; // zmienna 

// typy danych 

let n = 123; // numeryczna 
n = 12.345;

let n2 = "Ala    ma    kota        "  // string
console.log(n2.charCodeAt(1));
console.log(n2.charAt(1));
console.log(n2.toLowerCase());
console.log(n2.toUpperCase());
console.log(n2.trim());
console.log(n2.concat(" ","abc"));
console.log("Wiesz że" + n2);
let x = 78;
console.log(`Liczba ${x}`);
let n3 = true;// typ boolean

if(1 == "1") // porównanie wartości ingorujące typy
{
    console.log("XDDD");
}
if(1 === "1") // porównanie wartości uwzględniające typy
{
    console.log("LOOOOOL");
}

// funkcje 
function name1(xD) {
    
}
const  name2 = function () {
    
}
const  name3 =  () => {}
     