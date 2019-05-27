const buttons = document.getElementsByClassName("button-click");

let buttonText = 1; 
function clickme () { 
    buttonText += 1; 
    buttons[0].innerHTML = buttonText;
	buttons[1].innerHTML = buttonText;
}

let buttonText10 = 10; 
function clickme10 () { 
    buttonText10 += 10; 
    buttons[2].innerHTML = buttonText10;
	buttons[3].innerHTML = buttonText10;
}

let buttonText100 = 100; 
function clickme100 () { 
    buttonText100 += 100; 
    buttons[4].innerHTML = buttonText100;
	buttons[5].innerHTML = buttonText100;
}

let buttonText1000 = 1000; 
function clickme1000 () { 
    buttonText1000 += 1000; 
    buttons[6].innerHTML = buttonText1000;
	buttons[7].innerHTML = buttonText1000;
}

let buttonText10000 = 10000; 
function clickme10000 () { 
    buttonText10000 += 10000; 
    buttons[8].innerHTML = buttonText10000;
	buttons[9].innerHTML = buttonText10000;
}

console.log('leah' + 1);