var user = prompt("You're a great knight on a quest to complete the kings journey and you stumble upon a dragon's nest! OH NO! What do you do? FIGHT, RUN, or TALK it out?").toLowerCase();

switch(user) {
    case 'fight':
        var smart = prompt("Are you smart, mighty knight?").toLowerCase();
        var strong = prompt("Are you strong, courageous knight?").toLowerCase();
            if(smart === 'yes' || strong === 'yes'){
            alert("You are more than enough to slay this ugly demon! Choose you attack method!");
            }
            else {
                alert("You're neither, maybe you should've stayed home today then.");
            }
        var attack1 = prompt("Great! You chose to fight the mighty dragon! How do you plan to attack the dragon? Cut off it's HEAD? Slay it with your mighty FIST? or SHOOT him?").toLowerCase();
        if(attack1 === 'head'){
            alert("You swiped the demons head off with one swing.WOW! Pure show of amazement and talent! You defeated the mighty dragon!");
        }
        else if(attack1 === 'fist') {
            alert("You courageous person you; You couldn't choose to use the sword...Wait...You actually killed that dragon with you bare hands...Can we be friends? Or at least not enemies...");
        }
        else if(attack1 === 'shoot'){
            var gun = prompt("Choose you type of gun soldier!(Gatling or Scar)").toLowerCase();
            var gatling = true;
            var scar = true;
            if (gun === 'gatling' || gun === 'scar'){
                alert("Guns have not yet been invented you cheapskate. You could've at least used a sword but I guess you like the easy way out.");
            }
        }
        else {
            console.log("You missed completely.");
        }
        break;
    case 'run':
        alert("Wow. What a coward. You got away safely and you better be happy that you did because I wish that the dragon would've scooped you up and swallowed you whole. Maybe next time...");
        break;
    case 'talk':
        var talk = prompt("What do you want to say to the dragon?").toLowerCase;
            while(talk){
                alert("What did you think talking to a dragon would do? Maybe you should've brought some coffee and chocolate too. I assume you know that the dragon didn't accept you invitation to talk so you are dead now. Good job...");
                talk = false;
            }
        break;
    default:
        alert("Are you even speaking proper English my good knight? Try again and let's move on!");
}

var con1 = prompt("Fantastic! You have slayed the dragon and we must now continue our journey. Which direction would the mighty strong and brilliant knight traveler?(North, East, South, West)").toLowerCase();

switch(con1) {
    case 'north':
        alert("To the North we shall journey!");
            var rid1 = prompt("Time to answer the riddle and test your knowledge mighty knight! I Am The Beginning Of The End, And The End Of Time And Space. I Am Essential To Creation, And I Surround Every Place. What am I?").toLowerCase();
                if (rid1 === 'the letter e' || 'e') {
                        alert("Right you are, and also mighty intelligent! You see a glimmer of light coming from the ground, you glance down and see a beautiful diamond plated double edged sword!");
                        var sword = prompt("Would you like to take or leave the glimmering sword?(Yes or No)").toLowerCase();
                            if (sword === 'yes'){ 
                                alert("Sword taken"); }
                            else {
                                alert("You chose to leave the sword hmm... I hope that doesn't come in handy later on."); }
                            }
                    else {
                        alert("No, you answered incorrectly.");
                     }
        break;
    case 'east':
        alert("East it is!");
            alert("Be careful great knight, I have always heard that bad things happen when settlers would travel East. Let's watch our backs and make sure that we do not become someone or somethings lunch!");
                var choice1 = prompt("As you walk through the thick wooded forest, you begin to notice that the ground is far and deep, the grass is not green but red, and the tree's around you seem to be noticing you. You come upon two paths, and you notice that two roads split in the wood, which do you take? The road that more grassy and wanted wear, or the road less traveled by?(Grass, or Less)").toLowerCase();
                    if (choice1 === grass) {
                        alert("Some like not the road of trouble but the road of ease, your time will come in which you will endure the consequences of your decision."); }
                        else {
                            alert("Even though this will be a long and treacherous road, you will survive to live another day, and live to be the most courageous knight in the kingdom. You my dear friend, will live to see this decision prosper and will have riches and wealth unimaginable! You are a true knight!");
                        }
        break;
    default:
        alert("I'm sorry my knight, try again."); 
}