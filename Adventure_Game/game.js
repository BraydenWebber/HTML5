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
    case "go through the front door":
    case "gttfd":
        alert("You walk up to the front door and knock but nobody comes. There is large chatter inside so maybe they didn't hear you... You knock again and still nobody comes. You decide to invite yourself in. As you walk in you fail to see the man hiding in the shadows. He jumps you and being un able to stop him, he kills you... game over.");
        break;
    
    case "go through the back pathway":
    case "gttbp":
        var decide = prompt("The pathway was a gravel path that led all the way to the back door. Well walking past you couldn't help but see a pipe on the ground. \n - Take pipe \n - Keep walking");
        if(decide == "take pipe" || decide == "tp"){
            alert("As you reach for the pipe you failed to notice the loose rock sticking out of the ground... Tripping you try to catch yourself but fail and fall face first into an electric box... Game over!");
        }
        else if(decide == "keep walking" || decide == "kw"){
            var Decide = prompt("As you walk forward you can see lights coming from the windows. It's not to big of a party maybe only around 6 people but it's perfect for you nonetheless. You're at the back door. \n - enter \n - leave party");
            
            if(Decide == "enter" || Decide == "e" ){
                var Enter = prompt("As you enter the house the door makes a creaking noise notifing/freaking out the other 6 people in the room. After they recognize that it's just you they all settle down. Jeremy (Your best friend and the only reason you knew about this party) greets you and calls you to sit with them. \n - Sit down with them \n - leave");
                
                if(Enter == "sit down with them" || Enter == "sdwt"){
                    var Sit = prompt("You decide to sit down with the group and decide to sit next to Jeremy. He slowly introduces you to the group. Out of the seven of you (including you) there are 3 girls and 4 guys. There is Sara Jeremys girlfriend, brooklyn, Mei, Jackson and Tyler. \n - Look at (put name) \n - continue with the party");
                }
                else if(Enter == "leave" || Enter == "l"){
                   alert("You frantically shut the door and run away. Nobody knows why you just decided to leave some people theorise that you couldn't take the social pressure. Either way you aren't at the party so I guess... game over.");
                }
                
            }
            else if (Decide == "leave party" || "lp"){
                alert("You decide to leave the party so you get back in your car start the engine and head home. Back to your boring life, sad and alone... As you contimplaite your meaning in life you fail to see the turn ahead of you and drive right into a firehydrant ending your life... Game over");
            }
        }
        
        
        break;


     /*    
    case "keep walking":
    case "kw":
        prompt("As you walk forward you can see lights coming from the windows. It's not to big of a party maybe only around 6 people but it's perfect for you nonetheless. You're at the back door. \n - enter \n - leave party");    
        
    case "take pipe":
        alert("As you reach for the pipe you failed to notice the loose rock sticking out of the ground... Tripping you try to catch yourself but fail and fall face first into an electric box... Game over!");  
        break;
        
         case "leave party":
        alert("You decide to leave the party so you get back in your car start the engine and head home. Back to your boring life, sad and alone... As you contimplaite your meaning in life you fail to see the turn ahead of you and drive right into a firehydrant ending your life... Game over");
        break;
         
    case "enter":
    case "e":
        prompt("As you enter the house the door makes a creaking noise notifing/freaking out the other 6 people in the room. After they recognize that it's just you they all settle down. Jeremy (Your best friend and the only reason you knew about this party) greets you and calls you to sit with them. \n - Sit down with them \n - leave");
        break;
        
    case "leave":
        alert("You frantically shut the door and run away. Nobody knows why you just decided to leave some people theorise that you couldn't take the social pressure. Either way you aren't at the party so I guess... game over.");
        break;
        
    case "sit down with them":
        prompt("You decide to sit down with the group and decide to sit next to Jeremy. He slowly introduces you to the group. Out of the seven of you (including you) there are 3 girls and 4 guys. There is Sara Jeremys girlfriend, brooklyn, Mei, Jackson and Tyler. \n - Look at (put name) \n - continue with the party");
        break;
        
    case "look at Sara":
        alert("Sara was a cute short girl with bright red hair. She smiled at you as you looked up at her.");

    case "look at brooklyn":
        alert("Brooklyn is a cold white girl dressed in all black with black makeup. She seems cheerful and comfortable at this party but overall is off putting.");

    case "look at Mei":                        
        alert("Mei is a nice cheerful girl that has these bright green eyes and long black hair. She smiles at you with a crooked smile. There is a eager fire in her eyes. You look forward to meeting her later.");
                                
    case "Look at Jackson":                        
        alert("As soon as you look up at Jackson he shoots you back with a smile and a 'hi.' He appears to be a nerd but afraid to make any assumptions you look away." );
                            
    case "look at Tyler":                        
        alert("Tyler is a big muscular boy who appears like he isn't scared to crack a few skulls. Both of his arms have full sleeve tattoos of angels and demons. He looks like a mean dude but his smile is somewhat inviting.");
        
    case "look at Jeremy":
        alert("Jeremy looks up at you as you you look at him. He just smiles that friendly smile that youve known since elementary school. Hes a cool guy and you have a lot of respect for him." );
        
    case "continue with the party":
        prompt("Sara yells, lets get this party started! and pulls out a bored game from her backpack. At the same time Jeremy pulls one out of his bag. Somehow in all the commotion they leave you to pick whos bored game to play... \n - play saras game" );
    


        break;
        break;
        break;
        break;
        break;
        break;
   */
}
    }
}