// Single Line comment: My dads was sent to jail... help.
/*
At first it was funny.
Multiline coment:But it's been a couple of days and I'm hungry.

alert("Warning Will Robinson...Warning!");

confirm("Do you like pokemon?");

prompt("What type of pokemon do you like?");
*/

var pc = prompt ("What is your name boy?");

//document.write(pc);

Game();

function Game() {
    alert ("Super Flash Party");
    var playerName = prompt("What is your name?");
    alert ("I'm glad you decided to come " + playerName);
    
    Outside();
    
    function Outside(){
        var outside = prompt("You arrive at the house party. Just in the drive way you decide to look around. The house looks quite homely and there is a bit of a humble charm about it. There are a couple of other cars parked around but nothing you recognize. There is nothing out of the ordinary out there. You do however notice a pathway leading to the back of the house. \n - Go through the back pathway \n - Go through the front door.").toLowerCase();
        
        if(outside == "go through the back pathway" || outside == "back pathway" || outside == "bp"){
            var Pathway = prompt("The pathway was a gravel path that led all the way to the back door. Well walking past you couldn't help but see a pipe on the ground. \n - Take pipe \n - Keep walking");
            
            if(Pathway == "take pipe" || "tp"){
                alert("As you reach for the pipe you failed to notice the loose rock sticking out of the ground... Tripping you try to catch yourself but fail and fall face first into an electric box... Game over!")}
                
                else if( Pathway == "keep walking" || Pathway == "kw"){
                    var Backdoor = prompt("As you walk forward you can see lights coming from the windows. It's not to big of a party maybe only around 6 people but it's perfect for you nonetheless. You're at the back door. \n - enter \n - leave party");
                    
                    if(Backdoor == "leave party" || Backdoor =="lp"){
                        alert("You decide to leave the party so you get back in your car start the engine and head home. Back to your boring life, sad and alone... As you contimplaite your meaning in life you fail to see the turn ahead of you and drive right into a firehydrant ending your life... Game over")}
                    else if(Backdoor == "enter" || Backdoor == "e"){
                        var Partyroom = prompt("As you enter the house the door makes a creaking noise notifing/freaking out the other 6 people in the room. After they recognize that it's just you they all settle down. Jeremy (Your best friend and the only reason you knew about this party) greets you and calls you to sit with them. \n - Sit down with them \n - leave party");
                        
                        if(Partyroom == "leave party" || Backdoor =="lp"){
                        alert("You decide to leave the party instead of sitting down. So you slam the back door and get back in your car before anybody can stop you and start the engine to head home. Back to your boring life, sad and alone... As you contimplaite your meaning in life you fail to see the turn ahead of you and drive right into a firehydrant ending your life... Game over")}
                        
                        else if(Partyroom == "sit" || Partyroom == "sdwt"|| Partyroom == sit down){
                            var circle = prompt("You decide to sit down with the group and decide to sit next to Jeremy. He slowly introduces you to the group. Out of the seven of you (including you) there are 4 girls and 3 guys. There is Sara, Jeremys girlfriend, brooklyn, Mei, Jackson and Tyler. \n - Look at (put name)");
                            
                            if(circle == "look at Sara" || circle == "Sara"){
                                alert("Sara was a cute short girl with bright red hair. She smiled at you as you looked up at her.");
                            }
                            else if( circle == "look at jeremy" || circle == "jeremy"){
                                alert("Jeremy was your typical white guy with deep brown hair. He liked pickup trucks and hunting and you've known him your whole life. If there is anyone at this party you trust it's him.");
                            }
                            else if( circle == "look at brooklyn" || circle == "brooklyn"){
                                alert("Brooklyn is a cold white girl dressed in all black with black makeup. She seems cheerful and comfortable at this party but over all is off putting.");
                            }
                            else if( circle == "look at mei" || circle == "mei"){
                                alert("Mei is a nice cheerful girl that has these bright green eyes and long black hair. She smiles at you with a crooked smile. There is a eager fire in her eyes. You look forward to meeting her later.");
                                
                            }
                            else if(circle == "look at jackson" || circle == "jackson"){
                                alert("As soon as you look up at Jackson he shoots you back with a smile and a 'hi.' He apears to be a nerd but afriad to make any assumptions you look away." );
                            }
                            else if (circle == "look at tyler" || circle == "tyler"){
                                alert("Tyler is a big muscular boy who appears like he isn't scared to crack a few skulls. Both of his arms have full sleeve tatoos of angles and demons. He looks like a mean dude but his smile is somewhat inviting.")
                            }
                            
                    
                    } 
                    
                    }
                }
            }
        }
}
       // else {
           // alert("I don't know what "+outside+" is!")
            Outside();
        }
            