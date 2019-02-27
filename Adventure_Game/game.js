Game();

var inventory = {
    whatever:0,
}

function Game (){
    alert("Super House Party");
    var playerName = prompt("What is your name?");
    while(!confirm("Are you sure you want" +playerName+" as a name")){
        playerName = ("What name do you want?");
    }
    alert("Im glad you decided to come" +playerName);
    
    Outside();
    
    function Outside(){
        var outside = prompt("You arrive at the house party. Just in the drive way you decide to look around. The house looks quite homely and there is a bit of a humble charm about it. There are a couple of other cars parked around but nothing you recognize. There is nothing out of the ordinary out there. You do however notice a pathway leading to the back of the house. \n - Go through the back pathway \n - Go through the front door.").toLowerCase();
        
        switch(outside){
            case "go through the front door":
            case "gttfd":
                alert("You walk up to the front door and knock but nobody comes. There is large chatter inside so maybe they didn't hear you... You knock again and still nobody comes. You decide to invite yourself in. As you walk in you fail to see the man hiding in the shadows. He jumps you and being unable to stop him, he kills you... game over.");
        break;
                
                case"go through the back pathway":
            case "gttbp":
                var decide = prompt("The pathway was a gravel path that led all the way to the back door. Well walking past you couldn't help but see a pipe on the ground. \n - Take pipe \n - Keep walking");
                if(decide == "take pipe" || decide == "tp"){
                    alert("As you reach for the pipe you failed to notice the loose rock sticking out of the ground... Tripping you try to catch yourself but fail and fall face first into an electric box... Game over!");
                }
                else if(decide == "keep walking" || decide == "kw"){
                    var decidee = prompt("As you walk forward you can see lights coming from the windows. It's not to big of a party maybe only around 6 people but it's perfect for you nonetheless. You're at the back door. \n - enter \n - leave party");
                if(decidee == "leave party" || decidee == "lp"){
                    alert("You decide to leave the party so you get back in your car start the engine and head home. Back to your boring life, sad and alone... As you contimplaite your meaning in life you fail to see the turn ahead of you and drive right into a firehydrant ending your life... Game over");
                }
                    else if(decidee == "enter" || decidee == "e"){
                        var enter = prompt("As you enter the house the door makes a creaking noise notifing/freaking out the other 6 people in the room. After they recognize that it's just you they all settle down. Jeremy (Your best friend and the only reason you knew about this party) greets you and calls you to sit with them. \n - Sit down with them \n - leave");
                        
                        if(enter == "leave" || enter == "l"){
                            alert("You frantically shut the door and run away. Nobody knows why you just decided to leave some people theorise that you couldn't take the social pressure. Either way you aren't at the party so I guess... The end.");
                        }
                        else if(enter == "sit down with them" || enter == "sdwt"){
                            var sit = prompt("You decide to sit down with the group and decide to sit next to Jeremy. He slowly introduces you to the group. Out of the seven of you (including you) there are 3 girls and 4 guys. There is Sara Jeremys girlfriend, brooklyn, Mei, Jackson and Tyler. \n - Look at (put name) \n - continue with the party");
                            if (sit == "look at sara"){
                                alert("Sara was a cute short girl with bright red hair. She smiled at you as you looked up at her.");
                            }
                            else if (sit == "look at brooklyn"){
                                alert("Brooklyn is a cold white girl dressed in all black with black makeup. She seems cheerful and comfortable at this party but overall is off putting.");
                            }
                            else if (sit == "look at mei"){
                                alert("Mei is a nice cheerful girl that has these bright green eyes and long black hair. She smiles at you with a crooked smile. There is a eager fire in her eyes. You look forward to meeting her later.");
                            }
                            else if (sit == "look at jackson"){
                                alert("As soon as you look up at Jackson he shoots you back with a smile and a 'hi.' He appears to be a nerd but afraid to make any assumptions you look away." );
                            }
                            else if (sit == "look at tyler"){
                                alert("Tyler is a big muscular boy who appears like he isn't scared to crack a few skulls. Both of his arms have full sleeve tattoos of angels and demons. He looks like a mean dude but his smile is somewhat inviting.");
                            }
                            else if(sit == "continue with the party" || Sit == "cwtp"){
                                var bored = prompt("Sara yells, lets get this party started! and pulls out a board game from her backpack. At the same time Jeremy pulls one out of his bag. Somehow in all the commotion they leave you to pick whos bored game to play... \n - play saras game \n - play jeremys game");
                                
                                if(bored == "play saras game" || bored == "psg"){
                                    alert("Sara brought Candy Land to the party! You had a nice enjoyable time at the party and went home happy. The end");
                                }
                                else if (bored == "play jeremys game" || "pjg"){
                                    alert("He brought an ouija bored...");
                                    Ouija();
                                }
                                
                                

                            }
                        }

                    }
                }

break;
        }

    }
    function Ouija(){
        var oija  = prompt("The whole room feels darker when Jeremy sets it on the ground. There is this unsettling feeling through out the entire room. Sara decides to dim the lights real dark to better set the mood. They asks who wants to join in on the first set of rounds. \n - join in \n - sit back");
        
        if(oija == "join in" || oija == "ji")
        

}
