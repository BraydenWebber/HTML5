// Single Line comment: My dads was sent to jail... help.
/*
At first it was funny.
Multiline coment:But it's been a couple of days and I'm hungry.

alert("Warning Will Robinson...Warning!");

confirm("Do you like pokemon?");

Anything I write here is broken so I can Kind of do whatever I want up here
I'm XxWidowgodxX

prompt("What type of pokemon do you like?");
*/

//var pc = prompt ("What is your name boy?");

//document.write(pc);

Game();

function Game() {

    alert ("Super Flash Party");
    var playerName = prompt("What is your name?");
    alert ("I'm glad you decided to come " + playerName);
    
    Outside();
    
    function Outside(){
        var outside = prompt("You arrive at the house party. Just in the drive way you decide to look around. The house looks quite homely and there is a bit of a humble charm about it. There are a couple of other cars parked around but nothing you recognize. There is nothing out of the ordinary out there. You do however notice a pathway leading to the back of the house. \n - Go through the back pathway \n - Go through the front door.").toLowerCase();

switch(outside){
    case "go through the back pathway":
        prompt("The pathway was a gravel path that led all the way to the back door. Well walking past you couldn't help but see a pipe on the ground. \n - Take pipe \n - Keep walking");
        
     case "keep walking":
        prompt("As you walk forward you can see lights coming from the windows. It's not to big of a party maybe only around 6 people but it's perfect for you nonetheless. You're at the back door. \n - enter \n - leave party");
         
    case "enter"
        prompt("As you enter the house the door makes a creaking noise notifing/freaking out the other 6 people in the room. After they recognize that it's just you they all settle down. Jeremy (Your best friend and the only reason you knew about this party) greets you and calls you to sit with them. \n - Sit down with them \n - leave");
        
    case "sit down with them"
        prompt("You decide to sit down with the group and decide to sit next to Jeremy. He slowly introduces you to the group. Out of the seven of you (including you) there are 4 girls and 3 guys. There is Sara, Jeremys girlfriend, brooklyn, Mei, Jackson and Tyler. \n - Look at (put name)");
        
    case "look at Sara"
        alert("Sara was a cute short girl with bright red hair. She smiled at you as you looked up at her.");

        
    case "leave party":
        alert("You decide to leave the party so you get back in your car start the engine and head home. Back to your boring life, sad and alone... As you contimplaite your meaning in life you fail to see the turn ahead of you and drive right into a firehydrant ending your life... Game over");
        
        
    case "take pipe":
        alert("As you reach for the pipe you failed to notice the loose rock sticking out of the ground... Tripping you try to catch yourself but fail and fall face first into an electric box... Game over!");
        

        break;
        break;
        break;
        break;
        break;
        break;
        break;
        break;



    
}
    }
}