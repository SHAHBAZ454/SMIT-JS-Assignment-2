//* ALERT TASK CHAPTER 5

// !Q 1 . Write a program that take two numbers & add them in a new variable. Show the result in your browser.
// ?var addition = (3 + 5);
// ?var text1 =("Sum of 3 and 5 is ");
// ?document.write(text1 + addition);

// !Q 2 . Repeat Q1 for subtraction, multiplication, division & modulus.
// For Subtraction
// ?var subtraction = (3 - 5);
// ?var text2 =("Subtraction of 3 and 5 is ");
// ?document.write(text2 + subtraction);

// For Multiplication
// ?var multiplication = (3 * 5);
// ?var text3 =("Multiplication of 3 and 5 is ");
// ?document.write(text3 + multiplication);

// For Division
// ?var division = (3 / 5);
// ?var text4 =("Division of 3 and 5 is ");
// ?document.write(text4 + division);

// For Modulus
// ?var modulus= (3 % 5);
// ?var text5 =("Modulus of 3 and 5 is ");
// ?document.write(text5 + modulus);

// !Q 3 . Do the following using JS Mathematic Expressions
// !a. Declare a variable.
// !b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
// !c. Initialize the variable with some number.
// !d. Show the value of variable in your browser like “Initial value: 5”.
// !e. Increment the variable.
// !f. Show the value of variable in your browser like “Value after increment is: 6”.
// !g. Add 7 to the variable.
// !h. Show the value of variable in your browser like “Value after addition is: 13”.
// !i. Decrement the variable.
// !j. Show the value of variable in your browser like “Value after decrement is: 12”.
// !k. Show the remainder after dividing the variable’s value by 3.
// !l. Output : “The remainder is : 0”.
// For "a"
// ?var x=;

//  For "b"
// ?document.write(" Value after variable declaration is "+ x);

// For "c"
// ?var x=5;

// For "d"
// ?document.write("<br>Initial value: " + number);

// For "e and f"
// ?var x=5;
// ?var y=++x;
// ?document.write("<br>Value after increment is: "+y)

// For "g and h"
// ?var y=6;
// ?var z=y+7;
// ?document.write("<br>Value after addition is: "+z)

// For "i and j"
// ?var z=13;
// ?var p=--z;
// ?document.write("<br>Value after decrement is: "+p)

// For "k and l"
// ?var p=12;
// ?var q=p%3;
// ?document.write("<br>The remainder is : "+q)

// !Q 4 . Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate
//!the cost of buying 5 tickets to a movie.
// ?var price=600;
// ?var tickets=5*price;
// ?document.write("Total cost to buy 5 tickets to a movie is "+tickets+"PKR");

// !Q 5 Write a script to display multiplication table of any number in your browser.
// ?var x = 10;
// ?for (i=1 ; i<=10; i++){
// ?let y = `${x} X ${i} = ${x*i} <br/>`
// ?document.write(y)};

// !Q 6 The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
// !a. Store a Celsius temperature into a variable.
// !b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// !c. Now store a Fahrenheit temperature into a variable.
// !d. Convert it to Celsius & output “NNoF is NNoC”.
// For "a and b"
// ?var CNNoC = 25;
// ?var NNoF= (25*9/5)+32;
// ?document.write(CNNoC+ "&deg;C" + " is " + NNoF + "&deg;F");

// For "c and d"
// ?var NNoF =  70;
// ?var CNNoC= (70-32)*5/9;
// ?document.write(NNoF+ "&deg;F" + " is " + CNNoC + "&deg;C");

// !Q 7 Write a program to implement checkout process of a shopping cart system for an e - commerce website.
// !Store the following in variables
// !a.Price of item 1
// !b.Price of item 2
// !c.Ordered quantity of item 1
// !d.Ordered Quantity of item 2
// !e.Shipping charges
// !Compute the total cost & show the receipt in your browser.
// ?document.write("<h1>Shopping Cart</h1>");
// ?var item1=650;
// ?document.write("<br>Price of item 1 is "+item1);
// ?var item3quantity=3;
// ?document.write("<br>Quantity of item 1 is "+item3quantity);
// ?var item2=100;
// ?document.write("<br>Price of item 2 is "+item2);
// ?var item2quantity=7;
// ?document.write("<br>Quantity of item 2 is "+item2quantity);
// ?var charges =100;
// ?document.write("<br>Shipping Charges "+charges);
// ?var total =(item1*item3quantity+item2*item2quantity+charges);
// ?document.write("<br><br>Total cost of your order is "+total);

// !Q 8 . Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in
// !your browser.
// ?document.write("<h1>Marks Sheet</h1>");
// ?var totalMarks =980;
// ?document.write("<br>Total marks: "+totalMarks);
// ?var obtainedMarks=804;
// ?document.write("<br>Marks obtained: "+obtainedMarks);
// ?var totalPercentage = 804/980*100;
// ?document.write("<br>Percentage: " + totalPercentage+"%");

// !Q 9 . Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees.
// !Perform all calculations in a single expression.
// !(Exchange rates : 1 US Dollar = 305.00 Pakistani Rupee
// !and 1 Saudi Riyal = 81.32 Pakistani Rupee)
// ?document.write("<h1>Currency in PKR</h1>");
// ?var USDollars =10;
// ?var SaudiRiyals =25;
// ?var USDtoPKR=305.00;
// ?var SARtoPKR=81.32;
// ?var PakistaniRupees =(USDollars*USDtoPKR + SaudiRiyals*SARtoPKR);
// ?document.write("<br>Total Currency in PKR: " + PakistaniRupees);

// !Q 10 . Write a program to initialize a variable with some number and do arithmetic in following sequence:
// !a. Add 5
// !b. Multiply by 10
// !c. Divide the result by 2
// !Perform all calculations in a single expression.
// ?var number=12;
// ?var result=(number+5)*10/2;
// ?document.write("TOTAL: "+ result)

// !Q 11 . The Age Calculator: Forgot how old someone is?
// !Calculate it!
// !a. Store the current year in a variable.
// !b. Store their birth year in a variable.
// !c. Calculate their 2 possible ages based on the stored values.
// !Output them to the screen like so: “They are either NN or NN years old”.
// ?document.write("<h1>Age Calculator</h1>");
// ?var currentYear = 2023;
// ?document.write("<br>Current Year: "+ currentYear);
// ?var birthYear = 2002;
// ?document.write("<br>Birth Year: "+ birthYear);
// ?var age = currentYear - birthYear;
// ?document.write("<br>Your Age is: " + age);

// !Q 12 . The Geometrizer: Calculate properties of a circle.
// !a. Store a radius into a variable.
// !b. Calculate the circumference based on the radius, and output “The circumference is NN”.
// !(Hint : Circumference of a circle = 2 π r , π = 3.142)
// !Calculate the area based on the radius, and output “The area is NN”.
// !(Hint : Area of a circle = π r2, π = 3.142)
// ?document.write("<h1>The Geometrizer</h1>");
// ?var rCircle = 20;
// ?document.write("<br>Radius of a circle: "+rCircle);
// ?var cfCircle = 2*3.142*rCircle;
// ?document.write("<br>The circumference is: "+cfCircle);
// ?var aCircle = 3.142*20*20;
// ?document.write("<br>The area is: "+aCircle);

// !Q 13 . The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is?
// !Wonder no more.
// !a. Store your favorite snack into a variable
// !b. Store your current age into a variable.
// !c. Store a maximum age into a variable.
// !d. Store an estimated amount per day (as a number).
// !e. Calculate how many would you eat total for the rest of your life.
// !Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”
// ?document.write("<h1>The Lifetime Supply Calculator</h1>");
// ?var  snack = "lays" ;
// ?document.write("<br>Favourite Snack: " + snack);
// ?var cAge =21;
// ?document.write("<br>Current age: "+ cAge);
// ?var maxAge =50;
// ?var remainingdaysoflife = (maxAge -cAge)*365;
// ?document.write("<br>Estimated Maximum Age: "+ maxAge);
// ?var aSnack =5;
// ?document.write("<br>Amount of snack per day:"+ aSnack);
// ?var tSnack = remainingdaysoflife*aSnack;
// ?document.write("<br>You will need "+ tSnack +" lays to last you until the ripe old age of "+ maxAge);