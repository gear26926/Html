//1.Function that counts the number of charaters
function mystringcount()
{  
	string="I am learning Automation Testing!"
	NumOfChar=string.length; 
onsole.log(NumOfChar);     
}       
mystringcount();

//2.Function that returns the largest number of the two numbers
var x = mybiggest (100,1);

function mybiggest(a,b) {
     if (a>b) {
         return a;
     }
         else
            return b;
    }
    
console.log(x);

//3.Function that returns a boolean flag if a number is between 5000 and 9999
var x = myFlag (6321);

function myFlag(number) 
{
     if (number > 5000 && number < 9999 ) 
     
     {
         return true;
     }
         else
            return false;
}
    
console.log(x);

//4.Function that returns a cuberoot of the number
function cuberoot(a)
{
    var x=Math.cbrt(a);
    return x;
   
}
console.log('cube root is'+' ' + cuberoot(125));

//5.Function to convert inches to feet
var x = myInchestoFeet(12);

function myInchestoFeet(a) 
{
    b = a/12;
    return b;
}

console.log(x);

//6.Function to convert degrees to Fahrenheit
var z = myDegtoFahrenheit(30);

function myDegtoFahrenheit(a)
{
    b = (a*1.8)+32;
    return b;
}

console.log(z);

//7.Function to convert Kg to Lb and
function mykilotopound(k)
{
    var p = k * 2.20;
    return p;
}


function mypoundtokilo(p)
{

    var k = p/2.20;
     return k;
}
console.log('Kgtopound '+' '+ mykilotopound(58)+ 'kg');
console.log('PoundtoKg ' +' '+ mypoundtokilo(128)+ 'lb');

//8.US states with properties
const USstates = {
    "Pennsylvania": 
        {"State Abbreviation" : "PA",
         "Capital" : "Harrisburgh",
         "Region": "North East",
         "Time zone": "Eastern",
         "Most Popular city": "Philadelphia",
         "Year of Admission": "1787",
         "Population": "13,002,700",
         "Total area": "46054.34",
         
    },

    
     "NewYork": 
        {"State Abbreviation": "NY",
        "Capital": "Albany",
        "Region": "North East",
        "Time zone": "Eastern",
        "Most Popular city": "New York city",
        "Year of Admission": "1788",
        "Population": "20,201,249",
        "Total area": "54,554.98",

        },
        
    "Texas": 
        {"State Abbreviation" : "TX",
         "Capital" : "Austin",
         "Region": "South",
         "Time zone": "Central",
         "Most Popular city": "Houston",
         "Year of Admission": "1845",
         "Population": "13,28,701,845",
         "Total area": "268,596.46",
         
    },

    
     "California": 
        {"State Abbreviation": "CA",
        "Capital": "Sacramento",
        "Region": "Pacific",
        "Time zone": "Pacific",
        "Most Popular city": "Los Angeles",
        "Year of Admission": "1850",
        "Population": "39,557,045",
        "Total area": "163,694.74",

        }
    

}

console.log(USstates.Pennsylvania["Time zone"]); 
console.log(USstates.NewYork.Region); 
console.log(USstates.Texas["Total area"]); 
console.log(USstates.California.Population); 
console.log(USstates);

//9.JS object for cricket team
const CricketTeam = {

    "Players" :["Virat", "Rohit","Rahul"],
    "Bowlers":["A","B"],
    "Batsmen": ["C","D"],
    "Allrounders": ["E","F"],
    "Total matches": 100,
    "Player1":{
           "Fullname":"Virat Kohli",
            "T20matchesplayed":1000,
            "Onedaymatchesplayed":5000,
            "IPL team":"Royal Challengers" 
        },
    "Player2":{
            "Fullname":"Rohit Sharma",
            "T20matchesplayed":654,
            "Onedaymatchesplayed":2001,
            "IPL team":"Mumbai Indians" 
          },

     "Player3":{
            "Fullname":"KL Rahul",
            "T20matchesplayed":333,
            "Onedaymatchesplayed":1001,
            "IPL team":"Super Giants" 
          },
    "Intmatches":"101,234",
    "Worldcupmatches":200,
    "Worldcupwon":2
    }

    console.log(CricketTeam.Bowlers);
    console.log(CricketTeam.Player1.Fullname);
    console.log(CricketTeam.Player2.T20matchesplayed);
    console.log(CricketTeam.Player3["IPL team"]);
    console.log(CricketTeam.Intmatches);
    console.log(CricketTeam);

//10.Function that returns the longest string if two strings are passed 
function longestString(a, b) {
    if (a.length > b.length)
        return a;
    return b;
}
console.log(longestString("BDD Automation","Testing"));


//11.Function that returns the shortest string
var arrayList  = ["aaaa", "aaa", "a", "aa", "aaaaa","aaaaaa"];

var shortest_string = arrayList.reduce(function(a, b) 
{
     return a.length <= b.length ? a : b;
})
console.log(shortest_string);