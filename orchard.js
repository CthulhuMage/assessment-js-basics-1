///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55



// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// CODE HERE
console.log("-------------------------Problem 1---------------------------")
//I considered combining all of the data into a single array using .push or similar, but ultimately I felt like separating into totals by type would be more usable.
let totalAcres = (0)
let fujiTotal = (0)
let galaTotal = (0)
let pinkTotal = (0)
for (let i = 0; i < 7; i++){
    fujiTotal = fujiTotal + fujiAcres[i]
}
console.log(fujiTotal)
for (let i = 0; i < 7; i++){
    galaTotal = galaTotal + galaAcres[i]
}
console.log(galaTotal)
for (let i = 0; i < 7; i++){
    pinkTotal = pinkTotal + pinkAcres[i]
}
console.log(pinkTotal)
totalAcres = (fujiTotal + galaTotal + pinkTotal)
console.log(totalAcres)



// PROBLEM 2
console.log("-------------------------Problem 2---------------------------")
/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE
let averageDailyAcres = (totalAcres / 7)
console.log(averageDailyAcres)



// PROBLEM 3
console.log("-------------------------Problem 3---------------------------")
/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/
//I figured it's best to keep using the variables that are set rather than substitute in a number in case some of the data changes.
let acresLeft = 174 
let days = 0

// CODE HERE
while (acresLeft > 0){
    days += 1
    acresLeft -= averageDailyAcres
}
console.log(days)

// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// CODE HERE
//It seemed easier to me to splice the original and modify the splice in situ rather than deal with pushing. Idk if this will work with more complex operations, but as this was a fairly easy mathematical operation it seemed the way to go. 
console.log("-------------------------Problem 4---------------------------")
let fujiTons = (fujiAcres.slice(0, 7))
for (let i = 0; i < 7; i++){
    fujiTons[i] *= 6.5
}
let galaTons = (galaAcres.slice(0, 7))
for (let i = 0; i < 7; i++){
    galaTons[i] *= 6.5
}
let pinkTons = (pinkAcres.slice(0, 7))
for (let i = 0; i < 7; i++){
    pinkTons[i] *= 6.5
}

console.log(fujiTons)
console.log(galaTons)
console.log(pinkTons)


// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE 
//I like keeping each apple type separate for potential use later, but keeping all the math as compact as I can. 
console.log("-------------------------Problem 5---------------------------")
let fujiPounds = (0)
for (let i = 0; i < 7; i++){
    fujiPounds = (fujiPounds + (fujiTons[i] *= 2000))
}
let galaPounds = (0)
for (let i = 0; i < 7; i++){
    galaPounds = (galaPounds + (galaTons[i] *= 2000))
}
let pinkPounds = (0)
for (let i = 0; i < 7; i++){
    pinkPounds = (pinkPounds + (pinkTons[i] *= 2000))
}
console.log(fujiPounds)
console.log(galaPounds)
console.log(pinkPounds)

// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

// CODE HERE
//The answers are in dollars, assuming that by fujiPrice = .89 you meant that 1 lbs of fuji costs less than a cent. I spent a while seeing if I could make it say $1735.50, but couldn't figure it out with the time I had available. 

console.log("-------------------------Problem 6---------------------------")
let fujiProfit = (fujiPrice * fujiPounds / 100)
let galaProfit = (galaPrice * galaPounds / 100)
let pinkProfit = (pinkPrice * pinkPounds / 100)
console.log(fujiProfit)
console.log(galaProfit)
console.log(pinkProfit)

// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE
console.log("-------------------------Problem 7---------------------------")
//Gonna be honest here; it's 3 a.m., and I've got work at 8. No deep thought on this one. Just math.
let totalProfit = (fujiProfit + galaProfit + pinkProfit)
console.log(totalProfit)
