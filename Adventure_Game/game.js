// Single Line comment: My dads was sent to jail... help.
/*
At first it was funny.
Multiline coment:But it's been a couple of days and I'm hungry.

alert("Warning Will Robinson...Warning!");

confirm("Do you like pokemon?");

prompt("What type of pokemon do you like?");
*/

//var pc = prompt ("What is your name boy?");

//document.write(pc);

Game();

function Game(){
    alert("Super Flash Party");
    var playerName = prompt("What is your name?");
    alert ("I'm glad you decided to come " + playerName);
    
    Outside();
    
    function Outside(){
        var outside = prompt("You arrive at the house party. Just in the drive way you decide to look around. The house looks quite homely and there is a bit of a humble charm about it. There are a couple of other cars parked around but nothing you recognize. There is nothing out of the ordinary out there. You do however notice a pathway leading to the back of the house. \n - Go through the back pathway \n - Go through the front door.").toLowerCase();
        
        if(outside == "Go through the back pathway" || outside == "Back Pathway"){
            
            
            var backPathway = prompt("The pathway was a gravel path that led all the way to the back door. Well walking past you couldn't help but see a pipe on the ground. \n - Take pipe \n - Keep walking");
        }
        else{
            alert("I don't know what "+outside+" is!")
            Outside();
        }
            
    }
}