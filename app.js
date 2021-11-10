/////////Arrays////////////
document.write("<h1 class=headings>Arrays</h1>")

////////question 1//////////////
var std1 = [];
var std = [0]
////////////question 2//////////
var std2 = ["", ""]

//////////question 3////////////
var arr1 = ["Nimra" , "Alaya" , "Amal"]
document.write("<b>String Array :- </b>",arr1[1]);

document.write("<br>");
document.write("<br>");

///////////////question 4///////////
var arr2 = [200 , 400 , 600]
document.write("<b>Number Array :- </b>",arr2[2]);

document.write("<br>");
document.write("<br>");

//////////////question 5////////////
var arr3 = [true , false]
document.write("<b>Boolean Array :- </b>",arr3[1])

document.write("<br>");
document.write("<br>");

/////////////question 6//////////
var arr4 = ["Nimra" , 17 , true]
document.write("<b>Mixed Array :- </b>",arr4[0 ], " ")
document.write(arr4[1], " ")
document.write(arr4[2], " ")

document.write("<br>");
document.write("<hr>");

////////////question 7///////////
var pakQuali = ["<br> 1) SSC </br> 2) HSC </br> 3) BCS </br> 4) BS </br> 5) BCOM </br> 6) MS </br>7) M. phil </br>8) PhD"]
document.write("<b>Qualification :- </b> <br>",pakQuali[0]);

document.write("<br>");
document.write("<hr>");

///////////////question 8/////////////
var stdNames = ["Usama" , "Nimra" , "Esha"];
var stdMarks = ["200" ,"400", "300"]
var per = [200/ 500 * 100 ,400/ 500 * 100 , 300/ 500 * 100];
document.write(" Score of " +stdNames [0] , " is " ,stdMarks [0], ". Percentage: " +per [0] ,"%" )
document.write("<br>");
document.write(" Score of " +stdNames [1] , " is " ,stdMarks [1], ". Percentage: " +per [1] ,"%")
document.write("<br>");
document.write(" Score of " +stdNames [2] , " is " ,stdMarks [2], ". Percentage: " +per [2] ,"%")

document.write("<br>");
document.write("<hr>");

/////////////question 9///////////////
var colorNames = ("<h3><i> (Pink , Black , blue , Purple ,  white , Green)</i> </h3>")

document.write(colorNames)

////////////one value add in begning//////////////////////

var color = [" Pink" , "Black" , "blue" , "Purple" , "white" , "Green"]
var beginCol = prompt("What color you wanna add in the begining")
color.unshift(beginCol)
document.write(color)

////////////////one value add in the end////////////////
var color = ["Pink" , "Black" , "blue" , "Purple" , "white" , "Green "]
document.write("<br>");
var beginCol = prompt("What color you wanna add in the end")
color.push(beginCol)
document.write(color)

document.write("<br>");

///////////////add 2 values in begining //////////////////
var color = [" Pink" , "Black" , "blue" , "Purple" , "white" , "Green"]
var beginCol = prompt("What color you wanna add in the begining")
color.unshift(beginCol)
document.write(color)

// if(color == "Pink" , "Black" , "blue" , "Purple" , "white" , "Green" ){
//     alert("already available")
// }else{
//     document.write(color)
// }
document.write("<br>");

/////////////////delete the value in the start/////////////////
var color = [" Pink" , "Black" , "blue" , "Purple" , "white" , "Green"]
color.shift([0]);
document.write(color);

document.write("<br>");


/////////////////delete the value in the end/////////////////
var color = [" Pink" , "Black" , "blue" , "Purple" , "white" , "Green"]
color.pop([5]);
document.write(color);



//////////////////
// var color = [" Pink" , "Black" , "blue" , "Purple" , "white" , "Green"]
// var beginCol = prompt("What color index number, Position or color name you wanna add in the begining")
// color.splice([color + 0 + "color"])
// document.write()



document.write("<br>");
document.write("<br>");
document.write("<hr>");

//////////////question 10/////////////
var stdScore = [340, 754 , 232 , 543 , 150]
document.write ("Scores of Students : " +stdScore+  "<br>")
document.write ("Ordered Scores of Students : "+stdScore [ 4 ] + ", ")
document.write (stdScore [ 2 ] + ", ")
document.write (stdScore [ 0 ] + ", ")
document.write (stdScore [ 3 ] + ", ")
document.write (stdScore [ 1 ] + " ")


document.write("<br>");
document.write("<br>");
document.write("<hr>");

/////////////question 11////////////////
var citList = ["<br> Karachi","Lahore","Islamabad","Quetta","Peshawar"]
document.write("Cities list:"+ citList+"<br> <br>")
document.write("Selected cities list: <br>" +citList[2] +",")
document.write(citList[3])

document.write("<br>");
document.write("<br>");
document.write("<hr>");

////////////question 12//////////////////
var cat = ["This", "is", "my", "cat"];
document.write("<b>Array: <br> </b>" + cat +"<br> <br>");

document.write("<b>String:</b> <br>")
document.write(cat[0]+ " ")
document.write(cat[1]+ " ")
document.write(cat[2]+ " ")
document.write(cat[3]+ " ")

document.write("<br>");
document.write("<br>");
document.write("<hr>");

////////////question 13/////////////
var devices = ["Keyboard", "mouse", "printer", "moniter"]
document.write("Devices: <br>" +devices+ "<br> <br>")
var out = ("Out: <br>")
document.write(out+devices[0],"<br>")
document.write(out+devices[1],"<br>")
document.write(out+devices[2],"<br>")
document.write(out+devices[3],"<br>")

document.write("<br>");
document.write("<br>");
document.write("<hr>");

//////question 14///////////
var devices = ["Keyboard", "mouse", "printer", "moniter"]
document.write("Devices: <br>" +devices+ "<br> <br>")
var out = ("Out: <br>")
document.write(out+devices[3],"<br>")
document.write(out+devices[2],"<br>")
document.write(out+devices[1],"<br>")
document.write(out+devices[0],"<br>")

document.write("<br>");
document.write("<br>");
document.write("<hr>");

///////////////question 15//////////////
document.write("<h3>DropDown</h3> <br> ");
var phone = (" Apple " ," Samsung ", " Nokia " , " Sony ", " Haier ");
document.write("<select><option>Apple</option><option>samsung</option><option>Nokia</option><option>Sony</option><option>Haier</option></select>");

document.write("<br>");
document.write("<br>");


 ///////////////Loops////////////////////
document.write("<h1 class=headings>Loops</h1>")
// // //////QUESTION 1//////////

// var names=[]
// fruits[0]="Nimra"
// fruits[1]="Nimra"
// fruits[2]="Nimra"
// document.write(names)


/////////question 3//////////////
document.write("<h3>Numeric Counting :- </h3>")
for(var i = 1 ; i <= 10 ; i++){
    document.write(" ",i ,"<br>")
}


document.write("<br>");
document.write("<br>");
document.write("<hr>");



/////////question 4//////////////
document.write("<h3>Multiplication Table :- </h3>")
var tableNum = +prompt("Enter Table Number");
var tableLength = +prompt("Enter Table Length")

for( var i = 1 ; i <= tableLength ; i++ ){
    document.write(tableNum + "X" + i + "=" + tableNum*i + "<br>")
}

 
document.write("<br>");
document.write("<br>");
document.write("<hr>");

////////////////question 5//////////////////

// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
                
// for(var i = 0 ; i < fruits.length ; i++){
//         document.write( fruits[i] + "<br>"); 
// }
// document.write("<br>")
// document.write("<br>")
// document.write("<br>")

// document.write("Element at index 0 is apple");
// document.write("<br> Element at index 1 is banana");
// document.write("<br> Element at index 2 is mango");
// document.write("<br> Element at index 3 is orange");
// document.write("<br> Element at index 4 is strawberry");

//////////////question 6////////////////
document.write("<b>Counting :- </b><br><br>")
for(var i = 1 ; i <= 10 ; i++){
    document.write(" ",i , ",")
}

document.write("<br>");

document.write("<b><br>Reverse Counting :- </b><br><br>")
for(var i = 10 ; i >= 1 ; i--){
    document.write(i, ",")
}

document.write("<br>");

document.write("<b><br>Even :- </b><br><br>")
for(var i = 0 ; i <= 20 ; i = i+2 ){
    document.write(" ",i , "," )
}

document.write("<br>");

document.write("<b><br>Odd :- </b><br><br>")
for(var i = 1 ; i <= 20 ; i = i+2 ){
    document.write(" ",i , "," )
}

document.write("<br>");

for(var i = 2 ; i <= 20 ; i = i+2 ){
    document.write(" ",i ,"k", "," )
}

document.write("<br>");
document.write("<br>");
document.write("<hr>");

////////////////question 7///////////////////


// var userInput = prompt("Welcome to Boss Bakery..What do u wanna order Sir/Ma'am ?")
// var bakery = ["cake" , "apple pie", "cookie", "chips", "patties"]


// var matchFound = "no"
// for(var i = 0 ; i < bakery.length ;i++){

//         if(userInput === bakery[i] ){
//             document.write(items [i] + " " + "is available in our bakery at index number " + [i] )
//                 matchFound = "yes"
//         } 
// }

// if(matchFound === "no"){
//     document.write("We are sorry." + items [i]+" "+  "is not available in our bakery")


//////////////question 8//////////

var num1 = ["24", "53" , "78" , "91" , "21"]
document.write("<b>Array item:</b> " +num1)
document.write("<br>");
document.write("<b>The largest number is </b>" +num1[3])


document.write("<br>");
document.write("<br>");
document.write("<hr>");


////////////////question 9/////////////
var num1 = ["24", "53" , "78" , "91" , "21"]
document.write("<b>Array item:</b> " +num1)
document.write("<br>");
document.write("<b>The Smallest number is </b>" +num1[4])


document.write("<br>");
document.write("<br>");
document.write("<hr>");
document.write("<br>");

/////////////question 10////////////
for(var i = 0 ; i <= 100 ; i = i+5 ){
    document.write("<b>" + i + " ", "</b>"  )
}

document.write("<br>");
document.write("<br>");