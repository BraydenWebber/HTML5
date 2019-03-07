

var playerName;
var inventory ={
	eyeball: 1,
}


Game();
function Game(){
alert ("The Mad Adventure");
var playerName = prompt("What is your name?");
while(!confirm("Are you sure you want " +playerName+ " as your name?")){
	playerName = prompt("What name do you want than?!");
}
    
alert("Im glad you decided to come " +playerName);
Outside();

/*
var inventory ={
	eyeball: 1,
};
  */  

function Outside() {
	alert("As you sat on your fathers porch you couldn't help but feel sleepy. The cool summer breeze really kept you cozy. Right before you were about to crash something very peculiar happened. A fast white rabbit came dashing over your feet. It was't to odd because there was always rabbits but this one was different...");
	var outside = prompt("This rabbit was wearing a nice velvet coat and was talking! You couldn't quite make out what he was saying but he was definitely talking! \n - chase rabbit \n - stay on the porch");
	if(outside == "stay on the porch" || outside == "sotp"){
 	alert("Congratulations on being the funnest adventurer ever and having a boring time... You stay on the porch and have a boring day. the end");
   	 
  	 
	}
	else if(outside == "chase rabbit" || outside == "cr"){
    	alert("You hop up on your feet and get ready for the adventure at hand!");
    	var chicken = prompt("You see the rabbit quickly jumps behind an old stump in the ground. Peering around the stump reveals the rabbit knocking on the stump in some sort of rhythmic sequence. suddenly the ground opens up to reveal a hole in the ground! The rabbit hastily jumps down. \n - jump in after him \n - leave");
    	if(chicken == "jump in after him" || chicken == "jiah"){
        	alert("You jump in without a care in the world.");
Hole();

    	}
    	else if(chicken == "leave" || chicken == "l"){
        	alert("Way to be an adventurer... You go back to the porch and have a good rest of the day. The end.");
    	Game();

    	}
 	 
	}
   	else{
         	alert("I didn't understand that...");
         	Outside();
     	}
}

function Hole() {
	alert("The hole was a whole lot deeper than you first thought. You looked down but failed to see anything.");
var cabinet = prompt("Well you started to see other things falling. There was a cabinet. With jars of all sorts of stuff! Excited to find something in the hole you didn't even think to look at the jars before opening it and eating whatever was in it \n - take the bright orange jar \n - take the dark brown jar").toLowerCase();
	if(cabinet == "take the bright orange jar" || cabinet == "ttboj"){
    	alert("In this hasty decision you have chosen very wrong! The orange was some sort of poison. It hit you next to instantly and you went away quickly with no pain or no care... Game over");
Hole();
	}
	else if(cabinet == "take the dark brown jar" || cabinet == "ttdbj"){
    	alert("Well to your very sweet surprise the jar was a sweet chocolate!");
    	alert("You could finally make out the bottom of the whole. Landing on a surprisingly soft bed of broken cabinets you quickly look around the room for the white rabbit.");
    	alert("The rabbit was nowhere to be seen. However you did notice the two hallways. One looking green and lush. The other fancy and kind medieval");
    	var hallway = prompt("\n - go through the green lush hallway \n - go through the fancy one");
    	if(hallway == "go through the green lush hallway" || hallway == "gttglh"){
        	alert("Well walking through the lush green hallway you notice the walls just sort of fade away.");
        	Lush();
    	}
    	else if(hallway == "go through the fancy one" || hallway == "gttfo"){
        	alert("The fancy hallway was cold. You couldn't make out what it was but it sounded like cheering. A bunch of people came rushing past you from behind. They all looked so strange. Some with fish for heads others with lion feet everyone was so unique in some strange way.");
       	Fancy();
    	}
	}
	else{
    	alert("I did't get that...");
    	Hole();
	}
}

function Lush(){
	alert("Until you look back and notice that the whole hallways and hole are completely gone. Looking forward brings a whole new story to light. There are dark brown trees with bright green leaves on the trees. You think you can see monkeys swinging on branches a distance up ahead but something else quickly catches your attention. You see a nice bright garden with huge flowers of all kind of colors!");
	var choice = prompt("With such excitement you can't help but get giddy about your next choice! \n - garden \n- hopefully monkeys");
	if(choice == "hopefully monkeys" || choice == "hm"){
    	alert("You decide to head toward the monkeys down the long and winding path.");
    	Monkey();
	}
	else if(choice == "garden" || choice == "g"){
    	alert("The garden is a nice pleasant colorful place full of all sorts of bugs. Not the creepy ones but full of things like crickets, snails, slugs, and even caterpillars!");
    	var garden = prompt("You see a nice little crack between the leaves. Taking a look you see a larger looking ant with a crown on top of its head. \n - go talk to the ant \n - throw a rock at the ant");
    	if(garden == "throw a rock at the ant" || garden == "tarata"){
        	alert("Now I have no idea why " +playerName+ " decided to throw a rock at the king of ants but you made the bed and now " +playerName+ " has to sleep in it! An army of ants come rushing out from the plants with swords and armor to fight off the the king slayer. To no surprise you lost to an army of thousands of ants and died a horrible death that was well deserved! Game over!");
        	Lush();
    	}
    	else if(garden == "go talk to the ant" || garden == "gttta"){
        	alert("The ant was so excited to see an unfamiliar face! He welcomed you with a warm welcome and asked you to hear him out. It seemed like he hadn't talked to someone who wasn't an ant in years.");
        	var antking = prompt("\n - here out the ant king \n - leave the ant king");
        	if (antking == "leave the ant king" || antking == "ltak"){
           	alert("The ant king was very upset that you left him but honestly didn't care to stop you. Even though he was upset with you he still was gracious enough to show you a pathway to the monkeys");
                	Monkey();
        	}
        	else if(antking == "here out the ant king" || antking == "hotak"){
            	alert("The ant king leaned back smiled and went off, there once was a man. A nobleman much more handsome than all the other men.  The only issue with this man is he was way to full of himself. He pretty much thought of himself as a god among men. The whole town knew this man was a cocky and arrogant one and after only a couple of weeks of this man being in there town they kicked him out. This man having walked for days started to lose himself. The man lost all color in his face turned starch white.");
            	alert("The man was starving. He hadn't eaten for days. He was lost in the forest. He couldn't leave no matter which way he went he always ended up in the same spot. Being so fed up with this the man went crazy. He started to hear things. Music... Loud obnoxious music. It was constant it never ended the man was driven insane. Drawing weird shapes and numbers on the wall.");
            	var listening = prompt("\n - continue listening \n - leave the ant king");
            	if(listening == "leave the ant king" || listening == "ltak"){
                	alert("Deciding to leave the king was probably a good idea. He could have rambled on forever... He was however very upset about you cutting him off but he understood. He should you the way out of the garden and a easy way to the monkey forest.");
                    	Monkey();
            	}
            	else if(listening == "continue listening" || listening == "cl"){
                	alert("The man started noticing claw marks on the walls. He followed them... They led him through the forest all the way to a new area he didn't know about. He heard laughing... Snarling...Hissing... He looked up to see a huge mouth of sharp teeth. Suddenly he saw the things ears and eyes appear from thin air. Being stunned from fear the man couldn't move.");
                	var staylistening = prompt("\n - leave him to his crazy stories \n - still listen");
                	if(staylistening == "leave him to his crazy stories" || staylistening == "lhthcs"){
                    	alert("Deciding to leave the king was probably a good idea. He could have rambled on forever... He was however very upset about you cutting him off but he understood. He should you the way out of the garden and a easy way to the monkey forest.");
                    	Monkey();
                	}
                	else if(staylistening == "still listen" || staylistening == "sl"){
                    	alert("The beast had finally revealed itself to be this massive slimy cat. It was a bright purple cat with yellow rhombus shaped eyes. The cat pounced on the man and cut his left arm clean off. The cat was vishes and laughed the whole time. The man says it talked but whos to say what really was happening the man was mad! The cat had charged him and if it wasn't for the mads man quick reflexes it would have killed him for sure. The man got the cat in it's left eye with a stick he hastily picked up off the ground.");
                    	alert("The lucky mad man plucked the whole cats eye out. The cat surprised with the madmans quick ways pounced on top of the tree. Smiling and bleeding from its missing eye socket the cat disappeared back into thin air. The smile and the dripping blood was the last to go. The mad man has been said to still be around but, I dont believe the stories. They say he lives under the huntresses castle. You want to know my opinion on the story?");
                    	var kingsstory = prompt("\n - here him out again \n - leave the annoying king");
                    	if(kingsstory == "leave the annoying king" || kingsstory == "ltak"){
                        	alert("Leaving the king after all of this was probably a good idea he looked like he was just about to get into another big spiel. He was kind though and understood completely. He showed you the way out of the garden and to the monkeys");
                        	Monkey();
                    	}
                    	else if(kingsstory == "here him out again" || kingsstory == "hhoa"){
                        	alert("I think the whole stories meaning was to never get lost in the woods. Or maybe don't be arrogant or cocky. Actually maybe the whole story is starring us right in the face! Never trust a purple cat. be quick and go for the EYES. even if it's not an option try anyways maybe you'll survive. But what do I know? Im just an ant king with no idea what the outside of this garden looks like. Well nonetheless here's the way out of the garden and to the monkeys");
                        	Monkey();
                    	}
                	}
               	 
            	}
        	}
    	}
	}
}
    
function Monkey(){
	alert("The pathway was nice and carved out. A couple trees here and there that have been completely cut down but nothing to strange. The forest was getting darker the more you walked through. you couldn't see any monkeys anymore... You couldn't even hear them. You came upon a cave.");
	var cave = prompt("\n - enter the cave \n - keep moving");
	if(cave == "enter the cave" || cave == "etc"){
    	alert("entering the cave was probably a good idea");
    	Cave();
	}
	else if(cave == "keep moving" || cave == "km"){
    	Cat();
	}
}
    
function Cave(){
	alert("The cave wasn't dark. Actually it was quite bright. The room however had strange markings on it and weird symbols no sane man could make out.");
	var markings = prompt("The cave was large and you had only explored about half of it. Who knows what else could be in here! \n - Try to make sense of the symbols \n - look around");
	if(markings == "try to make sense of the symbols" || markings == "ttmsots"){
    	var game = prompt("The markings kind of look like letters... You can make out a couple of letters of the mess. The letters you see are: u,l,a,g,h,g,n, and i. As well as two words: the and smile \n - what is the phrase listed \n - no i dont");
    	if(game == "the laughing smile" || game == "tls"){
        	alert("Congratulations!!! The cave opens up a hidden wall that reveals unmeasurable treasure. You reach out your arms to grab it all and fall off of your dads porch. The end ;P");
        	Game();
    	}
    	else if(game == "no i dont" || game == nid){
         	alert("flustered and angry at your own stupidity you leave the cave discouraged.");
              	Cat();
    	}
	}
	else if(markings == "look around" || markings == "la"){
    	var yelloweyes = prompt("The cave just had more markings of a mad man... However you did find a curtain covering a certain wall \n - move the curtain \n - leave the cave");
    	if (yelloweyes == "leave the cave" || yelloweyes == "ltc"){
        	alert("It could have been a smart move to leave the cave now before you moved that curtain I mean who knows what was in there");
        	Cat();
    	}
    	else if(yelloweyes == "move the curtain" || yelloweyes == "mtc"){
        	alert("Moving the curtain reveals a crazy yellow drawing of cats eyes. On the bottom of the drawing is a surprisingly legible writing saying, Go for the eyes! always the eyes. frightened by this you leave the cave hoping to soon forget about it");
        	Cat();
    	}
	}
}
    
function Cat(){
	alert("Seeing the cave makes you feel defeated");
	alert("You are lost in the forest...");
	var lost = prompt("Seeing as your lost there is not much for you to do. You can look around or pick a direction and start walking \n - look around \n - pick a direction");
	if(lost == "pick a direction" || lost == "pad"){
    	alert("You pick a random direction and start walking. In about an hour you find yourself lost again... The funny thing is you are right back to where you started...");
    	Cat();
	}
	else if(lost == "look around" || lost == "la"){
    	alert("looking around you see some pretty alarming things... There are claw marks placed on certain trees. It's almost like a perfectly placed pathway. Seeing this you decide to follow.");
    	alert("You start to hear music... A Tik... Tok... Tik... Tok... All the time... After about an hour of this ongoing noise it's all you can hear. You can feel the thumping of the tik tok through your head. You start to get disy... You feel liquid running down the side of your head.");
    	alert("Putting your hand up to feel the liquid sends you into shock. You feel blood dripping from your ear. You crash with a loud thud.");
    	alert("	");
    	alert("	");
    	alert("	");
    	var catslaugh = prompt("You wake in a new part of the forest... You here laughter. It's more of a cackle but laughter nevertheless. The good news is the Tik Tok is gone! You start to get back to your senses. You stand up on your own two feet and look around. You can see a smile in the trees. Soon after a tail falling from a slowly fading in body. You quickly make it out to be a massive cat! It cackles it's terrifying laugh and snarls at you and quickly pouncess towards you! \n - go for the head \n - go for the tail ");
    	if(catslaugh == "go for the head" || catslaugh == "gfth" || catslaugh == "go for the tail" || catslaugh == "gftt"){
        	alert("Going for the cat was a fatal flaw... He gets you with its large claws that tear through your gut with ease... Bleeding out the cat just sits there and laughs... You feel like you can hear it under its breath say :go for the eye: Game over...");
        	Cat();
    	}
    	else if(catslaugh == "go for the eye" || catslaugh == "eye" || catslaugh == "eyes" || catslaugh == "cats eyes" || catslaugh == "go for the eyes" || catslaugh == "go for the cats eye" || catslaugh == "go for the cats eyes"){
        	alert("Thank goodness you were able to pick up on the signs! You get the cat right in it's only good working eye. The cat un stunned steps back. The cats eye rolls out of it's head and onto your foot. You hear the cat whisper something. I'll see you again deerie... Good luck with the queen... He drops a invitation to the queens great tournament. He also showed you the way out of the forest.");
              	Options();
       	 
    	}
	}
}
    
function Options(){
<<<<<<< HEAD
    var catseye = prompt("\n - take eyeball \n - leave the forest");
    switch(catseye){
        case "leave the forest":
        case "ltf":
        alert("after a long day in the forest it's nice to have finally gotten out. You decide to head to the tournament with the directions from the invite.");
        Tournament();
            break;
    }
    if(catseye == "take eyeball" || catseye == "te"){
              alert("You take the eyeball");
                  inventory.eyeball += 1;
                  Options();
    }
            
    }
=======
	var catseye = prompt("\n - take eyeball \n - leave the forest");
	if(catseye == "leave the forest" || catseye == "ltf"){
    	alert("after a long day in the forest it's nice to have finally gotten out. You decide to head to the tournament with the directions from the invite.");
    	Tournament();
	}
	else if(catseye == "take eyeball" || catseye == "te"){
          	alert("FIGURE THIS OUT");
              	inventory.eyeball += 1;
              	Options();
	}
}
>>>>>>> master

function Fancy(){
	alert("Suddenly a whole Lion just picked you up on your back and started to run with the rest of the crowd. You weren't scared you were to fascinated with how everybody looked. Each one weird and crazy you couldn't help but look.");
	var castle = prompt("The lion and crowd were all headed to a castle. Looking back you couldn't tell that there was even a hallway there it was just gone. The lion asked if you wanted him to take you straight to the tournament or if you would rather get there on your own. \n - go with the lion \n - explore on your own");
	if(castle == "go with the lion" || castle == "gwtl" || castle == "go with the lion"){
    	alert("way to take the lazy way all the way to the tournament... It must feel nice to skip a huge portion of this game I worked on...");
    	Tournament();
	}
	else if(castle == "explore on your own" || castle == "eoyo" ){
    	alert("The lion lays down to make it easier for you to climb off of his back to explore the castle on your own.");
    	alert("The castle was cold and felt much like the fancy fall way. There were red carpeting and red banners hanging down from the ceiling. At one end you could see a painting of a queen. She clearly had an obsession with the color red being as that's every color she was wearing. She did however look quite fair just really pale like paper white.");
    	var castlehall = prompt("You notice to directions to go. You can take the stairs up which seems to only lead to one room or you can take a glass door which seems to lead to a floral area. \n - stairway \n - glass door");
    	if(castlehall == "stairway" || castlehall == "s"){
        	alert("The stairs actually were harder to walk up than they should have been. The stairs started to move around with each step you took. Sometimes you had to completely leap up to make it to the next step.");
        	alert("Finally making it to the top of the stairway you notice that it opens up to a huge room.");
        	Upstairs();
    	}
    	else if(castlehall == "glass door" || castlehall == "gd"){
        	alert("You open the glass door and see the bigger picture. There is a house in the middle of all the flowers and other varias floral things. There is a nice beautiful fountain of stone fish spitting water out of there mouths. Upon closer examination you see that the heads of the fish are actually bee heads. The whole thing looks a lot weirder now.");
        	var house = prompt("The house looked as if it was a tree that they carved a house out of. It was lush with greens and pinks but more importantly there was a trap door behind the house. \n - go through the front door \n - take the trap door");
        	if(house == "take the trap door" || house == "tttd"){
            	Trapdoor();
        	}
        	else if(house == "take the front door" || house == "ttfd"){
            	Frontdoor();
        	}
    	}
	}
}
    
function Trapdoor(){
	alert("The door opened with a loud creek. You heard hustling underneath. The latter was strange. It was made in a way that you had to use each one of your limbs to slowly scale down the latter. It was a long way down to...");
	var madman = prompt("As soon as you hit the ground you heard a chattering of teeth. Than came out a very handsome man with a fancy hat on who said in a skittish voice. Sorry sorry please come back later the hats not done the hats just not done yet! The man with each passing word would scoot back farther from you. He seemed way scared of you than you were of him. \n - examine the man \n - yell at the man");
	if(madman == "yell at the man" || madman == "yatm"){
    	alert("The man shrieked and hid behind a stool. Still clearly visible to him you kept yelling. Yelling louder and louder much of it not even making sense. The man soon noticed and got the courage to charge you. He shoved you into the stone wall behind you. Killing you almost instantly... The madman than sat and cried. Game over you horrible monster");
    	Trapdoor();
	}
	else if(madman == "examine the man" || madman == "etm"){
    	alert("The madman was definitely crazy and very frightened of you. You noticed that he had a wooden left arm that didn't seem completely functionable. He was also wearing a chain around his neck with a bright yellow cats eye on it. The man was very tall and starch white much like the queen except this one seemed a lot less natural. Almost like he used makeup.");
    	var pacify = prompt("The closer you stepped to the man the easier it was to see you. The man saw that you were someone he never met before and grew a bit of courage. He looked more comfortable than he did before he addressed you and told you that he was a hatter. In fact he went on for about a half hour about how he was the best hatter but everyone thought of him as to mad to truly appreciate his talent. The only person who truly appreciated him was the red queen but he wanted more. \n - red queen \- weird ladder");
    	if(pacify == "weird ladder" || pacify == "wl"){
        	alert("What the weird later? That's what you are interested in!? Fine fine whatever it doesn't matter... No one wants to hear the long story of my fearsome battle with the cat of the woods... The weird ladder was made so i couldn't leave. If you didn't see already my whole left arm is a barely functioning wooden arm that I would normally use to climb out. But sense the ladder requires that you use all of your limbs I just simply can't leave. However I am permitted to leave but only for the tournament that the queen holds annually. Speaking about that you better get going it should start soon! You know if you're caught outside of the event you are sentenced to death...");
        	alert("The madman quickly shows you to the ladder and tells you where to go to the tournament. You quickly hurry down there.");
        	Tournament();
    	}
    	else if(pacify == "red queen" || pacify == "rq"){
        	alert("Oh you don't know the red queen? the man said. Well that actually isn't too much of a surprise because the whole kingdom has been demanded to never speak of her. Punishable by death... Seeing as I'm already trapped down here and my only role is to make hats for her... I don't really care about the consequences...");
        	alert("The queen is this evil tyrant who asks like shes caring and ccompassionate but she does cruel things like trap a hatter in a basement. Or randomly execute people. She holds all the power and if anybody dare stand up to her they are sure to meet their demise... She is evil. It is said that she is so uptight that the blood from her body literally leaked out of her leaving her paperwhite. She than commanded anyone in her castle to paint themselves white in hopes that nobody would notice the whiteness of her. She's evil! but hey what are you going to do?");
        	alert("Wait a second... You're Not a spy are you!? You weren't sent here to see how I would handle this whole situation were you?? Listen I didn't mean anything about anything what do I know I'm clearly mad... haha you best be on your way now... Besides the games are about to start so please leave.");
        	alert("He pushes you towards the latter and gives you directions to the tournament.");
        	Tournament();
    	}
	}
}
    
function Frontdoor(){
	alert("The front door had a wooden sign draped over the door saying: The Huntress. You knock and nobody comes. You do however hear a high pitched come in.");
	var mouse = prompt("As you turn the handle and walk into this tree house a tiny brown mouse jumps at you! \n - attack the mouse \n - scream");
	if (mouse == "attack the mouse" || mouse == "atm"){
    	alert("The mouse pulls out a sword and before you could even get your fists up takes your head clean off... Game over");
    	Frontdoor();
	}
	else if(mouse == "scream" || mouse == "s"){
    	alert("The mouse stopped her attack and instead just looked at you. She seemed disappointed.");
    	alert("Why did you come in here to just be a baby? Don't you know who I am? I am the queens executioner! I do not have to deal with you. please leave my house. If I dare catch you outside of the tournament when it starts I'll kill you where you stand!");
    	var executioner = prompt("\n - continue pushing the mouse \n - leave to the tournament");
    	if(executioner == "continue pushing the mouse" || executioner == "cptm"){
        	alert("So why did you " +playerName+ " decide to pusht the executioner? Doesn't that feel like a bad idea? You must be pretty sadistic to pick this death. The mouse doesn't put up with your nonsense and kills you instantly... You deserved this one. Game over");
        	Frontdoor();
    	}
    	else if(executioner == "leave to the tournament" || executioner == "lttt"){
        	alert("You realize that you don't know the directions to the tournament so you ask to be shown the way and the executioner begrudgingly shows you the path");
        	Tournament();
    	}
	}
}

function Upstairs(){
	alert("As it turns out you stumbled on a very important thing! You look into the large room and clearly see the lion from earlier! You have made it to the tournament and it looks like the whole kingdom is here the room is packed!");
	Tournament();
}
    
function Tournament(){
	alert("Welcome all to the Tournament!!! Yells what you assume to be the queen because of her looks and the crown above her head. The entire room goes silent at the queens shrill voice.");
	alert("It appears like everyone you met from this place is here. You can even see a freaky looking smile above all the people.");
	var challenger = prompt("The queen starts to talk again saying, Now to pick our contestants for the tournament! But first is there anyone in the crowd who does not know how the tournament works?? \n - raise your hand \n - stay silent");
	if(challenger == "stay silent" || challenger == "ss"){
    	alert("Fine than if everyone knows how the games work than we will press forward and pick our loser... * she starts running her hands through a glass jar to pick a random card out* The card read... " +playerName+" ");
    	End();
	}
	else if(challenger == "raise your hand" || challenger == "ryh"){
    	alert("Oh I see that " +playerName+ " has never been to one of these! Which we all know is punishable by death! And seeing that you aren't of the age of 1 that means you have been dodging this tournament for years! Now everyone in this room is very angry with you so it's clear to me that you must be the loser! a If you are so inclined to know how the games are played to contestants are places into an arena. The two are set up to duel to the death. The all time champion is pre determined to win the duel and the new challenger is pre decided to lose and die. So congratulations you just got number one ticket into the arena! I would wish you luck but there is no way for you to possibly win this.");
    	alert("Let's just pretend that you somehow do win the duel. Not only would you be playing against the rules but my army of guards would be ordered to kill you. It's easier to just get on your knees and beg that I pass this years tournament than actually fighting me.");
    	End();
	}
}   

function End(){
	alert("Being placed in the tournament really puts it all into perspective for you. You see that there is no way to win. They put you in unarmed where as the queen is seriously decked out with weapons. It is also clear to you that there are the queens guards all around the arena.");
	var cavein = prompt("So what do you want to do? It's a lose lose either way.... Pick your poison. \n - fight the queen \n - give up");
	if(cavein == "give up" || cavein == "gu"){
    	alert("To know suprise the queen walked over with her grate long sword and swung directly through you. Slicing off your head completely... Game over...");
    	End();
	}
	else if(cavein == "fight the queen" || cavein == "ftq"){
    	alert("The queen starts walking towards you and you shoot her a fierce look with a burning fire! The queen taken back by this is only angrier with you. She starts walking faster. Her sword sparking against the floor as she walks. She yells across the floor GIVE UP!!!");
    	var giveup = prompt("\n - give up now \n - keep going");
    	if(giveup == "give up now" ||giveup == "gun"){
        	alert("To know suprise the queen walked over with her grate long sword and swung directly through you. Slicing off your head completely... Game over...");
        	End();
    	}
    	else if(giveup == "keep going" || giveup == "kg"){
        	alert("The queen fuming mad starts to dead sprint at you. Her sword above her head ready to come crashing down on you. You suddenly feel the power of the crowd as they all start cheering for you! Every single one of them chanting "  +playerName+ " " +playerName+ " " +playerName+ " Your legs start running at her full speed. You don't feel like you are yourself anymore but more like you are everyone in the kingdom. Everyone is on the edge of there seat as the destined loser picks themselves up and charges the queen! The queen angered by this starts to yell at you to stop!");
        	alert("Her pacing starts to slow down. The sword is dropped to her side still ready for a final blow but no longer above her head. She yells in a shrill voice, STOP IT SUBMIT TO ME! I AM YOUR QUEEN LET ME WIN!");
        	var winningcard = prompt("\n - submit to the queen \n - fight");
        	if(winningcard == "submit to the queen" || winningcard == "sttq"){
            	alert("The entire stadium losses its enthusiasm when they watch you submit to the queens demand... She fishes the tournament champion again... Game over");
            	End();
        	}
        	else if(winningcard == "fight" || winningcard == "f"){
            	alert("You charge the queen with the full strength of the stadium it feels as if even the guards are on your side! You and the queen are almost upon each other... You charge her with you shoulder and hit her right in the gut. Knocking her back and making her fumble she... she.. dropped the sword and tripped and land right on her own sword. It got her straight in the heart.");
            	Winner();
        	}
    	}
	}
}

function Winner(){
	alert("The crowd all gasps with excitement! The guards all fumble over there own weapons wonder about what to do. One of them asks if they should kill you but another one cuts him off and asks who is going to order you too? Releasing this the guards all surround you and ask you what they should do. The crowd started cheering you as there new ruler.");
	var ruler = prompt("Suddenly everyone stops moving or making sound everything just stops. Time itself feels frozen. Suddenly a laughing smile appears in front of you. It reveals itself to be the cat of the woods and it says, " +playerName+ " you have come a long way. Far enough to even become king or queen of this kingdom! It says this all with a grin and its body disappearing and appearing at random. All you need to do is make the choice! Stay and rule this mad world? Or leave back to your hometown back to your dads porch where this all started? \n - stay as ruler \n -return to your normal life");
	if(ruler == "stay as ruler" || ruler == "sar"){
    	alert("Deciding to see this mad world to an end is very noble of you. You live the rest of your life as king/queen of the land. solving more of the civil problems in the land and helping those you care about. Congratulations! The end.");
    	var Didyou = confirm("Did you like my game?");
    	if(Didyou){
        	alert("Thank you! Than you probably wouldn't mind running through it one more time.");
        	Game();
    	}
    	else{
        	alert("Than you get a bad ending... Suddenly" +playerName+ " dies and nobody is there to help. It's a slow and painful death... Game over.");
    	}
	}
	else if(ruler == "return to your normal life" || ruler == "rtynl"){
    	alert("You wake up on your dad's porch. Everything just feels nice. In the grass in front of you you see a nice cute little bunny nibbling on a carrot. In the flower bed you feel like you can see a king of ants on top of the old ant hill. In the woods behind the bushes you could have sworn you saw a floating smile above one of the branches. Congratulations. The end.");
    	var Didyoulike = confirm("Did you like my game?");
    	if(Didyoulike){
        	alert("Thank you! Than you probably wouldn't mind running through it one more time.");
        	Game();
    	}
    	else{
        	alert("Than you get a bad ending... Suddenly" +playerName+ " dies and nobody is there to help. It's a slow and painful death... Game over.");
    	}
	}
}
}
