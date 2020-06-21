//chapter from 21 to 25
// Task no 1
//var a = prompt("Enter your first name");
//var b = prompt(" Enter your last name");
//var c = a+  ' ' +b;
//document.write(c)

//Task no 2

//var t2 = prompt("Which is your favourite mobile phone model")
//document.write(t2 + '   ')

//document.write("(The string lenght is)" + ' ')
//var ta2 = t2;
//document.write(ta2.length)

//Task no 3

//var t3 = "Pakistani"
//document.write(t3)
//document.write(" The index of n =")
//ta3 = t3.indexOf('n');
//document.write(ta3)

//Task no 4

//var t4 = "Hello world"
//document.write(t4)
//document.write(" The last index of l =")
//ta4 = t4.lastIndexOf('l');
//document.write(ta4)

//Task no 5

//var t5 = "Pakistani"
//document.write(t5)
//document.write(" Character at index 3=")
//ta5 = t5.charAt(3);
//document.write(ta5)


//Task no 6
//var a = prompt("Enter your first name");
//var b = prompt(" Enter your last name");
//var c = concat(a,b);
//document.write(c)


//Task no 7

//var t7 = "Hyderabad"
//var ta7 = t7.replace("Hyderabad","Islamabad");
//document.write(ta7)


//Task no 8

//var t8 = " “Ali and Sami are best friends. They play cricket and football together"
//var ta8 = t8.replace(/and/gi,"&");
//document.write(ta8)

//Task no 9

//var t9 = "472"
//document.write(t9)
//document.write("<br>")
//document.write(typeof t9)
//document.write("<br>")
//var ta9 = parseInt(t9)
//document.write(ta9)
//document.write("<br>")
//document.write(typeof ta9)


//Task no 10

//var t10 = prompt("Enter text")
//var ta10 = t10.toLocaleUpperCase();
//document.write(ta10)


//Task no 11


//var t11 = prompt("Enter text")
//var ta11 = t11.charAt(0).toLocaleUpperCase() + t11.slice(1);
//document.write(ta11)


//Task no 12

//var t12 = 35;
//document.write(t12)
//document.write("<br>")
//document.write(typeof t12)
//document.write("<br>")
//var ta12 = t12.toString();
//document.write(ta12)
//document.write("<br>")
//document.write(typeof ta12)


//Task no 13



    // var t13 = prompt("Enter your Name"); 
    //  t13 = t13.toLowerCase(); 
    //  var ta13 = ["!", ".", ",", "&", "@"]; 
    // for (var i = 0; i <= 4; i++) {  
    //      if (t13 === ta13[i]) { 
                 
    //      alert("Enter a valid name");  
    //      break; 
    //     } else{
    //         document.write(t13)
    //         break;
        
    //     }
    // }



//Task no 14
// var t14 = prompt("Welcome to ABC Bakery. What do you want to order sir/mam");
// var ta14 = ["cake", "apple pie", "cookie", "chips", "patties"];
// for (var i = 0; i <= t14.length; i++){
//     if(t14 === ta14[i]){
//         alert(("This is available in our bakery"));
//         break;
//     }
//     else if(t14 !== ta14[i]){
//          alert("we are sorry. Your entered item is not avialable in our bakery")
//          break;
//     }
// }


//Task no 15

// var inputtxt = prompt("enter password")
// var passw=  /^[A-Za-z]\w{7,14}$/;
// if(inputtxt === (passw)) 
// { 
// alert('Correct, try another...')

// }
// else
// { 
// alert('Wrong...!')

// }


    

//Task no 16

//var university = "University of karachi"
//var t16 = university.split("");
//document.write(t16)

//Task no 17

//var t17 = prompt("Enter text"); 
//var ta17 = t17.charAt(t17.length - 1);
//document.write(ta17)


//Task no 18







// function count(main_str, sub_str) 
// {
// main_str += '';
// sub_str += '';

// if (sub_str.length <= 0) 
// {
//     return main_str.length + 1;
// }

//    subStr = sub_str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
//    return (main_str.match(new RegExp(subStr, 'gi')) || []).length;
// }
// document.write(count("The quick brown fox jumps over the lazy dog", 'the'));





//From chapter 26 to 30


//Task no 1

// var t1 = prompt("input positive integer");
// document.write(t1);
// document.write("<br>");
// var ta1 = Math.round(t1);
// document.write(ta1);
// document.write("<br>");
// var tas1 = Math.floor(t1);
// document.write(tas1);
// document.write("<br>");
// var task1 = Math.ceil(t1);
// document.write(task1);


//Task no 2


//  var t2 = prompt("input negative floating point number");
//  document.write(t2);
//  document.write("<br>");
//  var ta2 = Math.round(t2);
//  document.write(ta2);
//  document.write("<br>");
//  var tas2 = Math.floor(t2);
//  document.write(tas2);
//  document.write("<br>");
//  var task2 = Math.ceil(t2);
// document.write(task2);


//Task no 3


// var t3 = -4;
// var ta3 = Math.abs(-4);
// document.write(ta3);


//Task no 4


// var t4;
// var ta4;
// var i;
// ta4 = prompt("How many time do you want to roll the dice?",5);

// for (i=1; i<=ta4; i++){
//     t4 = Math.ceil(Math.random() *6);
//     document.writeln(t4+"<br>");
// }
// document.writeln("-------Finished---------");



//Task no 5


// var t5 = Math.floor(Math.random() * 2) +1;

// var ta5 = Math.floor(Math.random() * 2) +1;

// if( t5 === ta5){
//    document.write('You Got TAIL'+" ",t5);
//  }else{
//    document.write('You Got HEAD'+" ",ta5);
//  }


//Task no 6



// var t6 = Math.floor((Math.random() * 100) + 1);
// document.write("The random number between 1 and 100 is"+" ",t6);


//Task no 7


//task 7
//var weight=window.prompt("Enter your weight in kilograms");
//var value=parseFloat(weight);
//document.write("The weight of user is " + value+" kilograms");


//Task no 8


// var num = Math.ceil(Math.random() * 10);
// document.write(num);
// var gnum = prompt('Guess the number between 1 and 10 inclusive');
// if (gnum == num) document.write('Matched'+" ");
// else document.write('Not matched, the number was ' + gnum);


//From chapter 31 to 34


//Task no 1


// var today = new Date();
// var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
// var t1 = new Date();
// var time = t1.getHours() + ":" + t1.getMinutes() + ":" + t1.getSeconds();
// document.write(date)
// document.write(time)


//Task no 2



// const monthNames = ["January", "February", "March", "April", "May", "June",
//   "July", "August", "September", "October", "November", "December"
// ];

// const d = new Date();
// document.write("The current month is " + monthNames[d.getMonth()]);


//Task no 3


// var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
// var d = new Date();
// var dayName = days[d.getDay()];
// document.write(dayName);


//Task no 4



// var today = new Date();
// if(today.getDay() == 6 || today.getDay() == 0) alert('Its Funday');



//Task no 5


// var t5 = new Date();
// if(t5.getDate() <=15){
//     alert("its first 15 day of month")
// }else{
//     alert("last 15 days of month")
// }



//Task no 6


// var today = new Date();
// var a = today.getTime();
// var b = a / 60000;
// document.write("Current date = " + " " + today);
// document.write("<br>");
// document.write("Elapsed miliseconds since 1 Jaunuary 1970 " + " " + a);
// document.write("<br>");
// document.write("Elapsed minutes since 1 Jaunary 1970" + " " + b);
// document.write("<br>");






//Task no 7


// var t7 = new Date();
// if(t7.getHours() <=11){
//     alert("Its AM")
// }else{
//     alert("Its PM")
// }



//Task no 8


//var laterdate = new Date("Dec 31, 2020");
//document.write("Later date: "+laterdate);


//Task no 9

// var today = new Date();
// var t9 = today.setDate(18);
// var a= today.setMonth(5);
// var b = today.setFullYear(2015);
// var c = a + t9 + b;
// var ta9 = today.getDay();
// var tas9 = ta9 - c;
// document.write(a);

// var d = new Date(); 
//  d.setDate(15);
//  document.write(d)
//  var a = new Date(); 
//  a.setMonth(5);
//  document.write(a)

//  var c = new Date(); 
//  c.setFullYear(2015);
//  document.write(c)
//  var m = d + a + c;
//  document.write(m)







//Task no 11


// var today = new Date();
// var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
// var t1 = new Date();
// var time = t1.getHours() + ":" + t1.getMinutes() + ":" + t1.getSeconds();
// document.write("current date = " + " ")
// document.write(date + " ")
// document.write(time)
// document.write("<br>")
// time2 = t1.getHours() -1 + ":" + t1.getMinutes()  + ":" + t1.getSeconds();
// document.write("I hour ago, it was" + " ")
// document.write(date + " ")
// document.write(time2)



//Task no 12


// var today = new Date();
// var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
// var t1 = new Date();
// var time = t1.getHours() + ":" + t1.getMinutes() + ":" + t1.getSeconds();
// document.write("current date = " + " ")
// document.write(date + " ")
// document.write(time)
// document.write("<br>")
// var date2 = today.getFullYear() -100 +'-'+(today.getMonth()+1)+'-'+today.getDate();
// document.write("100 Years back, it was" + " ")
// document.write(date2 + " ")
// document.write(time)




//Task no 13
// var today = new Date();
// var t13 = prompt("Enter your age ",22)
// var date = today.getFullYear() - t13;
// document.write("Your birth year =" + " " + date)

//Task no 14










// var today = new Date;
// var t14 = prompt(" Enter your customer name to know about your bill");
// var date = today.getMonth();
// var ta14 = prompt("Enter this month unit");
// var cpu = 16;
// var nap = ta14*cpu;
// var lps = nap / 30;
// var gap = nap + lps;
// document.write("Customer name ="+ " "+ t14);
// document.write("<br>");
// document.write("Month =" + " " + date);
// document.write("<br>");
// document.write("Number of units" + " " + ta14);
// document.write("<br>");
// document.write("charges per unit = 16");
// document.write("<br>");
// document.write("Net amount payable = "+ " " + nap);
// document.write("<br>");
// document.write("Late payment surcharge" + " " + lps);
// document.write("<br>");
// document.write("Gross amount payable =" + " " + gap);




//From Chapter 35 to 38


//Task no 1


// function tellTime() { 
// var now = new Date(); 
// var theHr = now.getHours(); 
// var theMin = now.getMinutes(); 
// alert("Current time: "+ theHr + ":" + theMin); 
// }
// tellTime();


// Task no 2


// function greetings(){
//     var t2 = prompt(" Enter your first name" + " ");
//     var ta2 = prompt ("Enter your last name");
//     var tas2 = t2 + ta2;
//     alert("Greetings " + " " + tas2);
// }
// greetings();


// Task no 3


// function sum(){
//     var t3 = prompt("Enter first number");
//     var a = parseInt(t3);
//     var ta3 = prompt("Enter second number");
//     var b = parseInt(ta3);
//     var tas3 = a + b;
//     alert(" Sum of your given number =" + " " + tas3);
// }
// sum();


//Task no 4


// function cal(){
// var t4 = prompt("Enter first number");
// var a = parseInt(t4);
// var ta4 = prompt("Enter operator");
// var tas4 = prompt("Enter second number");
// var b = parseInt(tas4);
// if (ta4 === '+'){
//     alert(a + b);

// }else if(ta4 === '-'){
//     alert(a-b);
// }else if(ta4 === '*'){
//     alert (a * b);
// }else if(ta4 === '/'){
//     alert(a/b);
// }else{
//     alert("Enter correct operaotr")
// }
// }
// cal();



//Task no 5


// function square() {
//     var a = prompt("Enter number");
//     alert(a*a);
//   }
//   square();



//Task no 6


// function factorialize(num) {
//     if (num < 0) 
//           return -1;
//     else if (num == 0) 
//         return 1;
//     else {
//         return (num * factorialize(num - 1));
//     }
//   }
//   factorialize(5);


//Taskn no 7


// function sum1()
// {
// var a = prompt("Enter number")
// var SecondNumber = parseInt(a);
// var result=(SecondNumber *(SecondNumber +1))/2;
// alert(result);
// }



//Task no 8


// function calcHypotenus(base,  per) {
//     return Math.sqrt(base*base  + per*per) ;
// }
// alert(calcHypotenus(45,56));


//Task no 9


// function myFunction() {
  
//     var length = prompt("Enter a whole number for the length of your rectangle.");
//     var width = prompt ("Enter a whole number for the width of your rectangle.");

    
       
    
//     var area= length * width ;
    
    
//      document.write("Area of rectangle:"  + area);
   
     
            
    
            
//     }
// myFunction();



//Task no 10


// function palindrome() {
//     var str = prompt("Enter string")
//     var re = /[\W_]/g;
//     var lowRegStr = str.toLowerCase().replace(re, '');
//     var reverseStr = lowRegStr.split('').reverse().join(''); 
//     document.write(reverseStr === lowRegStr)
//   }
//   palindrome();



//Task no 11


// function uppercase(str)
// {
//   var array1 = str.split(' ');
//   var newarray1 = [];
    
//   for(var x = 0; x < array1.length; x++){
//       newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//   }
//   return newarray1.join(' ');
// }
// document.writeln(uppercase("the quick brown fox"));


//Task no 12


// function find_longest_word()
// {
//   var str = prompt("Enter multiple wors")
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   return result;
// }
// document.write(find_longest_word('Web Development Tutorial'));


// Task no 13


// function char_count(str, letter) 
// {
//  var letter_Count = 0;
//  for (var position = 0; position < str.length; position++) 
//  {
//     if (str.charAt(position) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }

// console.log(char_count('hello', 'o'));


// Task no 14
























