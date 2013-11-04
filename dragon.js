var user = prompt("You're a great knight on a quest to complete the kings journey and you stumble upon a dragon's nest! OH NO! What do you do? FIGHT, RUN, or TALK it out?").toLowerCase();

switch(user) {
    case 'fight':
        var smart = prompt("Are you smart, mighty knight?").toLowerCase();
        var strong = prompt("Are you strong, courageous knight?").toLowerCase();
            if(smart === 'yes' || strong == 'yes'){
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
            alert("You courageous person you; You couldn't choose to use the swor...Wait...You actually killed that dragon with you bare hands...Can we be friends? Or at least not enemies...");
        }
        else if(attack1 === 'shoot'){
            var gun = prompt("Choose you type of gun soldier!(Gatling or Scar)").toLowerCase();
            var gatling = true;
            var scar = true;
            if (gun === 'gatling' || gun === 'scar'){
                alert("Guns have not yet been invinted you cheapskate. You could've at least used a sword but I guess you like the easy way out.");
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